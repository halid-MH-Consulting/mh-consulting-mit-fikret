'use client'

import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, MapPin, Sparkles } from 'lucide-react'

import { RotatingWord } from './rotating-word'

// Wie in der script.js der Schwester-Seite, mit zwei Korrekturen: dort ergaben
// "travel brands" und "the right deals" ein doppeltes Wort in der Zeile
// ("... the travel brands brands ...", "... the the right deals ...").
const HEADLINE_WORDS = ['creators', 'partnerships', 'campaigns', 'right deals']

// Neon-Toene der Netzwerkpunkte. Bewusst vier statt zwei, damit das Netz nicht
// nur nach Rot/Blau aussieht.
const HUES = {
  electric: 'var(--electric)',
  neon: 'var(--neon)',
  cyan: 'var(--glow-cyan)',
  violet: 'var(--glow-violet)',
} as const

type Hue = keyof typeof HUES

// x/y in Prozent der Sektion, size in px. Die Punkte liegen als HTML-Elemente
// ueber dem SVG: das SVG streckt mit preserveAspectRatio="none" sein
// Koordinatensystem, ein <circle> darin erscheint dadurch immer als Ei.
const NODES: { x: number; y: number; size: number; hue: Hue }[] = [
  { x: 12, y: 22, size: 13, hue: 'electric' },
  { x: 30, y: 68, size: 10, hue: 'violet' },
  { x: 52, y: 30, size: 15, hue: 'cyan' },
  { x: 72, y: 60, size: 11, hue: 'neon' },
  { x: 88, y: 26, size: 13, hue: 'electric' },
  { x: 44, y: 82, size: 9, hue: 'violet' },
  { x: 66, y: 14, size: 10, hue: 'cyan' },
  { x: 20, y: 46, size: 9, hue: 'neon' },
]

const LINKS = [
  [0, 2],
  [2, 4],
  [1, 5],
  [3, 4],
  [2, 3],
  [7, 1],
  [6, 4],
  [0, 7],
]

export function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const [glow, setGlow] = useState({ x: 50, y: 40 })

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const onMove = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect()
      setGlow({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
      })
    }
    el.addEventListener('pointermove', onMove)
    return () => el.removeEventListener('pointermove', onMove)
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-svh flex-col justify-center overflow-hidden bg-grid pt-28 pb-16"
      aria-labelledby="hero-heading"
    >
      {/* mouse-reactive glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 transition-[background] duration-300"
        style={{
          background: `radial-gradient(600px circle at ${glow.x}% ${glow.y}%, color-mix(in oklch, var(--electric) 22%, transparent), transparent 60%)`,
        }}
      />
      {/* ambient blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -left-32 h-96 w-96 rounded-full bg-electric/20 blur-[120px] animate-pulse-glow"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 right-0 h-96 w-96 rounded-full bg-neon/15 blur-[130px] animate-pulse-glow"
        style={{ animationDelay: '2s' }}
      />

      {/* abstract network — nur die Verbindungslinien, Linien vertragen die Streckung */}
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-full opacity-70"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <g filter="url(#lineGlow)">
          {LINKS.map(([a, b], i) => (
            <line
              key={i}
              x1={NODES[a].x}
              y1={NODES[a].y}
              x2={NODES[b].x}
              y2={NODES[b].y}
              stroke="url(#linkGrad)"
              strokeWidth={0.15}
              className="animate-pulse-glow"
              style={{ animationDelay: `${i * 0.4}s` }}
            />
          ))}
        </g>
        <defs>
          <linearGradient id="linkGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--electric)" />
            <stop offset="38%" stopColor="var(--glow-cyan)" />
            <stop offset="72%" stopColor="var(--glow-violet)" />
            <stop offset="100%" stopColor="var(--neon)" />
          </linearGradient>
          <filter id="lineGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="0.5" result="blurred" />
            <feMerge>
              <feMergeNode in="blurred" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </svg>

      {/* Netzwerkpunkte als HTML: echte Kreise, unabhaengig vom Seitenverhaeltnis */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {NODES.map((n, i) => {
          const color = HUES[n.hue]
          return (
            <span
              key={i}
              className="absolute block animate-float"
              style={{
                left: `${n.x}%`,
                top: `${n.y}%`,
                width: n.size,
                height: n.size,
                marginLeft: -n.size / 2,
                marginTop: -n.size / 2,
                animationDelay: `${i * 0.6}s`,
              }}
            >
              {/* pulsierender Halo-Ring */}
              <span
                className="absolute inset-0 block rounded-full animate-halo"
                style={{ border: `1px solid ${color}`, animationDelay: `${i * 0.45}s` }}
              />
              {/* Kern mit mehrstufigem Neon-Schein */}
              <span
                className="absolute inset-0 block rounded-full"
                style={{
                  background: `radial-gradient(circle at 50% 42%, oklch(1 0 0) 0%, ${color} 45%, color-mix(in oklch, ${color} 65%, transparent) 100%)`,
                  boxShadow: `0 0 ${n.size * 0.6}px ${color}, 0 0 ${n.size * 1.8}px color-mix(in oklch, ${color} 65%, transparent), 0 0 ${n.size * 3.6}px color-mix(in oklch, ${color} 35%, transparent)`,
                }}
              />
            </span>
          )
        })}
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center px-6 text-center">
        <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-medium tracking-widest text-muted-foreground uppercase">
          <span className="flex items-center gap-1.5 rounded-full border border-border bg-card/50 px-3 py-1 backdrop-blur">
            <MapPin className="size-3.5 text-electric" aria-hidden />
            Dubai, UAE — Operating Worldwide
          </span>
          <span className="hidden items-center gap-1.5 rounded-full border border-border bg-card/50 px-3 py-1 backdrop-blur sm:flex">
            <Sparkles className="size-3.5 text-neon" aria-hidden />
            Influencer Marketing Management
          </span>
        </div>

        <h1
          id="hero-heading"
          className="mt-8 max-w-5xl text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl md:text-7xl"
        >
          <span className="block">We manage the</span>
          <RotatingWord words={HEADLINE_WORDS} className="text-electric text-glow-electric" />
          <span className="block text-balance">
            brands <span className="text-neon text-glow-neon">actually want.</span>
          </span>
        </h1>

        <p className="mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
          MH Consulting is the link between travel creators and the sponsors who want their
          audience. No noise, no inflated numbers — just deals that make sense on both ends.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-electric px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-[0_0_40px_-8px_var(--electric)] transition hover:shadow-[0_0_60px_-6px_var(--electric)]"
          >
            Work with us
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-7 py-3.5 text-sm font-semibold backdrop-blur transition hover:border-electric/50 hover:bg-card/70"
          >
            Explore what we do
          </a>
        </div>
      </div>
    </section>
  )
}
