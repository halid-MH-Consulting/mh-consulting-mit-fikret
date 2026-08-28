import { Reveal } from './reveal'

/*
  Die Namen sind noch nicht besetzt. Das Layout ist so gebaut, dass echte
  Zitate spaeter nur eingetragen werden muessen, und die Kennzeichnung unten
  verhindert, dass die Sektion versehentlich mit Platzhaltern live geht.
*/
const TESTIMONIALS = [
  {
    quote:
      'MH Consulting completely changed how we think about creators. Instead of one-off posts, we now have partners who genuinely represent our destination year-round.',
    role: 'Head of Marketing, Tourism Board',
  },
  {
    quote:
      'The vetting process is unmatched. Every creator they brought us actually moved bookings, not just impressions.',
    role: 'Growth Lead, Travel App',
  },
  {
    quote:
      'Transparent, strategic and genuinely invested in results. It feels like an extension of our own team.',
    role: 'CMO, eSIM Company',
  },
]

export function Testimonials() {
  return (
    <section className="relative py-24 md:py-32" aria-labelledby="testimonials-heading">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="max-w-2xl">
          <h2 id="testimonials-heading" className="text-h2">
            Trusted by brands that think long term.
          </h2>
        </Reveal>

        {/* Zitate ohne Kartenrahmen: die Anfuehrung traegt, nicht der Kasten */}
        <div className="mt-14 grid gap-x-10 gap-y-12 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal as="div" key={i} delay={i * 90}>
              <figure className="flex h-full flex-col border-t border-border pt-6">
                <blockquote className="flex-1 text-lg leading-relaxed">
                  <p>“{t.quote}”</p>
                </blockquote>
                <figcaption className="mt-6 text-sm text-muted-foreground">{t.role}</figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <p className="mt-12 text-xs text-muted-foreground">
          Quotes are unattributed until the named references are confirmed. Add the names, or
          remove this section, before launch.
        </p>
      </div>
    </section>
  )
}
