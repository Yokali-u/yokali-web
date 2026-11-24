import { Link, useLocation } from 'react-router'
import { siGithub } from 'simple-icons'
import { SITE_CONTACT, SITE_NAVIGATION, SITE_ROUTES } from '@shared/config'
import { BrandIcon, BrandMark, Container } from '@shared/ui'

const CURRENT_YEAR = new Date().getFullYear()

export function SiteFooter() {
  const { pathname } = useLocation()

  const isRouteActive = (to: string) =>
    to === SITE_ROUTES.home ? pathname === to : pathname.startsWith(to)

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer
      data-surface="dark"
      className="relative bg-surface-ink text-ink-on-dark"
    >
      {/* Trazo superior de identidad YOKALI en espejo con el Navbar */}
      <div aria-hidden="true" className="flex h-[2.5px] w-full">
        <span className="h-full w-1/3 bg-brand-terracotta" />
        <span className="h-full w-2/3 bg-brand-forest" />
      </div>

      <Container className="py-16 sm:py-20">
        {/* Banda editorial superior: invitación clara + CTA táctil + volver arriba */}
        <div className="flex flex-col justify-between gap-8 border-b border-line-on-dark pb-12 lg:flex-row lg:items-end">
          <div className="max-w-xl">
            <p className="font-sans text-xs font-bold tracking-[0.2em] text-surface-clay uppercase">
              Siguiente paso
            </p>
            <h2 className="mt-3 font-display text-3xl leading-tight font-medium text-ink-on-dark sm:text-4xl">
              Construyamos una solución pensada para durar.
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              to={SITE_ROUTES.contact}
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-editorial border border-surface-clay/40 bg-brand-forest px-6 py-3.5 text-sm font-semibold text-ink-on-dark transition-colors duration-200"
            >
              <span
                aria-hidden="true"
                className="absolute inset-0 -translate-x-full bg-brand-terracotta transition-transform duration-300 ease-confluence group-hover:translate-x-0 motion-reduce:hidden"
              />
              <span className="relative z-10">Ir a Contacto</span>
              <span
                aria-hidden="true"
                className="relative z-10 inline-block transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transform-none"
              >
                &rarr;
              </span>
            </Link>

            <button
              type="button"
              onClick={handleScrollTop}
              aria-label="Volver al inicio de la página"
              className="group inline-flex cursor-pointer items-center gap-2 rounded-editorial border border-line-on-dark px-4 py-3.5 text-xs font-semibold tracking-[0.14em] text-ink-on-dark-muted uppercase transition-colors duration-200 hover:border-surface-clay hover:text-ink-on-dark"
            >
              <span>Arriba</span>
              <span
                aria-hidden="true"
                className="inline-block transition-transform duration-200 group-hover:-translate-y-0.5 motion-reduce:transform-none"
              >
                &uarr;
              </span>
            </button>
          </div>
        </div>

        {/* Estructura principal del Footer */}
        <div className="grid grid-cols-1 gap-12 border-b border-line-on-dark py-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Link
              to={SITE_ROUTES.home}
              aria-label="YOKALI — Inicio"
              className="inline-flex items-center"
            >
              <BrandMark tone="dark" interactive />
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink-on-dark-muted">
              Emprendimiento tecnológico colaborativo orientado al desarrollo de
              software, soluciones digitales y futuros productos propios.
            </p>
          </div>

          <nav aria-label="Navegación del pie de página" className="lg:col-span-4">
            <p className="font-sans text-xs font-bold tracking-[0.2em] text-surface-clay uppercase">
              Mapa del sitio
            </p>
            <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3">
              {SITE_NAVIGATION.map((item) => {
                const active = isRouteActive(item.to)
                return (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      aria-current={active ? 'page' : undefined}
                      className={`group inline-flex items-center gap-2 text-sm transition-colors duration-200 ${
                        active
                          ? 'font-semibold text-ink-on-dark'
                          : 'text-ink-on-dark-muted hover:text-ink-on-dark'
                      }`}
                    >
                      <span
                        aria-hidden="true"
                        className={`h-1.5 w-1.5 rounded-full transition-colors duration-200 ${
                          active
                            ? 'bg-brand-terracotta'
                            : 'bg-line-on-dark group-hover:bg-surface-clay'
                        }`}
                      />
                      <span className="border-b border-transparent pb-0.5 transition-colors duration-200 group-hover:border-surface-clay/60">
                        {item.shortLabel}
                      </span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <p className="font-sans text-xs font-bold tracking-[0.2em] text-surface-clay uppercase">
              Canales
            </p>

            <ul className="mt-5 space-y-3.5">
              <li>
                <a
                  href={`mailto:${SITE_CONTACT.email}`}
                  className="group inline-flex items-center gap-2 text-sm font-semibold text-ink-on-dark transition-colors duration-200 hover:text-surface-clay"
                >
                  <span className="underline decoration-surface-clay/50 underline-offset-4">
                    {SITE_CONTACT.email}
                  </span>
                  <span
                    aria-hidden="true"
                    className="inline-block text-xs transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transform-none"
                  >
                    &rarr;
                  </span>
                </a>
              </li>

              {SITE_CONTACT.socialChannels.map((channel) => (
                <li key={channel.label}>
                  <a
                    href={channel.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="group inline-flex items-center gap-2.5 text-sm text-ink-on-dark-muted transition-colors duration-200 hover:text-ink-on-dark"
                  >
                    {'icon' in channel && channel.icon === 'github' ? (
                      <BrandIcon
                        icon={siGithub}
                        size={14}
                        className="text-surface-clay"
                      />
                    ) : null}
                    <span>{channel.label}</span>
                    <span
                      aria-hidden="true"
                      className="inline-block text-xs opacity-60 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:opacity-100 motion-reduce:transform-none"
                    >
                      &rarr;
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Colofón inferior */}
        <div className="mt-8 flex flex-col gap-3 text-xs text-ink-on-dark-muted sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {CURRENT_YEAR} YOKALI. Todos los derechos reservados.</p>
          <p>El punto de encuentro donde las ideas toman forma.</p>
        </div>
      </Container>
    </footer>
  )
}
