import type { PersonalInfo, SiteConfig } from "@/types/project";

// ============================================================
// Personal Information
// Source: All 5 resume PDFs (cross-referenced)
// ============================================================

export const personalInfo: PersonalInfo = {
  name: "Soham Kundu",
  firstName: "Soham",
  lastName: "Kundu",
  title: "Software Engineer",
  email: "sohamkundu84@gmail.com",
  // Phone intentionally omitted from public display
  location: "Jhargram, West Bengal, India",
  aboutShort:
    "B.Tech Computer Science student and Software Engineer building scalable full-stack applications with the MERN stack, real-time systems, and AI integration.",
  aboutLong:
    "I'm a B.Tech Computer Science and Engineering student at Brainware University with hands-on experience in MERN stack development, React.js, Node.js, and MongoDB. I have a strong foundation in Data Structures, OOP, DBMS, Operating Systems, Computer Networks, and modern web development. From AI-powered platforms to real-time booking systems with concurrency control, I build scalable, user-focused applications with clean architecture. I'm passionate about solving complex engineering problems and turning them into elegant, production-ready software.",
  resumeUrl:
    "https://drive.google.com/file/d/1ly2kUM6dzrpgJTSS-eSEQfErKDv8K8oo/view?usp=sharing",
  socials: {
    github: "https://github.com/code-with-soham",
    linkedin: "https://www.linkedin.com/in/soham-kundu-b5a9a0250/",
    portfolio: "https://soham-kundu-portfolio.vercel.app/",
  },
};

// ============================================================
// Site Configuration
// siteUrl is configurable — update when final domain is known
// ============================================================

export const siteConfig: SiteConfig = {
  siteUrl: "https://soham-kundu-portfolio.vercel.app", // Fallback to verified domain from resume
  siteName: "Soham Kundu — Software Engineer",
  siteDescription:
    "Portfolio of Soham Kundu — Software Engineer building scalable full-stack applications with MERN stack, real-time systems, and AI integration.",
  ogImage: "/images/og-image.png",
};
