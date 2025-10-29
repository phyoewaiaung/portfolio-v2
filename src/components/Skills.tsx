"use client";

import { motion } from "framer-motion";
import { Code2, Database, Palette, Wrench, Globe, Zap } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Code2,
    color: "from-violet-400 to-fuchsia-400",
    skills: [
      { name: "React / Next.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Vue.js", level: 80 },
      { name: "Canvas / D3.js", level: 85 },
    ],
  },
  {
    title: "Backend",
    icon: Database,
    color: "from-fuchsia-400 to-pink-400",
    skills: [
      { name: "Node.js / Express", level: 90 },
      { name: "Laravel / PHP", level: 85 },
      { name: "MongoDB", level: 80 },
      { name: "Redis", level: 75 },
      { name: "SocketIO", level: 85 },
    ],
  },
  {
    title: "DevOps & Tools",
    icon: Wrench,
    color: "from-cyan-400 to-blue-400",
    skills: [
      { name: "Docker", level: 80 },
      { name: "Git / GitHub", level: 95 },
      { name: "CI/CD", level: 75 },
      { name: "DigitalOcean", level: 80 },
      { name: "Firebase / Supabase", level: 85 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-32 overflow-hidden">
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 right-1/4 h-96 w-96 rounded-full bg-fuchsia-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <h2 className="mb-4 text-5xl md:text-6xl font-black tracking-tight">
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-400">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </motion.div>

        {/* Skills grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, categoryIndex) => (
            <SkillCategory
              key={category.title}
              category={category}
              index={categoryIndex}
            />
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20"
        >
          <h3 className="mb-8 text-3xl font-bold text-center">
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Certifications
            </span>
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Professional Web Developer",
              "JavaScript Algorithms & Data Structures",
              "Responsive Web Design",
              "HTML, CSS & JavaScript for Web Developers",
              "Professional RockStar Developer",
            ].map((cert, i) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                className="group relative rounded-xl border border-white/10 bg-slate-900/50 p-4 backdrop-blur transition-all duration-300 hover:border-violet-400/30 hover:scale-105"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-violet-400 to-cyan-400">
                    <Zap className="h-5 w-5 text-white" />
                  </div>
                  <p className="flex-1 text-sm text-slate-300">{cert}</p>
                </div>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-violet-400/5 to-cyan-400/5 opacity-0 transition-opacity group-hover:opacity-100" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SkillCategory({
  category,
  index,
}: {
  category: (typeof skillCategories)[0];
  index: number;
}) {
  const Icon = category.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="relative h-full overflow-hidden rounded-2xl border border-white/10 bg-slate-900/50 p-8 backdrop-blur-xl transition-all duration-300 hover:border-violet-400/30">
        {/* Header */}
        <div className="mb-6 flex items-center gap-4">
          <div
            className={`flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${category.color} shadow-lg`}
          >
            <Icon className="h-7 w-7 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-white">{category.title}</h3>
        </div>

        {/* Skills list */}
        <div className="space-y-4">
          {category.skills.map((skill, skillIndex) => (
            <SkillBar
              key={skill.name}
              skill={skill}
              delay={index * 0.1 + skillIndex * 0.05}
              color={category.color}
            />
          ))}
        </div>

        {/* Hover glow effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-400/0 via-fuchsia-400/0 to-cyan-400/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-hover:from-violet-400/5 group-hover:via-fuchsia-400/5 group-hover:to-cyan-400/5" />
      </div>
    </motion.div>
  );
}

function SkillBar({
  skill,
  delay,
  color,
}: {
  skill: { name: string; level: number };
  delay: number;
  color: string;
}) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between text-sm">
        <span className="font-medium text-slate-300">{skill.name}</span>
        <span className="text-slate-500">{skill.level}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-white/5">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay, ease: "easeOut" }}
          className={`h-full rounded-full bg-gradient-to-r ${color}`}
        />
      </div>
    </div>
  );
}
