import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

import type { SiteImage } from '@/lib/images'
import { Photo } from './photo'

/*
  Aufmacher der Unterseiten. Bewusst anders gebaut als der Hero der Startseite
  (dort Text und Bild nebeneinander): hier steht der Text ueber einem breiten
  Bildband. Die Unterseiten sollen sich nicht wie Kopien der Startseite lesen.
*/
export function PageHero({
  title,
  lead,
  image,
  cta,
}: {
  title: React.ReactNode
  lead: string
  image: SiteImage
  cta?: { href: string; label: string }
}) {
  return (
    <section className="relative pt-28 md:pt-36">
      <div className="mx-auto max-w-6xl px-6">
        <h1 className="text-display max-w-4xl">{title}</h1>
        <p className="text-lead measure mt-7 text-muted-foreground">{lead}</p>
        {cta && (
          <Link
            href={cta.href}
            className="group mt-9 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground transition-transform duration-200 hover:-translate-y-0.5"
          >
            {cta.label}
            <ArrowUpRight
              className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden
            />
          </Link>
        )}
      </div>

      <div className="mx-auto mt-14 max-w-7xl px-6">
        <div className="relative aspect-16/10 overflow-hidden rounded-3xl sm:aspect-21/9">
          <Photo image={image} priority sizes="(min-width: 1280px) 80rem, 100vw" />
        </div>
      </div>
    </section>
  )
}
