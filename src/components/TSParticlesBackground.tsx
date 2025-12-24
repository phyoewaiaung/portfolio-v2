"use client";

import { useCallback, useEffect, useState } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine, ISourceOptions } from "@tsparticles/engine";

export default function TSParticlesBackground() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(Math.min(scrolled / maxScroll, 1));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const particlesInit = useCallback(async (engine: Engine) => {
    // Load only the features you need (slim bundle)
    await loadSlim(engine);
  }, []);

  // Calculate colors based on scroll
  const baseHue = 260 - scrollProgress * 80; // violet to cyan
  const particleColor = `hsl(${baseHue}, 70%, 60%)`;
  const lineColor = `hsl(${baseHue}, 70%, 60%)`;
  const bgGradient = `radial-gradient(ellipse at ${50 + scrollProgress * 20}% ${30 + scrollProgress * 40}%, 
    hsl(${260 - scrollProgress * 40}, ${45 + scrollProgress * 15}%, ${10 + scrollProgress * 5}%) 0%, 
    hsl(${240 - scrollProgress * 60}, ${40 + scrollProgress * 10}%, ${6 + scrollProgress * 2}%) 50%,
    hsl(${220 - scrollProgress * 80}, 35%, 4%) 100%)`;

  const options: ISourceOptions = {
    fullScreen: {
      enable: true,
      zIndex: -10,
    },
    background: {
      color: "transparent",
    },
    fpsLimit: 60,
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          width: 1920,
          height: 1080,
        },
      },
      color: {
        value: particleColor,
      },
      links: {
        enable: true,
        color: lineColor,
        distance: 150,
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 1 + scrollProgress * 0.5,
        direction: "none",
        random: false,
        straight: false,
        outModes: {
          default: "bounce",
        },
      },
      size: {
        value: { min: 1, max: 3 },
      },
      opacity: {
        value: { min: 0.3, max: 0.7 },
      },
    },
    interactivity: {
      detectsOn: "window",
      events: {
        onHover: {
          enable: true,
          mode: "grab",
        },
        onClick: {
          enable: true,
          mode: "push",
        },
        resize: {
          enable: true,
        },
      },
      modes: {
        grab: {
          distance: 140,
          links: {
            opacity: 0.8,
          },
        },
        push: {
          quantity: 4,
        },
      },
    },
    detectRetina: true,
  };

  return (
    <>
      {/* Gradient Background */}
      <div
        className="fixed inset-0 -z-20 transition-all duration-1000"
        style={{ background: bgGradient }}
      />

      {/* Particles */}
      <Particles id="tsparticles" options={options} />
    </>
  );
}
