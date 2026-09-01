import { AlertTriangle } from 'lucide-react'
import { pains } from '../../data/content'
import { GlassCard } from '../ui/GlassCard'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

export function Pains() {
  return (
    <section className="py-20">
      <div className="section-container">
        <SectionHeading eyebrow="¿Te identificas con esto?" title="Problemas comunes que veo cada semestre" align="center" />

        <div className="grid gap-5 sm:grid-cols-2">
          {pains.map((pain, index) => (
            <Reveal key={pain.title} delay={index * 0.08}>
              <GlassCard className="flex h-full items-start gap-4">
                <AlertTriangle size={22} className="mt-1 shrink-0 text-[var(--color-amber)]" />
                <div>
                  <h3 className="text-lg">{pain.title}</h3>
                  <p className="mt-2 text-sm text-[var(--color-text-muted)]">{pain.description}</p>
                </div>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
