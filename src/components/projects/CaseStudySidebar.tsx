import React from "react";
import type { Project } from "@/types/project";

interface CaseStudySidebarProps {
  project: Project;
}

export default function CaseStudySidebar({ project }: CaseStudySidebarProps) {
  const githubLink = project.links.find((l) => l.type === "github");
  const liveLink = project.links.find((l) => l.type === "live");

  return (
    <aside className="lg:sticky lg:top-32 space-y-8">
      {/* Year */}
      <div>
        <div className="font-technical text-[10px] text-[var(--text-tertiary)] uppercase tracking-widest mb-2">
          Year
        </div>
        <div className="font-technical text-sm text-[var(--text-primary)] tracking-wider">
          {project.year}
        </div>
      </div>

      {/* Type */}
      <div>
        <div className="font-technical text-[10px] text-[var(--text-tertiary)] uppercase tracking-widest mb-2">
          Type
        </div>
        <div className="font-technical text-sm text-[var(--text-primary)] uppercase tracking-wider">
          {project.category}
        </div>
      </div>

      {/* Status */}
      <div>
        <div className="font-technical text-[10px] text-[var(--text-tertiary)] uppercase tracking-widest mb-2">
          Status
        </div>
        <div className="font-technical text-sm text-[var(--text-primary)] uppercase tracking-wider flex items-center gap-2">
          <span
            className={`w-1.5 h-1.5 rounded-full ${
              project.status === "completed"
                ? "bg-green-500"
                : "bg-[var(--accent-primary)] animate-pulse"
            }`}
          />
          {project.status === "in-progress" ? "In Progress" : "Completed"}
        </div>
      </div>

      {/* Stack */}
      {project.techStack.length > 0 && (
        <div>
          <div className="font-technical text-[10px] text-[var(--text-tertiary)] uppercase tracking-widest mb-3">
            Stack
          </div>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 border border-[var(--border-subtle)] font-technical text-[9px] uppercase tracking-wider text-[var(--text-secondary)]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Links */}
      {(githubLink || liveLink) && (
        <div>
          <div className="font-technical text-[10px] text-[var(--text-tertiary)] uppercase tracking-widest mb-3">
            Links
          </div>
          <div className="flex flex-col gap-2">
            {githubLink && (
              <a
                href={githubLink.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-technical text-xs tracking-wider text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors duration-300 flex items-center gap-2 group"
              >
                GitHub
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            )}
            {liveLink && (
              <a
                href={liveLink.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-technical text-xs tracking-wider text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors duration-300 flex items-center gap-2 group"
              >
                Live Demo
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            )}
          </div>
        </div>
      )}
    </aside>
  );
}
