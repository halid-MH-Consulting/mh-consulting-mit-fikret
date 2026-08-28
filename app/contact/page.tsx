import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight, Clock, Mail, MapPin } from 'lucide-react'

import { ContactForm } from '@/components/site/contact-form'
import { Footer } from '@/components/site/footer'
import { Header } from '@/components/site/header'
import { Photo } from '@/components/site/photo'
import { Reveal } from '@/components/site/reveal'
import { IMAGES } from '@/lib/images'

export const metadata: Metadata = {
  title: 'Contact — tell us what you are trying to move | MH Consulting',
  description:
    'Talk to MH Consulting about a creator campaign, or apply to the roster. We reply to every enquiry within two working days, from Dubai.',
  openGraph: {
    title: 'Contact MH Consulting',
    description:
      'Talk to us about a creator campaign, or apply to the roster. Every enquiry gets an answer within two working days.',
  },
}

/*
  Die Seite verzichtet bewusst auf das breite Bildband der anderen
  Unterseiten. Wer hier landet, will schreiben, nicht scrollen: das Formular
  steht ueber der Falz, das Bild ist Beiwerk am Rand.
*/

const AFTER = [
  {
    title: 'You get a human reply, not a ticket number',
    body: 'Within two working days, from the person who would actually run your account.',
  },
  {
    title: 'We say if we are the wrong fit',
    body: 'If creator marketing will not move the goal you describe, we tell you that instead of selling you a campaign.',
  },
  {
    title: 'Then a call, if it makes sense',
    body: 'Thirty minutes, no deck. We ask about the goal, the market and the budget range, and you get a straight answer on what is realistic.',
  },
]

export default function ContactPage() {
  return (
    <>
      <Header />
      <main id="main">
        <section className="relative pt-28 pb-20 md:pt-36 md:pb-28">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal className="max-w-3xl">
              <h1 className="text-display">
                Tell us what you are <span className="text-primary">trying to move.</span>
              </h1>
              <p className="text-lead measure mt-7 text-muted-foreground">
                Bookings, awareness in a new market, a launch with a date attached. Or your own work,
                if you are a creator looking for briefs. Both start here.
              </p>
            </Reveal>

            <div className="mt-14 grid gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-16">
              <Reveal>
                <ContactForm />
              </Reveal>

              <Reveal delay={120} className="flex flex-col gap-10">
                <div>
                  <h2 className="text-lg font-bold">Reach us directly</h2>
                  <dl className="mt-5 space-y-4 text-sm">
                    <div className="flex items-start gap-3">
                      <dt className="sr-only">Email</dt>
                      <Mail className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                      <dd>
                        <a
                          href="mailto:hello@mhconsulting.ae"
                          // py fuer >=24px Zielhoehe: eigenstaendiger Link, keine
                          // Inline-Ausnahme wie bei Links mitten im Satz.
                          className="-my-1 inline-block py-1 font-semibold underline underline-offset-4"
                        >
                          hello@mhconsulting.ae
                        </a>
                      </dd>
                    </div>
                    <div className="flex items-start gap-3">
                      <dt className="sr-only">Location</dt>
                      <MapPin className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                      <dd className="text-muted-foreground">Dubai, UAE — working worldwide</dd>
                    </div>
                    <div className="flex items-start gap-3">
                      <dt className="sr-only">Response time</dt>
                      <Clock className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                      <dd className="text-muted-foreground">
                        Every enquiry answered within two working days
                      </dd>
                    </div>
                  </dl>
                </div>

                <div>
                  <h2 className="text-lg font-bold">What happens next</h2>
                  <ol className="mt-5">
                    {AFTER.map((step, i) => (
                      <li key={step.title} className="border-b border-border py-5 first:border-t">
                        <h3 className="flex items-baseline gap-2.5 text-base font-bold">
                          <span className="text-xs font-semibold tabular-nums text-muted-foreground">
                            {String(i + 1).padStart(2, '0')}
                          </span>
                          {step.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                          {step.body}
                        </p>
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="relative aspect-4/3 overflow-hidden rounded-2xl">
                  <Photo
                    image={IMAGES.dubaiDay}
                    sizes="(min-width: 1024px) 34vw, calc(100vw - 3rem)"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Weiche fuer alle, die noch nicht wissen, was sie schreiben sollen */}
        <section className="surface-dark py-20 md:py-24" aria-labelledby="contact-doors">
          <div className="mx-auto max-w-6xl px-6">
            <h2 id="contact-doors" className="text-h2 max-w-2xl">
              Not sure what to write yet?
            </h2>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <Link
                href="/for-brands"
                className="group flex items-center justify-between gap-6 rounded-2xl border border-border p-6 transition-colors hover:border-primary/60"
              >
                <span>
                  <span className="block text-base font-bold">I represent a brand</span>
                  <span className="mt-1.5 block text-sm text-muted-foreground">
                    What you get, and how an engagement runs.
                  </span>
                </span>
                <ArrowUpRight
                  className="size-5 shrink-0 text-primary transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden
                />
              </Link>
              <Link
                href="/for-creators"
                className="group flex items-center justify-between gap-6 rounded-2xl border border-border p-6 transition-colors hover:border-primary/60"
              >
                <span>
                  <span className="block text-base font-bold">I am a creator</span>
                  <span className="mt-1.5 block text-sm text-muted-foreground">
                    What we look for, and how to apply.
                  </span>
                </span>
                <ArrowUpRight
                  className="size-5 shrink-0 text-primary transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden
                />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
