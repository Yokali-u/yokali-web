import { siGithub } from 'simple-icons'
import { ContactForm } from '@features/contact-form'
import { SITE_CONTACT } from '@shared/config'
import { BrandIcon, Container } from '@shared/ui'

export function ContactSection() {
  return (
    <section
      aria-labelledby="contact-page-heading"
      className="bg-surface-base py-16 sm:py-24 lg:py-28"
    >
      <Container>
        {/* Cabecera editorial propia de la página de Contacto */}
        <header className="max-w-3xl border-b border-line-strong pb-10 sm:pb-12">
          <div className="mb-6 flex items-center gap-4">
            <span className="font-sans text-xs font-bold tracking-[0.2em] text-ink-accent uppercase">
              Contacto
            </span>
            <span aria-hidden="true" className="h-px w-10 bg-line-strong" />
            <span className="font-sans text-xs font-semibold tracking-[0.16em] text-ink-brand uppercase">
              Conversación directa
            </span>
          </div>

          <h1
            id="contact-page-heading"
            className="font-display text-4xl leading-[1.08] font-medium tracking-[-0.025em] text-ink-primary sm:text-5xl lg:text-[3.4rem]"
          >
            Abramos una conversación clara y sin compromiso.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-secondary sm:text-lg">
            Ya sea que tengas un requerimiento técnico concreto o una idea en
            etapa temprana, podemos conversar y evaluar juntos el mejor camino.
          </p>
        </header>

        {/* Cuerpo asimétrico: canales separados + formulario accesible */}
        <div className="mt-12 grid grid-cols-1 gap-12 lg:mt-16 lg:grid-cols-12 lg:gap-14">
          <aside className="flex flex-col gap-6 lg:col-span-5">
            {/* Bloque 1: Canal directo (Correo electrónico) */}
            <div
              data-surface="dark"
              className="rounded-panel bg-surface-forest p-7 text-ink-on-dark sm:p-8"
            >
              <p className="font-sans text-xs font-bold tracking-[0.2em] text-surface-clay uppercase">
                Canal directo
              </p>

              <dl className="mt-6 space-y-6">
                {SITE_CONTACT.directChannels.map((channel) => (
                  <div key={channel.label}>
                    <dt className="text-xs font-medium tracking-wider text-ink-on-dark-muted uppercase">
                      {channel.label}
                    </dt>
                    <dd className="mt-1.5">
                      <a
                        href={channel.href}
                        className="text-lg font-semibold text-ink-on-dark underline decoration-surface-clay/65 underline-offset-4 transition-colors duration-200 hover:text-surface-clay"
                      >
                        {channel.value}
                      </a>
                      <p className="mt-2 text-sm leading-relaxed text-ink-on-dark-muted">
                        {channel.description}
                      </p>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Bloque 2: Presencia y redes profesionales */}
            <div className="rounded-panel border border-line-subtle bg-surface-sage/65 p-7 sm:p-8">
              <p className="font-sans text-xs font-bold tracking-[0.2em] text-ink-brand uppercase">
                Presencia profesional
              </p>

              <ul className="mt-5 divide-y divide-line-subtle">
                {SITE_CONTACT.socialChannels.map((channel) => (
                  <li key={channel.label} className="py-4 first:pt-0 last:pb-0">
                    <a
                      href={channel.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="group flex items-center justify-between gap-4 text-ink-primary transition-colors duration-200 hover:text-ink-accent"
                    >
                      <span className="flex items-center gap-3">
                        {'icon' in channel && channel.icon === 'github' ? (
                          <BrandIcon
                            icon={siGithub}
                            size={16}
                            className="text-ink-brand"
                          />
                        ) : null}
                        <span>
                          <span className="block text-xs font-semibold tracking-wider text-ink-secondary uppercase">
                            {channel.label}
                          </span>
                          <span className="mt-0.5 block text-sm font-semibold">
                            {channel.value}
                          </span>
                        </span>
                      </span>
                      <span
                        aria-hidden="true"
                        className="text-base transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transform-none"
                      >
                        &rarr;
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  )
}
