import type { SiteImage } from '@/lib/images'
import { cn } from '@/lib/utils'

/*
  Bewusst ein natives <img> statt next/image: die Projektkonfiguration hat
  `images.unoptimized = true`, next/image wuerde also ohnehin nur durchreichen
  und zusaetzlich eine remotePatterns-Pflege verlangen. Mit srcSet/sizes,
  width/height und lazy loading bekommen wir dasselbe Ergebnis ohne Konfig.
*/
export function Photo({
  image,
  sizes,
  className,
  priority = false,
  imgClassName,
}: {
  image: SiteImage
  sizes: string
  className?: string
  priority?: boolean
  imgClassName?: string
}) {
  return (
    <img
      src={image.src}
      srcSet={image.srcSet}
      sizes={sizes}
      alt={image.alt}
      width={image.width}
      height={image.height}
      loading={priority ? 'eager' : 'lazy'}
      // Das Hero-Bild ist das groesste Element des ersten Bildschirms und
      // bestimmt den LCP-Wert, deshalb hoechste Dekodier-Prioritaet.
      fetchPriority={priority ? 'high' : 'auto'}
      decoding={priority ? 'sync' : 'async'}
      className={cn('h-full w-full object-cover', imgClassName, className)}
    />
  )
}
