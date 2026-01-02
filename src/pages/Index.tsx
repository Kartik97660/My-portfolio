import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import EducationSection from '@/components/EducationSection';
import CertificatesSection from '@/components/CertificatesSection';
import BlogSection from '@/components/BlogSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Check if there's a section param in the URL (from Footer navigation)
    const params = new URLSearchParams(location.search);
    const sectionId = params.get('section');

    if (sectionId) {
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          // Clean up URL after scrolling to prevent auto-scroll on refresh
          navigate('/', { replace: true });
        }
      }, 100); // Small delay to ensure DOM is ready
    }
  }, [location.search]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <EducationSection />
        <CertificatesSection />
        <BlogSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
