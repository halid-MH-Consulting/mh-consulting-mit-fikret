import type { Metadata } from 'next'

import { CtaBand } from '@/components/site/cta-band'
import { Footer } from '@/components/site/footer'
import { Header } from '@/components/site/header'
import { PageHero } from '@/components/site/page-hero'
import { Photo } from '@/components/site/photo'
import { Reveal } from '@/components/site/reveal'
import { IMAGES } from '@/lib/images'

export const metadata: Metadata = {
  title: 'For creators — join the MH Consulting roster | MH Consulting',
  description:
    'For travel creators: we negotiate the terms, chase the invoices and turn one-off brand deals into partnerships that come back. What we look for and how to apply.',
  openGraph: {
    title: 'For creators — MH Consulting',
    description:
      'We negotiate the terms, chase the invoices and turn one-off brand deals into partnerships that come back.',
  },
}

const WE_HANDLE = [
  'Finding briefs that fit what you already make',
  'Rates, usage rights and exclusivity, argued properly',
  'Contracts, invoicing and chasing late payments',
  'Deadlines, revisions and the awkward client conversations',
]

const YOU_HANDLE = [
  'The work itself, in your own voice',
  'Being where you said you would be, when you said',
  'Telling us early when something slips',
  'Saying no to briefs that would cost you your audience',
]

const CRITERIA = [
  {
    title: 'A defined audience, whatever its size',
    body: 'A creator with 8,000 people who trust them on one region is easier to place than one with 400,000 who trust them on nothing in particular. We have booked both. The small one performs more often.',
  },
  {
    title: 'Real travel behind the content',
    body: 'Brands increasingly check. If your destination coverage does not survive a look at your own timeline, neither of us wants that conversation.',
  },
  {
    title: 'Engagement that behaves like people',
    body: 'We look at comment quality, follower growth curves and audience geography. Bought engagement shows up quickly and ends the conversation.',
  },
  {
    title: 'You answer messages',
    body: 'Unglamorous, and the single most common reason a creator drops off our list. Brands book people who reply.',
  },
]

const STEPS = [
  {
    n: '1',
    title: 'Send us your work',
    body: 'Your profiles, the destinations you cover, and two or three pieces you are actually proud of. No media kit needed at this stage.',
  },
  {
    n: '2',
    title: 'We look properly',
    body: 'Audience, history, fit with the brands we work with. You get an answer either way, usually within two weeks.',
  },
  {
    n: '3',
    title: 'You go on the roster',
    body: 'We come to you when a brief fits. No exclusivity, no fee, no obligation to accept anything we send.',
  },
]

export default function ForCreatorsPage() {
  return (
    <>
      <Header />
      <main id="main">
        <PageHero
          title={
            <>
              Stop pitching brands. <span className="text-primary">Start getting briefed.</span>
            </>
          }
          lead="You did not become a travel creator to write follow-up emails about unpaid invoices. We handle the commercial side so you can spend your time on the part you are actually good at."
          image={IMAGES.creatorHero}
          cta={{ href: '/contact', label: 'Apply to the roster' }}
        />

        {/* Klare Arbeitsteilung, zwei Spalten gegenueber */}
        <section className="py-24 md:py-32">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal className="max-w-3xl">
              <h2 className="text-h2">Who does what.</h2>
              <p className="text-lead measure mt-5 text-muted-foreground">
                The split is deliberately boring, and it is the reason these partnerships last.
              </p>
            </Reveal>

            <div className="mt-14 grid gap-10 md:grid-cols-2 md:gap-16">
              <Reveal>
                <h3 className="text-lg font-bold">We handle</h3>
                <ul className="mt-5">
                  {WE_HANDLE.map((item) => (
                    <li
                      key={item}
                      className="border-b border-border py-4 text-sm leading-relaxed first:border-t"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal delay={120}>
                <h3 className="text-lg font-bold">You handle</h3>
                <ul className="mt-5">
                  {YOU_HANDLE.map((item) => (
                    <li
                      key={item}
                      className="border-b border-border py-4 text-sm leading-relaxed first:border-t"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Dunkler Anker mit Bild: die Auswahlkriterien, offen benannt */}
        <section className="surface-dark py-24 md:py-32">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-16">
              <div>
                <Reveal>
                  <h2 className="text-h2">What we look for.</h2>
                  <p className="text-lead measure mt-5 text-muted-foreground">
                    Follower count is not on this list. It never has been.
                  </p>
                </Reveal>
                <dl className="mt-12">
                  {CRITERIA.map((c, i) => (
                    <Reveal
                      as="div"
                      key={c.title}
                      delay={i * 70}
                      className="border-b border-border py-6 first:border-t"
                    >
                      <dt className="text-lg font-bold">{c.title}</dt>
                      <dd className="measure mt-2.5 text-sm leading-relaxed text-muted-foreground">
                        {c.body}
                      </dd>
                    </Reveal>
                  ))}
                </dl>
              </div>

              <Reveal delay={140} className="lg:sticky lg:top-28 lg:self-start">
                <div className="relative aspect-3/4 overflow-hidden rounded-2xl">
                  <Photo
                    image={IMAGES.coastTripod}
                    sizes="(min-width: 1024px) 36vw, calc(100vw - 3rem)"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Bewerbung in drei Schritten */}
        <section className="py-24 md:py-32">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal className="max-w-3xl">
              <h2 className="text-h2">How to join.</h2>
            </Reveal>

            <ol className="mt-14 grid gap-10 md:grid-cols-3 md:gap-12">
              {STEPS.map((s, i) => (
                <Reveal as="li" key={s.n} delay={i * 90} className="border-t border-border pt-6">
                  <span className="text-4xl font-extrabold tabular-nums text-primary">{s.n}</span>
                  <h3 className="mt-4 text-lg font-bold">{s.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                </Reveal>
              ))}
            </ol>

            <Reveal delay={200}>
              <div className="mt-16 grid gap-8 border-t border-border pt-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center lg:gap-16">
                <p className="measure text-lead">
                  We say no more often than we say yes, and we tell you why. A rejection now is not
                  a rejection forever; several creators on the roster applied twice.
                </p>
                <div className="relative aspect-16/10 overflow-hidden rounded-2xl">
                  <Photo
                    image={IMAGES.creatorOnLocation}
                    sizes="(min-width: 1024px) 44vw, calc(100vw - 3rem)"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <CtaBand
          title="Send us your work."
          body="Profiles, the regions you cover, and a couple of pieces you are proud of. That is enough to start."
          primary={{ href: '/contact', label: 'Apply to the roster' }}
          secondary={{ href: '/about', label: 'Who we are' }}
        />
      </main>
      <Footer />
    </>
  )
}
