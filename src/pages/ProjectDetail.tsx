import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Github, ExternalLink, Calendar, TrendingUp, BarChart3, LineChart, Database } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const projects = {
  'cardekho-analysis': {
    title: 'CarDekho Used Cars Analysis',
    date: 'October 2025',
    icon: TrendingUp,
    iconColor: 'bg-cyan-500/20 text-cyan-400',
    description: 'Built an end-to-end Power BI analytics solution on used car market data, delivering executive, brand, and performance insights across pricing, mileage, power, and seller behavior.',
    fullDescription: `This comprehensive analytics project focuses on the used car market data from CarDekho, one of India's leading automotive marketplaces. The solution provides stakeholders with actionable insights to understand market dynamics, pricing patterns, and seller behaviors.

The dashboard includes multiple views targeting different business needs:
- **Executive Summary**: High-level KPIs and market overview for leadership
- **Brand Analytics**: Deep dive into brand performance and market positioning
- **Pricing Intelligence**: Analysis of pricing factors and value optimization
- **Seller Insights**: Understanding seller patterns and behaviors`,
    highlights: [
      'Executive dashboard with key market metrics and KPIs',
      'Brand performance analysis with market share visualization',
      'Pricing and mileage correlation insights',
      'Seller behavior pattern identification',
      'Interactive filters for dynamic exploration',
      'Automated data refresh pipeline',
    ],
    tech: ['Power BI', 'SQL', 'DAX', 'Python', 'Excel'],
    github: 'https://github.com/Kartik97660',
    challenges: [
      'Handling large dataset with millions of records',
      'Creating intuitive visualizations for non-technical stakeholders',
      'Building efficient DAX measures for complex calculations',
    ],
    outcomes: [
      'Reduced reporting time by 80%',
      'Enabled data-driven pricing decisions',
      'Improved understanding of market trends',
    ],
  },
  'market-analytics': {
    title: 'Market Analytics Dashboard',
    date: 'November 2025',
    icon: BarChart3,
    iconColor: 'bg-emerald-500/20 text-emerald-400',
    description: 'Performed SQL-based data understanding and DAX-driven KPI modeling to analyze brand dominance, transmission trends, fuel usage, and value-for-money trade-offs.',
    fullDescription: `A comprehensive market analytics solution designed to provide deep insights into automotive market dynamics. This project combines SQL data processing with advanced Power BI visualizations to deliver actionable business intelligence.

Key focus areas include:
- **Brand Dominance Analysis**: Understanding which brands lead in different segments
- **Transmission Trends**: Analyzing the shift between manual and automatic vehicles
- **Fuel Usage Patterns**: Exploring fuel efficiency and type preferences
- **Value Metrics**: Calculating and visualizing value-for-money indicators`,
    highlights: [
      'Brand dominance analysis with competitive positioning',
      'Transmission trend visualization across segments',
      'Fuel usage pattern identification',
      'Value-for-money metrics calculation',
      'Segment-wise performance comparison',
      'Time-series trend analysis',
    ],
    tech: ['SQL', 'Power BI', 'DAX', 'Azure Synapse'],
    github: 'https://github.com/Kartik97660',
    challenges: [
      'Integrating data from multiple sources',
      'Creating consistent metrics across dimensions',
      'Optimizing query performance for real-time analysis',
    ],
    outcomes: [
      'Identified key market opportunities',
      'Enabled competitive benchmarking',
      'Supported strategic decision-making',
    ],
  },
  'performance-insights': {
    title: 'Performance Insights System',
    date: 'November 2025',
    icon: LineChart,
    iconColor: 'bg-purple-500/20 text-purple-400',
    description: 'Comprehensive analytics solution focused on performance metrics, providing actionable insights for business decision-making across multiple dimensions.',
    fullDescription: `An enterprise-grade performance management system that tracks, analyzes, and visualizes key performance indicators across multiple business dimensions. Built using modern BI tools and methodologies.

The system provides:
- **KPI Tracking**: Real-time monitoring of critical business metrics
- **Multi-dimensional Analysis**: Drill-down capabilities across various dimensions
- **Insights Generation**: Automated identification of trends and anomalies
- **Decision Support**: Data-driven recommendations for business actions`,
    highlights: [
      'Performance KPI tracking with targets',
      'Multi-dimensional analysis capabilities',
      'Automated insights generation',
      'Business decision support features',
      'Customizable dashboard views',
      'Alert and notification system',
    ],
    tech: ['Power BI', 'Python', 'SQL', 'Pandas'],
    github: 'https://github.com/Kartik97660',
    challenges: [
      'Defining meaningful KPIs for different stakeholders',
      'Building scalable data pipeline',
      'Creating intuitive user experience',
    ],
    outcomes: [
      'Improved operational efficiency',
      'Faster issue identification',
      'Enhanced team performance visibility',
    ],
  },
  'data-intelligence': {
    title: 'Data Intelligence Platform',
    date: 'December 2025',
    icon: Database,
    iconColor: 'bg-amber-500/20 text-amber-400',
    description: 'Advanced data intelligence platform combining multiple data sources for comprehensive market analysis and strategic planning support.',
    fullDescription: `A sophisticated data intelligence platform that aggregates, processes, and analyzes data from multiple sources to provide comprehensive market insights and strategic planning support.

Platform capabilities include:
- **Multi-source Integration**: Seamless data ingestion from various sources
- **Strategic Planning**: Tools for scenario analysis and planning
- **Market Analysis**: Automated market trend identification
- **Interactive Reporting**: Self-service analytics for business users`,
    highlights: [
      'Multi-source data integration pipeline',
      'Strategic planning support tools',
      'Automated market analysis workflows',
      'Interactive reporting capabilities',
      'Predictive analytics features',
      'Data quality management',
    ],
    tech: ['Power BI', 'SQL', 'DAX', 'Excel', 'Python'],
    github: 'https://github.com/Kartik97660',
    challenges: [
      'Ensuring data quality across sources',
      'Building reliable integration pipelines',
      'Creating user-friendly interfaces',
    ],
    outcomes: [
      'Unified data view for decision-makers',
      'Reduced data silos',
      'Improved strategic planning capability',
    ],
  },
};

