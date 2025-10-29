"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Briefcase, Code, Rocket, GraduationCap } from "lucide-react";

type Exp = {
  type: "work" | "edu";
  company: string;
  role: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
  tech: string[];
  icon: any;
};

const experiences: Exp[] = [
  {
    type: "work",
    company: "Xenoptics Co., LTD",
    role: "Frontend Developer",
    location: "Thailand",
    period: "Oct 2023 - Present",
    description:
      "Developed and maintained NMS/EMS for monitoring and managing networked machines.",
    achievements: [
      "Designed interfaces with Atomic Design",
      "Real-time monitoring with interactive graphs",
      "Performance dashboards using CytoscapeJS & Canvas",
    ],
    tech: ["TypeScript", "ReactJS", "Redux", "CytoscapeJS", "Canvas", "Docker"],
    icon: Rocket,
  },
  {
    type: "work",
    company: "Brycen Myanmar Co., LTD",
    role: "Software Engineer",
    location: "Myanmar",
    period: "Aug 2022 - Sept 2023",
    description: "Full-stack features from polished UIs to robust backends.",
    achievements: [
      "HR Management System with realtime",
      "Online Booking with payments",
      "Resume Manager with advanced filters",
    ],
    tech: ["ReactJS", "Laravel", "Redis", "SocketIO", "NodeJS", "DigitalOcean"],
    icon: Code,
  },
  {
    type: "work",
    company: "Brycen Myanmar Co., LTD",
    role: "Frontend Developer – Internship",
    location: "Myanmar",
    period: "May 2022 - Aug 2022",
    description: "Hands-on training in modern web development practices.",
    achievements: [
      "ReactJS fundamentals & patterns",
      "Security basics & networking",
      "Coding standards, tests, Git flows",
    ],
    tech: ["JavaScript", "ReactJS", "Git", "Testing"],
    icon: GraduationCap,
  },
];

export default function ExperienceTimeline() {
  const reduce = useReducedMotion();

  return (
    <section id="experience" className="relative py-28">
      {/* Background aesthetic */}
      <div className="pointer-events-none absolute inset-0">
        {/* dim starfield dots */}
        <div className="absolute inset-0 [background:radial-gradient(circle_at_20%_30%,rgba(139,92,246,.12),transparent_60%),radial-gradient(circle_at_80%_60%,rgba(34,211,238,.10),transparent_55%)]" />
        {/* soft vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(1000px_500px_at_50%_-10%,transparent,rgba(2,6,23,.75))]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Header */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={reduce ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
              Career Ladder
            </span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-400">
            Each step builds on the last—skills, responsibility, and impact.
          </p>
        </motion.div>

        {/* Ladder container */}
        <div
          className="
            relative
            grid
            gap-8
            /* Desktop: 6 columns. Cards occupy 3 columns and shift right per index */
            md:grid-cols-6
          "
        >
          {/* Ladder rails (left & right) */}
          <div className="pointer-events-none absolute inset-y-0 left-[8px] right-[8px] md:left-[calc(16.666%-8px)] md:right-[calc(16.666%-8px)]">
            {/* rails */}
            <div className="absolute left-0 top-0 h-full w-[2px] rounded bg-white/10" />
            <div className="absolute right-0 top-0 h-full w-[2px] rounded bg-white/10" />
            {/* rungs */}
            {experiences.map((_, i) => (
              <div
                key={`rung-${i}`}
                className="absolute left-0 right-0 h-[2px] rounded bg-gradient-to-r from-violet-400/70 via-fuchsia-400/70 to-cyan-400/70"
                style={{
                  top: `calc(${i} * 220px + 26px)`, // aligns with card y-spacing
                  opacity: 0.6,
                  filter: "drop-shadow(0 0 6px rgba(168,85,247,.35))",
                }}
              />
            ))}
          </div>

          {/* Cards */}
          {experiences.map((exp, idx) => (
            <LadderCard key={idx} exp={exp} index={idx} />
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={reduce ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 grid gap-6 sm:grid-cols-3"
        >
          <Stat number="2+" label="Years Experience" />
          <Stat number="10+" label="Projects Delivered" />
          <Stat number="15+" label="Technologies" />
        </motion.div>
      </div>
    </section>
  );
}

function LadderCard({ exp, index }: { exp: Exp; index: number }) {
  const reduce = useReducedMotion();
  const Icon = exp.icon;

  /**
   * Desktop ladder math:
   * - Grid: md:grid-cols-6
   * - Card spans 3 columns
   * - Shift start col +1 for each next step to climb right.
   *   clamp to keep inside 6 columns.
   */
  const colStart = Math.min(1 + index, 4); // 1..4
  const gridClass = `md:col-span-3 md:col-start-${colStart}`;

  return (
    <motion.article
      initial={reduce ? false : { opacity: 0, y: 24, scale: 0.98 }}
      whileInView={reduce ? {} : { opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.06 }}
      className={`
        group relative ${gridClass}
        rounded-2xl border border-white/10 bg-slate-900/60
        backdrop-blur-xl
        shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_15px_60px_-10px_rgba(88,28,135,.35)]
        overflow-hidden
      `}
      style={{
        // vertical spacing between rungs/cards
        marginTop: index === 0 ? 0 : "140px",
      }}
    >
      {/* connector from left rail to card */}
      <span
        className="pointer-events-none absolute left-[-24px] top-8 hidden h-[2px] w-6 md:block
          bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400"
      />

      {/* hover aura */}
      <div className="absolute -inset-px opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-violet-400/10 via-fuchsia-400/10 to-cyan-400/10 blur" />
      </div>

      <div className="relative p-6 md:p-8">
        <header className="mb-5 flex items-start gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-400 to-fuchsia-400 shadow-lg">
            <Icon className="h-6 w-6 text-white" />
          </div>

          <div className="flex-1">
            <h3 className="text-xl md:text-2xl font-bold text-white">
              {exp.role}
            </h3>
            <div className="text-violet-300">{exp.company}</div>

            <div className="mt-2 flex flex-wrap gap-3 text-xs text-slate-400">
              <span className="flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                {exp.period}
              </span>
              <span>•</span>
              <span>{exp.location}</span>
            </div>
          </div>
        </header>

        <p className="mb-5 text-slate-300">{exp.description}</p>

        <section className="mb-5">
          <h4 className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
            Key achievements
          </h4>
          <ul className="space-y-2">
            {exp.achievements.map((a, i) => (
              <li key={i} className="flex items-start gap-2 text-slate-300">
                <span className="mt-[7px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gradient-to-r from-violet-400 to-cyan-400" />
                <span>{a}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h4 className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
            Technologies
          </h4>
          <div className="flex flex-wrap gap-2">
            {exp.tech.map((t) => (
              <span
                key={t}
                className="rounded-lg border border-violet-400/25 bg-violet-400/10 px-3 py-1.5 text-xs text-violet-200 backdrop-blur transition-colors hover:border-violet-400/50 hover:bg-violet-400/20"
              >
                {t}
              </span>
            ))}
          </div>
        </section>
      </div>
    </motion.article>
  );
}

function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 p-8 text-center backdrop-blur-xl transition-[transform,box-shadow,border-color] duration-300 hover:scale-[1.02] hover:border-violet-400/30 hover:shadow-[0_20px_80px_-20px_rgba(124,58,237,.35)]">
      <div className="relative z-10">
        <div className="mb-1 text-5xl font-black bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
          {number}
        </div>
        <div className="text-slate-400 font-medium">{label}</div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-violet-400/10 to-cyan-400/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </div>
  );
}
