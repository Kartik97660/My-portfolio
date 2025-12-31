import { Code, Globe, BarChart3, Database, Cloud } from 'lucide-react';

const skillCategories = [
  {
    title: 'Languages',
    icon: Code,
    color: 'bg-blue-500/20 text-blue-400',
    skills: ['Python', 'SQL', 'DAX'],
  },
  {
    title: 'Frameworks & Libraries',
    icon: Globe,
    color: 'bg-amber-500/20 text-amber-400',
    skills: ['Pandas', 'NumPy', 'Scikit-Learn', 'TensorFlow', 'LangChain', 'Hugging Face', 'n8n'],
  },
  {
    title: 'BI & Analytics Tools',
    icon: BarChart3,
    color: 'bg-emerald-500/20 text-emerald-400',
    skills: ['Power BI', 'Tableau', 'Excel (Advanced)', 'PowerPoint'],
  },
  {
    title: 'Databases',
    icon: Database,
    color: 'bg-purple-500/20 text-purple-400',
    skills: ['MySQL', 'Google Colab', 'Fabric'],
  },
  {
    title: 'Cloud Platforms',
    icon: Cloud,
    color: 'bg-cyan-500/20 text-cyan-400',
    skills: ['Azure ML', 'Azure Synapse', 'Jupyter Notebook'],
  },
];

const softSkills = [
  'Analytical Thinking',
  'Problem Structuring',
  'Stakeholder Communication',
  'Data Storytelling',
  'Requirement Elicitation',
  'Business Acumen',
  'Critical Questioning',
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <h2 className="section-title">
          Technical <span className="text-gradient">Skills</span>
        </h2>
        <p className="section-subtitle">
          Technologies and tools I work with to deliver data-driven solutions
        </p>

        {/* Technical Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
          {skillCategories.map((category) => (
            <div key={category.title} className="glass-card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className={`icon-box ${category.color}`}>
                  <category.icon className="w-5 h-5" />
                </div>
                <h3 className="font-semibold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Soft Skills */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-xl font-display font-semibold text-center mb-6">Soft Skills</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {softSkills.map((skill) => (
              <span key={skill} className="skill-tag bg-muted/50">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
