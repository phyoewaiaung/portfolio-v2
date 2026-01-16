"use client";

import { motion, useReducedMotion } from "framer-motion";
import ProfileImage from "./ProfileImage";

export default function Hero() {
  const reduce = useReducedMotion();

  const scrollToWork = () => {
    document
      .getElementById("experience")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden px-6 sm:px-8"
    >
      {/* Fixed top greeting badge */}
      <div className="fixed top-4 inset-x-0 z-50 flex justify-center px-4">
        <span className="rotating-border inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-5 py-2 text-xs sm:text-sm font-medium text-emerald-300 backdrop-blur-sm">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#e7961d]" />
          </span>
          👋 Hi There! I'm{" "}
          <span className="font-black text-orange-400">PHYO WAI AUNG</span>
        </span>
      </div>

      {/* Content grid */}
      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-10 md:grid-cols-2 lg:gap-16">
        {/* LEFT: Text */}
        <div className="order-2 md:order-1 text-center md:text-left">
          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={reduce ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-black leading-tight tracking-tight text-white"
          >
            <span className="block font-mono text-emerald-400 text-[clamp(2rem,3.8vw,2.6rem)] mb-2">
              Software Engineer
            </span>

            <span className="block text-[clamp(2.2rem,6vw,4.8rem)]">
              Let’s build something we can be{" "}
              <span className="relative inline-block">
                <span className="text-emerald-400">Proud</span>
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  height="8"
                  viewBox="0 0 100 8"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0,4 Q25,0 50,4 T100,4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-emerald-400/50"
                  />
                </svg>
              </span>{" "}
              of.
            </span>
          </motion.h1>

          {/* Improved description UI */}
          <div className="mt-6 space-y-4">
            <motion.div
              initial={reduce ? false : { opacity: 0, x: -50 }}
              animate={reduce ? {} : { opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="relative overflow-hidden"
            >
              <div className="relative">
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
                  className="h-0.5 bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400 origin-left"
                />
                <motion.p
                  initial={reduce ? false : { opacity: 0, y: 30 }}
                  animate={reduce ? {} : { opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                  className="font-['Inter'] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 to-cyan-200 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto md:mx-0"
                >
                  Experienced Software Engineer with a proven track record of
                  developing seamless, high-performance applications and
                  delivering impactful digital solutions.
                </motion.p>
              </div>
            </motion.div>

            <motion.div
              initial={reduce ? false : { opacity: 0, x: 50 }}
              animate={reduce ? {} : { opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="relative overflow-hidden"
            >
              <div className="relative">
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.2, delay: 0.7, ease: "easeOut" }}
                  className="h-0.5 bg-gradient-to-r from-cyan-400 via-emerald-400 to-cyan-400 origin-right"
                />
                <motion.p
                  initial={reduce ? false : { opacity: 0, y: 30 }}
                  animate={reduce ? {} : { opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                  className="font-['Inter'] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-emerald-200 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto md:mx-0"
                >
                  Passionate about contributing to innovative projects in
                  dynamic, forward-thinking environments.
                </motion.p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* RIGHT: Image */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16, scale: 0.98 }}
          animate={reduce ? {} : { opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="order-1 md:order-2 pt-[7vh] md:pt-0"
        >
          <div className="relative mx-auto w-full max-w-[600px]">
            <div className="relative aspect-square overflow-hidden">
              <ProfileImage />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
