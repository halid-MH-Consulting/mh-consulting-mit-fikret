import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

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
  const m = getDictionary(locale).meta.about
  return {
    title: m.title,
    description: m.description,
    alternates: { canonical: `/${locale}/about` },
    openGraph: { title: m.ogTitle, description: m.ogDescription },
  }
}

/*
  Bewusst haltungs- statt faktengetrieben. Alles hier laesst sich aus dem
  bereits bestehenden Auftritt belegen; Gruendungsjahr, Teamgroesse, Namen und
  Kundenreferenzen wurden nicht erfunden. Sobald MH Consulting diese Angaben
  liefert, gehoeren sie in diese Seite - sie machen sie deutlich staerker.
*/
const HUBS = ['London', 'New York', 'Singapore', 'Cape Town', 'Sydney', 'Tokyo', 'São Paulo', 'Bali']

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  const t = getDictionary(locale)
  const p = t.about

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
          image={IMAGES.dubaiDay}
        />

        {/* Positionierung, textgetragen */}
        <section className="py-24 md:py-32">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-12 lg:grid-cols-[minmax(0,0.62fr)_minmax(0,1fr)] lg:gap-20">
              <Reveal>
                <h2 className="text-h2 lg:sticky lg:top-28">{p.whyHeading}</h2>
              </Reveal>
              <Reveal delay={100} className="space-y-6 text-lead text-muted-foreground">
                <p>{p.why1}</p>
                <p>{p.why2}</p>
                <p className="font-semibold text-foreground">{p.why3}</p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Dunkler Anker: die Arbeitsprinzipien */}
        <section className="surface-dark py-24 md:py-32">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal className="max-w-3xl">
              <h2 className="text-h2">{p.principlesHeading}</h2>
              <p className="text-lead measure mt-5 text-muted-foreground">{p.principlesLead}</p>
            </Reveal>
            <dl className="mt-14 grid gap-x-16 gap-y-0 md:grid-cols-2">
              {p.principles.map((pr, i) => (
                <Reveal
                  as="div"
                  key={pr.title}
                  delay={i * 70}
                  className="border-b border-border py-7 md:[&:nth-child(-n+2)]:border-t"
                >
                  <dt className="text-lg font-bold">{pr.title}</dt>
                  <dd className="measure mt-3 text-sm leading-relaxed text-muted-foreground">
                    {pr.body}
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
                <h2 className="text-h2">{p.hubHeading}</h2>
                <p className="text-lead measure mt-5 text-muted-foreground">{p.hubLead}</p>
                <p className="measure mt-5 text-sm leading-relaxed text-muted-foreground">
                  {p.hubBody}
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
          title={p.ctaTitle}
          body={p.ctaBody}
          primary={{ href: href(locale, '/for-brands'), label: p.ctaBrands }}
          secondary={{ href: href(locale, '/for-creators'), label: p.ctaCreators }}
        />
      </main>
      <Footer locale={locale} t={t} />
    </>
  )
}
