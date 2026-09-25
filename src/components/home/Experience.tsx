"use client";

import React from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { timeline } from "@/data/timeline";

export default function Experience() {
  const experiences = timeline.filter((t) => t.type === "experience").sort((a, b) => b.order - a.order);
  const education = timeline.filter((t) => t.type === "education").sort((a, b) => b.order - a.order);

  return (
    <section id="experience" className="py-16 md:py-40 relative bg-[var(--bg-primary)]">
      <div className="container-editorial">
        <SectionLabel label="EXPERIENCE & EDUCATION" number="004" className="mb-24" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-16">
          
          {/* Experience Column */}
          <div>
            <h3 className="font-technical text-sm text-[var(--text-tertiary)] tracking-widest uppercase mb-12 flex items-center gap-4">
              <span className="w-2 h-2 bg-[var(--accent-primary)] rounded-full" />
              Professional Experience
            </h3>
            
            <div className="border-l border-[var(--border-subtle)] ml-1 flex flex-col gap-10 md:gap-16">
              {experiences.map((exp, index) => (
                <RevealOnScroll key={index} delay={index * 0.1} className="relative pl-8 md:pl-12 group">
                  {/* Timeline Rail Indicator */}
                  <div className="absolute left-[-5px] top-2 w-[9px] h-[9px] bg-[var(--bg-primary)] border-2 border-[var(--border-default)] rounded-full group-hover:border-[var(--accent-primary)] group-hover:bg-[var(--accent-primary)] transition-colors duration-300" />
                  
                  <div className="flex flex-col md:group-hover:translate-x-2 transition-transform duration-300 ease-out">
                    <span className="font-technical text-xs tracking-widest text-[var(--text-tertiary)] uppercase mb-2">
                      {exp.period}
                    </span>
                    <h4 className="font-serif text-3xl md:text-4xl text-[var(--text-primary)] mb-1">
                      {exp.title}
                    </h4>
                    <span className="font-technical text-sm text-[var(--accent-primary)] uppercase tracking-wider mb-4">
                      {exp.organization}
                    </span>
                    
                    <p className="text-[var(--text-secondary)] text-sm md:text-base leading-relaxed mb-6">
                      {exp.description}
                    </p>
                    
                    {exp.technologies && (
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map(tech => (
                          <span key={tech} className="px-2 py-1 border border-[var(--border-subtle)] font-technical text-[9px] uppercase tracking-wider text-[var(--text-tertiary)]">
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div>
            <h3 className="font-technical text-sm text-[var(--text-tertiary)] tracking-widest uppercase mb-12 flex items-center gap-4">
              <span className="w-2 h-2 border border-[var(--text-secondary)] rounded-full" />
              Education History
            </h3>
            
            <div className="border-l border-[var(--border-subtle)] ml-1 flex flex-col gap-10 md:gap-16">
              {education.map((edu, index) => (
                <RevealOnScroll key={index} delay={index * 0.1} className="relative pl-8 md:pl-12 group">
                  {/* Timeline Rail Indicator */}
                  <div className="absolute left-[-5px] top-2 w-[9px] h-[9px] bg-[var(--bg-primary)] border-2 border-[var(--border-default)] rounded-full group-hover:border-[var(--text-primary)] transition-colors duration-300" />
                  
                  <div className="flex flex-col md:group-hover:translate-x-2 transition-transform duration-300 ease-out">
                    <span className="font-technical text-xs tracking-widest text-[var(--text-tertiary)] uppercase mb-2">
                      {edu.period}
                    </span>
                    <h4 className="font-serif text-2xl md:text-3xl text-[var(--text-primary)] mb-1">
                      {edu.title}
                    </h4>
                    <span className="font-technical text-sm text-[var(--text-secondary)] uppercase tracking-wider mb-3">
                      {edu.organization}
                    </span>
                    
                    {edu.grade && (
                      <span className="inline-block self-start font-technical text-[10px] bg-[var(--bg-surface)] border border-[var(--border-default)] px-3 py-1 text-[var(--text-primary)] tracking-widest">
                        {edu.grade}
                      </span>
                    )}
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
