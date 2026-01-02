import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

const quickLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (href: string) => {
    const sectionId = href.slice(1);

    // If not on home page, navigate to home with section hash
    if (location.pathname !== '/') {
      navigate(`/?section=${sectionId}`);
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-3 md:grid-cols-4 gap-2 md:gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-3 md:col-span-1 hidden md:flex flex-col items-center md:items-start text-center md:text-left mb-4 md:mb-0">
            <a href="#home" className="flex items-center gap-1 font-display font-bold text-xl mb-3">
              <span className="text-foreground">Kartik</span>
              <span className="text-primary">Pathak</span>
            </a>
            <p className="text-sm text-muted-foreground hidden md:block">
              Business Analyst and Business Intelligence Professional
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="font-semibold mb-2 md:mb-4 text-sm md:text-base">Quick Links</h4>
            <ul className="space-y-1 md:space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-xs md:text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="text-center md:text-left">
            <h4 className="font-semibold mb-2 md:mb-4 text-sm md:text-base">Contact</h4>
            <ul className="space-y-1 md:space-y-2 flex flex-col items-center md:items-start">
              <li className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground">
                <Mail className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary md:block hidden" />
                <a href="mailto:kartikpathak2799@gmail.com" className="hover:text-foreground transition-colors overflow-hidden text-ellipsis max-w-full">
                  <span className="md:hidden">Email</span>
                  <span className="hidden md:inline">kartikpathak2799@gmail.com</span>
                </a>
              </li>
              <li className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground">
                <Phone className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary md:block hidden" />
                <a href="tel:+919766021738" className="hover:text-foreground transition-colors">
                  <span className="md:hidden">Phone</span>
                  <span className="hidden md:inline">+91 9766021738</span>
                </a>
              </li>
              <li className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground">
                <MapPin className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary md:block hidden" />
                <span className="md:hidden">Location</span>
                <span className="hidden md:inline">Nagpur, Maharashtra</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="text-center md:text-left">
            <h4 className="font-semibold mb-2 md:mb-4 text-sm md:text-base">Social</h4>
            <div className="flex items-center justify-center md:justify-start gap-2 md:gap-3">
              <a
                href="https://github.com/Kartik97660"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 md:p-2 rounded-lg bg-muted/50 border border-border text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all duration-300"
              >
                <Github className="w-4 h-4 md:w-5 md:h-5" />
              </a>
              <a
                href="https://linkedin.com/in/kartik9970"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 md:p-2 rounded-lg bg-muted/50 border border-border text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all duration-300"
              >
                <Linkedin className="w-4 h-4 md:w-5 md:h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Kartik Pathak. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
