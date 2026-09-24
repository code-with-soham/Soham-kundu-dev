"use client";

import React, { useRef, useState } from "react";
import { motion, useReducedMotion, HTMLMotionProps } from "motion/react";

interface MagneticButtonProps extends HTMLMotionProps<"button"> {
  children: React.ReactNode;
  strength?: number;
  className?: string;
  cursorLabel?: string;
}

export default function MagneticButton({
  children,
  strength = 0.3,
  className = "",
  cursorLabel,
  ...props
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const prefersReducedMotion = useReducedMotion();
  const isTouchDevice = typeof window !== "undefined" ? window.matchMedia("(hover: none)").matches : false;

  const handleMouse = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (prefersReducedMotion || isTouchDevice || !ref.current) return;
    
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * strength, y: middleY * strength });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={`relative inline-flex items-center justify-center px-8 py-4 rounded-full border border-[var(--border-hover)] bg-[var(--bg-elevated)] hover:bg-[var(--border-default)] transition-colors duration-300 ${className}`}
      data-cursor={cursorLabel}
      {...props}
    >
      <span className="relative z-10 font-technical text-sm uppercase tracking-wider text-[var(--text-primary)]">
        {children}
      </span>
    </motion.button>
  );
}
