'use client'

import { useEffect, useState } from 'react'
import { ComposableMap, Geographies, Geography, Line, Marker } from 'react-simple-maps'

import type { Dictionary } from '@/lib/i18n'
import { Reveal } from './reveal'

/*
  Die Karte liegt als Flaeche unter der ganzen Sektion, der Text darueber.

  Das SVG hat die viewBox 800x360 und deckt die Sektion mit
  preserveAspectRatio="slice" ab, wird also wie ein Hintergrundbild
  beschnitten. Der Beschnitt trifft nur leeren Ozean: mit scale 130 und
  Mittelpunkt 18 Grad Nord liegen alle acht Creator-Staedte samt Sydney und
  Kapstadt im mittleren Band, das auch bei sehr breiten Fenstern sichtbar
  bleibt. Die Mindesthoehe der Sektion sorgt dafuer, dass dieses Band nicht
  zu schmal wird.

  Kein overflow:visible auf dem SVG: die Projektion zeichnet die komplette
  Welt, und ohne Beschnitt lag die halbe Karte als Riesenbild hinter den
  Ueberschriften.
*/
const MAP_WIDTH = 800
const MAP_HEIGHT = 360

const GEO_URL = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json'

const HUB: [number, number] = [55.27, 25.2] // Dubai

const CREATORS: { name: string; coords: [number, number] }[] = [
  { name: 'London', coords: [-0.12, 51.5] },
  { name: 'New York', coords: [-74, 40.7] },
  { name: 'Singapore', coords: [103.8, 1.35] },
  { name: 'Cape Town', coords: [18.42, -33.92] },
  { name: 'Sydney', coords: [151.2, -33.86] },
  { name: 'Tokyo', coords: [139.69, 35.68] },
  { name: 'São Paulo', coords: [-46.63, -23.55] },
  { name: 'Bali', coords: [115.19, -8.41] },
]

