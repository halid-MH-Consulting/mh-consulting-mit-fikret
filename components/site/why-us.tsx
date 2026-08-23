import {
  Gem,
  Globe,
  BadgeCheck,
  HeartHandshake,
  MessageSquareShare,
  LineChart,
} from 'lucide-react'
import { Reveal } from './reveal'

const POINTS = [
  {
    icon: Gem,
    title: 'Quality over quantity',
    body: 'We measure creators by trust and fit, never by follower counts. Fewer, better partnerships that actually convert.',
    span: 'md:col-span-2',
  },
  {
    icon: Globe,
    title: 'International creator network',
    body: 'A curated global roster spanning the destinations and audiences your brand cares about.',
    span: '',
  },
  {
    icon: BadgeCheck,
    title: 'Carefully vetted creators',
    body: 'Every partner is screened for authenticity and audience quality before we recommend them.',
    span: '',
  },
  {
    icon: LineChart,
    title: 'Performance-driven strategy',
    body: 'Campaigns built around business outcomes and transparent reporting — not vanity metrics.',
    span: 'md:col-span-2',
  },
  {
    icon: MessageSquareShare,
    title: 'Transparent communication',
    body: 'You always know what is happening, why, and what it is delivering.',
    span: '',
  },
  {
    icon: HeartHandshake,
    title: 'Dubai based, European expertise',
    body: 'Global reach with the rigour and standards of European marketing experience.',
    span: 'md:col-span-2',
  },
]

export function WhyUs() {
  return (
    <section id="why" className="relative py-24 md:py-32" aria-labelledby="why-heading">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="max-w-2xl">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-neon">
            Why MH Consulting
          </p>
          <h2 id="why-heading" className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            What makes us different.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {POINTS.map((point, i) => {
            const Icon = point.icon
            return (
              <Reveal
                key={point.title}
                delay={(i % 3) * 80}
                className={point.span}
              >
                <article className="group relative h-full overflow-hidden rounded-3xl border border-border bg-card/40 p-7 transition-colors duration-300 hover:border-electric/40">
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                      background:
                        'radial-gradient(400px circle at 50% 0%, color-mix(in oklch, var(--electric) 12%, transparent), transparent 70%)',
                    }}
                  />
                  <div className="relative">
                    <span className="flex size-11 items-center justify-center rounded-xl border border-border bg-background/60 text-electric">
                      <Icon className="size-5" aria-hidden />
                    </span>
                    <h3 className="mt-5 text-lg font-semibold">{point.title}</h3>
                    <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">
                      {point.body}
                    </p>
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
