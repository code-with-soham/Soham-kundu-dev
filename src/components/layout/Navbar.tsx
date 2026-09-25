"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import HoverLink from "@/components/ui/HoverLink";
import MagneticButton from "@/components/ui/MagneticButton";
import { personalInfo } from "@/data/personal";
import Equalizer from "@/components/ui/Equalizer";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { href: "/#work", label: "Work" },
    { href: "/#about", label: "About" },
    { href: "/#experience", label: "Experience" },
    { href: "/#contact", label: "Contact" },
    { href: "/projects", label: "All Projects" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "py-3 md:py-4 bg-[var(--bg-primary)]/80 backdrop-blur-md border-b border-[var(--border-subtle)]" : "py-4 md:py-8"
        }`}
      >
        <div className="container-editorial flex items-center justify-between">
          {/* Logo / Monogram */}
          <Link
            href="/"
            className="font-serif text-3xl hover:text-[var(--accent-primary)] transition-colors duration-300 z-[60]"
            aria-label="Home"
            data-cursor="HOME"
          >
            SK
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <HoverLink key={link.href} href={link.href}>
                {link.label}
              </HoverLink>
            ))}
            
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4"
              tabIndex={-1}
            >
              <MagneticButton cursorLabel="DOWNLOAD" className="px-6 py-2 text-xs">
                Resume
              </MagneticButton>
            </a>
            
            {/* Desktop Equalizer */}
            <div className="ml-4 flex items-center justify-center">
              <Equalizer />
            </div>
          </nav>

          <div className="flex md:hidden items-center gap-6">
            {/* Mobile Equalizer */}
            <Equalizer />
            
            {/* Mobile Menu Trigger */}
          <button
            className="md:hidden relative z-[60] w-11 h-11 flex flex-col justify-center items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            <span
              className={`w-6 h-[1px] bg-current transition-all duration-300 ${
                mobileMenuOpen ? "rotate-45 translate-y-[7px]" : ""
              }`}
            />
            <span
              className={`w-6 h-[1px] bg-current transition-all duration-300 ${
                mobileMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`w-6 h-[1px] bg-current transition-all duration-300 ${
                mobileMenuOpen ? "-rotate-45 -translate-y-[7px]" : ""
              }`}
            />
          </button>
        </div>
      </div>
    </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-[var(--bg-primary)] z-40 flex flex-col items-center justify-center transition-transform duration-500 ease-in-out md:hidden ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        <nav className="flex flex-col items-center gap-8 text-2xl font-serif">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-[var(--accent-primary)] transition-colors duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 text-base font-technical uppercase tracking-widest text-[var(--accent-primary)] hover:text-[var(--text-primary)] transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Download Resume
          </a>
        </nav>
      </div>
    </>
  );
}
