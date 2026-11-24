import type { ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
  className?: string
  as?: 'div' | 'section' | 'header' | 'footer'
}

export function Container({
  children,
  className = '',
  as: Component = 'div',
}: ContainerProps) {
  return (
    <Component
      className={`mx-auto w-full max-w-[1280px] px-6 sm:px-10 lg:px-14 ${className}`}
    >
      {children}
    </Component>
  )
}
