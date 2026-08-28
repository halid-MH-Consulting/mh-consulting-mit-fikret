'use client'

import { useRef, useState } from 'react'
import { Radar, Users, Rocket, Compass, Check, type LucideIcon } from 'lucide-react'

import { IMAGES } from '@/lib/images'
import { cn } from '@/lib/utils'
import { Photo } from './photo'
import { Reveal } from './reveal'

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
      'We position your brand in front of engaged travel audiences through creators whose voice genuinely fits your story, not whoever has the biggest number.',
    capabilities: ['Market Research', 'Content Strategy', 'Travel Marketing Expertise'],
  },
  {
    id: 'discovery',
    title: 'Creator Discovery',
    icon: Users,
    tagline: 'The right creators, carefully vetted',
    description:
      'We shortlist creators from an international roster and screen every one of them for authenticity, audience quality and brand fit before they reach you.',
    capabilities: ['Authenticity Screening', 'Audience Analysis', 'Brand Fit Matching'],
  },
  {
    id: 'campaigns',
    title: 'High Impact Campaigns',
    icon: Rocket,
    tagline: 'From concept to measurable results',
    description:
      'We run campaigns end to end: concept, negotiation, timelines, deliverables and reporting. You get one point of contact instead of twelve inboxes.',
    capabilities: ['Campaign Management', 'Negotiation', 'Transparent Reporting'],
  },
  {
    id: 'consulting',
    title: 'Consulting',
    icon: Compass,
    tagline: 'Strategy for the long game',
    description:
      'We help you build a creator programme that outlives a single campaign, with the structure and standards to keep it running after we hand it over.',
    capabilities: ['Creator Programmes', 'Channel Strategy', 'Team Enablement'],
  },
]

export function Services() {
  const [activeId, setActiveId] = useState(SERVICES[0].id)
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])
  const active = SERVICES.find((s) => s.id === activeId) ?? SERVICES[0]

  // Pfeiltasten wechseln die Auswahl, wie es fuer eine Tableiste erwartet wird.
  function onKeyDown(e: React.KeyboardEvent, index: number) {
    const keys: Record<string, number> = {
      ArrowDown: index + 1,
      ArrowRight: index + 1,
      ArrowUp: index - 1,
      ArrowLeft: index - 1,
      Home: 0,
      End: SERVICES.length - 1,
    }
    const next = keys[e.key]
    if (next === undefined) return
    e.preventDefault()
    const bounded = (next + SERVICES.length) % SERVICES.length
    setActiveId(SERVICES[bounded].id)
    tabRefs.current[bounded]?.focus()
  }

  return (
    <section id="services" className="relative py-24 md:py-32" aria-labelledby="services-heading">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="max-w-3xl">
          <h2 id="services-heading" className="text-h2">
            Four ways we build partnerships that perform.
          </h2>
          <p className="text-lead measure mt-5 text-muted-foreground">
            Every engagement starts with the same question: which creator would this audience
            actually believe?
          </p>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
          {/* Auswahl: reine Textliste mit Markierung, keine Karten */}
          <div role="tablist" aria-label="Services" aria-orientation="vertical" className="flex flex-col">
            {SERVICES.map((service, i) => {
              const isActive = service.id === activeId
              const Icon = service.icon
              return (
                <button
                  key={service.id}
                  ref={(el) => {
                    tabRefs.current[i] = el
                  }}
                  role="tab"
                  id={`tab-${service.id}`}
                  aria-selected={isActive}
                  aria-controls={`panel-${service.id}`}
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => setActiveId(service.id)}
                  onKeyDown={(e) => onKeyDown(e, i)}
                  className={cn(
                    'group flex items-start gap-4 border-b border-border py-5 text-left transition-colors first:border-t',
                    isActive ? 'text-foreground' : 'text-muted-foreground hover:text-foreground',
                  )}
                >
                  <Icon
                    className={cn(
                      'mt-0.5 size-5 shrink-0 transition-colors',
                      isActive ? 'text-primary' : 'text-muted-foreground/70',
                    )}
                    aria-hidden
                  />
                  <span className="flex-1">
                    <span
                      className={cn(
                        'block text-base transition-[font-weight]',
                        isActive ? 'font-bold' : 'font-medium',
                      )}
                    >
                      {service.title}
                    </span>
                    <span className="mt-1 block text-sm text-muted-foreground">
                      {service.tagline}
                    </span>
                  </span>
                  <span
                    aria-hidden
                    className={cn(
                      'mt-2 h-1.5 w-1.5 shrink-0 rounded-full transition-opacity',
                      isActive ? 'bg-primary opacity-100' : 'opacity-0',
                    )}
                  />
                </button>
              )
            })}
          </div>

          {/* Detail: ein Panel mit Bild, kein verschachtelter Kartenstapel */}
          <div
            role="tabpanel"
            id={`panel-${active.id}`}
            aria-labelledby={`tab-${active.id}`}
            tabIndex={0}
            key={active.id}
            className="flex flex-col"
          >
            <div className="relative aspect-16/10 overflow-hidden rounded-2xl">
              <Photo
                image={IMAGES.creatorAtWork}
                sizes="(min-width: 1024px) 55vw, calc(100vw - 3rem)"
              />
            </div>
            <h3 className="mt-8 text-2xl font-bold tracking-tight">{active.title}</h3>
            <p className="measure mt-4 leading-relaxed text-muted-foreground">
              {active.description}
            </p>
            <ul className="mt-7 flex flex-wrap gap-x-6 gap-y-3">
              {active.capabilities.map((c) => (
                <li key={c} className="flex items-center gap-2 text-sm font-medium">
                  <Check className="size-4 text-primary" aria-hidden />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
