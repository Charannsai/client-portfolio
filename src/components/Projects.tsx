"use client";

import { motion } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';

const projects = [
  {
    name: "Sysbot",
    role: "Developer",
    year: "2026",
    description: "An AI-powered career platform designed to help users plan career paths, generate custom learning roadmaps, and practice chat and voice-based interview simulations with real-time feedback.",
    stack: ["React", "Python", "Flask", "Pandas", "NumPy"],
    liveUrl: ""
  },
  {
    name: "CollabFlow",
    role: "Developer",
    year: "2025",
    description: "A web-based document collaboration workspace allowing multiple users to simultaneously edit files in real time. Features live editing synchronization, document version tracking, and active presence logs.",
    stack: ["React", "Node.js", "Express", "MongoDB"],
    liveUrl: ""
  },
  {
    name: "Blood Bank Management",
    role: "Developer",
    year: "2025",
    description: "A secure medical database application created to coordinate blood donor registration, track real-time group inventories, and dispatch supply requests across hospital network channels.",
    stack: ["HTML", "CSS", "JavaScript", "SQL"],
    liveUrl: ""
  }
];

export default function Projects() {
  return (
    <div className="flex flex-col gap-6 w-full font-sans">
      {projects.map((project, index) => (
        <motion.div
          key={project.name}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col p-4 rounded-xl border border-portfolio-border/30 hover:border-portfolio-border bg-portfolio-card/20 hover:bg-portfolio-card/40 transition-all duration-300 group"
        >
          {/* Project Details */}
          <div className="flex justify-between items-start mb-2.5">
            <div className="flex flex-col gap-0.5">
              <h3 className="font-serif text-lg font-medium text-portfolio-text flex items-center gap-1.5">
                {project.name}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex text-portfolio-accent hover:opacity-80 transition-opacity"
                  >
                    <FiArrowUpRight className="w-4 h-4" />
                  </a>
                )}
              </h3>
              <span className="text-[10px] font-mono uppercase tracking-wider text-portfolio-muted">
                {project.role}
              </span>
            </div>
            <span className="font-mono text-xs text-portfolio-muted/80">
              {project.year}
            </span>
          </div>

          <p className="text-xs md:text-sm text-portfolio-muted leading-relaxed font-normal mb-3.5">
            {project.description}
          </p>

          {/* Stacks */}
          <div className="flex flex-wrap items-center gap-1.5">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="text-[9px] font-mono text-portfolio-muted/90 bg-portfolio-card/75 border border-portfolio-border/40 px-2 py-0.5 rounded"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
