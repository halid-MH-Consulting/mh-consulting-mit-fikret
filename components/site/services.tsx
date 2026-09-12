'use client'

import { useRef, useState } from 'react'
import { Radar, Users, Rocket, Compass, Check } from 'lucide-react'

import { IMAGES } from '@/lib/images'
import type { Dictionary } from '@/lib/i18n'
import { cn } from '@/lib/utils'
import { Photo } from './photo'
import { Reveal } from './reveal'

// Reihenfolge entspricht der Liste im Woerterbuch.
const ICONS = [Radar, Users, Rocket, Compass]

/*
  Bild je Reiter, dieselbe Reihenfolge. Bisher stand ein einziges Foto fest
  im Bauteil und galt fuer alle vier.

  Drei der vier tragen jetzt ein eigenes Motiv von MH Consulting. Nur
  "Creator Discovery" behaelt das Klippenfoto, bis auch dafuer ein Bild
  vorliegt.

  Die Einpassung gehoert zum Motiv, nicht zum Abschnitt - vorher stand sie
  pauschal fuer alle vier auf "contain", und das war falsch:

  - cover fuellt den Rahmen und beschneidet dafuer die Kanten. Bei einem Foto
    merkt das niemand, es fehlt nur mehr Wasser oder mehr Himmel.
  - contain zeigt das ganze Motiv und laesst dafuer Rand. Noetig nur dort, wo
    an der Kante Inhalt steht, den man nicht verlieren darf.

  Genau ein Motiv braucht contain: die Consulting-Grafik traegt aussen
  "WIDER REACH" und "ENDLESS POSSIBILITIES", die bei cover angeschnitten
  wurden. Alle uebrigen fuellen den Rahmen.
*/
const MEDIA = [
  { image: IMAGES.brandAwareness, fit: 'cover' },
  { image: IMAGES.creatorAtWork, fit: 'cover' },
  { image: IMAGES.impact, fit: 'cover' },
  { image: IMAGES.consulting, fit: 'contain' },
] as const

export function Services({ t }: { t: Dictionary }) {
  const items = t.services.items
  const [activeIndex, setActiveIndex] = useState(0)
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])
  const active = items[activeIndex] ?? items[0]
  const media = MEDIA[activeIndex] ?? MEDIA[0]

  // Pfeiltasten wechseln die Auswahl, wie es fuer eine Tableiste erwartet wird.
  function onKeyDown(e: React.KeyboardEvent, index: number) {
    const keys: Record<string, number> = {
      ArrowDown: index + 1,
      ArrowRight: index + 1,
      ArrowUp: index - 1,
      ArrowLeft: index - 1,
      Home: 0,
      End: items.length - 1,
    }
    const next = keys[e.key]
    if (next === undefined) return
    e.preventDefault()
    const bounded = (next + items.length) % items.length
    setActiveIndex(bounded)
    tabRefs.current[bounded]?.focus()
  }

  return (
    <section id="services" className="relative py-24 md:py-32" aria-labelledby="services-heading">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="max-w-3xl">
          <h2 id="services-heading" className="text-h2">
            {t.services.heading}
          </h2>
          <p className="text-lead measure mt-5 text-muted-foreground">{t.services.lead}</p>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
          {/* Auswahl: reine Textliste mit Markierung, keine Karten */}
          <div
            role="tablist"
            aria-label={t.services.label}
            aria-orientation="vertical"
            className="flex flex-col"
          >
            {items.map((service, i) => {
              const isActive = i === activeIndex
              const Icon = ICONS[i % ICONS.length]
              return (
                <button
                  key={service.title}
                  ref={(el) => {
                    tabRefs.current[i] = el
                  }}
                  role="tab"
                  id={`tab-${i}`}
                  aria-selected={isActive}
                  aria-controls={`panel-${i}`}
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => setActiveIndex(i)}
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
            id={`panel-${activeIndex}`}
            aria-labelledby={`tab-${activeIndex}`}
            tabIndex={0}
            key={activeIndex}
            className="flex flex-col"
          >
            {/*
              Fester Rahmen fuer alle vier Motive, damit das Feld beim
              Reiterwechsel nicht springt. bg-secondary liegt darunter und ist
              nur dort zu sehen, wo ein Motiv den Rahmen nicht fuellt - also
              aktuell allein bei der Consulting-Grafik.

              Photo setzt von sich aus object-cover; contain wird nur dort
              uebergeben, wo es in MEDIA so steht.
            */}
            <div className="relative aspect-16/10 overflow-hidden rounded-2xl bg-secondary">
              <Photo
                image={media.image}
                sizes="(min-width: 1024px) 55vw, calc(100vw - 3rem)"
                imgClassName={media.fit === 'contain' ? 'object-contain' : undefined}
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
