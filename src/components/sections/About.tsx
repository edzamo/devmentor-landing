import { Briefcase, GraduationCap, Layers } from 'lucide-react'
import { site } from '../../data/site'
import { GlassCard } from '../ui/GlassCard'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

const highlights = [
  { icon: Briefcase, text: 'Ingeniero de software senior con experiencia real en la industria' },
  { icon: Layers, text: 'Arquitectura de software, backend y microservicios en producción' },
  { icon: GraduationCap, text: 'Enfoque práctico: buenas prácticas profesionales, no solo teoría' },
]

export function About() {
  return (
    <section id="mentor" className="py-20">
      <div className="section-container grid gap-10 md:grid-cols-2 md:items-center">
        <Reveal>
          <SectionHeading eyebrow="Sobre el mentor" title={`Hola, soy ${site.mentorName}`} />
          <p className="text-[var(--color-text-muted)]">
            Trabajo como ingeniero de software en proyectos reales de arquitectura, backend y desarrollo web/móvil. Doy
            mentoría a estudiantes universitarios de software y TI porque recuerdo lo que es trabarse en un proyecto sin
            tener a quién preguntarle con criterio de industria, no solo de aula.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="grid gap-4">
          {highlights.map(({ icon: Icon, text }) => (
            <GlassCard key={text} className="flex items-center gap-4">
              <Icon size={22} className="shrink-0 text-[var(--color-emerald)]" />
              <p className="text-sm">{text}</p>
            </GlassCard>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
