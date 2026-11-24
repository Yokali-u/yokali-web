import { SITE_CONTACT, SITE_NAVIGATION, SITE_ROUTES } from '@shared/config'
import { BrandIcon, BrandMark, Container, ConvergenceArtwork } from '@shared/ui'
import type { CSSProperties } from 'react'
import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router'
import { siWhatsapp } from 'simple-icons'

export function SiteHeader() {
  const { pathname } = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const navRef = useRef<HTMLElement | null>(null)
  const indicatorRef = useRef<HTMLSpanElement | null>(null)
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({})

  const isRouteActive = (to: string) =>
    to === SITE_ROUTES.home ? pathname === to : pathname.startsWith(to)

  // Presencia arquitectónica al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Cierre con tecla Escape y bloqueo de scroll en menú móvil
  useEffect(() => {
    if (!menuOpen) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
      }
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [menuOpen])

  // Indicador deslizante de convergencia sobre el tab activo
  useLayoutEffect(() => {
    const updateIndicator = () => {
      const indicator = indicatorRef.current
      const nav = navRef.current
      if (!indicator || !nav) return

      const activeItem = SITE_NAVIGATION.find((item) =>
        item.to === SITE_ROUTES.home
          ? pathname === item.to
          : pathname.startsWith(item.to),
      )
      const activeLink = activeItem ? linkRefs.current[activeItem.to] : null

      if (!activeLink) {
        indicator.style.opacity = '0'
        return
      }

      const left = activeLink.offsetLeft
      const width = activeLink.offsetWidth
      indicator.style.opacity = '1'
      indicator.style.width = `${width}px`
      indicator.style.transform = `translateX(${left}px)`
    }

    updateIndicator()

    const nav = navRef.current
    if (!nav || typeof ResizeObserver === 'undefined') return

    const observer = new ResizeObserver(updateIndicator)
    observer.observe(nav)
    return () => observer.disconnect()
  }, [pathname])

  return (
    <header
      className={`sticky top-0 z-40 border-b bg-surface-base transition-[border-color] duration-300 ease-confluence ${
        scrolled ? 'border-line-strong' : 'border-line-subtle'
      }`}
    >
      {/* Trazo superior de identidad YOKALI: encuentro entre Deep Forest y Terracotta */}
      <div aria-hidden="true" className="flex h-[2.5px] w-full">
        <span className="h-full w-2/3 bg-brand-forest" />
        <span className="h-full w-1/3 bg-brand-terracotta" />
      </div>

      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-4 focus:z-50 focus:rounded-editorial focus:bg-brand-forest focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-ink-on-dark"
      >
        Ir al contenido principal
      </a>

      <Container
        className={`flex items-center justify-between gap-6 transition-[height] duration-300 ease-confluence ${
          scrolled ? 'h-[72px]' : 'h-[86px]'
        }`}
      >
        <Link
          to={SITE_ROUTES.home}
          onClick={() => setMenuOpen(false)}
          aria-label="YOKALI — Inicio"
          className="inline-flex items-center py-1"
        >
          <BrandMark interactive />
        </Link>

        {/* Navegación editorial desktop con indicador deslizante de convergencia */}
        <nav
          ref={navRef}
          aria-label="Navegación principal"
          className="relative hidden items-center gap-1 lg:flex"
        >
          {SITE_NAVIGATION.map((item) => {
            const active = isRouteActive(item.to)
            return (
              <Link
                key={item.to}
                ref={(el) => {
                  linkRefs.current[item.to] = el
                }}
                to={item.to}
                aria-current={active ? 'page' : undefined}
                className={`yk-nav-hover-line group relative inline-flex items-center rounded-t-editorial px-4 py-3 text-[14px] transition-colors duration-200 ${
                  active
                    ? 'bg-surface-sage/65 font-semibold text-ink-brand'
                    : 'font-medium text-ink-secondary hover:text-ink-primary'
                }`}
              >
                <span>{item.shortLabel}</span>
              </Link>
            )
          })}

          {/* Indicador físico deslizante: barra Terracotta + nodo Deep Forest */}
          <span
            ref={indicatorRef}
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 left-0 h-[2.5px] bg-brand-terracotta opacity-0 transition-[transform,width,opacity] duration-300 ease-confluence motion-reduce:transition-none"
          >
            <span className="absolute top-1/2 left-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full border-[1.5px] border-brand-forest bg-surface-base" />
          </span>
        </nav>

        {/* CTA directo a WhatsApp (único botón con icono de WhatsApp) */}
        <div className="hidden lg:block">
          <a
            href={SITE_CONTACT.whatsappHref}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Conversemos por WhatsApp (se abre en una nueva pestaña)"
            className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-editorial border border-brand-forest bg-brand-forest px-5 py-2.5 text-sm font-semibold text-ink-on-dark transition-colors duration-200"
          >
            <span
              aria-hidden="true"
              className="absolute inset-0 -translate-x-full bg-brand-terracotta transition-transform duration-300 ease-confluence group-hover:translate-x-0 motion-reduce:hidden"
            />
            <BrandIcon icon={siWhatsapp} size={16} className="relative z-10" />
            <span className="relative z-10">Conversemos</span>
          </a>
        </div>

        {/* Botón menú móvil con transformación controlada de trazos */}
        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          aria-label={
            menuOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'
          }
          className={`inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-editorial border transition-colors duration-200 lg:hidden ${
            menuOpen
              ? 'border-brand-terracotta bg-brand-terracotta text-ink-on-terracotta'
              : 'border-line-strong bg-surface-base text-ink-primary hover:border-brand-forest'
          }`}
        >
          <span className="relative block h-3.5 w-5" aria-hidden="true">
            <span
              className={`absolute left-0 block h-[1.75px] w-full bg-current transition-transform duration-300 ease-confluence ${
                menuOpen ? 'top-1/2 -translate-y-1/2 rotate-45' : 'top-0'
              }`}
            />
            <span
              className={`absolute top-1/2 left-0 block h-[1.75px] w-3.5 -translate-y-1/2 bg-current transition-opacity duration-200 ${
                menuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`absolute left-0 block h-[1.75px] w-full bg-current transition-transform duration-300 ease-confluence ${
                menuOpen ? 'top-1/2 -translate-y-1/2 -rotate-45' : 'bottom-0'
              }`}
            />
          </span>
        </button>
      </Container>

      {/* Menú móvil editorial a pantalla completa bajo el header */}
      {menuOpen ? (
        <nav
          id="mobile-navigation"
          aria-label="Navegación móvil"
          className={`fixed inset-x-0 bottom-0 z-30 flex flex-col justify-between overflow-y-auto border-t border-line-strong bg-surface-base lg:hidden ${
            scrolled ? 'top-[74.5px]' : 'top-[88.5px]'
          }`}
        >
          <Container className="py-8">
            <p className="mb-4 font-sans text-[11px] font-bold tracking-[0.2em] text-ink-accent uppercase">
              Navegación
            </p>
            <ul className="border-t border-line-subtle">
              {SITE_NAVIGATION.map((item, idx) => {
                const active = isRouteActive(item.to)
                return (
                  <li
                    key={item.to}
                    className="yk-drawer-item border-b border-line-subtle"
                    style={
                      {
                        '--yk-item-delay': `${idx * 45}ms`,
                      } as CSSProperties
                    }
                  >
                    <Link
                      to={item.to}
                      aria-current={active ? 'page' : undefined}
                      onClick={() => setMenuOpen(false)}
                      className={`flex items-baseline justify-between py-5 transition-colors duration-200 ${
                        active
                          ? 'text-ink-brand'
                          : 'text-ink-primary hover:text-ink-accent'
                      }`}
                    >
                      <span className="font-display text-2xl font-medium">
                        {item.label}
                      </span>
                      <span
                        aria-hidden="true"
                        className={`text-base ${
                          active ? 'text-ink-accent' : 'text-ink-secondary/50'
                        }`}
                      >
                        {active ? '●' : '→'}
                      </span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </Container>

          <div className="border-t border-line-subtle bg-surface-sage/55 py-7">
            <Container className="flex items-center justify-between gap-6">
              <div>
                <p className="font-sans text-[11px] font-bold tracking-[0.18em] text-ink-brand uppercase">
                  Contacto directo
                </p>
                <a
                  href={`mailto:${SITE_CONTACT.email}`}
                  className="mt-1 block text-sm font-semibold text-ink-primary underline decoration-brand-terracotta/60 underline-offset-4"
                >
                  {SITE_CONTACT.email}
                </a>
              </div>
              <ConvergenceArtwork
                variant="emblem"
                className="h-11 w-11 text-brand-forest/35"
              />
            </Container>
          </div>
        </nav>
      ) : null}
    </header>
  )
}
