"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="relative py-20 px-6 sm:px-8">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="font-black text-[clamp(2.5rem,5vw,3.5rem)] text-white mb-4">
            Featured <span className="text-emerald-400">Projects</span>
          </h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Explore my latest work and development projects showcasing modern
            web technologies
          </p>
        </motion.div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
            className="group relative"
          >
            {/* Project Card */}
            <div className="relative h-full bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-emerald-400/30 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-400/10">
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 to-cyan-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay with links */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  {project.demo && (
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-2 bg-emerald-400 text-slate-900 rounded-lg font-semibold text-sm hover:bg-emerald-300 transition-colors"
                    >
                      Live Demo
                    </motion.a>
                  )}
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-lg font-semibold text-sm hover:bg-white/20 transition-colors border border-white/20"
                  >
                    View Code
                  </motion.a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-slate-300 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-emerald-400/10 text-emerald-400 rounded-full text-xs font-medium border border-emerald-400/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-400/20 to-cyan-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="text-center mt-16"
      >
        <motion.a
          href="https://github.com/phyoewaiaung"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-emerald-400 to-cyan-400 text-slate-900 rounded-full font-bold hover:shadow-lg hover:shadow-emerald-400/25 transition-all duration-300"
        >
          <span>View More Projects</span>
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </motion.a>
      </motion.div>
    </section>
  );
}
