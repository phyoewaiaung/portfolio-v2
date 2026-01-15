"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "@/data/projects";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<HTMLElement[]>([]);
  const numbersRef = useRef<HTMLDivElement[]>([]);
  const indicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const totalProjects = projects.length;

    // Animate indicator line progress
    gsap.to(indicatorRef.current, {
      height: "100%",
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
      },
    });

    // Animate each card and number
    cardsRef.current.forEach((card, index) => {
      if (!card) return;

      const number = numbersRef.current[index];

      // Number animation
      gsap.fromTo(
        number,
        {
          color: "#475569",
          scale: 1,
        },
        {
          color: "#34d399",
          scale: 1.3,
          scrollTrigger: {
            trigger: card,
            start: "top center+=100",
            end: "bottom center-=100",
            scrub: 1,
            toggleActions: "play none none reverse",
          },
        },
      );

      // Card fade in animation
      gsap.fromTo(
        card,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            end: "top 50%",
            scrub: 1,
          },
        },
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative py-16 sm:py-20 lg:py-32"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          // className="lg:block"
        >
          <header className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black">
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                Selected Works
              </span>
            </h2>
            <p className="mt-2 sm:mt-3 max-w-2xl mx-auto text-sm sm:text-base px-3 sm:px-4">
              <span className="inline-block bg-gradient-to-r from-emerald-400/20 to-cyan-400/20 backdrop-blur-sm border border-emerald-400/30 rounded-2xl px-3 sm:px-4 py-2 sm:py-3 text-emerald-200 leading-relaxed text-sm sm:text-base">
                Explore my works and development projects showcasing modern web
                technologies
              </span>
            </p>
          </header>
        </motion.div>
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-16">
          {/* LEFT SIDE - FIXED PIN INDICATORS */}
          <div className="w-full lg:w-32 flex-shrink-0 lg:sticky lg:top-32 lg:self-start lg:h-[600px] order-2 lg:order-1 hidden lg:block">
            <div className="relative h-full flex flex-col justify-between py-3 sm:py-4">
              {/* Background Line */}
              <div className="absolute left-6 sm:left-8 top-0 w-0.5 sm:w-1 bg-slate-700/50 rounded-full" />

              {/* Progress Line */}
              <div
                ref={indicatorRef}
                className="absolute left-6 sm:left-8 top-0 w-1 sm:w-2 bg-gradient-to-b from-emerald-400 via-cyan-400 to-indigo-400 lg:-translate-x-1/2 rounded-full origin-top shadow-[0_0_30px_rgba(52,211,153,0.4),0_0_60px_rgba(52,211,153,0.2)]"
              />

              {/* Numbers */}
              {projects.map((_, index) => (
                <div
                  key={index}
                  ref={(el) => {
                    if (el) numbersRef.current[index] = el;
                  }}
                  className="relative flex items-center gap-4 sm:gap-6 z-10"
                >
                  {/* Pin Dot */}
                  {/* <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-slate-900 border-4 border-slate-700 transition-all duration-300" /> */}

                  {/* Number */}
                  <span className="text-2xl sm:text-3xl font-black transition-all duration-300">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE - PROJECT CARDS */}
          <div className="flex-1 space-y-4 sm:space-y-6 lg:space-y-16 order-1 lg:order-2">
            {projects.map((project, index) => (
              <div key={project.title} className="py-6 sm:py-8 lg:py-16">
                <article
                  ref={(el) => {
                    if (el) cardsRef.current[index] = el;
                  }}
                  className="w-full bg-slate-800/50 backdrop-blur-md
                             rounded-2xl sm:rounded-3xl overflow-hidden
                             border border-white/10
                             hover:border-emerald-400/40
                             hover:shadow-xl hover:shadow-emerald-400/20
                             transition-all duration-300
                             transform hover:scale-105"
                >
                  {/* IMAGE */}
                  <div className="relative h-[250px] sm:h-[300px] lg:h-[450px] w-full overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>

                  {/* CONTENT */}
                  <div className="p-4 sm:p-6 lg:p-10">
                    <h3 className="text-xl sm:text-2xl lg:text-4xl font-extrabold text-white mb-2 sm:mb-3 lg:mb-4">
                      {project.title}
                    </h3>

                    <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed mb-4 sm:mb-6 lg:mb-8">
                      {project.description}
                    </p>

                    {/* TECH STACK */}
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4 lg:mb-6">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs sm:px-3 sm:py-1.5 sm:text-xs sm:text-sm
                                     bg-emerald-400/10 text-emerald-400
                                     rounded-full border border-emerald-400/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* ACTIONS */}
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 lg:gap-4">
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-2 text-xs sm:px-4 sm:py-2.5 sm:text-sm sm:text-base
                                     bg-emerald-400 text-slate-900
                                     rounded-xl font-bold
                                     hover:bg-emerald-300 transition-colors w-full sm:w-auto text-center"
                        >
                          Live Demo
                        </a>
                      )}
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-2 text-xs sm:px-4 sm:py-2.5 sm:text-sm sm:text-base
                                   bg-white/10 text-white
                                   rounded-xl font-bold
                                   border border-white/20
                                   hover:bg-white/20 transition-colors w-full sm:w-auto text-center"
                      >
                        View Code
                      </a>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
