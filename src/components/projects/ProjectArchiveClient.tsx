"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import ProjectFilter from "@/components/ui/ProjectFilter";
import ProjectPoster from "@/components/ui/ProjectPoster";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import type { Project } from "@/types/project";

interface ProjectArchiveClientProps {
  projects: Project[];
}

export default function ProjectArchiveClient({ projects }: ProjectArchiveClientProps) {
  const [activeFilter, setActiveFilter] = useState("all");

  const projectCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    projects.forEach((p) => {
      counts[p.filterCategory] = (counts[p.filterCategory] || 0) + 1;
    });
    return counts;
  }, [projects]);

  const filtered = useMemo(() => {
    if (activeFilter === "all") return projects;
    return projects.filter((p) => p.filterCategory === activeFilter);
  }, [activeFilter, projects]);

  const featured = filtered.filter((p) => p.visibility === "featured");
  const selected = filtered.filter(
    (p) => p.visibility === "all" && p.status !== "in-progress"
  );
  const experimental = filtered.filter(
    (p) => p.visibility === "all" && p.status === "in-progress"
  );

  return (
    <div>
      {/* Filter Bar */}
      <div className="mb-16 md:mb-24 border-b border-[var(--border-subtle)] pb-4">
        <ProjectFilter
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
          projectCounts={projectCounts}
        />
      </div>

      {/* ── FEATURED ── */}
      {featured.length > 0 && (
        <div className="mb-24 md:mb-40">
          <div className="font-technical text-[10px] tracking-widest uppercase text-[var(--text-tertiary)] mb-8 flex items-center gap-4">
            <span>FEATURED PROJECTS</span>
            <div className="h-px flex-grow bg-[var(--border-default)]" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {featured.map((project, index) => (
              <RevealOnScroll key={project.slug} delay={index * 0.1}>
                <FeaturedCard project={project} index={index} />
              </RevealOnScroll>
            ))}
          </div>
        </div>
      )}

      {/* ── SELECTED ── */}
      {selected.length > 0 && (
        <div className="mb-24 md:mb-40">
          <div className="font-technical text-[10px] tracking-widest uppercase text-[var(--text-tertiary)] mb-8 flex items-center gap-4">
            <span>SELECTED WORK</span>
            <div className="h-px flex-grow bg-[var(--border-default)]" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {selected.map((project, index) => (
              <RevealOnScroll key={project.slug} delay={index * 0.08}>
                <CompactCard project={project} />
              </RevealOnScroll>
            ))}
          </div>
        </div>
      )}

      {/* ── EXPERIMENTAL ── */}
      {experimental.length > 0 && (
        <div>
          <div className="font-technical text-[10px] tracking-widest uppercase text-[var(--text-tertiary)] mb-8 flex items-center gap-4">
            <span>EXPERIMENTAL / EARLY-STAGE</span>
            <div className="h-px flex-grow bg-[var(--border-default)]" />
          </div>

          <div className="flex flex-col divide-y divide-[var(--border-subtle)]">
            {experimental.map((project, index) => (
              <RevealOnScroll key={project.slug} delay={index * 0.05}>
                <ListEntry
                  project={project}
                  index={featured.length + selected.length + index}
                />
              </RevealOnScroll>
            ))}
          </div>
        </div>
      )}

      {filtered.length === 0 && (
        <div className="py-24 text-center font-technical text-sm text-[var(--text-tertiary)] uppercase tracking-widest">
          No projects match the selected filter.
        </div>
      )}
    </div>
  );
}

// ── Featured Card ───────────────────────────────────────────

