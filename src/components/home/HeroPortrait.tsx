"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, MotionValue, useTransform, AnimatePresence } from "motion/react";
import { personalInfo } from "@/data/personal";

interface HeroPortraitProps {
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
  setHoverState: (state: string) => void;
}

export default function HeroPortrait({ mouseX, mouseY, setHoverState }: HeroPortraitProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [hasScanned, setHasScanned] = useState(false);

  // Depth parallax effect (moves opposite to mouse)
  const x = useTransform(mouseX, [-1, 1], [15, -15]);
  const y = useTransform(mouseY, [-1, 1], [15, -15]);

  const handleMouseEnter = () => {
    setIsHovered(true);
    setHoverState("IDENTITY");
    if (!hasScanned) {
      setHasScanned(true);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setHoverState("SOFTWARE ENGINEERING");
    setHasScanned(false); // Reset scan on leave so it can happen again on next enter
  };

  return (
    <motion.div 
      className="relative w-[60%] md:w-[28%] aspect-[3/4] z-20 mx-auto md:mx-0 md:ml-auto md:-mt-12 cursor-pointer md:cursor-none"
      style={{ x, y }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => {
        if (!isHovered) {
          handleMouseEnter();
          setTimeout(() => handleMouseLeave(), 1500); // Reset after 1.5s on tap
        }
      }}
      data-cursor="SCAN"
    >
      {/* Frame Brackets - Activate on hover */}
      <motion.div 
        className="absolute top-0 left-0 w-4 h-4 border-t border-l border-[var(--text-tertiary)] -translate-x-2 -translate-y-2 z-30 transition-colors duration-300"
        style={{ borderColor: isHovered ? "var(--accent-primary)" : "var(--border-hover)" }}
      />
      <motion.div 
        className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-[var(--text-tertiary)] translate-x-2 translate-y-2 z-30 transition-colors duration-300"
        style={{ borderColor: isHovered ? "var(--accent-primary)" : "var(--border-hover)" }}
      />
      <motion.div 
        className="absolute top-0 right-0 w-4 h-4 border-t border-r border-[var(--text-tertiary)] translate-x-2 -translate-y-2 z-30 transition-colors duration-300"
        style={{ borderColor: isHovered ? "var(--accent-primary)" : "var(--border-hover)" }}
      />
      <motion.div 
        className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-[var(--text-tertiary)] -translate-x-2 translate-y-2 z-30 transition-colors duration-300"
        style={{ borderColor: isHovered ? "var(--accent-primary)" : "var(--border-hover)" }}
      />

      {/* Main Image Container */}
      <div className="w-full h-full relative overflow-hidden bg-[var(--bg-secondary)] border border-[var(--border-subtle)] p-2">
        <div className={`w-full h-full relative overflow-hidden bg-[var(--bg-primary)] transition-all duration-300 ${isHovered ? 'grayscale-0 contrast-125 saturate-150 brightness-110' : 'grayscale contrast-100'}`}>
          <Image 
            src="/images/photos/soham-portrait.png" 
            alt={personalInfo.name} 
            fill 
            className="object-cover object-center scale-105"
            priority
            sizes="(max-width: 768px) 60vw, 30vw"
          />
          
          {/* Scan Line Effect */}
          <AnimatePresence>
            {hasScanned && (
              <motion.div 
                className="absolute left-0 right-0 h-[2px] bg-[var(--accent-primary)] shadow-[0_0_8px_var(--accent-primary)] z-20"
                initial={{ top: "0%", opacity: 0 }}
                animate={{ top: "100%", opacity: [0, 1, 1, 0] }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: "linear" }}
              />
            )}
          </AnimatePresence>

          {/* Copper Tracking Line overlay */}
          <div className={`absolute top-0 bottom-0 left-1/2 w-[1px] bg-[var(--accent-primary)] transition-opacity duration-300 z-10 ${isHovered ? 'opacity-30' : 'opacity-0'}`} />
        </div>
      </div>

      {/* Metadata Panel */}
      <div className="absolute -bottom-10 right-0 flex flex-col items-end font-technical text-[9px] tracking-widest uppercase transition-opacity duration-200">
        <div className="text-[var(--text-tertiary)] flex items-center gap-2">
          {isHovered && <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-primary)] animate-pulse" />}
          FIG. 001 // PORTRAIT
        </div>
        <div className={`text-[var(--accent-primary)] mt-1 transition-all duration-200 overflow-hidden ${isHovered ? 'max-h-10 opacity-100' : 'max-h-0 opacity-0'}`}>
          IDENTITY VERIFIED<br/>
          SK / {personalInfo.title}
        </div>
      </div>
    </motion.div>
  );
}
