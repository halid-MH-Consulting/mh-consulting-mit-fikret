import { ArrowUpRight, MapPin } from 'lucide-react'

import { IMAGES } from '@/lib/images'
import { Photo } from './photo'
import { RotatingWord } from './rotating-word'

// Wie in der script.js der Schwester-Seite, mit zwei Korrekturen: dort ergaben
// "travel brands" und "the right deals" ein doppeltes Wort in der Zeile
// ("... the travel brands brands ...", "... the the right deals ...").
const HEADLINE_WORDS = ['creators', 'partnerships', 'campaigns', 'right deals']

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-24 md:pt-28"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 pb-16 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-14 lg:pb-24">
        {/* Textspalte */}
        <div className="lg:py-10">
          <p className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
            <MapPin className="size-4 text-primary" aria-hidden />
            Dubai, UAE — working worldwide
          </p>

          <h1 id="hero-heading" className="text-display mt-6">
            <span className="block">We manage the</span>
            <RotatingWord words={HEADLINE_WORDS} className="text-primary" />
            <span className="block">
              brands <span className="text-accent">actually want.</span>
            </span>
          </h1>

          <p className="text-lead measure mt-7 text-muted-foreground">
            MH Consulting is the link between travel creators and the sponsors who want their
            audience. No noise, no inflated numbers, just deals that make sense on both ends.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground transition-transform duration-200 hover:-translate-y-0.5"
            >
              Start a project
              <ArrowUpRight
                className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden
              />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-input px-7 py-4 text-sm font-semibold transition-colors hover:bg-secondary"
            >
              See what we do
            </a>
          </div>
        </div>

        {/* Bildspalte: blutet auf grossen Schirmen nach rechts aus dem Raster */}
        <div className="relative lg:-mr-[max(0px,calc((100vw-72rem)/2))]">
          <div className="relative aspect-4/5 overflow-hidden rounded-2xl sm:aspect-16/10 lg:aspect-4/5 lg:rounded-l-3xl lg:rounded-r-none">
            <Photo
              image={IMAGES.hero}
              priority
              sizes="(min-width: 1024px) 48vw, calc(100vw - 3rem)"
            />
          </div>

          {/* Eine einzelne belegbare Aussage statt einer Kennzahlen-Reihe */}
          <figure className="absolute bottom-4 left-4 right-4 rounded-xl bg-card/92 p-4 backdrop-blur-md sm:bottom-6 sm:left-6 sm:right-auto sm:max-w-xs">
            <figcaption className="text-sm leading-relaxed text-card-foreground">
              One hub in Dubai, creators on six continents, matched to the destination they
              actually know.
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}
