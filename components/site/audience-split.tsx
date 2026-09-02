import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

import { href, type Dictionary, type Locale } from '@/lib/i18n'
import { Reveal } from './reveal'

/*
  Die Weiche. Das Geschaeft hat zwei Seiten, und beide sollen sich frueh selbst
  einsortieren koennen, ohne die ganze Startseite durchzuscrollen. Zwei grosse
  Flaechen statt einer Kartenreihe: die Wahl soll sich wie eine Tuer anfuehlen.
*/
export function AudienceSplit({ locale, t }: { locale: Locale; t: Dictionary }) {
  const doors = [
    { path: '/for-brands', ...t.audience.brands },
    { path: '/for-creators', ...t.audience.creators },
  ]

  return (
    <section className="py-24 md:py-32" aria-labelledby="audience-heading">
      <div className="mx-auto max-w-6xl px-6">
        <h2 id="audience-heading" className="sr-only">
          {t.audience.srHeading}
        </h2>
        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          {doors.map((door, i) => (
            <Reveal as="div" key={door.path} delay={i * 110}>
              <Link
                href={href(locale, door.path)}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border transition-colors duration-300 hover:border-primary/50"
              >
                <div className="relative aspect-16/10 overflow-hidden">
                  {door.path === '/for-brands' ? (
                    <video
                      className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      aria-hidden="true"
                    >
                      <source
                        src="/videos/influencer-marketing-loop.webm"
                        type="video/webm"
                      />
                    </video>
                  ) : (
                    <video
                      className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      poster="/videos/creator-cafe-loop-poster.jpg"
                      aria-hidden="true"
                    >
                      <source src="/videos/creator-cafe-loop.mp4" type="video/mp4" />
                    </video>
                  )}
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <span className="text-sm font-semibold text-primary">{door.kicker}</span>
                  <h3 className="mt-3 text-2xl font-bold tracking-tight">{door.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {door.body}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold">
                    {t.common.readOn}
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
