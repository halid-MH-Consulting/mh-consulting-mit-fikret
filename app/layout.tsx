import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Bricolage_Grotesque } from 'next/font/google'
import './globals.css'

// Eine Familie, dafuer mit deutlichem Gewichtskontrast (400 Text / 800 Display).
// Bricolage Grotesque ist variabel und hat eine optische Groessenachse, laeuft
// also im Fliesstext ruhig und in der Schlagzeile eigenwillig.
const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://mh-consulting-mit-fikret.vercel.app'),
  title: 'MH Consulting — Influencer Marketing for Travel Brands | Dubai',
  description:
    'MH Consulting is a Dubai-based influencer marketing agency turning creators into long-term brand partners. Specialists in travel, tourism, hotels, airlines, eSIM, VPN and travel tech. Working globally.',
  keywords: [
    'influencer marketing',
    'travel marketing',
    'creator agency',
    'Dubai agency',
    'brand partnerships',
    'tourism marketing',
  ],
  openGraph: {
    title: 'MH Consulting — Influencer Marketing for Travel Brands',
    description:
      'Dubai-based influencer marketing agency turning creators into long-term brand partners.',
    type: 'website',
    locale: 'en_US',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f7f8fb',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    // Das Inline-Skript unten aendert die Klassenliste vor der Hydration.
    // Ohne diesen Hinweis meldet React die beabsichtigte Abweichung als Fehler.
    <html lang="en" className={bricolage.variable} suppressHydrationWarning>
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
          Skip to content
        </a>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
