"use client";

import React, { useRef } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  as?: React.ElementType;
}

export default function TextReveal({ text, className = "", delay = 0, as: Component = "span" }: TextRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });
  const prefersReducedMotion = useReducedMotion();

  // Split text into words for animation
  const words = text.split(" ");

  if (prefersReducedMotion) {
    return <Component className={className}>{text}</Component>;
  }

  return (
    <Component ref={ref} className={`${className} inline-block`}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true" className="inline-block">
        {words.map((word, index) => (
          <span key={index} className="inline-block overflow-hidden pb-1 -mb-1 mr-[0.25em]">
            <motion.span
              className="inline-block"
              initial={{ y: "110%" }}
              animate={isInView ? { y: 0 } : { y: "110%" }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1], // expo out
                delay: delay + index * 0.03,
              }}
            >
              {word}
            </motion.span>
          </span>
        ))}
      </span>
    </Component>
  );
}
