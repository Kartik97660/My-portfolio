import { Github, TrendingUp, BarChart3, LineChart, Database, Brain, Workflow, Cpu, PieChart, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import carDekhoIcon from '../../icon/icon.webp';

const categories = [
  {
    id: 'bi',
    title: '1) Business Intelligence',
    description: 'Transforming raw data into meaningful insights for strategic decision-making.',
    projects: [
      {
        id: 'cardekho-analysis',
        title: 'CarDekho Used Cars Analysis',
        date: 'October 2025',
        icon: null,
        iconImage: carDekhoIcon,
        iconColor: 'bg-cyan-500/20 text-cyan-400',
        description: 'Built an end-to-end Power BI analytics solution on used car market data, delivering executive, brand, and performance insights.',
        tech: ['Power BI', 'SQL', 'DAX', 'EXCEL'],
      },
      {
        id: 'revenue-tracker',
        title: 'Revenue Growth Tracker',
        date: 'December 2025',
        icon: PieChart,
        iconColor: 'bg-blue-500/20 text-blue-400',
        description: 'Strategic financial dashboard tracking revenue streams, profit margins, and year-over-year growth performance.',
        tech: ['Power BI', 'Excel', 'DAX'],
      },
      {
        id: 'logistics-opt',
        title: 'Logistics Optimization',
        date: 'December 2025',
        icon: Activity,
        iconColor: 'bg-orange-500/20 text-orange-400',
        description: 'Supply chain visibility tool monitoring inventory turnover, fleet efficiency, and delivery timelines.',
        tech: ['SQL', 'Python', 'Tableau'],
      },
      {
        id: 'market-analytics',
        title: 'Market Analytics Dashboard',
        date: 'November 2025',
        icon: BarChart3,
        iconColor: 'bg-emerald-500/20 text-emerald-400',
        description: 'SQL-based data understanding and DAX-driven KPI modeling to analyze brand dominance, transmission trends, and fuel usage.',
        tech: ['SQL', 'Power BI', 'DAX'],
      },
      {
        id: 'performance-insights',
        title: 'Performance Insights System',
        date: 'November 2025',
        icon: LineChart,
        iconColor: 'bg-purple-500/20 text-purple-400',
        description: 'Comprehensive analytics solution focused on performance metrics, providing actionable insights across multiple dimensions.',
        tech: ['Power BI', 'Python', 'SQL'],
      },
    ]
  },
  {
    id: 'predictive',
    title: '2) Predictive Analytics',
    description: 'Forecasting future trends and behaviors using statistical algorithms and machine learning techniques.',
    projects: [
      {
        id: 'cardekho-analysis-pred',
        title: 'CarDekho Used Cars Analysis',
        date: 'October 2025',
        icon: null,
        iconImage: carDekhoIcon,
        iconColor: 'bg-cyan-500/20 text-cyan-400',
        description: 'Built an end-to-end Power BI analytics solution on used car market data, delivering executive, brand, and performance insights.',
        tech: ['Power BI', 'SQL', 'DAX', 'EXCEL'],
      },
      {
        id: 'market-analytics-pred',
        title: 'Market Analytics Dashboard',
        date: 'November 2025',
        icon: BarChart3,
        iconColor: 'bg-emerald-500/20 text-emerald-400',
        description: 'SQL-based data understanding and DAX-driven KPI modeling to analyze brand dominance, transmission trends, and fuel usage.',
        tech: ['SQL', 'Power BI', 'DAX'],
      },
      {
        id: 'performance-insights-pred',
        title: 'Performance Insights System',
        date: 'November 2025',
        icon: LineChart,
        iconColor: 'bg-purple-500/20 text-purple-400',
        description: 'Comprehensive analytics solution focused on performance metrics, providing actionable insights across multiple dimensions.',
        tech: ['Power BI', 'Python', 'SQL'],
      },
    ]
  },
  {
    id: 'process',
    title: '3)Process Optimization',
    description: 'Streamlining operations and improving efficiency through data-driven analysis.',
    projects: [
      {
        id: 'cardekho-analysis-proc',
        title: 'CarDekho Used Cars Analysis',
        date: 'October 2025',
        icon: null,
        iconImage: carDekhoIcon,
        iconColor: 'bg-cyan-500/20 text-cyan-400',
        description: 'Built an end-to-end Power BI analytics solution on used car market data, delivering executive, brand, and performance insights.',
        tech: ['Power BI', 'SQL', 'DAX', 'EXCEL'],
      },
      {
        id: 'market-analytics-proc',
        title: 'Market Analytics Dashboard',
        date: 'November 2025',
        icon: BarChart3,
        iconColor: 'bg-emerald-500/20 text-emerald-400',
        description: 'SQL-based data understanding and DAX-driven KPI modeling to analyze brand dominance, transmission trends, and fuel usage.',
        tech: ['SQL', 'Power BI', 'DAX'],
      },
      {
        id: 'performance-insights-proc',
        title: 'Performance Insights System',
        date: 'November 2025',
        icon: LineChart,
        iconColor: 'bg-purple-500/20 text-purple-400',
        description: 'Comprehensive analytics solution focused on performance metrics, providing actionable insights across multiple dimensions.',
        tech: ['Power BI', 'Python', 'SQL'],
      },
    ]
  },
  {
    id: 'gen-ai',
    title: '4) Gen AI',
    description: 'Leveraging Generative AI to create innovative solutions and automate complex tasks.',
    projects: [
      {
        id: 'cardekho-analysis-ai',
        title: 'CarDekho Used Cars Analysis',
        date: 'October 2025',
        icon: null,
        iconImage: carDekhoIcon,
        iconColor: 'bg-cyan-500/20 text-cyan-400',
        description: 'Built an end-to-end Power BI analytics solution on used car market data, delivering executive, brand, and performance insights.',
        tech: ['Power BI', 'SQL', 'DAX', 'EXCEL'],
      },
      {
        id: 'market-analytics-ai',
        title: 'Market Analytics Dashboard',
        date: 'November 2025',
        icon: BarChart3,
        iconColor: 'bg-emerald-500/20 text-emerald-400',
        description: 'SQL-based data understanding and DAX-driven KPI modeling to analyze brand dominance, transmission trends, and fuel usage.',
        tech: ['SQL', 'Power BI', 'DAX'],
      },
      {
        id: 'performance-insights-ai',
        title: 'Performance Insights System',
        date: 'November 2025',
        icon: LineChart,
        iconColor: 'bg-purple-500/20 text-purple-400',
        description: 'Comprehensive analytics solution focused on performance metrics, providing actionable insights across multiple dimensions.',
        tech: ['Power BI', 'Python', 'SQL'],
      },
    ]
  }
];

const ProjectCategory = ({ category }: { category: typeof categories[0] }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const hasHiddenProjects = category.projects.length > 3;

  return (
    <div className="scroll-mt-20" id={category.id}>
      <div className="mb-6">
        <h3 className="text-2xl md:text-3xl font-display font-semibold mb-2">{category.title}</h3>
        <p className="text-muted-foreground text-lg max-w-2xl hidden md:block">{category.description}</p>
      </div>

      {category.projects.length > 0 ? (
        <>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl">
            {category.projects.map((project, index) => (
              <Link
                key={project.id}
                id={project.id}
                to={`/project/${project.id.replace(/-pred|-proc|-ai/, '')}`}
                state={{ returnId: project.id, categoryId: category.id, categoryTitle: category.title }}
                className={`glass-card p-4 md:p-6 group hover:border-primary/60 hover:shadow-md hover:shadow-primary/10 transition-all duration-300 flex flex-col h-full scroll-mt-28 ${index >= 3 && !isExpanded ? 'hidden md:flex' : 'flex'
                  }`}
              >
                {/* Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div className={`icon-box-lg ${project.iconColor} overflow-hidden`}>
                    {project.iconImage ? (
                      <img src={project.iconImage} alt={project.title} className="w-full h-full object-cover" />
                    ) : (
                      project.icon && <project.icon className="w-6 h-6" />
                    )}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-display font-semibold text-lg group-hover:text-primary transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">{project.date}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed flex-grow hidden md:block">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((tech) => (
                    <span key={tech} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>

          {heading_check(hasHiddenProjects) && (
            <div className="mt-6 text-center md:hidden">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="inline-flex items-center justify-center px-6 py-2 text-sm font-medium text-primary border border-primary/20 rounded-full hover:bg-primary/10 transition-colors"
              >
                {isExpanded ? 'Show Less' : 'Show More Projects'}
              </button>
            </div>
          )}
        </>
      ) : (
        <div className="glass-card p-8 text-center border-dashed">
          <p className="text-muted-foreground">Projects coming soon in this category.</p>
        </div>
      )}
    </div>
  );
};

// Helper function to satisfy the requirement check (used inside render, but logic extracted for clarity)
function heading_check(hasHidden: boolean) {
  return hasHidden;
}

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title mb-10">
          <span className="text-gradient">Projects</span>
        </h2>



        <div className="space-y-16">
          {categories.map((category) => (
            <ProjectCategory key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
