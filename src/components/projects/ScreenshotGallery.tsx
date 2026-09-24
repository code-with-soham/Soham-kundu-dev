"use client";

import React, { useState } from "react";
import Image from "next/image";
import ImageLightbox from "@/components/ui/ImageLightbox";

interface ScreenshotGalleryProps {
  screenshots: string[];
  title: string;
}

export default function ScreenshotGallery({
  screenshots,
  title,
}: ScreenshotGalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  if (screenshots.length === 0) return null;

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <>
      {screenshots.length === 1 ? (
        <button
          onClick={() => openLightbox(0)}
          className="relative w-full aspect-[16/9] overflow-hidden bg-[var(--bg-secondary)] border border-[var(--border-subtle)] hover:border-[var(--border-hover)] transition-colors duration-500 cursor-zoom-in group"
        >
          <Image
            src={screenshots[0]}
            alt={`${title} screenshot`}
            fill
            className="object-contain object-center transition-transform duration-700 group-hover:scale-[1.02]"
            sizes="(max-width: 768px) 100vw, 900px"
          />
        </button>
      ) : (
        <div className="space-y-4">
          {/* Main Image */}
          <button
            onClick={() => openLightbox(0)}
            className="relative w-full aspect-[16/9] overflow-hidden bg-[var(--bg-secondary)] border border-[var(--border-subtle)] hover:border-[var(--border-hover)] transition-colors duration-500 cursor-zoom-in group"
          >
            <Image
              src={screenshots[0]}
              alt={`${title} screenshot 1`}
              fill
              className="object-contain object-center transition-transform duration-700 group-hover:scale-[1.02]"
              sizes="(max-width: 768px) 100vw, 900px"
              priority
            />
          </button>

          {/* Thumbnail Rail */}
          <div className="grid grid-cols-4 gap-2 md:gap-3">
            {screenshots.slice(1).map((src, i) => (
              <button
                key={i}
                onClick={() => openLightbox(i + 1)}
                className="relative aspect-[16/10] overflow-hidden bg-[var(--bg-secondary)] border border-[var(--border-subtle)] hover:border-[var(--accent-primary)] transition-colors duration-300 cursor-zoom-in group"
              >
                <Image
                  src={src}
                  alt={`${title} screenshot ${i + 2}`}
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 25vw, 200px"
                  loading="lazy"
                />
              </button>
            ))}
          </div>
        </div>
      )}

      <ImageLightbox
        images={screenshots}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={setLightboxIndex}
        alt={`${title} screenshot`}
      />
    </>
  );
}
