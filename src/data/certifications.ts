import type { Certification } from "@/types/project";

// ============================================================
// Certifications & Achievements
// Sources: Resume PDFs + Data folder certificate filenames
// ============================================================

export const certifications: Certification[] = [
  {
    title: "Top 10 Finalist — NEXATHON 1.0",
    issuer: "Hackathon (48 hours)",
    year: "2025",
    description:
      "Developed BrainuBot, an AI-powered student helpdesk chatbot during a 48-hour hackathon.",
    dataSource: "All 5 resume PDFs (consistent)",
  },
  {
    title: "AI Samvaad Participation Certificate",
    issuer: "Brainware University & ACM",
    description: "Participation in AI Samvaad event.",
    dataSource: "All 5 resume PDFs + Data/AI Shamvaad.pdf",
  },
  {
    title: "Samsung Innovation Campus",
    issuer: "Samsung",
    description: "Completed Coding and Programming certification program.",
    dataSource:
      "All 5 resume PDFs + Data/Samsung Innovation Campus Certificate.pdf",
  },
  {
    title: "MERN Stack Development with AI Integration",
    issuer: "TechnoExponent / Euphoria GenX",
    year: "2025",
    description:
      "Internship certification for MERN Stack Development with AI Integration.",
    dataSource:
      "SE + BWU resumes + Data/Euphoria GenX Intership Certificate.pdf",
  },
  {
    title: "Cyber Security Internship Program",
    issuer: "IEMLabs",
    year: "2023",
    description:
      "One-week Cyber Security Internship Program in collaboration with Bishnupur Public Institute of Engineering.",
    dataSource: "CS resume + Data/Cyber Security Certificate.pdf",
  },
  {
    title: "Machine Learning Internship",
    issuer: "Certificate issuer from file",
    description: "Machine Learning internship certification.",
    dataSource: "Data/Machine Learning Internship Certificate.pdf",
  },
  {
    title: "GEN-AI Camp",
    issuer: "Certificate issuer from file",
    description: "Generative AI camp participation.",
    dataSource: "Data/GEN- AI Camp.png",
  },
];
