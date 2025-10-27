"use client";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const l = new Lenis({ duration: 1.1 });
    const r = (t: number) => {
      l.raf(t);
      requestAnimationFrame(r);
    };
    requestAnimationFrame(r);
    return () => l.destroy();
  }, []);
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
