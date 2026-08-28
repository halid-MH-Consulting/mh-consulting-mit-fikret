import type { Metadata } from 'next'
import { Check, X } from 'lucide-react'

import { CtaBand } from '@/components/site/cta-band'
import { Footer } from '@/components/site/footer'
import { Header } from '@/components/site/header'
import { PageHero } from '@/components/site/page-hero'
import { Photo } from '@/components/site/photo'
import { Reveal } from '@/components/site/reveal'
import { IMAGES } from '@/lib/images'

export const metadata: Metadata = {
  title: 'For brands — creator partnerships that survive the first campaign | MH Consulting',
  description:
    'For tourism boards, hotels, airlines and travel tech: how MH Consulting builds creator partnerships around business outcomes instead of one-off sponsored posts.',
  openGraph: {
    title: 'For brands — MH Consulting',
    description:
      'Creator partnerships built around business outcomes, for travel brands that think beyond a single campaign.',
  },
}

const DELIVERABLES = [
  {
    title: 'A shortlist you can defend internally',
    body: 'Every creator comes with the reasoning: who their audience actually is, which of your destinations they credibly cover, and what their last comparable campaign delivered. No lists of names without arguments.',
  },
  {
    title: 'Terms negotiated before anyone films',
    body: 'Usage rights, exclusivity windows, deliverable counts, reshoot conditions and payment schedule are settled up front. The expensive surprises in creator marketing almost always come from what nobody wrote down.',
  },
  {
    title: 'One point of contact, not twelve inboxes',
    body: 'We run scheduling, briefing, approvals and chasing. Your team reviews and approves; it does not project-manage eight freelancers across five time zones.',
  },
  {
    title: 'Reporting you can take to a budget meeting',
    body: 'Results against the goals we agreed at the start, with the misses named as clearly as the wins. If a creator underperformed, that is in the report.',
  },
]

const WRONG = [
  'Booking by follower count, then wondering why nothing moved',
  'A brilliant post, and no rights to use it anywhere else',
  'Creators who have never been to the destination they are selling',
  'One campaign, no relationship, starting from zero next quarter',
]

const RIGHT = [
  'Booking on audience fit and evidence of past performance',
  'Usage and exclusivity agreed before the first frame is shot',
  'Creators with genuine, checkable history in your region',
  'Partnerships that get cheaper and better the longer they run',
]

const ENGAGEMENT = [
  {
    when: 'Week 1',
    what: 'Scope and goals',
    body: 'We agree what success means in numbers, which markets matter, and what you already tried. If we think creator marketing is the wrong tool for the goal, we say so here.',
  },
  {
    when: 'Weeks 2–3',
    what: 'Shortlist and terms',
    body: 'You get a shortlist with reasoning and indicative costs. We negotiate with your chosen creators and bring back signed terms.',
  },
  {
    when: 'Weeks 4–8',
    what: 'Production and publishing',
    body: 'Briefing, shooting, review rounds and scheduling. You approve; we handle everything around the approval.',
  },
  {
    when: 'After',
    what: 'Results and what comes next',
    body: 'A report against the agreed goals, plus a recommendation on which creators are worth keeping for the long run.',
  },
]

export default function ForBrandsPage() {
  return (
    <>
      <Header />
      <main id="main">
        <PageHero
          title={
            <>
              Creators your audience <span className="text-primary">already trusts.</span>
            </>
          }
          lead="You are not short of people willing to post about your destination. You are short of people whose recommendation actually changes a booking decision. That difference is the whole job."
          image={IMAGES.brandsHero}
          cta={{ href: '/contact', label: 'Talk to us about your brand' }}
        />

        {/* Dunkler Anker: die unbequeme Diagnose bekommt eigenes Gewicht */}
        <section className="surface-dark relative mt-24 py-24 md:mt-32 md:py-32">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal className="max-w-3xl">
              <h2 className="text-h2">Why most influencer budgets disappoint.</h2>
              <p className="text-lead measure mt-5 text-muted-foreground">
                It is rarely the creator. It is almost always the setup around them.
              </p>
            </Reveal>

            <div className="mt-14 grid gap-10 md:grid-cols-2 md:gap-16">
              <Reveal>
                <h3 className="text-sm font-bold text-muted-foreground">
                  What usually happens
                </h3>
                <ul className="mt-6 space-y-4">
                  {WRONG.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-relaxed">
                      <X className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal delay={120}>
                <h3 className="text-sm font-bold text-muted-foreground">
                  How we run it
                </h3>
                <ul className="mt-6 space-y-4">
                  {RIGHT.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-relaxed">
                      <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Was Marken konkret bekommen */}
        <section className="py-24 md:py-32">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal className="max-w-3xl">
              <h2 className="text-h2">What you actually get.</h2>
            </Reveal>
            <dl className="mt-14 grid gap-x-16 gap-y-0 md:grid-cols-2">
              {DELIVERABLES.map((d, i) => (
                <Reveal
                  as="div"
                  key={d.title}
                  delay={i * 70}
                  className="border-b border-border py-7 md:[&:nth-child(-n+2)]:border-t"
                >
                  <dt className="text-lg font-bold">{d.title}</dt>
                  <dd className="measure mt-3 text-sm leading-relaxed text-muted-foreground">
                    {d.body}
                  </dd>
                </Reveal>
              ))}
            </dl>
          </div>
        </section>

        {/* Ablauf einer Zusammenarbeit, mit Bild als zweite Spalte */}
        <section className="border-y border-border bg-secondary/50 py-24 md:py-32">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-12 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] lg:gap-16">
              <Reveal className="lg:sticky lg:top-28 lg:self-start">
                <h2 className="text-h2">How an engagement runs.</h2>
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                  Indicative timing for a first campaign. Longer partnerships compress this
                  considerably, because the vetting is already done.
                </p>
                <div className="relative mt-8 aspect-4/3 overflow-hidden rounded-2xl">
                  <Photo
                    image={IMAGES.strategyTable}
                    sizes="(min-width: 1024px) 32vw, calc(100vw - 3rem)"
                  />
                </div>
              </Reveal>

              <ol className="space-y-0">
                {ENGAGEMENT.map((step, i) => (
                  <Reveal
                    as="li"
                    key={step.when}
                    delay={i * 70}
                    className="grid gap-2 border-b border-border py-7 first:border-t sm:grid-cols-[8rem_minmax(0,1fr)] sm:gap-8"
                  >
                    <span className="text-sm font-semibold text-primary">{step.when}</span>
                    <div>
                      <h3 className="text-base font-bold">{step.what}</h3>
                      <p className="measure mt-2 text-sm leading-relaxed text-muted-foreground">
                        {step.body}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <CtaBand
          title="Tell us what you are trying to move."
          body="Bookings, awareness in a new market, a launch with a date attached. Bring the goal and we will tell you honestly whether creators are the right lever for it."
          primary={{ href: '/contact', label: 'Start a project' }}
          secondary={{ href: '/about', label: 'Who we are' }}
        />
      </main>
      <Footer />
    </>
  )
}
