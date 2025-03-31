
import { useState } from 'react';
import { ArrowRight, Github, ExternalLink, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Project {
  id: number;
  title: string;
  subtitle?: string;
  category: string;
  description: string;
  image: string;
  link?: string;
  github?: string;
  access?: string;
  accessType?: 'tool' | 'portal' | 'store' | 'site' | 'suite';
  technologies: string[];
  featured?: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Codai Pro",
    subtitle: "AI Coding Assistant",
    category: "Full-Stack",
    description: "Full-stack SaaS platform for AI-powered coding assistance.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    technologies: ["React", "Node.js", "AI/ML", "VS Code Extension"],
    featured: true
  },
  {
    id: 2,
    title: "Task Manager Pro",
    subtitle: "Task Management App",
    category: "Mobile App",
    description: "Cross-platform task management app with cloud sync.",
    image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b",
    technologies: ["React Native", "Firebase", "Cloud"],
    featured: true
  },
  {
    id: 3,
    title: "Madebycraft",
    category: "E-commerce",
    description: "Modern e-commerce website for a craft store that provides furniture related services.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    technologies: ["Elementor", "PHP", "WooCommerce"],
    featured: true
  },
  {
    id: 4,
    title: "Product Sales Landing Page",
    category: "Digital Marketing",
    description: "Digital product selling landing page for selling video editing pack.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    technologies: ["WordPress", "Elementor", "CashFree"]
  },
  {
    id: 5,
    title: "Kartzon",
    category: "E-commerce",
    description: "Modern digital product selling marketplace to sell digital bundles.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
    technologies: ["WordPress", "Elementor", "WooCommerce"],
    access: "https://example.com/kartzon",
    accessType: "store"
  },
  {
    id: 6,
    title: "OP-Construction",
    category: "Business",
    description: "Professional website for a construction firm that showcases their services.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    technologies: ["WordPress", "Elementor", "Astra"],
    access: "https://example.com/op-construction",
    accessType: "site"
  },
  {
    id: 7,
    title: "MsDhawanEnginering",
    category: "Business",
    description: "Website for an electrical engineering firm to showcase services.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    technologies: ["WordPress", "Elementor", "Astra"]
  },
  {
    id: 8,
    title: "WPGlobal.in",
    category: "Business",
    description: "Hobby project of web development agency website.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    technologies: ["WordPress", "Elementor", "Astra"]
  },
  {
    id: 9,
    title: "Taska Mobile App",
    category: "Mobile App",
    description: "Taska TODO mobile app made with React Expo.",
    image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b",
    technologies: ["React", "Node.js", "Supabase", "Expo go"],
    access: "https://example.com/taska",
    accessType: "tool"
  },
  {
    id: 10,
    title: "Radhika Jewelry",
    category: "E-commerce",
    description: "E-commerce website for jewelry dropshipping.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    technologies: ["WordPress", "Elementor", "Rank Math"]
  },
  {
    id: 11,
    title: "Digi Store",
    category: "E-commerce",
    description: "Digital products dropshipping store.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    technologies: ["WordPress", "Elementor", "PHP"]
  },
  {
    id: 12,
    title: "Pomodoro Timer",
    category: "Tool",
    description: "Boost your productivity with our sleek Pomodoro timer.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
    technologies: ["JavaScript", "HTML", "CSS"],
    access: "https://example.com/pomodoro",
    accessType: "tool"
  },
  {
    id: 13,
    title: "Online Calculator",
    category: "Tool",
    description: "Perform calculations quickly with our intuitive online calculator.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    technologies: ["JavaScript", "HTML", "CSS"],
    access: "https://example.com/calculator",
    accessType: "tool"
  },
  {
    id: 14,
    title: "VBPS Portal",
    category: "Web App",
    description: "Access the Vidya Bharti Public School student and admin portal.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    technologies: ["PHP", "MySQL", "Bootstrap"],
    access: "https://example.com/vbps",
    accessType: "portal"
  },
  {
    id: 15,
    title: "AI Prompt Generator",
    category: "Tool",
    description: "Generate creative and effective prompts for various AI models.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    technologies: ["React", "OpenAI API"],
    access: "https://example.com/prompt-generator",
    accessType: "tool"
  },
  {
    id: 16,
    title: "AI Tools Suite",
    category: "Tool",
    description: "A collection of various AI-powered utilities and tools.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
    technologies: ["React", "Node.js", "OpenAI API"],
    access: "https://example.com/ai-tools",
    accessType: "suite"
  },
  {
    id: 17,
    title: "Screen Recorder",
    category: "Tool",
    description: "Record your screen easily directly from your browser.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    technologies: ["JavaScript", "WebRTC"],
    access: "https://example.com/screen-recorder",
    accessType: "tool"
  }
];

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const categories = ['all', 'full-stack', 'e-commerce', 'mobile app', 'tool', 'business', 'web app'];
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category.toLowerCase().includes(activeFilter));

  const getAccessLabel = (type?: string) => {
    switch(type) {
      case 'tool': return 'Access Tool';
      case 'portal': return 'Access Portal';
      case 'store': return 'Visit Store';
      case 'site': return 'Visit Site';
      case 'suite': return 'Access Suite';
      default: return 'View Project';
    }
  };

  return (
    <section id="projects" className="py-24 px-4">
      <div className="container mx-auto">
        <h2 className="section-title">My Projects</h2>
        <p className="text-gray-300 mb-12 max-w-2xl">
          Explore my portfolio of successful projects that highlight my web development skills and experience.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setActiveFilter(category)}
              variant={activeFilter === category ? "default" : "outline"}
              className={`capitalize ${
                activeFilter === category 
                  ? "bg-neon-purple text-white" 
                  : "text-gray-300 hover:text-white hover:border-neon-purple"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card 
              key={project.id}
              className={`overflow-hidden neon-border bg-opacity-80 transition-all duration-500 ${
                hoveredProject === project.id ? 'transform scale-[1.02]' : ''
              } ${project.featured ? 'md:col-span-2 lg:col-span-1' : ''}`}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative h-48 overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700"
                  style={{ 
                    backgroundImage: `url(${project.image})`,
                    transform: hoveredProject === project.id ? 'scale(1.1)' : 'scale(1)'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60" />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-neon-purple text-white">
                    {project.category}
                  </Badge>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl text-white">
                  {project.title}
                  {project.subtitle && (
                    <span className="block text-sm text-gray-300 mt-1">{project.subtitle}</span>
                  )}
                </CardTitle>
                <CardDescription className="text-gray-300">{project.description}</CardDescription>
              </CardHeader>
              
              <div className="px-6 pb-2 flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span 
                    key={index} 
                    className="inline-block text-xs px-2 py-1 rounded bg-white/10 text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <CardFooter className="border-t border-white/10 mt-4 pt-4">
                {project.access ? (
                  <Button 
                    variant="link" 
                    className="text-neon-pink hover:text-neon-blue p-0 flex items-center gap-2 group"
                  >
                    {getAccessLabel(project.accessType)}
                    <ArrowRight 
                      className="h-4 w-4 transform transition-transform group-hover:translate-x-1" 
                    />
                  </Button>
                ) : (
                  <Button 
                    variant="link" 
                    className="text-neon-pink hover:text-neon-blue p-0 flex items-center gap-2 group"
                  >
                    View Details
                    <ArrowRight 
                      className="h-4 w-4 transform transition-transform group-hover:translate-x-1" 
                    />
                  </Button>
                )}
                
                {project.github && (
                  <Button variant="ghost" size="icon" className="ml-auto text-white hover:text-neon-pink">
                    <Github className="h-4 w-4" />
                  </Button>
                )}
                
                {project.link && !project.github && (
                  <Button variant="ghost" size="icon" className="ml-auto text-white hover:text-neon-blue">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a href="https://luckyyaduvanshi5.github.io/Portfolio/" target="_blank" rel="noopener noreferrer">
            <Button
              className="border border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-black transition-all px-8"
            >
              View All Projects
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
