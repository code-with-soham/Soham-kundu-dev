import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  getProjectBySlug,
  getAllProjectSlugs,
  getVisibleProjects,
  getAdjacentProjects,
  getRelatedProjects,
} from "@/data/projects";
import CaseStudyHero from "@/components/projects/CaseStudyHero";
import CaseStudyLayout from "@/components/projects/CaseStudyLayout";
import ProjectNavigation from "@/components/projects/ProjectNavigation";
import RelatedProjects from "@/components/projects/RelatedProjects";

// ── Static Generation ────────────────────────────────────────

export function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

// ── Dynamic Metadata ─────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} — Soham Kundu`,
    description: project.shortDescription,
    openGraph: {
      title: `${project.title} — Soham Kundu`,
      description: project.shortDescription,
      type: "article",
      ...(project.poster ? { images: [project.poster] } : {}),
    },
  };
}

// ── Page Component ───────────────────────────────────────────

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const visibleProjects = getVisibleProjects();
  const projectIndex = visibleProjects.findIndex((p) => p.slug === slug);
  const { prev, next } = getAdjacentProjects(slug);
  const related = getRelatedProjects(slug, 3);

  return (
    <main className="min-h-screen bg-[var(--bg-primary)]">
      <CaseStudyHero project={project} index={projectIndex} />
      <CaseStudyLayout project={project} />

      <div className="container-editorial pb-24">
        <RelatedProjects projects={related} />
        <ProjectNavigation prev={prev} next={next} />
      </div>
    </main>
  );
}
