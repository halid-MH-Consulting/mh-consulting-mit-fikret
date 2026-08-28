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
} satisfies Record<string, SiteImage>
