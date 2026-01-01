import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Github, Calendar, TrendingUp, BarChart3, LineChart, Database, Maximize2, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const projects = {
  'cardekho-analysis': {
    title: 'CarDekho Used Cars Analysis',
    date: 'October 2025',
    icon: TrendingUp,
    iconColor: 'bg-cyan-500/20 text-cyan-400',
    description: 'An end-to-end data analytics case study built using a real-world used car dataset inspired by CarDekho listings.',
    tech: ['Power BI', 'SQL', 'DAX', 'Excel'],
    github: 'https://github.com/Kartik97660',

    // New Content Structure
    projectOverview: `This project is an end-to-end data analytics case study built using a real-world used car dataset inspired by CarDekho listings.
    
    The objective is simple and practical: Understand pricing, performance, usage patterns, and market behavior in the used car ecosystem.`,

    businessQuestions: [
      'Which car models dominate the used car market?',
      'What brands command the highest selling prices?',
      'How do mileage, power, and engine capacity trade off?',
      'Which fuel types show higher vehicle usage?',
      'How do manual vs automatic cars differ in performance?',
      'Who sells more cars — dealers or individuals?',
    ],

    dashboards: [
      {
        title: 'Executive Summary',
        description: [
          'Total cars sold and Average selling price',
          'Average mileage, power, engine capacity',
          'Transmission and seller type split',
          'Built for leadership-style consumption.'
        ],
        image: 'https://github.com/user-attachments/assets/c72972fe-39bc-4b09-bf0b-58628e83705e'
      },
      {
        title: 'Brand Analysis',
        description: [
          'Most & least common car models',
          'Most & least expensive vehicles',
          'Brand-wise selling price comparison',
          'Top & bottom performers by mileage and power',
          'Focused on brand positioning and market dominance.'
        ],
        image: 'https://github.com/user-attachments/assets/89debf01-30fa-437a-8731-79cf4b35a13a'
      },
      {
        title: 'Drive Insights',
        description: [
          'Mileage vs Power (scatter analysis)',
          'Average kilometers driven by fuel type',
          'Driving mode comparison (Manual vs Automatic)',
          'Exposes real-world trade-offs, not marketing claims.'
        ],
        image: 'https://github.com/user-attachments/assets/cb2e9a68-0ccc-4b59-8667-715c3f4bf899'
      }
    ],

    datasetAttributes: [
      'Brand & Model',
      'Selling Price',
      'Mileage',
      'Engine Capacity',
      'Power (BHP)',
      'Fuel Type',
      'Transmission',
      'Seller Type',
      'Kilometers Driven'
    ],

    keyInsights: [
      'Manual cars dominate volume, but automatics show higher power variance.',
      'Luxury brands (Ferrari, Rolls-Royce, Bentley) skew average price heavily.',
      'LPG and Diesel cars tend to have higher average KM driven, indicating usage intensity.',
      'Mileage and power show an inverse relationship beyond a threshold — no free lunch.'
    ]
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

interface Project {
  title: string;
  date: string;
  icon: any;
  iconColor: string;
  description: string;
  fullDescription?: string;
  projectOverview?: string;
  tech: string[];
  github: string;
  highlights?: string[];
  keyInsights?: string[];
  businessQuestions?: string[];
  dashboards?: {
    title: string;
    description: string[];
    image: string;
  }[];
  datasetAttributes?: string[];
  challenges?: string[];
  outcomes?: string[];
}

const ProjectDetail = () => {
  const { projectId } = useParams<{ projectId: string }>();
  // State for image lightbox
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const project = (projectId ? projects[projectId as keyof typeof projects] : null) as Project | null;

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
              <div className="flex-1 flex justify-between items-start gap-4">
                <div>
                  <h1 className="text-3xl md:text-4xl font-display font-bold">{project.title}</h1>
                  <div className="flex items-center gap-2 text-muted-foreground mt-2">
                    <Calendar className="w-4 h-4" />
                    <span>{project.date}</span>
                  </div>
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-white text-white bg-transparent hover:bg-white hover:text-black transition-all duration-300 font-medium text-sm w-fit mt-12 flex-shrink-0"
                >
                  <Github className="w-4 h-4" />
                  View Code
                </a>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tech.map((tech: string) => (
                <span key={tech} className="tech-badge">
                  {tech}
                </span>
              ))}
            </div>

            {/* Project Overview (New or Old) */}
            <div className="glass-card p-8 mb-8">
              <h2 className="text-xl font-semibold mb-4">Project Overview</h2>
              <p className="text-muted-foreground whitespace-pre-line leading-relaxed">
                {project.projectOverview || project.fullDescription}
              </p>
            </div>

            {/* Business Questions (New) */}
            {project.businessQuestions && (
              <div className="glass-card p-8 mb-8">
                <h2 className="text-xl font-semibold mb-4">Key Business Questions Answered</h2>
                <ul className="space-y-3">
                  {project.businessQuestions.map((q: string) => (
                    <li key={q} className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{q}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Dashboards (New) */}
            {project.dashboards && (
              <div className="glass-card p-8 mb-8">
                <h2 className="text-xl font-semibold mb-6">Dashboards Included</h2>
                <div className="space-y-8">
                  {project.dashboards.map((dashboard: any) => (
                    <div key={dashboard.title} className="space-y-4">
                      {/* Grid with Title+Desc on Left, Image on Right */}
                      <div className="grid md:grid-cols-2 gap-6 items-start">
                        <div className="space-y-4">
                          <h3 className="text-lg font-medium text-primary">{dashboard.title}</h3>
                          <ul className="space-y-2">
                            {dashboard.description.map((desc: string) => (
                              <li key={desc} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <span className="w-1.5 h-1.5 rounded-full bg-white/20 mt-2 flex-shrink-0" />
                                <span>{desc}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div
                          className="rounded-lg overflow-hidden border border-white/10 relative group cursor-pointer"
                          onClick={() => setSelectedImage(dashboard.image)}
                        >
                          <img src={dashboard.image} alt={dashboard.title} className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105" />
                          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <div className="bg-background/80 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2 text-sm font-medium">
                              <Maximize2 className="w-4 h-4" />
                              Click to Zoom
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Dataset Attributes (New) */}
            {project.datasetAttributes && (
              <div className="glass-card p-6 mb-8">
                <h2 className="text-xl font-semibold mb-4">Dataset</h2>
                <p className="text-muted-foreground mb-4">Used car listings with attributes like:</p>
                <div className="flex flex-wrap gap-2">
                  {project.datasetAttributes.map((attr: string) => (
                    <span key={attr} className="px-3 py-1.5 rounded-md bg-muted/50 text-sm text-muted-foreground border border-white/5">
                      {attr}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Key Insights (New) or Standard Highlights */}
            {(project.keyInsights || project.highlights) && (
              <div className="glass-card p-8 mb-8">
                <h2 className="text-xl font-semibold mb-4">{project.keyInsights ? 'Key Insights' : 'Key Features'}</h2>
                <ul className="space-y-3">
                  {(project.keyInsights || project.highlights).map((item: string) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Legacy Challenges & Outcomes (Only render if they exist) */}
            {(project.challenges || project.outcomes) && (
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {project.challenges && (
                  <div className="glass-card p-6">
                    <h3 className="text-lg font-semibold mb-4">Challenges</h3>
                    <ul className="space-y-2">
                      {project.challenges.map((challenge: string) => (
                        <li key={challenge} className="flex items-start gap-2 text-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2" />
                          <span className="text-muted-foreground">{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {project.outcomes && (
                  <div className="glass-card p-6">
                    <h3 className="text-lg font-semibold mb-4">Outcomes</h3>
                    <ul className="space-y-2">
                      {project.outcomes.map((outcome: string) => (
                        <li key={outcome} className="flex items-start gap-2 text-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2" />
                          <span className="text-muted-foreground">{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-6 h-6" />
          </button>
          <img
            src={selectedImage}
            alt="Zoomed View"
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;
