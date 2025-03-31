
import { useEffect, useRef } from 'react';
import { useBreakpoint } from '@/hooks/use-mobile';

interface Skill {
  name: string;
  level: number;
  color: string;
}

const skills: Skill[] = [
  { name: "Web Development", level: 90, color: "#ff00ff" },
  { name: "UI/UX Design", level: 85, color: "#00ffff" },
  { name: "Mobile Development", level: 75, color: "#8a2be2" },
  { name: "Branding & Identity", level: 80, color: "#39ff14" },
  { name: "Digital Marketing", level: 70, color: "#ffff00" }
];

const SkillsSection = () => {
  const skillRefs = useRef<(HTMLDivElement | null)[]>([]);
  const isMobile = useBreakpoint('mobile');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = skillRefs.current.findIndex(ref => ref === entry.target);
            if (index !== -1) {
              const barElement = entry.target.querySelector('.skill-progress');
              if (barElement) {
                setTimeout(() => {
                  barElement.classList.add('animate-fill');
                }, index * 200);
              }
            }
          }
        });
      },
      { threshold: isMobile ? 0.1 : 0.3 } // Lower threshold for mobile
    );

    skillRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      skillRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [isMobile]);

  return (
    <section id="skills" className="py-16 sm:py-24 px-4 relative overflow-hidden">
      {/* Background elements - hide on mobile for performance */}
      <div className="absolute inset-0 hidden sm:flex justify-between opacity-5">
        <div className="w-1/3 bg-[url('https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7')] bg-cover bg-center filter blur-sm"></div>
        <div className="w-1/3 bg-[url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5')] bg-cover bg-center filter blur-sm"></div>
        <div className="w-1/3 bg-[url('https://images.unsplash.com/photo-1498050108023-c5249f4df085')] bg-cover bg-center filter blur-sm"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <h2 className="section-title text-3xl sm:text-4xl">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Skills progress bars */}
          <div className="space-y-6 sm:space-y-8">
            {skills.map((skill, index) => (
              <div 
                key={skill.name} 
                ref={el => (skillRefs.current[index] = el)}
                className="relative"
              >
                <div className="flex justify-between mb-2">
                  <span className="text-white font-medium text-sm sm:text-base">{skill.name}</span>
                  <span className="text-gray-300 text-sm sm:text-base">{skill.level}%</span>
                </div>
                <div className="h-2 sm:h-3 bg-gray-800 rounded-full overflow-hidden">
                  <div 
                    className="skill-progress h-full rounded-full opacity-80" 
                    style={{ 
                      background: `linear-gradient(90deg, ${skill.color}, rgba(10, 10, 10, 0.5))`,
                      width: "0%", 
                      transition: "width 1.5s ease-in-out"
                    }}
                    data-width={`${skill.level}%`}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Skills summary */}
          <div className="flex flex-col justify-center">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-white">
              <span className="text-glow animate-glow">Expert Solutions</span> For Your Digital Needs
            </h3>
            
            <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
              With over 2 years of experience in digital creation, I offer comprehensive skills across the full development stack and creative design process.
            </p>
            
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="neon-border p-3 sm:p-4">
                <h4 className="text-neon-pink font-bold mb-1 sm:mb-2 text-sm sm:text-base">Front-End</h4>
                <p className="text-gray-300 text-xs sm:text-sm">React, Angular, Vue, JavaScript, HTML/CSS</p>
              </div>
              <div className="neon-border p-3 sm:p-4">
                <h4 className="text-neon-blue font-bold mb-1 sm:mb-2 text-sm sm:text-base">Back-End</h4>
                <p className="text-gray-300 text-xs sm:text-sm">Node.js, Python, PHP, Database Design</p>
              </div>
              <div className="neon-border p-3 sm:p-4">
                <h4 className="text-neon-purple font-bold mb-1 sm:mb-2 text-sm sm:text-base">Design</h4>
                <p className="text-gray-300 text-xs sm:text-sm">Figma, Adobe Suite, UI/UX, Wireframing</p>
              </div>
              <div className="neon-border p-3 sm:p-4">
                <h4 className="text-neon-green font-bold mb-1 sm:mb-2 text-sm sm:text-base">Marketing</h4>
                <p className="text-gray-300 text-xs sm:text-sm">SEO, Analytics, Social Media, Email</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
          .animate-fill {
            width: attr(data-width);
            animation: fillBar 1.5s ease-in-out forwards;
          }
          
          @keyframes fillBar {
            from { width: 0%; }
            to { width: var(--skill-level); }
          }
          
          @media (max-width: 640px) {
            .animate-fill {
              animation-duration: 1s;
            }
          }
        `}
      </style>

      <script dangerouslySetInnerHTML={{
        __html: `
          document.addEventListener('DOMContentLoaded', function() {
            const bars = document.querySelectorAll('.skill-progress');
            bars.forEach(bar => {
              const width = bar.getAttribute('data-width');
              bar.style.setProperty('--skill-level', width);
            });
          });
        `
      }} />
    </section>
  );
};

export default SkillsSection;
