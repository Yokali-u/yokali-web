import type { CSSProperties } from 'react'

type ArtworkVariant = 'hero' | 'confluence-band' | 'intersection' | 'emblem'

interface ConvergenceArtworkProps {
  variant: ArtworkVariant
  className?: string
}

const strokeVar = (delayMs: number): CSSProperties =>
  ({
    '--yk-path-length': 100,
    '--yk-stroke-delay': `${delayMs}ms`,
  }) as CSSProperties

export function ConvergenceArtwork({
  variant,
  className = '',
}: ConvergenceArtworkProps) {
  if (variant === 'hero') {
    return (
      <svg
        viewBox="0 0 1120 680"
        fill="none"
        aria-hidden="true"
        className={className}
      >
        <path
          d="M708 62C848 28 1002 98 1054 228C1104 352 1034 504 904 558C778 610 622 572 560 456C504 350 568 96 708 62Z"
          fill="var(--yk-clay-soft)"
        />
        <path
          d="M520 356C598 288 730 302 796 382C860 460 838 586 746 638C652 690 518 656 468 566C422 484 446 420 520 356Z"
          fill="var(--yk-sage-soft)"
        />
        <path
          d="M40 530C240 510 412 454 576 340C710 246 842 214 1084 226"
          stroke="var(--yk-stone-green)"
          strokeOpacity="0.28"
          strokeWidth="1.5"
          pathLength={100}
          className="yk-stroke-animated"
          style={strokeVar(260)}
        />
        <path
          d="M998 46C926 168 836 276 706 346C618 394 522 418 424 442"
          stroke="var(--yk-terracotta)"
          strokeWidth="22"
          strokeLinecap="round"
          pathLength={100}
          className="yk-stroke-animated"
          style={strokeVar(140)}
        />
        <path
          d="M478 36C514 176 588 284 706 346C792 392 868 474 912 632"
          stroke="var(--yk-forest-deep)"
          strokeWidth="22"
          strokeLinecap="round"
          pathLength={100}
          className="yk-stroke-animated"
          style={strokeVar(0)}
        />
        <circle
          cx="706"
          cy="346"
          r="13"
          fill="var(--yk-ivory-warm)"
          stroke="var(--yk-forest-ink)"
          strokeWidth="3"
        />
      </svg>
    )
  }

  if (variant === 'confluence-band') {
    return (
      <svg
        viewBox="0 0 1200 120"
        fill="none"
        preserveAspectRatio="none"
        aria-hidden="true"
        className={className}
      >
        <path
          d="M0 24C260 24 430 68 620 68C810 68 960 24 1200 24"
          stroke="var(--yk-clay-soft)"
          strokeOpacity="0.45"
          strokeWidth="2"
        />
        <path
          d="M0 98C280 98 440 68 620 68C800 68 950 98 1200 98"
          stroke="var(--yk-terracotta)"
          strokeWidth="4"
        />
      </svg>
    )
  }

  if (variant === 'intersection') {
    return (
      <svg
        viewBox="0 0 420 260"
        fill="none"
        aria-hidden="true"
        className={className}
      >
        <path
          d="M28 42C116 42 174 88 216 146C254 198 308 220 392 220"
          stroke="var(--yk-forest-deep)"
          strokeWidth="12"
          strokeLinecap="round"
        />
        <path
          d="M392 42C304 42 248 88 216 146"
          stroke="var(--yk-terracotta)"
          strokeWidth="12"
          strokeLinecap="round"
        />
        <circle
          cx="216"
          cy="146"
          r="9"
          fill="var(--yk-ivory-warm)"
          stroke="var(--yk-forest-deep)"
          strokeWidth="3"
        />
      </svg>
    )
  }

  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M22 20C42 40 56 58 60 76V102"
        stroke="currentColor"
        strokeWidth="8"
        strokeLinecap="round"
      />
      <path
        d="M98 20C78 40 64 58 60 76"
        stroke="var(--yk-terracotta)"
        strokeWidth="8"
        strokeLinecap="round"
      />
    </svg>
  )
}
