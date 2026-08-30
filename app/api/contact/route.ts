import { Resend } from 'resend'

/*
  Serverseitige Verarbeitung des Kontaktformulars.

  Empfaenger und Absender stehen ausschliesslich in Umgebungsvariablen. Der
  Browser schickt nur die Angaben des Besuchers; welche davon in From, To
  oder Reply-To landen, entscheidet allein dieser Code. Ein Feld "to" im
  Rumpf wuerde schlicht ignoriert - es wird nirgends gelesen.
*/

export const runtime = 'nodejs'

/*
  Laengengrenzen. Sie sind grosszuegig genug fuer echte Anfragen und eng
  genug, dass niemand ueber das Formular Megabytes in ein Postfach schiebt.
  Geprueft wird nach dem Trimmen, sonst zaehlt Leerraum mit.
*/
const LIMITS = {
  name: 120,
  email: 200,
  company: 160,
  budget: 80,
  message: 5000,
} as const

// Bewusst grosszuegig, wie schon im Formular: strengere Muster sperren
// gueltige Adressen aus, und die Zustellbarkeit entscheidet ohnehin Resend.
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

type Payload = {
  name: string
  email: string
  company: string
  budget: string
  message: string
}

function text(value: unknown): string {
  return typeof value === 'string' ? value.trim() : ''
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

/*
  Zeilenumbrueche muessen nach dem Maskieren zu <br> werden, nicht davor -
  sonst maskiert der zweite Durchlauf die eben erzeugten spitzen Klammern.
*/
function paragraph(value: string): string {
  return escapeHtml(value).replace(/\r?\n/g, '<br>')
}

function plainBody(p: Payload): string {
  return [
    `Name:     ${p.name}`,
    `Email:    ${p.email}`,
    `Company:  ${p.company || '—'}`,
    `Budget:   ${p.budget || '—'}`,
    '',
    'Message:',
    p.message,
  ].join('\n')
}

function htmlBody(p: Payload): string {
  const row = (label: string, value: string) =>
    `<tr><td style="padding:4px 16px 4px 0;color:#666;vertical-align:top">${label}</td>` +
    `<td style="padding:4px 0">${escapeHtml(value) || '&mdash;'}</td></tr>`

  return [
    '<div style="font-family:system-ui,sans-serif;font-size:14px;line-height:1.6;color:#111">',
    '<table style="border-collapse:collapse">',
    row('Name', p.name),
    row('Email', p.email),
    row('Company', p.company),
    row('Budget', p.budget),
    '</table>',
    '<p style="margin:20px 0 6px;color:#666">Message</p>',
    `<p style="margin:0;white-space:pre-wrap">${paragraph(p.message)}</p>`,
    '</div>',
  ].join('')
}

export async function POST(request: Request) {
  let body: unknown
  try {
    body = await request.json()
  } catch {
    return Response.json({ ok: false, error: 'invalid_request' }, { status: 400 })
  }

  if (typeof body !== 'object' || body === null) {
    return Response.json({ ok: false, error: 'invalid_request' }, { status: 400 })
  }

  const raw = body as Record<string, unknown>

  /*
    Honigtopf: ein im Formular unsichtbares Feld, das ein Mensch nie
    ausfuellt. Ist es belegt, endet die Anfrage hier - mit 200 und ohne
    Mail, damit ein Skript nicht am Statuscode ablesen kann, dass es
    aufgeflogen ist.
  */
  if (text(raw.company_website).length > 0) {
    return Response.json({ ok: true })
  }

  const name = text(raw.name)
  const email = text(raw.email)
  const company = text(raw.company)
  const budget = text(raw.budget)
  const message = text(raw.message)

  const invalid =
    name.length < 2 ||
    name.length > LIMITS.name ||
    email.length > LIMITS.email ||
    !EMAIL_PATTERN.test(email) ||
    company.length > LIMITS.company ||
    budget.length > LIMITS.budget ||
    message.length < 10 ||
    message.length > LIMITS.message

  if (invalid) {
    return Response.json({ ok: false, error: 'invalid_request' }, { status: 400 })
  }

  const apiKey = process.env.RESEND_API_KEY
  const from = process.env.CONTACT_FROM_EMAIL
  const to = process.env.CONTACT_TO_EMAIL

  if (!apiKey || !from || !to) {
    // Nur benennen, was fehlt - niemals einen Wert ausgeben.
    console.error(
      'contact: missing configuration',
      [!apiKey && 'RESEND_API_KEY', !from && 'CONTACT_FROM_EMAIL', !to && 'CONTACT_TO_EMAIL']
        .filter(Boolean)
        .join(', '),
    )
    return Response.json({ ok: false, error: 'unavailable' }, { status: 500 })
  }

  const payload: Payload = { name, email, company, budget, message }

  try {
    const { error } = await new Resend(apiKey).emails.send({
      from,
      to,
      // Antworten gehen an den Besucher, versendet wird aber unter der
      // eigenen verifizierten Domain - sonst scheitert die Zustellung an
      // SPF und DKIM.
      replyTo: email,
      subject: `New website enquiry from ${name}`,
      text: plainBody(payload),
      html: htmlBody(payload),
    })

    if (error) {
      console.error('contact: resend rejected the message', error.name, error.message)
      return Response.json({ ok: false, error: 'unavailable' }, { status: 502 })
    }
  } catch (cause) {
    console.error('contact: could not reach resend', cause instanceof Error ? cause.message : cause)
    return Response.json({ ok: false, error: 'unavailable' }, { status: 502 })
  }

  return Response.json({ ok: true })
}
