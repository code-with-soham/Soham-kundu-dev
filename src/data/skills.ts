import type { SkillCategory } from "@/types/project";

// ============================================================
// Skills — Consolidated from ALL 5 resume PDFs
// ============================================================

export const skills: SkillCategory[] = [
  {
    name: "Programming Languages",
    skills: ["C++", "JavaScript", "TypeScript"],
    description: "Core languages for systems and web development",
  },
  {
    name: "Frontend",
    skills: [
      "HTML5",
      "CSS3",
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Responsive Design",
      "GSAP",
      "Framer Motion",
    ],
    description: "Building interactive, responsive user interfaces",
  },
  {
    name: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "JWT Authentication",
      "MVC Architecture",
    ],
    description: "Scalable server-side architectures and APIs",
  },
  {
    name: "Database",
    skills: ["MongoDB", "MySQL", "PostgreSQL", "Redis", "Mongoose"],
    description: "Data modeling and storage solutions",
  },
  {
    name: "Real-Time & Infrastructure",
    skills: [
      "Socket.IO",
      "BullMQ",
      "Elasticsearch",
      "Docker",
      "Concurrency Control",
    ],
    description: "Real-time communication and infrastructure tooling",
  },
  {
    name: "Core Computer Science",
    skills: [
      "Data Structures & Algorithms",
      "OOP",
      "DBMS",
      "Operating Systems",
      "Computer Networks",
    ],
    description: "Foundational CS concepts and theory",
  },
  {
    name: "Tools & Platforms",
    skills: [
      "Git",
      "GitHub",
      "Postman",
      "VS Code",
      "Vite",
      "Vercel",
      "Netlify",
    ],
    description: "Development workflow and deployment tools",
  },
  {
    name: "AI & GenAI",
    skills: [
      "Prompt Engineering",
      "Gemini API",
      "Groq API",
      "LLM Fundamentals",
      "RAG Fundamentals",
    ],
    description: "AI integration and generative AI tooling",
  },
];
