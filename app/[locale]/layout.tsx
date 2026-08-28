import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Bricolage_Grotesque } from 'next/font/google'
import { notFound } from 'next/navigation'

import { LanguageSwitcher } from '@/components/site/language-switcher'
import { LOCALES, LOCALE_TAGS, getDictionary, isLocale, type Locale } from '@/lib/i18n'
import '../globals.css'

/*
  Dies ist zugleich das Wurzel-Layout. Es gibt kein app/layout.tsx mehr: das
  <html>-Element braucht das lang-Attribut der jeweiligen Sprache, und das
  laesst sich aus einem verschachtelten Layout nicht setzen.

  Adressen ohne Sprachpraefix leitet next.config.mjs auf /en um.
*/

// Eine Familie, dafuer mit deutlichem Gewichtskontrast (400 Text / 800 Display).
// Bricolage Grotesque ist variabel und hat eine optische Groessenachse, laeuft
// also im Fliesstext ruhig und in der Schlagzeile eigenwillig.
const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  if (!isLocale(locale)) return {}
  const t = getDictionary(locale)

  return {
    metadataBase: new URL('https://mh-consulting-mit-fikret.vercel.app'),
    title: t.meta.home.title,
    description: t.meta.home.description,
    /*
      hreflang: jede Sprache verweist auf die anderen. Ohne das werten
      Suchmaschinen die Uebersetzungen als Doppelinhalte statt als Varianten.
    */
    alternates: {
      canonical: `/${locale}`,
      languages: Object.fromEntries(LOCALES.map((l) => [LOCALE_TAGS[l], `/${l}`])),
    },
    openGraph: {
      title: t.meta.home.ogTitle,
      description: t.meta.home.ogDescription,
      type: 'website',
      locale: LOCALE_TAGS[locale],
    },
  }
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f7f8fb',
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()

  const typedLocale: Locale = locale
  const t = getDictionary(typedLocale)

  return (
    <html lang={LOCALE_TAGS[typedLocale]} className={bricolage.variable} suppressHydrationWarning>
      <head>
        {/*
          Laeuft vor dem ersten Paint und schaltet damit die Reveal-Animationen
          frei. Ohne JavaScript fehlt die Klasse und alle Inhalte sind sofort
          sichtbar, statt auf opacity 0 haengen zu bleiben.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.add('js')`,
          }}
        />
      </head>
      <body className="bg-background font-sans antialiased">
        <a
          href="#main"
          className="sr-only focus-visible:not-sr-only focus-visible:fixed focus-visible:left-4 focus-visible:top-4 focus-visible:z-50 focus-visible:rounded-full focus-visible:bg-primary focus-visible:px-5 focus-visible:py-2.5 focus-visible:text-sm focus-visible:font-semibold focus-visible:text-primary-foreground"
        >
          {t.common.skipToContent}
        </a>
        {children}
        <LanguageSwitcher locale={typedLocale} labels={t.languageSwitcher} />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
