"use client";

import { motion } from "framer-motion";
import { useRef, useEffect } from "react";
import Image from "next/image";
import { Mail, MessageCircle, Download, Coffee } from "lucide-react";

interface ContactLink {
  icon: React.ReactNode;
  href: string;
  label: string;
  className: string;
  target?: string;
  rel?: string;
  download?: boolean;
}

const contactLinks: ContactLink[] = [
  {
    icon: (
      <Mail
        className="w-4 h-4 group-hover:animate-pulse"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </Mail>
    ),
    href: "mailto:phyowaiaung.pxyo@gmail.com",
    label: "Email",
    className:
      "group relative px-6 py-3 bg-gradient-to-r from-emerald-400 to-cyan-400 text-slate-900 rounded-xl font-bold hover:shadow-xl hover:shadow-emerald-400/30 transition-all duration-300 transform hover:scale-105",
  },
  {
    icon: (
      <MessageCircle
        className="w-4 h-4"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.123-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
      </MessageCircle>
    ),
    href: "https://wa.me/+9509974282980",
    label: "WhatsApp",
    target: "_blank",
    className:
      "group relative px-6 py-3 bg-gradient-to-r from-green-400 to-green-500 text-white rounded-xl font-bold hover:shadow-xl hover:shadow-green-400/30 transition-all duration-300 transform hover:scale-105",
  },
  {
    icon: (
      <Download
        className="w-4 h-4 group-hover:animate-bounce"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </Download>
    ),
    href: "/resume-phyowaiaung.pdf",
    label: "Download Resume",
    target: "_blank",
    className:
      "group relative px-6 py-3 bg-white/10 backdrop-blur-sm text-white rounded-xl font-bold border border-white/20 hover:bg-white/20 hover:border-emerald-400/40 transition-all duration-300 transform hover:scale-105",
  },
  {
    icon: (
      <Download
        className="w-4 h-4 group-hover:animate-bounce"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </Download>
    ),
    href: "/coverletter.pdf",
    label: "Download Cover Letter",
    target: "_blank",
    className:
      "group relative px-6 py-3 bg-white/10 backdrop-blur-sm text-white rounded-xl font-bold border border-white/20 hover:bg-white/20 hover:border-cyan-400/40 transition-all duration-300 transform hover:scale-105",
  },
];

export default function Footer() {
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const footer = footerRef.current;
    if (!footer) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      { threshold: 0.1 },
    );

    if (footer) {
      observer.observe(footer);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <footer ref={footerRef} className="relative py-16">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="mb-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4">
                <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent bg-size-200 bg-pos-0 animate-gradient">
                  Let&apos;s Connect
                </span>
              </h2>
              <p className="text-slate-300 text-lg max-w-3xl mx-auto leading-relaxed">
                Thank you for visiting my portfolio. I&apos;m always excited to
                <span className="text-emerald-400 font-semibold">
                  {" "}
                  collaborate
                </span>{" "}
                on
                <span className="text-cyan-400 font-semibold">
                  {" "}
                  innovative projects
                </span>{" "}
                and
                <span className="text-emerald-400 font-semibold">
                  {" "}
                  connect
                </span>{" "}
                with fellow developers.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12"
          >
            {contactLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.target}
                download={link.download}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                viewport={{ once: true }}
                className={link.className}
              >
                <span className="relative z-10 flex items-center gap-2">
                  {link.icon}
                  {link.label}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-cyan-400/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <div className="text-center pt-6 border-t border-slate-800">
        <div className="flex items-center justify-center gap-2 text-slate-500 text-sm">
          <span>2026 phyowaiaung.</span>
        </div>
        <div className="flex items-center justify-center gap-2 text-slate-500 text-sm">
          <span>Built with</span>
          <span className="text-emerald-400">passion</span>
          <span>,</span>
          <span className="text-cyan-400">creativity</span>
          <span>and</span>
          <span className="text-yellow-400">coffee</span>
          <Coffee className="w-4 h-4 text-yellow-400" />
          <span>.</span>
        </div>
      </div>
    </footer>
  );
}
