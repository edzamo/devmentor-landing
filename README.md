# DevMentor Landing

Landing page de mentoría técnica para estudiantes universitarios de software/TI (resolución de bugs y laboratorios, acompañamiento de tesis, talleres). Vite + React + TypeScript + Tailwind CSS 4, pensada para desplegarse en Netlify con su propio dominio, independiente del portafolio personal.

## Antes de publicar

Editar `src/data/site.ts` con los datos reales:

- `whatsappNumber`: número real en formato internacional sin `+`.
- `email`: correo de contacto real.
- `discordInvite`: enlace real del servidor, si aplica.

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
