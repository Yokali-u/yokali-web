import { useState } from 'react'
import { YOKALI_CAPABILITIES } from '@entities/capability'
import { SITE_ROUTES } from '@shared/config'
import { useReveal } from '@shared/lib'
import { ActionLink, Container, SectionHeader } from '@shared/ui'

export function SolutionsSection() {
  const [activeId, setActiveId] = useState<string>(YOKALI_CAPABILITIES[0].id)
  const { ref, visible } = useReveal<HTMLDivElement>()

  const activeCapability =
    YOKALI_CAPABILITIES.find((item) => item.id === activeId) ??
    YOKALI_CAPABILITIES[0]

  return (
    <section
      id="soluciones"
      aria-labelledby="solutions-heading"
      className="bg-surface-base py-20 sm:py-28 lg:py-32"
    >
      <Container>
        <div
          ref={ref}
          data-visible={visible}
          className="yk-reveal max-w-3xl"
        >
          <SectionHeader
            index="02"
            eyebrow="Soluciones y capacidades"
            headingId="solutions-heading"
            title="Tecnología diseñada a la medida del problema, no de una plantilla."
            lead="Acompañamos desde la definición inicial hasta la puesta en marcha y evolución técnica, adaptando profundidad y lenguaje a cada equipo."
          />
        </div>

        {/* Explorador editorial interactivo: índice asimétrico + panel sólido Soft Sage */}
        <div className="mt-14 grid grid-cols-1 gap-10 lg:mt-16 lg:grid-cols-12 lg:gap-12">
          <div
            role="tablist"
            aria-label="Capacidades tecnológicas de YOKALI"
            className="flex flex-col border-t border-line-strong lg:col-span-5"
          >
            {YOKALI_CAPABILITIES.map((capability) => {
              const isSelected = capability.id === activeCapability.id
              return (
                <button
                  key={capability.id}
                  type="button"
                  role="tab"
                  id={`tab-${capability.id}`}
                  aria-selected={isSelected}
                  aria-controls={`panel-${capability.id}`}
                  onClick={() => setActiveId(capability.id)}
                  className={`group flex w-full cursor-pointer items-start justify-between gap-4 border-b border-line-subtle py-6 text-left transition-colors duration-200 ${
                    isSelected
                      ? 'text-ink-primary'
                      : 'text-ink-secondary hover:text-ink-primary'
                  }`}
                >
                  <span className="flex items-baseline gap-4">
                    <span
                      className={`font-sans text-xs font-bold tracking-[0.18em] ${
                        isSelected ? 'text-ink-accent' : 'text-ink-secondary'
                      }`}
                    >
                      {capability.index}
                    </span>
                    <span className="font-display text-xl font-medium sm:text-2xl">
                      {capability.title}
                    </span>
                  </span>
                  <span
                    aria-hidden="true"
                    className={`mt-1 text-lg transition-transform duration-200 ${
                      isSelected
                        ? 'translate-x-0 text-ink-accent'
                        : '-translate-x-1 opacity-40 group-hover:translate-x-0 group-hover:opacity-100'
                    }`}
                  >
                    &rarr;
                  </span>
                </button>
              )
            })}
          </div>

          <div
            role="tabpanel"
            id={`panel-${activeCapability.id}`}
            aria-labelledby={`tab-${activeCapability.id}`}
            className="flex flex-col justify-between rounded-organic bg-surface-sage p-8 sm:p-11 lg:col-span-7"
          >
            <div>
              <p className="font-sans text-xs font-bold tracking-[0.2em] text-ink-brand uppercase">
                Capacidad {activeCapability.index}
              </p>

              <h3 className="mt-4 font-display text-2xl leading-snug font-medium text-ink-primary sm:text-3xl">
                {activeCapability.summary}
              </h3>

              <p className="mt-5 text-base leading-relaxed text-ink-primary/85 sm:text-lg">
                {activeCapability.detail}
              </p>

              <ul className="mt-8 space-y-3 border-t border-line-subtle pt-6">
                {activeCapability.focusAreas.map((area) => (
                  <li
                    key={area}
                    className="flex items-start gap-3 text-[15px] font-medium text-ink-primary"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-terracotta"
                    />
                    <span>{area}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="mt-9 border-t border-line-subtle pt-5 text-sm leading-relaxed text-ink-secondary">
              {activeCapability.audienceNote}
            </p>
          </div>
        </div>

        {/* Superficie sólida Terracotta: parte integral del lenguaje de marca */}
        <div
          data-surface="terracotta"
          className="mt-16 rounded-organic bg-surface-terracotta px-8 py-11 text-ink-on-terracotta sm:mt-20 sm:px-12 sm:py-14 lg:grid lg:grid-cols-12 lg:items-center lg:gap-10"
        >
          <div className="lg:col-span-8">
            <p className="font-sans text-xs font-bold tracking-[0.2em] uppercase opacity-90">
              Más allá de un servicio puntual
            </p>
            <h3 className="mt-3 font-display text-2xl leading-tight font-medium sm:text-3xl">
              Una arquitectura pensada para acompañar nuevas líneas de negocio.
            </h3>
            <p className="mt-4 max-w-2xl text-base leading-relaxed opacity-95">
              YOKALI evoluciona junto a los retos que aborda: desde desarrollo a
              medida y acompañamiento técnico hasta el impulso de productos
              digitales propios.
            </p>
          </div>

          <div className="mt-7 lg:col-span-4 lg:mt-0 lg:flex lg:justify-end">
            <ActionLink to={SITE_ROUTES.contact} variant="outline-dark">
              Explorar una colaboración
            </ActionLink>
          </div>
        </div>
      </Container>
    </section>
  )
}
