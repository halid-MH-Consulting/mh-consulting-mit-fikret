import type { MetadataRoute } from 'next'

const BASE = 'https://mh-consulting-mit-fikret.vercel.app'

// Impressum und Datenschutz stehen bewusst nicht drin: sie sind per
// robots-Metadatum auf noindex gesetzt, solange die Firmenangaben fehlen.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE, changeFrequency: 'monthly', priority: 1 },
    { url: `${BASE}/for-brands`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/for-creators`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/about`, changeFrequency: 'yearly', priority: 0.7 },
  ]
}
