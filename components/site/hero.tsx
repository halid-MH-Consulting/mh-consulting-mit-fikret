import Link from 'next/link'
import { ArrowUpRight, MapPin } from 'lucide-react'

import { href, type Dictionary, type Locale } from '@/lib/i18n'
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

          Ab lg gibt nicht mehr das Seitenverhaeltnis die Hoehe vor, sondern
          die Textspalte: die Bildspalte streckt sich ueber die volle
          Rasterzeile (self-stretch + h-full), und die Zeile ist so hoch wie
          der Text samt seiner py-10. Die Oberkante bleibt damit exakt dort,
          wo sie vorher lag, die Unterkante endet 40px unter der Schaltflaeche
          "See what we do" - unabhaengig von Sprache und Fensterbreite.

          Vorher trug das Bild aspect-[20/21] und wurde bei 1440px 626, bei
          1920px 878px hoch. Zusammen mit den 112px Kopfabstand lief es damit
          auf jedem Laptop unten aus dem Bild: die abgerundete Ecke und die
          Bildunterschrift waren nicht mehr zu sehen.

          Das max-h greift nur auf sehr flachen Fenstern, wenn schon der Text
          allein hoeher ist als der Schirm. Dann bleibt das Bild oben stehen
          und wird unten beschnitten, statt aus dem Sichtfeld zu wachsen.
        */}
        <div className="relative lg:-mr-[max(0px,calc((100vw-72rem)/2))] lg:self-stretch">
          <div className="relative aspect-4/5 overflow-hidden rounded-2xl bg-secondary sm:aspect-16/10 lg:aspect-auto lg:h-full lg:max-h-[calc(100svh-9rem)] lg:rounded-l-3xl lg:rounded-r-none">
            {/*
              Das Video ist quadratisch (960x960), der Kasten ist es nie:
              bei 1440px misst er 596x634, bei 1920px 836x634. object-cover
              skaliert deshalb auf die laengere Kante und beschneidet die
              andere mittig - bei 1920px 101px oben und unten, bei 1440px
              19px links und rechts. Die Motive sind mittig aufgebaut, das
              vertraegt der Schnitt.

              Das Standbild ist der erste Videobild selbst, nicht ein fremdes
              Foto: der Uebergang von poster zu laufendem Bild ist dadurch
              nicht zu sehen.

              Beide liegen absolut im Kasten, damit sie nichts zur Hoehe der
              Rasterzeile beitragen. Im Fluss haette das quadratische Video
              seine eigene Hoehe eingebracht: bei 1920px ist der Kasten 836px
              breit, das waeren 836px Hoehe und damit mehr als die Textspalte
              - die Zeile waere aufgegangen und der Abstand zur Schaltflaeche
              von 40 auf 112px gewachsen. Gemessen genau so aufgetreten.
            */}
            <video
              className="hero-video absolute inset-0 h-full w-full object-cover"
              poster="/hero-poster.jpg"
              aria-label={t.hero.videoLabel}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
            >
              <source src="/hero.mp4" type="video/mp4" />
            </video>

            {/*
              Ersatz fuer prefers-reduced-motion, per CSS eingeblendet.
              Dieselbe Datei wie das poster-Attribut, also kein zweiter Abruf.
            */}
            <img
              src="/hero-poster.jpg"
              alt=""
              className="hero-video-still absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
