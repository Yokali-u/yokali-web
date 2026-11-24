import { useId, useState } from 'react'
import type { FormEvent } from 'react'
import { SITE_CONTACT } from '@shared/config'

interface FormValues {
  name: string
  email: string
  organization: string
  topic: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

const INITIAL_VALUES: FormValues = {
  name: '',
  email: '',
  organization: '',
  topic: 'Nuevo proyecto de software',
  message: '',
}

const TOPICS = [
  'Nuevo proyecto de software',
  'Diseño y evolución de producto digital',
  'Arquitectura o integración técnica',
  'Alianza o futura línea de producto',
  'Conversación general',
] as const

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {}

  if (values.name.trim().length < 2) {
    errors.name = 'Cuéntanos tu nombre para saber con quién conversamos.'
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailPattern.test(values.email.trim())) {
    errors.email = 'Ingresa un correo electrónico válido para poder responderte.'
  }

  if (values.message.trim().length < 15) {
    errors.message =
      'Compártenos un poco más de contexto sobre tu idea o necesidad (al menos 15 caracteres).'
  }

  return errors
}

export function ContactForm() {
  const formId = useId()
  const [values, setValues] = useState<FormValues>(INITIAL_VALUES)
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      setSubmitted(false)
      return
    }

    setSubmitted(true)
  }

  const buildMailtoHref = () => {
    const subject = encodeURIComponent(`[YOKALI] ${values.topic} — ${values.name}`)
    const bodyLines = [
      `Nombre: ${values.name}`,
      `Correo: ${values.email}`,
      values.organization ? `Organización: ${values.organization}` : null,
      `Motivo: ${values.topic}`,
      '',
      values.message,
    ].filter(Boolean)

    return `mailto:${SITE_CONTACT.email}?subject=${subject}&body=${encodeURIComponent(bodyLines.join('\n'))}`
  }

  const inputBaseClass =
    'mt-2 block w-full rounded-editorial border bg-surface-elevated px-4 py-3 text-[15px] text-ink-primary placeholder:text-ink-secondary/70 transition-colors duration-200 focus:border-brand-forest'

  if (submitted) {
    return (
      <div
        role="status"
        aria-live="polite"
        className="rounded-panel border border-line-subtle bg-surface-elevated p-8 sm:p-10"
      >
        <p className="font-sans text-xs font-bold tracking-[0.18em] text-ink-accent uppercase">
          Mensaje preparado
        </p>
        <h3 className="mt-3 font-display text-2xl font-medium text-ink-primary sm:text-3xl">
          Gracias por escribirnos, {values.name}.
        </h3>
        <p className="mt-4 text-base leading-relaxed text-ink-secondary">
          Tu mensaje quedó listo para enviarse directamente a nuestro correo.
          Puedes abrir tu cliente de correo ahora o ajustar el texto si deseas
          agregar algún detalle adicional.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href={buildMailtoHref()}
            className="inline-flex items-center justify-center gap-2 rounded-editorial bg-brand-forest px-6 py-3.5 text-[15px] font-semibold text-ink-on-dark transition-colors duration-200 hover:bg-brand-forest-hover"
          >
            <span>Enviar por correo</span>
            <span aria-hidden="true">&rarr;</span>
          </a>
          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="inline-flex items-center justify-center rounded-editorial border border-line-strong px-5 py-3.5 text-[15px] font-semibold text-ink-primary transition-colors duration-200 hover:bg-surface-sage"
          >
            Editar mensaje
          </button>
        </div>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-panel border border-line-subtle bg-surface-elevated p-7 sm:p-10"
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor={`${formId}-name`}
            className="block text-sm font-semibold text-ink-primary"
          >
            Nombre <span className="text-ink-accent">*</span>
          </label>
          <input
            id={`${formId}-name`}
            name="name"
            type="text"
            autoComplete="name"
            required
            value={values.name}
            onChange={(e) => setValues({ ...values, name: e.target.value })}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? `${formId}-name-error` : undefined}
            placeholder="Tu nombre"
            className={`${inputBaseClass} ${errors.name ? 'border-brand-terracotta' : 'border-line-subtle'}`}
          />
          {errors.name ? (
            <p
              id={`${formId}-name-error`}
              className="mt-2 text-sm font-medium text-ink-accent"
            >
              {errors.name}
            </p>
          ) : null}
        </div>

        <div>
          <label
            htmlFor={`${formId}-email`}
            className="block text-sm font-semibold text-ink-primary"
          >
            Correo electrónico <span className="text-ink-accent">*</span>
          </label>
          <input
            id={`${formId}-email`}
            name="email"
            type="email"
            autoComplete="email"
            required
            value={values.email}
            onChange={(e) => setValues({ ...values, email: e.target.value })}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={
              errors.email ? `${formId}-email-error` : undefined
            }
            placeholder="nombre@organizacion.com"
            className={`${inputBaseClass} ${errors.email ? 'border-brand-terracotta' : 'border-line-subtle'}`}
          />
          {errors.email ? (
            <p
              id={`${formId}-email-error`}
              className="mt-2 text-sm font-medium text-ink-accent"
            >
              {errors.email}
            </p>
          ) : null}
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor={`${formId}-organization`}
            className="block text-sm font-semibold text-ink-primary"
          >
            Organización o equipo{' '}
            <span className="font-normal text-ink-secondary">(opcional)</span>
          </label>
          <input
            id={`${formId}-organization`}
            name="organization"
            type="text"
            autoComplete="organization"
            value={values.organization}
            onChange={(e) =>
              setValues({ ...values, organization: e.target.value })
            }
            placeholder="Empresa, proyecto o colectivo"
            className={`${inputBaseClass} border-line-subtle`}
          />
        </div>

        <div>
          <label
            htmlFor={`${formId}-topic`}
            className="block text-sm font-semibold text-ink-primary"
          >
            ¿Sobre qué te gustaría conversar?
          </label>
          <select
            id={`${formId}-topic`}
            name="topic"
            value={values.topic}
            onChange={(e) => setValues({ ...values, topic: e.target.value })}
            className={`${inputBaseClass} border-line-subtle`}
          >
            {TOPICS.map((topic) => (
              <option key={topic} value={topic}>
                {topic}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-6">
        <label
          htmlFor={`${formId}-message`}
          className="block text-sm font-semibold text-ink-primary"
        >
          Cuéntanos sobre tu idea o reto <span className="text-ink-accent">*</span>
        </label>
        <textarea
          id={`${formId}-message`}
          name="message"
          rows={5}
          required
          value={values.message}
          onChange={(e) => setValues({ ...values, message: e.target.value })}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={
            errors.message ? `${formId}-message-error` : undefined
          }
          placeholder="No hace falta tener todo definido. Compártenos qué problema quieres resolver o qué etapa atraviesa tu proyecto."
          className={`${inputBaseClass} resize-y ${errors.message ? 'border-brand-terracotta' : 'border-line-subtle'}`}
        />
        {errors.message ? (
          <p
            id={`${formId}-message-error`}
            className="mt-2 text-sm font-medium text-ink-accent"
          >
            {errors.message}
          </p>
        ) : null}
      </div>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs leading-relaxed text-ink-secondary">
          {SITE_CONTACT.responseExpectation}
        </p>
        <button
          type="submit"
          className="inline-flex shrink-0 cursor-pointer items-center justify-center gap-3 rounded-editorial bg-brand-terracotta px-7 py-3.5 text-[15px] font-semibold text-ink-on-terracotta transition-colors duration-200 hover:bg-brand-terracotta-hover"
        >
          <span>Preparar mensaje</span>
          <span aria-hidden="true">&rarr;</span>
        </button>
      </div>
    </form>
  )
}
