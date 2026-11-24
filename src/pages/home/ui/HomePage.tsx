import { AboutSection } from '@widgets/about-section'
import { HeroSection } from '@widgets/hero-section'
import { ProjectsSection } from '@widgets/projects-section'
import { SolutionsSection } from '@widgets/solutions-section'

export function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SolutionsSection />
      <ProjectsSection />
    </>
  )
}
