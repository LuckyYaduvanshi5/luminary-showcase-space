
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
        <div className="text-2xl font-bold text-glow bg-clip-text text-transparent bg-gradient-to-r from-neon-pink to-neon-blue">
          <span className="animate-glow">Portfolio</span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {['home', 'projects', 'skills', 'about', 'services', 'contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className="text-white hover:text-neon-pink transition-colors uppercase tracking-wide text-sm"
            >
              {item}
            </button>
          ))}
          <Button
            onClick={() => scrollTo('contact')}
            className="bg-transparent border border-neon-pink text-neon-pink hover:bg-neon-pink hover:text-black neon-box-shadow transition-all"
          >
            Hire Me
          </Button>
        </nav>
        
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

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel animate-fade-in absolute top-full left-0 right-0 py-4">
          <nav className="flex flex-col space-y-4 items-center">
            {['home', 'projects', 'skills', 'about', 'services', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className="text-white hover:text-neon-pink transition-colors uppercase tracking-wide text-sm py-2"
              >
                {item}
              </button>
            ))}
            <Button
              onClick={() => scrollTo('contact')}
              className="w-32 bg-transparent border border-neon-pink text-neon-pink hover:bg-neon-pink hover:text-black neon-box-shadow transition-all"
            >
              Hire Me
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
