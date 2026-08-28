import { Gem, Globe, BadgeCheck, HeartHandshake, MessageSquareShare, LineChart } from 'lucide-react'

import { IMAGES } from '@/lib/images'
import { Photo } from './photo'
import { Reveal } from './reveal'

const POINTS = [
  {
    icon: Gem,
    title: 'Quality over quantity',
    body: 'We measure creators by trust and fit, never by follower counts. Fewer, better partnerships that actually convert.',
  },
  {
    icon: Globe,
    title: 'International creator network',
    body: 'A curated global roster spanning the destinations and audiences your brand cares about.',
  },
  {
    icon: BadgeCheck,
    title: 'Carefully vetted creators',
    body: 'Every partner is screened for authenticity and audience quality before we recommend them.',
  },
  {
    icon: LineChart,
    title: 'Performance-driven strategy',
    body: 'Campaigns built around business outcomes and transparent reporting, not vanity metrics.',
  },
  {
    icon: MessageSquareShare,
    title: 'Transparent communication',
    body: 'You always know what is happening, why, and what it is delivering.',
  },
  {
    icon: HeartHandshake,
    title: 'Dubai based, European expertise',
    body: 'Global reach with the rigour and standards of European marketing experience.',
  },
]

/*
  Frueher waren das sechs gleich grosse Karten. Jetzt traegt ein Bild die linke
  Spalte und die Punkte stehen als geteilte Liste rechts: gleiche Information,
  aber eine Komposition statt eines Rasters.
*/
export function WhyUs() {
  return (
    <section
      id="why"
      className="relative border-y border-border bg-secondary/50 py-24 md:py-32"
      aria-labelledby="why-heading"
    >
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="max-w-3xl">
          <h2 id="why-heading" className="text-h2">
            What makes us different.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <div className="relative aspect-4/5 overflow-hidden rounded-2xl">
              <Photo image={IMAGES.resort} sizes="(min-width: 1024px) 38vw, calc(100vw - 3rem)" />
            </div>
          </Reveal>

          <dl className="grid gap-0 sm:grid-cols-2 sm:gap-x-10">
            {POINTS.map((point, i) => {
              const Icon = point.icon
              return (
                <Reveal
                  as="div"
                  key={point.title}
                  delay={i * 60}
                  className="border-b border-border py-6 sm:[&:nth-child(-n+2)]:border-t"
                >
                  <dt className="flex items-center gap-2.5 text-lg font-bold">
                    <Icon className="size-4.5 text-primary" aria-hidden />
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
