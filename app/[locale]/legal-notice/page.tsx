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
  const m = getDictionary(locale).meta.legalNotice
  return { title: m.title, description: m.description, robots: { index: false } }
}

export default async function LegalNoticePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  const t = getDictionary(locale)
  const p = t.legalNotice

  return (
    <TextPage locale={locale} t={t} title={p.heading}>
      <p>{p.intro}</p>

      <section>
        <h2>{p.companyHeading}</h2>
        <p>
          MH Consulting
          <br />
          <Pending prefix={p.pendingPrefix}>{p.companyName}</Pending>
          <br />
          <Pending prefix={p.pendingPrefix}>{p.companyAddress}</Pending>
        </p>
      </section>

      <section>
        <h2>{p.contactHeading}</h2>
        <p>
          {t.finalCta.email}:{' '}
          <a
            href="mailto:hello@mhconsulting.ae"
            className="text-primary underline underline-offset-4"
          >
            hello@mhconsulting.ae
          </a>
          <br />
          {p.phone}: <Pending prefix={p.pendingPrefix}>{p.phoneValue}</Pending>
        </p>
      </section>

      <section>
        <h2>{p.registrationHeading}</h2>
        <p>
          {p.licence}: <Pending prefix={p.pendingPrefix}>{p.licenceValue}</Pending>
          <br />
          {p.authority}: <Pending prefix={p.pendingPrefix}>{p.authorityValue}</Pending>
          <br />
          {p.responsible}: <Pending prefix={p.pendingPrefix}>{p.responsibleValue}</Pending>
        </p>
      </section>

      <section>
        <h2>{p.creditsHeading}</h2>
        <p>{p.credits}</p>
      </section>
    </TextPage>
  )
}
