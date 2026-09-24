import { Instrument_Serif, JetBrains_Mono } from "next/font/google";
import { Geist, Geist_Mono } from "next/font/google";

// ============================================================
// Font Configuration
//
// Display:   Instrument Serif — editorial headlines, oversized type
// Body/UI:   Geist Sans — clean sans-serif (already in Next.js default)
// Technical: JetBrains Mono — metadata labels, tech tags, dates
// Mono alt:  Geist Mono — for code snippets if needed
// ============================================================

export const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-serif",
});

export const geistSans = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
});

export const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-technical",
  weight: ["400", "500"],
});
