import { INITIATIVE_TRACKS, PUBLISHED_INITIATIVES } from '@entities/initiative'
import { SITE_ROUTES } from '@shared/config'
import { useReveal } from '@shared/lib'
import {
  ActionLink,
  Container,
  ConvergenceArtwork,
  SectionHeader,
} from '@shared/ui'

export function ProjectsSection() {
  const { ref, visible } = useReveal<HTMLDivElement>()
  const hasPublished = PUBLISHED_INITIATIVES.length > 0

  return (
    <section
      id="proyectos"
      aria-labelledby="projects-heading"
      className="bg-surface-clay py-20 sm:py-28 lg:py-32"
    >
      <Container>
        <div
          ref={ref}
          data-visible={visible}
          className="yk-reveal grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end"
        >
          <div className="lg:col-span-7">
            <SectionHeader
              index="03"
              eyebrow="Proyectos y productos"
              headingId="projects-heading"
              title="Un archivo en construcción, abierto a lo que viene."
              lead="Preferimos mostrar trabajo real y documentado antes que llenar espacio con ejemplos ficticios. Esta sección crecerá a medida que publiquemos proyectos en colaboración y productos propios."
            />
          </div>

          <div className="hidden lg:col-span-5 lg:flex lg:justify-end">
            <ConvergenceArtwork
              variant="intersection"
              className="w-72 max-w-full"
            />
          </div>
        </div>

        {hasPublished ? (
          <ul className="mt-14 divide-y divide-line-strong border-y border-line-strong">
            {PUBLISHED_INITIATIVES.map((item) => (
              <li
                key={item.id}
                className="grid grid-cols-1 gap-4 py-8 lg:grid-cols-12 lg:items-baseline"
              >
                <span className="font-sans text-xs font-bold tracking-[0.18em] text-ink-brand uppercase lg:col-span-2">
                  {item.kind} · {item.year}
                </span>
                <h3 className="font-display text-2xl font-medium text-ink-primary lg:col-span-4">
                  {item.name}
                </h3>
                <p className="text-base leading-relaxed text-ink-primary/85 lg:col-span-6">
                  {item.summary}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <div className="mt-14 border-t border-line-strong">
            {INITIATIVE_TRACKS.map((track) => (
              <article
                key={track.id}
                className="grid grid-cols-1 gap-6 border-b border-line-strong py-10 lg:grid-cols-12 lg:gap-10"
              >
                <div className="lg:col-span-3">
                  <p className="font-sans text-xs font-bold tracking-[0.2em] text-ink-brand uppercase">
                    Línea {track.index}
                  </p>
                  <p className="mt-2 font-sans text-sm font-semibold text-ink-accent">
                    {track.kindLabel}
                  </p>
                </div>

                <div className="lg:col-span-6">
                  <h3 className="font-display text-2xl leading-snug font-medium text-ink-primary sm:text-[1.75rem]">
                    {track.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-ink-primary/85">
                    {track.description}
                  </p>
                </div>

                <div className="flex items-start lg:col-span-3 lg:justify-end">
                  <p className="border-l-2 border-brand-forest pl-4 font-sans text-sm font-medium text-ink-primary">
                    {track.statusNote}
                  </p>
                </div>
              </article>
            ))}

            <div className="mt-10 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
              <p className="max-w-xl text-base leading-relaxed text-ink-primary">
                ¿Tienes un proyecto o idea que podría convertirse en uno de
                nuestros próximos casos construidos en conjunto?
              </p>
              <ActionLink to={SITE_ROUTES.contact} variant="primary">
                Iniciar una conversación
              </ActionLink>
            </div>
          </div>
        )}
      </Container>
    </section>
  )
}
