import EnhancedHero from '@portfolio/components/home/Hero';
import AboutSection from '@portfolio/components/home/AboutSection';
import SkillsSection from '@portfolio/components/skills/SkillsSection';
import ProjectsSection from '@portfolio/components/projects/ProjectsSection';
import ContactSection from '@portfolio/components/home/ContactSection';
import MainLayout from '@portfolio/components/layout/MainLayout';

export default function Home() {
  return (
    <MainLayout>
      <EnhancedHero />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </MainLayout>
  );
}