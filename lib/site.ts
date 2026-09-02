/*
  Die oeffentliche Adresse der Seite, an genau einer Stelle.

  Sie stand vorher dreimal getrennt im Code - im Wurzel-Layout als
  metadataBase, in robots.ts als Sitemap-Verweis und in sitemap.ts als BASE -
  und war in allen dreien noch die vercel.app-Adresse eines anderen Projekts.
  Kanonische Verweise, hreflang, og:url und die Sitemap zeigten damit auf eine
  Adresse, unter der die Seite gar nicht laeuft.

  Das www gehoert dazu: m-hconsulting.com antwortet mit 308 auf
  www.m-hconsulting.com. Ohne das zeigte jeder kanonische Verweis auf eine
  Umleitung statt auf das Ziel.
*/
export const SITE_URL = 'https://www.m-hconsulting.com'