/*
  Dunkler Anker 2 von 4. Die Karte ist der einzige Ort, an dem das Neon-Netz
  aus dem alten Entwurf inhaltlich Sinn ergibt, deshalb lebt es hier weiter.

  Die Geodaten kommen von einem CDN. Faellt das aus, tragen Ueberschrift und
  aria-label die Aussage weiter; die Staedtenamen stehen zusaetzlich
  unsichtbar im Markup (sr-only-Liste unten), weil es auf Touchgeraeten kein
  Hover gibt.
*/
export function NetworkMap({ t }: { t: Dictionary }) {
  const [mounted, setMounted] = useState(false)
  const [hovered, setHovered] = useState<string | null>(null)
  useEffect(() => setMounted(true), [])

  return (
    <section
      id="network"
      className="surface-dark relative isolate flex flex-col justify-center overflow-hidden py-16 md:min-h-[34rem] md:py-20"
      aria-labelledby="network-heading"
    >
      {/*
        Kartenebene.

        Ab md liegt sie als Flaeche unter der ganzen Sektion und wird von
        preserveAspectRatio="slice" wie ein Hintergrundbild beschnitten.

        Darunter geht das nicht: bei 375px Breite muesste slice so stark
        seitlich beschneiden, dass nur das mittlere Drittel der Karte
        uebrig bliebe und Sydney, Tokio und New York herausfielen. Auf
        kleinen Schirmen steht die Karte deshalb im normalen Fluss unter
        dem Text, und das Seitenverhaeltnis der Box entspricht dem der
        viewBox - dann schneidet slice nichts ab.
      */}
      <div
        /*
          order-2: auf kleinen Schirmen steht die Karte unter dem Text. Ab md
          ist sie absolut positioniert und faellt aus dem Flex-Fluss heraus.

          aspect-auto ab md ist Pflicht, nicht Kosmetik: ein gesetztes
          Seitenverhaeltnis gewinnt gegen inset-0 und leitet die Hoehe aus der
          Breite ab. Die Ebene wurde dadurch 641px hoch statt 544, ragte unten
          aus der Sektion und overflow-hidden schnitt zwei Marker weg.
        */
        className="relative order-2 mt-10 aspect-[800/360] w-full md:absolute md:inset-0 md:-z-10 md:mt-0 md:aspect-auto"
      >
        {mounted && (
          <ComposableMap
            projection="geoMercator"
            // Mittelpunkt bewusst westlich von Dubai: dadurch rutschen Nabe und
            // das dichte oestliche Netz in die rechte Haelfte, wo der Text sie
            // nicht ueberdeckt.
            projectionConfig={{ scale: 130, center: [8, 18] }}
            width={MAP_WIDTH}
            height={MAP_HEIGHT}
            preserveAspectRatio="xMidYMid slice"
            style={{ width: '100%', height: '100%' }}
            aria-label={t.network.mapLabel}
          >
            <Geographies geography={GEO_URL}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill="oklch(0.24 0.03 264)"
                    stroke="oklch(0.42 0.03 264)"
                    strokeWidth={0.3}
                    style={{
                      default: { outline: 'none' },
                      hover: { outline: 'none', fill: 'oklch(0.28 0.04 264)' },
                      pressed: { outline: 'none' },
                    }}
                  />
                ))
              }
            </Geographies>

            {CREATORS.map((c, i) => {
              const isActive = hovered === c.name
              return (
                <Line
                  key={c.name}
                  from={HUB}
                  to={c.coords}
                  stroke={isActive ? 'var(--glow-cyan)' : 'var(--electric)'}
                  strokeWidth={isActive ? 1.6 : 1}
                  strokeLinecap="round"
                  // Beim Zeigen tritt die gewaehlte Verbindung hervor und die
                  // uebrigen treten zurueck, sonst bleibt es ein Knaeuel.
                  strokeOpacity={hovered ? (isActive ? 1 : 0.18) : 0.55}
                  style={{
                    strokeDasharray: 4,
                    animation: `dashFlow 3s linear ${i * 0.25}s infinite`,
                    transition:
                      'stroke-opacity 220ms var(--ease-out-quart), stroke-width 220ms var(--ease-out-quart)',
                  }}
                />
              )
            })}

            {CREATORS.map((c) => {
              const isActive = hovered === c.name
              return (
                <Marker
                  key={c.name}
                  coordinates={c.coords}
                  onMouseEnter={() => setHovered(c.name)}
                  onMouseLeave={() => setHovered(null)}
                  style={{ default: { cursor: 'pointer' } }}
                >
                  {/* Unsichtbare, grosszuegige Zielflaeche: der sichtbare Punkt
                      mit r=2.4 waere mit der Maus kaum zu treffen. */}
                  <circle r={11} fill="transparent" />
                  <circle
                    r={isActive ? 4 : 2.4}
                    fill="var(--glow-cyan)"
                    style={{ transition: 'r 220ms var(--ease-out-quart)' }}
                  />
                  <circle r={2.4} fill="var(--glow-cyan)" opacity={0.4}>
                    <animate attributeName="r" from="2.4" to="7" dur="2.5s" repeatCount="indefinite" />
                    <animate
                      attributeName="opacity"
                      from="0.4"
                      to="0"
                      dur="2.5s"
                      repeatCount="indefinite"
                    />
                  </circle>
                  {isActive && (
                    <text
                      textAnchor="middle"
                      y={-12}
                      style={{
                        fill: 'var(--foreground)',
                        fontSize: 11,
                        fontWeight: 700,
                        // Kontur nach hinten: der Name bleibt ueber jedem
                        // Kartenausschnitt lesbar.
                        stroke: 'var(--background)',
                        strokeWidth: 3,
                        paintOrder: 'stroke',
                        pointerEvents: 'none',
                      }}
                    >
                      {c.name}
                    </text>
                  )}
                </Marker>
              )
            })}

            <Marker coordinates={HUB}>
              <circle r={4} fill="var(--neon)" />
              <circle r={4} fill="var(--neon)" opacity={0.5}>
                <animate attributeName="r" from="4" to="12" dur="2.5s" repeatCount="indefinite" />
                <animate
                  attributeName="opacity"
                  from="0.5"
                  to="0"
                  dur="2.5s"
                  repeatCount="indefinite"
                />
              </circle>
              <text
                textAnchor="middle"
                y={-10}
                style={{
                  fill: 'var(--foreground)',
                  fontSize: 9,
                  fontWeight: 700,
                  stroke: 'var(--background)',
                  strokeWidth: 2.5,
                  paintOrder: 'stroke',
                }}
              >
                Dubai
              </text>
            </Marker>
          </ComposableMap>
        )}

        {/*
          Verlauf zwischen Karte und Text. Ohne ihn steht weisse Schrift ueber
          Kuestenlinien und Leuchtpunkten und wird stellenweise unlesbar.
          Links deckend, nach rechts auslaufend, damit Dubai und das oestliche
          Netz frei bleiben. pointer-events-none, sonst schluckt der Verlauf
          das Hover auf den Staedtepunkten.
        */}
        <div
          aria-hidden
          className="pointer-events-none absolute hidden md:block inset-0 bg-gradient-to-r from-background/90 from-28% via-background/45 via-62% to-background/10"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute hidden md:block inset-0 bg-gradient-to-t from-background/55 via-transparent to-background/30"
        />
      </div>

      {/*
        Textebene. pointer-events-none, damit die Karte darunter durchgehend
        auf Hover reagiert.

        Der Textschatten ist die eigentliche Lesbarkeitsgarantie: er gibt jeder
        Letter einen dunklen Hof, unabhaengig davon, ob gerade eine Kuestenlinie
        oder eine Verbindung dahinter liegt. Dadurch kann der Verlauf leicht
        bleiben und die Karte sichtbar, statt sie halb wegzuwaschen.
      */}
      <div
        className="pointer-events-none relative order-1 mx-auto w-full max-w-6xl px-6"
        style={{ textShadow: '0 1px 14px oklch(0.145 0.026 264 / 0.92)' }}
      >
        <Reveal className="max-w-xl">
          <h2 id="network-heading" className="text-h2">
            {t.network.heading}
          </h2>
          <p className="text-lead measure mt-5 text-muted-foreground">
            {t.network.lead}
          </p>
        </Reveal>
      </div>

      {/* Unsichtbar, aber vorhanden: die Namen stehen sonst nur im Hover, und
          den gibt es auf Touchgeraeten nicht. */}
      <ul className="sr-only">
        <li>{t.network.hub}</li>
        {CREATORS.map((c) => (
          <li key={c.name}>{c.name}</li>
        ))}
      </ul>

      <style>{`
        @keyframes dashFlow {
          to { stroke-dashoffset: -16; }
        }
        @media (prefers-reduced-motion: reduce) {
          @keyframes dashFlow { to { stroke-dashoffset: 0; } }
        }
      `}</style>
    </section>
  )
}
