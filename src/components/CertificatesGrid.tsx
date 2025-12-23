"use client";
import { Certificate } from "@/data/certificates";
import { motion } from "framer-motion";

export default function CertificatesGrid({ items }: { items: Certificate[] }) {
  return (
    <section className="relative max-w-6xl mx-auto px-6 pb-16">
      {/* Header */}
      <header className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black">
          <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
            Certifications
          </span>
        </h2>
        <p className="text-slate-400 mt-3 sm:mt-4 max-w-2xl mx-auto text-sm sm:text-base px-4">
          Professional certifications and continuous learning achievements that
          enhance technical expertise.
        </p>
      </header>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <CertificateCard key={item.id} item={item} index={index} />
        ))}
      </div>
    </section>
  );
}

/* ======================================================
   Certificate Card
====================================================== */

function CertificateCard({
  item,
  index,
}: {
  item: Certificate;
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className="group relative"
    >
      <div className="rounded-2xl bg-slate-900/80 border border-slate-700/60 p-6 backdrop-blur-md shadow-xl hover:border-orange-500/40 transition-all duration-300 hover:shadow-[0_20px_40px_-15px_rgba(251,146,60,0.25)]">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-lg font-bold text-white mb-1 group-hover:text-orange-300 transition-colors">
              {item.title}
            </h3>
            <p className="text-orange-300 font-medium text-sm">{item.issuer}</p>
          </div>
          <div className="ml-4 text-right">
            <div className="text-xs text-slate-400">{item.date}</div>
            <div className="text-xs text-slate-500">{item.location}</div>
          </div>
        </div>

        {/* Description */}
        <p className="text-slate-200 text-sm leading-relaxed mb-4">
          {item.description}
        </p>

        {/* Skills */}
        <div className="flex flex-wrap gap-2 mb-4">
          {item.skills.map((skill) => (
            <span
              key={skill}
              className="px-2 py-1 text-xs rounded-full bg-orange-400/10 border border-orange-400/30 text-orange-300"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Link */}
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 text-sm font-medium transition-colors"
        >
          View Certificate
          <svg
            className="w-4 h-4"
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
      </div>

      {/* Decorative corner */}
      <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-red-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.article>
  );
}
