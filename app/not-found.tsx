import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <main
      id="main"
      className="flex min-h-svh flex-col items-center justify-center px-6 py-24 text-center"
    >
      <p className="text-sm font-semibold text-primary">404</p>
      <h1 className="text-h2 mt-4">This page took a different route.</h1>
      <p className="measure-tight mt-5 text-muted-foreground">
        The link is broken or the page has moved. Everything about what we do is on the home page.
      </p>
      <div className="mt-9 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground"
        >
          <ArrowLeft className="size-4" aria-hidden />
          Back to the home page
        </Link>
        <a
          href="mailto:hello@mhconsulting.ae"
          className="inline-flex items-center justify-center rounded-full border border-input px-7 py-3.5 text-sm font-semibold transition-colors hover:bg-secondary"
        >
          Email us instead
        </a>
      </div>
    </main>
  )
}
