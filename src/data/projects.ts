import type { Project } from "@/types/project";

// ============================================================
// Project Inventory — Exhaustive, verified from all sources
//
// FEATURED: Projects with strong visual assets, live URLs,
//           and demonstrated complexity
// ALL:      Genuine projects that should appear in /projects
//
// No fabricated data. Every field is traceable to a source.
// ============================================================

export const projects: Project[] = [
  // ── FEATURED PROJECTS ─────────────────────────────────────

  {
    slug: "portfolio-os",
    title: "Portfolio OS",
    shortDescription:
      "A Windows 11-inspired operating system built entirely in the browser as a portfolio experience.",
    detailedDescription:
      "Portfolio OS is not a standard portfolio website. It is a Windows 11-inspired operating system built entirely in the browser. Instead of scrolling through a webpage, recruiters and visitors interact with a fully functional desktop environment — complete with a window manager, file explorer, terminal, integrated AI assistant, and persistent application state.",
    problem:
      "Traditional portfolio websites feel generic and fail to demonstrate real engineering depth. Recruiters see hundreds of similar-looking portfolios.",
    solution:
      "Built a complete desktop OS simulation in the browser that showcases 80+ React components, complex state management, and production-level architecture in an interactive format.",
    keyFeatures: [
      "Window Manager with drag, drop, maximize, minimize, and z-index calculation",
      "Integrated GenAI chat (AI Assistant) that answers questions about resume",
      "File Explorer with mock filesystem navigation",
      "Fully functional Terminal/CLI",
      "Quick Settings panel (volume, brightness, themes)",
      "Notification Center with real-time alerts",
      "Desktop Widgets (clock, calendar)",
      "State Persistence across browser refreshes",
      "MongoDB Explorer UI",
      "VS Code Emulator",
      "Paint application",
      "Music Player",
      "Weather App",
      "Task Manager",
    ],
    techStack: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Framer Motion",
      "Zustand",
      "Node.js",
      "Express.js",
      "Gemini API",
      "Groq API",
    ],
    architecture:
      "Frontend: React + Vite + Tailwind + Zustand state management. Backend: Node.js + Express with JSON flat-file data storage simulating MongoDB. AI: Gemini API / Groq API integration for the assistant.",
    links: [
      {
        label: "Live Demo",
        url: "https://portfolio-os-2026.vercel.app/",
        type: "live",
      },
      {
        label: "GitHub",
        url: "https://github.com/code-with-soham/portfolio-OS-2026",
        type: "github",
      },
    ],
    poster: "/images/projects/portfolio-os-desktop.png",
    screenshots: [
      "/images/projects/portfolio-os-desktop.png",
      "/images/projects/portfolio-os-cmd.png",
      "/images/projects/portfolio-os-fileexplorer.png",
      "/images/projects/portfolio-os-vscode.png",
      "/images/projects/portfolio-os-settings.png",
    ],
    year: "2026",
    status: "completed",
    visibility: "featured",
    category: "Full Stack — Desktop OS Simulation",
    filterCategory: "full-stack",
    challenges:
      "Managing complex multi-window z-index stacking, implementing drag/resize behavior, and maintaining state persistence across 20+ applications.",
    technicalDecisions:
      "Chose Zustand over Redux for cleaner multi-store architecture. Used JSON flat-file storage to avoid database dependency while simulating a real backend.",
    whatILearned:
      "Deep understanding of complex state management, window manager algorithms, and building production-scale component libraries with 80+ components.",
    dataSource:
      "portfolio-OS-2026 README + Git remote: github.com/code-with-soham/portfolio-OS-2026.git + 17 screenshots in assests/ folder",
  },

  {
    slug: "reachinbox",
    title: "ReachInbox",
    shortDescription:
      "Full-stack email job scheduler with delayed scheduling, rate limiting, and search analytics.",
    detailedDescription:
      "A production-architecture email job scheduling platform featuring delayed scheduling, rate limiting, restart safety, and search analytics. Built with a microservice-oriented approach using BullMQ for job queues, Redis for caching, PostgreSQL for persistence, and Elasticsearch for search.",
    problem:
      "Sending bulk or scheduled emails reliably requires handling rate limits, retry logic, job persistence across server restarts, and efficient search across sent/scheduled emails.",
    solution:
      "Built a full-stack email scheduling system with queue-based job processing, Google OAuth authentication, and a rich compose interface with delay and rate limit controls.",
    keyFeatures: [
      "Delayed email scheduling with configurable timing",
      "Rate limiting per sender account",
      "Restart-safe job queue persistence",
      "Full-text search and analytics across emails",
      "Google OAuth authentication",
      "Rich email composer with formatting",
      "Upload recipient lists",
      "Real-time status tracking",
    ],
    techStack: [
      "React.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Redis",
      "BullMQ",
      "Elasticsearch",
      "Google OAuth",
      "Slack",
      "Docker",
      "Ethereal SMTP",
    ],
    architecture:
      "User → Google Auth → React Frontend ↔ Express Backend + Worker → PostgreSQL + Redis/BullMQ + Elasticsearch. Docker containerized.",
    links: [
      {
        label: "GitHub",
        url: "https://github.com/code-with-soham/scheduled-email-service",
        type: "github",
      },
    ],
    poster: "/images/projects/reachinbox-poster.png",
    screenshots: ["/images/projects/reachinbox-poster.png"],
    year: "2026",
    status: "completed",
    visibility: "featured",
    category: "Full Stack — Production Architecture",
    filterCategory: "full-stack",
    challenges:
      "Designing restart-safe job processing, implementing rate limiting without dropping emails, and integrating Elasticsearch for efficient search.",
    technicalDecisions:
      "Chose BullMQ + Redis over simple cron jobs for reliable, persistent job processing. PostgreSQL over MongoDB for relational email/sender data. Docker for consistent development and deployment.",
    whatILearned:
      "Production-grade job queue architecture, email deliverability challenges, and building search infrastructure with Elasticsearch.",
    dataSource:
      "Project poster image + Demo video (Full Stack Email Job Schedular DEMO.mp4) + GitHub URL visible on poster",
  },

  {
    slug: "mockmate-ai",
    title: "MockMate AI",
    shortDescription:
      "AI-powered mock interview platform that simulates real interviews and provides actionable feedback.",
    detailedDescription:
      "An AI-powered interview preparation platform that conducts realistic mock interviews, evaluates answers in real-time, and gives actionable feedback to help users prepare for technical interviews.",
    keyFeatures: [
      "AI-powered mock interviews with real-time evaluation",
      "Multiple interview domains",
      "Instant feedback on content, clarity, and structure",
      "Question bank with curated problems",
      "Progress tracking and analytics",
      "Study plan generation",
    ],
    techStack: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "Gemini API",
      "MongoDB",
      "JWT",
    ],
    links: [
      {
        label: "Live Demo",
        url: "https://smart-mock-interview-prep.vercel.app/",
        type: "live",
      },
    ],
    poster: "/images/projects/mockmate-ai.webp",
    screenshots: ["/images/projects/mockmate-ai.webp"],
    year: "2025",
    status: "completed",
    visibility: "featured",
    category: "Full Stack — AI Powered",
    filterCategory: "ai",
    dataSource:
      "Work.tsx in existing portfolio + screenshot (MockMateAI.webp) + live URL verified",
  },

  {
    slug: "real-time-booking",
    title: "Real-Time Ticket Booking Platform",
    shortDescription:
      "Concurrent ticket booking platform with atomic seat locking to prevent duplicate reservations.",
    detailedDescription:
      "A real-time ticket booking platform designed to handle concurrent booking requests and reduce duplicate seat allocation. Features concurrency-control logic ensuring multiple users cannot successfully reserve the same seat during simultaneous booking attempts.",
    problem:
      "In event booking systems, multiple users attempting to book the same seat simultaneously leads to race conditions and duplicate reservations.",
    solution:
      "Implemented backend concurrency control with atomic database operations and seat locking to maintain booking consistency, with real-time availability updates on the frontend.",
    keyFeatures: [
      "Real-time seat availability updates",
      "Atomic database operations for seat locking",
      "Concurrency control preventing duplicate bookings",
      "JWT-based authentication",
      "REST API for booking workflows",
      "Responsive booking interface",
    ],
    techStack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "Socket.IO",
      "JWT",
      "Concurrency Control",
    ],
    links: [],
    poster: "/images/projects/ticket_booking_poster.png",
    screenshots: ["/images/projects/ticket_booking_poster.png"],
    year: "2025",
    status: "completed",
    visibility: "featured",
    category: "Full Stack — Real-Time Systems",
    filterCategory: "real-time",
    challenges:
      "Designing atomic seat locking without database-level transactions, handling WebSocket reconnection, and ensuring consistency under high concurrent load.",
    dataSource:
      "SE + 545 + WD resumes + PPTX file in Projects & Internship folder",
  },

  // ── SELECTED PROJECTS ──────────────────────────────────────

  {
    slug: "campushub",
    title: "CampusHub",
    shortDescription:
      "University event management platform with OTP verification and admin dashboard.",
    detailedDescription:
      "A centralized university event management platform for publishing events and managing student registrations. Features JWT-based authentication, OTP verification for secure access, and an admin dashboard for managing events, registrations, and participant information.",
    keyFeatures: [
      "OTP verification for account security",
      "JWT-based authentication",
      "Admin Dashboard for event management",
      "Student registration system",
      "RESTful API architecture",
    ],
    techStack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "OTP Verification",
      "REST APIs",
    ],
    links: [],
    poster: undefined,
    screenshots: [],
    year: "2025",
    status: "completed",
    visibility: "all",
    category: "Full Stack — MERN",
    filterCategory: "full-stack",
    dataSource: "BWU + WD + CS resumes (has Live Demo + GitHub linked in PDF)",
  },

  {
    slug: "deep-packet-inspection",
    title: "Deep Packet Inspection Engine",
    shortDescription:
      "Network traffic analysis engine for protocol, flow, and application-level inspection of PCAP files.",
    detailedDescription:
      "A Deep Packet Inspection engine that captures and analyzes network traffic from PCAP files. Implements packet parsing for Ethernet, IPv4, and TCP headers, five-tuple flow tracking, TLS ClientHello SNI extraction, and traffic classification using domain, IP, and application rules. Uses multithreading for concurrent packet processing.",
    keyFeatures: [
      "Ethernet, IPv4, TCP header packet parsing",
      "Five-tuple flow tracking (src IP, dst IP, src port, dst port, protocol)",
      "TLS ClientHello SNI information extraction",
      "Traffic classification and filtering rules",
      "Multithreaded concurrent packet processing",
    ],
    techStack: [
      "C++",
      "PCAP",
      "Ethernet",
      "IPv4",
      "TCP/IP",
      "TLS/SNI",
      "Multithreading",
    ],
    links: [],
    poster: undefined,
    screenshots: [],
    year: "2025",
    status: "completed",
    visibility: "all",
    category: "Systems — Network Security",
    filterCategory: "systems",
    dataSource: "SE + BWU + CS resumes (GitHub linked in PDF)",
  },

  {
    slug: "carreros",
    title: "CarrerOS",
    shortDescription:
      "AI-powered career platform for building skills, tracking progress, and landing jobs.",
    detailedDescription:
      "An all-in-one AI-powered career platform for building skills, tracking progress, preparing for interviews, and landing dream jobs. Features a career roadmap, skill tracker, AI mock interviews, job matching, and resume building.",
    keyFeatures: [
      "AI Career Roadmap",
      "Skill Tracker",
      "AI Mock Interviews",
      "Job Matcher",
      "Resume Builder",
    ],
    techStack: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "JWT",
    ],
    links: [],
    poster: "/images/projects/carreros.webp",
    screenshots: ["/images/projects/carreros.webp"],
    year: "2025",
    status: "completed",
    visibility: "all",
    category: "Full Stack — MERN + AI",
    filterCategory: "ai",
    dataSource: "Work.tsx in existing portfolio + screenshot (CarrierOS.webp)",
  },

  {
    slug: "healthsathi-ai",
    title: "HealthSathi AI",
    shortDescription:
      "AI-powered health companion for personalized wellness guidance.",
    detailedDescription:
      "An AI health companion that provides personalized guidance based on health data and goals. Features smart plans for workout, diet, sleep, and mindfulness, along with progress tracking and 24/7 AI support.",
    keyFeatures: [
      "AI Health Coach",
      "Smart Plans (workout, diet, sleep, mindfulness)",
      "Progress tracking (fitness, mood, sleep, nutrition)",
      "24/7 AI support",
    ],
    techStack: [
      "Node.js",
      "Express.js",
      "RESTful APIs",
      "JWT",
      "Machine Learning",
      "MongoDB",
    ],
    links: [],
    poster: "/images/projects/healthsathi.webp",
    screenshots: ["/images/projects/healthsathi.webp"],
    year: "2025",
    status: "completed",
    visibility: "all",
    category: "Full Stack — ML + MERN",
    filterCategory: "ai",
    dataSource:
      "Work.tsx in existing portfolio + screenshot (HealthAPP.webp) + HealthSathi AI project folder",
  },

  {
    slug: "student-info-system",
    title: "Student Information System",
    shortDescription:
      "Full-stack MERN student management system with admin portal, CRUD, and animated UI.",
    detailedDescription:
      "A modern, responsive Student Information System built with the MERN stack. Features an admin portal for managing student records with dashboard analytics, real-time search, filtering, and form validation. Designed as a complete college practical project demonstrating the full MERN development lifecycle.",
    keyFeatures: [
      "JWT Authentication with bcrypt",
      "Dashboard analytics (student statistics)",
      "CRUD student management",
      "Real-time search and filtering",
      "JavaScript form validation",
      "Modern animated UI/UX",
      "Responsive design",
      "Protected routes",
    ],
    techStack: [
      "React",
      "Vite",
      "JavaScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT",
      "bcryptjs",
    ],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/code-with-soham/student-info-system",
        type: "github",
      },
    ],
    poster: undefined,
    screenshots: [],
    year: "2025",
    status: "completed",
    visibility: "all",
    category: "Full Stack — MERN",
    filterCategory: "full-stack",
    dataSource:
      "Student Management System repository + README (543 lines) + Git remote verified",
  },

  {
    slug: "placementos-ai",
    title: "PlacementOS AI",
    shortDescription:
      "AI-powered placement preparation platform — DSA, core subjects, aptitude, and AI coaching.",
    detailedDescription:
      "An AI-powered full-stack application to help students become job-ready in 30 days. Manages DSA practice, Core CS subjects, aptitude training, revision, AI coaching, and progress tracking.",
    keyFeatures: [
      "DSA practice with progress tracking",
      "Core CS subject management",
      "Aptitude training",
      "AI coaching via Groq/Llama 3.3",
      "Revision scheduler",
      "Progress analytics",
    ],
    techStack: [
      "React 19",
      "Vite",
      "Tailwind CSS",
      "Framer Motion",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Groq API",
      "Llama 3.3",
      "JWT",
    ],
    links: [],
    poster: undefined,
    screenshots: [],
    year: "2026",
    status: "in-progress",
    visibility: "all",
    category: "Full Stack — AI Powered",
    filterCategory: "ai",
    dataSource: "PlacementOS AI project folder + README",
  },

  // ── EXPERIMENTAL / EARLY-STAGE ─────────────────────────────

  {
    slug: "routine-streak-ai",
    title: "Routine Streak AI",
    shortDescription: "AI-powered routine and habit tracking application.",
    detailedDescription:
      "An AI-powered routine and habit tracking application built with React and Vite.",
    keyFeatures: [],
    techStack: ["React", "Vite", "Tailwind CSS"],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/code-with-soham/Routine-Streak-AI",
        type: "github",
      },
    ],
    poster: undefined,
    screenshots: [],
    year: "2026",
    status: "in-progress",
    visibility: "all",
    category: "Frontend — React",
    filterCategory: "frontend",
    dataSource:
      "Routine Streak AI folder + minimal README (default Vite template) + Git remote verified",
  },

  {
    slug: "real-time-messaging",
    title: "Real-Time Messaging Platform",
    shortDescription: "WhatsApp-inspired real-time messaging platform.",
    detailedDescription:
      "A real-time messaging platform inspired by WhatsApp, built with modern web technologies.",
    keyFeatures: [],
    techStack: [],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/code-with-soham/WhatsApp",
        type: "github",
      },
    ],
    poster: undefined,
    screenshots: [],
    year: "2026",
    status: "in-progress",
    visibility: "all",
    category: "Full Stack — Real-Time",
    filterCategory: "real-time",
    dataSource:
      "Real-Time Messaging Platform folder + minimal README + Git remote verified",
  },
];

// ── Utility Getters ─────────────────────────────────────────

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.visibility === "featured");
}

export function getVisibleProjects(): Project[] {
  return projects.filter((p) => p.visibility !== "hidden");
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.filter((p) => p.visibility !== "hidden").map((p) => p.slug);
}

export function getProjectCategories(): string[] {
  const cats = new Set(projects.map((p) => p.filterCategory));
  return Array.from(cats);
}

export function getAdjacentProjects(slug: string): { prev: Project | null; next: Project | null } {
  const visible = getVisibleProjects();
  const idx = visible.findIndex((p) => p.slug === slug);
  return {
    prev: idx > 0 ? visible[idx - 1] : null,
    next: idx < visible.length - 1 ? visible[idx + 1] : null,
  };
}

export function getRelatedProjects(slug: string, count = 3): Project[] {
  const current = getProjectBySlug(slug);
  if (!current) return [];
  const visible = getVisibleProjects().filter((p) => p.slug !== slug);
  // Prioritize same filterCategory
  const sameCategory = visible.filter((p) => p.filterCategory === current.filterCategory);
  const others = visible.filter((p) => p.filterCategory !== current.filterCategory);
  return [...sameCategory, ...others].slice(0, count);
}
