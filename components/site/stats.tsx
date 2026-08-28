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
    // Dunkler Anker 3 von 4: unterbricht die lange helle Strecke zwischen
    // Karte und Abschluss und gibt den Zahlen mehr Gewicht.
    <section
      className="surface-dark relative py-20 md:py-24"
      aria-labelledby="stats-heading"
    >
      <div className="mx-auto max-w-6xl px-6">
        <h2 id="stats-heading" className="sr-only">
          MH Consulting by the numbers
        </h2>
        {/* Zahlenreihe mit Trennlinien statt vier gleicher Kacheln */}
        <dl className="grid grid-cols-2 gap-y-10 md:grid-cols-4">
          {STATS.map((stat, i) => (
            <Reveal
              as="div"
              key={stat.label}
              delay={i * 90}
              className="px-2 md:border-l md:border-border md:px-8 md:first:border-l-0 md:first:pl-0"
            >
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <span className="block text-4xl font-extrabold tracking-tight tabular-nums md:text-5xl">
                  <CountUp end={stat.value} suffix={stat.suffix} />
                </span>
                <span aria-hidden className="mt-2 block text-sm text-muted-foreground">
                  {stat.label}
                </span>
              </dd>
            </Reveal>
          ))}
        </dl>
        <p className="mt-10 text-xs text-muted-foreground">
          Placeholder figures — replace with live performance data before launch.
        </p>
      </div>
    </section>
  )
}
