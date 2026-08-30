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

import type { CSSProperties } from 'react'

import type { Dictionary } from '@/lib/i18n'

// Reihenfolge entspricht der Liste im Woerterbuch.
const ICONS = [Compass, Globe2, Plane, Building2, Smartphone, Signal, ShieldCheck, Palmtree]

/*
  Anzahl der Kopien einer Begriffsgruppe in der Spur.

  Die Spur wird um genau eine Gruppenbreite verschoben. Damit rechts nie eine
  Luecke entsteht, muessen die verbleibenden Kopien den Container weiterhin
  vollstaendig fuellen: (GROUPS - 1) * Gruppenbreite >= Containerbreite. Eine
  Gruppe misst rund 1170px, vier verbleibende Kopien decken also etwa 4680px
  ab und damit jede realistische Bildschirmbreite. Zwei Kopien - der fruehere
  Stand - reichten schon ab 1170px Containerbreite nicht mehr.
*/
const GROUPS = 5

export function Industries({ t }: { t: Dictionary }) {
  return (
    <section
      className="relative border-y border-border bg-secondary/70 py-5"
      aria-label={t.industries.label}
    >
      <div className="group relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]">
        {/*
          Die Verschiebung ist keine geschaetzte Prozentzahl: jede Gruppe
          traegt ihren nachfolgenden Abstand als `pr-2` selbst, alle Gruppen
          sind daher exakt gleich breit und 100%/GROUPS entspricht auf das
          Subpixel genau einer Gruppenbreite samt Abstand.
        */}
        <div
          className="flex w-max animate-marquee group-hover:[animation-play-state:paused]"
          style={{ '--marquee-shift': `-${100 / GROUPS}%` } as CSSProperties}
        >
          {Array.from({ length: GROUPS }, (_, group) => (
            <div
              key={group}
              className="flex shrink-0 items-center gap-2 pr-2"
              // Nur die erste Gruppe wird vorgelesen, die Kopien sind reine Optik.
              aria-hidden={group > 0 || undefined}
            >
              {t.industries.items.map((label, i) => {
                const Icon = ICONS[i % ICONS.length]
                return (
                  <div
                    key={label}
                    className="flex items-center gap-2 whitespace-nowrap px-4 py-1.5 text-sm font-medium text-muted-foreground"
                  >
                    <Icon className="size-4 text-primary/70" aria-hidden />
                    {label}
                  </div>
                )
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
