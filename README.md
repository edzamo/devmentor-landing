# DevMentor Landing

## Objetivo

Landing page de mentoría técnica para estudiantes universitarios de carreras de software/TI (Ingeniería de Software, Tecnologías de la Información, Computación). Busca convertir estudiantes que enfrentan bloqueos en proyectos, ejercicios técnicos o su proyecto de titulación (tesis) en clientes de sesiones de mentoría 1 a 1, consultoría técnica y talleres, dictados por un ingeniero de software senior con experiencia real en la industria.

Es un proyecto **independiente del portafolio personal** (`tech-portfolio`): dominio propio y deploy propio, pensado como una línea de negocio aparte (asesoría a estudiantes) que puede crecer con más landing pages o features sin acoplarse al sitio de portafolio.

## Qué incluye la landing

Siguiendo el brief original (`.claude/promt.md` en el repo del portafolio), la página cubre:

1. **Hero** — propuesta de valor y CTA directo a WhatsApp.
2. **Dolores/Problemas** — bloqueos comunes con los que se identifica el estudiante.
3. **Servicios** — Unblock Session (tutoría exprés), Acompañamiento en Proyectos de Grado (tesis), Talleres y Bootcamp.
4. **Metodología** — cómo se trabaja, en 3 pasos.
5. **Precios/Modalidad** — planes orientados a presupuesto estudiantil.
6. **Sobre el mentor** — experiencia real que genera confianza.
7. **FAQ** — dudas sobre stacks, disponibilidad y modalidad (remota).
8. **Contacto/Footer** — formulario (Netlify Forms) + enlace directo a WhatsApp.

## Stack

Vite + React 19 + TypeScript + Tailwind CSS 4 + Framer Motion + lucide-react — mismo stack que el portafolio, con componentes UI (`Reveal`, `SectionHeading`, `Button`, `GlassCard`) y el patrón de envío a Netlify Forms reutilizados como base, pero con paleta e identidad visual propias (verde esmeralda / índigo) para no clonar el branding del portafolio.

## Dónde vamos a desplegar

- **Repositorio**: GitHub — [github.com/edzamo/devmentor-landing](https://github.com/edzamo/devmentor-landing)
- **Hosting**: Netlify, sitio nuevo apuntando a este repo (`netlify.toml` ya configurado: build `npm run build`, publish `dist`).
- **Dominio**: dominio propio a definir (distinto del dominio del portafolio) — pendiente de conectar en Netlify una vez comprado/asignado.

> No se versionan credenciales, tokens ni secretos en este repo. Cualquier variable sensible (por ejemplo, si en el futuro se integra un proveedor de email o pagos) debe configurarse como variable de entorno en el panel de Netlify, nunca en el código.

## Antes de publicar

Editar `src/data/site.ts` con los datos reales pendientes (son placeholders, no credenciales):

- `email`: correo de contacto real.
- `discordInvite`: enlace real del servidor, si aplica.

Ya configurados: `whatsappNumber` (Ecuador, +593983821443) y `portfolioUrl` (https://edwin-zamora-ec.netlify.app/), enlazado desde el navbar, la sección "Sobre el mentor" y el footer — el portafolio completo vive en ese sitio aparte, esta landing se mantiene enfocada solo en el servicio de mentoría.

El copy de las secciones (dolores, servicios, precios, FAQ) vive en `src/data/content.ts`.

## Desarrollo

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy

Configurado para Netlify (`netlify.toml`): build `npm run build`, publish `dist`. El formulario de contacto usa Netlify Forms (`data-netlify="true"`).
