export const navLinks = [
  { href: '#servicios', label: 'Servicios' },
  { href: '#metodologia', label: 'Cómo trabajamos' },
  { href: '#precios', label: 'Precios' },
  { href: '#mentor', label: 'Sobre mí' },
  { href: '#faq', label: 'FAQ' },
]

export const pains = [
  {
    title: 'Tu código no funciona y se acerca la entrega',
    description:
      'Llevas horas atascado en un bug o en un error que no logras reproducir, y el reloj sigue corriendo.',
  },
  {
    title: 'No sabes cómo estructurar la arquitectura de tu tesis',
    description:
      'Tienes el tema definido, pero no cómo dividir capas, módulos, base de datos y APIs de forma defendible.',
  },
  {
    title: 'Falta de práctica en frameworks modernos',
    description:
      'La universidad te dio la teoría, pero el mercado laboral pide herramientas y buenas prácticas que nadie te enseñó a aplicar.',
  },
  {
    title: 'Trabajas solo y no tienes con quién validar decisiones',
    description:
      'No cuentas con alguien con experiencia real en la industria que revise tu código o tu enfoque antes de presentarlo.',
  },
]

export const services = [
  {
    title: 'Unblock Session / Tutoría Exprés',
    description:
      'Sesiones cortas y enfocadas para resolver ejercicios, laboratorios o bugs específicos que te tienen trabado.',
    bullets: ['Diagnóstico rápido del problema', 'Solución guiada, no copiada', 'Explicación de la buena práctica detrás'],
  },
  {
    title: 'Acompañamiento en Proyectos de Grado (Tesis)',
    description:
      'Asesoría end-to-end en arquitectura, base de datos, APIs y código para tu proyecto de titulación.',
    bullets: ['Definición de arquitectura y stack', 'Revisión de código y buenas prácticas', 'Preparación para la defensa técnica'],
  },
  {
    title: 'Talleres y Bootcamp Prácticos',
    description:
      'Cursos grupales intensivos en herramientas de alta demanda laboral que la universidad no cubre a fondo.',
    bullets: ['Grupos reducidos', 'Proyectos reales, no solo teoría', 'Enfoque en lo que piden las vacantes junior'],
  },
]

export const methodologySteps = [
  {
    step: '01',
    title: 'Envías tu problema o proyecto',
    description: 'Cuéntame por WhatsApp qué necesitas: un bug puntual, un laboratorio o tu proyecto de tesis completo.',
  },
  {
    step: '02',
    title: 'Revisamos en sesión 1 a 1',
    description: 'Sesión remota enfocada en tu caso: revisamos código, arquitectura o el ejercicio en tiempo real.',
  },
  {
    step: '03',
    title: 'Destrabas tu código y aprendes la buena práctica',
    description: 'Sales con el problema resuelto y con el criterio para no volver a trabarte con algo similar.',
  },
]

export const pricingPlans = [
  {
    name: 'Unblock Session',
    price: 'Desde $15',
    period: 'sesión de 45 min',
    description: 'Ideal para un bug puntual, un ejercicio o una duda concreta de laboratorio.',
    features: ['Sesión remota 1 a 1', 'Resolución de un problema específico', 'Resumen escrito de la solución'],
    highlighted: false,
  },
  {
    name: 'Acompañamiento de Tesis',
    price: 'Desde $80',
    period: 'paquete mensual',
    description: 'Seguimiento continuo mientras desarrollas tu proyecto de titulación.',
    features: [
      'Sesiones periódicas 1 a 1',
      'Revisión de arquitectura y código',
      'Acompañamiento hasta la defensa',
      'Soporte async entre sesiones',
    ],
    highlighted: true,
  },
  {
    name: 'Taller Grupal',
    price: 'Cotización grupal',
    period: 'según número de estudiantes',
    description: 'Para grupos de clase, semilleros o clubes estudiantiles que quieren un taller a medida.',
    features: ['Contenido a medida', 'Modalidad remota o presencial', 'Material y ejercicios incluidos'],
    highlighted: false,
  },
]

export const faqs = [
  {
    question: '¿Qué lenguajes o stacks manejas?',
    answer:
      'Backend y arquitectura de microservicios, APIs REST, bases de datos relacionales y NoSQL, y frameworks web/móvil modernos (JavaScript/TypeScript, Java, Python, entre otros). Si tu stack no está aquí, escríbeme y lo confirmamos.',
  },
  {
    question: '¿Las sesiones son presenciales o remotas?',
    answer: 'Todas las sesiones son 100% remotas, por videollamada, para que puedas agendar desde cualquier ciudad.',
  },
  {
    question: '¿Cómo agendo una sesión?',
    answer: 'Escríbeme por WhatsApp contándome tu caso y coordinamos el horario según disponibilidad.',
  },
  {
    question: '¿Puedo pedir ayuda solo para una parte puntual de mi tesis?',
    answer: 'Sí. Puedes tomar una Unblock Session para algo específico, o el acompañamiento completo si necesitas seguimiento durante todo el desarrollo.',
  },
  {
    question: '¿Ofreces algún tipo de garantía?',
    answer: 'Si en la sesión no logramos avanzar sobre tu problema por causas atribuibles a la asesoría, coordinamos una sesión de recuperación sin costo.',
  },
]
