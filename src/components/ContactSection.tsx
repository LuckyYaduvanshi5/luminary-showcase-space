
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "I'll get back to you as soon as possible.",
        variant: "default",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-4 relative">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30"></div>
      
      <div className="container mx-auto relative z-10">
        <h2 className="section-title">Let's Connect</h2>
        <p className="text-gray-300 mb-12 max-w-xl">
          Have a project in mind or want to discuss potential collaboration? I'd love to hear from you!
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-10">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-md flex items-center justify-center bg-muted text-neon-pink">
                  <Mail />
                </div>
                <div className="ml-4">
                  <h4 className="text-white font-medium">Email</h4>
                  <a href="mailto:contact@example.com" className="text-gray-300 hover:text-neon-pink transition-colors">
                    contact@example.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-md flex items-center justify-center bg-muted text-neon-blue">
                  <Phone />
                </div>
                <div className="ml-4">
                  <h4 className="text-white font-medium">Phone</h4>
                  <a href="tel:+1234567890" className="text-gray-300 hover:text-neon-blue transition-colors">
                    +1 (234) 567-890
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-md flex items-center justify-center bg-muted text-neon-purple">
                  <MapPin />
                </div>
                <div className="ml-4">
                  <h4 className="text-white font-medium">Location</h4>
                  <p className="text-gray-300">
                    San Francisco, California
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-md flex items-center justify-center bg-muted text-neon-green">
                  <Clock />
                </div>
                <div className="ml-4">
                  <h4 className="text-white font-medium">Working Hours</h4>
                  <p className="text-gray-300">
                    Mon - Fri: 9:00 AM - 6:00 PM
                  </p>
                </div>
              </div>
            </div>
            
            {/* Social Media Links */}
            <div>
              <h4 className="text-white font-medium mb-4">Connect With Me</h4>
              <div className="flex space-x-4">
                {['Twitter', 'LinkedIn', 'GitHub', 'Dribbble'].map((platform) => (
                  <a 
                    key={platform}
                    href="#" 
                    className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-neon-pink hover:border-neon-pink transition-colors"
                  >
                    {platform.charAt(0)}
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="neon-border p-6 sm:p-8">
              <h3 className="text-xl font-bold text-white mb-6">Send Me a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="bg-muted border-gray-700 text-white placeholder:text-gray-500 focus:border-neon-pink"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                      Your Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className="bg-muted border-gray-700 text-white placeholder:text-gray-500 focus:border-neon-pink"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Project Inquiry"
                    className="bg-muted border-gray-700 text-white placeholder:text-gray-500 focus:border-neon-pink"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell me about your project..."
                    className="bg-muted border-gray-700 text-white placeholder:text-gray-500 focus:border-neon-pink"
                  />
                </div>
                
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-neon-pink hover:bg-transparent hover:text-neon-pink border border-neon-pink text-black transition-all py-6"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
