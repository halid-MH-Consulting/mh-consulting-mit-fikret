'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'

import { href, type Dictionary, type Locale } from '@/lib/i18n'
import { cn } from '@/lib/utils'

export function Header({ locale, t }: { locale: Locale; t: Dictionary }) {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const panelRef = useRef<HTMLDivElement | null>(null)

  const NAV = [
    { path: '/for-brands', label: t.nav.forBrands },
    { path: '/for-creators', label: t.nav.forCreators },
    { path: '/about', label: t.nav.about },
    { path: '/#faq', label: t.nav.faq },
  ]

  // Kompakter Zustand, sobald der Seitenkopf verlassen wird.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Beim Seitenwechsel schliessen, sonst bleibt das Menue offen stehen.
  useEffect(() => setOpen(false), [pathname])

  // Mobiles Menue: Escape schliesst, Klick ausserhalb schliesst,
  // Hintergrund scrollt nicht mit.
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    const onClick = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('mousedown', onClick)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('mousedown', onClick)
      document.body.style.overflow = prev
    }
  }, [open])

  // Nur echte Routen koennen "aktuell" sein, der FAQ-Anker nie.
  const isCurrent = (path: string) => !path.includes('#') && pathname === href(locale, path)

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-40 transition-[background-color,border-color,backdrop-filter] duration-300',
        scrolled
          ? 'border-b border-border bg-background/85 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between gap-6 px-6 md:h-24">
        {/*
          Kein aria-label auf dem Link: der zugaengliche Name soll aus dem
          alt-Text des Bildes kommen, sonst wuerde das Label ihn verdecken.
          Die Wortmarke ist breiter als hoch, die Hoehe bestimmt die
          Breite. 46px in der 72px-Leiste, 62px in der 96px-Leiste - die
          Leiste selbst waechst dadurch nicht.
        */}
        <Link href={href(locale, '/')} className="flex shrink-0 items-center">
          <img
            src="/mh-consulting-logo.png"
            alt="MH Consulting & Influencer Marketing"
            width={400}
            height={248}
            className="h-[46px] w-auto object-contain md:h-[62px]"
          />
        </Link>

        <nav aria-label={t.nav.main} className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.path}
              href={href(locale, item.path)}
              aria-current={isCurrent(item.path) ? 'page' : undefined}
              className={cn(
                'rounded-full px-4 py-2 text-[0.9375rem] font-medium transition-colors',
                isCurrent(item.path)
                  ? 'font-semibold text-foreground'
                  : 'text-muted-foreground hover:text-foreground',
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href={href(locale, '/contact')}
            className="group hidden items-center gap-1.5 rounded-full bg-primary px-5.5 py-2.5 text-[0.9375rem] font-semibold text-primary-foreground transition-transform duration-200 hover:-translate-y-0.5 sm:inline-flex"
          >
            {t.common.startProject}
            <ArrowUpRight
              className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden
            />
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
            className="flex size-11 items-center justify-center rounded-full border border-border text-foreground md:hidden"
          >
            {open ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
          </button>
        </div>
      </div>

      {open && (
        <div
          id="mobile-nav"
          ref={panelRef}
          // Bildschirmfuellend statt als Klappe: sonst scheint der Inhalt
          // darunter durch und man sieht zwei Haupt-Buttons gleichzeitig.
          className="fixed inset-x-0 bottom-0 top-[72px] overflow-y-auto border-t border-border bg-background px-6 pb-8 pt-4 md:hidden"
        >
          <nav aria-label={t.nav.mobile} className="flex flex-col">
            {NAV.map((item) => (
              <Link
                key={item.path}
                href={href(locale, item.path)}
                aria-current={isCurrent(item.path) ? 'page' : undefined}
                onClick={() => setOpen(false)}
                className="border-b border-border py-4 text-base font-medium text-foreground last:border-b-0"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Link
            href={href(locale, '/contact')}
            onClick={() => setOpen(false)}
            className="mt-5 flex items-center justify-center gap-1.5 rounded-full bg-primary px-5 py-3.5 text-sm font-semibold text-primary-foreground"
          >
            {t.common.startProject}
            <ArrowUpRight className="size-4" aria-hidden />
          </Link>
        </div>
      )}
    </header>
  )
}
