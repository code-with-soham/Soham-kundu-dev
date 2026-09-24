"use client";

import React, { useEffect, useState, useRef } from "react";
import "./FirstLoader.css";

interface FirstLoaderProps {
  onComplete: () => void;
}

export default function FirstLoader({ onComplete }: FirstLoaderProps) {
  const [percent, setPercent] = useState(0);
  const [isClicked, setIsClicked] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isComplete, setIsComplete] = useState(false);
  const buttonRef = useRef<HTMLDivElement>(null);

  // Initial loading simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Random increment for a more organic feel
        return prev + Math.floor(Math.random() * 10) + 1;
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  // Track mouse for the spotlight effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (buttonRef.current) {
        const rect = buttonRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setMousePos({ x, y });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Auto-transition when loading completes
  useEffect(() => {
    if (percent >= 100 && !isClicked) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsClicked(true);
      setTimeout(() => {
        setIsComplete(true);
        setTimeout(() => {
          onComplete();
        }, 1500);
      }, 100);
    }
  }, [percent, isClicked, onComplete]);

  const handleClick = () => {
    if (percent < 100 || isClicked) return;
    setIsClicked(true);
    setTimeout(() => {
      setIsComplete(true);
      setTimeout(() => {
        onComplete();
      }, 1500);
    }, 100);
  };

  return (
    <div className={`loading-screen ${isComplete ? "loader-out" : ""}`}>
      {/* Header */}
      <div className="loading-header">
        <div className="loader-title font-sans">
          Welcome to my portfolio! <br /> Enjoy your stay.
        </div>
      </div>

      {/* Main interactive element */}
      <div
        className={`loading-wrap ${isClicked ? "loading-clicked" : ""} ${isComplete ? "loading-complete" : ""}`}
        onClick={handleClick}
        ref={buttonRef}
        style={
          {
            "--mouse-x": `${mousePos.x}px`,
            "--mouse-y": `${mousePos.y}px`,
            cursor: percent >= 100 ? "pointer" : "default",
          } as React.CSSProperties
        }
      >
        <div className="loading-hover"></div>
        <div className="loading-button">
          {percent < 100 ? (
            <div className="loading-content">
              <div className="loading-content-in font-sans">
                Loading <span>{Math.min(percent, 100)}%</span>
              </div>
            </div>
          ) : (
            <div className="loading-content2 font-sans">
              Enter <div className="loading-box"></div>
              <span>Experience</span>
            </div>
          )}
        </div>
      </div>

      {/* Background Marquee Text visible from the start */}
      <div className="loading-marquee">
        <div className="loading-marquee-track">
          <span>A FULL STACK DEVELOPER • MODERN WEB ARCHITECT • SOFTWARE ENGINEER • </span>
          <span>A FULL STACK DEVELOPER • MODERN WEB ARCHITECT • SOFTWARE ENGINEER • </span>
          <span>A FULL STACK DEVELOPER • MODERN WEB ARCHITECT • SOFTWARE ENGINEER • </span>
          <span>A FULL STACK DEVELOPER • MODERN WEB ARCHITECT • SOFTWARE ENGINEER • </span>
        </div>
      </div>

      {/* Bouncing ball game */}
      <div className="loading-container">
        <div className="loaderGame-container">
          <div className="loaderGame-in">
            <div className="loaderGame-line"></div>
            <div className="loaderGame-line"></div>
            <div className="loaderGame-line"></div>
            <div className="loaderGame-line"></div>
            <div className="loaderGame-line"></div>
            <div className="loaderGame-line"></div>
            <div className="loaderGame-line"></div>
            <div className="loaderGame-line"></div>
            <div className="loaderGame-line"></div>
            <div className="loaderGame-line"></div>
            <div className="loaderGame-line"></div>
            <div className="loaderGame-line"></div>
            <div className="loaderGame-line"></div>
            <div className="loaderGame-line"></div>
            <div className="loaderGame-line"></div>
            <div className="loaderGame-ball"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
