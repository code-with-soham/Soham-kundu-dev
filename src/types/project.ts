// ============================================================
// Portfolio Data Types
// All data in these types is sourced from verified resume,
// project repositories, and existing portfolio assets.
// ============================================================

export type ProjectStatus = "completed" | "in-progress" | "archived";
export type ProjectVisibility = "featured" | "all" | "hidden";

export interface ProjectLink {
  label: string;
  url: string;
  type: "github" | "live" | "demo" | "video" | "docs";
}

export interface Project {
  /** URL-safe slug, e.g. "portfolio-os" */
  slug: string;
  /** Display title */
  title: string;
  /** One-line summary for cards */
  shortDescription: string;
  /** Full case-study description (can be multiple paragraphs) */
  detailedDescription: string;
  /** Problem statement */
  problem?: string;
  /** Solution overview */
  solution?: string;
  /** Key features list */
  keyFeatures: string[];
  /** Technologies used */
  techStack: string[];
  /** Architecture overview text */
  architecture?: string;
  /** Links (GitHub, live, demo video, etc.) */
  links: ProjectLink[];
  /** Path to poster/cover image relative to /public */
  poster?: string;
  /** Paths to screenshots relative to /public */
  screenshots: string[];
  /** Year of creation/release */
  year: string;
  /** Current status */
  status: ProjectStatus;
  /** Whether to feature on homepage, show in all projects, or hide */
  visibility: ProjectVisibility;
  /** Category label for display */
  category: string;
  /** Filter category for archive grouping */
  filterCategory: "full-stack" | "ai" | "real-time" | "systems" | "frontend";
  /** Challenges faced */
  challenges?: string;
  /** Key technical decisions */
  technicalDecisions?: string;
  /** What was learned */
  whatILearned?: string;
  /** Data source for verification tracking */
  dataSource: string;
}

export interface TimelineEntry {
  /** Year or date range, e.g. "2024 – Present" */
  period: string;
  /** Role or degree title */
  title: string;
  /** Organization name */
  organization: string;
  /** Location */
  location?: string;
  /** Description (can be multi-line) */
  description: string;
  /** Technologies used (for internships) */
  technologies?: string[];
  /** Type of entry */
  type: "education" | "experience";
  /** Grade/SGPA/percentage if applicable */
  grade?: string;
  /** Sort order (higher = more recent) */
  order: number;
  /** Data source */
  dataSource: string;
}

export interface SkillCategory {
  /** Category name, e.g. "Frontend" */
  name: string;
  /** Skills in this category */
  skills: string[];
  /** Short description of what this category covers */
  description?: string;
}

export interface Certification {
  /** Certificate name */
  title: string;
  /** Issuing organization */
  issuer: string;
  /** Year or date */
  year?: string;
  /** Brief description */
  description?: string;
  /** Data source */
  dataSource: string;
}

export interface PersonalInfo {
  name: string;
  firstName: string;
  lastName: string;
  title: string;
  email: string;
  location: string;
  aboutShort: string;
  aboutLong: string;
  resumeUrl: string;
  socials: {
    github: string;
    linkedin: string;
    portfolio: string;
  };
}

export interface SiteConfig {
  /** Configurable base URL for SEO (change when domain is finalized) */
  siteUrl: string;
  siteName: string;
  siteDescription: string;
  ogImage: string;
}
