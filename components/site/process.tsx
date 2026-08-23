import { Search, Target, Handshake, PlayCircle, BarChart3 } from 'lucide-react'
import { Reveal } from './reveal'

const STEPS = [
  {
    icon: Search,
    step: '01',
    title: 'Research & strategy',
    body: 'We study your market, audience and goals to define a creator strategy that fits your brand.',
  },
  {
    icon: Target,
    step: '02',
    title: 'Creator discovery',
    body: 'We shortlist and vet creators from our international network for authenticity and fit.',
  },
  {
    icon: Handshake,
    step: '03',
    title: 'Negotiation & planning',
    body: 'We handle outreach, negotiation and campaign planning so terms and content align with results.',
  },
  {
    icon: PlayCircle,
    step: '04',
    title: 'Campaign management',
    body: 'We run the campaign end-to-end, keeping creators, timelines and deliverables on track.',
  },
  {
    icon: BarChart3,
    step: '05',
    title: 'Performance & partnership',
    body: 'We analyse results, report transparently and grow the best collaborations into long-term partnerships.',
  },
]

export function Process() {
  return (
    <section className="relative py-24 md:py-32" aria-labelledby="process-heading">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="max-w-2xl">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-neon">
            The campaign lifecycle
          </p>
          <h2
            id="process-heading"
            className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl"
          >
            A clear process, from first idea to lasting partnership.
          </h2>
        </Reveal>

        <ol className="relative mt-14 grid gap-4 md:grid-cols-5">
          <div
            aria-hidden
            className="pointer-events-none absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-electric/0 via-electric/40 to-neon/0 md:block"
          />
          {STEPS.map((s, i) => {
            const Icon = s.icon
            return (
              <Reveal as="li" key={s.step} delay={i * 90} className="relative">
                <div className="relative flex size-12 items-center justify-center rounded-full border border-electric/40 bg-background text-electric">
                  <Icon className="size-5" aria-hidden />
                </div>
                <div className="mt-5">
                  <span className="font-mono text-xs text-muted-foreground">{s.step}</span>
                  <h3 className="mt-1 text-base font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                </div>
              </Reveal>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
