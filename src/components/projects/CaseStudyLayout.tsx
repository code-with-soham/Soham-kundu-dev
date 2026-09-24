
import React from "react";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import CaseStudySidebar from "@/components/projects/CaseStudySidebar";
import ScreenshotGallery from "@/components/projects/ScreenshotGallery";
import type { Project } from "@/types/project";

interface CaseStudyLayoutProps {
  project: Project;
}

/**
 * Adaptive case study body.
 * Only renders sections that have verified data.
 */
export default function CaseStudyLayout({ project }: CaseStudyLayoutProps) {
  // Filter out poster from gallery screenshots (avoid duplicate)
  const galleryScreenshots = project.screenshots.filter(
    (s) => s !== project.poster
  );
  const allScreenshots =
    galleryScreenshots.length > 0 ? project.screenshots : [];

  // Build ordered section numbers based on which sections have data
  const sections: string[] = [];
  if (project.detailedDescription) sections.push("overview");
  if (project.problem) sections.push("problem");
  if (project.solution) sections.push("solution");
  if (project.keyFeatures.length > 0) sections.push("features");
  if (project.architecture) sections.push("architecture");
  if (project.technicalDecisions) sections.push("decisions");
  if (project.challenges) sections.push("challenges");
  if (allScreenshots.length > 0) sections.push("screenshots");
  if (project.whatILearned) sections.push("learned");

  const getSectionNum = (key: string) =>
    String(sections.indexOf(key) + 1).padStart(2, "0");

  return (
    <section className="pb-12">
      <div className="container-editorial">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Sidebar */}
          <div className="lg:col-span-3 order-2 lg:order-1">
            <CaseStudySidebar project={project} />
          </div>

          {/* Main Content */}
          <div className="lg:col-span-9 order-1 lg:order-2 space-y-20 md:space-y-28">
            {/* Overview */}
            {project.detailedDescription && (
              <RevealOnScroll>
                <div className="border-t border-[var(--border-default)] pt-8">
                  <div className="font-technical text-[10px] tracking-widest uppercase text-[var(--text-tertiary)] mb-6">
                    {getSectionNum("overview")} / OVERVIEW
                  </div>
                  <p className="font-sans text-base md:text-lg text-[var(--text-secondary)] leading-relaxed max-w-3xl">
                    {project.detailedDescription}
                  </p>
                </div>
              </RevealOnScroll>
            )}

            {/* Problem */}
            {project.problem && (
              <RevealOnScroll>
                <div className="border-t border-[var(--border-default)] pt-8">
                  <div className="font-technical text-[10px] tracking-widest uppercase text-[var(--text-tertiary)] mb-6">
                    {getSectionNum("problem")} / PROBLEM
                  </div>
                  <p className="font-sans text-base md:text-lg text-[var(--text-secondary)] leading-relaxed max-w-3xl">
                    {project.problem}
                  </p>
                </div>
              </RevealOnScroll>
            )}

            {/* Solution */}
            {project.solution && (
              <RevealOnScroll>
                <div className="border-t border-[var(--border-default)] pt-8">
                  <div className="font-technical text-[10px] tracking-widest uppercase text-[var(--text-tertiary)] mb-6">
                    {getSectionNum("solution")} / APPROACH
                  </div>
                  <p className="font-sans text-base md:text-lg text-[var(--text-secondary)] leading-relaxed max-w-3xl">
                    {project.solution}
                  </p>
                </div>
              </RevealOnScroll>
            )}

            {/* Key Features */}
            {project.keyFeatures.length > 0 && (
              <RevealOnScroll>
                <div className="border-t border-[var(--border-default)] pt-8">
                  <div className="font-technical text-[10px] tracking-widest uppercase text-[var(--text-tertiary)] mb-6">
                    {getSectionNum("features")} / KEY FEATURES
                  </div>
                  <ul className="space-y-4 max-w-3xl">
                    {project.keyFeatures.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-4 text-[var(--text-secondary)] font-sans text-sm md:text-base leading-relaxed"
                      >
                        <span className="font-technical text-[10px] text-[var(--accent-primary)] mt-1.5 shrink-0">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealOnScroll>
            )}

            {/* Architecture */}
            {project.architecture && (
              <RevealOnScroll>
                <div className="border-t border-[var(--border-default)] pt-8">
                  <div className="font-technical text-[10px] tracking-widest uppercase text-[var(--text-tertiary)] mb-6">
                    {getSectionNum("architecture")} / ARCHITECTURE
                  </div>
                  <div className="bg-[var(--bg-secondary)] border border-[var(--border-subtle)] p-6 md:p-8 max-w-3xl">
                    <p className="font-technical text-sm text-[var(--text-secondary)] leading-relaxed whitespace-pre-wrap">
                      {project.architecture}
                    </p>
                  </div>
                </div>
              </RevealOnScroll>
            )}

            {/* Technical Decisions */}
            {project.technicalDecisions && (
              <RevealOnScroll>
                <div className="border-t border-[var(--border-default)] pt-8">
                  <div className="font-technical text-[10px] tracking-widest uppercase text-[var(--text-tertiary)] mb-6">
                    {getSectionNum("decisions")} / TECHNICAL DECISIONS
                  </div>
                  <p className="font-sans text-base md:text-lg text-[var(--text-secondary)] leading-relaxed max-w-3xl">
                    {project.technicalDecisions}
                  </p>
                </div>
              </RevealOnScroll>
            )}

            {/* Challenges */}
            {project.challenges && (
              <RevealOnScroll>
                <div className="border-t border-[var(--border-default)] pt-8">
                  <div className="font-technical text-[10px] tracking-widest uppercase text-[var(--text-tertiary)] mb-6">
                    {getSectionNum("challenges")} / CHALLENGES
                  </div>
                  <p className="font-sans text-base md:text-lg text-[var(--text-secondary)] leading-relaxed max-w-3xl">
                    {project.challenges}
                  </p>
                </div>
              </RevealOnScroll>
            )}

            {/* Screenshots */}
            {allScreenshots.length > 0 && (
              <RevealOnScroll>
                <div className="border-t border-[var(--border-default)] pt-8">
                  <div className="font-technical text-[10px] tracking-widest uppercase text-[var(--text-tertiary)] mb-6">
                    {getSectionNum("screenshots")} / SCREENSHOTS
                  </div>
                  <ScreenshotGallery
                    screenshots={allScreenshots}
                    title={project.title}
                  />
                </div>
              </RevealOnScroll>
            )}

            {/* What I Learned */}
            {project.whatILearned && (
              <RevealOnScroll>
                <div className="border-t border-[var(--border-default)] pt-8">
                  <div className="font-technical text-[10px] tracking-widest uppercase text-[var(--text-tertiary)] mb-6">
                    {getSectionNum("learned")} / WHAT I LEARNED
                  </div>
                  <p className="font-sans text-base md:text-lg text-[var(--text-secondary)] leading-relaxed max-w-3xl">
                    {project.whatILearned}
                  </p>
                </div>
              </RevealOnScroll>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
