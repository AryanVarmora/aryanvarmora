import MainLayout from '@portfolio/components/layout/MainLayout';
import Hero from '@portfolio/components/home/Hero';
import SkillsSection from '@portfolio/components/skills/SkillsSection';
import ProjectsSection from '@portfolio/components/projects/ProjectsSection';
import ContactSection from '@portfolio/components/home/ContactSection';

export default function Home() {
  return (
    <MainLayout>
      <Hero />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </MainLayout>
  );
}