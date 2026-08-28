import type { Metadata } from 'next'

import { CtaBand } from '@/components/site/cta-band'
import { Footer } from '@/components/site/footer'
import { Header } from '@/components/site/header'
import { PageHero } from '@/components/site/page-hero'
import { Photo } from '@/components/site/photo'
import { Reveal } from '@/components/site/reveal'
import { IMAGES } from '@/lib/images'

export const metadata: Metadata = {
  title: 'About — a Dubai hub with European habits | MH Consulting',
  description:
    'MH Consulting is an influencer marketing agency for travel brands, based in Dubai and working worldwide. How we think about creators, evidence and long-term partnerships.',
  openGraph: {
    title: 'About MH Consulting',
    description:
      'An influencer marketing agency for travel brands, based in Dubai and working worldwide.',
  },
}

/*
  Bewusst haltungs- statt faktengetrieben. Alles hier laesst sich aus dem
  bereits bestehenden Auftritt belegen; Gruendungsjahr, Teamgroesse, Namen und
  Kundenreferenzen wurden nicht erfunden. Sobald MH Consulting diese Angaben
  liefert, gehoeren sie in diese Seite - sie machen sie deutlich staerker.
*/

const PRINCIPLES = [
  {
    title: 'We would rather lose the brief than pad the list',
    body: 'If we do not have three creators who genuinely fit, we say so instead of adding a fourth who nearly does. This costs us work occasionally. It has never cost us a client.',
  },
  {
    title: 'The number on the profile is the least interesting number',
    body: 'Audience geography, comment quality, growth shape and repeat performance tell you what a partnership will do. Follower count mostly tells you what it will cost.',
  },
  {
    title: 'Everything expensive is a detail nobody wrote down',
    body: 'Usage rights, exclusivity, reshoots, approval rounds. We settle these before production, which is why our campaigns rarely produce invoices anyone argues about.',
  },
  {
    title: 'A report that only contains good news is not a report',
    body: 'We name what underperformed and what we would do differently. Brands stay with agencies that tell them the truth in quarter two.',
  },
]

const HUBS = [
  'London',
  'New York',
  'Singapore',
  'Cape Town',
  'Sydney',
  'Tokyo',
  'São Paulo',
  'Bali',
]

export default function AboutPage() {
  return (
    <>
      <Header />
      <main id="main">
        <PageHero
          title={
            <>
              A Dubai base. <span className="text-primary">European habits.</span>
            </>
          }
          lead="Dubai puts us a short flight from the markets our clients care about and in the same working week as most of them. The way we run things comes from somewhere else entirely."
          image={IMAGES.dubaiDay}
        />

        {/* Positionierung, textgetragen */}
        <section className="py-24 md:py-32">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-12 lg:grid-cols-[minmax(0,0.62fr)_minmax(0,1fr)] lg:gap-20">
              <Reveal>
                <h2 className="text-h2 lg:sticky lg:top-28">Why we exist.</h2>
              </Reveal>
              <Reveal delay={100} className="space-y-6 text-lead text-muted-foreground">
                <p>
                  Influencer marketing in travel got very good at looking busy. Campaigns are
                  booked, posts go up, screenshots go into a deck, and nobody can say afterwards
                  whether any of it changed a booking.
                </p>
                <p>
                  We started from the opposite end: what would a brand need to see before renewing
                  a creator partnership for a second year? That question rules out most of what the
                  industry sells. It rules out follower-count buying, one-off sponsorships and
                  reporting built on impressions.
                </p>
                <p className="font-semibold text-foreground">
                  What is left is slower, smaller and considerably more durable. That is the
                  business we are in.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Dunkler Anker: die Arbeitsprinzipien */}
        <section className="surface-dark py-24 md:py-32">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal className="max-w-3xl">
              <h2 className="text-h2">How we work.</h2>
              <p className="text-lead measure mt-5 text-muted-foreground">
                Four positions we hold even when they are inconvenient.
              </p>
            </Reveal>
            <dl className="mt-14 grid gap-x-16 gap-y-0 md:grid-cols-2">
              {PRINCIPLES.map((p, i) => (
                <Reveal
                  as="div"
                  key={p.title}
                  delay={i * 70}
                  className="border-b border-border py-7 md:[&:nth-child(-n+2)]:border-t"
                >
                  <dt className="text-lg font-bold">{p.title}</dt>
                  <dd className="measure mt-3 text-sm leading-relaxed text-muted-foreground">
                    {p.body}
                  </dd>
                </Reveal>
              ))}
            </dl>
          </div>
        </section>

        {/* Aufstellung: Nabe plus Netz */}
        <section className="border-b border-border bg-secondary/50 py-24 md:py-32">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
              <Reveal>
                <h2 className="text-h2">One hub, one network, no offices in between.</h2>
                <p className="text-lead measure mt-5 text-muted-foreground">
                  We are deliberately small at the centre. The reach comes from the creator network,
                  not from a chain of branch offices that each need feeding.
                </p>
                <p className="measure mt-5 text-sm leading-relaxed text-muted-foreground">
                  Practically: one team in Dubai that knows every account, and vetted creators in
                  the places your audience is already looking at.
                </p>
                <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm">
                  <li className="font-semibold">Dubai</li>
                  {HUBS.map((h) => (
                    <li key={h} className="text-muted-foreground">
                      {h}
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal delay={120}>
                <div className="relative aspect-4/3 overflow-hidden rounded-2xl">
                  <Photo
                    image={IMAGES.strategyTable}
                    sizes="(min-width: 1024px) 46vw, calc(100vw - 3rem)"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <CtaBand
          title="Two ways in."
          body="Brands tell us what they are trying to move. Creators send us their work. Both start with the same short message."
          primary={{ href: '/for-brands', label: 'I represent a brand' }}
          secondary={{ href: '/for-creators', label: 'I am a creator' }}
        />
      </main>
      <Footer />
    </>
  )
}
