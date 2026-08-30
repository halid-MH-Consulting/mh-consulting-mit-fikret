import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { Pending, TextPage } from '@/components/site/text-page'
import { getDictionary, isLocale } from '@/lib/i18n'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  if (!isLocale(locale)) return {}
  const m = getDictionary(locale).meta.privacy
  return { title: m.title, description: m.description, robots: { index: false } }
}

export default async function PrivacyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  const t = getDictionary(locale)
  const p = t.privacy

  return (
    <TextPage locale={locale} t={t} title={p.heading}>
      <p>{p.intro}</p>

      <section>
        <h2>{p.responsibleHeading}</h2>
        <p>
          {p.responsibleBefore}{' '}
          <Pending prefix={t.legalNotice.pendingPrefix}>{p.responsibleAddress}</Pending>.{' '}
          {p.responsibleAfter}{' '}
          <a
            href="mailto:outreach@m-hconsulting.com"
            className="text-primary underline underline-offset-4"
          >
            outreach@m-hconsulting.com
          </a>
          .
        </p>
      </section>

      <section>
        <h2>{p.formHeading}</h2>
        <p>{p.formBody}</p>
      </section>

      <section>
        <h2>{p.analyticsHeading}</h2>
        <p>{p.analyticsBody}</p>
      </section>

      <section>
        <h2>{p.externalHeading}</h2>
        <p>{p.externalBody}</p>
      </section>

      <section>
        <h2>{p.rightsHeading}</h2>
        <p>{p.rightsBody}</p>
      </section>
    </TextPage>
  )
}
