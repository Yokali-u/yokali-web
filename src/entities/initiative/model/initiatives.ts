export type InitiativeKind = 'proyecto' | 'producto'
export type InitiativeStage = 'publicado' | 'en-desarrollo' | 'exploracion'

export interface Initiative {
  readonly id: string
  readonly name: string
  readonly kind: InitiativeKind
  readonly stage: InitiativeStage
  readonly year: string
  readonly summary: string
  readonly href?: string
}

export interface InitiativeTrack {
  readonly id: string
  readonly index: string
  readonly kindLabel: string
  readonly title: string
  readonly description: string
  readonly statusNote: string
}

/**
 * Registro extensible de proyectos y productos publicables.
 * Cuando YOKALI incorpore lanzamientos públicos o casos documentados,
 * basta con añadir entradas a este arreglo sin alterar la estructura de la página.
 */
export const PUBLISHED_INITIATIVES: readonly Initiative[] = []

export const INITIATIVE_TRACKS: readonly InitiativeTrack[] = [
  {
    id: 'soluciones-colaborativas',
    index: 'A',
    kindLabel: 'Proyectos en colaboración',
    title: 'Soluciones construidas junto a organizaciones y emprendimientos',
    description:
      'Documentaremos aquí desarrollos de software, plataformas digitales e integraciones realizadas en conjunto, explicando el problema de partida, las decisiones técnicas y el resultado real.',
    statusNote: 'Primeros casos en preparación editorial',
  },
  {
    id: 'productos-propios',
    index: 'B',
    kindLabel: 'Productos propios',
    title: 'Herramientas digitales concebidas desde el laboratorio interno de YOKALI',
    description:
      'Espacio reservado para presentar nuestras propias iniciativas de software conforme alcancen madurez para abrirse al público o a programas de prueba temprana.',
    statusNote: 'Línea en exploración y prototipado',
  },
] as const
