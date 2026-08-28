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
  const m = getDictionary(locale).meta.forCreators
  return {
    title: m.title,
    description: m.description,
    alternates: { canonical: `/${locale}/for-creators` },
    openGraph: { title: m.ogTitle, description: m.ogDescription },
  }
}

export default async function ForCreatorsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  const t = getDictionary(locale)
  const p = t.forCreators

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
          image={IMAGES.creatorHero}
          cta={{ href: href(locale, '/contact'), label: p.cta }}
        />

        {/* Klare Arbeitsteilung, zwei Spalten gegenueber */}
        <section className="py-24 md:py-32">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal className="max-w-3xl">
              <h2 className="text-h2">{p.splitHeading}</h2>
              <p className="text-lead measure mt-5 text-muted-foreground">{p.splitLead}</p>
            </Reveal>

            <div className="mt-14 grid gap-10 md:grid-cols-2 md:gap-16">
              <Reveal>
                <h3 className="text-lg font-bold">{p.weHandleHeading}</h3>
                <ul className="mt-5">
                  {p.weHandle.map((item) => (
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
                <h3 className="text-lg font-bold">{p.youHandleHeading}</h3>
                <ul className="mt-5">
                  {p.youHandle.map((item) => (
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
                  <h2 className="text-h2">{p.criteriaHeading}</h2>
                  <p className="text-lead measure mt-5 text-muted-foreground">{p.criteriaLead}</p>
                </Reveal>
                <dl className="mt-12">
                  {p.criteria.map((c, i) => (
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
              <h2 className="text-h2">{p.joinHeading}</h2>
            </Reveal>

            <ol className="mt-14 grid gap-10 md:grid-cols-3 md:gap-12">
              {p.steps.map((s, i) => (
                <Reveal as="li" key={s.title} delay={i * 90} className="border-t border-border pt-6">
                  <span className="text-4xl font-extrabold tabular-nums text-primary">{i + 1}</span>
                  <h3 className="mt-4 text-lg font-bold">{s.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                </Reveal>
              ))}
            </ol>

            <Reveal delay={200}>
              <div className="mt-16 grid gap-8 border-t border-border pt-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center lg:gap-16">
                <p className="measure text-lead">{p.honestNote}</p>
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
          title={p.ctaTitle}
          body={p.ctaBody}
          primary={{ href: href(locale, '/contact'), label: p.cta }}
          secondary={{ href: href(locale, '/about'), label: p.ctaSecondary }}
        />
      </main>
      <Footer locale={locale} t={t} />
    </>
  )
}
