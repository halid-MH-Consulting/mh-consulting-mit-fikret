import { Search, Target, Handshake, PlayCircle, BarChart3 } from 'lucide-react'

import { IMAGES } from '@/lib/images'
import { Photo } from './photo'
import { Reveal } from './reveal'

const STEPS = [
  {
    icon: Search,
    title: 'Research & strategy',
    body: 'We study your market, audience and goals to define a creator strategy that fits your brand.',
  },
  {
    icon: Target,
    title: 'Creator discovery',
    body: 'We shortlist and vet creators from our international network for authenticity and fit.',
  },
  {
    icon: Handshake,
    title: 'Negotiation & planning',
    body: 'We handle outreach, negotiation and campaign planning so terms and content align with results.',
  },
  {
    icon: PlayCircle,
    title: 'Campaign management',
    body: 'We run the campaign end to end, keeping creators, timelines and deliverables on track.',
  },
  {
    icon: BarChart3,
    title: 'Performance & partnership',
    body: 'We analyse results, report transparently and grow the best collaborations into long-term partnerships.',
  },
]

/*
  Die Nummerierung bleibt: hier ist sie keine Deko, sondern echte Reihenfolge.
  Als durchgehende Zeitachse statt als Kartenreihe, damit man den Ablauf sieht.
*/
export function Process() {
  return (
    <section id="process" className="relative py-24 md:py-32" aria-labelledby="process-heading">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.72fr)] lg:gap-16">
          <div>
            <Reveal>
              <h2 id="process-heading" className="text-h2">
                A clear process, from first idea to lasting partnership.
              </h2>
            </Reveal>

            <ol className="relative mt-12">
              {/* Durchgehende Achse hinter den Punkten */}
              <span
                aria-hidden
                className="absolute bottom-8 left-[15px] top-3 w-px bg-border"
              />
              {STEPS.map((step, i) => {
                const Icon = step.icon
                return (
                  <Reveal as="li" key={step.title} delay={i * 70} className="relative flex gap-5 pb-9 last:pb-0">
                    <span className="relative z-10 flex size-8 shrink-0 items-center justify-center rounded-full border border-border bg-background">
                      <Icon className="size-4 text-primary" aria-hidden />
                    </span>
                    <div className="pt-0.5">
                      <h3 className="flex items-baseline gap-2.5 text-base font-bold">
                        <span className="text-xs font-semibold tabular-nums text-muted-foreground">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        {step.title}
                      </h3>
                      <p className="measure mt-2 text-sm leading-relaxed text-muted-foreground">
                        {step.body}
                      </p>
                    </div>
                  </Reveal>
                )
              })}
            </ol>
          </div>

          <Reveal delay={140} className="lg:sticky lg:top-28 lg:self-start">
            <div className="relative aspect-3/4 overflow-hidden rounded-2xl">
              <Photo image={IMAGES.shoot} sizes="(min-width: 1024px) 34vw, calc(100vw - 3rem)" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
