import { ArrowRight } from 'lucide-react';

const highlights = [
  {
    value: '2+',
    title: 'Years Experience',
    description: 'In sales, marketing execution, and analytics-driven decision support',
    link: { label: 'Learn more', href: '#education' },
  },
  {
    value: '10+',
    title: 'Technical Skills',
    description: 'Python, SQL, Power BI, Excel, Tableau, Azure, and more',
    link: { label: 'View skills', href: '#skills' },
  },
  {
    value: '4+',
    title: 'Data Projects',
    description: 'End-to-end analytics solutions with Power BI and SQL',
    link: { label: 'See projects', href: '#projects' },
  },
];

const AboutSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.slice(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        {/* Highlight Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {highlights.map((item) => (
            <div key={item.title} className="glass-card p-6 group">
              <span className="text-4xl font-display font-bold text-primary">{item.value}</span>
              <h3 className="text-lg font-semibold mt-3 mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
              <button
                onClick={() => scrollToSection(item.link.href)}
                className="inline-flex items-center text-sm text-primary font-medium group-hover:underline"
              >
                {item.link.label}
                <ArrowRight className="ml-1 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
