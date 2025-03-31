
import { ArrowUp, Mail, MapPin, Phone, Github, Linkedin, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-black to-[#0f0f13] py-16 px-4 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#8B5CF6] rounded-full filter blur-[120px]"></div>
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#D946EF] rounded-full filter blur-[100px]"></div>
      </div>
      
      {/* Top separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D946EF] to-transparent"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Logo & Description */}
          <div className="space-y-4">
            <div className="mb-4">
              <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#D946EF] to-[#0EA5E9]">
                Portfolio
              </span>
            </div>
            <p className="text-gray-400 max-w-xs">
              Elevating brands through creative design and cutting-edge development solutions that drive business growth.
            </p>
            <div className="flex space-x-4 pt-4">
              <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 hover:bg-white/10 transition-colors border border-white/10 text-gray-300 hover:text-[#D946EF]">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 hover:bg-white/10 transition-colors border border-white/10 text-gray-300 hover:text-[#D946EF]">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 hover:bg-white/10 transition-colors border border-white/10 text-gray-300 hover:text-[#D946EF]">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 hover:bg-white/10 transition-colors border border-white/10 text-gray-300 hover:text-[#D946EF]">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-4">
              {["Home", "Projects", "Services", "About", "Skills", "Contact"].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-[#D946EF] transition-colors flex items-center group"
                  >
                    <span className="w-0 group-hover:w-4 transition-all duration-300 overflow-hidden">
                      <span className="text-[#D946EF]">→</span>
                    </span>
                    <span>{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white">Get in Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="h-5 w-5 text-[#0EA5E9] mt-1 flex-shrink-0" />
                <span>123 Design Street, Creative City, Country</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail className="h-5 w-5 text-[#D946EF] flex-shrink-0" />
                <span>hello@portfoliosite.com</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="h-5 w-5 text-[#8B5CF6] flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/10 pt-8">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {currentYear} Portfolio. All Rights Reserved.
          </p>
          
          <button
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full glassmorphism flex items-center justify-center text-white hover:text-[#D946EF] transition-all group"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5 group-hover:translate-y-[-2px] transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
