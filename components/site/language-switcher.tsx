'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { Check, Globe } from 'lucide-react'

import { LOCALES, LOCALE_LABELS, isLocale, type Locale } from '@/lib/i18n/config'
import { cn } from '@/lib/utils'

/*
  Sprachumschalter, fest unten rechts.

  Er wechselt die Sprache und bleibt dabei auf derselben Seite: aus
  /de/for-brands wird /it/for-brands, nicht die italienische Startseite. Wer
  mitten im Text die Sprache wechselt, will denselben Text lesen.

  Bewusst echte Links statt eines Klick-Handlers: so funktioniert
  "in neuem Tab oeffnen", und Suchmaschinen finden die anderen Sprachen.
*/
export function LanguageSwitcher({
  locale,
  labels,
}: {
  locale: Locale
  labels: { label: string; current: string; change: string }
}) {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const wrapRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => setOpen(false), [pathname])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    const onClick = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('mousedown', onClick)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('mousedown', onClick)
    }
  }, [open])

  // Pfad ohne Sprachpraefix, damit der Wechsel auf derselben Seite bleibt.
  const segments = (pathname ?? '/').split('/').filter(Boolean)
  const rest = segments.length > 0 && isLocale(segments[0]) ? segments.slice(1) : segments
  const suffix = rest.length > 0 ? `/${rest.join('/')}` : ''

  return (
    <div
      ref={wrapRef}
      className="fixed bottom-4 right-4 z-50 print:hidden sm:bottom-6 sm:right-6"
    >
      {open && (
        <ul
          className="mb-2 min-w-44 overflow-hidden rounded-2xl border border-border bg-popover shadow-lg shadow-black/10"
          aria-label={labels.label}
        >
          {LOCALES.map((l) => {
            const isActive = l === locale
            return (
              <li key={l}>
                <Link
                  href={`/${l}${suffix}`}
                  hrefLang={l}
                  aria-current={isActive ? 'true' : undefined}
                  className={cn(
                    'flex items-center justify-between gap-4 px-4 py-3 text-sm transition-colors',
                    isActive
                      ? 'font-semibold text-popover-foreground'
                      : 'text-muted-foreground hover:bg-secondary hover:text-popover-foreground',
                  )}
                >
                  {LOCALE_LABELS[l]}
                  {isActive && <Check className="size-4 text-primary" aria-hidden />}
                </Link>
              </li>
            )
          })}
        </ul>
      )}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={`${labels.change} — ${labels.current}: ${LOCALE_LABELS[locale]}`}
        className="flex h-11 items-center gap-2 rounded-full border border-border bg-popover px-4 text-sm font-semibold text-popover-foreground shadow-lg shadow-black/10 transition-transform duration-200 hover:-translate-y-0.5"
      >
        <Globe className="size-4 text-primary" aria-hidden />
        <span className="uppercase">{locale}</span>
      </button>
    </div>
  )
}
