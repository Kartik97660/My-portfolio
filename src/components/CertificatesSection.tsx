import { Award, Calendar, ExternalLink } from 'lucide-react';

const certificates = [
  {
    title: 'Data Analysis and Visualization Foundations',
    issuer: 'IBM',
    date: 'April 2025',
    color: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
    link: '#',
  },
  {
    title: 'Introduction to Data Analyst',
    issuer: 'IBM',
    date: 'March 2023',
    color: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
    link: '#',
  },
  {
    title: 'Foundations: Data, Data, Everywhere',
    issuer: 'Google',
    date: 'March 2023',
    color: 'bg-green-500/20 text-green-400 border-green-500/30',
    link: '#',
  },
  {
    title: 'Ask Questions to Make Data-Driven Decisions',
    issuer: 'Google',
    date: 'March 2023',
    color: 'bg-green-500/20 text-green-400 border-green-500/30',
    link: '#',
  },
  {
    title: 'Prepare Data for Exploration',
    issuer: 'Google',
    date: 'March 2023',
    color: 'bg-green-500/20 text-green-400 border-green-500/30',
    link: '#',
  },
];

const issuers = [
  { name: 'IBM', color: 'bg-blue-600', textColor: 'text-white' },
  { name: 'Google', color: 'bg-green-600', textColor: 'text-white' },
];

const CertificatesSection = () => {
  return (
    <section id="certificates" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        {/* Stats */}
        <div className="flex justify-center gap-12 mb-8">
          <div className="text-center">
            <span className="text-3xl md:text-4xl font-display font-bold text-primary">5</span>
            <p className="text-sm text-muted-foreground mt-1">Certifications</p>
          </div>
          <div className="text-center">
            <span className="text-3xl md:text-4xl font-display font-bold text-primary">2</span>
            <p className="text-sm text-muted-foreground mt-1">Organizations</p>
          </div>
        </div>

        <h2 className="section-title">
          <span className="text-gradient">Certificates</span>
        </h2>
        <p className="section-subtitle">
          Professional certifications and credentials
        </p>

        {/* Certificates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
          {certificates.map((cert) => (
            <div key={cert.title} className="glass-card p-6 group hover:border-primary/30 transition-all duration-300">
              <div className={`icon-box-lg mb-4 ${cert.color}`}>
                <Award className="w-6 h-6" />
              </div>
              
              <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                {cert.title}
              </h3>
              
              <p className="text-primary text-sm font-medium mb-3">{cert.issuer}</p>
              
              <div className="flex items-center gap-1 text-sm text-muted-foreground mb-4">
                <Calendar className="w-4 h-4" />
                <span>{cert.date}</span>
              </div>
              
              <a
                href={cert.link}
                className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                View Certificate
              </a>
            </div>
          ))}
        </div>

        {/* Certified By */}
        <div className="max-w-xl mx-auto">
          <h3 className="text-lg font-display font-semibold text-center mb-6">Certified By</h3>
          <div className="flex justify-center gap-4">
            {issuers.map((issuer) => (
              <div
                key={issuer.name}
                className="glass-card px-6 py-4 flex items-center gap-3"
              >
                <div className={`w-10 h-10 rounded-lg ${issuer.color} ${issuer.textColor} flex items-center justify-center font-bold text-sm`}>
                  {issuer.name.charAt(0)}
                </div>
                <span className="font-medium">{issuer.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
