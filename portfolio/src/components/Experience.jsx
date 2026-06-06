import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi';
import { SiPython, SiReact } from 'react-icons/si';

const experiences = [
  {
    role: 'Data Science Intern',
    company: 'Inspire AI',
    location: 'Bangalore',
    period: 'Jun 2024 – Aug 2024',
    color: '#38BDF8',
    icon: SiPython,
    points: [
      'Worked on comprehensive data cleaning and exploratory analysis pipelines',
      'Built ML models including regression and classification algorithms',
      'Utilized Power BI & Matplotlib for advanced data visualization',
      'Created interactive dashboards for business intelligence reporting',
    ],
    tags: ['Python', 'Machine Learning', 'Power BI', 'Matplotlib', 'SQL'],
  },
  {
    role: 'Full Stack Developer Intern',
    company: 'Inspire AI',
    location: 'Bangalore',
    period: 'Sep 2024 – Nov 2024',
    color: '#0EA5E9',
    icon: SiReact,
    points: [
      'Built fully responsive web applications from scratch',
      'Developed RESTful APIs using React, Node.js and Express.js',
      'Integrated third-party APIs and managed database operations',
      'Collaborated in agile sprints with cross-functional teams',
    ],
    tags: ['React', 'Node.js', 'Express', 'REST API', 'MongoDB'],
  },
];

function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`
    : '255,255,255';
}

function ExperienceCard({ exp, i, inView }) {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.96 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ type: 'spring', stiffness: 50, damping: 15, delay: i * 0.15 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="glass-card p-8 max-md:p-5 group hover:scale-[1.01] transition-all duration-300 relative overflow-hidden"
      style={{
        boxShadow: isHovered 
          ? `0 15px 30px rgba(${hexToRgb(exp.color)}, 0.12), inset 0 1px 0 rgba(255,255,255,0.05)` 
          : '0 4px 20px rgba(0,0,0,0.1)'
      }}
    >
      {/* Left accent bar */}
      <div
        className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl transition-all duration-300 group-hover:w-1.5"
        style={{ background: exp.color }}
      />

      {/* Spotlight Hover Glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"
        style={{
          background: `radial-gradient(200px circle at ${coords.x}px ${coords.y}px, rgba(${hexToRgb(exp.color)}, 0.12), transparent 80%)`
        }}
      />

      {/* Floating internal particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30 z-0">
        <div className="absolute w-2 h-2 rounded-full top-6 left-12 float-1" style={{ backgroundColor: exp.color }} />
        <div className="absolute w-1.5 h-1.5 rounded-full bg-white/20 top-20 right-16 float-2" />
        <div className="absolute w-1 h-1 rounded-full bg-white/20 bottom-8 left-1/3 float-3" />
      </div>

      <div className="flex flex-col md:flex-row gap-6 relative z-10">
        {/* Icon */}
        <motion.div
          className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{
            background: `rgba(${hexToRgb(exp.color)}, 0.1)`,
            border: `1px solid rgba(${hexToRgb(exp.color)}, 0.3)`,
          }}
          animate={isHovered ? { rotate: [0, -10, 10, 0], scale: 1.1 } : {}}
          transition={{ duration: 0.5 }}
        >
          <exp.icon style={{ color: exp.color, fontSize: 26 }} />
        </motion.div>

        <div className="flex-1">
          {/* Role & company */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
            <div>
              <h3 className="font-heading font-bold text-xl text-white transition-colors duration-300 group-hover:text-white">
                {exp.role}
              </h3>
              <div className="flex items-center gap-4 mt-1 text-sm text-[rgba(226, 232, 240, 0.5)]">
                <div className="flex items-center gap-1">
                  <FiBriefcase style={{ color: exp.color }} />
                  <span style={{ color: exp.color }} className="font-semibold">
                    {exp.company}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <FiMapPin className="text-xs" />
                  {exp.location}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full glass-card text-xs font-mono border-white/5 bg-white/[0.02]">
              <FiCalendar style={{ color: exp.color, fontSize: 11 }} />
              <span className="text-[rgba(226, 232, 240, 0.6)]">{exp.period}</span>
            </div>
          </div>

          {/* Points */}
          <ul className="space-y-2 mb-5">
            {exp.points.map((pt, pi) => (
              <motion.li
                key={pi}
                initial={{ opacity: 0, x: -15 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ type: 'spring', stiffness: 80, damping: 12, delay: i * 0.15 + pi * 0.06 + 0.3 }}
                className="flex items-start gap-2 text-sm text-[rgba(226, 232, 240, 0.7)] hover:text-white transition-colors duration-300"
              >
                <span style={{ color: exp.color }} className="mt-1 text-xs">▸</span>
                {pt}
              </motion.li>
            ))}
          </ul>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {exp.tags.map((tag, ti) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ type: 'spring', stiffness: 100, damping: 10, delay: i * 0.15 + ti * 0.04 + 0.6 }}
                whileHover={{ 
                  scale: 1.06, 
                  y: -2,
                  boxShadow: `0 4px 12px rgba(${hexToRgb(exp.color)}, 0.3)`
                }}
                className="px-3 py-1 rounded-md text-xs font-mono transition-all duration-300 cursor-default"
                style={{
                  background: `rgba(${hexToRgb(exp.color)}, 0.08)`,
                  border: `1px solid rgba(${hexToRgb(exp.color)}, 0.25)`,
                  color: exp.color,
                }}
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="experience" className="py-28 relative overflow-hidden bg-transparent">
      <div
        className="gradient-orb w-96 h-96 bg-[rgba(56,189,248,0.06)] top-1/2 left-0"
        style={{ position: 'absolute', transform: 'translateY(-50%)' }}
      />

      <div ref={ref} className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-14"
        >
          <h2 className="font-heading font-bold text-4xl md:text-5xl section-title">
            <span className="text-white">Work</span>
            <span className="gradient-text-blue ml-3">Experience</span>
          </h2>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <ExperienceCard key={exp.role} exp={exp} i={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
