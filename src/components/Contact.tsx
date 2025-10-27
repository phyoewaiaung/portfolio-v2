"use client";

import { me } from "@/data/me";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="relative mx-auto max-w-5xl px-6 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-20%" }}
        transition={{ duration: 0.6 }}
        className="text-2xl font-semibold tracking-tight text-slate-100"
      >
        Contact
      </motion.h2>

      <p className="mt-4 max-w-2xl text-slate-300">
        Want to collaborate or discuss an opportunity? Drop me a line.
      </p>

      <div className="mt-6 flex gap-3">
        <Button asChild>
          <a href={`mailto:${me.contact.email}`}>Email me</a>
        </Button>
        {me.cvUrl && (
          <Button asChild variant="secondary">
            <a href={me.cvUrl} target="_blank" rel="noreferrer">
              Download CV
            </a>
          </Button>
        )}
      </div>

      {/* optional: replace with your Server Action form later */}
    </section>
  );
}
