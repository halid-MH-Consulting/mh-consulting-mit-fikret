import type { Metadata } from 'next'

import { Pending, TextPage } from '@/components/site/text-page'

export const metadata: Metadata = {
  title: 'Legal notice — MH Consulting',
  description: 'Company information for MH Consulting, Dubai.',
  robots: { index: false },
}

export default function LegalNoticePage() {
  return (
    <TextPage title="Legal notice">
      <p>
        This page is prepared but not yet complete. The entries marked below must be filled in with
        the registered company details before the site goes live.
      </p>

      <section>
        <h2>Company</h2>
        <p>
          MH Consulting
          <br />
          <Pending>registered company name and legal form</Pending>
          <br />
          <Pending>street address, Dubai, United Arab Emirates</Pending>
        </p>
      </section>

      <section>
        <h2>Contact</h2>
        <p>
          Email:{' '}
          <a href="mailto:hello@mhconsulting.ae" className="text-primary underline underline-offset-4">
            hello@mhconsulting.ae
          </a>
          <br />
          Phone: <Pending>phone number</Pending>
        </p>
      </section>

      <section>
        <h2>Registration</h2>
        <p>
          Trade licence number: <Pending>licence number</Pending>
          <br />
          Issuing authority: <Pending>issuing authority</Pending>
          <br />
          Responsible for content: <Pending>name of the responsible person</Pending>
        </p>
      </section>

      <section>
        <h2>Image credits</h2>
        <p>
          Photography sourced from Unsplash under the Unsplash License, which permits commercial use
          without attribution.
        </p>
      </section>
    </TextPage>
  )
}
