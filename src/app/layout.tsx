import type { Metadata } from "next";
import { instrumentSerif, geistSans, geistMono, jetbrainsMono } from "@/lib/fonts";
import "./globals.css";
import { siteConfig } from "@/data/personal";
import GrainOverlay from "@/components/layout/GrainOverlay";
import CustomCursor from "@/components/layout/CustomCursor";
import ScrollProgress from "@/components/ui/ScrollProgress";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AutoScrollButton from "@/components/ui/AutoScrollButton";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: siteConfig.siteName,
  description: siteConfig.siteDescription,
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${instrumentSerif.variable} ${geistSans.variable} ${geistMono.variable} ${jetbrainsMono.variable} antialiased min-h-screen flex flex-col relative`}
        suppressHydrationWarning
      >
        <GrainOverlay />
        <CustomCursor />
        <ScrollProgress />
        
        <Navbar />
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
        <AutoScrollButton />
      </body>
    </html>
  );
}
