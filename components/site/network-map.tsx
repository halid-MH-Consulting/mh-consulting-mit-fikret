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

export function NetworkMap() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  return (
    <section className="relative overflow-hidden py-24 md:py-32" aria-labelledby="network-heading">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="max-w-2xl">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-electric">
            Global creator network
          </p>
          <h2
            id="network-heading"
            className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl"
          >
            One hub in Dubai. Creators everywhere your audience is.
          </h2>
          <p className="mt-5 max-w-xl text-pretty leading-relaxed text-muted-foreground">
            We connect brands with vetted creators across continents — matching the right voice to
            the right destination and audience.
          </p>
        </Reveal>

        <Reveal delay={120} className="mt-10">
          <div className="glass relative overflow-hidden rounded-3xl p-2 sm:p-4">
            <div
              aria-hidden
              className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-electric/10 blur-[120px]"
            />
            {!mounted && <div className="aspect-[2/1] w-full" aria-hidden />}
            {mounted && (
            <ComposableMap
              projection="geoMercator"
              projectionConfig={{ scale: 130, center: [30, 25] }}
              style={{ width: '100%', height: 'auto' }}
              aria-label="World map showing MH Consulting creator network"
            >
              <Geographies geography={GEO_URL}>
                {({ geographies }) =>
                  geographies.map((geo) => (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill="oklch(0.935 0.012 264)"
                      stroke="oklch(0.82 0.018 264)"
                      strokeWidth={0.3}
                      style={{
                        default: { outline: 'none' },
                        hover: { outline: 'none', fill: 'oklch(0.89 0.022 264)' },
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
                  <circle r={2.4} fill="var(--electric)" />
                  <circle r={2.4} fill="var(--electric)" opacity={0.4}>
                    <animate attributeName="r" from="2.4" to="7" dur="2.5s" repeatCount="indefinite" />
                    <animate attributeName="opacity" from="0.4" to="0" dur="2.5s" repeatCount="indefinite" />
                  </circle>
                </Marker>
              ))}

              <Marker coordinates={HUB}>
                <circle r={4} fill="var(--neon)" />
                <circle r={4} fill="var(--neon)" opacity={0.5}>
                  <animate attributeName="r" from="4" to="12" dur="2.5s" repeatCount="indefinite" />
                  <animate attributeName="opacity" from="0.5" to="0" dur="2.5s" repeatCount="indefinite" />
                </circle>
                <text
                  textAnchor="middle"
                  y={-10}
                  style={{ fill: 'var(--foreground)', fontSize: 8, fontWeight: 600 }}
                >
                  Dubai
                </text>
              </Marker>
            </ComposableMap>
            )}
          </div>
        </Reveal>
      </div>

      <style>{`
        @keyframes dashFlow {
          to { stroke-dashoffset: -16; }
        }
      `}</style>
    </section>
  )
}
