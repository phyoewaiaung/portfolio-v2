"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Respect reduced motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      duration: 1.1, // feel of the scroll
      smoothWheel: true, // wheel smoothing
      smoothTouch: false, // keep touch native (optional)
    });

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <html lang="en" className="lenis">
      <body>{children}</body>
    </html>
  );
}
