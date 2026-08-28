import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Check, X } from 'lucide-react'

import { CtaBand } from '@/components/site/cta-band'
import { Footer } from '@/components/site/footer'
import { Header } from '@/components/site/header'
import { PageHero } from '@/components/site/page-hero'
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
  const m = getDictionary(locale).meta.forBrands
  return {
    title: m.title,
    description: m.description,
    alternates: { canonical: `/${locale}/for-brands` },
    openGraph: { title: m.ogTitle, description: m.ogDescription },
  }
}

export default async function ForBrandsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  const t = getDictionary(locale)
  const p = t.forBrands

  return (
    <>
      <Header locale={locale} t={t} />
      <main id="main">
        <PageHero
          title={
            <>
              {p.title} <span className="text-primary">{p.titleAccent}</span>
            </>
          }
          lead={p.lead}
          image={IMAGES.brandsHero}
          cta={{ href: href(locale, '/contact'), label: p.cta }}
        />

        {/* Dunkler Anker: die unbequeme Diagnose bekommt eigenes Gewicht */}
        <section className="surface-dark relative mt-24 py-24 md:mt-32 md:py-32">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal className="max-w-3xl">
              <h2 className="text-h2">{p.problemHeading}</h2>
              <p className="text-lead measure mt-5 text-muted-foreground">{p.problemLead}</p>
            </Reveal>

            <div className="mt-14 grid gap-10 md:grid-cols-2 md:gap-16">
              <Reveal>
                <h3 className="text-sm font-bold text-muted-foreground">{p.wrongHeading}</h3>
                <ul className="mt-6 space-y-4">
                  {p.wrong.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-relaxed">
                      <X className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal delay={120}>
                <h3 className="text-sm font-bold text-muted-foreground">{p.rightHeading}</h3>
                <ul className="mt-6 space-y-4">
                  {p.right.map((item) => (
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
              <h2 className="text-h2">{p.deliverablesHeading}</h2>
            </Reveal>
            <dl className="mt-14 grid gap-x-16 gap-y-0 md:grid-cols-2">
              {p.deliverables.map((d, i) => (
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
                <h2 className="text-h2">{p.engagementHeading}</h2>
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                  {p.engagementLead}
                </p>
                <div className="relative mt-8 aspect-4/3 overflow-hidden rounded-2xl">
                  <Photo
                    image={IMAGES.strategyTable}
                    sizes="(min-width: 1024px) 32vw, calc(100vw - 3rem)"
                  />
                </div>
              </Reveal>

              <ol className="space-y-0">
                {p.engagement.map((step, i) => (
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
          title={p.ctaTitle}
          body={p.ctaBody}
          primary={{ href: href(locale, '/contact'), label: t.common.startProject }}
          secondary={{ href: href(locale, '/about'), label: p.ctaSecondary }}
        />
      </main>
      <Footer locale={locale} t={t} />
    </>
  )
}
