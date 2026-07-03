"use client";

const experiences = [
  {
    company: "Infinity Code Nexus",
    role: "Software Engineer Intern",
    period: "May 2025 – Nov 2025",
    description: "Worked on full-stack systems, building interactive admin interfaces and dynamic frontend dashboards. Refactored database query logic to improve search retrieval times and optimize overall application performance. Collaborated closely with engineering team leads to plan sprint cycles and align product features with business goals."
  },
  {
    company: "Edunet Foundation",
    role: "MERN Developer Intern",
    period: "Mar 2025 – Apr 2025",
    description: "Developed a real-time web application using the MERN stack (MongoDB, Express, React, Node.js) allowing simultaneous collaborative document editing. Implemented instant updates and real-time user presence indicators using persistent connection logic. Utilized MongoDB to maintain document states, persist changes, and secure version history records."
  }
];

export default function Experience() {
  return (
    <div className="flex flex-col gap-8 w-full font-sans">
      {experiences.map((exp) => (
        <div key={exp.company} className="flex flex-col gap-2">
          {/* Header Row */}
          <div className="flex justify-between items-baseline gap-4">
            <h3 className="text-sm font-semibold text-portfolio-text">
              {exp.company} <span className="text-portfolio-muted font-normal">/ {exp.role}</span>
            </h3>
            <span className="font-mono text-[11px] text-portfolio-muted shrink-0">
              {exp.period}
            </span>
          </div>

          {/* Description Paragraph */}
          <p className="text-xs md:text-sm text-portfolio-muted/95 leading-relaxed font-normal">
            {exp.description}
          </p>
        </div>
      ))}
    </div>
  );
}
