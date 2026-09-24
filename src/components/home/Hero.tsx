"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import TextReveal from "@/components/ui/TextReveal";
import { personalInfo } from "@/data/personal";

export default function Hero() {

  return (
    <section className="relative min-h-screen pt-48 md:pt-56 pb-16 flex flex-col justify-between overflow-hidden" data-cursor="SCROLL">
      <div className="container-editorial flex-grow flex flex-col">
        {/* Technical Metadata Row */}
        <motion.div 
          className="w-full flex justify-between items-center font-technical text-[9px] tracking-widest text-[var(--text-tertiary)] uppercase border-b border-[var(--border-subtle)] pb-4 mb-4 relative z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <div className="flex gap-8">
            <span>S. KUNDU</span>
            <span className="hidden md:inline-block text-[var(--text-secondary)]">v2.0.26 // ARCHIVE</span>
          </div>
          <div className="flex gap-8">
            <span className="hidden md:inline-block">KOLKATA, IN</span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-primary)] animate-pulse" />
              SYS.ONLINE
            </span>
          </div>
        </motion.div>

        {/* Main Editorial Content */}
        <div className="flex-grow flex flex-col md:flex-row items-start md:items-center mt-16 md:mt-24 relative">
          
          {/* Typography Stack */}
          <div className="w-full md:w-[70%] z-10">
            <h1 className="text-display text-[16vw] md:text-[11vw] leading-[0.85] text-[var(--text-primary)] font-serif uppercase flex flex-col">
              <div className="overflow-hidden">
                <motion.span 
                  className="block"
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                >
                  {personalInfo.firstName}
                </motion.span>
              </div>
              <div className="overflow-hidden">
                <motion.span 
                  className="block text-[var(--text-secondary)] italic md:ml-[10vw]"
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                >
                  {personalInfo.lastName}
                </motion.span>
              </div>
            </h1>
            
            <div className="mt-8 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 pl-2">
              <div className="w-12 h-[1px] bg-[var(--border-default)] hidden md:block" />
              <h2 className="font-technical text-sm md:text-base tracking-widest text-[var(--accent-primary)] uppercase">
                <TextReveal text={personalInfo.title} delay={0.6} />
              </h2>
            </div>
          </div>

          {/* Portrait Image */}
          <motion.div 
            className="w-[60%] md:w-[28%] aspect-[3/4] absolute right-0 md:right-[2%] top-[10%] md:top-auto md:relative opacity-30 md:opacity-100 z-0 bg-[var(--bg-secondary)] border border-[var(--border-subtle)] p-2 md:p-3 hover:-rotate-1 transition-transform duration-700 md:-mt-12"
            initial={{ opacity: 0, scale: 0.95, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.8 }}
            data-cursor="VIEW"
          >
            <div className="w-full h-full relative overflow-hidden bg-[var(--bg-primary)] grayscale hover:grayscale-0 transition-all duration-700 shadow-inner">
              <Image 
                src="/images/photos/soham-portrait.png" 
                alt="Soham Kundu" 
                fill 
                className="object-cover object-center scale-105 hover:scale-100 transition-transform duration-700"
                priority
                sizes="(max-width: 768px) 60vw, 30vw"
              />
            </div>
            {/* Technical corner brackets */}
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[var(--text-tertiary)] -translate-x-1 -translate-y-1" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[var(--text-tertiary)] translate-x-1 translate-y-1" />
            
            <div className="absolute -bottom-6 right-0 font-technical text-[9px] text-[var(--text-tertiary)] tracking-widest uppercase">
              FIG. 001 // PORTRAIT
            </div>
          </motion.div>
        </div>

        {/* Bottom Navigation & Positioning */}
        <div className="mt-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-8 pb-4">
          <motion.div 
            className="font-technical text-xs leading-relaxed text-[var(--text-secondary)] uppercase tracking-wider max-w-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <p>Building scalable systems and modern interfaces.</p>
            <div className="flex gap-4 mt-2 text-[var(--text-tertiary)]">
              <span>FULL STACK</span>
              <span>{"//"}</span>
              <span>FRONTEND</span>
              <span>{"//"}</span>
              <span>BACKEND</span>
            </div>
            <div className="flex gap-4 mt-1 text-[var(--text-tertiary)]">
              <span>AI / GENAI</span>
              <span>{"//"}</span>
              <span>REAL-TIME</span>
            </div>
          </motion.div>

          {/* Scroll button removed as requested */}
        </div>
      </div>
    </section>
  );
}
