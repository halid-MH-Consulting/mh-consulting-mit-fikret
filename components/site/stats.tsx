import { Reveal } from './reveal'
import { CountUp } from './count-up'

const STATS = [
  { value: 30, suffix: '+', label: 'Countries reached' },
  { value: 120, suffix: '+', label: 'Campaigns delivered' },
  { value: 450, suffix: '+', label: 'Vetted creators' },
  { value: 60, suffix: '+', label: 'Brand collaborations' },
]

export function Stats() {
  return (
    <section
      className="relative overflow-hidden border-y border-border bg-navy/40 py-20 md:py-24"
      aria-labelledby="stats-heading"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-electric/50 to-transparent"
      />
      <div className="mx-auto max-w-6xl px-6">
        <h2 id="stats-heading" className="sr-only">
          MH Consulting by the numbers
        </h2>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 100} className="text-center md:text-left">
              <div className="text-5xl font-semibold tracking-tight text-glow-electric md:text-6xl">
                <CountUp end={stat.value} suffix={stat.suffix} />
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{stat.label}</p>
            </Reveal>
          ))}
        </div>
        <p className="mt-10 text-center text-xs text-muted-foreground md:text-left">
          Placeholder figures — replace with your live performance data.
        </p>
      </div>
    </section>
  )
}
