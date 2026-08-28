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
  srcSet: string
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
  // Hero: Kuestenlinie aus der Luft, tuerkises Wasser, gruene Landzunge.
  hero: build(
    'photo-1555979864-7a8f9b4fddf8',
    'Aerial view of a turquoise bay meeting a green headland — the kind of destination our creators make people book',
    1600,
    1067,
  ),
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
} satisfies Record<string, SiteImage>
