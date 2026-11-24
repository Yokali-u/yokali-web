export interface NavItem {
  readonly index: string
  readonly label: string
  readonly shortLabel: string
  readonly to: string
}

export const SITE_ROUTES = {
  home: '/',
  about: '/nosotros',
  solutions: '/soluciones',
  projects: '/proyectos',
  contact: '/contacto',
  logos: '/logos',
} as const

export const SITE_NAVIGATION: readonly NavItem[] = [
  { index: '01', label: 'Inicio', shortLabel: 'Inicio', to: SITE_ROUTES.home },
  {
    index: '02',
    label: 'Nosotros',
    shortLabel: 'Nosotros',
    to: SITE_ROUTES.about,
  },
  {
    index: '03',
    label: 'Soluciones',
    shortLabel: 'Soluciones',
    to: SITE_ROUTES.solutions,
  },
  {
    index: '04',
    label: 'Proyectos y productos',
    shortLabel: 'Proyectos',
    to: SITE_ROUTES.projects,
  },
  {
    index: '05',
    label: 'Contacto',
    shortLabel: 'Contacto',
    to: SITE_ROUTES.contact,
  },
  {
    index: '06',
    label: 'Exploración de logos',
    shortLabel: 'Logos',
    to: SITE_ROUTES.logos,
  },
] as const

export const SITE_CONTACT = {
  email: 'hola@yokali.dev',
  whatsappHref:
    'https://wa.me/?text=Hola%20YOKALI%2C%20me%20gustar%C3%ADa%20conversar%20sobre%20un%20proyecto.',
  responseExpectation:
    'Respondemos de forma directa, sin intermediarios comerciales.',
  directChannels: [
    {
      label: 'Correo electrónico',
      value: 'hola@yokali.dev',
      href: 'mailto:hola@yokali.dev',
      description: 'Para consultas detalladas, propuestas o alianzas.',
    },
  ],
  socialChannels: [
    {
      label: 'GitHub',
      value: 'github.com/yokali',
      href: 'https://github.com',
      icon: 'github' as const,
      external: true,
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/company/yokali',
      href: 'https://linkedin.com',
      external: true,
    },
  ],
} as const
