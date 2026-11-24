export interface VectorPart {
  readonly d: string
  readonly role: 'primary' | 'accent'
  readonly kind: 'fill' | 'stroke'
  readonly strokeWidth?: number
}

export interface LetterTrace {
  readonly letter: 'Y' | 'A' | 'K'
  readonly paths: readonly string[]
  readonly note: string
}

export interface EvaluationScore {
  readonly criterion: string
  readonly score: number
  readonly note: string
}

export interface MonogramProposal {
  readonly id: string
  readonly index: string
  readonly name: string
  readonly principle: string
  readonly summary: string
  readonly integrationExplanation: string
  readonly parts: readonly VectorPart[]
  readonly traces: readonly LetterTrace[]
  readonly evaluation: readonly EvaluationScore[]
  readonly verdict: string
}

/**
 * Seis propuestas de monograma Y · A · K en viewBox cuadrado 64×64.
 * Cada propuesta responde a un principio constructivo distinto y funciona
 * de manera autónoma en monocromo antes de aplicar el sistema bicolor.
 */
export const MONOGRAM_PROPOSALS: readonly MonogramProposal[] = [
  {
    id: 'trama-entrelazada',
    index: '01',
    name: 'Trama Entrelazada',
    principle: 'Entrelazamiento de iniciales',
    summary:
      'Tres bandas arquitectónicas se cruzan con cortes de entrelazado limpio alrededor de un eje central, generando un emblema compacto con sensación de tejido estructural.',
    integrationExplanation:
      'La columna izquierda aporta el anclaje vertical de la K; la banda ascendente cruza por debajo hacia el vértice superior compartiendo el brazo superior de la K, la pierna izquierda de la A y la rama derecha de la Y; la banda descendente pasa por encima cerrando la convergencia de la Y, la pierna derecha de la A y la ramificación inferior de la K.',
    parts: [
      // Columna vertical izquierda (fuste de K)
      {
        d: 'M10 10H19V54H10V10Z',
        role: 'primary',
        kind: 'fill',
      },
      // Banda descendente continua (brazo izq. Y + pierna der. A + rama inf. K)
      {
        d: 'M24 10H33.5L54 54H44L24 10Z',
        role: 'primary',
        kind: 'fill',
      },
      // Tramo inferior de la banda ascendente (corte de entrelazado antes del cruce)
      {
        d: 'M23 54L33.5 37.5L39.2 44.2L33 54H23Z',
        role: 'accent',
        kind: 'fill',
      },
      // Tramo superior de la banda ascendente (cruza por debajo y emerge al vértice superior)
      {
        d: 'M38.2 28.8L45 10H54L43.6 34.8L38.2 28.8Z',
        role: 'accent',
        kind: 'fill',
      },
    ],
    traces: [
      {
        letter: 'Y',
        paths: ['M28 10L38 32L50 10', 'M14.5 32V54', 'M28 10L14.5 32'],
        note: 'Convergencia de las dos diagonales superiores sobre el eje de apoyo.',
      },
      {
        letter: 'A',
        paths: ['M28 54L49 10', 'M28.5 10L49 54', 'M30 39H43'],
        note: 'Triángulo estructural formado por las dos bandas cruzadas sobre la base.',
      },
      {
        letter: 'K',
        paths: ['M14.5 10V54', 'M19 32L49.5 10', 'M19 32L49 54'],
        note: 'Columna izquierda firme acoplada a la apertura diagonal doble hacia la derecha.',
      },
    ],
    evaluation: [
      { criterion: 'Originalidad', score: 4, note: 'Entrelazado reconocible sin caer en nudos genéricos.' },
      { criterion: 'Reconocimiento visual', score: 4, note: 'Silueta rectangular firme y balanceada.' },
      { criterion: 'Integración Y·A·K', score: 4, note: 'K es muy sólida; Y requiere lectura por convergencia.' },
      { criterion: 'Coherencia conceptual', score: 4, note: 'Expresa colaboración física entre piezas.' },
      { criterion: 'Equilibrio geométrico', score: 5, note: 'Pesos ópticos y cortes de aire bien compensados.' },
      { criterion: 'Escalabilidad', score: 4, note: 'A 16px el corte inferior de cruce se reduce ligeramente.' },
      { criterion: 'Funcionamiento monocromático', score: 5, note: 'El espacio negativo del cruce mantiene lectura sin color.' },
      { criterion: 'Potencial corporativo', score: 4, note: 'Sólido para entornos técnicos e institucionales.' },
    ],
    verdict: 'Muy sólida en monocromo y con presencia arquitectónica, aunque más rígida que el lenguaje orgánico-editorial de YOKALI.',
  },
  {
    id: 'corte-negativo',
    index: '02',
    name: 'Corte Negativo',
    principle: 'Aprovechamiento de espacios negativos',
    summary:
      'Un bloque escultórico con esquina orgánica controlada, dividido por canales internos de espacio negativo donde nacen las tres iniciales mediante contraste figura-fondo.',
    integrationExplanation:
      'Tres planos sólidos se articulan dejando un canal en espacio negativo que traza la convergencia de la Y. El plano vertical izquierdo construye el fuste de la K; la cuña superior derecha y el triángulo inferior derecho forman la apertura de la K mientras encierran la silueta ascendente de la A.',
    parts: [
      // Plano izquierdo: columna de K y pared izquierda del canal Y
      {
        d: 'M10 12C10 10.9 10.9 10 12 10H24L31 25.5L23.5 34.5V54H12C10.9 54 10 53.1 10 52V12Z',
        role: 'primary',
        kind: 'fill',
      },
      // Plano superior derecho: cuña curva (rama superior K/Y + vértice de A)
      {
        d: 'M30.5 10H42C48.6 10 54 15.4 54 22V28.5L36.5 28.5L30.5 10Z',
        role: 'accent',
        kind: 'fill',
      },
      // Plano inferior derecho: triángulo estructural A + rama inferior K
      {
        d: 'M31 35.5L54 35.5V52C54 53.1 53.1 54 52 54H39.5L31 35.5Z',
        role: 'primary',
        kind: 'fill',
      },
    ],
    traces: [
      {
        letter: 'Y',
        paths: ['M26.5 10L34 31.5V54', 'M54 32L34 31.5'],
        note: 'El canal central en espacio negativo forma una Y limpia que separa los tres bloques.',
      },
      {
        letter: 'A',
        paths: ['M27 54L34.5 11L53 54', 'M31 33H49'],
        note: 'Los planos derechos conforman una estructura piramidal escalonada con travesaño negativo.',
      },
      {
        letter: 'K',
        paths: ['M17 10V54', 'M24 32L51 13', 'M24 32L51 52'],
        note: 'Masa vertical izquierda articulada con los dos brazos angulares derechos.',
      },
    ],
    evaluation: [
      { criterion: 'Originalidad', score: 5, note: 'Uso inteligente de gestalt y figura-fondo.' },
      { criterion: 'Reconocimiento visual', score: 5, note: 'Silueta compacta e inolvidable como icono de app.' },
      { criterion: 'Integración Y·A·K', score: 4, note: 'Equilibra K y Y con claridad; A vive en la contraforma.' },
      { criterion: 'Coherencia conceptual', score: 5, note: 'Conecta perfectamente con los planos sólidos del sitio.' },
      { criterion: 'Equilibrio geométrico', score: 5, note: 'Contrapeso excelente entre el ángulo recto y la curva.' },
      { criterion: 'Escalabilidad', score: 5, note: 'Impecable incluso en 16×16 px como favicon.' },
      { criterion: 'Funcionamiento monocromático', score: 5, note: 'Funciona al 100% en tinta negra o blanca.' },
      { criterion: 'Potencial corporativo', score: 5, note: 'Altísimo potencial como sello de marca independiente.' },
    ],
    verdict: 'Una de las opciones más maduras: combina silueta compacta, máxima legibilidad en micro-tamaños y afinidad directa con la estética editorial de YOKALI.',
  },
  {
    id: 'eje-compartido',
    index: '03',
    name: 'Eje Compartido',
    principle: 'Superposición con trazos compartidos',
    summary:
      'Una arquitectura modular donde una única diagonal central actúa simultáneamente como columna de convergencia para las tres letras, eliminando cualquier trazo redundante.',
    integrationExplanation:
      'El fuste central vertical sostiene tanto a la K como a la Y; la diagonal principal que asciende de abajo-izquierda a arriba-derecha funciona a la vez como pierna izquierda de la A y brazo superior de la K; la bifurcación superior izquierda completa la Y y el cierre derecho consolida la A y la rama inferior de la K.',
    parts: [
      // Fuste vertical + bifurcación superior izquierda (base Y + columna K)
      {
        d: 'M12 12L26 28V54',
        role: 'primary',
        kind: 'stroke',
        strokeWidth: 7,
      },
      // Diagonal ascendente compartida (brazo superior K + lado izquierdo A + rama derecha Y)
      {
        d: 'M26 28L46 12',
        role: 'accent',
        kind: 'stroke',
        strokeWidth: 7,
      },
      // Cierre derecho angular (pierna derecha A + expansión K)
      {
        d: 'M46 12L52 52',
        role: 'accent',
        kind: 'stroke',
        strokeWidth: 7,
      },
      // Rama inferior derecha proyectada desde el eje (K inferior + amarre estructural A)
      {
        d: 'M26 36L49 48',
        role: 'primary',
        kind: 'stroke',
        strokeWidth: 7,
      },
    ],
    traces: [
      {
        letter: 'Y',
        paths: ['M12 12L26 28L46 12', 'M26 28V54'],
        note: 'Bifurcación superior que converge en el nodo central y desciende al apoyo.',
      },
      {
        letter: 'A',
        paths: ['M26 52L46 12L52 52', 'M28 37L49 48'],
        note: 'Estructura triangular inclinada con amarre diagonal interno.',
      },
      {
        letter: 'K',
        paths: ['M26 12V54', 'M26 28L46 12', 'M26 36L49 48'],
        note: 'Eje central vertical con proyección doble ascendente y descendente.',
      },
    ],
    evaluation: [
      { criterion: 'Originalidad', score: 4, note: 'Construcción honesta y sintética.' },
      { criterion: 'Reconocimiento visual', score: 4, note: 'Lectura geométrica limpia y estable.' },
      { criterion: 'Integración Y·A·K', score: 5, note: 'Las tres iniciales comparten trazos reales sin forzarse.' },
      { criterion: 'Coherencia conceptual', score: 4, note: 'Representa bien la convergencia en un nodo.' },
      { criterion: 'Equilibrio geométrico', score: 4, note: 'Ligeramente más denso hacia el cuadrante derecho.' },
      { criterion: 'Escalabilidad', score: 4, note: 'Buena lectura desde 24px; en 16px el cruce inferior se acerca.' },
      { criterion: 'Funcionamiento monocromático', score: 4, note: 'Correcto, aunque el bicolor aporta jerarquía extra.' },
      { criterion: 'Potencial corporativo', score: 4, note: 'Versátil y directo, de perfil algo más geométrico-estricto.' },
    ],
    verdict: 'Destaca por la economía de trazos compartidos, pero tiene una silueta algo más literal que las propuestas escultóricas.',
  },
  {
    id: 'recorrido-continuo',
    index: '04',
    name: 'Lazo Continuo',
    principle: 'Construcción mediante un recorrido continuo',
    summary:
      'Un gesto fluido y controlado que pliega un único trazo continuo en tres cambios de dirección: convergencia curva, ascenso en arco y proyección diagonal.',
    integrationExplanation:
      'El recorrido inicia en el brazo superior izquierdo (Y), desciende en curva controlada hacia la base vertical (Y/K), asciende en diagonal hasta un vértice superior redondeado (A) y vuelve hacia el núcleo para proyectarse en la rama inferior derecha (K), logrando movimiento continuo sin perder firmeza.',
    parts: [
      // Primer tramo continuo: entrada izquierda -> descenso vertical -> ascenso al vértice A
      {
        d: 'M12 14C17 20 22 25 22 33V50C22 53 26 54 28 51L44 16C45.6 12.6 50.4 13.4 51 17.2L53 31',
        role: 'primary',
        kind: 'stroke',
        strokeWidth: 6.4,
      },
      // Continuación direccional: giro desde el núcleo hacia la ramificación K y cierre A
      {
        d: 'M24 34C32 34 40 38 52 51',
        role: 'accent',
        kind: 'stroke',
        strokeWidth: 6.4,
      },
    ],
    traces: [
      {
        letter: 'Y',
        paths: ['M12 14C17 20 22 25 22 33V52', 'M44 16L22 33'],
        note: 'Encuentro curvo en la mitad izquierda que se canaliza hacia la base.',
      },
      {
        letter: 'A',
        paths: ['M25 52L45 14L53 51', 'M28 35H47'],
        note: 'Arco ascendente con vértice suave y puente interior que estabiliza la forma.',
      },
      {
        letter: 'K',
        paths: ['M22 14V52', 'M22 34L46 14', 'M24 34C32 34 40 38 52 51'],
        note: 'Columna de apoyo con apertura diagonal superior y brazo curvo de evolución.',
      },
    ],
    evaluation: [
      { criterion: 'Originalidad', score: 5, note: 'Gesto cálido y singular, alejado de logos tech fríos.' },
      { criterion: 'Reconocimiento visual', score: 4, note: 'Muy expresivo, con personalidad caligráfica contemporánea.' },
      { criterion: 'Integración Y·A·K', score: 4, note: 'Integración orgánica fluida, más sugerida que literal.' },
      { criterion: 'Coherencia conceptual', score: 5, note: 'Dialoga directamente con el trazo continuo del hero.' },
      { criterion: 'Equilibrio geométrico', score: 4, note: 'El pliegue inferior requiere precisión óptica en tamaños mínimos.' },
      { criterion: 'Escalabilidad', score: 4, note: 'Excelente de 24px a 128px; en 16px el giro inferior es compacto.' },
      { criterion: 'Funcionamiento monocromático', score: 5, note: 'En un solo color refuerza la idea de trazo ininterrumpido.' },
      { criterion: 'Potencial corporativo', score: 4, note: 'Gran calidez editorial y humana.' },
    ],
    verdict: 'La más expresiva y cercana al movimiento del hero; ideal si se busca una marca con acento más orgánico y gestual.',
  },
  {
    id: 'triada-convergente',
    index: '05',
    name: 'Tríada Convergente',
    principle: 'Convergencia de tres estructuras',
    summary:
      'Tres piezas independientes con tensión equilibrada convergen alrededor de un núcleo abierto triangular, simbolizando tres perspectivas que se encuentran para construir algo nuevo.',
    integrationExplanation:
      'La estructura izquierda aporta la caída vertical y la entrada de la Y y la K; el arco superior derecho en Terracota aporta el vértice constructivo de la A y la apertura superior de la Y/K; la cuña inferior derecha completa la ramificación de la K y cierra el contrapeso triangular de la A.',
    parts: [
      // Estructura 1: Convergencia izquierda + fuste (Y + columna K)
      {
        d: 'M10 12H20L29 28.5V54H19V31L10 12Z',
        role: 'primary',
        kind: 'fill',
      },
      // Estructura 2: Arco-vértice superior derecho (cúspide A + rama superior Y/K)
      {
        d: 'M34 28.5L44.5 10H54L44.5 32.5L34 28.5Z',
        role: 'accent',
        kind: 'fill',
      },
      // Estructura 3: Proyección inferior derecha (rama K + base estructural A)
      {
        d: 'M34 36.5L44.5 36.5L54 54H43.5L34 36.5Z',
        role: 'primary',
        kind: 'fill',
      },
    ],
    traces: [
      {
        letter: 'Y',
        paths: ['M15 12L24 30V54', 'M49 10L24 30'],
        note: 'Dos trayectorias superiores que confluyen hacia el tronco vertical.',
      },
      {
        letter: 'A',
        paths: ['M24 54L49 10', 'M49 10L49 54', 'M34 34H47'],
        note: 'Vértice superior derecho y base abierta que arman un triángulo asimétrico.',
      },
      {
        letter: 'K',
        paths: ['M24 12V54', 'M29 31L49 10', 'M29 33L49 54'],
        note: 'Eje vertical firme con dos alas que se ramifican en direcciones opuestas.',
      },
    ],
    evaluation: [
      { criterion: 'Originalidad', score: 5, note: 'Símbolo autónomo de alto carácter, nada literal.' },
      { criterion: 'Reconocimiento visual', score: 5, note: 'Silueta limpia, nítida y memorable sin texto.' },
      { criterion: 'Integración Y·A·K', score: 5, note: 'Las tres iniciales tienen presencia estructural equilibrada.' },
      { criterion: 'Coherencia conceptual', score: 5, note: 'Encarna literalmente la convergencia de tres fuerzas.' },
      { criterion: 'Equilibrio geométrico', score: 5, note: 'Tensión visual armónica y centro respirable.' },
      { criterion: 'Escalabilidad', score: 5, note: 'Bloques macizos con separaciones claras desde 16px.' },
      { criterion: 'Funcionamiento monocromático', score: 5, note: 'Lectura intacta en cualquier color sólido.' },
      { criterion: 'Potencial corporativo', score: 5, note: 'Nivel de identidad perdurable y multiplataforma.' },
    ],
    verdict: 'La propuesta más equilibrada e icónica: funciona como emblema abstracto independiente, respira en todos los tamaños y encarna el concepto de YOKALI.',
  },
  {
    id: 'monolito-facetado',
    index: '06',
    name: 'Sello Facetado',
    principle: 'Abstracción geométrica de rasgos esenciales',
    summary:
      'Reducción extrema al ADN geométrico de las tres letras: horquilla (Y), cúspide (A) y cuña direccional (K), sintetizados en dos formas macizas en diálogo.',
    integrationExplanation:
      'El cuerpo principal en Verde Profundo sintetiza la horquilla superior de la Y fundida con el fuste sólido de la K y una base arquitectónica firme; el prisma Terracota encastrado a la derecha introduce la cúspide inclinada de la A y la dirección de avance de la K mediante un corte diagonal limpio.',
    parts: [
      // Cuerpo principal: horquilla Y + fuste sólido K + corte diagonal interno
      {
        d: 'M10 10H22L31 25L40 10H52L35 35V54H24V35L10 10Z',
        role: 'primary',
        kind: 'fill',
      },
      // Faceta encastrada: cúspide A + proyección inferior K
      {
        d: 'M41 34L54 18V54H41V34Z',
        role: 'accent',
        kind: 'fill',
      },
    ],
    traces: [
      {
        letter: 'Y',
        paths: ['M16 10L29.5 34V54', 'M46 10L29.5 34'],
        note: 'Horquilla superior maciza que canaliza el peso hacia el centro.',
      },
      {
        letter: 'A',
        paths: ['M29.5 54L54 18V54', 'M36 40H54'],
        note: 'Cuña ascendente derecha que crea un vértice elevado y estable.',
      },
      {
        letter: 'K',
        paths: ['M29.5 10V54', 'M31 31L52 10', 'M35 35L54 54'],
        note: 'Fuste vertical y diagonal superior enfrentados al bloque direccional inferior.',
      },
    ],
    evaluation: [
      { criterion: 'Originalidad', score: 4, note: 'Síntesis moderna de sello geométrico.' },
      { criterion: 'Reconocimiento visual', score: 5, note: 'Impacto inmediato por masa y contraste.' },
      { criterion: 'Integración Y·A·K', score: 4, note: 'La Y tiene algo más de protagonismo que la A y la K.' },
      { criterion: 'Coherencia conceptual', score: 4, note: 'Transmite solidez y estructura más que fluidez.' },
      { criterion: 'Equilibrio geométrico', score: 5, note: 'Bloque cuadrado sumamente compacto y estable.' },
      { criterion: 'Escalabilidad', score: 5, note: 'Excelente en 16px, sellos y aplicaciones físicas.' },
      { criterion: 'Funcionamiento monocromático', score: 4, note: 'En monocromo funciona bien, aunque gana dinamismo en bicolor.' },
      { criterion: 'Potencial corporativo', score: 5, note: 'Muy adaptable a papelería, producto y favicon.' },
    ],
    verdict: 'La opción más rotunda y compacta para favicon o sello institucional, aunque con mayor peso visual en la Y.',
  },
] as const
