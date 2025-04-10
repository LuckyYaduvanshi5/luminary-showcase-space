
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { useBreakpoint } from "@/hooks/use-mobile";

const AboutSection = () => {
  const isMobile = useBreakpoint('mobile');

  return (
    <section id="about" className="py-16 sm:py-24 px-4 relative">
      {/* Background gradient */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-gradient-radial from-neon-purple to-transparent"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Profile image - Full width on mobile */}
          <div className="relative order-1 md:order-none">
            <div className="neon-border aspect-square overflow-hidden rounded-lg max-w-sm mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-neon-pink/40 to-neon-blue/40 mix-blend-overlay"></div>
              <img 
                src="/lovable-uploads/a54288d9-46a7-41d2-81a1-e94823a33d56.png" 
                alt="Lucky Yaduvanshi" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Decorative elements - smaller on mobile */}
            <div className="absolute -bottom-3 sm:-bottom-5 -right-3 sm:-right-5 w-28 sm:w-40 h-28 sm:h-40 border-2 border-neon-purple rounded-lg opacity-50"></div>
            <div className="absolute -top-3 sm:-top-5 -left-3 sm:-left-5 w-16 sm:w-20 h-16 sm:h-20 border-2 border-neon-pink rounded-lg opacity-50"></div>
            <div className="absolute top-1/4 -left-2 sm:-left-3 w-4 sm:w-6 h-4 sm:h-6 bg-neon-pink rounded-full animate-pulse opacity-80"></div>
            <div className="absolute bottom-1/3 -right-2 sm:-right-3 w-4 sm:w-6 h-4 sm:h-6 bg-neon-blue rounded-full animate-pulse opacity-80"></div>
          </div>
          
          {/* About me content */}
          <div className="order-2 md:order-none">
            <h2 className="section-title text-3xl sm:text-4xl">About Me</h2>
            
            <div className="space-y-4 sm:space-y-6 text-gray-200 text-sm sm:text-base">
              <p>
                Hi, I'm <span className="font-bold text-white">Lucky Yaduvanshi</span>, a passionate full-stack developer based in Jaipur, India. I specialize in creating modern, high-performance websites and web applications.
              </p>
              
              <p>
                With <span className="text-neon-pink">2+ years of experience</span> in web development, I've helped businesses transform their online presence and achieve measurable growth through innovative digital solutions.
              </p>
              
              <p>
                Currently pursuing my BCA degree at University of Commerce College, Jaipur, I combine my academic knowledge with practical skills to deliver exceptional results for my clients.
              </p>
              
              <div className="flex flex-wrap gap-3 sm:gap-4 pt-4">
                <div className="bg-muted rounded-md px-3 py-2 sm:px-4 sm:py-2">
                  <div className="text-xl sm:text-2xl font-bold text-neon-pink">20+</div>
                  <div className="text-xs sm:text-sm text-gray-400">Projects</div>
                </div>
                
                <div className="bg-muted rounded-md px-3 py-2 sm:px-4 sm:py-2">
                  <div className="text-xl sm:text-2xl font-bold text-neon-blue">15+</div>
                  <div className="text-xs sm:text-sm text-gray-400">Clients</div>
                </div>
                
                <div className="bg-muted rounded-md px-3 py-2 sm:px-4 sm:py-2">
                  <div className="text-xl sm:text-2xl font-bold text-neon-purple">5+</div>
                  <div className="text-xs sm:text-sm text-gray-400">Technologies</div>
                </div>
              </div>
              
              <div className="pt-4">
                <h3 className="text-base sm:text-lg font-bold mb-2 text-white">Contact Information</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="text-neon-pink">📍</span>
                    <span>Jaipur, India</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-neon-blue">📧</span>
                    <a href="mailto:luckyyaduvanshi5@gmail.com" className="hover:text-neon-blue transition-colors break-all">
                      luckyyaduvanshi5@gmail.com
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-neon-purple">📱</span>
                    <a href="tel:+919667907515" className="hover:text-neon-purple transition-colors">
                      +91-9667907515
                    </a>
                  </li>
                </ul>
              </div>
              
              <Button className="mt-4 sm:mt-6 bg-transparent border border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-black transition-all">
                <Download className="mr-2 h-4 w-4" /> Download Resume
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
