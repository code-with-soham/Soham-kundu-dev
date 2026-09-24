import type { Metadata } from "next";
import { getVisibleProjects } from "@/data/projects";
import SectionLabel from "@/components/ui/SectionLabel";
import ProjectArchiveClient from "@/components/projects/ProjectArchiveClient";

export const metadata: Metadata = {
  title: "Projects // Archive — Soham Kundu",
  description:
    "Complete archive of software engineering work by Soham Kundu. Full-stack applications, AI-powered platforms, real-time systems, and systems programming.",
};

export default function ProjectsPage() {
  const projects = getVisibleProjects();

  return (
    <main className="min-h-screen bg-[var(--bg-primary)] pt-40 md:pt-48 pb-24">
      <div className="container-editorial">
        {/* Editorial Header */}
        <div className="mb-16 md:mb-24">
          <SectionLabel label="PROJECTS" number="ARCHIVE" className="mb-8" />

          <h1 className="text-display text-5xl md:text-7xl lg:text-8xl text-[var(--text-primary)] mb-6">
            Project Archive
          </h1>

          <p className="font-sans text-base md:text-lg text-[var(--text-secondary)] max-w-2xl leading-relaxed">
            A curated collection of software engineering work spanning full-stack
            applications, AI-powered platforms, real-time systems, and low-level
            systems programming.
          </p>
        </div>

        {/* Archive Content */}
        <ProjectArchiveClient projects={projects} />
      </div>
    </main>
  );
}
