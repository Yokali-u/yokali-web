import { Navigate, Route, Routes } from 'react-router'
import { MainLayout } from '@app/layouts'
import { AppProviders } from '@app/providers'
import { AboutPage } from '@pages/about'
import { ContactPage } from '@pages/contact'
import { HomePage } from '@pages/home'
import { MonogramLabPage } from '@pages/monogram-lab'
import { ProjectsPage } from '@pages/projects'
import { SolutionsPage } from '@pages/solutions'
import { SITE_ROUTES } from '@shared/config'

export function App() {
  return (
    <AppProviders>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path={SITE_ROUTES.home} element={<HomePage />} />
          <Route path={SITE_ROUTES.about} element={<AboutPage />} />
          <Route path={SITE_ROUTES.solutions} element={<SolutionsPage />} />
          <Route path={SITE_ROUTES.projects} element={<ProjectsPage />} />
          <Route path={SITE_ROUTES.contact} element={<ContactPage />} />
          <Route path={SITE_ROUTES.logos} element={<MonogramLabPage />} />
        </Route>

        <Route path="*" element={<Navigate to={SITE_ROUTES.home} replace />} />
      </Routes>
    </AppProviders>
  )
}
