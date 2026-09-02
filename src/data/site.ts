// Número y correo van codificados en base64 y solo se decodifican al invocar la
// acción (clic), para que no queden como texto plano en el HTML ni en el bundle.
const ENCODED_WHATSAPP_NUMBER = 'NTkzOTgzODIxNDQz' // 593983821443
const ENCODED_EMAIL = 'ZWR6YW1vMTNAZ21haWwuY29t' // edzamo13@gmail.com

function decode(value: string): string {
  return atob(value)
}

export const site = {
  mentorName: 'Edwin Zamora',
  whatsappMessage: 'Hola, vengo desde la devmentor-ec de mentoría y quiero agendar una consulta exprés.',
  discordInvite: 'https://discord.gg/TODO',
  portfolioUrl: 'https://edwin-zamora-ec.netlify.app/',
}

export function whatsappHref(message = site.whatsappMessage): string {
  return `https://wa.me/${decode(ENCODED_WHATSAPP_NUMBER)}?text=${encodeURIComponent(message)}`
}

export function mailtoHref(): string {
  return `mailto:${decode(ENCODED_EMAIL)}`
}

export function openWhatsapp(message = site.whatsappMessage): void {
  window.open(whatsappHref(message), '_blank', 'noopener,noreferrer')
}

export function openEmail(): void {
  window.location.href = mailtoHref()
}
