
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { useBreakpoint } from "@/hooks/use-mobile";

const Index = () => {
  const isMobile = useBreakpoint('mobile');
  
  useEffect(() => {
    // Initialize animations with a check for mobile devices to optimize performance
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: isMobile ? 0.05 : 0.1 } // Lower threshold for mobile devices
    );

    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      observer.observe(section);
    });
    
    // Initialize skill progress bars animation
    const skillBars = document.querySelectorAll('.skill-progress');
    skillBars.forEach(bar => {
      const width = bar.getAttribute('data-width') || '0%';
      (bar as HTMLElement).style.width = width;
    });
    
    // Update document title with animation
    const titles = ["Lucky Yaduvanshi", "Web Developer", "UI Designer", "Full Stack Developer"];
    let currentTitleIndex = 0;
    
    const titleInterval = setInterval(() => {
      document.title = `${titles[currentTitleIndex]} | Portfolio`;
      currentTitleIndex = (currentTitleIndex + 1) % titles.length;
    }, 2000);
    
    // Add meta viewport tag to ensure proper mobile rendering
    const metaViewport = document.querySelector('meta[name="viewport"]');
    if (!metaViewport) {
      const meta = document.createElement('meta');
      meta.name = 'viewport';
      meta.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no';
      document.head.appendChild(meta);
    }
    
    return () => {
      sections.forEach(section => observer.unobserve(section));
      clearInterval(titleInterval);
    };
  }, [isMobile]);

  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      <div className="fixed top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900 to-black opacity-80 z-[-1]"></div>
      <Navbar />
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
