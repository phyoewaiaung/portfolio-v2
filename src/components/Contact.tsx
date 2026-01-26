"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Send, Github, Linkedin, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-gradient-to-r from-violet-500/20 via-fuchsia-500/20 to-cyan-500/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-5xl md:text-6xl font-black tracking-tight">
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
              Let's Work Together
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-400">
            Have a project in mind or want to discuss opportunities? I'd love to
            hear from you!
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact info cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <ContactCard
              icon={Mail}
              title="Email"
              content="phyowaiaung.pxyo@gmail.com"
              href="mailto:phyowaiaung.pxyo@gmail.com"
            />
            <ContactCard
              icon={MapPin}
              title="Location"
              content="Chiang Mai, Thailand"
            />
            <ContactCard
              icon={Globe}
              title="Website"
              content="phyowaiaung.netlify.app"
              href="https://phyowaiaung.netlify.app/"
            />

            {/* Social links */}
            <div className="flex gap-4 pt-4">
              {[
                {
                  icon: Github,
                  href: "https://github.com/phyoewaiaung",
                  label: "GitHub",
                },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/phyoewaiaung082/",
                  label: "LinkedIn",
                },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-white/5 backdrop-blur transition-all duration-300 hover:border-violet-400/50 hover:bg-white/10 hover:scale-110"
                >
                  <Icon className="h-6 w-6 text-slate-300 group-hover:text-violet-400 transition-colors" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative h-full overflow-hidden rounded-2xl border border-white/10 bg-slate-900/50 p-8 backdrop-blur-xl">
              {/* Animated gradient border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-violet-400/20 via-fuchsia-400/20 to-cyan-400/20 opacity-50 blur" />

              <div className="relative space-y-6">
                <div>
                  <h3 className="mb-2 text-2xl font-bold text-white">
                    Ready to start a project?
                  </h3>
                  <p className="text-slate-400">
                    I'm currently available for freelance work and full-time
                    opportunities.
                  </p>
                </div>

                <div className="space-y-4">
                  <Button
                    asChild
                    size="lg"
                    className="w-full bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white shadow-lg shadow-violet-500/50 hover:shadow-xl hover:shadow-violet-500/60 transition-all duration-300"
                  >
                    <a
                      href="mailto:phyowaiaung.pxyo@gmail.com"
                      className="flex items-center justify-center gap-2"
                    >
                      <Send className="h-5 w-5" />
                      Send me an email
                    </a>
                  </Button>

                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="w-full border-violet-400/30 bg-violet-400/5 text-white hover:bg-violet-400/10 hover:border-violet-400/50"
                  >
                    <a
                      href="/resume-phyowaiaung.pdf"
                      download
                      className="flex items-center justify-center gap-2"
                    >
                      Download Resume
                    </a>
                  </Button>

                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="w-full border-fuchsia-400/30 bg-fuchsia-400/5 text-white hover:bg-fuchsia-400/10 hover:border-fuchsia-400/50"
                  >
                    <a
                      href="/coverletter.pdf"
                      download
                      className="flex items-center justify-center gap-2"
                    >
                      Download Cover Letter
                    </a>
                  </Button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-violet-400">
                      24h
                    </div>
                    <div className="text-xs text-slate-500">Response Time</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-fuchsia-400">
                      100%
                    </div>
                    <div className="text-xs text-slate-500">Satisfaction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-400">2+</div>
                    <div className="text-xs text-slate-500">Years Exp.</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="relative mt-24 text-center"
      >
        <div className="mx-auto max-w-4xl border-t border-white/10 pt-8">
          <p className="text-slate-500">
            © 2025 Phyo Wai Aung. Built with Next.js, TypeScript, and Tailwind
            CSS.
          </p>
          <p className="mt-2 text-sm text-slate-600">
            Designed and developed with passion ✨
          </p>
        </div>
      </motion.div>
    </section>
  );
}

function ContactCard({
  icon: Icon,
  title,
  content,
  href,
}: {
  icon: any;
  title: string;
  content: string;
  href?: string;
}) {
  const Wrapper = href ? "a" : "div";

  return (
    <Wrapper
      {...(href ? { href, target: "_blank", rel: "noopener noreferrer" } : {})}
      className="group relative block overflow-hidden rounded-xl border border-white/10 bg-slate-900/50 p-6 backdrop-blur-xl transition-all duration-300 hover:border-violet-400/30 hover:scale-105"
    >
      <div className="relative z-10 flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-violet-400 to-cyan-400">
          <Icon className="h-6 w-6 text-white" />
        </div>
        <div>
          <div className="text-sm text-slate-400">{title}</div>
          <div className="font-medium text-white">{content}</div>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-violet-400/5 to-cyan-400/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </Wrapper>
  );
}
