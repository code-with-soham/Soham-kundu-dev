"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import ProjectPoster from "@/components/ui/ProjectPoster";
import type { Project } from "@/types/project";

interface CaseStudyHeroProps {
  project: Project;
  index: number;
}

export default function CaseStudyHero({ project, index }: CaseStudyHeroProps) {
  return (
    <section className="pt-40 md:pt-48 pb-12 md:pb-16">
      <div className="container-editorial">
        {/* Meta Row */}
        <div className="flex flex-wrap items-center gap-4 mb-8 font-technical text-[10px] tracking-widest uppercase text-[var(--text-tertiary)]">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            PROJECT {String(index + 1).padStart(2, "0")}
          </motion.span>
          <span className="w-6 h-px bg-[var(--border-default)]" />
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {project.category}
          </motion.span>
          <span className="w-6 h-px bg-[var(--border-default)]" />
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {project.year}
          </motion.span>

          {project.status === "in-progress" && (
            <>
              <span className="w-6 h-px bg-[var(--border-default)]" />
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="px-2 py-0.5 border border-[var(--accent-primary)]/40 text-[var(--accent-primary)]"
              >
                IN PROGRESS
              </motion.span>
            </>
          )}
        </div>

        {/* Title */}
        <div className="overflow-hidden mb-6">
          <motion.h1
            className="text-display text-5xl md:text-7xl lg:text-8xl text-[var(--text-primary)]"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {project.title}
          </motion.h1>
        </div>

        {/* Short Description */}
        <motion.p
          className="font-sans text-lg md:text-xl text-[var(--text-secondary)] max-w-3xl leading-relaxed mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {project.shortDescription}
        </motion.p>

        {/* Hero Visual */}
        <motion.div
          className="w-full aspect-[16/9] md:aspect-[16/8] relative overflow-hidden bg-[var(--bg-secondary)] border border-[var(--border-subtle)]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {project.poster ? (
            <Image
              src={project.poster}
              alt={project.title}
              fill
              className="object-contain object-center"
              sizes="(max-width: 768px) 100vw, 1400px"
              priority
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
        </motion.div>
      </div>
    </section>
  );
}
