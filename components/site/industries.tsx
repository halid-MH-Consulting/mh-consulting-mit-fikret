import {
  Plane,
  Building2,
  Globe2,
  Signal,
  ShieldCheck,
  Smartphone,
  Compass,
  Palmtree,
} from 'lucide-react'

import type { Dictionary } from '@/lib/i18n'

// Reihenfolge entspricht der Liste im Woerterbuch.
const ICONS = [Compass, Globe2, Plane, Building2, Smartphone, Signal, ShieldCheck, Palmtree]

export function Industries({ t }: { t: Dictionary }) {
  const row = [...t.industries.items, ...t.industries.items]
  return (
    <section
      className="relative border-y border-border bg-secondary/70 py-5"
      aria-label={t.industries.label}
    >
      <div className="group relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]">
        <div className="flex w-max animate-marquee items-center gap-2 group-hover:[animation-play-state:paused]">
          {row.map((label, i) => {
            const Icon = ICONS[i % ICONS.length]
            return (
              <div
                key={i}
                className="flex items-center gap-2 whitespace-nowrap px-4 py-1.5 text-sm font-medium text-muted-foreground"
              >
                <Icon className="size-4 text-primary/70" aria-hidden />
                {label}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
