import React from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { certifications } from "@/data/certifications";

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 md:py-40 relative border-t border-[var(--border-subtle)] bg-[var(--bg-primary)]">
      <div className="container-editorial">
        <SectionLabel label="CERTIFICATION ARCHIVE" number="006" className="mb-24" />

        <div className="w-full">
          {/* Header Row */}
          <div className="hidden md:grid grid-cols-12 gap-8 pb-4 border-b border-[var(--border-default)] font-technical text-[10px] text-[var(--text-tertiary)] uppercase tracking-widest">
            <div className="col-span-1">ID</div>
            <div className="col-span-5">CERTIFICATION</div>
            <div className="col-span-4">ISSUER</div>
            <div className="col-span-2 text-right">YEAR</div>
          </div>

          {/* List */}
          <div className="flex flex-col">
            {certifications.map((cert, index) => {
              const numStr = (index + 1).toString().padStart(2, "0");

              return (
                <RevealOnScroll key={index} delay={index * 0.05} className="group">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-6 border-b border-[var(--border-subtle)] hover:border-[var(--border-hover)] transition-colors duration-300 items-start md:items-center relative">
                    
                    {/* Hover indicator (desktop) */}
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-[var(--accent-primary)] group-hover:h-3/4 transition-all duration-300 opacity-0 group-hover:opacity-100 hidden md:block" />

                    <div className="md:col-span-1 font-technical text-[10px] text-[var(--text-tertiary)] uppercase tracking-widest pl-0 md:pl-4">
                      {numStr}
                    </div>
                    
                    <div className="md:col-span-5">
                      <h3 className="font-serif text-2xl text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors duration-300 group-hover:translate-x-2 transform">
                        {cert.title}
                      </h3>
                      <p className="font-sans text-sm text-[var(--text-secondary)] mt-2 md:hidden">
                        {cert.issuer}
                      </p>
                    </div>
                    
                    <div className="hidden md:block md:col-span-4 font-technical text-xs text-[var(--text-secondary)] uppercase tracking-wider">
                      {cert.issuer}
                    </div>
                    
                    <div className="md:col-span-2 font-technical text-[10px] text-[var(--text-tertiary)] uppercase tracking-widest text-left md:text-right">
                      {cert.year || "——"}
                    </div>
                    
                  </div>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
