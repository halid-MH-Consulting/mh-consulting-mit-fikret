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
    <section className="relative border-y border-border bg-navy/40 py-8" aria-label="Industries we serve">
      <div className="mb-6 text-center text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
        Trusted focus across travel &amp; beyond
      </div>
      <div className="group relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
        <div className="flex w-max animate-marquee items-center gap-4 group-hover:[animation-play-state:paused]">
          {row.map((item, i) => {
            const Icon = item.icon
            return (
              <div
                key={i}
                className="flex items-center gap-3 rounded-full border border-border bg-card/40 px-6 py-3 backdrop-blur"
              >
                <Icon className="size-4 text-electric" aria-hidden />
                <span className="whitespace-nowrap text-sm font-medium text-foreground/90">
                  {item.label}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
