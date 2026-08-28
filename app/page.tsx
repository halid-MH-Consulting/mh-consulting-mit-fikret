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

/*
  Der Rhythmus der Seite: hell ist der Grundzustand, vier dunkle Sektionen
  setzen die Akzente (CoreMessage, NetworkMap, Stats, FinalCta). Sie stehen
  bewusst verteilt, damit nie mehr als drei helle Sektionen aufeinander
  folgen. Gemessen an der Scrollhoehe ergibt das rund 70/30.
*/
export default function Page() {
  return (
    <>
      <Header />
      <main id="main" className="relative overflow-x-clip">
        <Hero />
        <Industries />
        <CoreMessage />
        <Services />
        <WhyUs />
        <NetworkMap />
        <Process />
        <Stats />
        <Testimonials />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  )
}
