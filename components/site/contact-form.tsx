'use client'

import { useState } from 'react'
import { ArrowUpRight, CheckCircle2 } from 'lucide-react'

import type { Dictionary } from '@/lib/i18n'
import { cn } from '@/lib/utils'

const EMAIL = 'hello@mhconsulting.ae'

type Errors = Partial<Record<'name' | 'email' | 'message', string>>

/*
  Die Anfrage geht an /api/contact, dort verschickt sie Resend. Der Browser
  kennt weder Empfaenger noch Absender: beide stehen serverseitig in
  Umgebungsvariablen, hier gehen nur die Angaben des Besuchers raus.

  Die Pruefung unten ist reine Bequemlichkeit - sie zeigt Fehler an, bevor
  eine Runde zum Server noetig ist. Verlassen tut sich darauf nichts, der
  Route Handler prueft dieselben Regeln noch einmal.
*/
const ENDPOINT = '/api/contact'

export function ContactForm({ t }: { t: Dictionary }) {
  const f = t.form
  const [errors, setErrors] = useState<Errors>({})
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  function validate(data: FormData): Errors {
    const next: Errors = {}
    const name = String(data.get('name') ?? '').trim()
    const email = String(data.get('email') ?? '').trim()
    const message = String(data.get('message') ?? '').trim()

    if (name.length < 2) next.name = f.errName
    // Absichtlich grosszuegig: strengere Muster sperren gueltige Adressen aus.
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) next.email = f.errEmail
    if (message.length < 10) next.message = f.errMessage
    return next
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)

    const found = validate(data)
    setErrors(found)
    if (Object.keys(found).length > 0) {
      // Nicht ueber [aria-invalid] suchen: setErrors rendert erst nach diesem
      // Durchlauf, das Attribut steht also noch gar nicht im DOM. Stattdessen
      // direkt das erste beanstandete Feld in Formularreihenfolge anspringen.
      const order = ['name', 'email', 'message'] as const
      const firstInvalid = order.find((key) => found[key])
      if (firstInvalid) {
        form.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus()
      }
      return
    }

    setStatus('sending')

    const payload = {
      name: String(data.get('name')),
      email: String(data.get('email')),
      company: String(data.get('company') ?? ''),
      budget: String(data.get('budget') ?? ''),
      message: String(data.get('message')),
      // Honigtopf, siehe unten im Markup.
      company_website: String(data.get('company_website') ?? ''),
    }

    try {
      const response = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const result = await response.json().catch(() => null)
      if (!response.ok || !result?.ok) throw new Error('rejected')

      // Erst zuruecksetzen, wenn wirklich versendet wurde. Bei einem Fehler
      // bleibt alles stehen, damit niemand seine Nachricht neu tippen muss.
      form.reset()
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <div
        role="status"
        className="flex h-full min-h-72 flex-col items-center justify-center rounded-2xl border border-border bg-card/60 p-10 text-center"
      >
        <CheckCircle2 className="size-9 text-primary" aria-hidden />
        <p className="mt-5 text-lg font-bold">{f.sentTitle}</p>
        <p className="measure-tight mt-2 text-sm text-muted-foreground">
          {f.sentBodyBefore}{' '}
          <a
            href={`mailto:${EMAIL}`}
            className="font-semibold text-primary underline underline-offset-4"
          >
            {EMAIL}
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-6 text-sm font-semibold text-muted-foreground underline underline-offset-4 hover:text-foreground"
        >
          {f.sendAnother}
        </button>
      </div>
    )
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="rounded-2xl border border-border bg-card/60 p-6 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label={f.name} name="name" error={errors.name} autoComplete="name" required />
        <Field
          label={f.email}
          name="email"
          type="email"
          error={errors.email}
          autoComplete="email"
          required
        />
        <Field
          label={f.company}
          name="company"
          autoComplete="organization"
          optionalLabel={f.optional}
        />
        <div className="flex flex-col gap-2">
          <label htmlFor="budget" className="text-sm font-semibold">
            {f.budget} <span className="font-normal text-muted-foreground">{f.optional}</span>
          </label>
          <select
            id="budget"
            name="budget"
            defaultValue=""
            className="h-12 rounded-xl border border-input bg-background px-3.5 text-sm text-foreground"
          >
            <option value="">{f.budgetPlaceholder}</option>
            {f.budgets.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-5 flex flex-col gap-2">
        <label htmlFor="message" className="text-sm font-semibold">
          {f.message}
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          aria-invalid={errors.message ? 'true' : undefined}
          aria-describedby={errors.message ? 'message-error' : undefined}
          placeholder={f.messagePlaceholder}
          className={cn(
            'rounded-xl border bg-background p-3.5 text-sm text-foreground placeholder:text-muted-foreground',
            errors.message ? 'border-destructive' : 'border-input',
          )}
        />
        {errors.message && (
          <p id="message-error" className="text-sm text-destructive">
            {errors.message}
          </p>
        )}
      </div>

      {/*
        Honigtopf. Fuer Menschen unsichtbar und unerreichbar: kein Tabstopp,
        keine Autovervollstaendigung, aus dem Sichtfeld geschoben. Wer ihn
        ausfuellt, ist ein Skript - der Route Handler verwirft die Anfrage
        dann stillschweigend.

        Bewusst verschoben statt display:none: einfache Spam-Skripte
        ueberspringen ausgeblendete Felder, ein verschobenes fuellen sie mit.
      */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-[-9999px] h-0 w-0 overflow-hidden"
      >
        <label htmlFor="company_website">Company website</label>
        <input
          id="company_website"
          name="company_website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          defaultValue=""
        />
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="group mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground transition-transform duration-200 hover:-translate-y-0.5 disabled:opacity-70 sm:w-auto"
      >
        {status === 'sending' ? f.sending : f.submit}
        <ArrowUpRight
          className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          aria-hidden
        />
      </button>

      {status === 'error' && (
        <p role="alert" className="mt-4 text-sm text-destructive">
          {f.errSend}
        </p>
      )}

      <p className="mt-4 text-xs text-muted-foreground">
        {f.preferEmailBefore}{' '}
        <a href={`mailto:${EMAIL}`} className="underline underline-offset-4 hover:text-foreground">
          {EMAIL}
        </a>
        .
      </p>
    </form>
  )
}

function Field({
  label,
  name,
  type = 'text',
  error,
  autoComplete,
  required,
  optionalLabel,
}: {
  label: string
  name: string
  type?: string
  error?: string
  autoComplete?: string
  required?: boolean
  optionalLabel?: string
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-sm font-semibold">
        {label}{' '}
        {optionalLabel && <span className="font-normal text-muted-foreground">{optionalLabel}</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        aria-invalid={error ? 'true' : undefined}
        aria-describedby={error ? `${name}-error` : undefined}
        className={cn(
          'h-12 rounded-xl border bg-background px-3.5 text-sm text-foreground placeholder:text-muted-foreground',
          error ? 'border-destructive' : 'border-input',
        )}
      />
      {error && (
        <p id={`${name}-error`} className="text-sm text-destructive">
          {error}
        </p>
      )}
    </div>
  )
}
