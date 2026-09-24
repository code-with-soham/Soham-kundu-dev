"use client";

import React from "react";
import { motion } from "motion/react";

const FILTER_OPTIONS = [
  { key: "all", label: "All" },
  { key: "full-stack", label: "Full Stack" },
  { key: "ai", label: "AI / GenAI" },
  { key: "real-time", label: "Real-Time" },
  { key: "systems", label: "Systems" },
  { key: "frontend", label: "Frontend" },
] as const;

interface ProjectFilterProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
  projectCounts: Record<string, number>;
}

export default function ProjectFilter({
  activeFilter,
  onFilterChange,
  projectCounts,
}: ProjectFilterProps) {
  return (
    <div className="w-full overflow-x-auto scrollbar-hide pb-2">
      <div className="flex items-center gap-1 md:gap-2 min-w-max">
        {FILTER_OPTIONS.map((option) => {
          const count =
            option.key === "all"
              ? Object.values(projectCounts).reduce((s, c) => s + c, 0)
              : projectCounts[option.key] || 0;

          if (option.key !== "all" && count === 0) return null;

          const isActive = activeFilter === option.key;

          return (
            <button
              key={option.key}
              onClick={() => onFilterChange(option.key)}
              className={`relative px-4 py-2 font-technical text-[10px] md:text-xs tracking-widest uppercase transition-colors duration-300 whitespace-nowrap focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--accent-primary)] ${
                isActive
                  ? "text-[var(--text-primary)]"
                  : "text-[var(--text-tertiary)] hover:text-[var(--text-secondary)]"
              }`}
            >
              {option.label}
              <span className="ml-1.5 opacity-50">{count}</span>
              {isActive && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-px bg-[var(--accent-primary)]"
                  layoutId="filter-indicator"
                  transition={{ type: "spring", stiffness: 500, damping: 35 }}
                />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
