"use client";

import React, { useState } from "react";
import { motion, MotionValue, useTransform } from "motion/react";
import { personalInfo } from "@/data/personal";

interface HeroTypeProps {
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
}

export default function HeroType({ mouseX, mouseY }: HeroTypeProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Foreground parallax (moves slightly with mouse)
  const x = useTransform(mouseX, [-1, 1], [-10, 10]);
  const y = useTransform(mouseY, [-1, 1], [-5, 5]);

  const firstNameLetters = personalInfo.firstName.split("");
  const lastNameLetters = personalInfo.lastName.split("");

  return (
    <motion.div 
      className="w-full md:w-[70%] z-40 relative pointer-events-auto mb-8 md:mb-0"
      style={{ x, y }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-cursor="IDENTITY"
    >
      <h1 className="text-display text-[clamp(64px,18vw,120px)] md:text-[11vw] leading-[0.9] md:leading-[0.85] text-[var(--text-primary)] font-serif uppercase flex flex-col">
        {/* FIRST NAME */}
        <div className="flex overflow-hidden group">
          {firstNameLetters.map((letter, i) => (
            <motion.span 
              key={`first-${i}`}
              className="inline-block transition-all duration-300 ease-out"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 + (i * 0.05) }}
              style={{
                // Subtle spacing expansion on hover
                paddingRight: isHovered ? "0.15vw" : "0vw",
                color: isHovered ? "var(--accent-primary)" : "var(--text-primary)",
                transitionDelay: isHovered ? `${i * 20}ms` : "0ms"
              }}
            >
              {letter}
            </motion.span>
          ))}
        </div>
        
        {/* LAST NAME */}
        <div className="flex overflow-hidden md:ml-[10vw]">
          {lastNameLetters.map((letter, i) => (
            <motion.span 
              key={`last-${i}`}
              className="inline-block transition-all duration-300 ease-out italic text-[var(--text-secondary)]"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 + (i * 0.05) }}
              style={{
                paddingRight: isHovered ? "0.15vw" : "0vw",
                color: isHovered ? "var(--text-primary)" : "var(--text-secondary)",
                transitionDelay: isHovered ? `${i * 20}ms` : "0ms"
              }}
            >
              {letter}
            </motion.span>
          ))}
        </div>
      </h1>
      
      {/* Dynamic Role Line */}
      <div className="mt-8 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 pl-2 overflow-hidden h-6">
        <div className="w-12 h-[1px] bg-[var(--border-default)] hidden md:block" />
        <div className="relative w-full h-full">
          <motion.div 
            className="absolute inset-0 font-technical text-sm md:text-base tracking-widest text-[var(--accent-primary)] uppercase flex items-center"
            initial={{ y: 0, opacity: 1 }}
            animate={{ y: isHovered ? -30 : 0, opacity: isHovered ? 0 : 1 }}
            transition={{ duration: 0.25 }}
          >
            {personalInfo.title}
          </motion.div>
          <motion.div 
            className="absolute inset-0 font-technical text-sm md:text-base tracking-widest text-[var(--text-secondary)] uppercase flex items-center"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: isHovered ? 0 : 30, opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.25 }}
          >
            FULL STACK / FRONTEND / BACKEND
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
