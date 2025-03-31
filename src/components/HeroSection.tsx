
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowDown, Sparkles, Code, Globe, Github, Linkedin, Mail, Phone } from "lucide-react";
import { useBreakpoint } from "@/hooks/use-mobile";

const HeroSection = () => {
  const [typewriterText, setTypewriterText] = useState("");
  const [animatedBackground, setAnimatedBackground] = useState(0);
  const fullText = "Full-stack Developer & Web Designer";
  const isMobile = useBreakpoint('mobile');
  const isTablet = useBreakpoint('tablet');
  
  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      setTypewriterText(fullText.substring(0, currentIndex + 1));
      currentIndex++;
      if (currentIndex === fullText.length) {
        clearInterval(interval);
      }
    }, 100);
    
    const bgInterval = setInterval(() => {
      setAnimatedBackground(prev => (prev + 1) % 3);
    }, 5000);
    
    return () => {
      clearInterval(interval);
      clearInterval(bgInterval);
    };
  }, []);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const bgGradients = [
    "radial-gradient(circle at 20% 20%, rgba(76, 29, 149, 0.4) 0%, transparent 40%), radial-gradient(circle at 80% 80%, rgba(236, 72, 153, 0.4) 0%, transparent 40%)",
    "radial-gradient(circle at 80% 20%, rgba(56, 189, 248, 0.4) 0%, transparent 40%), radial-gradient(circle at 20% 80%, rgba(124, 58, 237, 0.4) 0%, transparent 40%)",
    "radial-gradient(circle at 50% 20%, rgba(239, 68, 68, 0.4) 0%, transparent 40%), radial-gradient(circle at 50% 80%, rgba(16, 185, 129, 0.4) 0%, transparent 40%)"
  ];

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">
      {/* Animated background */}
      <div 
        className="absolute top-0 left-0 w-full h-full overflow-hidden transition-all duration-2000"
        style={{ background: bgGradients[animatedBackground] }}
      >
        {/* Abstract geometric shapes - hide some on mobile for performance */}
        <div className="absolute w-96 h-96 rounded-full border border-white/10 top-1/4 -left-20 animate-spin-slow hidden sm:block"></div>
        <div className="absolute w-64 h-64 rounded-full border border-white/10 bottom-1/4 -right-20 animate-spin-reverse hidden sm:block"></div>
        <div className="absolute w-40 h-40 rounded-md border border-white/20 top-1/3 right-1/4 rotate-45 animate-float"></div>
        
        {/* Interactive particles - fewer on mobile */}
        <div className="particle-container">
          {[...Array(isMobile ? 10 : 20)].map((_, i) => (
            <div 
              key={i} 
              className="particle"
              style={{
                '--x': `${Math.random() * 100}%`,
                '--y': `${Math.random() * 100}%`,
                '--size': `${Math.random() * (isMobile ? 5 : 10) + 5}px`,
                '--color': ['#8B5CF6', '#D946EF', '#0EA5E9'][Math.floor(Math.random() * 3)]
              } as React.CSSProperties}
            ></div>
          ))}
        </div>
        
        {/* Glassmorphism circles - smaller on mobile */}
        <div className="absolute top-1/4 left-1/3 w-60 sm:w-72 h-60 sm:h-72 bg-white/5 rounded-full filter blur-xl opacity-60"></div>
        <div className="absolute bottom-1/3 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-white/5 rounded-full filter blur-xl opacity-60"></div>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto backdrop-blur-sm p-4 sm:p-8 rounded-xl bg-black/30">
        <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4">
          <Sparkles className="h-4 w-4 sm:h-6 sm:w-6 text-[#D946EF]" />
          <span className="text-xs sm:text-sm uppercase tracking-widest text-[#D946EF]">Web Developer</span>
          <Sparkles className="h-4 w-4 sm:h-6 sm:w-6 text-[#D946EF]" />
        </div>
        
        <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 drop-shadow-lg">
          <span className="text-gradient-cyberpunk">Lucky Yaduvanshi</span>
        </h1>
        
        <div className="flex items-center justify-center gap-2 sm:gap-4 mb-3 sm:mb-4">
          <div className="h-px w-12 sm:w-16 bg-gradient-to-r from-transparent via-[#0EA5E9] to-transparent"></div>
          <Code className="h-4 w-4 sm:h-5 sm:w-5 text-[#0EA5E9]" />
          <div className="h-px w-12 sm:w-16 bg-gradient-to-r from-[#0EA5E9] via-[#0EA5E9] to-transparent"></div>
        </div>
        
        <h2 className="text-lg sm:text-xl md:text-2xl text-white mb-6 sm:mb-8 h-8 sm:h-12 font-light">
          {typewriterText}<span className="animate-pulse">|</span>
        </h2>
        
        <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-6 sm:mb-10">
          I create <span className="text-[#8B5CF6] font-medium">stunning</span> digital experiences that captivate your audience and drive 
          <span className="text-[#0EA5E9] font-medium"> measurable results</span> for your business.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <Button 
            onClick={scrollToProjects}
            className="relative overflow-hidden group px-6 sm:px-8 py-5 sm:py-6 bg-gradient-to-r from-[#D946EF] to-[#8B5CF6] hover:from-[#8B5CF6] hover:to-[#D946EF] text-white border-none transition-all duration-500 rounded-xl shadow-lg hover:shadow-[#D946EF]/25 w-full sm:w-auto"
            size={isTablet ? "default" : "lg"}
          >
            <span className="relative z-10 flex items-center gap-2">
              <Globe className="w-4 h-4 sm:w-5 sm:h-5" />
              View My Work
            </span>
          </Button>
          
          <Button 
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-6 sm:px-8 py-5 sm:py-6 backdrop-blur-md bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all duration-300 rounded-xl w-full sm:w-auto"
            size={isTablet ? "default" : "lg"}
          >
            Let's Talk
          </Button>
        </div>
        
        {/* Stats - Stacked on mobile */}
        <div className="mt-8 sm:mt-12 grid grid-cols-3 gap-2 sm:flex sm:items-center sm:justify-center sm:gap-8">
          <div className="text-center">
            <p className="text-xs sm:text-sm text-gray-400">
              Years
            </p>
            <p className="text-lg sm:text-xl font-bold text-white">
              2+
            </p>
          </div>
          <div className="text-center">
            <p className="text-xs sm:text-sm text-gray-400">
              Projects
            </p>
            <p className="text-lg sm:text-xl font-bold text-white">
              20+
            </p>
          </div>
          <div className="text-center">
            <p className="text-xs sm:text-sm text-gray-400">
              Clients
            </p>
            <p className="text-lg sm:text-xl font-bold text-white">
              15+
            </p>
          </div>
        </div>
        
        <div className="mt-6 sm:mt-10 flex items-center justify-center gap-3 sm:gap-4">
          <a href="https://github.com/LuckyYaduvanshi5" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon" className="rounded-full text-white hover:text-neon-pink hover:bg-white/10">
              <Github className="h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          </a>
          <a href="https://www.linkedin.com/in/lucky-yaduvanshi/" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon" className="rounded-full text-white hover:text-neon-blue hover:bg-white/10">
              <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          </a>
          <a href="mailto:luckyyaduvanshi5@gmail.com" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon" className="rounded-full text-white hover:text-neon-purple hover:bg-white/10">
              <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          </a>
          <a href="tel:+919667907515" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon" className="rounded-full text-white hover:text-neon-green hover:bg-white/10">
              <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
        <Button 
          onClick={scrollToProjects}
          variant="ghost" 
          size="icon" 
          className="text-white hover:text-[#D946EF] bg-white/10 backdrop-blur-sm rounded-full"
        >
          <ArrowDown className="h-5 w-5 sm:h-6 sm:w-6" />
        </Button>
      </div>

      <style>
        {`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(45deg); }
          50% { transform: translateY(-20px) rotate(45deg); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        
        .text-gradient-cyberpunk {
          background: linear-gradient(-45deg, #8B5CF6, #D946EF, #0EA5E9, #8B5CF6);
          background-size: 300%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          color: transparent;
          animation: gradient 6s ease infinite;
        }
        
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        
        .particle-container {
          position: absolute;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }
        
        .particle {
          position: absolute;
          width: var(--size);
          height: var(--size);
          background: var(--color);
          border-radius: 50%;
          left: var(--x);
          top: var(--y);
          opacity: 0.6;
          filter: blur(1px);
          animation: moveParticle 15s infinite linear;
        }
        
        @keyframes moveParticle {
          0% {
            transform: translate(0, 0);
          }
          25% {
            transform: translate(100px, -50px);
          }
          50% {
            transform: translate(50px, 100px);
          }
          75% {
            transform: translate(-50px, 50px);
          }
          100% {
            transform: translate(0, 0);
          }
        }
        
        @media (max-width: 640px) {
          .text-gradient-cyberpunk {
            background-size: 200%;
          }
          
          .particle {
            animation: moveParticle 10s infinite linear;
          }
        }
        `}
      </style>
    </section>
  );
};

export default HeroSection;
