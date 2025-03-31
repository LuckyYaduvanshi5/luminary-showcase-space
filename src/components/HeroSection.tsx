
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  const [typewriterText, setTypewriterText] = useState("");
  const fullText = "Transforming Ideas into Digital Reality";
  
  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      setTypewriterText(fullText.substring(0, currentIndex + 1));
      currentIndex++;
      if (currentIndex === fullText.length) {
        clearInterval(interval);
      }
    }, 100);
    
    return () => clearInterval(interval);
  }, []);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center text-center px-4">
      {/* Background effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-purple opacity-10 rounded-full filter blur-[100px]"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-neon-pink opacity-10 rounded-full filter blur-[80px]"></div>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon-pink via-neon-purple to-neon-blue animate-glow">
            Design. Develop. Deliver.
          </span>
        </h1>
        
        <h2 className="text-lg md:text-2xl text-white mb-8 h-12">
          {typewriterText}<span className="animate-pulse">|</span>
        </h2>
        
        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10">
          I create stunning digital experiences that captivate your audience and drive results for your business.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button 
            onClick={scrollToProjects}
            className="relative overflow-hidden group px-8 py-6 bg-neon-pink hover:bg-transparent text-black hover:text-neon-pink border border-neon-pink transition-all duration-300 animate-pulse-neon"
            size="lg"
          >
            <span className="relative z-10">View My Work</span>
            <span className="absolute inset-0 bg-neon-pink group-hover:opacity-0 transition-opacity duration-300"></span>
          </Button>
          
          <Button 
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-6 bg-transparent border border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-black transition-all duration-300"
            size="lg"
          >
            Let's Talk
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
        <Button 
          onClick={scrollToProjects}
          variant="ghost" 
          size="icon" 
          className="text-white hover:text-neon-pink"
        >
          <ArrowDown className="h-6 w-6" />
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
