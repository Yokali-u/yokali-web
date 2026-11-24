import type { MonogramProposal } from '../model/proposals'

export type MonogramColorMode =
  | 'bicolor'
  | 'bicolor-dark'
  | 'forest'
  | 'terracotta'
  | 'ink'
  | 'ivory'
  | 'white'

interface MonogramSvgProps {
  proposal: MonogramProposal
  mode?: MonogramColorMode
  size?: number
  className?: string
  title?: string
}

const COLOR_MAP: Record<MonogramColorMode, { primary: string; accent: string }> = {
  bicolor: { primary: '#23483B', accent: '#A64935' },
  'bicolor-dark': { primary: '#F5F1E8', accent: '#EAD2C5' },
  forest: { primary: '#23483B', accent: '#23483B' },
  terracotta: { primary: '#A64935', accent: '#A64935' },
  ink: { primary: '#202924', accent: '#202924' },
  ivory: { primary: '#F5F1E8', accent: '#F5F1E8' },
  white: { primary: '#FFFFFF', accent: '#FFFFFF' },
}

export function MonogramSvg({
  proposal,
  mode = 'bicolor',
  size = 64,
  className = '',
  title,
}: MonogramSvgProps) {
  const palette = COLOR_MAP[mode]

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      role={title ? 'img' : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
      className={`shrink-0 ${className}`}
    >
      {proposal.parts.map((part, idx) => {
        const color = part.role === 'primary' ? palette.primary : palette.accent
        if (part.kind === 'fill') {
          return <path key={idx} d={part.d} fill={color} />
        }
        return (
          <path
            key={idx}
            d={part.d}
            stroke={color}
            strokeWidth={part.strokeWidth ?? 6.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        )
      })}
    </svg>
  )
}
