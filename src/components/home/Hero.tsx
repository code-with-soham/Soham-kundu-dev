"use client";

import React, { useState, useEffect } from "react";
import { motion, useMotionValue } from "motion/react";
import HeroInteractiveField from "./HeroInteractiveField";
import HeroPortrait from "./HeroPortrait";
import HeroType from "./HeroType";
import HeroCTA from "./HeroCTA";

export default function Hero() {
  const [hoverState, setHoverState] = useState("SOFTWARE ENGINEERING");
  const [timeShift, setTimeShift] = useState(true);

  // Global pointer values for the Hero field (-1 to 1 normalized)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    // "Time Shift" signature moment on mount
    const timer = setTimeout(() => {
      setTimeShift(false);
    }, 800); // Effect lasts 800ms
    return () => clearTimeout(timer);
  }, []);

  const handlePointerMove = (e: React.PointerEvent) => {
    // Only process on devices with pointer interaction
    if (typeof window !== "undefined" && window.matchMedia("(hover: none)").matches) return;
    
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    
    // Normalize to -1 to 1
    const x = (clientX / innerWidth) * 2 - 1;
    const y = (clientY / innerHeight) * 2 - 1;
    
    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <section 
      className="relative md:min-h-screen flex flex-col md:justify-between overflow-hidden bg-[var(--bg-primary)] select-none border-b border-[var(--border-subtle)] md:border-none"
      onPointerMove={handlePointerMove}
      onPointerLeave={() => { mouseX.set(0); mouseY.set(0); setHoverState("SOFTWARE ENGINEERING"); }}
    >
      {/* Background Interactive Field - Hidden on Mobile */}
      <div className="hidden md:block">
        <HeroInteractiveField mouseX={mouseX} mouseY={mouseY} />
      </div>

      {/* Time Shift Glitch Overlay (Runs once) */}
      <motion.div 
        className="hidden md:block absolute inset-0 z-50 pointer-events-none mix-blend-difference bg-white"
        initial={{ opacity: 0.1 }}
        animate={{ opacity: timeShift ? [0.1, 0, 0.05, 0] : 0 }}
        transition={{ duration: 0.8, ease: "linear" }}
      />

      <div className="container-editorial flex flex-col md:justify-between relative z-10 pt-28 pb-16 md:pt-12 md:pb-12 md:h-full">
        
        {/* Top Edge Details */}
        <div className="w-full flex justify-between items-start font-technical text-[9px] tracking-widest text-[var(--text-tertiary)] uppercase mt-0 md:mt-24 mb-12 md:mb-0">
          <motion.div 
            className="flex flex-col gap-1"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: timeShift ? 10 : 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <span className="text-[var(--text-primary)] text-xs mb-1">SK</span>
            <span>SYSTEM / 01</span>
            <span className="hidden md:block">V2.0.26</span>
          </motion.div>
          
          <motion.div 
            className="flex items-center gap-2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: timeShift ? -10 : 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-primary)] animate-pulse shadow-[0_0_8px_var(--accent-primary)]" />
            <span className="text-[var(--accent-primary)] transition-all duration-300">
              {hoverState === "SOFTWARE ENGINEERING" ? "SYS.ONLINE" : "SYS.INTERACTIVE"}
            </span>
          </motion.div>
        </div>

        {/* Main Interface Center */}
        <div className="flex-grow flex flex-col md:flex-row items-start md:items-center mt-12 md:mt-24 relative w-full">
          {/* Typography */}
          <HeroType mouseX={mouseX} mouseY={mouseY} />
          
          {/* Portrait */}
          <HeroPortrait mouseX={mouseX} mouseY={mouseY} setHoverState={setHoverState} />
        </div>

        {/* Bottom Edge Details */}
        <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-end gap-12 mt-20 md:mt-12">
          
          <motion.div 
            className="font-technical text-[9px] md:text-xs leading-relaxed text-[var(--text-tertiary)] uppercase tracking-wider"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: timeShift ? -10 : 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >
            <p className="text-[var(--text-secondary)] mb-3 font-sans lowercase italic text-sm md:text-base">building scalable systems</p>
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              <span>FULL STACK</span>
              <span className="opacity-50">{"//"}</span>
              <span>FRONTEND</span>
              <span className="opacity-50">{"//"}</span>
              <span>BACKEND</span>
            </div>
            <div className="flex flex-wrap gap-x-4 gap-y-2 mt-1">
              <span>AI</span>
              <span className="opacity-50">{"//"}</span>
              <span>REAL-TIME</span>
            </div>
          </motion.div>

          <div 
            className="flex flex-col items-start md:items-end gap-6"
            onMouseEnter={() => setHoverState("EXPLORATION")}
            onMouseLeave={() => setHoverState("SOFTWARE ENGINEERING")}
          >
            {/* Interactive Data Stream / Status */}
            <motion.div 
              className="font-technical text-[9px] tracking-widest text-[var(--accent-primary)] uppercase text-right"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              FIELD / {hoverState}
            </motion.div>

            {/* Smart Scroll Indicator / CTA */}
            <HeroCTA />
          </div>
        </div>

      </div>
    </section>
  );
}
