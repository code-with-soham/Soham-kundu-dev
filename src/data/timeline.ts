import type { TimelineEntry } from "@/types/project";

// ============================================================
// Education & Experience Timeline
// Sources: All 5 resume PDFs (cross-referenced)
// Conflicts: SGPA was 8.79 in old portfolio → 9.14 in all resumes
//            Resume is authoritative → using 9.14
// ============================================================

export const timeline: TimelineEntry[] = [
  // ── Education ──────────────────────────────────────────────
  {
    period: "2024 – Present",
    title: "B.Tech in Computer Science & Engineering",
    organization: "Brainware University",
    location: "Barasat, West Bengal",
    description:
      "Pursuing B.Tech in CSE. Focused on full-stack development, data structures & algorithms, and building production-ready applications.",
    grade: "SGPA: 9.14",
    type: "education",
    order: 6,
    dataSource: "All 5 resume PDFs (consistent)",
  },
  {
    period: "2021 – 2024",
    title: "Diploma in Computer Science & Technology",
    organization: "Bishnupur Public Institute of Engineering",
    location: "Bishnupur, West Bengal",
    description:
      "Completed a 3-year diploma program building a strong foundation in programming, databases, and software engineering fundamentals.",
    grade: "CGPA: 8.4",
    type: "education",
    order: 3,
    dataSource: "All 5 resume PDFs (consistent)",
  },
  {
    period: "2021",
    title: "Higher Secondary Education",
    organization: "Belpahari S.C. High School",
    location: "Belpahari, West Bengal",
    description: "Higher secondary education.",
    grade: "66.40%",
    type: "education",
    order: 2,
    dataSource: "All 5 resume PDFs (consistent)",
  },
  {
    period: "2019",
    title: "Secondary Education",
    organization: "Silda Radhacharan Institution",
    location: "West Bengal",
    description: "Secondary education.",
    grade: "68.80%",
    type: "education",
    order: 1,
    dataSource: "All 5 resume PDFs (consistent)",
  },

  // ── Experience ─────────────────────────────────────────────
  {
    period: "Aug 2025 – Dec 2025",
    title: "Frontend Developer",
    organization: "Expantra Tech Pvt Ltd",
    location: "On-site, Kolkata, West Bengal",
    description:
      "Developed responsive and reusable user interfaces using React.js and Tailwind CSS. Implemented frontend components and improved UI consistency across application screens. Collaborated with developers using Git and GitHub-based workflows. Assisted in application debugging, testing, and deployment activities.",
    technologies: ["React.js", "Tailwind CSS", "JavaScript", "Git", "GitHub"],
    type: "experience",
    order: 5,
    dataSource: "All 5 resume PDFs (consistent)",
  },
  {
    period: "Jul 2025 – Sep 2025",
    title: "MERN Stack Development Intern",
    organization: "Euphoria GenX / TechnoExponent",
    description:
      "Completed an internship focused on MERN Stack Development with AI-Integration. Worked on CareerNexus — Bridging Education With Career Opportunities.",
    technologies: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "AI Integration",
    ],
    type: "experience",
    order: 4,
    dataSource:
      "BWU resume + CS resume (not in old portfolio — resume is authoritative)",
  },
];
