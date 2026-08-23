import { ArrowUpRight } from 'lucide-react'
import { Reveal } from './reveal'

export function FinalCta() {
  return (
    <section id="contact" className="relative overflow-hidden py-28 md:py-40" aria-labelledby="cta-heading">
      <div className="absolute inset-0 bg-grid opacity-60" aria-hidden />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-electric/15 blur-[150px] animate-pulse-glow"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-10 top-10 h-64 w-64 rounded-full bg-neon/10 blur-[120px]"
      />

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <h2
            id="cta-heading"
            className="text-balance text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl"
          >
            Let&apos;s build your next{' '}
            <span className="text-electric text-glow-electric">campaign</span> together.
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="mx-auto mt-8 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Ready to turn creators into long-term brand partners? Tell us about your brand and goals
            — we&apos;ll design a strategy that delivers.
          </p>
        </Reveal>
        <Reveal delay={180}>
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="mailto:hello@mhconsulting.ae"
              className="group inline-flex items-center gap-2 rounded-full bg-electric px-9 py-4 text-base font-semibold text-primary-foreground shadow-[0_0_50px_-8px_var(--electric)] transition hover:shadow-[0_0_70px_-6px_var(--electric)]"
            >
              Let&apos;s Talk
              <ArrowUpRight
                className="size-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden
              />
            </a>
            <span className="text-sm text-muted-foreground">Based in Dubai · Working globally</span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
