export interface Capability {
  readonly id: string
  readonly index: string
  readonly title: string
  readonly summary: string
  readonly detail: string
  readonly focusAreas: readonly string[]
  readonly audienceNote: string
}

export const YOKALI_CAPABILITIES: readonly Capability[] = [
  {
    id: 'software-medida',
    index: '01',
    title: 'Desarrollo de software a medida',
    summary:
      'Construimos aplicaciones web, herramientas internas y sistemas diseñados alrededor de procesos reales.',
    detail:
      'Partimos de entender cómo opera tu organización antes de escribir código. Diseñamos arquitecturas claras, mantenibles y listas para crecer sin atarte a soluciones rígidas.',
    focusAreas: [
      'Aplicaciones web y plataformas operativas',
      'Sistemas de gestión y flujos de trabajo internos',
      'Modernización gradual de herramientas existentes',
    ],
    audienceNote:
      'Pensado para equipos que necesitan software confiable que se adapte a su operación, y no al revés.',
  },
  {
    id: 'soluciones-digitales',
    index: '02',
    title: 'Diseño y experiencia de producto digital',
    summary:
      'Traducimos problemas complejos en interfaces claras, accesibles y coherentes para quien las usa cada día.',
    detail:
      'El diseño y la ingeniería trabajan juntos desde el primer día. Definimos flujos, sistemas de diseño y prototipos funcionales que reducen incertidumbre antes de escalar.',
    focusAreas: [
      'Arquitectura de información y diseño UX/UI',
      'Sistemas de diseño y librerías de componentes',
      'Accesibilidad web y rendimiento frontend',
    ],
    audienceNote:
      'Ideal cuando una idea o servicio necesita claridad visual, estructura y criterio técnico compartido.',
  },
  {
    id: 'arquitectura-integracion',
    index: '03',
    title: 'Arquitectura, APIs e integraciones',
    summary:
      'Conectamos plataformas, datos y servicios para que la información fluya sin fricción ni duplicidad.',
    detail:
      'Diseñamos servicios backend, integraciones entre sistemas y bases técnicas sólidas que acompañan el ritmo de evolución del negocio con trazabilidad y buenas prácticas.',
    focusAreas: [
      'Diseño de APIs y servicios escalables',
      'Integración entre plataformas y automatización de procesos',
      'Acompañamiento técnico y revisión de arquitectura',
    ],
    audienceNote:
      'Orientado a organizaciones y equipos técnicos que buscan solidez, claridad estructural y criterio compartido.',
  },
  {
    id: 'productos-propios',
    index: '04',
    title: 'Exploración y productos propios',
    summary:
      'Un espacio vivo dentro de YOKALI dedicado a investigar, prototipar y lanzar herramientas digitales propias.',
    detail:
      'Creemos que construir productos propios afina nuestro criterio para cada proyecto externo. Esta línea evoluciona de forma continua hacia nuevas iniciativas y verticales.',
    focusAreas: [
      'Prototipado rápido y validación con usuarios reales',
      'Herramientas digitales diseñadas desde la experiencia práctica',
      'Alianzas para co-crear nuevas líneas de producto',
    ],
    audienceNote:
      'La base sobre la que YOKALI expandirá sus futuras líneas de negocio y soluciones independientes.',
  },
] as const
