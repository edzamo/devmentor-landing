import { ExternalLink } from 'lucide-react'
import { site } from '../../data/site'
import { Button } from '../ui/Button'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

export function About() {
  return (
    <section id="mentor" className="py-20">
      <div className="section-container">
        <Reveal className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
          <SectionHeading eyebrow="Sobre el mentor" title={`Hola, soy ${site.mentorName}`} align="center" />
          <p className="text-[var(--color-text-muted)]">
            Ingeniero de software senior con experiencia real en la industria. Doy mentoría a estudiantes universitarios
            de software y TI porque recuerdo lo que es trabarse en un proyecto sin tener a quién preguntarle con
            criterio de industria, no solo de aula.
          </p>
          <Button href={site.portfolioUrl} target="_blank" rel="noreferrer" variant="secondary">
            <ExternalLink size={16} />
            Ver mi portafolio completo
          </Button>
        </Reveal>
      </div>
    </section>
  )
}
