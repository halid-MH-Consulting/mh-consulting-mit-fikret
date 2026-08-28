'use client'

import { useEffect, useState } from 'react'
import { ComposableMap, Geographies, Geography, Line, Marker } from 'react-simple-maps'

import { Reveal } from './reveal'

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

  Die Geodaten kommen von einem CDN. Faellt das aus, bleibt die Staedteliste
  darunter stehen, damit die Aussage nicht mit dem Bild verschwindet.
*/
export function NetworkMap() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  return (
    <section
      id="network"
      className="surface-dark relative overflow-hidden py-24 md:py-32"
      aria-labelledby="network-heading"
    >
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="max-w-2xl">
          <h2 id="network-heading" className="text-h2">
            One hub in Dubai. Creators everywhere your audience is.
          </h2>
          <p className="text-lead measure mt-5 text-muted-foreground">
            We match the right voice to the right destination, so the recommendation comes from
            someone who has actually been there.
          </p>
        </Reveal>

        <Reveal delay={120} className="mt-12">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card/40 p-2 sm:p-4">
            <div
              aria-hidden
              className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-electric/10 blur-[120px]"
            />
            {/* Platz reservieren, damit beim Nachladen nichts springt */}
            {!mounted && (
              <div className="aspect-2/1 w-full animate-pulse rounded-2xl bg-muted/40" aria-hidden />
            )}
            {mounted && (
              <ComposableMap
                projection="geoMercator"
                projectionConfig={{ scale: 130, center: [30, 25] }}
                style={{ width: '100%', height: 'auto' }}
                aria-label="World map showing the MH Consulting creator network, with a hub in Dubai connecting to London, New York, Singapore, Cape Town, Sydney, Tokyo, São Paulo and Bali"
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

                {CREATORS.map((c, i) => (
                  <Line
                    key={c.name}
                    from={HUB}
                    to={c.coords}
                    stroke="var(--electric)"
                    strokeWidth={1}
                    strokeLinecap="round"
                    strokeOpacity={0.55}
                    style={{
                      strokeDasharray: 4,
                      animation: `dashFlow 3s linear ${i * 0.25}s infinite`,
                    }}
                  />
                ))}

                {CREATORS.map((c) => (
                  <Marker key={c.name} coordinates={c.coords}>
                    <circle r={2.4} fill="var(--glow-cyan)" />
                    <circle r={2.4} fill="var(--glow-cyan)" opacity={0.4}>
                      <animate
                        attributeName="r"
                        from="2.4"
                        to="7"
                        dur="2.5s"
                        repeatCount="indefinite"
                      />
                      <animate
                        attributeName="opacity"
                        from="0.4"
                        to="0"
                        dur="2.5s"
                        repeatCount="indefinite"
                      />
                    </circle>
                  </Marker>
                ))}

                <Marker coordinates={HUB}>
                  <circle r={4} fill="var(--neon)" />
                  <circle r={4} fill="var(--neon)" opacity={0.5}>
                    <animate
                      attributeName="r"
                      from="4"
                      to="12"
                      dur="2.5s"
                      repeatCount="indefinite"
                    />
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
                    style={{ fill: 'var(--foreground)', fontSize: 8, fontWeight: 700 }}
                  >
                    Dubai
                  </text>
                </Marker>
              </ComposableMap>
            )}
          </div>
        </Reveal>

        {/* Traegt die Aussage auch ohne Karte */}
        <Reveal delay={200}>
          <ul className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <li className="font-semibold text-foreground">Dubai</li>
            {CREATORS.map((c) => (
              <li key={c.name}>{c.name}</li>
            ))}
          </ul>
        </Reveal>
      </div>

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
