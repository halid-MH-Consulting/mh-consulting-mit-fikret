'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'

import { DEFAULT_LOCALE, getDictionary, href, isLocale, type Locale } from '@/lib/i18n'

/*
  not-found.tsx bekommt in Next keine params durchgereicht, auch nicht in einem
  dynamischen Segment. Die Sprache wird deshalb aus dem Pfad gelesen. Das geht
  nur clientseitig, also ist die Seite bewusst eine Client-Komponente.
*/
export default function NotFound() {
  const pathname = usePathname() ?? ''
  const first = pathname.split('/').filter(Boolean)[0]
  const locale: Locale = first && isLocale(first) ? first : DEFAULT_LOCALE
  const t = getDictionary(locale)

  return (
    <main
      id="main"
      className="flex min-h-svh flex-col items-center justify-center px-6 py-24 text-center"
    >
      <p className="text-sm font-semibold text-primary">404</p>
      <h1 className="text-h2 mt-4">{t.notFound.heading}</h1>
      <p className="measure-tight mt-5 text-muted-foreground">{t.notFound.body}</p>
      <div className="mt-9 flex flex-col gap-3 sm:flex-row">
        <Link
          href={href(locale, '/')}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground"
        >
          <ArrowLeft className="size-4" aria-hidden />
          {t.notFound.back}
        </Link>
        <a
          href="mailto:hello@mhconsulting.ae"
          className="inline-flex items-center justify-center rounded-full border border-input px-7 py-3.5 text-sm font-semibold transition-colors hover:bg-secondary"
        >
          {t.notFound.email}
        </a>
      </div>
    </main>
  )
}
