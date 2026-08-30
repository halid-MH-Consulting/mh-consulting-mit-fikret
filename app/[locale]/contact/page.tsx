import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowUpRight, Clock, Mail, MapPin } from 'lucide-react'

import { ContactForm } from '@/components/site/contact-form'
import { Footer } from '@/components/site/footer'
import { Header } from '@/components/site/header'
import { Photo } from '@/components/site/photo'
import { Reveal } from '@/components/site/reveal'
import { IMAGES } from '@/lib/images'
import { getDictionary, href, isLocale } from '@/lib/i18n'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  if (!isLocale(locale)) return {}
  const m = getDictionary(locale).meta.contact
  return {
    title: m.title,
    description: m.description,
    alternates: { canonical: `/${locale}/contact` },
    openGraph: { title: m.ogTitle, description: m.ogDescription },
  }
}

/*
  Die Seite verzichtet bewusst auf das breite Bildband der anderen
  Unterseiten. Wer hier landet, will schreiben, nicht scrollen: das Formular
  steht ueber der Falz, das Bild ist Beiwerk am Rand.
*/
export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  const t = getDictionary(locale)
  const p = t.contact

  return (
    <>
      <Header locale={locale} t={t} />
      <main id="main">
        <section className="relative pt-28 pb-20 md:pt-36 md:pb-28">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal className="max-w-3xl">
              <h1 className="text-display">
                {p.title} <span className="text-primary">{p.titleAccent}</span>
              </h1>
              <p className="text-lead measure mt-7 text-muted-foreground">{p.lead}</p>
            </Reveal>

            <div className="mt-14 grid gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-16">
              <Reveal>
                <ContactForm t={t} />
              </Reveal>

              <Reveal delay={120} className="flex flex-col gap-10">
                <div>
                  <h2 className="text-lg font-bold">{p.reachHeading}</h2>
                  <dl className="mt-5 space-y-4 text-sm">
                    <div className="flex items-start gap-3">
                      <dt className="sr-only">{t.finalCta.email}</dt>
                      <Mail className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                      <dd>
                        <a
                          href="mailto:outreach@m-hconsulting.com"
                          // py fuer >=24px Zielhoehe: eigenstaendiger Link, keine
                          // Inline-Ausnahme wie bei Links mitten im Satz.
                          className="-my-1 inline-block py-1 font-semibold underline underline-offset-4"
                        >
                          outreach@m-hconsulting.com
                        </a>
                      </dd>
                    </div>
                    <div className="flex items-start gap-3">
                      <dt className="sr-only">{t.finalCta.location}</dt>
                      <MapPin className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                      <dd className="text-muted-foreground">{t.finalCta.locationValue}</dd>
                    </div>
                    <div className="flex items-start gap-3">
                      <dt className="sr-only">{p.responseTime}</dt>
                      <Clock className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                      <dd className="text-muted-foreground">{p.responseTime}</dd>
                    </div>
                  </dl>
                </div>

                <div>
                  <h2 className="text-lg font-bold">{p.nextHeading}</h2>
                  <ol className="mt-5">
                    {p.next.map((step, i) => (
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
              {p.doorsHeading}
            </h2>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <Link
                href={href(locale, '/for-brands')}
                className="group flex items-center justify-between gap-6 rounded-2xl border border-border p-6 transition-colors hover:border-primary/60"
              >
                <span>
                  <span className="block text-base font-bold">{p.doorBrands}</span>
                  <span className="mt-1.5 block text-sm text-muted-foreground">
                    {p.doorBrandsBody}
                  </span>
                </span>
                <ArrowUpRight
                  className="size-5 shrink-0 text-primary transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden
                />
              </Link>
              <Link
                href={href(locale, '/for-creators')}
                className="group flex items-center justify-between gap-6 rounded-2xl border border-border p-6 transition-colors hover:border-primary/60"
              >
                <span>
                  <span className="block text-base font-bold">{p.doorCreators}</span>
                  <span className="mt-1.5 block text-sm text-muted-foreground">
                    {p.doorCreatorsBody}
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
      <Footer locale={locale} t={t} />
    </>
  )
}
