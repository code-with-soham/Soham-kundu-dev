import React from "react";
import Image from "next/image";
import Link from "next/link";
import ProjectPoster from "@/components/ui/ProjectPoster";
import type { Project } from "@/types/project";

interface RelatedProjectsProps {
  projects: Project[];
}

export default function RelatedProjects({ projects }: RelatedProjectsProps) {
  if (projects.length === 0) return null;

  return (
    <div className="border-t border-[var(--border-subtle)] pt-16 mt-16">
      <div className="font-technical text-[10px] tracking-widest uppercase text-[var(--text-tertiary)] mb-8 flex items-center gap-4">
        <span>RELATED PROJECTS</span>
        <div className="h-px flex-grow bg-[var(--border-default)]" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="group block"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-[var(--bg-secondary)] border border-[var(--border-subtle)] group-hover:border-[var(--border-hover)] transition-colors duration-500 mb-3">
              {project.poster ? (
                <Image
                  src={project.poster}
                  alt={project.title}
                  fill
                  className="object-contain object-center transition-transform duration-700 group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  loading="lazy"
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

            <div className="font-technical text-[9px] tracking-widest uppercase text-[var(--text-tertiary)] mb-1">
              {project.year} — {project.category}
            </div>
            <h4 className="font-serif text-lg text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors duration-300">
              {project.title}
            </h4>
          </Link>
        ))}
      </div>
    </div>
  );
}
