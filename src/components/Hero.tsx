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
            <motion.p
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={reduce ? {} : { opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-justify font-bold font-[Gill Sans] mb-4 text-base md:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              Experienced Software Engineer with a proven track record of
              developing seamless, high-performance applications and delivering
              impactful digital solutions.
            </motion.p>

            <motion.p
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={reduce ? {} : { opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="text-justify font-bold font-[Gill Sans] mb-4 text-base md:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              Passionate about contributing to innovative projects in dynamic,
              forward-thinking environments.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={reduce ? {} : { opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-8"
            >
              <motion.button
                onClick={scrollToProjects}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-emerald-400 to-cyan-400 text-slate-900 rounded-full font-bold hover:shadow-lg hover:shadow-emerald-400/25 transition-all duration-300"
              >
                View Projects
              </motion.button>
              <motion.button
                onClick={scrollToWork}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-white/10 backdrop-blur-sm text-white rounded-full font-bold border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                View Experience
              </motion.button>
            </motion.div>

            {/* Tiny accent bullets for quick scanning */}
            {/* <motion.ul
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={reduce ? {} : { opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mx-auto md:mx-0 max-w-2xl grid gap-2 sm:grid-cols-2 text-slate-300 text-sm">
              {[
                "Outcome-driven & detail-oriented",
                "Clear communication & ownership",
                "User-first product mindset",
                "Performance & DX focused",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 border bg-transparent border-blue-100 border-opacity-10 rounded w-fit px-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-emerald-400 to-teal-400" />
                  <span>{item}</span>
                </li>
              ))}
            </motion.ul> */}
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
