"use client";
import { Experience } from "@/data/experiences";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ExperienceTimeline({ items }: { items: Experience[] }) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.15", "end 0.85"],
  });

  const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={ref} className="relative max-w-6xl mx-auto px-6 pb-16">
      {/* Header */}
      <header className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black">
          <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Experience
          </span>
        </h2>
        <p className="mt-3 sm:mt-4 max-w-2xl mx-auto text-sm sm:text-base px-4">
          <span className="inline-block bg-gradient-to-r from-emerald-400/20 to-cyan-400/20 backdrop-blur-sm border border-emerald-400/30 rounded-2xl px-6 py-4 text-emerald-200 leading-relaxed">
            A year-by-year journey of professional growth and achievement,
            showcasing roles, responsibilities, and accomplishments across
            various positions.
          </span>
        </p>
      </header>

      {/* Timeline */}
      <div className="relative">
        {/* Base line - left on mobile, center on desktop */}
        <div className="absolute left-8 sm:left-1/2 top-0 h-full w-1 bg-slate-700/50 sm:-translate-x-1/2 rounded-full shadow-[0_0_20px_rgba(148,163,184,0.15)]" />

        {/* Animated progress - left on mobile, center on desktop */}
        <motion.div
          style={{ height: progressHeight }}
          className="absolute left-8 sm:left-1/2 top-0 w-2 bg-gradient-to-b from-emerald-400 via-cyan-400 to-indigo-400 sm:-translate-x-1/2 rounded-full origin-top shadow-[0_0_30px_rgba(52,211,153,0.4),0_0_60px_rgba(52,211,153,0.2)]"
        />

        <div className="space-y-12">
          {items.map((item, index) => (
            <TimelineItem key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ======================================================
   Timeline Item
====================================================== */

function TimelineItem({ item, index }: { item: Experience; index: number }) {
  const isLeft = index % 2 !== 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`relative flex justify-center ${
        isLeft ? "md:justify-start md:pr-16" : "md:justify-end md:pl-16"
      }`}
    >
      {/* Year node - positioned left on mobile, center on desktop */}
      <div className="absolute left-8 sm:left-1/2 md:left-1/2 -translate-x-1/2 sm:-translate-x-1/2 md:-translate-x-1/2 z-20">
        <div className="relative">
          <div className="w-12 h-12 sm:w-14 sm:h-16 md:w-16 md:h-16 rounded-full bg-slate-950 border-2 border-emerald-400/80 flex items-center justify-center font-extrabold text-emerald-300 text-sm sm:text-base md:text-xl shadow-[0_0_30px_rgba(52,211,153,0.3),0_0_60px_rgba(52,211,153,0.15),inset_0_0_15px_rgba(52,211,153,0.1)] backdrop-blur-sm">
            {item.year}
          </div>
          {/* Inner glow ring */}
          <div className="absolute inset-0 rounded-full border-2 border-emerald-400/30 animate-pulse" />
        </div>
      </div>

      {/* Card */}
      <div className="w-full md:w-[44%] ml-16 sm:ml-0">
        <ExperienceCard item={item} />
      </div>
    </motion.div>
  );
}

/* ======================================================
   Card
====================================================== */

function ExperienceCard({ item }: { item: Experience }) {
  return (
    <article className="rounded-2xl bg-slate-900/80 border border-slate-700/60 p-4 sm:p-5 md:p-6 backdrop-blur-md shadow-xl hover:border-emerald-500/40 transition-colors">
      {/* Company Logo and Name */}
      <div className="flex items-center gap-3 mb-2 sm:mb-3">
        <img
          src={item.logo}
          alt={`${item.company} logo`}
          width={64}
          height={64}
          className="w-14 border border-slate-600 h-14 sm:w-16 sm:h-16 bg-white p-1 rounded-full object-contain"
        />
        <div>
          <a
            href={item.website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-300 font-semibold text-sm sm:text-base hover:text-emerald-200 transition-colors inline-flex items-center gap-1"
          >
            {item.company}
            <svg
              className="w-3 h-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
          <div className="text-xs text-slate-400 mt-1">{item.period}</div>
        </div>
      </div>

      {/* Location */}
      <div className="flex items-center gap-2 text-sm sm:text-base font-bold text-slate-300 mb-3">
        <img
          src={item.flag}
          alt={`${item.location} flag`}
          className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
        />
        {item.location}
      </div>

      {/* Role */}
      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1">
        {item.role}
      </h3>

      {/* Headline */}
      <p className="text-slate-200 font-medium leading-relaxed text-xs sm:text-sm mb-3 sm:mb-4">
        {item.headline}
      </p>

      {/* Bullets */}
      <ul className="space-y-1.5 sm:space-y-2 text-slate-300 text-xs sm:text-sm mb-4 sm:mb-6">
        {item.bullets.map((b) => (
          <li key={b} className="flex gap-3">
            <span className="mt-1 h-0.5 w-0.5 sm:mt-1.5 sm:h-1 sm:w-1 rounded-full bg-emerald-400 flex-shrink-0" />
            <span>{b}</span>
          </li>
        ))}
      </ul>

      {/* Tech */}
      <div className="flex flex-wrap gap-2">
        {item.tech.map((t) => (
          <span
            key={t}
            className="px-3 py-1 text-xs rounded-full bg-slate-800/80 border border-slate-700 text-slate-300"
          >
            {t}
          </span>
        ))}
      </div>
    </article>
  );
}
