import { notFound } from 'next/navigation'

import { AudienceSplit } from '@/components/site/audience-split'
import { Header } from '@/components/site/header'
import { Hero } from '@/components/site/hero'
import { Industries } from '@/components/site/industries'
import { CoreMessage } from '@/components/site/core-message'
import { Services } from '@/components/site/services'
import { WhyUs } from '@/components/site/why-us'
import { NetworkMap } from '@/components/site/network-map'
import { Process } from '@/components/site/process'
import { Stats } from '@/components/site/stats'
import { Testimonials } from '@/components/site/testimonials'
import { Faq } from '@/components/site/faq'
import { FinalCta } from '@/components/site/final-cta'
import { Footer } from '@/components/site/footer'
import { getDictionary, isLocale } from '@/lib/i18n'

/*
  Der Rhythmus der Seite: hell ist der Grundzustand, vier dunkle Sektionen
  setzen die Akzente (CoreMessage, NetworkMap, Testimonials, FinalCta). Sie
  stehen bewusst verteilt, damit nie mehr als drei helle Sektionen
  aufeinander folgen.

  Der dritte Anker sass frueher auf Stats. Seit die Zahlenreihe ruht, traegt
  ihn Testimonials - die Sektion direkt darunter, an praktisch derselben
  Stelle im Seitenlauf. Wird Stats wieder eingeschaltet, stehen zwei dunkle
  Sektionen hintereinander; dann gehoert Testimonials zurueck auf hell.
*/
export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  const t = getDictionary(locale)

  return (
    <>
      <Header locale={locale} t={t} />
      <main id="main" className="relative overflow-x-clip">
        <Hero locale={locale} t={t} />
        <Industries t={t} />
        <CoreMessage t={t} />
        <AudienceSplit locale={locale} t={t} />
        <Services t={t} />
        <WhyUs t={t} />
        <NetworkMap t={t} />
        <Process t={t} />
        <Stats t={t} />
        <Testimonials t={t} />
        <Faq locale={locale} t={t} />
        <FinalCta t={t} />
      </main>
      <Footer locale={locale} t={t} />
    </>
  )
}
