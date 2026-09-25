import React from "react";
import MagneticButton from "@/components/ui/MagneticButton";
import HoverLink from "@/components/ui/HoverLink";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { personalInfo } from "@/data/personal";

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-40 relative bg-[var(--bg-secondary)] overflow-hidden">
      {/* Background Decorative Grid */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.02] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="contactGrid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#contactGrid)" />
      </svg>

      <div className="container-editorial flex flex-col items-center text-center relative z-10">
        <RevealOnScroll>
          <h2 className="text-display text-6xl md:text-8xl lg:text-[120px] font-serif mb-16 text-[var(--text-primary)]">
            LET&apos;S BUILD <br />
            <span className="text-[var(--accent-primary)] italic">SOMETHING.</span>
          </h2>
        </RevealOnScroll>

        <RevealOnScroll delay={0.2}>
          <a href={`mailto:${personalInfo.email}`} data-cursor="EMAIL">
            <MagneticButton className="px-10 py-6 text-base md:text-lg rounded-full group bg-[var(--text-primary)] text-[var(--bg-primary)] hover:bg-[var(--accent-primary)] hover:text-[var(--text-inverse)] border-none">
              START A CONVERSATION <span className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1 inline-block">→</span>
            </MagneticButton>
          </a>
        </RevealOnScroll>

        <RevealOnScroll delay={0.4} className="mt-16 md:mt-24">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 font-technical text-sm tracking-widest uppercase text-[var(--text-secondary)]">
            <HoverLink external href={`mailto:${personalInfo.email}`}>Email</HoverLink>
            <HoverLink external href={personalInfo.socials.github}>GitHub</HoverLink>
            <HoverLink external href={personalInfo.socials.linkedin}>LinkedIn</HoverLink>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
