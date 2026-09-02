import { CheckCircle2 } from 'lucide-react'
import { pricingPlans } from '../../data/content'
import { openWhatsapp } from '../../data/site'
import { Button } from '../ui/Button'
import { GlassCard } from '../ui/GlassCard'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

export function Pricing() {
  return (
    <section id="precios" className="py-20">
      <div className="section-container">
        <SectionHeading
          eyebrow="Precios y modalidad"
          title="Pensado para presupuesto estudiantil, sin bajar el nivel"
          align="center"
        />

        <div className="grid gap-6 md:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <Reveal key={plan.name} delay={index * 0.1}>
              <GlassCard
                className={`flex h-full flex-col ${plan.highlighted ? 'border-[var(--color-emerald)]/60' : ''}`}
              >
                {plan.highlighted ? (
                  <span className="text-gradient mb-2 w-fit text-xs font-semibold tracking-wide uppercase">
                    Más elegido
                  </span>
                ) : null}
                <h3 className="text-lg">{plan.name}</h3>
                <p className="mt-3 text-2xl font-semibold text-[var(--color-heading)]">{plan.price}</p>
                <p className="text-xs text-[var(--color-text-muted)]">{plan.period}</p>
                <p className="mt-3 text-sm text-[var(--color-text-muted)]">{plan.description}</p>
                <ul className="mt-4 flex flex-1 flex-col gap-2">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-[var(--color-emerald)]" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  onClick={() => openWhatsapp(`Hola, me interesa el plan "${plan.name}" de la mentoría.`)}
                  variant={plan.highlighted ? 'primary' : 'secondary'}
                  className="mt-6 justify-center"
                >
                  Escríbeme por WhatsApp
                </Button>
              </GlassCard>
            </Reveal>
          ))}
        </div>

        <p className="mt-6 text-center text-xs text-[var(--color-text-muted)]">
          Precios referenciales en USD. Escríbeme tu caso y ajustamos el plan a tu presupuesto y necesidad real.
        </p>
      </div>
    </section>
  )
}
