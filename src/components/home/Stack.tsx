"use client";

import React, { useState } from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { skills } from "@/data/skills";

export default function Stack() {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  return (
    <section id="stack" className="py-24 md:py-40 relative border-t border-[var(--border-subtle)] bg-[var(--bg-secondary)]">
      <div className="container-editorial">
        <SectionLabel label="TECHNICAL STACK" number="005" className="mb-24" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {skills.map((category, index) => {
            const isHovered = hoveredCategory === category.name;
            const isDimmed = hoveredCategory !== null && hoveredCategory !== category.name;

            return (
              <RevealOnScroll key={category.name} delay={index * 0.05} className="h-full">
                <div 
                  className={`flex flex-col h-full border-t border-[var(--border-default)] pt-6 transition-opacity duration-500 ${isDimmed ? 'opacity-30' : 'opacity-100'}`}
                  onMouseEnter={() => setHoveredCategory(category.name)}
                  onMouseLeave={() => setHoveredCategory(null)}
                >
                  <h4 className="font-technical text-[10px] text-[var(--text-tertiary)] uppercase tracking-widest mb-2">
                    0{index + 1}
                  </h4>
                  <h3 className={`font-serif text-2xl md:text-3xl mb-4 transition-colors duration-300 ${isHovered ? 'text-[var(--accent-primary)]' : 'text-[var(--text-primary)]'}`}>
                    {category.name}
                  </h3>
                  
                  {category.description && (
                    <p className="text-[var(--text-secondary)] font-sans text-sm mb-8">
                      {category.description}
                    </p>
                  )}
                  
                  <div className="mt-auto flex flex-col gap-3">
                    {category.skills.map((skill) => (
                      <div key={skill} className="group flex items-center gap-3">
                        <span className="w-4 h-[1px] bg-[var(--border-subtle)] group-hover:w-8 group-hover:bg-[var(--text-primary)] transition-all duration-300" />
                        <span className="font-technical text-xs tracking-wider text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors duration-300 uppercase">
                          {skill}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
