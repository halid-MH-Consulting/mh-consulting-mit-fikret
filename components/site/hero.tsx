'use client'

import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, MapPin, Sparkles } from 'lucide-react'

const NODES = [
  { x: 12, y: 22, r: 3, kind: 'brand' },
  { x: 30, y: 68, r: 2.4, kind: 'creator' },
  { x: 52, y: 30, r: 3.4, kind: 'creator' },
  { x: 72, y: 60, r: 2.6, kind: 'brand' },
  { x: 88, y: 26, r: 3, kind: 'creator' },
  { x: 44, y: 82, r: 2.2, kind: 'brand' },
  { x: 66, y: 14, r: 2.2, kind: 'creator' },
  { x: 20, y: 46, r: 2, kind: 'creator' },
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

      {/* abstract network */}
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-full opacity-70"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
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
        {NODES.map((n, i) => (
          <circle
            key={i}
            cx={n.x}
            cy={n.y}
            r={n.r / 6}
            fill={n.kind === 'brand' ? 'var(--neon)' : 'var(--electric)'}
            className="animate-float"
            style={{ animationDelay: `${i * 0.6}s`, transformBox: 'fill-box', transformOrigin: 'center' }}
          />
        ))}
        <defs>
          <linearGradient id="linkGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--electric)" />
            <stop offset="100%" stopColor="var(--neon)" />
          </linearGradient>
        </defs>
      </svg>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
        <div className="flex items-center gap-2 text-xs font-medium tracking-widest text-muted-foreground uppercase">
          <span className="flex items-center gap-1.5 rounded-full border border-border bg-card/50 px-3 py-1 backdrop-blur">
            <MapPin className="size-3.5 text-electric" aria-hidden />
            Dubai · Working Globally
          </span>
          <span className="hidden items-center gap-1.5 rounded-full border border-border bg-card/50 px-3 py-1 backdrop-blur sm:flex">
            <Sparkles className="size-3.5 text-neon" aria-hidden />
            Travel &amp; Tourism Specialists
          </span>
        </div>

        <h1
          id="hero-heading"
          className="mt-8 max-w-4xl text-balance text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
        >
          Turn creators into{' '}
          <span className="text-electric text-glow-electric">long-term</span> brand{' '}
          <span className="text-neon text-glow-neon">partners.</span>
        </h1>

        <p className="mt-8 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
          We don&apos;t believe in influencer marketing based on follower counts. We build
          partnerships that generate trust, reach and measurable business results.
        </p>

        <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-electric px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-[0_0_40px_-8px_var(--electric)] transition hover:shadow-[0_0_60px_-6px_var(--electric)]"
          >
            Build your next campaign
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
