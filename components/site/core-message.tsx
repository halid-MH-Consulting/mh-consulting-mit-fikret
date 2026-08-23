import { Reveal } from './reveal'

export function CoreMessage() {
  return (
    <section className="relative overflow-hidden py-28 md:py-40" aria-labelledby="core-heading">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[42rem] w-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-electric/10 blur-[140px]"
      />
      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <Reveal>
          <p className="mb-8 text-xs font-medium uppercase tracking-[0.3em] text-electric">
            Our Core Belief
          </p>
        </Reveal>
        <Reveal delay={80}>
          <h2
            id="core-heading"
            className="text-balance text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl"
          >
            Not one-off promotions.
            <br />
            Not random sponsorships.
            <br />
            <span className="text-neon text-glow-neon">Real partnerships.</span>
          </h2>
        </Reveal>
        <Reveal delay={160}>
          <p className="mx-auto mt-10 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            MH Consulting connects ambitious brands with carefully selected content creators —
            building relationships that compound in trust, reach and revenue over time.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
