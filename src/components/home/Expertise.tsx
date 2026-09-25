"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import SectionLabel from "@/components/ui/SectionLabel";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

const expertiseData = [
  {
    category: "FULL-STACK SYSTEMS",
    skills: ["MERN Stack", "Next.js", "REST APIs", "MVC Architecture"],
    description:
      "End-to-end development of scalable web applications. Expertise in designing robust backend architectures with Node.js and Express while delivering highly interactive, responsive frontend experiences using React and Next.js. Focus on clean code, modular architecture, and seamless API integration.",
  },
  {
    category: "REAL-TIME WEB APPLICATIONS",
    skills: ["Socket.IO", "Concurrency Control", "Redis", "BullMQ"],
    description:
      "Building systems that require instant data delivery and complex state synchronization. Experience implementing concurrent ticket booking mechanisms with atomic seat locking and persistent, reliable background job scheduling for high-volume email processing.",
  },
  {
    category: "AI / GENAI INTEGRATION",
    skills: ["Gemini API", "Groq API", "Prompt Engineering", "RAG Fundamentals"],
    description:
      "Integrating state-of-the-art Large Language Models into practical applications. Built an intelligent desktop assistant, an AI-powered mock interview evaluator with real-time feedback, and automated career roadmap generation tools.",
  },
  {
    category: "FRONTEND ENGINEERING",
    skills: ["React.js", "Tailwind CSS", "Framer Motion", "GSAP", "DOM"],
    description:
      "Creating premium, high-performance user interfaces. Specialized in complex state management (Zustand), micro-interactions, smooth animations, and pixel-perfect implementation of sophisticated editorial designs that work flawlessly across all device sizes.",
  },
  {
    category: "NETWORK / SECURITY",
    skills: ["Deep Packet Inspection", "C++", "TLS/SNI", "TCP/IP"],
    description:
      "Low-level systems programming and network traffic analysis. Developed a multi-threaded C++ engine capable of parsing PCAP files, tracking five-tuple flows, and extracting TLS ClientHello SNI data for traffic classification and security monitoring.",
  },
];

export default function Expertise() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <section id="expertise" className="py-16 md:py-40 relative border-t border-[var(--border-subtle)] bg-[var(--bg-secondary)]">
      <div className="container-editorial">
        <SectionLabel label="ENGINEERING EXPERTISE" number="003" className="mb-16 md:mb-24" />

        <div className="w-full border-t border-[var(--border-default)]">
          {expertiseData.map((item, index) => {
            const isExpanded = expandedIndex === index;

            return (
              <RevealOnScroll key={item.category} delay={index * 0.1}>
                <div 
                  className="border-b border-[var(--border-default)] group cursor-pointer"
                  onClick={() => setExpandedIndex(isExpanded ? null : index)}
                  onMouseEnter={() => {
                    // Pre-expand on desktop hover for fluid interaction
                    if (window.matchMedia("(min-width: 768px)").matches) {
                      setExpandedIndex(index);
                    }
                  }}
                >
                  <div className="py-8 md:py-12 flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-12 relative overflow-hidden">
                    
                    {/* Hover indicator background */}
                    <div className={`absolute inset-0 bg-[var(--bg-elevated)] transform origin-left transition-transform duration-500 ease-in-out z-0 ${isExpanded ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />

                    {/* Category Title */}
                    <div className="relative z-10 w-full md:w-1/3 flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
                      <span className={`font-technical text-xs tracking-widest transition-colors duration-300 ${isExpanded ? 'text-[var(--accent-primary)]' : 'text-[var(--text-tertiary)]'}`}>
                        0{index + 1}
                      </span>
                      <h3 className={`font-serif text-2xl md:text-4xl transition-colors duration-300 ${isExpanded ? 'text-[var(--text-primary)]' : 'text-[var(--text-secondary)] group-hover:text-[var(--text-primary)]'}`}>
                        {item.category}
                      </h3>
                    </div>

                    {/* Skills Metadata List (Desktop only in header) */}
                    <div className="relative z-10 w-full md:w-2/3 hidden md:flex flex-wrap gap-x-6 gap-y-2 font-technical text-xs tracking-wider uppercase text-[var(--text-tertiary)] group-hover:text-[var(--text-secondary)] transition-colors duration-300">
                      {item.skills.map((skill, i) => (
                        <span key={i} className="flex items-center gap-2">
                          <span className={`w-1 h-1 rounded-full bg-current opacity-50 ${i === 0 ? 'hidden' : 'hidden md:block'}`} />
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Plus/Minus Indicator */}
                    <div className="relative z-10 hidden md:flex items-center justify-center w-8 h-8 rounded-full border border-[var(--border-subtle)] text-[var(--text-tertiary)] transition-colors duration-300 group-hover:border-[var(--accent-primary)] group-hover:text-[var(--accent-primary)]">
                      <span className="font-technical text-lg font-light leading-none">
                        {isExpanded ? '−' : '+'}
                      </span>
                    </div>
                  </div>

                  {/* Expandable Description */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="relative z-10 bg-[var(--bg-elevated)] px-0 md:px-12 overflow-hidden"
                      >
                        <div className="pb-8 md:pb-12 md:pl-[33%] md:pr-16 text-[var(--text-secondary)] font-sans text-base md:text-lg leading-relaxed">
                          <p className="mb-6 md:mb-0">{item.description}</p>
                          
                          {/* Skills Metadata List (Mobile only in expanded body) */}
                          <div className="flex md:hidden flex-col gap-3 font-technical text-xs tracking-wider uppercase text-[var(--text-primary)]">
                            {item.skills.map((skill, i) => (
                              <span key={i} className="block">
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
