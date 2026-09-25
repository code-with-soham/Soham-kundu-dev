"use client";

import React from "react";
import { motion, MotionValue, useTransform } from "motion/react";

interface HeroInteractiveFieldProps {
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
}

export default function HeroInteractiveField({ mouseX, mouseY }: HeroInteractiveFieldProps) {
  // Very subtle translation based on normalized mouse position (-1 to 1)
  const x = useTransform(mouseX, [-1, 1], [-10, 10]);
  const y = useTransform(mouseY, [-1, 1], [-10, 10]);

  return (
    <motion.div 
      className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-20"
      style={{ x, y }}
    >
      {/* Editorial Grid */}
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="heroGrid" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M 100 0 L 0 0 0 100" fill="none" stroke="var(--border-subtle)" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#heroGrid)" />
      </svg>

      {/* Coordinate Markers */}
      <div className="absolute top-1/4 left-[10%] w-3 h-3 border-l border-t border-[var(--text-tertiary)] opacity-50" />
      <div className="absolute top-1/4 right-[10%] w-3 h-3 border-r border-t border-[var(--text-tertiary)] opacity-50" />
      <div className="absolute bottom-1/4 left-[10%] w-3 h-3 border-l border-b border-[var(--text-tertiary)] opacity-50" />
      <div className="absolute bottom-1/4 right-[10%] w-3 h-3 border-r border-b border-[var(--text-tertiary)] opacity-50" />

      {/* Tracking Line */}
      <motion.div 
        className="absolute top-0 bottom-0 w-[1px] bg-[var(--accent-primary)] opacity-10"
        style={{ left: useTransform(mouseX, [-1, 1], ["40%", "60%"]) }}
      />
      <motion.div 
        className="absolute left-0 right-0 h-[1px] bg-[var(--accent-primary)] opacity-10"
        style={{ top: useTransform(mouseY, [-1, 1], ["40%", "60%"]) }}
      />
    </motion.div>
  );
}
