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
          <span className="text-foreground">Education</span>
        </h2>
        <p className="section-subtitle">
          My academic journey and qualifications
        </p>

        <div className="max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <div key={edu.degree} className="relative flex gap-6 md:gap-10 mb-8 last:mb-0">
              {/* Timeline */}
              <div className="flex flex-col items-center">
                <div className="timeline-dot flex-shrink-0" />
                {index < education.length - 1 && (
                  <div className="w-px flex-1 bg-gradient-to-b from-primary/50 to-primary/10 mt-3" />
                )}
              </div>

              {/* Card */}
              <div className="flex-1 glass-card p-6 md:p-8">
                {/* Header Row - Status & GPA */}
                <div className="flex items-center justify-between mb-5">
                  <span className={`px-3 py-1 rounded-md text-xs font-semibold ${
                    edu.status === 'Current' 
                      ? 'bg-primary/20 text-primary' 
                      : 'bg-muted text-muted-foreground'
                  }`}>
                    {edu.status}
                  </span>
                  <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                    <Award className="w-4 h-4 text-primary" />
                    <span>GPA: {edu.gpa}</span>
                  </div>
                </div>

                {/* Degree & Institution */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="icon-box-lg bg-primary/20 text-primary flex-shrink-0">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg md:text-xl">{edu.degree}</h3>
                    <p className="text-primary font-medium mt-1">{edu.institution}</p>
                  </div>
                </div>

                {/* Location & Period */}
                <div className="flex flex-wrap items-center gap-4 mb-5 text-sm text-muted-foreground ml-0 md:ml-16">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4" />
                    {edu.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    {edu.period}
                  </span>
                </div>

                {/* Highlights */}
                <ul className="space-y-2.5 ml-0 md:ml-16">
                  {edu.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
