import type { MetadataRoute } from 'next'

/*
  Web-App-Manifest.

  Gebaut fuer die Kacheln, die Chrome auf der Startseite eines neuen Tabs
  zeigt, und fuer "Zum Startbildschirm hinzufuegen". Fuer diese Faelle reicht
  favicon.ico nicht: der Browser sucht dort ein Symbol von mindestens 192px,
  und ohne Manifest hat er nur die 48px aus der ico-Datei zur Auswahl.

  Zwei Zwecke, deshalb zwei Fassungen:
  - "any" traegt die freigestellte Scheibe. Der Browser setzt sie auf seinen
    eigenen Grund, die durchsichtigen Ecken bleiben durchsichtig.
  - "maskable" traegt das volle dunkle Quadrat. Android beschneidet Symbole
    auf seine eigene Form - Kreis, Rundung, Tropfen. Eine freigestellte
    Scheibe wuerde dabei doppelt gerundet und an den Seiten angeschnitten.

  start_url zeigt auf /en, nicht auf /. Die Wurzel leitet zwar dorthin um
  (siehe next.config.mjs), aber eine installierte App wuerde bei jedem Start
  ueber diese Umleitung laufen.
*/
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'MH Consulting & Influencer Marketing',
    short_name: 'MH Consulting',
    description:
      'Influencer marketing agency in Dubai turning creators into long-term brand partners.',
    start_url: '/en',
    display: 'standalone',
    // Gemessen am gerenderten Body der hellen Seite, nicht geschaetzt.
    background_color: '#f9fafc',
    theme_color: '#f9fafc',
    icons: [
      { src: '/icon-192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
      { src: '/icon-maskable-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
    ],
  }
}
