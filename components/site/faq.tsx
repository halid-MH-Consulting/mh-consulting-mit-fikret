import { Plus } from 'lucide-react'

import { Reveal } from './reveal'

const FAQS = [
  {
    q: 'Do you only work with travel brands?',
    a: 'Travel, tourism, hotels, airlines, travel tech, eSIM and VPN companies are our core focus, but we also support ambitious brands from other industries that value real creator partnerships.',
  },
  {
    q: 'How do you choose creators?',
    a: 'We vet every creator for authenticity, audience quality and brand fit. Follower count is never the deciding factor; trust and relevance are.',
  },
  {
    q: 'What does a partnership look like?',
    a: 'Rather than one-off sponsored posts, we build ongoing relationships between your brand and creators, so your presence compounds in trust and reach over time.',
  },
  {
    q: 'Where are you based and who do you work with?',
    a: 'We are based in Dubai and work globally, combining international reach with European marketing standards.',
  },
  {
    q: 'How do you measure success?',
    a: 'We define success around your business goals and report transparently on the metrics that matter, not vanity likes.',
  },
]

/*
  Bewusst native <details>: das Aufklappen funktioniert auch ohne JavaScript,
  Tastatur und Screenreader bekommen das Verhalten geschenkt, und der Inhalt
  ist fuer Suchmaschinen immer im Markup.
*/
export function Faq() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  return (
    <section
      id="faq"
      className="relative border-y border-border bg-secondary/50 py-24 md:py-32"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] lg:gap-16">
          <Reveal>
            <h2 id="faq-heading" className="text-h2">
              Questions, answered.
            </h2>
            <p className="measure-tight mt-5 text-muted-foreground">
              Still unsure whether we are the right fit?{' '}
              <a href="#contact" className="font-semibold text-primary underline underline-offset-4">
                Ask us directly
              </a>
              .
            </p>
          </Reveal>

          <div>
            {FAQS.map((item, i) => (
              <Reveal as="div" key={item.q} delay={i * 50}>
                <details className="group border-b border-border first:border-t">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-left text-base font-semibold [&::-webkit-details-marker]:hidden">
                    {item.q}
                    <Plus
                      className="size-5 shrink-0 text-primary transition-transform duration-300 group-open:rotate-45"
                      aria-hidden
                    />
                  </summary>
                  <p className="measure pb-6 text-sm leading-relaxed text-muted-foreground">
                    {item.a}
                  </p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <script
        type="application/ld+json"
        // Statischer, im Code definierter Inhalt, keine Fremddaten.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </section>
  )
}
