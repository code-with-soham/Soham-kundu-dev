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
      className="fixed top-0 left-0 z-[99999] pointer-events-none flex items-center justify-center bg-[var(--accent-primary)] mix-blend-difference text-[var(--bg-primary)] font-technical text-[8px] font-medium tracking-widest uppercase whitespace-nowrap"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
        translateX: "-50%",
        translateY: "-50%",
        borderRadius: label ? "4px" : "50%",
      }}
      initial={{ width: 8, height: 8, opacity: 0 }}
      animate={{
        width: label ? "auto" : 8,
        height: label ? 20 : 8,
        opacity: isVisible ? 1 : 0,
        paddingLeft: label ? 8 : 0,
        paddingRight: label ? 8 : 0,
      }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
    >
      {label && (
        <motion.span
          initial={{ opacity: 0, x: -5 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.05 }}
        >
          {label}
        </motion.span>
      )}
    </motion.div>
  );
}
