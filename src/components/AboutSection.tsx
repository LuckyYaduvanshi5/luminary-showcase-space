
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {/* Background gradient */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-gradient-radial from-neon-purple to-transparent"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Profile image */}
          <div className="relative">
            <div className="neon-border aspect-square overflow-hidden rounded-lg max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-neon-pink/40 to-neon-blue/40 mix-blend-overlay"></div>
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7')] bg-cover bg-center opacity-70"></div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-5 -right-5 w-40 h-40 border-2 border-neon-purple rounded-lg opacity-50"></div>
            <div className="absolute -top-5 -left-5 w-20 h-20 border-2 border-neon-pink rounded-lg opacity-50"></div>
            <div className="absolute top-1/4 -left-3 w-6 h-6 bg-neon-pink rounded-full animate-pulse opacity-80"></div>
            <div className="absolute bottom-1/3 -right-3 w-6 h-6 bg-neon-blue rounded-full animate-pulse opacity-80"></div>
          </div>
          
          {/* About me content */}
          <div>
            <h2 className="section-title">About Me</h2>
            
            <div className="space-y-6 text-gray-200">
              <p>
                Hi, I'm <span className="font-bold text-white">Alex Morgan</span>, a passionate digital creator with a keen eye for design and a mind for technical solutions.
              </p>
              
              <p>
                With over <span className="text-neon-pink">5+ years of experience</span> in web development and digital design, I've helped numerous businesses transform their online presence and achieve measurable growth.
              </p>
              
              <p>
                I blend technical expertise with creative vision to deliver solutions that not only look stunning but also drive real business results. My approach focuses on understanding your unique needs and crafting tailored strategies that elevate your brand.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="bg-muted rounded-md px-4 py-2">
                  <div className="text-2xl font-bold text-neon-pink">5+</div>
                  <div className="text-sm text-gray-400">Years Experience</div>
                </div>
                
                <div className="bg-muted rounded-md px-4 py-2">
                  <div className="text-2xl font-bold text-neon-blue">50+</div>
                  <div className="text-sm text-gray-400">Projects Completed</div>
                </div>
                
                <div className="bg-muted rounded-md px-4 py-2">
                  <div className="text-2xl font-bold text-neon-purple">30+</div>
                  <div className="text-sm text-gray-400">Happy Clients</div>
                </div>
              </div>
              
              <Button className="mt-6 bg-transparent border border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-black transition-all">
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
