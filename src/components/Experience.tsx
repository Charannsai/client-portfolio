"use client";

import { motion } from 'framer-motion';

const experiences = [
  {
    company: "Infinity Code Nexus",
    role: "Software Engineer Intern",
    period: "May 2025 – Nov 2025",
    description: [
      "Worked on full-stack systems, building interactive admin interfaces and dynamic frontend dashboards.",
      "Refactored database query logic to improve search retrieval times and optimize overall application performance.",
      "Collaborated closely with engineering team leads to plan sprint cycles and align product features with business goals."
    ]
  },
  {
    company: "Edunet Foundation",
    role: "MERN Developer Intern",
    period: "Mar 2025 – Apr 2025",
    description: [
      "Developed a real-time web application using the MERN stack (MongoDB, Express, React, Node.js) allowing simultaneous collaborative document editing.",
      "Implemented instant updates and real-time user presence indicators using persistent connection logic.",
      "Utilized MongoDB to maintain document states, persist changes, and secure version history records."
    ]
  }
];

export default function Experience() {
  return (
    <div className="flex flex-col gap-8 w-full font-sans">
      {experiences.map((exp, index) => (
        <motion.div
          key={exp.company}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative pl-6 border-l border-portfolio-border/40 hover:border-portfolio-accent/60 transition-colors group"
        >
          {/* Timeline Node Dot */}
          <span className="absolute left-[-5.5px] top-[7px] w-2.5 h-2.5 rounded-full bg-portfolio-border border border-portfolio-bg group-hover:bg-portfolio-accent transition-colors" />

          {/* Job Details */}
          <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 mb-2">
            <div className="flex flex-wrap items-baseline gap-2">
              <h3 className="font-serif text-lg font-medium text-portfolio-text">
                {exp.company}
              </h3>
              <span className="text-[10px] font-mono uppercase tracking-wider text-portfolio-accent font-semibold bg-portfolio-accent/10 px-2 py-0.5 rounded">
                {exp.role}
              </span>
            </div>
            <span className="font-mono text-xs text-portfolio-muted shrink-0">
              {exp.period}
            </span>
          </div>

          {/* Role Bullets */}
          <ul className="flex flex-col gap-1.5 list-none pl-0">
            {exp.description.map((bullet, idx) => (
              <li key={idx} className="text-xs md:text-sm text-portfolio-muted/90 leading-relaxed flex gap-2">
                <span className="text-portfolio-accent mt-1.5 shrink-0 block w-1.5 h-1.5 rounded-full bg-portfolio-accent" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  );
}
