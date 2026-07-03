"use client";

const experiences = [
  {
    company: "Infinity Code Nexus",
    role: "Software Engineer Intern",
    period: "May – Nov 2025",
    description: "Worked on full-stack systems, building interactive admin interfaces and dynamic frontend dashboards. Refactored database query logic to improve search retrieval times and optimize overall application performance. Collaborated closely with engineering team leads to plan sprint cycles and align product features with business goals."
  },
  {
    company: "Edunet Foundation",
    role: "MERN Developer Intern",
    period: "Mar – Apr 2025",
    description: "Developed a real-time web application using the MERN stack (MongoDB, Express, React, Node.js) allowing simultaneous collaborative document editing. Implemented instant updates and real-time user presence indicators using persistent connection logic. Utilized MongoDB to maintain document states, persist changes, and secure version history records."
  }
];

export default function Experience() {
  return (
    <div className="flex flex-col gap-6 w-full font-sans">
      {experiences.map((exp) => (
        <div key={exp.company} className="flex flex-col gap-2">
          {/* Header Line */}
          <div className="flex justify-between items-baseline gap-4 flex-wrap">
            <h3 className="text-[14px] font-semibold text-portfolio-text">
              {exp.company} <span className="text-portfolio-accent font-medium">/ {exp.role}</span>
            </h3>
            <span className="font-mono text-[10px] uppercase tracking-wider text-portfolio-muted">
              {exp.period}
            </span>
          </div>

          {/* Description */}
          <p className="text-xs md:text-sm text-portfolio-muted leading-relaxed font-normal">
            {exp.description}
          </p>
        </div>
      ))}
    </div>
  );
}
