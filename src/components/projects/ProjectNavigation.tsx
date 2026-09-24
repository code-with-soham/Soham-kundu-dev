import React from "react";
import Link from "next/link";
import type { Project } from "@/types/project";

interface ProjectNavigationProps {
  prev: Project | null;
  next: Project | null;
}

export default function ProjectNavigation({ prev, next }: ProjectNavigationProps) {
  return (
    <div className="border-t border-[var(--border-default)] pt-12 mt-24">
      <div className="grid grid-cols-3 items-center">
        {/* Previous */}
        <div className="text-left">
          {prev ? (
            <Link
              href={`/projects/${prev.slug}`}
              className="group inline-flex flex-col"
            >
              <span className="font-technical text-[9px] tracking-widest uppercase text-[var(--text-tertiary)] mb-1">
                ← Previous
              </span>
              <span className="font-serif text-lg md:text-xl text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors duration-300 group-hover:-translate-x-1 transform transition-transform">
                {prev.title}
              </span>
            </Link>
          ) : (
            <div />
          )}
        </div>

        {/* Center */}
        <div className="text-center">
          <Link
            href="/projects"
            className="font-technical text-[10px] tracking-widest uppercase text-[var(--text-tertiary)] hover:text-[var(--accent-primary)] transition-colors duration-300"
          >
            All Projects
          </Link>
        </div>

        {/* Next */}
        <div className="text-right">
          {next ? (
            <Link
              href={`/projects/${next.slug}`}
              className="group inline-flex flex-col items-end"
            >
              <span className="font-technical text-[9px] tracking-widest uppercase text-[var(--text-tertiary)] mb-1">
                Next →
              </span>
              <span className="font-serif text-lg md:text-xl text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors duration-300 group-hover:translate-x-1 transform transition-transform">
                {next.title}
              </span>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>
    </div>
  );
}
