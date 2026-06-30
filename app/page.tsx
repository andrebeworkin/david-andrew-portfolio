import Navbar from '@/components/portfolio/navbar'
import HeroSection from '@/components/portfolio/hero-section'
import AboutSection from '@/components/portfolio/about-section'
import SkillsSection from '@/components/portfolio/skills-section'
import ProjectsSection from '@/components/portfolio/projects-section'
import ExperienceSection from '@/components/portfolio/experience-section'
import EducationSection from '@/components/portfolio/education-section'
import ContactSection from '@/components/portfolio/contact-section'
import FooterSection from '@/components/portfolio/footer-section'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <EducationSection />
      <ContactSection />
      <FooterSection />
    </main>
  )
}
