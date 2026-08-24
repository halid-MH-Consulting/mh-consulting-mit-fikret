'use client'

import { useEffect, useState } from 'react'
// clsx rather than cn(): tailwind-merge reads the custom `text-glow-*` utilities as
// text colours and strips the real colour class that sits next to them.
import { clsx } from 'clsx'

// Timings mirror the typeLoop() in the sister site's script.js one for one.
const TYPE_SPEED = 85 // ms per character while typing
const DELETE_SPEED = 45 // ms per character while deleting
const HOLD_DURATION = 1600 // ms a finished word stays on screen
const START_DELAY = 600 // ms before the first word is retyped from scratch

type Phase = 'typing' | 'holding' | 'deleting'

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduced(query.matches)
    const onChange = (e: MediaQueryListEvent) => setReduced(e.matches)
    query.addEventListener('change', onChange)
    return () => query.removeEventListener('change', onChange)
  }, [])

  return reduced
}

function Caret({ blinking }: { blinking: boolean }) {
  return (
    <span
      aria-hidden
      className={clsx(
        'ml-[0.09em] inline-block h-[0.78em] w-[0.055em] translate-y-[0.07em] rounded-full bg-current',
        blinking && 'animate-caret',
      )}
    />
  )
}

export function RotatingWord({ words, className }: { words: string[]; className?: string }) {
  const [index, setIndex] = useState(0)
  // The first word renders complete so the server markup carries real text; the
  // loop then clears it and types it out again, exactly as the original does.
  const [text, setText] = useState(words[0] ?? '')
  const [started, setStarted] = useState(false)
  const [phase, setPhase] = useState<Phase>('typing')
  const reducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    if (reducedMotion || words.length === 0) return

    if (!started) {
      const timeout = setTimeout(() => {
        setText('')
        setStarted(true)
        setPhase('typing')
      }, START_DELAY)
      return () => clearTimeout(timeout)
    }

    const current = words[index]

    if (phase === 'typing') {
      if (text.length < current.length) {
        const timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), TYPE_SPEED)
        return () => clearTimeout(timeout)
      }
      setPhase('holding')
      return
    }

    if (phase === 'holding') {
      const timeout = setTimeout(() => setPhase('deleting'), HOLD_DURATION)
      return () => clearTimeout(timeout)
    }

    if (text.length > 0) {
      const timeout = setTimeout(() => setText((t) => t.slice(0, -1)), DELETE_SPEED)
      return () => clearTimeout(timeout)
    }
    const timeout = setTimeout(() => {
      setIndex((i) => (i + 1) % words.length)
      setPhase('typing')
    }, TYPE_SPEED)
    return () => clearTimeout(timeout)
  }, [started, phase, text, index, words, reducedMotion])

  return (
    <span className={clsx('block', className)}>
      {/* screen readers get the full list once instead of every keystroke */}
      <span className="sr-only">{words.join(', ')}</span>
      <span aria-hidden className="whitespace-nowrap">
        {text}
        <Caret blinking={!reducedMotion && phase === 'holding'} />
      </span>
    </span>
  )
}
