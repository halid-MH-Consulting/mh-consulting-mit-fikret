import type { Dictionary } from '@/lib/i18n'
import { Reveal } from './reveal'
import { CountUp } from './count-up'

/*
  Schalter fuer die Zahlenreihe.

  Die vier Werte sind Platzhalter, wie der Hinweis unter ihnen selbst
  einraeumt. Bis belastbare Fallstudien und echte Leistungsdaten vorliegen,
  bleibt die Sektion aus. Sobald sie da sind: hier auf true stellen, die
  Zahlen in VALUES eintragen und t.stats.note anpassen oder streichen -
  mehr ist nicht noetig, der Rest der Sektion steht unveraendert bereit.

  Ausgeblendet rendert die Komponente gar nichts. Ihr Abstand steckt in der
  Sektion selbst (py-20), nicht in einem Aussenabstand, deshalb bleibt an
  ihrer Stelle keine Luecke zurueck.
*/
const SHOW_STATS_SECTION = false

// Zahlen sind sprachunabhaengig, nur die Beschriftungen kommen aus dem
// Woerterbuch. Reihenfolge entspricht t.stats.items.
const VALUES = [
  { value: 30, suffix: '+' },
  { value: 120, suffix: '+' },
  { value: 450, suffix: '+' },
  { value: 60, suffix: '+' },
]

export function Stats({ t }: { t: Dictionary }) {
  if (!SHOW_STATS_SECTION) return null

  return (
    // Dunkler Anker 3 von 4: unterbricht die lange helle Strecke zwischen
    // Karte und Abschluss und gibt den Zahlen mehr Gewicht.
    <section className="surface-dark relative py-20 md:py-24" aria-labelledby="stats-heading">
      <div className="mx-auto max-w-6xl px-6">
        <h2 id="stats-heading" className="sr-only">
          {t.stats.srHeading}
        </h2>
        {/* Zahlenreihe mit Trennlinien statt vier gleicher Kacheln */}
        <dl className="grid grid-cols-2 gap-y-10 md:grid-cols-4">
          {VALUES.map((stat, i) => (
            <Reveal
              as="div"
              key={i}
              delay={i * 90}
              className="px-2 md:border-l md:border-border md:px-8 md:first:border-l-0 md:first:pl-0"
            >
              <dt className="sr-only">{t.stats.items[i]}</dt>
              <dd>
                <span className="block text-4xl font-extrabold tracking-tight tabular-nums md:text-5xl">
                  <CountUp end={stat.value} suffix={stat.suffix} />
                </span>
                <span aria-hidden className="mt-2 block text-sm text-muted-foreground">
                  {t.stats.items[i]}
                </span>
              </dd>
            </Reveal>
          ))}
        </dl>
        <p className="mt-10 text-xs text-muted-foreground">{t.stats.note}</p>
      </div>
    </section>
  )
}
