import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

import { href, type Dictionary, type Locale } from '@/lib/i18n'
import { Footer } from './footer'

/*
  Gemeinsamer Rahmen fuer die reinen Textseiten (Impressum, Datenschutz).
  Sie brauchen keinen Sticky-Header, nur einen klaren Rueckweg.
*/
export function TextPage({
  locale,
  t,
  title,
  children,
}: {
  locale: Locale
  t: Dictionary
  title: string
  children: React.ReactNode
}) {
  return (
    <>
      <main id="main" className="mx-auto max-w-3xl px-6 pb-24 pt-16 md:pt-24">
        <Link
          href={href(locale, '/')}
          className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-4" aria-hidden />
          {t.common.backHome}
        </Link>

        <h1 className="text-h2 mt-8">{title}</h1>

        <div className="mt-10 space-y-8 leading-relaxed [&_h2]:text-xl [&_h2]:font-bold [&_p]:text-muted-foreground">
          {children}
        </div>
      </main>
      <Footer locale={locale} t={t} />
    </>
  )
}

/* Sichtbare Markierung fuer Angaben, die MH Consulting noch liefern muss. */
export function Pending({ prefix, children }: { prefix: string; children: React.ReactNode }) {
  return (
    <mark className="rounded bg-accent/15 px-1.5 py-0.5 font-semibold text-accent">
      [{prefix}: {children}]
    </mark>
  )
}
