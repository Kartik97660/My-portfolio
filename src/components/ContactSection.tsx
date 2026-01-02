import { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'kartikpathak2799@gmail.com',
    href: 'mailto:kartikpathak2799@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 9766021738',
    href: 'tel:+919766021738',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Nagpur, Maharashtra, India',
    href: null,
  },
];

const socialLinks = [
  {
    icon: Github,
    label: 'GitHub',
    handle: '@Kartik97660',
    href: 'https://github.com/Kartik97660',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    handle: '@kartik9970',
    href: 'https://linkedin.com/in/kartik9970',
  },
];

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Message sent!',
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title">
          Get in <span className="text-gradient">Touch</span>
        </h2>
        <p className="section-subtitle hidden md:block">
          Have a question or want to work together? Feel free to reach out!
        </p>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-4">
            {contactInfo.map((item) => (
              <div key={item.label} className="glass-card p-4 flex items-center gap-4">
                <div className="icon-box-lg bg-primary/20 text-primary">
                  <item.icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="font-medium hover:text-primary transition-colors">
                      {item.value}
                    </a>
                  ) : (
                    <p className="font-medium">{item.value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Social Links */}
            <div className="glass-card p-8 md:p-10 hidden md:block">
              <h3 className="font-semibold mb-4">Connect with me</h3>
              <div className="space-y-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <link.icon className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium text-foreground">{link.label}</p>
                      <p className="text-sm">{link.handle}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card p-6">
            <h3 className="font-semibold text-lg mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-sm text-muted-foreground mb-2 block">Name</label>
                <Input
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-muted/50 border-border focus:border-primary"
                />
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-2 block">Email</label>
                <Input
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-muted/50 border-border focus:border-primary"
                />
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-2 block">Message</label>
                <Textarea
                  placeholder="Your message..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="bg-muted/50 border-border focus:border-primary resize-none"
                />
              </div>
              <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
