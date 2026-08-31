import Link from 'next/link'
import { Mail } from 'lucide-react'

import { href, type Dictionary, type Locale } from '@/lib/i18n'

/*
  Frueher standen hier vier Social-Icons, die alle auf "#" zeigten. Tote Links
  sind schlimmer als fehlende, deshalb ist die Liste jetzt leer und wird nur
  gerendert, wenn echte Profile eingetragen sind.
*/
const SOCIALS: { label: string; url: string }[] = [
  // { label: 'Instagram', url: 'https://instagram.com/…' },
  // { label: 'LinkedIn', url: 'https://linkedin.com/company/…' },
]

export function Footer({ locale, t }: { locale: Locale; t: Dictionary }) {
  // Anker mit fuehrendem Slash: aus einer Unterseite muessen sie erst zurueck
  // auf die Startseite fuehren, sonst laufen sie ins Leere.
  const siteLinks = [
    { path: '/for-brands', label: t.nav.forBrands },
    { path: '/for-creators', label: t.nav.forCreators },
    { path: '/about', label: t.nav.about },
    { path: '/contact', label: t.nav.contact },
    { path: '/#services', label: t.footer.whatWeDo },
    { path: '/#faq', label: t.nav.faq },
  ]

  const legalLinks = [
    { path: '/legal-notice', label: t.footer.legalNotice },
    { path: '/privacy', label: t.footer.privacy },
  ]

  return (
    <footer className="border-t border-border bg-secondary/50">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            {/*
              Hier die Fassung mit Kreis, im Kopf steht die Wortmarke ohne.

              Die Datei stammt aus Logo_vektor.ai und wird bei 1200px Breite
              gerastert, nicht mehr aus der alten 240px-Fassung skaliert.
              Bei 199px Anzeige reicht das bis zu dreifacher Pixeldichte.

              Die Hoehe ist nicht geschaetzt, sondern aus dem Zeichen selbst
              abgeleitet: im Render misst der Schriftzug CONSULTING 86 Pixel,
              die Zeile "&INFLUENCER MARKETING" 38. Damit die untere Zeile so
              gross wird wie CONSULTING bei 88px war, muss das ganze Zeichen
              um 86/38 wachsen - das sind 199px. Nachgerechnet traegt
              "&INFLUENCER MARKETING" dort 6.4px, genau so viel wie
              CONSULTING vorher.
              Kein aria-label auf dem Link, der zugaengliche Name kommt aus
              dem alt-Text - ein Label wuerde ihn verdecken.
            */}
            <Link href={href(locale, '/')} className="inline-flex items-center">
              <img
                src="/mh-consulting-logo-circle.png"
                alt="MH Consulting & Influencer Marketing"
                width={1200}
                height={1182}
                className="h-[199px] w-auto object-contain"
              />
            </Link>
            <p className="measure-tight mt-6 text-sm leading-relaxed text-muted-foreground">
              {t.footer.tagline}
            </p>
            <a
              href="mailto:outreach@m-hconsulting.com"
              className="mt-5 inline-flex items-center gap-2 py-1.5 text-sm font-semibold underline underline-offset-4"
            >
              <Mail className="size-4 text-primary" aria-hidden />
              outreach@m-hconsulting.com
            </a>
          </div>

          <nav aria-label={t.footer.pages}>
            <h2 className="text-sm font-bold">{t.footer.pages}</h2>
            {/* py sorgt fuer >=24px Zielhoehe (WCAG 2.5.8), 17px Textzeile reicht nicht */}
            <ul className="mt-3 space-y-0.5">
              {siteLinks.map((l) => (
                <li key={l.path}>
                  <Link
                    href={href(locale, l.path)}
                    className="inline-block py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label={t.footer.legal}>
            <h2 className="text-sm font-bold">{t.footer.legal}</h2>
            <ul className="mt-3 space-y-0.5">
              {legalLinks.map((l) => (
                <li key={l.path}>
                  <Link
                    href={href(locale, l.path)}
                    className="inline-block py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              {SOCIALS.map((s) => (
                <li key={s.url}>
                  <a
                    href={s.url}
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
          {/*
            Kein Copyright-Vermerk: die Zeile nennt die Inhaberschaft, nicht
            ein Urheberrecht. Sie steht in allen drei Sprachfassungen gleich,
            weil sie eine Firmierung ist und keine uebersetzbare Aussage -
            deshalb hier in der Komponente statt im Woerterbuch.
          */}
          <p className="text-xs text-muted-foreground">
            MH Consulting own Imeroska - FZCO<sup className="text-[0.7em]">&trade;</sup>
          </p>
        </div>
      </div>
    </footer>
  )
}
