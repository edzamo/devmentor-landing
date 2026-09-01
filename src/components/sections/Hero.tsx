import { CheckCircle2 } from 'lucide-react'
import { whatsappHref } from '../../data/site'
import { Button } from '../ui/Button'
import { Reveal } from '../ui/Reveal'

export function Hero() {
  return (
    <section id="top" className="tech-grid-bg relative overflow-hidden pt-20 pb-24">
      <div className="section-container relative flex flex-col items-center text-center">
        <Reveal>
          <p className="text-gradient mb-4 text-sm font-semibold tracking-wide uppercase">
            Mentoría para estudiantes de software
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <h1 className="max-w-3xl text-4xl leading-tight sm:text-5xl">
            Destraba tu proyecto de software <span className="text-gradient">antes de la entrega</span>
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-6 max-w-2xl text-lg text-[var(--color-text-muted)]">
            Mentoría 1 a 1 con un ingeniero senior de la industria: resolvemos bugs, laboratorios y te acompaño en la
            arquitectura, base de datos y código de tu tesis o proyecto de titulación.
          </p>
        </Reveal>

        <Reveal delay={0.3} className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button href={whatsappHref()} target="_blank" rel="noreferrer">
            Escríbeme por WhatsApp
          </Button>
          <Button href="#servicios" variant="secondary">
            Agenda tu consulta exprés
          </Button>
        </Reveal>

        <Reveal delay={0.4} className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-[var(--color-text-muted)]">
          {['Sesiones 100% remotas', 'Enfoque en buenas prácticas reales', 'Ideal para tesis y proyectos de grado'].map(
            (item) => (
              <span key={item} className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[var(--color-emerald)]" />
                {item}
              </span>
            ),
          )}
        </Reveal>
      </div>
    </section>
  )
}
