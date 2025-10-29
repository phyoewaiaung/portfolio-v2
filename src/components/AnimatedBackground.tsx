"use client";

import { useEffect, useRef } from "react";

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // ---------- Tunables (tweak these) ----------
    const DENSITY_DIVISOR = 5000; // lower = more particles
    const LINK_DISTANCE = 200; // px distance to draw a line
    const MAX_LINKS_PER_PARTICLE = 2; // cap lines per particle for perf
    const REPEL_RADIUS = 110; // mouse influence radius
    const REPEL_STRENGTH = 2.4; // repel push
    const GLOW_BLUR = 15; // particle glow size
    const LINK_PROBABILITY = 0.5; // % of particles that can form links
    const MOUSE_GLOW_RADIUS = 200; // radius for mouse glow effect
    // -------------------------------------------

    let particles: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      alpha: number;
      hue: number;
      links: number;
      canLink: boolean;
    }[] = [];
    const mouse = { x: -9999, y: -9999 }; // off-screen initially
    let raf = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const count = Math.floor(
        (canvas.width * canvas.height) / DENSITY_DIVISOR,
      );
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          size: Math.random() * 1.8 + 0.7,
          alpha: Math.random() * 0.6 + 0.2,
          hue: Math.random() * 360,
          links: 0,
          canLink: Math.random() < LINK_PROBABILITY,
        });
      }
    };

    const step = (t: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw mouse glow effect
      if (mouse.x > -9000) {
        const gradient = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          MOUSE_GLOW_RADIUS,
        );
        gradient.addColorStop(0, "rgba(255, 255, 255, 0.15)");
        gradient.addColorStop(0.3, "rgba(212, 149, 255, 0.08)");
        gradient.addColorStop(0.6, "rgba(212, 149, 255, 0.03)");
        gradient.addColorStop(1, "rgba(212, 149, 255, 0)");
        ctx.fillStyle = gradient;
        ctx.fillRect(
          mouse.x - MOUSE_GLOW_RADIUS,
          mouse.y - MOUSE_GLOW_RADIUS,
          MOUSE_GLOW_RADIUS * 2,
          MOUSE_GLOW_RADIUS * 2,
        );
      }

      // Update & draw particles
      for (const p of particles) {
        // drift
        p.x += p.vx;
        p.y += p.vy;

        // mouse repel (optional but keeps the "reacts to mouse" feel)
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.hypot(dx, dy);
        if (dist < REPEL_RADIUS) {
          const f = (REPEL_RADIUS - dist) / REPEL_RADIUS;
          const a = Math.atan2(dy, dx);
          p.x += Math.cos(a) * f * REPEL_STRENGTH;
          p.y += Math.sin(a) * f * REPEL_STRENGTH;
        }

        // wrap edges
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        // draw particle with enhanced glow
        const hue = (p.hue + t / 80) % 360;

        // Calculate distance to mouse for white glow effect
        const mouseDistance = Math.hypot(p.x - mouse.x, p.y - mouse.y);
        const mouseProximity = Math.max(
          0,
          1 - mouseDistance / MOUSE_GLOW_RADIUS,
        );

        // Base particle with bright shadow
        ctx.beginPath();
        ctx.fillStyle = `hsla(${hue},85%,65%,${p.alpha})`;
        ctx.shadowBlur = GLOW_BLUR * 2;
        ctx.shadowColor = `hsla(${hue},90%,75%,${p.alpha})`;
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        // Add white glow near mouse
        if (mouseProximity > 0.1) {
          ctx.beginPath();
          ctx.fillStyle = `rgba(255, 255, 255, ${mouseProximity * 0.6})`;
          ctx.shadowBlur = GLOW_BLUR * 3;
          ctx.shadowColor = `rgba(255, 255, 255, ${mouseProximity * 0.8})`;
          ctx.arc(p.x, p.y, p.size * 1.3, 0, Math.PI * 2);
          ctx.fill();
        }

        p.links = 0; // reset per frame
      }

      // Draw linking lines (nearby particles) - only if both can link
      ctx.shadowBlur = 0; // avoid glow on lines
      ctx.lineWidth = 1;
      for (let i = 0; i < particles.length; i++) {
        const a = particles[i];
        if (!a.canLink || a.links >= MAX_LINKS_PER_PARTICLE) continue;

        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j];
          if (!b.canLink || b.links >= MAX_LINKS_PER_PARTICLE) continue;

          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d = Math.hypot(dx, dy);
          if (d > LINK_DISTANCE) continue;

          // fade line with distance; slight brighten when near mouse midpoint
          const baseAlpha = 1 - d / LINK_DISTANCE;
          const midX = (a.x + b.x) * 0.5;
          const midY = (a.y + b.y) * 0.5;
          const mouseBoost =
            Math.max(
              0,
              1 -
                Math.hypot(midX - mouse.x, midY - mouse.y) /
                  (REPEL_RADIUS * 1.6),
            ) * 0.4;

          ctx.strokeStyle = `rgba(212, 149, 255, ${baseAlpha * 0.35 + mouseBoost * 0.35})`;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();

          a.links++;
          b.links++;
          if (a.links >= MAX_LINKS_PER_PARTICLE) break;
        }
      }

      raf = requestAnimationFrame(step);
    };

    const onMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    const onMouseLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999; // release particles when cursor leaves
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseleave", onMouseLeave);
    window.addEventListener("resize", resize);

    resize();
    raf = requestAnimationFrame(step);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 w-full h-full bg-slate-950"
    />
  );
}
