"use client";

import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download, ArrowDown } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  const reduce = useReducedMotion();

  const scrollToWork = () => {
    document
      .getElementById("experience")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Radial gradient overlay for depth */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.1),transparent_50%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(6,182,212,0.1),transparent_50%)]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-32 text-center">
        {/* Animated greeting */}
        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.9 }}
          animate={reduce ? {} : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-4 inline-block"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-400/10 px-4 py-2 text-sm text-violet-300 backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-violet-500"></span>
            </span>
            Available for opportunities
          </span>
        </motion.div>

        {/* Main headline with stunning gradient */}
        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={reduce ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative mb-6 text-[clamp(2.5rem,8vw,6rem)] font-black leading-[0.9] tracking-tight"
        >
          <span className="block bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
            Hi, I'm
          </span>
          <span className="relative block mt-2">
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent animate-gradient">
              Phyo Wai Aung
            </span>
            {/* Glow effect behind name */}
            <span
              aria-hidden
              className="absolute inset-0 blur-3xl opacity-30 bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400"
            >
              Phyo Wai Aung
            </span>
          </span>
        </motion.h1>

        {/* Animated role titles */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={reduce ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-8 text-2xl md:text-3xl font-semibold text-slate-300"
        >
          <span className="inline-block">Full-Stack Developer</span>
          <span className="mx-3 text-violet-400">•</span>
          <span className="inline-block">Software Engineer</span>
        </motion.div>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={reduce ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mx-auto mb-12 max-w-2xl text-lg text-slate-400 leading-relaxed"
        >
          Crafting seamless, high-performance applications with modern
          technologies. Specialized in React, TypeScript, and building scalable
          web solutions.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={reduce ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mb-12 flex flex-wrap items-center justify-center gap-4"
        >
          <Button
            size="lg"
            onClick={scrollToWork}
            className="group relative overflow-hidden bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white shadow-lg shadow-violet-500/50 hover:shadow-xl hover:shadow-violet-500/60 transition-all duration-300"
          >
            <span className="relative z-10 flex items-center gap-2">
              View My Work
              <ArrowDown className="h-4 w-4 group-hover:translate-y-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-fuchsia-600 opacity-0 group-hover:opacity-100 transition-opacity" />
          </Button>

          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-violet-400/30 bg-violet-400/5 text-white hover:bg-violet-400/10 hover:border-violet-400/50 backdrop-blur transition-all duration-300"
          >
            <a
              href="mailto:phyowaiaung.pxyo@gmail.com"
              className="flex items-center gap-2"
            >
              <Mail className="h-4 w-4" />
              Get in Touch
            </a>
          </Button>

          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-cyan-400/30 bg-cyan-400/5 text-white hover:bg-cyan-400/10 hover:border-cyan-400/50 backdrop-blur transition-all duration-300"
          >
            <a href="/resume.pdf" download className="flex items-center gap-2">
              <Download className="h-4 w-4" />
              Download CV
            </a>
          </Button>
        </motion.div>

        {/* Social links with hover effects */}
        <motion.div
          initial={reduce ? false : { opacity: 0 }}
          animate={reduce ? {} : { opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex justify-center gap-4"
        >
          {[
            {
              icon: Github,
              href: "https://github.com/phyoewaiaung",
              label: "GitHub",
            },
            {
              icon: Linkedin,
              href: "https://www.linkedin.com/in/phyoewaiaung082/",
              label: "LinkedIn",
            },
            {
              icon: Mail,
              href: "mailto:phyowaiaung.pxyo@gmail.com",
              label: "Email",
            },
          ].map(({ icon: Icon, href, label }) => (
            <Link
              key={label}
              aria-label={label}
              href={href}
              className="group relative flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 backdrop-blur transition-all duration-300 hover:border-violet-400/50 hover:bg-white/10 hover:scale-110"
            >
              <Icon className="h-5 w-5 text-slate-300 group-hover:text-violet-400 transition-colors" />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-violet-400/20 to-cyan-400/20 opacity-0 group-hover:opacity-100 blur transition-opacity" />
            </Link>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2 text-slate-500">
            <span className="text-xs uppercase tracking-wider">
              Scroll to explore
            </span>
            <div className="h-8 w-[2px] bg-gradient-to-b from-violet-400 to-transparent animate-pulse" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
