import { Quote } from 'lucide-react'
import { Reveal } from './reveal'

const TESTIMONIALS = [
  {
    quote:
      'MH Consulting completely changed how we think about creators. Instead of one-off posts, we now have partners who genuinely represent our destination year-round.',
    name: 'Placeholder Name',
    role: 'Head of Marketing, Tourism Board',
  },
  {
    quote:
      'The vetting process is unmatched. Every creator they brought us actually moved bookings — not just impressions.',
    name: 'Placeholder Name',
    role: 'Growth Lead, Travel App',
  },
  {
    quote:
      'Transparent, strategic and genuinely invested in results. It feels like an extension of our own team.',
    name: 'Placeholder Name',
    role: 'CMO, eSIM Company',
  },
]

export function Testimonials() {
  return (
    <section className="relative py-24 md:py-32" aria-labelledby="testimonials-heading">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="max-w-2xl">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-electric">
            What partners say
          </p>
          <h2
            id="testimonials-heading"
            className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl"
          >
            Trusted by brands that think long term.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={i} delay={i * 90}>
              <figure className="group relative flex h-full flex-col rounded-3xl border border-border bg-card/40 p-8 transition-colors duration-300 hover:border-electric/40">
                <Quote className="size-8 text-electric/70" aria-hidden />
                <blockquote className="mt-6 flex-1 text-pretty leading-relaxed text-foreground/90">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-8 border-t border-border pt-5">
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-sm text-muted-foreground">{t.role}</div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
