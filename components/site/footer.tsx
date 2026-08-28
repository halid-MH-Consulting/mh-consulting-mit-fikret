import Link from 'next/link'
import { Mail } from 'lucide-react'

/*
  Frueher standen hier vier Social-Icons, die alle auf "#" zeigten. Tote Links
  sind schlimmer als fehlende, deshalb ist die Liste jetzt leer und wird nur
  gerendert, wenn echte Profile eingetragen sind.
*/
const SOCIALS: { label: string; href: string }[] = [
  // { label: 'Instagram', href: 'https://instagram.com/…' },
  // { label: 'LinkedIn', href: 'https://linkedin.com/company/…' },
]

// Anker mit fuehrendem Slash: aus einer Unterseite muessen sie erst zurueck
// auf die Startseite fuehren, sonst laufen sie ins Leere.
const SITE_LINKS = [
  { href: '/for-brands', label: 'For brands' },
  { href: '/for-creators', label: 'For creators' },
  { href: '/about', label: 'About' },
  { href: '/#services', label: 'What we do' },
  { href: '/#network', label: 'Network' },
  { href: '/#faq', label: 'FAQ' },
]

const LEGAL_LINKS = [
  { href: '/legal-notice', label: 'Legal notice' },
  { href: '/privacy', label: 'Privacy policy' },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/50">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block py-1 text-lg font-extrabold tracking-tight">
              MH<span className="text-primary"> Consulting</span>
            </Link>
            <p className="measure-tight mt-3 text-sm leading-relaxed text-muted-foreground">
              Influencer marketing for travel brands. We turn creators into long-term brand
              partners, from a hub in Dubai.
            </p>
            <a
              href="mailto:hello@mhconsulting.ae"
              className="mt-4 inline-flex items-center gap-2 py-1.5 text-sm font-semibold underline underline-offset-4"
            >
              <Mail className="size-4 text-primary" aria-hidden />
              hello@mhconsulting.ae
            </a>
          </div>

          <nav aria-label="Pages">
            <h2 className="text-sm font-bold">Pages</h2>
            {/* py sorgt fuer >=24px Zielhoehe (WCAG 2.5.8), 17px Textzeile reicht nicht */}
            <ul className="mt-3 space-y-0.5">
              {SITE_LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="inline-block py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Legal">
            <h2 className="text-sm font-bold">Legal</h2>
            <ul className="mt-3 space-y-0.5">
              {LEGAL_LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="inline-block py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              {SOCIALS.map((s) => (
                <li key={s.href}>
                  <a
                    href={s.href}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="inline-block py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-14 border-t border-border pt-6">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} MH Consulting. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
