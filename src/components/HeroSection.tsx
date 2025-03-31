
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowDown, Sparkles, Code, Globe } from "lucide-react";

const HeroSection = () => {
  const [typewriterText, setTypewriterText] = useState("");
  const [animatedBackground, setAnimatedBackground] = useState(0);
  const fullText = "Transforming Ideas into Digital Excellence";
  
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
        {/* Abstract geometric shapes */}
        <div className="absolute w-96 h-96 rounded-full border border-white/10 top-1/4 -left-20 animate-spin-slow"></div>
        <div className="absolute w-64 h-64 rounded-full border border-white/10 bottom-1/4 -right-20 animate-spin-reverse"></div>
        <div className="absolute w-40 h-40 rounded-md border border-white/20 top-1/3 right-1/4 rotate-45 animate-float"></div>
        
        {/* Interactive particles */}
        <div className="particle-container">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i} 
              className="particle"
              style={{
                '--x': `${Math.random() * 100}%`,
                '--y': `${Math.random() * 100}%`,
                '--size': `${Math.random() * 10 + 5}px`,
                '--color': ['#8B5CF6', '#D946EF', '#0EA5E9'][Math.floor(Math.random() * 3)]
              } as React.CSSProperties}
            ></div>
          ))}
        </div>
        
        {/* Glassmorphism circles */}
        <div className="absolute top-1/4 left-1/3 w-72 h-72 bg-white/5 rounded-full filter blur-xl opacity-60"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-white/5 rounded-full filter blur-xl opacity-60"></div>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto backdrop-blur-sm p-8 rounded-xl bg-black/30">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Sparkles className="h-6 w-6 text-[#D946EF]" />
          <span className="text-sm uppercase tracking-widest text-[#D946EF]">Portfolio Showcase</span>
          <Sparkles className="h-6 w-6 text-[#D946EF]" />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">
          <span className="text-gradient-cyberpunk">Design. Develop. Deliver.</span>
        </h1>
        
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="h-px w-16 bg-gradient-to-r from-transparent via-[#0EA5E9] to-transparent"></div>
          <Code className="h-5 w-5 text-[#0EA5E9]" />
          <div className="h-px w-16 bg-gradient-to-r from-[#0EA5E9] via-[#0EA5E9] to-transparent"></div>
        </div>
        
        <h2 className="text-xl md:text-2xl text-white mb-8 h-12 font-light">
          {typewriterText}<span className="animate-pulse">|</span>
        </h2>
        
        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10">
          I create <span className="text-[#8B5CF6] font-medium">stunning</span> digital experiences that captivate your audience and drive 
          <span className="text-[#0EA5E9] font-medium"> measurable results</span> for your business.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Button 
            onClick={scrollToProjects}
            className="relative overflow-hidden group px-8 py-6 bg-gradient-to-r from-[#D946EF] to-[#8B5CF6] hover:from-[#8B5CF6] hover:to-[#D946EF] text-white border-none transition-all duration-500 rounded-xl shadow-lg hover:shadow-[#D946EF]/25"
            size="lg"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Globe className="w-5 h-5" />
              View My Work
            </span>
          </Button>
          
          <Button 
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-6 backdrop-blur-md bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all duration-300 rounded-xl"
            size="lg"
          >
            Let's Talk
          </Button>
        </div>
        
        <div className="mt-12 flex items-center justify-center gap-8">
          {["5+ Years", "100+ Projects", "50+ Clients"].map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-sm text-gray-400">
                {stat.split(" ")[1]}
              </p>
              <p className="text-xl font-bold text-white">
                {stat.split(" ")[0]}
              </p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
        <Button 
          onClick={scrollToProjects}
          variant="ghost" 
          size="icon" 
          className="text-white hover:text-[#D946EF] bg-white/10 backdrop-blur-sm rounded-full"
        >
          <ArrowDown className="h-6 w-6" />
        </Button>
      </div>

      <style>{`
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
      `}</style>
    </section>
  );
};

export default HeroSection;
