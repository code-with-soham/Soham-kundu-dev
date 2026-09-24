
import React from "react";

interface ProjectPosterProps {
  title: string;
  category: string;
  year: string;
  tech: string[];
  filterCategory: string;
  className?: string;
}

/**
 * Deterministic editorial SVG poster for projects without screenshots.
 * Visual identity derives from the project's filterCategory.
 */
export default function ProjectPoster({
  title,
  category,
  year,
  tech,
  filterCategory,
  className = "",
}: ProjectPosterProps) {
  // Deterministic color based on filterCategory
  const themes: Record<string, { accent: string; pattern: string }> = {
    "full-stack": { accent: "#C87941", pattern: "grid" },
    ai: { accent: "#7B68EE", pattern: "neural" },
    "real-time": { accent: "#20B2AA", pattern: "pulse" },
    systems: { accent: "#DC143C", pattern: "flow" },
    frontend: { accent: "#FF8C00", pattern: "blocks" },
  };

  const theme = themes[filterCategory] || themes["full-stack"];

  return (
    <div
      className={`w-full h-full min-h-[300px] relative overflow-hidden bg-[var(--bg-secondary)] ${className}`}
    >
      {/* Background Pattern */}
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          {theme.pattern === "grid" && (
            <pattern
              id={`poster-${title.replace(/\s/g, "")}`}
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke={theme.accent}
                strokeWidth="0.5"
                opacity="0.15"
              />
            </pattern>
          )}
          {theme.pattern === "neural" && (
            <pattern
              id={`poster-${title.replace(/\s/g, "")}`}
              width="80"
              height="80"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="40" cy="40" r="1.5" fill={theme.accent} opacity="0.3" />
              <circle cx="0" cy="0" r="1" fill={theme.accent} opacity="0.2" />
              <circle cx="80" cy="80" r="1" fill={theme.accent} opacity="0.2" />
              <line x1="0" y1="0" x2="40" y2="40" stroke={theme.accent} strokeWidth="0.3" opacity="0.15" />
              <line x1="80" y1="80" x2="40" y2="40" stroke={theme.accent} strokeWidth="0.3" opacity="0.15" />
            </pattern>
          )}
          {theme.pattern === "pulse" && (
            <pattern
              id={`poster-${title.replace(/\s/g, "")}`}
              width="100"
              height="50"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="50" cy="25" r="20" fill="none" stroke={theme.accent} strokeWidth="0.5" opacity="0.12" />
              <circle cx="50" cy="25" r="12" fill="none" stroke={theme.accent} strokeWidth="0.3" opacity="0.1" />
              <circle cx="50" cy="25" r="4" fill="none" stroke={theme.accent} strokeWidth="0.3" opacity="0.08" />
            </pattern>
          )}
          {theme.pattern === "flow" && (
            <pattern
              id={`poster-${title.replace(/\s/g, "")}`}
              width="40"
              height="80"
              patternUnits="userSpaceOnUse"
            >
              <line x1="20" y1="0" x2="20" y2="80" stroke={theme.accent} strokeWidth="0.5" opacity="0.1" />
              <rect x="15" y="20" width="10" height="3" fill={theme.accent} opacity="0.15" rx="1" />
              <rect x="15" y="55" width="10" height="3" fill={theme.accent} opacity="0.1" rx="1" />
            </pattern>
          )}
          {theme.pattern === "blocks" && (
            <pattern
              id={`poster-${title.replace(/\s/g, "")}`}
              width="50"
              height="50"
              patternUnits="userSpaceOnUse"
            >
              <rect x="5" y="5" width="15" height="15" fill="none" stroke={theme.accent} strokeWidth="0.5" opacity="0.12" rx="2" />
              <rect x="30" y="30" width="10" height="10" fill="none" stroke={theme.accent} strokeWidth="0.5" opacity="0.1" rx="1" />
            </pattern>
          )}
        </defs>
        <rect
          width="100%"
          height="100%"
          fill={`url(#poster-${title.replace(/\s/g, "")})`}
        />
      </svg>

      {/* Diagonal accent line */}
      <div
        className="absolute top-0 right-0 w-px h-[140%] origin-top-right"
        style={{
          background: `linear-gradient(to bottom, transparent, ${theme.accent}30, transparent)`,
          transform: "rotate(-30deg)",
        }}
      />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-10 z-10">
        <div className="flex justify-between items-start font-technical text-[10px] tracking-widest uppercase text-[var(--text-tertiary)]">
          <span>FIG. {year}</span>
          <span className="text-right max-w-[55%] leading-relaxed">{category}</span>
        </div>

        <div>
          <h3
            className="font-serif text-2xl md:text-4xl leading-tight opacity-40 group-hover:opacity-70 transition-opacity duration-500"
            style={{ color: theme.accent }}
          >
            {title}
          </h3>
          <div className="mt-6 flex flex-wrap gap-2">
            {tech.slice(0, 4).map((t, i) => (
              <span
                key={i}
                className="px-2 py-0.5 border font-technical text-[9px] uppercase text-[var(--text-tertiary)]"
                style={{ borderColor: `${theme.accent}30` }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
