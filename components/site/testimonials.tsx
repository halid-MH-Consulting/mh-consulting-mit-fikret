import type { Dictionary } from '@/lib/i18n'
import { Reveal } from './reveal'

/*
  Die Namen sind noch nicht besetzt. Das Layout ist so gebaut, dass echte
  Zitate spaeter nur eingetragen werden muessen, und die Kennzeichnung unten
  verhindert, dass die Sektion versehentlich mit Platzhaltern live geht.
*/
export function Testimonials({ t }: { t: Dictionary }) {
  return (
    <section className="relative py-24 md:py-32" aria-labelledby="testimonials-heading">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="max-w-2xl">
          <h2 id="testimonials-heading" className="text-h2">
            {t.testimonials.heading}
          </h2>
        </Reveal>

        {/* Zitate ohne Kartenrahmen: die Anfuehrung traegt, nicht der Kasten */}
        <div className="mt-14 grid gap-x-10 gap-y-12 md:grid-cols-3">
          {t.testimonials.quotes.map((item, i) => (
            <Reveal as="div" key={i} delay={i * 90}>
              <figure className="flex h-full flex-col border-t border-border pt-6">
                <blockquote className="flex-1 text-lg leading-relaxed">
                  <p>&ldquo;{item.quote}&rdquo;</p>
                </blockquote>
                <figcaption className="mt-6 text-sm text-muted-foreground">{item.role}</figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <p className="mt-12 text-xs text-muted-foreground">{t.testimonials.note}</p>
      </div>
    </section>
  )
}
