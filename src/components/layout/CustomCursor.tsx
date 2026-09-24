"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "motion/react";
import { useReducedMotion } from "motion/react";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [label, setLabel] = useState<string | null>(null);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);
  
  const prefersReducedMotion = useReducedMotion();

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMounted(true);
    
    // Only show custom cursor on devices that support hover (i.e. not touch devices)
    if (window.matchMedia("(hover: none)").matches || prefersReducedMotion) {
      return;
    }

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", moveCursor);
    document.body.addEventListener("mouseenter", handleMouseEnter);
    document.body.addEventListener("mouseleave", handleMouseLeave);

    // Track interactable elements for contextual labels
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Look up the DOM tree for a data-cursor attribute
      const elementWithCursor = target.closest("[data-cursor]");
      if (elementWithCursor) {
        setLabel(elementWithCursor.getAttribute("data-cursor"));
      } else {
        setLabel(null);
      }
    };

    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.body.removeEventListener("mouseenter", handleMouseEnter);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY, prefersReducedMotion]);

  // Prevent hydration mismatch by only rendering after mount
  if (!isMounted) return null;

  if (prefersReducedMotion || window.matchMedia("(hover: none)").matches) {
    return null;
  }

  return (
    <motion.div
      className="fixed top-0 left-0 z-[99999] pointer-events-none flex items-center justify-center rounded-full bg-[var(--accent-primary)] mix-blend-difference text-[var(--bg-primary)] font-technical text-[10px] font-medium tracking-widest uppercase overflow-hidden"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
        translateX: "-50%",
        translateY: "-50%",
      }}
      initial={{ width: 12, height: 12, opacity: 0 }}
      animate={{
        width: label ? 64 : 12,
        height: label ? 64 : 12,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
    >
      {label && (
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
        >
          {label}
        </motion.span>
      )}
    </motion.div>
  );
}
