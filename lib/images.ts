/*
  Zentrale Bildquellen.

  Alle Motive stammen von Unsplash. Die Unsplash-Lizenz erlaubt kommerzielle
  Nutzung ohne Namensnennung und ohne Ruecksprache mit dem Fotografen.
  Jede ID wurde vor dem Einbau mit einem Live-Abruf geprueft.

  Wenn MH Consulting eigenes Bildmaterial liefert, wird nur diese Datei
  angefasst: `src` auf den lokalen Pfad in /public zeigen lassen, fertig.
*/

const UNSPLASH = 'https://images.unsplash.com'

function unsplash(id: string, width: number) {
  return `${UNSPLASH}/${id}?auto=format&fit=crop&w=${width}&q=80`
}

export type SiteImage = {
  src: string
  /* Fehlt bei lokalen Dateien: dort gibt es nur eine Groesse. */
  srcSet?: string
  alt: string
  width: number
  height: number
}

function build(id: string, alt: string, width: number, height: number): SiteImage {
  return {
    src: unsplash(id, 1600),
    // Drei Stufen reichen: Handy, Tablet/Laptop, grosse Displays.
    srcSet: [
      `${unsplash(id, 800)} 800w`,
      `${unsplash(id, 1280)} 1280w`,
      `${unsplash(id, 2000)} 2000w`,
    ].join(', '),
    alt,
    width,
    height,
  }
}

export const IMAGES = {
  // Creator bei der Arbeit, Kamera auf Stativ ueber einer Kuestenklippe.
  creatorAtWork: build(
    'photo-1608208771441-9661953383a2',
    'A creator setting up a camera on a clifftop above the sea, filming a coastal destination',
    1600,
    1067,
  ),
  // Resort-Pool mit Palmen: steht fuer Hotel- und Resortkunden.
  resort: build(
    'photo-1696735648220-498fc4ee1655',
    'A resort pool framed by palm trees in afternoon light',
    1600,
    1067,
  ),
  // Dreh-Situation: jemand wird gefilmt, Blick auf das Kameradisplay.
  shoot: build(
    'photo-1764162051343-73cff9ec72f7',
    'A camera display showing a creator being filmed on location during a campaign shoot',
    1600,
    1067,
  ),
  // Dubai bei Nacht, von oben: dunkler Abschluss der Seite.
  dubaiNight: build(
    'photo-1739900292622-a7f860175aad',
    'Dubai at night seen from above, towers lit against the dark',
    1600,
    1067,
  ),

  // --- Landingpages ---

  // Tragflaeche ueber einer Bergkette: Aufmacher fuer Marken. Bewusst nicht die
  // Aufnahme aus dem Kabinenfenster - deren dunkler Rahmen ergibt im breiten
  // Zuschnitt schwarze Balken an beiden Seiten.
  brandsHero: build(
    'photo-1636807614810-15469432f51d',
    'An aircraft wing above a mountain range, the route between a brand and the people it wants to reach',
    1600,
    1067,
  ),
  // Arbeitssitzung am hellen Tisch: wie eine Kampagne geplant wird.
  strategyTable: build(
    'photo-1681949103006-70066fb25dfe',
    'A working session around a table, mapping out a campaign',
    1600,
    1067,
  ),
  // Creator mit Kamera vor Bergpanorama: Aufmacher fuer Creator.
  creatorHero: build(
    'photo-1758172797231-def21ae67609',
    'A creator with a camera framing a mountain landscape',
    1600,
    1067,
  ),
  // Aufnahme in einer Schlucht. Ersetzt ein frueher gewaehltes Ausruestungsfoto:
  // das wirkte in voller Groesse wie ein truebe belichteter Rohbau-Schnappschuss.
  creatorOnLocation: build(
    'photo-1657589835224-0bab10a464ff',
    'A creator photographing a canyon from the rim, working the light',
    1600,
    1067,
  ),
  // Kamera auf Stativ an der Kueste: geplante Aufnahme statt Schnappschuss.
  coastTripod: build(
    'photo-1760809493742-58e62902717a',
    'A camera on a tripod set up above the sea, waiting for the light',
    1600,
    1067,
  ),
  // Dubai bei Tag: Aufmacher der Ueber-uns-Seite.
  dubaiDay: build(
    'photo-1512453979798-5ea266f8880c',
    'The Dubai skyline in daylight, with the Burj Khalifa above the city',
    1600,
    1067,
  ),

  /*
    Aufmacher der Leistung "High Impact Campaigns". Von MH Consulting
    geliefert und liegt als einzige Datei lokal in /public - alle uebrigen
    Motive kommen von Unsplash.

    Kein srcSet: es gibt nur diese eine Fassung. 1198x692 deckt die
    Anzeigebreite von rund 790px bis etwa 1.5-facher Pixeldichte.
  */
  impact: {
    src: '/IMPACT.webp',
    alt: 'A creator seen in profile against a blue background, surrounded by a floating collage of photos, video players and social reactions',
    width: 1198,
    height: 692,
  },

  /*
    Aufmacher der Leistung "Build Brand Awareness". Von MH Consulting als
    JPEG geliefert (2574x1664, 2.42 MB) und hier auf 1600px und WebP q=90
    gebracht: 253 KB bei 42.0 dB PSNR gegen die verkleinerte Quelle, also
    visuell verlustfrei. Echt verlustfreies WebP waere mit 3.50 MB groesser
    gewesen als das Ausgangs-JPEG - deshalb q=90.

    Der Bildtext steht im alt-Attribut: er ist Teil der Aussage und fuer
    Suchmaschinen sonst unsichtbar.
  */
  brandAwareness: {
    src: '/service-brand-awareness.webp',
    alt: 'A figure standing on the surface of dark water, overlaid with the words "See what we do others miss?"',
    width: 1600,
    height: 1034,
  },
  /*
    Aufmacher der Leistung "Consulting". Quelle 2732x1536, 2.01 MB; hier
    1600px und WebP q=90, 135 KB bei 43.1 dB PSNR.
  */
  consulting: {
    src: '/service-consulting.webp',
    alt: 'A diagram of influencer marketing channels around a presenter with a microphone: podcasts, blogs and websites, email newsletters, online publications, webinars and virtual events, and traditional media, with the stated benefits wider reach, higher trust, stronger impact, better ROI and endless possibilities',
    width: 1600,
    height: 900,
  },
  /*
    Motiv fuer den Prozess-Abschnitt. Quelle von MH Consulting als AVIF,
    1800x945, 78 KB; hier WebP q=90, 159 KB bei 43.6 dB PSNR. Das
    Seitenverhaeltnis ist 1.905 - deutlich breiter als jeder andere
    Bildrahmen auf der Seite.
  */
  whatMakesUsDifferent: {
    src: '/what-makes-us-different.webp',
    alt: 'A smiling man in a lilac jacket drawing a rising line and the figure 10K on a glass wall in a bright office full of plants',
    width: 1800,
    height: 945,
  },
} satisfies Record<string, SiteImage>
