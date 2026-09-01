import { methodologySteps } from '../../data/content'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

export function Methodology() {
  return (
    <section id="metodologia" className="py-20">
      <div className="section-container">
        <SectionHeading eyebrow="Cómo trabajamos" title="Tres pasos, sin vueltas" align="center" />

        <div className="grid gap-8 md:grid-cols-3">
          {methodologySteps.map((step, index) => (
            <Reveal key={step.step} delay={index * 0.1} className="relative">
              <span className="text-gradient text-4xl font-semibold">{step.step}</span>
              <h3 className="mt-3 text-lg">{step.title}</h3>
              <p className="mt-2 text-sm text-[var(--color-text-muted)]">{step.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
