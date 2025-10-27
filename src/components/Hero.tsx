"use client";

import { me } from "@/data/me";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import ThreeHero from "@/components/ThreeHero";

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section id="home" className="relative min-h-[100svh] overflow-hidden">
      <ThreeHero />

      {/* gradient scrim for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/40 to-slate-950/90" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-36 text-center">
        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={reduce ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight"
        >
          Hi, I’m{" "}
          <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
            {me.name}
          </span>
        </motion.h1>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 10 }}
          animate={reduce ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mt-4 max-w-2xl text-slate-300 md:text-xl"
        >
          {me.headline}
        </motion.p>

        <div className="mt-8 flex items-center justify-center gap-3">
          <Button asChild size="lg" className="shadow-lg">
            <Link href="#work">View Work</Link>
          </Button>
          <Button asChild size="lg" variant="secondary">
            <Link href="#contact">Contact</Link>
          </Button>
        </div>

        {/* social icons */}
        <motion.div
          initial={reduce ? false : { opacity: 0 }}
          animate={reduce ? {} : { opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-8 flex justify-center gap-5"
        >
          <Link
            aria-label="GitHub"
            href={me.contact.github}
            className="rounded-2xl p-2 hover:bg-white/5 transition"
          >
            <Github className="h-6 w-6" />
          </Link>
          <Link
            aria-label="LinkedIn"
            href={me.contact.linkedin}
            className="rounded-2xl p-2 hover:bg-white/5 transition"
          >
            <Linkedin className="h-6 w-6" />
          </Link>
          <Link
            aria-label="Email me"
            href={`mailto:${me.contact.email}`}
            className="rounded-2xl p-2 hover:bg-white/5 transition"
          >
            <Mail className="h-6 w-6" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
