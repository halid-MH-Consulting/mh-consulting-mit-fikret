import { Reveal } from './reveal'

/*
  Dunkler Anker 1 von 4. Bewusst ohne Bild: nach dem bildstarken Hero braucht
  die Seite eine ruhige, reine Textflaeche, sonst ermuedet das Auge.
*/
export function CoreMessage() {
  return (
    <section
      className="surface-dark relative overflow-hidden py-28 md:py-36"
      aria-labelledby="core-heading"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[38rem] w-[38rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-electric/12 blur-[140px]"
      />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <h2 id="core-heading" className="text-h2">
            Not one-off promotions.
            <br />
            Not random sponsorships.
            <br />
            <span className="text-neon text-glow-neon">Real partnerships.</span>
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="text-lead measure mx-auto mt-8 text-muted-foreground">
            We connect ambitious brands with carefully selected content creators, then keep those
            relationships running long enough that trust, reach and revenue compound.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
