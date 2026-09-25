"use client";

import React, { useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";

export default function HeroCTA() {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const isTouchDevice = typeof window !== "undefined" ? window.matchMedia("(hover: none)").matches : false;

  const handleMouse = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (prefersReducedMotion || isTouchDevice || !ref.current) return;
    
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
    setIsHovered(false);
  };

  const handleScroll = () => {
    const workSection = document.getElementById("work");
    if (workSection) {
      workSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Mobile CTA */}
      <button 
        onClick={handleScroll}
        className="md:hidden flex items-center gap-4 text-xs font-technical tracking-widest text-[var(--text-primary)] uppercase py-4 min-h-[44px]"
      >
        EXPLORE WORK
        <span className="text-[var(--accent-primary)]">↓</span>
      </button>

      {/* Desktop Animated CTA */}
      <motion.button
        ref={ref}
        onClick={handleScroll}
        onMouseMove={handleMouse}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={reset}
        animate={{ x: position.x, y: position.y, opacity: 1 }}
        transition={{ 
          x: { type: "spring", stiffness: 150, damping: 15, mass: 0.1 },
          y: { type: "spring", stiffness: 150, damping: 15, mass: 0.1 },
          opacity: { delay: 1.2, duration: 1 }
        }}
        className="hidden md:flex relative group items-center gap-4 cursor-none z-30"
        data-cursor="ENTER"
        initial={{ opacity: 0 }}
      >
        {/* Circle Indicator */}
        <div className="relative flex items-center justify-center w-12 h-12 rounded-full border border-[var(--border-hover)] bg-[var(--bg-secondary)] group-hover:bg-[var(--accent-primary)] transition-colors duration-500 overflow-hidden">
          {/* Outer Ring appearing on hover */}
          <div className={`absolute inset-0 rounded-full border border-[var(--accent-primary)] transition-transform duration-500 ${isHovered ? 'scale-150 opacity-0' : 'scale-100 opacity-100'}`} />
          
          {/* Arrow */}
          <motion.span 
            className="text-[var(--text-primary)] group-hover:text-[var(--bg-primary)] text-lg"
            animate={{ rotate: isHovered ? 90 : 0 }}
            transition={{ duration: 0.3 }}
          >
            ↓
          </motion.span>
        </div>

        {/* Label Transition */}
        <div className="font-technical text-[10px] tracking-widest uppercase overflow-hidden h-4 relative w-32 text-left">
          <motion.span 
            className="absolute inset-0 text-[var(--text-secondary)] flex items-center"
            animate={{ y: isHovered ? -20 : 0, opacity: isHovered ? 0 : 1 }}
            transition={{ duration: 0.3 }}
          >
            EXPLORE WORK
          </motion.span>
          <motion.span 
            className="absolute inset-0 text-[var(--accent-primary)] flex items-center"
            animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            ENTER SYSTEM
          </motion.span>
        </div>
      </motion.button>
    </>
  );
}
