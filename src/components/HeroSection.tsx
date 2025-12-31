import { ArrowRight, Mail, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.getElementById(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_hsl(200_50%_15%)_0%,_hsl(220_40%_7%)_60%)]" />
      
      {/* Animated wave lines */}
      <div className="absolute bottom-0 left-0 right-0 h-48 opacity-20">
        <svg viewBox="0 0 1440 320" className="absolute bottom-0 w-full">
          <path
            fill="none"
            stroke="hsl(193 100% 50%)"
            strokeWidth="1"
            d="M0,160 C360,240 720,80 1080,160 C1260,200 1380,180 1440,160"
          />
          <path
            fill="none"
            stroke="hsl(193 100% 50%)"
            strokeWidth="1"
            strokeOpacity="0.5"
            d="M0,200 C360,280 720,120 1080,200 C1260,240 1380,220 1440,200"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-border mb-8 opacity-0 animate-[fadeIn_0.5s_ease-out_forwards]">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm text-muted-foreground">Open to opportunities</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-4 opacity-0 animate-[fadeIn_0.5s_ease-out_0.1s_forwards]">
            Hi, I'm <span className="text-gradient italic">Kartik</span>
          </h1>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-semibold text-foreground/90 mb-6 opacity-0 animate-[fadeIn_0.5s_ease-out_0.15s_forwards]">
            Business Analyst
          </h2>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 opacity-0 animate-[fadeIn_0.5s_ease-out_0.2s_forwards]">
            Transforming data into actionable insights with expertise in Power BI, SQL, Python, and AI tools
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-12 opacity-0 animate-[fadeIn_0.5s_ease-out_0.25s_forwards]">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-base font-semibold transition-all duration-300 hover:scale-[1.02]"
              onClick={() => scrollToSection('projects')}
            >
              View Projects
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-border bg-muted/30 hover:bg-muted/50 px-8 py-6 text-base font-semibold transition-all duration-300 hover:scale-[1.02]"
              onClick={() => scrollToSection('contact')}
            >
              <Mail className="mr-2 w-5 h-5" />
              Get in Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 opacity-0 animate-[fadeIn_0.5s_ease-out_0.3s_forwards]">
            <a
              href="https://github.com/Kartik97660"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-muted/50 border border-border text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all duration-300"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/kartik9970"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-muted/50 border border-border text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all duration-300"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:kartikpathak2799@gmail.com"
              className="p-3 rounded-xl bg-muted/50 border border-border text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
