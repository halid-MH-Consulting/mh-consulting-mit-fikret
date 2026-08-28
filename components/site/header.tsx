'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'

import { cn } from '@/lib/utils'

const NAV = [
  { href: '/for-brands', label: 'For brands' },
  { href: '/for-creators', label: 'For creators' },
  { href: '/about', label: 'About' },
  { href: '/#faq', label: 'FAQ' },
]

export function Header() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const panelRef = useRef<HTMLDivElement | null>(null)

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
  const isCurrent = (href: string) => href.startsWith('/') && !href.includes('#') && pathname === href

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-40 transition-[background-color,border-color,backdrop-filter] duration-300',
        scrolled
          ? 'border-b border-border bg-background/85 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-6 md:h-20">
        <Link href="/" className="text-lg font-extrabold tracking-tight" aria-label="MH Consulting, home">
          MH<span className="text-primary"> Consulting</span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isCurrent(item.href) ? 'page' : undefined}
              className={cn(
                'rounded-full px-3.5 py-2 text-sm font-medium transition-colors',
                isCurrent(item.href)
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
            href="/contact"
            className="group hidden items-center gap-1.5 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform duration-200 hover:-translate-y-0.5 sm:inline-flex"
          >
            Start a project
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
            aria-label={open ? 'Close menu' : 'Open menu'}
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
          className="fixed inset-x-0 bottom-0 top-16 overflow-y-auto border-t border-border bg-background px-6 pb-8 pt-4 md:hidden"
        >
          <nav aria-label="Mobile" className="flex flex-col">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isCurrent(item.href) ? 'page' : undefined}
                onClick={() => setOpen(false)}
                className="border-b border-border py-4 text-base font-medium text-foreground last:border-b-0"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-5 flex items-center justify-center gap-1.5 rounded-full bg-primary px-5 py-3.5 text-sm font-semibold text-primary-foreground"
          >
            Start a project
            <ArrowUpRight className="size-4" aria-hidden />
          </Link>
        </div>
      )}
    </header>
  )
}
