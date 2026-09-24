"use client";

import React, { useState, useEffect, useRef } from "react";

export default function AutoScrollButton() {
  const [isAutoScrolling, setIsAutoScrolling] = useState(false);
  const requestRef = useRef<number | undefined>(undefined);

  const startAutoScroll = () => {
    setIsAutoScrolling(true);
  };

  const stopAutoScroll = () => {
    setIsAutoScrolling(false);
    if (requestRef.current) {
      cancelAnimationFrame(requestRef.current);
    }
  };

  const toggleAutoScroll = () => {
    if (isAutoScrolling) {
      stopAutoScroll();
    } else {
      startAutoScroll();
    }
  };

  useEffect(() => {
    let animationFrameId: number;

    const animate = () => {
      window.scrollBy(0, 1.5); // Scroll speed
      animationFrameId = requestAnimationFrame(animate);
      requestRef.current = animationFrameId;
    };

    if (isAutoScrolling) {
      animationFrameId = requestAnimationFrame(animate);
      requestRef.current = animationFrameId;
    }
    
    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isAutoScrolling]);

  useEffect(() => {
    // Stop scrolling if user interacts manually
    const handleUserInteraction = () => {
      if (isAutoScrolling) {
        stopAutoScroll();
      }
    };

    window.addEventListener("wheel", handleUserInteraction);
    window.addEventListener("touchstart", handleUserInteraction);

    return () => {
      window.removeEventListener("wheel", handleUserInteraction);
      window.removeEventListener("touchstart", handleUserInteraction);
    };
  }, [isAutoScrolling]);

  return (
    <div className="fixed bottom-8 right-8 z-[100] hidden md:block">
      <button 
        onClick={toggleAutoScroll}
        className={`group flex items-center justify-center w-12 h-12 rounded-full border border-[var(--border-subtle)] backdrop-blur-md transition-all duration-300 ${
          isAutoScrolling ? "bg-[var(--accent-primary)] text-black" : "bg-[var(--bg-secondary)] text-[var(--text-primary)] hover:border-[var(--accent-primary)]"
        }`}
        title={isAutoScrolling ? "Stop Auto-Scroll" : "Start Auto-Scroll"}
      >
        <span className="sr-only">Toggle Auto-Scroll</span>
        {isAutoScrolling ? (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <rect x="6" y="4" width="4" height="16" />
            <rect x="14" y="4" width="4" height="16" />
          </svg>
        ) : (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform transition-transform duration-300 group-hover:translate-y-1">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <polyline points="19 12 12 19 5 12"></polyline>
          </svg>
        )}
      </button>
    </div>
  );
}
