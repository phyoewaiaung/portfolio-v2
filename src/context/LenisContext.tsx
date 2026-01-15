"use client";

import { createContext, useContext, useRef, useEffect } from "react";
import Lenis from "@studio-freight/lenis";

interface LenisContextType {
  lenis: Lenis | null;
  stopLenis: () => void;
  startLenis: () => void;
}

const LenisContext = createContext<LenisContextType | null>(null);

export function useLenisContext() {
  const context = useContext(LenisContext);
  if (!context) {
    throw new Error("useLenisContext must be used within LenisProvider");
  }
  return context;
}

export default function LenisProviderWithControl({
  children,
}: {
  children: React.ReactNode;
}) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    lenisRef.current = new Lenis({
      smoothWheel: true,
      lerp: 0.08,
      wheelMultiplier: 1,
    });

    let rafId: number;

    function raf(time: number) {
      lenisRef.current?.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenisRef.current?.destroy();
    };
  }, []);

  const stopLenis = () => {
    if (lenisRef.current) {
      lenisRef.current.stop();
      document.body.style.overflow = "hidden";
    }
  };

  const startLenis = () => {
    if (lenisRef.current) {
      lenisRef.current.start();
      document.body.style.overflow = "";
    }
  };

  return (
    <LenisContext.Provider
      value={{ lenis: lenisRef.current, stopLenis, startLenis }}
    >
      {children}
    </LenisContext.Provider>
  );
}
