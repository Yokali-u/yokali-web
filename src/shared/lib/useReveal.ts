import { useEffect, useRef, useState } from 'react'

function shouldRevealImmediately(): boolean {
  if (typeof window === 'undefined') return true
  if (!('IntersectionObserver' in window)) return true
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null)
  const [visible, setVisible] = useState(shouldRevealImmediately)

  useEffect(() => {
    if (visible) return

    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.disconnect()
            break
          }
        }
      },
      { threshold: 0.14, rootMargin: '0px 0px -40px 0px' },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [visible])

  return { ref, visible }
}
