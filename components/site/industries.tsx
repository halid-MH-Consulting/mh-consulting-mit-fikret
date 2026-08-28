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

const ITEMS = [
  { label: 'Travel Brands', icon: Compass },
  { label: 'Tourism Boards', icon: Globe2 },
  { label: 'Airlines', icon: Plane },
  { label: 'Hotels', icon: Building2 },
  { label: 'Travel Tech', icon: Smartphone },
  { label: 'eSIM Companies', icon: Signal },
  { label: 'VPN Companies', icon: ShieldCheck },
  { label: 'Travel Apps', icon: Palmtree },
]

export function Industries() {
  const row = [...ITEMS, ...ITEMS]
  return (
    <section
      className="relative border-y border-border bg-secondary/70 py-5"
      aria-label="Industries we serve"
    >
      <div className="group relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]">
        <div className="flex w-max animate-marquee items-center gap-2 group-hover:[animation-play-state:paused]">
          {row.map((item, i) => {
            const Icon = item.icon
            return (
              <div
                key={i}
                className="flex items-center gap-2 whitespace-nowrap px-4 py-1.5 text-sm font-medium text-muted-foreground"
              >
                <Icon className="size-4 text-primary/70" aria-hidden />
                {item.label}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
