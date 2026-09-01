import type { ContactFormFields } from '../types/contact-form'

function encodeFormData(data: Record<string, string>): string {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&')
}

// Envío al endpoint de Netlify Forms (requiere `data-netlify="true"` en el <form>).
export async function submitNetlifyForm(formName: string, fields: ContactFormFields): Promise<void> {
  await fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: encodeFormData({ 'form-name': formName, ...fields }),
  })
}
