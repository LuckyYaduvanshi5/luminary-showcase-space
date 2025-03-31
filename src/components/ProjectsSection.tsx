
import { useState } from 'react';
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  link: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Web Development",
    description: "A high-performance online store with seamless checkout and inventory management, resulting in 35% increased sales.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    link: "#",
    featured: true
  },
  {
    id: 2,
    title: "Brand Redesign",
    category: "Branding & Design",
    description: "Complete visual identity transformation for a tech startup, establishing strong market presence and recognition.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    link: "#",
    featured: true
  },
  {
    id: 3,
    title: "Mobile Application",
    category: "App Development",
    description: "Intuitive fitness tracker app with custom animations and real-time data processing, achieving 100K+ downloads.",
    image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b",
    link: "#",
    featured: true
  },
  {
    id: 4,
    title: "SEO Optimization",
    category: "Digital Marketing",
    description: "Comprehensive SEO strategy that improved client's search ranking from page 5 to top 3 results.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    link: "#"
  },
  {
    id: 5,
    title: "Dashboard Interface",
    category: "UI/UX Design",
    description: "Data visualization dashboard that simplified complex analytics, reducing decision-making time by 40%.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
    link: "#"
  }
];

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category.toLowerCase().includes(activeFilter));

  const categories = ['all', ...new Set(projects.map(p => p.category.split(' ')[0].toLowerCase()))];

  return (
    <section id="projects" className="py-24 px-4">
      <div className="container mx-auto">
        <h2 className="section-title">My Projects</h2>
        <p className="text-gray-300 mb-12 max-w-2xl">
          Explore my portfolio of successful projects that have delivered exceptional results and transformed client businesses.
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
                  <span className="px-2 py-1 text-xs bg-neon-purple text-white rounded">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl text-white">{project.title}</CardTitle>
                <CardDescription className="text-gray-300">{project.description}</CardDescription>
              </CardHeader>
              
              <CardFooter>
                <Button 
                  variant="link" 
                  className="text-neon-pink hover:text-neon-blue p-0 flex items-center gap-2 group"
                >
                  View Project
                  <ArrowRight 
                    className="h-4 w-4 transform transition-transform group-hover:translate-x-1" 
                  />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button
            className="border border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-black transition-all px-8"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
