import EnhancedHero from '@portfolio/components/home/Hero';
import AboutSection from '@portfolio/components/home/AboutSection';
import InteractiveSkillsSection from '@portfolio/components/skills/SkillsSection';
import EnhancedProjectsSection from '@portfolio/components/projects/ProjectsSection';
import ContactSection from '@portfolio/components/home/ContactSection';
import MainLayout from '@portfolio/components/layout/MainLayout';

export default function Home() {
  return (
    <MainLayout>
      <EnhancedHero />
      <AboutSection />
      <InteractiveSkillsSection />
      <EnhancedProjectsSection />
      <ContactSection />
    </MainLayout>
  );
}