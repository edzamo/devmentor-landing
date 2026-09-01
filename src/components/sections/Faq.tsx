import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { faqs } from '../../data/content'
import { GlassCard } from '../ui/GlassCard'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-20">
      <div className="section-container max-w-3xl">
        <SectionHeading eyebrow="Preguntas frecuentes" title="Antes de escribirme, tal vez esto ya responde tu duda" align="center" />

        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <Reveal key={faq.question} delay={index * 0.05}>
                <GlassCard>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 text-left"
                    aria-expanded={isOpen}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                  >
                    <span className="text-base font-medium text-[var(--color-heading)]">{faq.question}</span>
                    <ChevronDown
                      size={18}
                      className={`shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {isOpen ? <p className="mt-3 text-sm text-[var(--color-text-muted)]">{faq.answer}</p> : null}
                </GlassCard>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
