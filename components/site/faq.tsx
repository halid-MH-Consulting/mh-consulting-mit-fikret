'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'
import { Reveal } from './reveal'
import { cn } from '@/lib/utils'

const FAQS = [
  {
    q: 'Do you only work with travel brands?',
    a: 'Travel, tourism, hotels, airlines, travel tech, eSIM and VPN companies are our core focus — but we also support ambitious brands from other industries that value real creator partnerships.',
  },
  {
    q: 'How do you choose creators?',
    a: 'We vet every creator for authenticity, audience quality and brand fit. Follower count is never the deciding factor — trust and relevance are.',
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
    a: 'We define success around your business goals and report transparently on the metrics that matter — not vanity likes.',
  },
]

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="relative py-24 md:py-32" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-3xl px-6">
        <Reveal className="text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-neon">FAQ</p>
          <h2 id="faq-heading" className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            Questions, answered.
          </h2>
        </Reveal>

        <div className="mt-12 flex flex-col gap-3">
          {FAQS.map((item, i) => {
            const isOpen = open === i
            return (
              <Reveal key={i} delay={i * 50}>
                <div
                  className={cn(
                    'overflow-hidden rounded-2xl border transition-colors duration-300',
                    isOpen ? 'border-electric/40 bg-card/60' : 'border-border bg-card/30',
                  )}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="text-base font-medium md:text-lg">{item.q}</span>
                    <Plus
                      className={cn(
                        'size-5 shrink-0 text-electric transition-transform duration-300',
                        isOpen && 'rotate-45',
                      )}
                      aria-hidden
                    />
                  </button>
                  <div
                    className={cn(
                      'grid transition-all duration-300 ease-out',
                      isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-6 text-pretty leading-relaxed text-muted-foreground">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
