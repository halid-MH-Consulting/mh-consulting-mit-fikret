import Link from 'next/link'
import { ArrowUpRight, MapPin } from 'lucide-react'

import { href, type Dictionary, type Locale } from '@/lib/i18n'
import { RotatingWord } from './rotating-word'

export function Hero({ locale, t }: { locale: Locale; t: Dictionary }) {
  return (
    <section
      id="top"
      className="relative isolate mt-[72px] flex min-h-[calc(100svh-72px)] overflow-hidden bg-slate-950 md:mt-24 md:min-h-[calc(100svh-96px)]"
      aria-labelledby="hero-heading"
    >
      <video
        className="hero-video absolute inset-0 -z-30 h-full w-full object-cover object-center"
        poster="/hero-poster.jpg"
        aria-label={t.hero.videoLabel}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source media="(max-width: 639px)" src="/hero-mobile.mp4" type="video/mp4" />
        <source media="(max-width: 1023px)" src="/hero-tablet.mp4" type="video/mp4" />
        <source src="/hero-desktop.mp4" type="video/mp4" />
      </video>

      <img
        src="/hero-poster.jpg"
        alt=""
        className="hero-video-still absolute inset-0 -z-20 h-full w-full object-cover object-center"
      />

      <div
        className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(3,8,20,0.9)_0%,rgba(3,8,20,0.73)_38%,rgba(3,8,20,0.22)_68%,rgba(3,8,20,0.08)_100%)]"
        aria-hidden
      />
      <div
        className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(3,8,20,0.28)_0%,transparent_28%,rgba(3,8,20,0.34)_100%)]"
        aria-hidden
      />

      <div className="mx-auto flex w-full max-w-6xl items-end px-6 pb-10 pt-8 sm:items-center sm:pb-16 md:pb-20 md:pt-12">
        <div className="max-w-[44rem] py-6 text-white sm:py-10">
          <p className="text-hero-meta flex items-center gap-2 font-medium text-white/78">
            <MapPin className="size-4 text-primary" aria-hidden />
            {t.hero.location}
          </p>

          <h1
            id="hero-heading"
            className="text-hero-display mt-6 text-white [text-shadow:0_2px_22px_rgba(0,0,0,0.25)]"
          >
            <span className="block">{t.hero.line1}</span>
            <RotatingWord words={t.hero.words} className="text-primary" />
            <span className="block">
              {t.hero.line3} <span className="text-accent">{t.hero.line3Accent}</span>
            </span>
          </h1>

          <p className="text-hero-lead measure mt-7 text-white/78">{t.hero.lead}</p>

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
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/45 bg-white/8 px-7 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/16"
            >
              {t.hero.ctaSecondary}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
