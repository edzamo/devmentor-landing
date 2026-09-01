// TODO: reemplazar con los datos reales antes de publicar.
export const site = {
  mentorName: 'Edwin Zamora',
  whatsappNumber: '593900000000', // formato internacional sin '+', TODO: número real
  whatsappMessage: 'Hola, vengo desde la landing de mentoría y quiero agendar una consulta exprés.',
  discordInvite: 'https://discord.gg/TODO',
  email: 'hola@devmentor.example', // TODO: correo real
}

export function whatsappHref(message = site.whatsappMessage): string {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`
}
