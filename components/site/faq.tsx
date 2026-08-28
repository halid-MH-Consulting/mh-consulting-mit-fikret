import Link from 'next/link'
import { Plus } from 'lucide-react'

import { href, type Dictionary, type Locale } from '@/lib/i18n'
import { Reveal } from './reveal'

/*
  Bewusst native <details>: das Aufklappen funktioniert auch ohne JavaScript,
  Tastatur und Screenreader bekommen das Verhalten geschenkt, und der Inhalt
  ist fuer Suchmaschinen immer im Markup.
*/
export function Faq({ locale, t }: { locale: Locale; t: Dictionary }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage: locale,
    mainEntity: t.faq.items.map((f) => ({
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
              {t.faq.heading}
            </h2>
            <p className="measure-tight mt-5 text-muted-foreground">
              {t.faq.leadBefore}{' '}
              <Link
                href={href(locale, '/contact')}
                className="font-semibold text-primary underline underline-offset-4"
              >
                {t.faq.leadLink}
              </Link>
              .
            </p>
          </Reveal>

          <div>
            {t.faq.items.map((item, i) => (
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
