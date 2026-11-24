interface BrandMarkProps {
  tone?: 'light' | 'dark'
  showWordmark?: boolean
  interactive?: boolean
  className?: string
}

/**
 * Monograma YOKALI construido a partir de la ligadura geométrica de Y, A y K:
 * - Deep Forest / Warm Ivory: brazo izquierdo y fuste vertical (base Y / K).
 * - Terracotta / Soft Clay: vértice ascendente, pierna derecha y travesaño (A / K).
 */
export function BrandMark({
  tone = 'light',
  showWordmark = true,
  interactive = false,
  className = '',
}: BrandMarkProps) {
  const primaryColor =
    tone === 'dark' ? 'var(--yk-ivory-warm)' : 'var(--yk-forest-deep)'
  const accentColor =
    tone === 'dark' ? 'var(--yk-clay-soft)' : 'var(--yk-terracotta)'
  const textColor =
    tone === 'dark' ? 'text-ink-on-dark' : 'text-ink-primary'

  return (
    <span
      className={`group/brand inline-flex items-center gap-3 ${className}`}
    >
      <svg
        width="34"
        height="34"
        viewBox="0 0 40 40"
        fill="none"
        aria-hidden="true"
        className="shrink-0 overflow-visible"
      >
        {/* Ligadura A / K en Terracotta (vértice ascendente, pierna derecha y travesaño) */}
        <g
          stroke={accentColor}
          strokeWidth="3.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={
            interactive
              ? 'transition-transform duration-300 ease-confluence group-hover/brand:translate-x-[0.75px] motion-reduce:transform-none'
              : undefined
          }
        >
          <path d="M16.5 21.5L25.5 9.5L33.5 32.5" />
          <path d="M22.5 24.5H30.2" />
        </g>

        {/* Estructura Y / K en Deep Forest (convergencia izquierda y fuste vertical) */}
        <path
          d="M6.5 9.5L16.5 21.5V32.5"
          stroke={primaryColor}
          strokeWidth="3.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={
            interactive
              ? 'transition-transform duration-300 ease-confluence group-hover/brand:-translate-x-[0.5px] motion-reduce:transform-none'
              : undefined
          }
        />
      </svg>
      {showWordmark ? (
        <span
          className={`font-sans text-[15px] font-bold tracking-[0.22em] uppercase transition-[letter-spacing] duration-300 ease-confluence ${
            interactive ? 'group-hover/brand:tracking-[0.26em]' : ''
          } ${textColor}`}
        >
          YOKALI
        </span>
      ) : null}
    </span>
  )
}
