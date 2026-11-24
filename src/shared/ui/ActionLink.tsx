import type { AnchorHTMLAttributes, ReactNode } from 'react'
import { Link } from 'react-router'

type ActionVariant = 'primary' | 'terracotta' | 'outline-light' | 'outline-dark'

interface ActionLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode
  to?: string
  variant?: ActionVariant
  showArrow?: boolean
  leadingIcon?: ReactNode
}

const variantClasses: Record<ActionVariant, string> = {
  primary:
    'bg-brand-forest text-ink-on-dark hover:bg-brand-forest-hover border border-brand-forest',
  terracotta:
    'bg-brand-terracotta text-ink-on-terracotta hover:bg-brand-terracotta-hover border border-brand-terracotta',
  'outline-light':
    'bg-transparent text-ink-primary border border-line-strong hover:bg-brand-forest hover:text-ink-on-dark hover:border-brand-forest',
  'outline-dark':
    'bg-transparent text-ink-on-dark border border-line-on-dark hover:bg-surface-base hover:text-ink-primary hover:border-surface-base',
}

export function ActionLink({
  children,
  to,
  variant = 'primary',
  showArrow = true,
  leadingIcon,
  className = '',
  ...props
}: ActionLinkProps) {
  const classes = `group inline-flex items-center justify-center gap-3 rounded-editorial px-6 py-3.5 text-[15px] font-semibold tracking-tight transition-colors duration-200 ${variantClasses[variant]} ${className}`

  const content = (
    <>
      {leadingIcon ? (
        <span className="inline-flex shrink-0">{leadingIcon}</span>
      ) : null}
      <span>{children}</span>
      {showArrow ? (
        <span
          aria-hidden="true"
          className="inline-block transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transform-none"
        >
          &rarr;
        </span>
      ) : null}
    </>
  )

  if (to) {
    return (
      <Link to={to} className={classes}>
        {content}
      </Link>
    )
  }

  return (
    <a className={classes} {...props}>
      {content}
    </a>
  )
}
