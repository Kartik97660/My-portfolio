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

            // Easing function for smooth animation
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);

            setCount(Math.floor(easeOutQuart * end));

            if (progress < 1) {
              window.requestAnimationFrame(step);
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
    duration: 1000,
    title: 'Years Experience',
    description: 'In sales, marketing execution, and analytics-driven decision support',
  },
  {
    value: 10,
    suffix: '+',
    duration: 1000,
    title: 'Technical Skills',
    description: 'Python, SQL, Power BI, Excel, Tableau, Azure, and more',
  },
  {
    value: 4,
    suffix: '+',
    duration: 1000,
    title: 'Data Projects',
    description: 'End-to-end analytics solutions with Power BI and SQL',
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        {/* Highlight Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {highlights.map((item) => (
            <div key={item.title} className="glass-card p-6 group flex flex-col items-center text-center">
              <span className="text-4xl font-display font-bold text-primary">
                <CountUp end={item.value} suffix={item.suffix} duration={item.duration} />
              </span>
              <h3 className="text-lg font-semibold mt-3 mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
