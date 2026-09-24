import React from "react";

interface ProjectPlaceholderProps {
  title: string;
  category: string;
  year: string;
  tech: string[];
}

export default function ProjectPlaceholder({ title, category, year, tech }: ProjectPlaceholderProps) {
  return (
    <div className="w-full h-full min-h-[400px] bg-[var(--bg-secondary)] border border-[var(--border-subtle)] relative overflow-hidden group-hover:border-[var(--border-hover)] transition-colors duration-500">
      {/* Decorative Grid */}
      <svg className="absolute inset-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="gridPattern" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#gridPattern)" />
      </svg>
      
      {/* Editorial Content */}
      <div className="absolute inset-0 flex flex-col justify-between p-8 md:p-12 z-10">
        <div className="flex justify-between items-start font-technical text-xs tracking-widest uppercase text-[var(--text-tertiary)]">
          <span>FIG. {year}</span>
          <span className="text-right max-w-[50%]">{category}</span>
        </div>
        
        <div>
          <h3 className="font-serif text-3xl md:text-5xl text-[var(--text-secondary)] leading-tight opacity-50 group-hover:opacity-80 transition-opacity duration-500">
            {title}
          </h3>
          <div className="mt-8 flex flex-wrap gap-2">
            {tech.slice(0, 4).map((t, i) => (
              <span key={i} className="px-3 py-1 border border-[var(--border-subtle)] font-technical text-[10px] uppercase text-[var(--text-tertiary)]">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
