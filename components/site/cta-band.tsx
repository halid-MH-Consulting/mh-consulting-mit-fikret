import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

import { Reveal } from './reveal'

/*
  Gemeinsamer Abschluss der Unterseiten. Dunkel, damit jede Unterseite denselben
  Rhythmuswechsel am Ende hat wie die Startseite, und immer mit einem konkreten
  naechsten Schritt statt einer allgemeinen Einladung.
*/
export function CtaBand({
  title,
  body,
  primary,
  secondary,
}: {
  title: string
  body: string
  primary: { href: string; label: string }
  secondary?: { href: string; label: string }
}) {
  return (
    <section className="surface-dark relative overflow-hidden py-24 md:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-electric/12 blur-[130px]"
      />
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <h2 className="text-h2">{title}</h2>
          <p className="text-lead measure mx-auto mt-6 text-muted-foreground">{body}</p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href={primary.href}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground transition-transform duration-200 hover:-translate-y-0.5"
            >
              {primary.label}
              <ArrowUpRight
                className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden
              />
            </Link>
            {secondary && (
              <Link
                href={secondary.href}
                className="inline-flex items-center justify-center rounded-full border border-input px-7 py-4 text-sm font-semibold transition-colors hover:bg-secondary"
              >
                {secondary.label}
              </Link>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
