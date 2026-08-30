import { Mail, MapPin } from 'lucide-react'

import { IMAGES } from '@/lib/images'
import type { Dictionary } from '@/lib/i18n'
import { ContactForm } from './contact-form'
import { Photo } from './photo'
import { Reveal } from './reveal'

/*
  Dunkler Anker 4 von 4, und zugleich der einzige Ort mit einem Formular.
  Das Foto liegt gedaempft hinter allem: es soll Stimmung tragen, nicht mit
  dem Text um Aufmerksamkeit kaempfen.
*/
export function FinalCta({ t }: { t: Dictionary }) {
  return (
    <section
      id="contact"
      className="surface-dark relative isolate overflow-hidden py-24 md:py-32"
      aria-labelledby="cta-heading"
    >
      <div aria-hidden className="absolute inset-0 -z-10">
        <Photo image={IMAGES.dubaiNight} sizes="100vw" imgClassName="opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
      </div>

      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16">
        <Reveal className="lg:py-4">
          <h2 id="cta-heading" className="text-h2">
            {t.finalCta.headingBefore}{' '}
            <span className="text-electric text-glow-electric">{t.finalCta.headingAccent}</span>{' '}
            {t.finalCta.headingAfter}
          </h2>
          <p className="text-lead measure mt-6 text-muted-foreground">{t.finalCta.lead}</p>

          <dl className="mt-10 space-y-4 text-sm">
            <div className="flex items-center gap-3">
              <dt className="sr-only">{t.finalCta.email}</dt>
              <Mail className="size-4 shrink-0 text-primary" aria-hidden />
              <dd>
                <a
                  href="mailto:outreach@m-hconsulting.com"
                  className="font-semibold underline underline-offset-4"
                >
                  outreach@m-hconsulting.com
                </a>
              </dd>
            </div>
            <div className="flex items-center gap-3">
              <dt className="sr-only">{t.finalCta.location}</dt>
              <MapPin className="size-4 shrink-0 text-primary" aria-hidden />
              <dd className="text-muted-foreground">{t.finalCta.locationValue}</dd>
            </div>
          </dl>
        </Reveal>

        <Reveal delay={120}>
          <ContactForm t={t} />
        </Reveal>
      </div>
    </section>
  )
}
