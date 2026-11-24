interface SectionHeaderProps {
  index: string
  eyebrow: string
  title: string
  headingId?: string
  lead?: string
  tone?: 'light' | 'dark' | 'terracotta'
  className?: string
}

export function SectionHeader({
  index,
  eyebrow,
  title,
  headingId,
  lead,
  tone = 'light',
  className = '',
}: SectionHeaderProps) {
  const eyebrowColor =
    tone === 'dark'
      ? 'text-surface-clay'
      : tone === 'terracotta'
        ? 'text-ink-on-terracotta'
        : 'text-ink-accent'

  const lineColor =
    tone === 'dark' || tone === 'terracotta'
      ? 'bg-line-on-dark'
      : 'bg-line-strong'

  const titleColor =
    tone === 'dark'
      ? 'text-ink-on-dark'
      : tone === 'terracotta'
        ? 'text-ink-on-terracotta'
        : 'text-ink-primary'

  const leadColor =
    tone === 'dark'
      ? 'text-ink-on-dark-muted'
      : tone === 'terracotta'
        ? 'text-ink-on-terracotta/90'
        : 'text-ink-secondary'

  return (
    <header className={className}>
      <div className="mb-6 flex items-center gap-4">
        <span
          className={`font-sans text-xs font-bold tracking-[0.2em] uppercase ${eyebrowColor}`}
        >
          {index}
        </span>
        <span aria-hidden="true" className={`h-px w-10 ${lineColor}`} />
        <span
          className={`font-sans text-xs font-semibold tracking-[0.16em] uppercase ${eyebrowColor}`}
        >
          {eyebrow}
        </span>
      </div>

      <h2
        id={headingId}
        className={`font-display text-3xl leading-[1.1] font-medium tracking-[-0.02em] sm:text-4xl lg:text-[2.75rem] ${titleColor}`}
      >
        {title}
      </h2>

      {lead ? (
        <p
          className={`mt-5 max-w-2xl text-base leading-relaxed sm:text-lg ${leadColor}`}
        >
          {lead}
        </p>
      ) : null}
    </header>
  )
}
