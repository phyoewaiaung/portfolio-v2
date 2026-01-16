"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile on mount and resize
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || isMobile) return;

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
      if (number) {
        gsap.fromTo(
          number,
          {
            color: "#475569",
            scale: 1,
          },
          {
            color: "#34d399",
            scale: 1,
            scrollTrigger: {
              trigger: card,
              start: "top center+=100",
              end: "bottom center-=100",
              scrub: 1,
              toggleActions: "play none none reverse",
            },
          },
        );
      }

      // Card fade in animation
      // gsap.fromTo(
      //   card,
      //   {
      //     opacity: 0,
      //   },
      //   {
      //     opacity: 1,
      //     scrollTrigger: {
      //       trigger: card,
      //       start: "top 80%",
      //       end: "top 50%",
      //       scrub: 1,
      //     },
      //   },
      // );
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, [isMobile]);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative py-10 sm:py-14 md:py-16 lg:py-20 xl:py-24"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <header className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-14 xl:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-black leading-tight">
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                Selected Works
              </span>
            </h2>
            <p className="mt-3 sm:mt-4 max-w-2xl mx-auto px-4">
              <span className="inline-block bg-gradient-to-r from-emerald-400/20 to-cyan-400/20 backdrop-blur-sm border border-emerald-400/30 rounded-xl sm:rounded-2xl px-4 py-2.5 sm:px-5 sm:py-3 text-emerald-200 leading-relaxed text-sm sm:text-base">
                Explore my works and development projects showcasing modern web
                technologies
              </span>
            </p>
          </header>
        </motion.div>

        <div className="flex flex-col lg:flex-row">
          {/* LEFT SIDE - FIXED PIN INDICATORS (Desktop Only) */}
          <div className="hidden lg:block w-20 xl:w-28 2xl:w-32 flex-shrink-0 sticky top-16 self-start max-h-[calc(100vh-8rem)] overflow-visible">
            <div className="relative flex flex-col justify-start gap-12 xl:gap-16 2xl:gap-20 py-4 pb-20">
              {/* Background Line */}
              <div className="absolute left-6 xl:left-10 2xl:left-12 top-0 w-0.5 xl:w-1 bg-slate-700/50 rounded-full" />

              {/* Progress Line */}
              <div
                ref={indicatorRef}
                className="absolute left-6 xl:left-10 2xl:left-12 top-0 w-0.5 xl:w-1 bg-gradient-to-b from-emerald-400 via-cyan-400 to-indigo-400 rounded-full origin-top shadow-[0_0_20px_rgba(52,211,153,0.4)] xl:shadow-[0_0_30px_rgba(52,211,153,0.4),0_0_60px_rgba(52,211,153,0.2)]"
                style={{ height: "0%" }}
              />

              {/* Numbers */}
              {projects.map((_, index) => (
                <div
                  key={index}
                  ref={(el) => {
                    if (el) numbersRef.current[index] = el;
                  }}
                  className="relative flex items-center gap-4 xl:gap-6 z-10"
                >
                  <span className="text-xl xl:text-3xl 2xl:text-4xl font-black transition-all duration-300">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE - PROJECT CARDS */}
          <div className="flex-1 space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-8 xl:space-y-12">
            {projects.map((project, index) => (
              <div key={project.title} className="py-3 sm:py-4 lg:py-4 xl:py-6">
                {/* Mobile Number Indicator */}
                <div className="lg:hidden mb-4 sm:mb-5">
                  <span className="text-4xl sm:text-5xl md:text-6xl font-black bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0">
                  <article
                    ref={(el) => {
                      if (el) cardsRef.current[index] = el;
                    }}
                    className="w-full bg-slate-800/50 backdrop-blur-md
                               rounded-xl sm:rounded-2xl overflow-hidden
                               border border-white/10
                               hover:border-emerald-400/40
                               hover:shadow-xl hover:shadow-emerald-400/20
                               transition-all duration-300
                               hover:scale-[1.01] lg:hover:scale-[1.02]"
                  >
                    <div className="flex flex-col md:flex-row">
                      {/* IMAGE/VIDEO - LEFT SIDE (60%) */}
                      <div className="w-full md:w-3/5 h-80 xs:h-96 sm:h-[28rem] md:h-auto lg:h-80 xl:h-[32rem] relative overflow-hidden">
                        {project.video ? (
                          <video
                            src={project.video}
                            muted
                            loop
                            playsInline
                            autoPlay
                            className="absolute inset-0 w-full h-full object-cover"
                          />
                        ) : (
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 70vw"
                            priority={index === 0}
                          />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                      </div>

                      {/* CONTENT - RIGHT SIDE (40%) */}
                      <div className="w-full md:w-2/5 p-4 sm:p-5 md:p-6 lg:p-4 xl:p-6 flex flex-col justify-between">
                        <div>
                          <h3 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-xl xl:text-2xl font-extrabold text-white mb-2 sm:mb-2.5 lg:mb-2 leading-tight">
                            {project.title}
                          </h3>

                          <p className="text-slate-300 text-sm sm:text-base md:text-base lg:text-sm xl:text-base leading-relaxed mb-3 sm:mb-4 lg:mb-3 xl:mb-4">
                            {project.description}
                          </p>

                          {/* TECH STACK */}
                          <div className="flex flex-wrap gap-1.5 sm:gap-2 lg:gap-1.5 mb-3 sm:mb-4 lg:mb-3 xl:mb-4">
                            {project.tech.map((tech) => (
                              <span
                                key={tech}
                                className="px-2 py-0.5 sm:px-2.5 sm:py-1 lg:px-2 lg:py-0.5
                                         text-xs sm:text-xs lg:text-xs xl:text-sm
                                         bg-emerald-400/10 text-emerald-400
                                         rounded-md sm:rounded-lg border border-emerald-400/20
                                         font-medium"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* ACTIONS */}
                        <div className="flex flex-col xs:flex-row gap-2 sm:gap-2.5 lg:gap-2">
                          {project.demo && (
                            <a
                              href={project.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-4 py-2 sm:px-4 sm:py-2.5 lg:px-4 lg:py-2
                                         text-sm sm:text-sm lg:text-sm xl:text-base
                                         bg-emerald-400 text-slate-900
                                         rounded-lg font-bold
                                         hover:bg-emerald-300 active:bg-emerald-500
                                         transition-all duration-200
                                         w-full xs:w-auto text-center
                                         shadow-lg shadow-emerald-400/25"
                            >
                              Live Demo
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
