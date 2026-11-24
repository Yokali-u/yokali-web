import { SITE_ROUTES } from '@shared/config'
import { ActionLink, Container, ConvergenceArtwork } from '@shared/ui'

export function HeroSection() {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-surface-base pt-14 pb-20 sm:pt-20 sm:pb-28 lg:pt-24 lg:pb-32"
    >
      {/* Sistema gráfico editorial integrado directamente en el lienzo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-10 -right-24 w-[620px] opacity-95 sm:-top-8 sm:-right-16 sm:w-[760px] lg:top-0 lg:right-[-4%] lg:w-[980px]"
      >
        <ConvergenceArtwork variant="hero" className="h-auto w-full" />
      </div>

      <Container className="relative z-10">
        <div className="max-w-4xl">
          <p className="mb-8 flex items-center gap-4 font-sans text-xs font-bold tracking-[0.2em] text-ink-brand uppercase">
            <span>Estudio tecnológico colaborativo</span>
            <span aria-hidden="true" className="h-px w-12 bg-brand-terracotta" />
          </p>

          <h1
            id="hero-heading"
            className="font-display text-[clamp(2.75rem,6.6vw,5.4rem)] leading-[1.03] font-medium tracking-[-0.028em] text-ink-primary"
          >
            Donde distintas ideas{' '}
            <em className="font-normal text-ink-accent italic">convergen</em> en
            software real.
          </h1>
        </div>

        {/* Banda editorial asimétrica inferior: claridad + acción sin tarjetas decorativas */}
        <div className="mt-14 border-t border-line-strong pt-9 sm:mt-20 lg:mt-24 lg:grid lg:grid-cols-12 lg:items-end lg:gap-12">
          <p className="max-w-xl text-lg leading-relaxed text-ink-primary sm:text-[1.22rem] lg:col-span-6">
            En <strong>YOKALI</strong> diseñamos y desarrollamos software,
            soluciones digitales y productos propios junto a personas y
            organizaciones que buscan resolver problemas reales con criterio
            técnico y cercanía.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4 lg:col-span-6 lg:mt-0 lg:justify-end">
            <ActionLink to={SITE_ROUTES.contact} variant="primary">
              Conversemos sobre tu proyecto
            </ActionLink>
            <ActionLink href="#soluciones" variant="outline-light" showArrow={false}>
              Explorar capacidades
            </ActionLink>
          </div>
        </div>
      </Container>
    </section>
  )
}
