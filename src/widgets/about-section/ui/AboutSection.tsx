import { useReveal } from '@shared/lib'
import { Container, ConvergenceArtwork, SectionHeader } from '@shared/ui'

const PRINCIPLES = [
  {
    number: '01',
    title: 'Escucha antes de arquitectura',
    description:
      'Traducimos el lenguaje de tu negocio y el de la ingeniería en un mismo plano. Sin jerga innecesaria y sin suposiciones.',
  },
  {
    number: '02',
    title: 'Colaboración multidisciplinaria',
    description:
      'Diseño, producto e ingeniería trabajan en una misma mesa desde el inicio para que cada decisión visual y técnica responda al mismo propósito.',
  },
  {
    number: '03',
    title: 'Software pensado para durar',
    description:
      'Priorizamos código claro, interfaces accesibles y sistemas mantenibles que tu equipo pueda comprender y evolucionar con confianza.',
  },
  {
    number: '04',
    title: 'Vocación de evolución',
    description:
      'No nos limitamos a entregar pantallas: acompañamos el crecimiento de cada solución mientras cultivamos nuestras propias líneas de producto.',
  },
] as const

export function AboutSection() {
  const { ref, visible } = useReveal<HTMLDivElement>()

  return (
    <section
      id="nosotros"
      data-surface="dark"
      aria-labelledby="about-heading"
      className="relative bg-surface-forest text-ink-on-dark"
    >
      {/* Trazo continuo de transición cromática */}
      <div aria-hidden="true" className="w-full overflow-hidden pt-2">
        <ConvergenceArtwork
          variant="confluence-band"
          className="h-12 w-full sm:h-16"
        />
      </div>

      <Container className="py-20 sm:py-28 lg:py-32">
        <div
          ref={ref}
          data-visible={visible}
          className="yk-reveal grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16"
        >
          <div className="lg:col-span-5">
            <SectionHeader
              index="01"
              eyebrow="Nosotros"
              headingId="about-heading"
              title="Un punto de encuentro entre conocimiento técnico y propósito humano."
              tone="dark"
            />
          </div>

          <div className="space-y-6 text-base leading-relaxed text-ink-on-dark-muted sm:text-lg lg:col-span-7 lg:pt-10">
            <p className="text-xl leading-relaxed text-ink-on-dark sm:text-2xl font-display font-normal">
              YOKALI nace de una convicción simple: la mejor tecnología surge
              cuando distintas miradas se encuentran en igualdad de condiciones.
            </p>
            <p>
              Somos un emprendimiento tecnológico colaborativo. Trabajamos con
              personas sin formación técnica que necesitan un socio claro y
              honesto, así como con ingenieros y organizaciones que valoran la
              rigurosidad en cada capa del software.
            </p>
            <p>
              Nuestro enfoque combina servicio cercano con mentalidad de
              producto: cada proyecto que construimos y cada herramienta interna
              que exploramos nos permite ampliar lo que podemos ofrecer hacia el
              futuro.
            </p>
          </div>
        </div>

        {/* Forma de trabajo: grilla tipográfica abierta con líneas editoriales, sin tarjetas */}
        <div className="mt-20 border-t border-line-on-dark pt-14 sm:mt-24">
          <p className="mb-10 font-sans text-xs font-bold tracking-[0.2em] text-surface-clay uppercase">
            Cómo trabajamos
          </p>

          <ol className="grid grid-cols-1 gap-x-14 gap-y-12 md:grid-cols-2">
            {PRINCIPLES.map((principle) => (
              <li
                key={principle.number}
                className="border-t border-line-on-dark pt-6"
              >
                <div className="flex items-baseline gap-4">
                  <span className="font-sans text-xs font-bold tracking-[0.18em] text-surface-clay">
                    {principle.number}
                  </span>
                  <h3 className="font-display text-2xl font-medium text-ink-on-dark">
                    {principle.title}
                  </h3>
                </div>
                <p className="mt-3 pl-8 text-base leading-relaxed text-ink-on-dark-muted">
                  {principle.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  )
}