function FeaturedCard({ project, index }: { project: Project; index: number }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="block group"
      data-cursor="VIEW CASE STUDY"
    >
      {/* Image */}
      <div className="relative w-full aspect-[16/10] overflow-hidden bg-[var(--bg-secondary)] border border-[var(--border-subtle)] group-hover:border-[var(--border-hover)] transition-colors duration-500 mb-6">
        {project.poster ? (
          <Image
            src={project.poster}
            alt={project.title}
            fill
            className="object-contain object-center transform transition-transform duration-700 group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        ) : (
          <ProjectPoster
            title={project.title}
            category={project.category}
            year={project.year}
            tech={project.techStack}
            filterCategory={project.filterCategory}
          />
        )}
      </div>

      {/* Meta */}
      <div className="flex items-center gap-4 mb-3 font-technical text-[10px] tracking-widest uppercase text-[var(--text-tertiary)]">
        <span>0{index + 1}</span>
        <span className="w-6 h-px bg-[var(--border-default)]" />
        <span>{project.year}</span>
        <span className="w-6 h-px bg-[var(--border-default)]" />
        <span>{project.category}</span>
      </div>

      {/* Title */}
      <h3 className="font-serif text-3xl md:text-4xl text-[var(--text-primary)] mb-3 transition-transform duration-300 group-hover:translate-x-1">
        {project.title}
      </h3>

      {/* Description */}
      <p className="text-[var(--text-secondary)] text-sm md:text-base leading-relaxed mb-4 line-clamp-2">
        {project.shortDescription}
      </p>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.techStack.slice(0, 4).map((tech) => (
          <span
            key={tech}
            className="font-technical text-[9px] border border-[var(--border-subtle)] px-2 py-0.5 text-[var(--text-tertiary)] uppercase"
          >
            {tech}
          </span>
        ))}
        {project.techStack.length > 4 && (
          <span className="font-technical text-[9px] px-1 text-[var(--text-tertiary)]">
            +{project.techStack.length - 4}
          </span>
        )}
      </div>

      {/* Arrow */}
      <span className="font-technical text-xs tracking-widest uppercase text-[var(--text-secondary)] group-hover:text-[var(--accent-primary)] transition-colors duration-300 flex items-center gap-2">
        Case Study
        <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </span>
    </Link>
  );
}

// ── Compact Card ────────────────────────────────────────────

function CompactCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="block group"
      data-cursor="VIEW CASE STUDY"
    >
      {/* Image */}
      <div className="relative w-full aspect-[4/3] overflow-hidden bg-[var(--bg-secondary)] border border-[var(--border-subtle)] group-hover:border-[var(--border-hover)] transition-colors duration-500 mb-4">
        {project.poster ? (
          <Image
            src={project.poster}
            alt={project.title}
            fill
            className="object-contain object-center transform transition-transform duration-700 group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        ) : (
          <ProjectPoster
            title={project.title}
            category={project.category}
            year={project.year}
            tech={project.techStack}
            filterCategory={project.filterCategory}
          />
        )}
      </div>

      {/* Meta */}
      <div className="font-technical text-[9px] tracking-widest uppercase text-[var(--text-tertiary)] mb-2">
        {project.year} — {project.category}
      </div>

      <h3 className="font-serif text-xl md:text-2xl text-[var(--text-primary)] mb-2 transition-transform duration-300 group-hover:translate-x-1">
        {project.title}
      </h3>

      <p className="text-[var(--text-secondary)] text-sm leading-relaxed line-clamp-2 mb-3">
        {project.shortDescription}
      </p>

      <span className="font-technical text-[10px] tracking-widest uppercase text-[var(--text-tertiary)] group-hover:text-[var(--accent-primary)] transition-colors duration-300 flex items-center gap-1">
        View
        <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </span>
    </Link>
  );
}

// ── List Entry (Experimental) ───────────────────────────────

function ListEntry({ project, index }: { project: Project; index: number }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="flex flex-col md:flex-row md:items-center justify-between py-6 md:py-8 group"
      data-cursor="VIEW"
    >
      <div className="flex items-center gap-6">
        <span className="font-technical text-xs text-[var(--text-tertiary)] tracking-widest w-6">
          {String(index + 1).padStart(2, "0")}
        </span>

        <div>
          <h3 className="font-serif text-xl md:text-2xl text-[var(--text-primary)] transition-transform duration-300 group-hover:translate-x-2">
            {project.title}
          </h3>
          <p className="text-[var(--text-secondary)] text-sm mt-1">
            {project.shortDescription}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-6 mt-3 md:mt-0 pl-12 md:pl-0">
        <span className="font-technical text-[9px] tracking-widest uppercase text-[var(--text-tertiary)]">
          {project.year}
        </span>
        <span className="font-technical text-[9px] px-2 py-0.5 border border-[var(--accent-primary)]/30 text-[var(--accent-primary)] uppercase tracking-widest">
          {project.status === "in-progress" ? "IN PROGRESS" : project.status.toUpperCase()}
        </span>
        <span className="text-[var(--text-tertiary)] group-hover:text-[var(--accent-primary)] transition-all duration-300 group-hover:translate-x-1">
          →
        </span>
      </div>
    </Link>
  );
}
