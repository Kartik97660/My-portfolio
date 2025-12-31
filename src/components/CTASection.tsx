import { Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CTASection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="glass-card p-10 md:p-16 max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Let's Work <span className="text-gradient">Together</span>
          </h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            Interested in collaborating or have a project in mind? I'd love to hear from you.
          </p>
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-base font-semibold"
            onClick={scrollToContact}
          >
            <Mail className="mr-2 w-5 h-5" />
            Get in Touch
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
