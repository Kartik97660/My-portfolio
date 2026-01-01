import { Github, TrendingUp, BarChart3, LineChart, Database } from 'lucide-react';
import { Link } from 'react-router-dom';

const projects = [
  {
    id: 'cardekho-analysis',
    title: 'CarDekho Used Cars Analysis',
    date: 'October 2025',
    icon: TrendingUp,
    iconColor: 'bg-cyan-500/20 text-cyan-400',
    description: 'Built an end-to-end Power BI analytics solution on used car market data, delivering executive, brand, and performance insights across pricing, mileage, power, and seller behavior.',
    highlights: [
      'Executive dashboard with key market metrics',
      'Brand performance analysis',
      'Pricing and mileage insights',
      'Seller behavior patterns',
    ],
    tech: ['Power BI', 'SQL', 'DAX', 'EXCEL'],
    github: 'https://github.com/Kartik97660',
  },
  {
    id: 'market-analytics',
    title: 'Market Analytics Dashboard',
    date: 'November 2025',
    icon: BarChart3,
    iconColor: 'bg-emerald-500/20 text-emerald-400',
    description: 'Performed SQL-based data understanding and DAX-driven KPI modeling to analyze brand dominance, transmission trends, fuel usage, and value-for-money trade-offs.',
    highlights: [
      'Brand dominance analysis',
      'Transmission trend visualization',
      'Fuel usage patterns',
      'Value-for-money metrics',
    ],
    tech: ['SQL', 'Power BI', 'DAX'],
    github: 'https://github.com/Kartik97660',
  },
  {
    id: 'performance-insights',
    title: 'Performance Insights System',
    date: 'November 2025',
    icon: LineChart,
    iconColor: 'bg-purple-500/20 text-purple-400',
    description: 'Comprehensive analytics solution focused on performance metrics, providing actionable insights for business decision-making across multiple dimensions.',
    highlights: [
      'Performance KPI tracking',
      'Multi-dimensional analysis',
      'Actionable insights generation',
      'Business decision support',
    ],
    tech: ['Power BI', 'Python', 'SQL'],
    github: 'https://github.com/Kartik97660',
  },
  {
    id: 'data-intelligence',
    title: 'Data Intelligence Platform',
    date: 'December 2025',
    icon: Database,
    iconColor: 'bg-amber-500/20 text-amber-400',
    description: 'Advanced data intelligence platform combining multiple data sources for comprehensive market analysis and strategic planning support.',
    highlights: [
      'Multi-source data integration',
      'Strategic planning support',
      'Market analysis automation',
      'Interactive reporting',
    ],
    tech: ['Power BI', 'SQL', 'DAX', 'Excel'],
    github: 'https://github.com/Kartik97660',
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <h2 className="section-title">
          <span className="text-gradient">Projects</span>
        </h2>
        <p className="section-subtitle">
          Data analytics and business intelligence solutions I've built
        </p>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {projects.map((project) => (
            <Link
              key={project.id}
              to={`/project/${project.id}`}
              className="glass-card p-6 group hover:border-primary/60 hover:shadow-md hover:shadow-primary/10 transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-4">
                <div className={`icon-box-lg ${project.iconColor}`}>
                  <project.icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-semibold text-lg group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{project.date}</p>
                </div>
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span key={tech} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Description */}
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Highlights */}
              <ul className="space-y-2 mb-4">
                {project.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-center gap-2 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span className="text-muted-foreground">{highlight}</span>
                  </li>
                ))}
              </ul>



              {/* GitHub Link */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 text-sm font-medium text-muted-foreground border border-transparent transition-all duration-300 group-hover:border-primary hover:bg-primary hover:text-primary-foreground hover:!border-primary">
                <span>Project Details</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
