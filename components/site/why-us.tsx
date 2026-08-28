import { Gem, Globe, BadgeCheck, HeartHandshake, MessageSquareShare, LineChart } from 'lucide-react'

import { IMAGES } from '@/lib/images'
import type { Dictionary } from '@/lib/i18n'
import { Photo } from './photo'
import { Reveal } from './reveal'

// Reihenfolge entspricht der Liste im Woerterbuch.
const ICONS = [Gem, Globe, BadgeCheck, LineChart, MessageSquareShare, HeartHandshake]

/*
  Frueher waren das sechs gleich grosse Karten. Jetzt traegt ein Bild die linke
  Spalte und die Punkte stehen als geteilte Liste rechts: gleiche Information,
  aber eine Komposition statt eines Rasters.
*/
export function WhyUs({ t }: { t: Dictionary }) {
  return (
    <section
      id="why"
      className="relative border-y border-border bg-secondary/50 py-24 md:py-32"
      aria-labelledby="why-heading"
    >
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="max-w-3xl">
          <h2 id="why-heading" className="text-h2">
            {t.whyUs.heading}
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <div className="relative aspect-4/5 overflow-hidden rounded-2xl">
              <Photo image={IMAGES.resort} sizes="(min-width: 1024px) 38vw, calc(100vw - 3rem)" />
            </div>
          </Reveal>

          <dl className="grid gap-0 sm:grid-cols-2 sm:gap-x-10">
            {t.whyUs.points.map((point, i) => {
              const Icon = ICONS[i % ICONS.length]
              return (
                <Reveal
                  as="div"
                  key={point.title}
                  delay={i * 60}
                  className="border-b border-border py-6 sm:[&:nth-child(-n+2)]:border-t"
                >
                  <dt className="flex items-center gap-2.5 text-lg font-bold">
                    <Icon className="size-4.5 shrink-0 text-primary" aria-hidden />
                    {point.title}
                  </dt>
                  <dd className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                    {point.body}
                  </dd>
                </Reveal>
              )
            })}
          </dl>
        </div>
      </div>
    </section>
  )
}
