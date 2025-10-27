"use client";

import { me } from "@/data/me";
import { motion, useReducedMotion } from "framer-motion";

export default function About() {
  const reduce = useReducedMotion();

  return (
    <section id="about" className="relative mx-auto max-w-5xl px-6 py-24">
      <motion.h2
        initial={reduce ? false : { opacity: 0, y: 12 }}
        whileInView={reduce ? {} : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-20%" }}
        transition={{ duration: 0.6 }}
        className="text-2xl font-semibold tracking-tight text-slate-100"
      >
        About
      </motion.h2>

      <motion.p
        initial={reduce ? false : { opacity: 0, y: 14 }}
        whileInView={reduce ? {} : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-20%" }}
        transition={{ duration: 0.6, delay: 0.05 }}
        className="mt-4 max-w-3xl text-slate-300 leading-relaxed"
      >
        {me.description}
      </motion.p>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        <InfoCard label="Role" value={me.title} />
        <InfoCard label="Location" value={me.location} />
        <InfoCard
          label="Contact"
          value={me.contact.email}
          href={`mailto:${me.contact.email}`}
        />
      </div>
    </section>
  );
}

function InfoCard({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  const Tag = href ? "a" : "div";
  return (
    <Tag
      {...(href ? { href } : {})}
      className="group rounded-2xl border border-white/10 bg-white/5 p-4 shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition hover:bg-white/10"
    >
      <div className="text-xs uppercase tracking-wider text-slate-400">
        {label}
      </div>
      <div className="mt-1 text-lg font-medium text-slate-100 group-hover:translate-x-[1px] transition">
        {value}
      </div>
    </Tag>
  );
}
