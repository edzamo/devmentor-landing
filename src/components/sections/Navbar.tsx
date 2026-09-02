import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navLinks } from '../../data/content'
import { openWhatsapp, site } from '../../data/site'
import { Button } from '../ui/Button'

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="glass-surface sticky top-0 z-50 border-b border-[var(--color-border)]">
      <div className="section-container flex h-16 items-center justify-between">
        <a href="#top" className="text-lg font-semibold text-[var(--color-heading)]">
          Dev<span className="text-gradient">Mentor</span>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="nav-link text-sm text-[var(--color-text)]">
              {link.label}
            </a>
          ))}
          <a
            href={site.portfolioUrl}
            target="_blank"
            rel="noreferrer"
            className="nav-link text-sm text-[var(--color-text)]"
          >
            Portafolio
          </a>
        </nav>

        <div className="hidden md:block">
          <Button onClick={() => openWhatsapp()} className="text-sm">
            Escríbeme por WhatsApp
          </Button>
        </div>

        <button
          type="button"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          className="text-[var(--color-heading)] md:hidden"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open ? (
        <div className="glass-surface border-t border-[var(--color-border)] md:hidden">
          <nav className="section-container flex flex-col gap-4 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-[var(--color-text)]"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={site.portfolioUrl}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-[var(--color-text)]"
              onClick={() => setOpen(false)}
            >
              Portafolio
            </a>
            <Button
              onClick={() => {
                setOpen(false)
                openWhatsapp()
              }}
              className="justify-center text-sm"
            >
              Escríbeme por WhatsApp
            </Button>
          </nav>
        </div>
      ) : null}
    </header>
  )
}
