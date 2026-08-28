/*
  Sprachen der Seite.

  Alle Locales bekommen ein Praefix, auch Englisch: /en, /de, /it. Das ist
  unspektakulaerer als eine praefixlose Standardsprache, dafuer gibt es keine
  Sonderfaelle beim Verlinken und beim Sprachwechsel, und jede Sprache hat
  eine eigene, indexierbare Adresse.

  Die alten Adressen ohne Praefix leiten in next.config.mjs dauerhaft auf /en.

  Arabisch fehlt bewusst: Dubai waere inhaltlich das staerkste Argument, aber
  Rechts-nach-links betrifft Navigation, Karte, Formular und saemtliche
  Abstaende. Das gehoert in einen eigenen Durchgang, nicht nebenbei.
*/
export const LOCALES = ['en', 'de', 'it'] as const

export type Locale = (typeof LOCALES)[number]

export const DEFAULT_LOCALE: Locale = 'en'

/* Eigenbezeichnung: im Sprachumschalter steht jede Sprache in sich selbst,
   nicht in der gerade aktiven. "Deutsch" findet man als Deutschsprachiger
   auch dann, wenn die Seite gerade italienisch ist. */
export const LOCALE_LABELS: Record<Locale, string> = {
  en: 'English',
  de: 'Deutsch',
  it: 'Italiano',
}

/* Fuer das lang-Attribut und hreflang. */
export const LOCALE_TAGS: Record<Locale, string> = {
  en: 'en',
  de: 'de',
  it: 'it',
}

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value)
}
