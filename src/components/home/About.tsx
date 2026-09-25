import React from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { personalInfo } from "@/data/personal";

export default function About() {
  return (
    <section id="about" className="py-16 md:py-40 relative">
      <div className="container-editorial">
        <SectionLabel label="ABOUT" number="001" className="mb-16 md:mb-24" />
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
          {/* Editorial Statement */}
          <div className="md:col-span-8 lg:col-span-7">
            <RevealOnScroll>
              <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl mb-12 text-[var(--text-primary)] leading-[1.1] md:leading-[1.1]">
                I build <span className="font-sans italic font-light text-[var(--accent-primary)]">scalable</span> full-stack applications with the <span className="text-[var(--text-secondary)]">MERN stack</span>, <span className="text-[var(--text-secondary)]">real-time systems</span>, and <span className="text-[var(--text-secondary)]">AI integration</span>.
              </h2>
            </RevealOnScroll>
            
            <RevealOnScroll delay={0.1}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-base md:text-lg text-[var(--text-secondary)] font-sans leading-relaxed border-t border-[var(--border-subtle)] pt-8">
                <p>
                  I am a Computer Science and Engineering student at Brainware University with a strong foundation in modern software development. I specialize in turning complex engineering problems into elegant, production-ready applications.
                </p>
                <p>
                  My work spans across building custom AI-powered platforms, concurrent real-time booking systems, and developing desktop-like experiences on the web. I believe in clean architecture, strong foundations in Data Structures & Algorithms, and continuous experimentation.
                </p>
              </div>
            </RevealOnScroll>
          </div>

          {/* Supporting Technical Metadata */}
          <div className="md:col-span-4 lg:col-start-10 mt-12 md:mt-0">
            <RevealOnScroll delay={0.2} className="h-full border-l border-[var(--border-default)] pl-6 md:pl-8 flex flex-col justify-between">
              
              <div className="mb-12">
                <div className="font-technical text-xs text-[var(--text-tertiary)] uppercase tracking-widest mb-4">Core Focus</div>
                <ul className="space-y-3 font-technical text-sm text-[var(--text-primary)] uppercase tracking-wider">
                  <li>Full-Stack Development</li>
                  <li>Real-Time Systems</li>
                  <li>AI / GenAI Integration</li>
                  <li>API Architecture</li>
                  <li>Frontend Engineering</li>
                </ul>
              </div>

              <div>
                <div className="font-technical text-xs text-[var(--text-tertiary)] uppercase tracking-widest mb-4">Location</div>
                <div className="font-technical text-sm text-[var(--text-primary)] uppercase tracking-wider">
                  {personalInfo.location.split(",").map((line, i) => (
                    <div key={i}>{line.trim()}</div>
                  ))}
                </div>
              </div>
              
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
