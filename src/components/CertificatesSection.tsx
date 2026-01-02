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

const CertificateCard = ({ cert, className = '' }: { cert: typeof certificates[0]; className?: string }) => (
  <div className={`glass-card p-4 md:p-6 group hover:border-primary/30 transition-all duration-300 flex flex-col items-center text-center ${className}`}>
    <div className={`icon-box-lg mb-4 ${cert.color} hidden md:flex`}>
      <Award className="w-6 h-6" />
    </div>

    <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors text-sm md:text-base">
      {cert.title}
    </h3>

    <p className="text-primary text-xs md:text-sm font-medium mb-2 md:mb-3">{cert.issuer}</p>

    <div className="flex items-center justify-center gap-1 text-xs md:text-sm text-muted-foreground mb-3 md:mb-4">
      <Calendar className="w-3 h-3 md:w-4 md:h-4" />
      <span>{cert.date}</span>
    </div>

    <div className="mt-auto">
      <a
        href={cert.link}
        className="inline-block rounded-full border border-white/20 px-4 py-1.5 md:px-6 md:py-2 text-xs md:text-sm text-white hover:bg-white/10 transition-colors"
      >
        View Certificate
      </a>
    </div>
  </div>
);

const CertificatesSection = () => {
  // Pivot certificates for mobile (chunks of 3)
  const mobileChunks = [];
  for (let i = 0; i < certificates.length; i += 3) {
    mobileChunks.push(certificates.slice(i, i + 3));
  }

  return (
    <section id="certificates" className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        {/* Stats */}


        <h2 className="section-title">
          <span className="text-gradient">Certificates</span>
        </h2>
        <p className="section-subtitle hidden md:block">
          Professional certifications and credentials
        </p>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
          {certificates.map((cert) => (
            <CertificateCard key={cert.title} cert={cert} className="h-full" />
          ))}
        </div>

        {/* Mobile Horizontal Scroll (Groups of 3) */}
        <div className="md:hidden flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-4 mb-16 pb-4">
          {mobileChunks.map((chunk, index) => (
            <div key={index} className="min-w-[80vw] flex flex-col gap-4 snap-center">
              {chunk.map((cert) => (
                <CertificateCard key={cert.title} cert={cert} />
              ))}
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
