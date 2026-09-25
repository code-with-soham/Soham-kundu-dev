"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import HoverLink from "@/components/ui/HoverLink";
import ProjectPlaceholder from "@/components/ui/ProjectPlaceholder";
import { getFeaturedProjects } from "@/data/projects";

export default function SelectedWork() {
  const featuredProjects = getFeaturedProjects();

  return (
    <section id="work" className="py-16 md:py-40 relative border-t border-[var(--border-subtle)] bg-[var(--bg-primary)]">
      <div className="container-editorial">
        <SectionLabel label="SELECTED WORK" number="002" className="mb-24 md:mb-40" />

        <div className="flex flex-col gap-32 md:gap-64">
          {featuredProjects.map((project, index) => {
            // Alternate layouts: even indices have image on left, odd have image on right (on desktop)
            const isEven = index % 2 === 0;

            return (
              <div 
                key={project.slug} 
                className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 md:gap-24 group`}
              >
                
                {/* Visual Side */}
                <div className="w-full md:w-3/5">
                  <RevealOnScroll className="w-full">
                    <Link href={`/projects/${project.slug}`} data-cursor="VIEW CASE STUDY" className="block relative w-full aspect-[4/3] md:aspect-[16/10] overflow-hidden bg-[var(--bg-secondary)] border border-[var(--border-subtle)] group-hover:border-[var(--border-hover)] transition-colors duration-700">
                      {project.poster ? (
                        <Image
                          src={project.poster}
                          alt={project.title}
                          fill
                          className="object-contain object-center transform transition-transform duration-1000 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, 60vw"
                        />
                      ) : (
                        <ProjectPlaceholder 
                          title={project.title} 
                          category={project.category} 
                          year={project.year} 
                          tech={project.techStack} 
                        />
                      )}
                    </Link>
                  </RevealOnScroll>
                </div>

                {/* Content Side */}
                <div className="w-full md:w-2/5 flex flex-col justify-center">
                  <RevealOnScroll delay={0.2}>
                    <div className="font-technical text-[10px] text-[var(--text-tertiary)] uppercase tracking-widest mb-6 flex items-center gap-4">
                      <span>0{index + 1}</span>
                      <span className="w-8 h-[1px] bg-[var(--border-default)]" />
                      <span>{project.year}</span>
                    </div>

                    <Link href={`/projects/${project.slug}`} className="block group/title">
                      <h3 className="text-display text-4xl md:text-5xl lg:text-6xl mb-6 text-[var(--text-primary)] transition-transform duration-500 group-hover/title:translate-x-2">
                        {project.title}
                      </h3>
                    </Link>

                    <p className="text-[var(--text-secondary)] font-sans text-base md:text-lg mb-8 leading-relaxed">
                      {project.shortDescription}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-12">
                      {project.techStack.slice(0, 5).map(tech => (
                        <span key={tech} className="font-technical text-[10px] border border-[var(--border-subtle)] px-3 py-1 text-[var(--text-tertiary)] uppercase">
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 5 && (
                        <span className="font-technical text-[10px] px-2 py-1 text-[var(--text-tertiary)]">+{project.techStack.length - 5}</span>
                      )}
                    </div>

                    <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8 font-technical text-xs tracking-widest uppercase text-[var(--text-secondary)] mt-8 md:mt-0">
                      <HoverLink href={`/projects/${project.slug}`}>
                        Case Study <span className="ml-1 inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                      </HoverLink>
                      
                      <div className="flex gap-6 md:gap-8">
                        {project.links.map(link => (
                          <HoverLink key={link.url} href={link.url} external>
                            {link.label}
                          </HoverLink>
                        ))}
                      </div>
                    </div>
                  </RevealOnScroll>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Projects CTA */}
        <div className="mt-40 text-center flex justify-center">
          <RevealOnScroll>
            <Link href="/projects" className="group relative inline-flex items-center justify-center p-12 overflow-hidden rounded-full border border-[var(--border-subtle)] hover:border-[var(--border-hover)] transition-colors duration-500 bg-[var(--bg-secondary)] hover:bg-[var(--bg-surface)]">
              <div className="font-serif text-3xl md:text-4xl text-[var(--text-primary)] relative z-10 flex items-center gap-4">
                <span>VIEW COMPLETE ARCHIVE</span>
                <span className="text-[var(--accent-primary)] font-sans text-2xl font-light transform transition-transform duration-500 group-hover:translate-x-2 group-hover:-translate-y-2">↗</span>
              </div>
            </Link>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
