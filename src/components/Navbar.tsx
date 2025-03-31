
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, Download } from "lucide-react";
import { useBreakpoint } from "@/hooks/use-mobile";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isTablet = useBreakpoint('tablet');
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'glass-panel py-3' : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="text-xl sm:text-2xl font-bold text-glow bg-clip-text text-transparent bg-gradient-to-r from-neon-pink to-neon-blue">
          <span className="animate-glow">Lucky Yaduvanshi</span>
        </div>
        
        {/* Resume button - visible on all devices */}
        <div className="flex items-center gap-2">
          <a 
            href="/resume.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Button
              className={`bg-transparent border border-neon-pink text-neon-pink hover:bg-neon-pink hover:text-black neon-box-shadow transition-all ${
                isTablet ? 'px-3 py-1 text-sm' : 'px-4 py-2'
              }`}
            >
              <Download className={`${isTablet ? 'mr-1 h-3 w-3' : 'mr-2 h-4 w-4'}`} /> 
              Resume
            </Button>
          </a>
          
          {/* Mobile Navigation Toggle */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel animate-fade-in absolute top-full left-0 right-0 py-4">
          <div className="flex flex-col space-y-4 items-center">
            <Button
              onClick={() => scrollTo('contact')}
              className="w-32 bg-transparent border border-neon-pink text-neon-pink hover:bg-neon-pink hover:text-black transition-all"
            >
              Contact Me
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
