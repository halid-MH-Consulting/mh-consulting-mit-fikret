import { clsx, type ClassValue } from 'clsx'
import { extendTailwindMerge } from 'tailwind-merge'

/*
  tailwind-merge kennt unsere eigenen Utilities nicht und ordnet alles, was mit
  "text-" beginnt, den Textfarben zu. Ohne diese Erweiterung passiert Folgendes:

    cn('text-lead text-muted-foreground')  ->  'text-muted-foreground'

  Die Schriftgroesse wird stillschweigend geschluckt, weil tailwind-merge
  glaubt, zwei Farben zu sehen, und die letzte gewinnt. Der Fehler ist
  unauffaellig: es bricht nichts, der Text ist nur ploetzlich 16px statt 17-20px.

  Deshalb melden wir die eigenen Klassen bei ihren richtigen Gruppen an: die
  Groessen bei font-size, damit sie sich gegenseitig ueberschreiben, und die
  Leuchteffekte in einer eigenen Gruppe, weil sie mit nichts kollidieren.
*/
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      'font-size': ['text-display', 'text-h2', 'text-h3', 'text-lead'],
      'text-glow': ['text-glow-electric', 'text-glow-neon'],
    },
  },
})

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
