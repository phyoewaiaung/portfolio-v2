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
    <section ref={ref} className="relative max-w-6xl mx-auto px-6 py-32">
      {/* Header */}
      <header className="text-center mb-32">
        <h2 className="text-4xl md:text-6xl font-black">
          <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Experience
          </span>
        </h2>
        <p className="text-slate-400 mt-4">A year-by-year journey of growth</p>
      </header>

      {/* Timeline */}
      <div className="relative">
        {/* Base line */}
        <div className="absolute left-1/2 top-0 h-full w-1 bg-slate-700/50 -translate-x-1/2 rounded-full shadow-[0_0_20px_rgba(148,163,184,0.15)]" />

        {/* Animated progress */}
        <motion.div
          style={{ height: progressHeight }}
          className="absolute left-1/2 top-0 w-2 bg-gradient-to-b from-emerald-400 via-cyan-400 to-indigo-400 -translate-x-1/2 rounded-full origin-top shadow-[0_0_30px_rgba(52,211,153,0.4),0_0_60px_rgba(52,211,153,0.2)]"
        />

        <div className="space-y-40">
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
      className={`relative flex ${
        isLeft ? "justify-start pr-16" : "justify-end pl-16"
      }`}
    >
      {/* Year node */}
      <div className="absolute left-1/2 -translate-x-1/2 z-20">
        <div className="relative">
          <div className="w-20 h-20 rounded-full bg-slate-950 border-3 border-emerald-400/80 flex items-center justify-center font-extrabold text-emerald-300 text-xl shadow-[0_0_40px_rgba(52,211,153,0.3),0_0_80px_rgba(52,211,153,0.15),inset_0_0_20px_rgba(52,211,153,0.1)] backdrop-blur-sm">
            {item.year}
          </div>
          {/* Inner glow ring */}
          <div className="absolute inset-0 rounded-full border-2 border-emerald-400/30 animate-pulse" />
        </div>
      </div>

      {/* Card */}
      <div className="w-full md:w-[44%]">
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
    <article className="rounded-3xl bg-slate-900/80 border border-slate-700/60 p-8 md:p-10 backdrop-blur-md shadow-xl hover:border-emerald-500/40 transition-colors">
      {/* Meta */}
      <div className="text-sm text-slate-400 mb-3">
        {item.period} · {item.location}
      </div>

      {/* Role */}
      <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">
        {item.role}
      </h3>

      <p className="text-emerald-300 font-medium mb-5">{item.company}</p>

      {/* Headline */}
      <p className="text-slate-200 font-medium leading-relaxed mb-6">
        {item.headline}
      </p>

      {/* Bullets */}
      <ul className="space-y-3 text-slate-300 mb-8">
        {item.bullets.map((b) => (
          <li key={b} className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
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
