"use client";

import React, { useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";

interface ImageLightboxProps {
  images: string[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (index: number) => void;
  alt?: string;
}

export default function ImageLightbox({
  images,
  currentIndex,
  isOpen,
  onClose,
  onNavigate,
  alt = "Screenshot",
}: ImageLightboxProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && currentIndex > 0) onNavigate(currentIndex - 1);
      if (e.key === "ArrowRight" && currentIndex < images.length - 1)
        onNavigate(currentIndex + 1);
    },
    [isOpen, currentIndex, images.length, onClose, onNavigate]
  );

  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    if (isOpen) {
      previousFocusRef.current = document.activeElement as HTMLElement;
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
      if (previousFocusRef.current) {
        previousFocusRef.current.focus();
      }
    };
  }, [handleKeyDown, isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-[210] w-10 h-10 flex items-center justify-center border border-white/20 text-white/80 hover:text-white hover:border-white/50 transition-colors font-technical text-sm"
            aria-label="Close lightbox"
          >
            ✕
          </button>

          {/* Counter */}
          <div className="absolute top-6 left-6 font-technical text-xs text-white/50 tracking-widest">
            {currentIndex + 1} / {images.length}
          </div>

          {/* Previous */}
          {currentIndex > 0 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onNavigate(currentIndex - 1);
              }}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-[210] w-10 h-10 flex items-center justify-center border border-white/20 text-white/60 hover:text-white hover:border-white/50 transition-colors"
              aria-label="Previous image"
            >
              ←
            </button>
          )}

          {/* Next */}
          {currentIndex < images.length - 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onNavigate(currentIndex + 1);
              }}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-[210] w-10 h-10 flex items-center justify-center border border-white/20 text-white/60 hover:text-white hover:border-white/50 transition-colors"
              aria-label="Next image"
            >
              →
            </button>
          )}

          {/* Image */}
          <motion.div
            key={currentIndex}
            className="relative w-[90vw] h-[80vh] max-w-6xl"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[currentIndex]}
              alt={`${alt} ${currentIndex + 1}`}
              fill
              className="object-contain"
              sizes="90vw"
              priority
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
