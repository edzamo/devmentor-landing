import { MessageCircle } from 'lucide-react'
import { openWhatsapp, site } from '../../data/site'

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] py-10">
      <div className="section-container flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p className="text-[var(--color-heading)]">
            Dev<span className="text-gradient">Mentor</span>
          </p>
          <p className="mt-1 text-xs text-[var(--color-text-muted)]">
            Mentoría técnica para estudiantes de software · {site.mentorName}
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a
            href={site.portfolioUrl}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-emerald)]"
          >
            Ver portafolio
          </a>
          <button
            type="button"
            onClick={() => openWhatsapp()}
            className="flex items-center gap-2 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-emerald)]"
          >
            <MessageCircle size={16} />
            Escríbeme por WhatsApp
          </button>
        </div>
      </div>
    </footer>
  )
}
