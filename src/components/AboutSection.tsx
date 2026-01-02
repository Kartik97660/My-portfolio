import { useEffect, useState, useRef } from 'react';

const CountUp = ({ end, duration = 2000, suffix = '' }: { end: number; duration?: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let startTimestamp: number | null = null;
          const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);

            if (progress < 1) {
              setCount(Math.floor(Math.random() * 100));
              window.requestAnimationFrame(step);
            } else {
              setCount(end);
            }
          };
          window.requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const highlights = [
  {
    value: 2,
    suffix: '+',
    duration: 700,
    title: 'Years Experience',
    description: 'In sales, marketing execution, and analytics-driven decision support',
  },
  {
    value: 10,
    suffix: '+',
    duration: 700,
    title: 'Technical Skills',
    description: 'Python, SQL, Power BI, Excel, Tableau, Azure, and Gen AI tools',
  },
  {
    value: 14,
    suffix: '+',
    duration: 700,
    title: 'Projects',
    description: 'End-to-end Projects in Analytics & Gen AI ',
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        {/* Highlight Cards */}
        <div className="grid grid-cols-3 gap-3 md:gap-6 max-w-5xl mx-auto">
          {highlights.map((item) => (
            <div key={item.title} className="glass-card p-2 md:p-6 group flex flex-col items-center text-center">
              <span className="text-xl md:text-4xl font-display font-bold text-primary">
                <CountUp end={item.value} suffix={item.suffix} duration={item.duration} />
              </span>
              <h3 className="text-xs md:text-lg font-semibold mt-1 md:mt-3 mb-1 md:mb-2 leading-tight">{item.title}</h3>
              <p className="text-[10px] md:text-sm text-muted-foreground mb-1 md:mb-4 hidden md:block">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
