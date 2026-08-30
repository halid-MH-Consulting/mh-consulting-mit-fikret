import type { Dictionary } from '@/lib/i18n'
import { cn } from '@/lib/utils'
import { Reveal } from './reveal'

/*
  Unter der Ueberschrift stehen die Marken selbst statt der frueheren
  Platzhalter-Zitate, jeweils mit ihrem eigenen Einzeiler darunter.

  Die Beschreibungen stehen bewusst hier und nicht im Woerterbuch: es sind
  die Claims der Marken, die in allen drei Sprachfassungen gleich lauten.

  Die Hoehen sind pro Logo unterschiedlich gesetzt und das ist Absicht. Der
  freedome-Schriftzug ist fast doppelt so breit wie die beiden anderen; bei
  gleicher Kastenhoehe wuerde er Directo und Holafly erschlagen. Die Werte
  sind ueber die tatsaechliche Farbflaeche je Logo ausgeglichen, damit alle
  drei gleich schwer wirken. `max-w-full` faengt schmale Spalten ab, bevor
  etwas aus dem Raster laeuft.

  Der Kasten um das Logo hat eine feste Hoehe. Nur so sitzen alle drei
  Zeichen auf derselben Mittelachse und alle drei Beschreibungen beginnen
  auf derselben Linie, obwohl die Logos verschieden hoch sind.
*/
const BRANDS = [
  {
    name: 'Directo',
    src: '/logos/directo.png',
    width: 819,
    height: 219,
    size: 'h-[36px] md:h-[32px] lg:h-[40px] xl:h-[44px]',
    description: 'Same hotel, better price',
  },
  {
    name: 'Holafly',
    src: '/logos/holafly.png',
    width: 900,
    height: 248,
    size: 'h-[38px] md:h-[34px] lg:h-[42px] xl:h-[46px]',
    description: 'Stay connected wherever you go',
  },
  {
    name: 'Freedome',
    src: '/logos/freedome.png',
    width: 900,
    height: 128,
    size: 'h-[30px] md:h-[27px] lg:h-[34px] xl:h-[38px]',
    description: 'Discover unforgettable outdoor experiences across Italy',
  },
]

export function Testimonials({ t }: { t: Dictionary }) {
  return (
    <section className="relative py-24 md:py-32" aria-labelledby="testimonials-heading">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="max-w-2xl">
          <h2 id="testimonials-heading" className="text-h2">
            {t.testimonials.heading}
          </h2>
        </Reveal>

        <ul className="mt-14 grid grid-cols-1 items-start justify-items-center gap-x-8 gap-y-12 md:grid-cols-3 lg:gap-x-10">
          {BRANDS.map((brand, i) => (
            <Reveal
              as="li"
              key={brand.name}
              delay={i * 90}
              className="flex w-full flex-col items-center text-center"
            >
              <span className="flex h-[44px] items-center md:h-[40px] lg:h-[48px] xl:h-[52px]">
                <img
                  src={brand.src}
                  alt={brand.name}
                  width={brand.width}
                  height={brand.height}
                  loading="lazy"
                  decoding="async"
                  className={cn('w-auto max-w-full object-contain', brand.size)}
                />
              </span>
              <p className="mt-5 max-w-[17rem] text-sm leading-relaxed text-muted-foreground">
                {brand.description}
              </p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
