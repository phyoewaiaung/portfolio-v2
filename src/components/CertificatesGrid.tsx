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
            IT Certifications
          </span>
        </h2>
        <p className="mt-3 sm:mt-4 max-w-2xl mx-auto text-sm sm:text-base px-4">
          <span className="inline-block bg-gradient-to-r from-orange-400/20 to-red-400/20 backdrop-blur-sm border border-orange-400/30 rounded-2xl px-6 py-4 text-orange-200 leading-relaxed">
            Professional certifications and continuous learning achievements
            that enhance technical expertise.
          </span>
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
      className="group relative h-full"
    >
      <div className="h-full rounded-2xl bg-slate-900/80 border border-slate-700/60 backdrop-blur-md shadow-xl hover:border-orange-500/40 transition-all duration-300 hover:shadow-[0_20px_40px_-15px_rgba(251,146,60,0.25)] overflow-hidden">
        {/* Certificate Image */}
        <div className="relative h-64 overflow-hidden bg-slate-800/50">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-60"></div>

          {/* Year Badge */}
          <div className="absolute top-3 right-3">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-black/50 backdrop-blur-sm border border-orange-400/50 text-orange-300 text-sm font-bold">
              {item.year}
            </span>
          </div>
        </div>

        <div className="p-6">
          {/* Title and Overview */}
          <h3 className="text-lg font-bold text-white mb-2 group-hover:text-orange-300 transition-colors">
            {item.title}
          </h3>
          <p className="text-slate-200 text-sm leading-relaxed">
            {item.description}
          </p>
        </div>
      </div>
    </motion.article>
  );
}
