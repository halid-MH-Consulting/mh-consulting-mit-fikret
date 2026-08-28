'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'
import { cn } from '@/lib/utils'

export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = 'div',
}: {
  children: ReactNode
  className?: string
  delay?: number
  as?: 'div' | 'section' | 'li' | 'article' | 'header'
}) {
  const ref = useRef<HTMLElement | null>(null)
  const [visible, setVisible] = useState(false)
  // Sichtbar ohne Uebergang. Noetig, wenn das Dokument versteckt ist: dort
  // laufen CSS-Uebergaenge nicht, die Deckkraft bliebe sonst bei 0 stehen.
  const [instant, setInstant] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    /*
      Ein verstecktes Dokument liefert keine IntersectionObserver-Callbacks.
      Ohne diesen Zweig bleibt der Inhalt in Hintergrund-Tabs, bei
      Screenshot-Diensten und bei Prerender-Bots dauerhaft auf opacity 0,
      also unsichtbar. Nachgemessen: in einem versteckten Dokument feuert
      selbst ein frisch angelegter Observer nicht ein einziges Mal.

      Wer die Seite ungesehen laedt, braucht keine Einblendung. Also sofort
      zeigen, ohne Uebergang, und den Observer gar nicht erst starten.
    */
    if (document.visibilityState === 'hidden') {
      setVisible(true)
      setInstant(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const Component = Tag as any

  return (
    <Component
      ref={ref}
      className={cn('reveal', visible && 'is-visible', className)}
      style={instant ? { transition: 'none' } : { transitionDelay: `${delay}ms` }}
    >
      {children}
    </Component>
  )
}
