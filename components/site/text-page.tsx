import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

import { Footer } from './footer'

/*
  Gemeinsamer Rahmen fuer die reinen Textseiten (Impressum, Datenschutz).
  Sie brauchen keinen Sticky-Header, nur einen klaren Rueckweg.
*/
export function TextPage({
  title,
  updated,
  children,
}: {
  title: string
  updated?: string
  children: React.ReactNode
}) {
  return (
    <>
      <main id="main" className="mx-auto max-w-3xl px-6 pb-24 pt-16 md:pt-24">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-4" aria-hidden />
          Back to MH Consulting
        </Link>

        <h1 className="text-h2 mt-8">{title}</h1>
        {updated && <p className="mt-3 text-sm text-muted-foreground">Last updated: {updated}</p>}

        <div className="mt-10 space-y-8 leading-relaxed [&_h2]:text-xl [&_h2]:font-bold [&_p]:text-muted-foreground">
          {children}
        </div>
      </main>
      <Footer />
    </>
  )
}

/* Sichtbare Markierung fuer Angaben, die MH Consulting noch liefern muss. */
export function Pending({ children }: { children: React.ReactNode }) {
  return (
    <mark className="rounded bg-accent/15 px-1.5 py-0.5 font-semibold text-accent">
      [to be supplied: {children}]
    </mark>
  )
}
