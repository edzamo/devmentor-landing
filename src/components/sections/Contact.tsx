import { type FormEvent, useState } from 'react'
import { MessageCircle, Send } from 'lucide-react'
import { submitNetlifyForm } from '../../core/contact-form.service'
import { site, whatsappHref } from '../../data/site'
import type { ContactFormFields } from '../../types/contact-form'
import { Button } from '../ui/Button'
import { GlassCard } from '../ui/GlassCard'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

const EMPTY_FIELDS: ContactFormFields = { name: '', email: '', subject: '', message: '' }

type Status = 'idle' | 'sending' | 'sent' | 'error'

export function Contact() {
  const [fields, setFields] = useState<ContactFormFields>(EMPTY_FIELDS)
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('sending')
    try {
      await submitNetlifyForm('contact', fields)
      setStatus('sent')
      setFields(EMPTY_FIELDS)
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contacto" className="py-20">
      <div className="section-container grid gap-10 md:grid-cols-2">
        <Reveal>
          <SectionHeading
            eyebrow="Hablemos"
            title="Cuéntame en qué estás trabado"
            description="Respondo por WhatsApp o por este formulario. Cuéntame tu carrera, el tema y qué necesitas resolver."
          />

          <div className="flex flex-col gap-3">
            <Button href={whatsappHref()} target="_blank" rel="noreferrer">
              <MessageCircle size={18} />
              Escríbeme por WhatsApp
            </Button>
            <a href={`mailto:${site.email}`} className="text-sm text-[var(--color-text-muted)] underline">
              {site.email}
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <GlassCard>
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              className="flex flex-col gap-4"
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="form-name" value="contact" />

              <label className="flex flex-col gap-1 text-sm">
                Nombre
                <input
                  required
                  type="text"
                  value={fields.name}
                  onChange={(event) => setFields((prev) => ({ ...prev, name: event.target.value }))}
                  className="rounded-lg border border-[var(--color-border)] bg-transparent px-3 py-2 text-[var(--color-heading)] outline-none focus:border-[var(--color-emerald)]"
                />
              </label>

              <label className="flex flex-col gap-1 text-sm">
                Correo
                <input
                  required
                  type="email"
                  value={fields.email}
                  onChange={(event) => setFields((prev) => ({ ...prev, email: event.target.value }))}
                  className="rounded-lg border border-[var(--color-border)] bg-transparent px-3 py-2 text-[var(--color-heading)] outline-none focus:border-[var(--color-emerald)]"
                />
              </label>

              <label className="flex flex-col gap-1 text-sm">
                Asunto
                <input
                  required
                  type="text"
                  value={fields.subject}
                  onChange={(event) => setFields((prev) => ({ ...prev, subject: event.target.value }))}
                  placeholder="Ej. Ayuda con arquitectura de tesis"
                  className="rounded-lg border border-[var(--color-border)] bg-transparent px-3 py-2 text-[var(--color-heading)] outline-none focus:border-[var(--color-emerald)]"
                />
              </label>

              <label className="flex flex-col gap-1 text-sm">
                Mensaje
                <textarea
                  required
                  rows={4}
                  value={fields.message}
                  onChange={(event) => setFields((prev) => ({ ...prev, message: event.target.value }))}
                  className="rounded-lg border border-[var(--color-border)] bg-transparent px-3 py-2 text-[var(--color-heading)] outline-none focus:border-[var(--color-emerald)]"
                />
              </label>

              <Button type="submit" disabled={status === 'sending'} className="justify-center">
                <Send size={16} />
                {status === 'sending' ? 'Enviando…' : 'Enviar mensaje'}
              </Button>

              {status === 'sent' ? (
                <p className="text-sm text-[var(--color-emerald)]">¡Gracias! Te responderé pronto.</p>
              ) : null}
              {status === 'error' ? (
                <p className="text-sm text-[var(--color-amber)]">Hubo un error al enviar. Escríbeme mejor por WhatsApp.</p>
              ) : null}
            </form>
          </GlassCard>
        </Reveal>
      </div>
    </section>
  )
}
