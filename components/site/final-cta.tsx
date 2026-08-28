import { Mail, MapPin } from 'lucide-react'

import { IMAGES } from '@/lib/images'
import { ContactForm } from './contact-form'
import { Photo } from './photo'
import { Reveal } from './reveal'

/*
  Dunkler Anker 4 von 4, und zugleich der einzige Ort mit einem Formular.
  Das Foto liegt gedaempft hinter allem: es soll Stimmung tragen, nicht mit
  dem Text um Aufmerksamkeit kaempfen.
*/
export function FinalCta() {
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
            Let&apos;s build your next{' '}
            <span className="text-electric text-glow-electric">campaign</span> together.
          </h2>
          <p className="text-lead measure mt-6 text-muted-foreground">
            Tell us about your brand and your goals. We reply to every enquiry within two working
            days, with a straight answer on whether we are the right fit.
          </p>

          <dl className="mt-10 space-y-4 text-sm">
            <div className="flex items-center gap-3">
              <dt className="sr-only">Email</dt>
              <Mail className="size-4 shrink-0 text-primary" aria-hidden />
              <dd>
                <a
                  href="mailto:hello@mhconsulting.ae"
                  className="font-semibold underline underline-offset-4"
                >
                  hello@mhconsulting.ae
                </a>
              </dd>
            </div>
            <div className="flex items-center gap-3">
              <dt className="sr-only">Location</dt>
              <MapPin className="size-4 shrink-0 text-primary" aria-hidden />
              <dd className="text-muted-foreground">Dubai, UAE — working worldwide</dd>
            </div>
          </dl>
        </Reveal>

        <Reveal delay={120}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  )
}
