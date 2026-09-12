import { Boxes } from 'lucide-react'

import type { Dictionary } from '@/lib/i18n'
import { Reveal } from './reveal'

/*
  Dunkler Anker 1 von 4.

  Inhalt und Aufbau kommen aus dem bestehenden WordPress-Auftritt: ein langer
  Satz mit zwei farbig gesetzten Wortgruppen, darunter zwei umrandete Karten.
  Die Ueberschrift steht mittig, wie schon die Fassung davor - im Original ist
  sie linksbuendig, hier bleibt sie eingemittet, damit der Abschnitt im
  Seitenlauf ruhig bleibt.

  Der "Get in touch"-Knopf aus dem Original fehlt bewusst: die Seite hat
  ohnehin einen Handlungsaufruf im Kopf, in AudienceSplit, im CtaBand und im
  Abschluss. Ein fuenfter mitten im Text nimmt den anderen die Wirkung.
*/

const CARD_BASE =
  'flex h-full flex-col rounded-3xl border bg-card/40 p-7 backdrop-blur-sm md:p-9'

export function CoreMessage({ t }: { t: Dictionary }) {
  const c = t.core

  return (
    <section
      className="surface-dark relative overflow-hidden py-28 md:py-36"
      aria-labelledby="core-heading"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[38rem] w-[38rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-electric/12 blur-[140px]"
      />

      {/*
        Breiter als die uebrigen Textsektionen (max-w-4xl): der Satz ist lang,
        und bei schmalerer Spalte reisst text-balance die farbigen Wortgruppen
        mitten durch. Gemessen bei 1440px - hier bleiben sie zusammen.
      */}
      <div className="relative mx-auto max-w-6xl px-6">
        <Reveal>
          {/*
            text-balance verteilt die Zeilen eines mittigen Satzes gleichmaessig.
            Ohne das bleibt bei vier Zeilen die letzte oft als einzelnes Wort
            uebrig.
          */}
          <h2 id="core-heading" className="text-h2 text-balance text-center">
            {c.headingBefore}
            <span className="text-neon text-glow-neon">{c.headingRed}</span>
            {c.headingBetween}
            <span className="text-electric text-glow-electric">{c.headingBlue}</span>
            {c.headingAfter}
          </h2>
        </Reveal>

        {/* items-stretch ist der Standard im Grid, die Karten werden also von
            selbst gleich hoch - deshalb h-full an der Karte selbst. */}
        <div className="mt-14 grid gap-6 md:mt-16 md:grid-cols-2 md:gap-8">
          <Reveal as="div" delay={120} className="h-full">
            <article className={`${CARD_BASE} card-outline-neon`}>
              <div className="flex items-start justify-between gap-6">
                <h3 className="text-base font-semibold">{c.solution.title}</h3>
                <Boxes className="size-9 shrink-0 text-neon" strokeWidth={1.5} aria-hidden />
              </div>
              <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                <strong className="font-semibold text-foreground">{c.solution.leadIn}</strong>{' '}
                {c.solution.body}
              </p>
            </article>
          </Reveal>

          <Reveal as="div" delay={200} className="h-full">
            <article className={`${CARD_BASE} card-outline-electric`}>
              <div className="flex items-start justify-between gap-6">
                <h3 className="text-base font-semibold">{c.target.title}</h3>
                <Boxes className="size-9 shrink-0 text-electric" strokeWidth={1.5} aria-hidden />
              </div>
              <p className="mt-6 text-sm leading-relaxed text-muted-foreground">{c.target.body}</p>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
