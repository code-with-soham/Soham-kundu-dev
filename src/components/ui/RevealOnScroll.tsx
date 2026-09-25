"use client";

import React, { useRef } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";

interface RevealOnScrollProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  yOffset?: number;
  duration?: number;
  once?: boolean;
}

export default function RevealOnScroll({
  children,
  className = "",
  delay = 0,
  yOffset = 30,
  duration = 0.8,
  once = true,
}: RevealOnScrollProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-10% 0px" });
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      className={`${className} max-md:!opacity-100 max-md:!transform-none`}
      initial={{ opacity: 0, y: yOffset }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: yOffset }}
      transition={{
        duration,
        ease: [0.16, 1, 0.3, 1], // ease-out-expo
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}
