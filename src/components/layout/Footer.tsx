import React from "react";
import HoverLink from "@/components/ui/HoverLink";
import { personalInfo } from "@/data/personal";

export default function Footer() {
  return (
    <footer className="relative border-t border-[var(--border-subtle)] bg-[var(--bg-secondary)] overflow-hidden">
      <div className="container-editorial py-8 md:py-12">
        {/* Bottom Metadata Row */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-6 font-technical text-[10px] tracking-widest uppercase text-[var(--text-tertiary)]">
          <div className="flex items-center gap-6">
            <HoverLink external href={personalInfo.socials.github}>GitHub</HoverLink>
            <HoverLink external href={personalInfo.socials.linkedin}>LinkedIn</HoverLink>
            <HoverLink external href={personalInfo.resumeUrl}>Resume</HoverLink>
          </div>
          
          <div className="flex flex-col md:items-end gap-2 text-center md:text-right">
            <span>© {new Date().getFullYear()} {personalInfo.name}</span>
            <span>Based in {personalInfo.location.split(",")[0]}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
