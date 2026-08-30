import Link from 'next/link'
import { ArrowUpRight, MapPin } from 'lucide-react'

import { IMAGES } from '@/lib/images'
import { href, type Dictionary, type Locale } from '@/lib/i18n'
import { Photo } from './photo'
import { RotatingWord } from './rotating-word'

export function Hero({ locale, t }: { locale: Locale; t: Dictionary }) {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-24 md:pt-28"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 pb-16 lg:grid-cols-[minmax(0,1.137fr)_minmax(0,0.863fr)] lg:gap-14 lg:pb-24">
        {/* Textspalte */}
        <div className="lg:py-10">
          <p className="text-hero-meta flex items-center gap-2 font-medium text-muted-foreground">
            <MapPin className="size-4 text-primary" aria-hidden />
            {t.hero.location}
          </p>

          <h1 id="hero-heading" className="text-hero-display mt-6">
            <span className="block">{t.hero.line1}</span>
            <RotatingWord words={t.hero.words} className="text-primary" />
            <span className="block">
              {t.hero.line3} <span className="text-accent">{t.hero.line3Accent}</span>
            </span>
          </h1>

          <p className="text-hero-lead measure mt-7 text-muted-foreground">{t.hero.lead}</p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href={href(locale, '/contact')}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground transition-transform duration-200 hover:-translate-y-0.5"
            >
              {t.hero.ctaPrimary}
              <ArrowUpRight
                className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden
              />
            </Link>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-input px-7 py-4 text-sm font-semibold transition-colors hover:bg-secondary"
            >
              {t.hero.ctaSecondary}
            </a>
          </div>
        </div>

        {/*
          Bildspalte: blutet auf grossen Schirmen nach rechts aus dem Raster.

          Die Spaltenteilung ist nicht 1:1, obwohl Text und Bild gleich breit
          erscheinen sollen. Grund ist genau dieser Ueberstand: das Bild ist
          bei 1440px um 144px breiter als seine Spalte. Gleich breit werden
          beide erst bei 1.137fr zu 0.863fr, dann misst jede Seite 596px.

          Das Seitenverhaeltnis wandert von 4/5 auf 20/21, damit das breitere
          Bild nicht auch hoeher wird - bei 1440px bleibt es bei 625px.
        */}
        <div className="relative lg:-mr-[max(0px,calc((100vw-72rem)/2))]">
          <div className="relative aspect-4/5 overflow-hidden rounded-2xl sm:aspect-16/10 lg:aspect-[20/21] lg:rounded-l-3xl lg:rounded-r-none">
            <Photo
              image={IMAGES.hero}
              priority
              sizes="(min-width: 1024px) 48vw, calc(100vw - 3rem)"
            />
          </div>

          {/* Eine einzelne belegbare Aussage statt einer Kennzahlen-Reihe */}
          <figure className="absolute bottom-4 left-4 right-4 rounded-xl bg-card/92 p-4 backdrop-blur-md sm:bottom-6 sm:left-6 sm:right-6 sm:max-w-xs">
            <figcaption className="text-sm leading-relaxed text-card-foreground">
              {t.hero.caption}
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}
