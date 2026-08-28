import type { Metadata } from 'next'

import { Pending, TextPage } from '@/components/site/text-page'

export const metadata: Metadata = {
  title: 'Privacy policy — MH Consulting',
  description: 'How MH Consulting handles personal data.',
  robots: { index: false },
}

export default function PrivacyPage() {
  return (
    <TextPage title="Privacy policy">
      <p>
        This page is prepared but not yet complete. It describes what the site currently does. The
        marked entries need the registered company details, and the text should be reviewed by
        someone qualified before launch.
      </p>

      <section>
        <h2>Who is responsible</h2>
        <p>
          MH Consulting, <Pending>registered address, Dubai</Pending>. Questions about your data:{' '}
          <a href="mailto:hello@mhconsulting.ae" className="text-primary underline underline-offset-4">
            hello@mhconsulting.ae
          </a>
          .
        </p>
      </section>

      <section>
        <h2>The enquiry form</h2>
        <p>
          When you use the contact form we process the name, email address, and optionally company
          and budget range you enter, together with your message. We use this only to answer your
          enquiry. At present the form hands your entries to your own email programme, so the
          message reaches us as an ordinary email.
        </p>
      </section>

      <section>
        <h2>Analytics</h2>
        <p>
          The production site uses Vercel Web Analytics, which records aggregated page views without
          cookies and without building a profile of individual visitors.
        </p>
      </section>

      <section>
        <h2>External content</h2>
        <p>
          Photographs load from Unsplash, the world map data loads from the jsDelivr CDN, and fonts
          are served from this site itself. When your browser fetches an image or the map data, that
          provider receives your IP address, as it must to deliver the file.
        </p>
      </section>

      <section>
        <h2>Your rights</h2>
        <p>
          You can ask what data we hold about you, ask for it to be corrected, or ask us to delete
          it. Write to the address above and we will respond.
        </p>
      </section>
    </TextPage>
  )
}
