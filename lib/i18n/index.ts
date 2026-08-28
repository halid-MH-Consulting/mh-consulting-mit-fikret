import { DEFAULT_LOCALE, type Locale } from './config'
import { de } from './dictionaries/de'
import { en } from './dictionaries/en'
import { it } from './dictionaries/it'
import type { Dictionary } from './dictionaries/en'

const DICTIONARIES: Record<Locale, Dictionary> = { en, de, it }

export function getDictionary(locale: Locale): Dictionary {
  return DICTIONARIES[locale] ?? DICTIONARIES[DEFAULT_LOCALE]
}

/*
  Baut einen sprachbehafteten Pfad.

    href('de', '/')          -> '/de'
    href('de', '/about')     -> '/de/about'
    href('de', '/#faq')      -> '/de#faq'

  Der Ankerfall ist der Grund, warum es diese Funktion gibt: naives
  Zusammenkleben ergaebe '/de/#faq' mit ueberzaehligem Schraegstrich, und aus
  einer Unterseite heraus wuerde der reine Anker '#faq' ins Leere laufen.
*/
export function href(locale: Locale, path: string): string {
  if (path === '/') return `/${locale}`
  if (path.startsWith('/#')) return `/${locale}${path.slice(1)}`
  return `/${locale}${path}`
}

export type { Dictionary }
export { LOCALES, LOCALE_LABELS, LOCALE_TAGS, DEFAULT_LOCALE, isLocale } from './config'
export type { Locale } from './config'
