import { CheckCircle2 } from 'lucide-react'
import { services } from '../../data/content'
import { GlassCard } from '../ui/GlassCard'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

export function Services() {
  return (
    <section id="servicios" className="py-20">
      <div className="section-container">
        <SectionHeading
          eyebrow="Servicios principales"
          title="Elige el formato que necesita tu momento actual"
          align="center"
        />

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.1}>
              <GlassCard className="flex h-full flex-col">
                <h3 className="text-lg">{service.title}</h3>
                <p className="mt-2 text-sm text-[var(--color-text-muted)]">{service.description}</p>
                <ul className="mt-4 flex flex-1 flex-col gap-2">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-[var(--color-emerald)]" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
