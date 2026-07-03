"use client";

const projects = [
  {
    name: "Sysbot",
    role: "Developer",
    year: "2026",
    description: "An AI-powered career platform designed to help users plan career paths, generate custom learning roadmaps, and practice chat and voice-based mock interview simulations with real-time feedback.",
    stack: ["React", "Python", "Flask", "Pandas", "NumPy"]
  },
  {
    name: "CollabFlow",
    role: "Developer",
    year: "2025",
    description: "A web-based document collaboration workspace allowing multiple users to simultaneously edit files in real time. Features live editing synchronization, document version tracking, and active presence logs.",
    stack: ["React", "Node.js", "Express", "MongoDB"]
  },
  {
    name: "Blood Bank Management",
    role: "Developer",
    year: "2025",
    description: "A secure medical database application created to coordinate blood donor registration, track real-time group inventories, and dispatch supply requests across hospital network channels.",
    stack: ["HTML", "CSS", "JavaScript", "SQL"]
  }
];

export default function Projects() {
  return (
    <div className="grid grid-cols-1 gap-6 w-full font-sans">
      {projects.map((project) => (
        <div
          key={project.name}
          className="flex flex-col p-5 rounded-2xl border border-portfolio-border bg-portfolio-card hover:shadow-[0_4px_20px_rgba(244,114,182,0.06)] transition-all duration-300 relative overflow-hidden group"
        >
          {/* Header Row */}
          <div className="flex justify-between items-baseline gap-4 mb-2">
            <h3 className="text-base font-semibold text-portfolio-text flex items-center gap-1.5">
              {project.name}
            </h3>
            <span className="font-mono text-[10px] uppercase tracking-wider text-portfolio-muted">
              {project.year}
            </span>
          </div>

          {/* Description */}
          <p className="text-xs md:text-sm text-portfolio-muted leading-relaxed font-normal mb-4">
            {project.description}
          </p>

          {/* Stack Pills */}
          <div className="flex flex-wrap gap-1.5 mt-auto">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="text-[9px] font-mono font-medium text-portfolio-accent bg-portfolio-accent/5 border border-portfolio-accent/15 px-2 py-0.5 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
