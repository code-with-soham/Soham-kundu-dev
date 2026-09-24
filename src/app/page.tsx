"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import SelectedWork from "@/components/home/SelectedWork";
import Expertise from "@/components/home/Expertise";
import Experience from "@/components/home/Experience";
import Stack from "@/components/home/Stack";
import Achievements from "@/components/home/Achievements";
import Contact from "@/components/home/Contact";

// Force client-side rendering for the loader to prevent browser extensions from breaking hydration event listeners
const FirstLoader = dynamic(() => import("@/components/loader/FirstLoader"), { ssr: false });

export default function Home() {
  const [loaderComplete, setLoaderComplete] = useState(false);

  return (
    <main className="min-h-screen relative overflow-hidden bg-[var(--bg-primary)]">
      {/* Preserved First Loader */}
      {!loaderComplete && (
        <FirstLoader onComplete={() => setLoaderComplete(true)} />
      )}

      {/* Main Portfolio Content (Revealed after loader) */}
      <div 
        className={`transition-opacity duration-1000 ${
          loaderComplete ? "opacity-100" : "opacity-0 h-0 overflow-hidden"
        }`}
      >
        <Hero />
        <About />
        <SelectedWork />
        <Expertise />
        <Experience />
        <Stack />
        <Achievements />
        <Contact />
      </div>
    </main>
  );
}
