'use client'

import { useState } from 'react'
import {
  Radar,
  Users,
  Rocket,
  Compass,
  ArrowRight,
  type LucideIcon,
} from 'lucide-react'
import { Reveal } from './reveal'
import { cn } from '@/lib/utils'

type Service = {
  id: string
  title: string
  icon: LucideIcon
  tagline: string
  description: string
  capabilities: string[]
}

const SERVICES: Service[] = [
  {
    id: 'awareness',
    title: 'Build Brand Awareness',
    icon: Radar,
    tagline: 'Get known by the right audiences',
    description:
      'We position your brand in front of engaged travel audiences through creators whose voice genuinely fits your story — not whoever has the biggest number.',
    capabilities: ['Market Research', 'Content Strategy', 'Travel Marketing Expertise'],
  },
  {
    id: 'discovery',
    title: 'Creator Discovery',
    icon: Users,
    tagline: 'The right creators, carefully vetted',
    description:
      'Our international creator network is hand-curated. Every partner is vetted for authenticity, audience quality and brand alignment before we ever recommend them.',
    capabilities: ['Creator Vetting', 'International Creator Network', 'Influencer Strategy'],
  },
  {
    id: 'campaigns',
    title: 'High Impact Campaigns',
    icon: Rocket,
    tagline: 'From concept to measurable results',
    description:
      'We plan, run and optimise campaigns end-to-end — obsessing over the metrics that move your business, not vanity likes.',
    capabilities: ['Campaign Planning', 'Campaign Management', 'Performance Analysis'],
  },
  {
    id: 'consulting',
    title: 'Consulting',
    icon: Compass,
    tagline: 'Strategy for the long game',
    description:
      'We help you negotiate, structure and nurture partnerships that last — turning creators into recurring brand assets instead of single transactions.',
    capabilities: ['Brand Partnerships', 'Negotiation', 'Long Term Partnerships'],
  },
]

export function Services() {
  const [active, setActive] = useState(SERVICES[0].id)
  const current = SERVICES.find((s) => s.id === active) ?? SERVICES[0]
  const CurrentIcon = current.icon

  return (
    <section id="services" className="relative py-24 md:py-32" aria-labelledby="services-heading">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="max-w-2xl">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-electric">
            What we do
          </p>
          <h2
            id="services-heading"
            className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl"
          >
            Four ways we build partnerships that perform.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-4 lg:grid-cols-[minmax(0,1fr)_1.15fr]">
          {/* selector */}
          <div className="flex flex-col gap-3">
            {SERVICES.map((service) => {
              const Icon = service.icon
              const isActive = service.id === active
              return (
                <button
                  key={service.id}
                  type="button"
                  onClick={() => setActive(service.id)}
                  aria-pressed={isActive}
                  className={cn(
                    'group flex items-center gap-4 rounded-2xl border p-5 text-left transition-all duration-300',
                    isActive
                      ? 'border-electric/50 bg-card shadow-[0_0_50px_-20px_var(--electric)]'
                      : 'border-border bg-card/30 hover:border-border hover:bg-card/60',
                  )}
                >
                  <span
                    className={cn(
                      'flex size-11 shrink-0 items-center justify-center rounded-xl border transition-colors',
                      isActive
                        ? 'border-electric/40 bg-electric/15 text-electric'
                        : 'border-border bg-background/60 text-muted-foreground group-hover:text-foreground',
                    )}
                  >
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <span className="flex flex-1 flex-col">
                    <span className="text-base font-semibold">{service.title}</span>
                    <span className="text-sm text-muted-foreground">{service.tagline}</span>
                  </span>
                  <ArrowRight
                    className={cn(
                      'size-4 shrink-0 transition-all',
                      isActive ? 'translate-x-0 text-electric opacity-100' : '-translate-x-2 opacity-0',
                    )}
                    aria-hidden
                  />
                </button>
              )
            })}
          </div>

          {/* detail panel */}
          <div className="glass relative overflow-hidden rounded-3xl p-8 md:p-10">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-electric/15 blur-[90px]"
            />
            <div key={current.id} className="relative animate-in fade-in slide-in-from-bottom-2 duration-500">
              <span className="flex size-14 items-center justify-center rounded-2xl border border-electric/40 bg-electric/15 text-electric">
                <CurrentIcon className="size-7" aria-hidden />
              </span>
              <h3 className="mt-6 text-2xl font-semibold tracking-tight md:text-3xl">
                {current.title}
              </h3>
              <p className="mt-4 max-w-md text-pretty leading-relaxed text-muted-foreground">
                {current.description}
              </p>
              <div className="mt-8 flex flex-wrap gap-2.5">
                {current.capabilities.map((cap) => (
                  <span
                    key={cap}
                    className="rounded-full border border-border bg-background/50 px-4 py-2 text-sm font-medium text-foreground/90"
                  >
                    {cap}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
