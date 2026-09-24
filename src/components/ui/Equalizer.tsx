"use client";

import React from "react";

// Pre-computed deterministic values for 15 bars
const BAR_DATA = [
  { height: 70, duration: 0.8, delay: 0.1 },
  { height: 45, duration: 1.1, delay: 0.3 },
  { height: 90, duration: 0.6, delay: 0.05 },
  { height: 30, duration: 1.3, delay: 0.25 },
  { height: 80, duration: 0.7, delay: 0.15 },
  { height: 55, duration: 0.9, delay: 0.4 },
  { height: 95, duration: 0.5, delay: 0.2 },
  { height: 40, duration: 1.0, delay: 0.35 },
  { height: 75, duration: 0.65, delay: 0.0 },
  { height: 60, duration: 1.2, delay: 0.45 },
  { height: 85, duration: 0.55, delay: 0.1 },
  { height: 35, duration: 0.95, delay: 0.3 },
  { height: 50, duration: 1.15, delay: 0.2 },
  { height: 65, duration: 0.75, delay: 0.05 },
  { height: 25, duration: 0.85, delay: 0.4 },
];

export default function Equalizer() {
  return (
    <div className="flex items-end gap-[3px] h-4 w-12 relative">
      {BAR_DATA.map((bar, i) => (
        <div
          key={i}
          className="w-[1px] bg-[var(--text-primary)] rounded-full origin-bottom"
          style={{
            height: `${bar.height}%`,
            animation: `equalizer ${bar.duration}s ease-in-out infinite alternate`,
            animationDelay: `${bar.delay}s`,
          }}
        />
      ))}
      <style jsx>{`
        @keyframes equalizer {
          0% { transform: scaleY(0.3); }
          100% { transform: scaleY(1); }
        }
      `}</style>
    </div>
  );
}
