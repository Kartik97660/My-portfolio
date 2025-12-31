import { GraduationCap, MapPin, Calendar, Award } from 'lucide-react';

const education = [
  {
    degree: 'Master of Business Administration',
    institution: 'Symbiosis Institute of Business Management',
    location: 'Nagpur, India',
    period: 'June 2024 - June 2026',
    gpa: '8.3',
    status: 'Current',
    highlights: [
      'Specialization in Business Analytics',
      'Focus on data-driven decision making',
      'Cross-functional management training',
    ],
  },
  {
    degree: 'Bachelor of Engineering - Mechanical',
    institution: 'S.B. Jain Institute of Technology',
    location: 'Nagpur, India',
    period: 'June 2017 - August 2021',
    gpa: '8.67',
    status: 'Completed',
    highlights: [
      'Strong foundation in analytical thinking',
      'Technical problem-solving skills',
      'Engineering principles and methodology',
    ],
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <h2 className="section-title">
          <span className="text-gradient">Education</span>
        </h2>
        <p className="section-subtitle">
          My academic journey and qualifications
        </p>

        <div className="max-w-3xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 timeline-line hidden md:block" style={{ height: 'calc(100% - 120px)' }} />

          {education.map((edu, index) => (
            <div key={edu.degree} className="relative mb-8 last:mb-0">
              {/* Timeline Dot */}
              <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-8 timeline-dot hidden md:block" />

              {/* Card */}
              <div className={`ml-0 md:ml-0 ${index % 2 === 0 ? 'md:pr-[52%]' : 'md:pl-[52%]'}`}>
                <div className="glass-card p-6">
                  {/* Status Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      edu.status === 'Current' 
                        ? 'bg-primary/20 text-primary border border-primary/30' 
                        : 'bg-muted text-muted-foreground border border-border'
                    }`}>
                      {edu.status}
                    </span>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Award className="w-4 h-4 text-primary" />
                      <span>GPA: {edu.gpa}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex items-start gap-4">
                    <div className="icon-box-lg bg-primary/20 text-primary hidden sm:flex">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display font-semibold text-lg">{edu.degree}</h3>
                      <p className="text-primary font-medium">{edu.institution}</p>
                      
                      <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {edu.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {edu.period}
                        </span>
                      </div>

                      <ul className="mt-4 space-y-2">
                        {edu.highlights.map((highlight) => (
                          <li key={highlight} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
