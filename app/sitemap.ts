import type { MetadataRoute } from 'next'

import { LOCALES, LOCALE_TAGS } from '@/lib/i18n/config'

const BASE = 'https://mh-consulting-mit-fikret.vercel.app'

// Impressum und Datenschutz stehen bewusst nicht drin: sie sind per
// robots-Metadatum auf noindex gesetzt, solange die Firmenangaben fehlen.
const PATHS: { path: string; priority: number; changeFrequency: 'monthly' | 'yearly' }[] = [
  { path: '', priority: 1, changeFrequency: 'monthly' },
  { path: '/for-brands', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/for-creators', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/contact', priority: 0.8, changeFrequency: 'yearly' },
  { path: '/about', priority: 0.7, changeFrequency: 'yearly' },
]

/*
  Jede Seite steht in jeder Sprache drin, und jeder Eintrag verweist ueber
  `alternates.languages` auf seine Uebersetzungen. Ohne das wuerden
  Suchmaschinen die drei Fassungen als Doppelinhalte behandeln.
*/
export default function sitemap(): MetadataRoute.Sitemap {
  return LOCALES.flatMap((locale) =>
    PATHS.map(({ path, priority, changeFrequency }) => ({
      url: `${BASE}/${locale}${path}`,
      changeFrequency,
      priority,
      alternates: {
        languages: Object.fromEntries(
          LOCALES.map((l) => [LOCALE_TAGS[l], `${BASE}/${l}${path}`]),
        ),
      },
    })),
  )
}
