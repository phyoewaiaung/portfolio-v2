"use client";
import { Education } from "@/data/education";
import { motion } from "framer-motion";

export default function EducationTimeline({ items }: { items: Education[] }) {
  return (
    <section className="relative max-w-6xl mx-auto px-6 pb-16">
      {/* Header */}
      <header className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black">
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Academic Background
          </span>
        </h2>
        <p className="mt-3 sm:mt-4 max-w-2xl mx-auto text-sm sm:text-base px-4">
          <span className="inline-block bg-gradient-to-r from-blue-400/20 to-purple-400/20 backdrop-blur-sm border border-blue-400/30 rounded-2xl px-6 py-4 text-blue-200 leading-relaxed">
            Academic journey and educational achievements that shaped my
            technical foundation.
          </span>
        </p>
      </header>

      {/* Horizontal Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8">
        {items.map((item, index) => (
          <EducationCard key={item.id} item={item} index={index} />
        ))}
      </div>
    </section>
  );
}

/* ======================================================
   Education Card
====================================================== */

function EducationCard({ item, index }: { item: Education; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className="group relative h-full"
    >
      <div className="h-full rounded-2xl bg-slate-900/80 border border-slate-700/60 backdrop-blur-md shadow-xl hover:border-blue-500/40 transition-all duration-300 hover:shadow-[0_20px_40px_-15px_rgba(59,130,246,0.25)] overflow-hidden">
        {/* Institution Logo and Name */}
        <div className="p-6">
          <div className="flex items-center gap-3 mb-3">
            <img
              src={item.logo}
              alt={`${item.institution} logo`}
              width={64}
              height={64}
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-contain transition-transform duration-300 group-hover:scale-110"
            />
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-1 group-hover:text-blue-300 transition-colors">
                {item.institution}
              </h3>
              <p className="text-blue-300 font-medium text-sm">{item.degree}</p>
            </div>
          </div>

          {/* Period */}
          <div className="text-sm sm:text-base font-bold text-slate-300 mb-4">
            {item.period}
          </div>

          {/* Headline */}
          <p className="text-slate-200 font-medium leading-relaxed text-sm mb-4">
            {item.headline}
          </p>

          {/* Bullets */}
          <ul className="space-y-2 text-slate-300 text-sm">
            {item.bullets.map((b) => (
              <li key={b} className="flex gap-3">
                <span className="mt-1.5 h-1 w-1 rounded-full bg-blue-400 flex-shrink-0" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.article>
  );
}
