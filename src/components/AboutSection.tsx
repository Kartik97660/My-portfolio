import { ArrowRight } from 'lucide-react';

const stats = [
  { value: '2+', label: 'Years Exp' },
  { value: '10+', label: 'Tech Skills' },
  { value: '4+', label: 'Projects' },
  { value: '5+', label: 'Certificates' },
];

const highlights = [
  {
    value: '2+',
    title: 'Years Experience',
    description: 'In sales, marketing execution, and analytics-driven decision support',
    link: { label: 'Learn more', href: '#about' },
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
        {/* About Card */}
        <div className="glass-card p-8 md:p-12 max-w-4xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-2">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-muted-foreground text-center mt-6 leading-relaxed">
            Management professional with 2+ years of experience spanning sales, marketing execution, and analytics-driven decision support. Currently pursuing MBA at Symbiosis Institute of Business Management, Nagpur. Skilled in translating complex data into actionable business insights using Power BI, SQL, Python, and advanced Excel. Passionate about leveraging AI tools to drive business transformation and optimize operational workflows.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
            {stats.map((stat) => (
              <div key={stat.label} className="stat-card">
                <span className="text-2xl md:text-3xl font-display font-bold text-primary">{stat.value}</span>
                <span className="text-sm text-muted-foreground mt-1">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

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
                <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
