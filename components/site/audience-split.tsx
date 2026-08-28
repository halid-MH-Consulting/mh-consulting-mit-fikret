import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

import { IMAGES } from '@/lib/images'
import { Photo } from './photo'
import { Reveal } from './reveal'

/*
  Die Weiche. Das Geschaeft hat zwei Seiten, und beide sollen sich frueh selbst
  einsortieren koennen, ohne die ganze Startseite durchzuscrollen. Zwei grosse
  Flaechen statt einer Kartenreihe: die Wahl soll sich wie eine Tuer anfuehlen.
*/
const DOORS = [
  {
    href: '/for-brands',
    kicker: 'For brands',
    title: 'You need creators your audience believes.',
    body: 'Tourism boards, hotels, airlines, travel tech, eSIM and VPN. What you get, how an engagement runs, and what it costs you in time.',
    image: IMAGES.brandsHero,
  },
  {
    href: '/for-creators',
    kicker: 'For creators',
    title: 'You need briefs, not another pitch email.',
    body: 'We negotiate the terms, chase the invoices and bring you work that fits what you already make. What we look for, and how to apply.',
    image: IMAGES.creatorHero,
  },
]

export function AudienceSplit() {
  return (
    <section className="py-24 md:py-32" aria-labelledby="audience-heading">
      <div className="mx-auto max-w-6xl px-6">
        <h2 id="audience-heading" className="sr-only">
          Choose your path
        </h2>
        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          {DOORS.map((door, i) => (
            <Reveal as="div" key={door.href} delay={i * 110}>
              <Link
                href={door.href}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border transition-colors duration-300 hover:border-primary/50"
              >
                <div className="relative aspect-16/10 overflow-hidden">
                  <Photo
                    image={door.image}
                    sizes="(min-width: 768px) 46vw, calc(100vw - 3rem)"
                    imgClassName="transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <span className="text-sm font-semibold text-primary">{door.kicker}</span>
                  <h3 className="mt-3 text-2xl font-bold tracking-tight">{door.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {door.body}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold">
                    Read on
                    <ArrowUpRight
                      className="size-4 text-primary transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden
                    />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
