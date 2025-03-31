
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black py-12 px-4 relative">
      {/* Neon line separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-neon-pink via-neon-purple to-neon-blue"></div>
      
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-neon-glow animate-glow">
              Portfolio
            </span>
            <p className="text-gray-400 mt-2 text-sm max-w-xs">
              Creating stunning digital experiences that drive business growth and user engagement.
            </p>
          </div>
          
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full border border-neon-pink flex items-center justify-center text-neon-pink hover:bg-neon-pink hover:text-black transition-all mb-8 md:mb-0"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
          
          <div className="text-center md:text-right">
            <div className="flex justify-center md:justify-end space-x-6 mb-4">
              {['Twitter', 'LinkedIn', 'GitHub', 'Dribbble'].map((platform) => (
                <a 
                  key={platform}
                  href="#" 
                  className="text-gray-400 hover:text-neon-pink transition-colors text-sm"
                >
                  {platform}
                </a>
              ))}
            </div>
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
