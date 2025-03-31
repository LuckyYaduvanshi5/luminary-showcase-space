
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Monitor, Smartphone, PenTool, Zap, BarChart, Check } from "lucide-react";

interface Service {
  id: number;
  title: string;
  description: string;
  benefits: string[];
  icon: JSX.Element;
  color: string;
}

const services: Service[] = [
  {
    id: 1,
    title: "Web Development",
    description: "Custom websites and web applications that perform flawlessly across all devices.",
    benefits: [
      "Responsive, mobile-first design",
      "Performance optimization",
      "SEO-friendly architecture",
      "Secure and scalable solutions"
    ],
    icon: <Monitor />,
    color: "neon-pink"
  },
  {
    id: 2,
    title: "UI/UX Design",
    description: "Intuitive user experiences and stunning interfaces that keep users engaged.",
    benefits: [
      "User-centered design approach",
      "Interactive prototyping",
      "Usability testing",
      "Conversion-optimized interfaces"
    ],
    icon: <PenTool />,
    color: "neon-blue"
  },
  {
    id: 3,
    title: "Mobile Development",
    description: "Native and cross-platform mobile apps that deliver exceptional user experiences.",
    benefits: [
      "iOS and Android development",
      "Cross-platform solutions",
      "Performance optimization",
      "Ongoing maintenance"
    ],
    icon: <Smartphone />,
    color: "neon-purple"
  },
  {
    id: 4,
    title: "Digital Marketing",
    description: "Data-driven marketing strategies that attract and convert your target audience.",
    benefits: [
      "SEO optimization",
      "Social media management",
      "Email marketing campaigns",
      "Performance analytics"
    ],
    icon: <BarChart />,
    color: "neon-green"
  },
  {
    id: 5,
    title: "Branding",
    description: "Comprehensive brand identity development that sets you apart from competitors.",
    benefits: [
      "Logo design",
      "Visual identity systems",
      "Brand style guides",
      "Brand messaging"
    ],
    icon: <PenTool />,
    color: "neon-yellow"
  },
  {
    id: 6,
    title: "Performance Optimization",
    description: "Speed up your digital platforms for better user experience and search rankings.",
    benefits: [
      "Page speed optimization",
      "Code refactoring",
      "Server-side improvements",
      "Core Web Vitals enhancement"
    ],
    icon: <Zap />,
    color: "neon-blue"
  }
];

const ServicesSection = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  return (
    <section id="services" className="py-24 px-4 relative">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-40 left-20 w-64 h-64 bg-neon-purple opacity-10 rounded-full filter blur-[80px]"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-neon-pink opacity-10 rounded-full filter blur-[100px]"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <h2 className="section-title">My Services</h2>
        <p className="text-gray-300 mb-12 max-w-2xl">
          I offer comprehensive digital solutions tailored to help your business stand out and succeed in today's competitive market.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card 
              key={service.id} 
              className={`neon-border overflow-hidden transition-all duration-300 ${
                hoveredService === service.id ? 'transform scale-[1.02]' : ''
              }`}
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
            >
              <CardHeader>
                <div className={`w-12 h-12 rounded-md flex items-center justify-center text-${service.color} bg-muted mb-4`}>
                  {service.icon}
                </div>
                <CardTitle className="text-xl text-white">{service.title}</CardTitle>
                <CardDescription className="text-gray-300">{service.description}</CardDescription>
              </CardHeader>
              
              <CardContent>
                <h4 className="text-sm font-semibold text-gray-200 mb-3">Key Benefits:</h4>
                <ul className="space-y-2">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className={`text-${service.color} mr-2 mt-1`}>
                        <Check className="h-4 w-4" />
                      </span>
                      <span className="text-gray-300 text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              
              <CardFooter>
                <Button 
                  variant="link" 
                  className={`text-${service.color} hover:text-white p-0 flex items-center gap-2 group`}
                >
                  Learn More
                  <ArrowRight className="h-4 w-4 transform transition-transform group-hover:translate-x-1" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center glass-panel p-8 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-4">Ready to transform your digital presence?</h3>
          <p className="text-gray-300 mb-6">
            Let's discuss your project requirements and create a tailored solution that meets your needs and budget.
          </p>
          <Button 
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-neon-purple hover:bg-transparent text-white hover:text-neon-purple border border-neon-purple transition-all px-8 py-6"
            size="lg"
          >
            Get a Free Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