const ProjectDetail = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const project = projectId ? projects[projectId as keyof typeof projects] : null;

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project not found</h1>
          <Link to="/">
            <Button>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const IconComponent = project.icon;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <Link to="/#projects" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>

          {/* Header */}
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-4 mb-6">
              <div className={`icon-box-lg ${project.iconColor}`}>
                <IconComponent className="w-6 h-6" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-display font-bold">{project.title}</h1>
                <div className="flex items-center gap-2 text-muted-foreground mt-2">
                  <Calendar className="w-4 h-4" />
                  <span>{project.date}</span>
                </div>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tech.map((tech) => (
                <span key={tech} className="tech-badge">
                  {tech}
                </span>
              ))}
            </div>

            {/* Description */}
            <div className="glass-card p-8 mb-8">
              <h2 className="text-xl font-semibold mb-4">Overview</h2>
              <p className="text-muted-foreground whitespace-pre-line leading-relaxed">
                {project.fullDescription}
              </p>
            </div>

            {/* Highlights */}
            <div className="glass-card p-8 mb-8">
              <h2 className="text-xl font-semibold mb-4">Key Features</h2>
              <ul className="space-y-3">
                {project.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Challenges & Outcomes */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="glass-card p-6">
                <h3 className="text-lg font-semibold mb-4">Challenges</h3>
                <ul className="space-y-2">
                  {project.challenges.map((challenge) => (
                    <li key={challenge} className="flex items-start gap-2 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2" />
                      <span className="text-muted-foreground">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="glass-card p-6">
                <h3 className="text-lg font-semibold mb-4">Outcomes</h3>
                <ul className="space-y-2">
                  {project.outcomes.map((outcome) => (
                    <li key={outcome} className="flex items-start gap-2 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2" />
                      <span className="text-muted-foreground">{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-4">
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="gap-2">
                  <Github className="w-4 h-4" />
                  View Code
                </Button>
              </a>
              <Button className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
