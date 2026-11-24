import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router'
import { SiteFooter } from '@widgets/site-footer'
import { SiteHeader } from '@widgets/site-header'

export function MainLayout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [pathname])

  return (
    <div className="flex min-h-screen flex-col bg-surface-base text-ink-primary">
      <SiteHeader />
      <main id="contenido" className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  )
}
