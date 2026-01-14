"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MessageCircle,
  Download,
  ExternalLink,
  Twitter,
  Instagram,
} from "lucide-react";

export interface SocialLink {
  iconName:
    | "Github"
    | "Linkedin"
    | "Mail"
    | "Phone"
    | "MessageCircle"
    | "Download"
    | "ExternalLink"
    | "Twitter"
    | "Instagram";
  href: string;
  label: string;
  color?: string;
}

interface FloatingSocialIconsProps {
  position?: "left" | "right" | "bottom-right";
  variant?: "vertical" | "horizontal" | "circular";
  showLabels?: boolean;
  className?: string;
}

const defaultSocialLinks: SocialLink[] = [
  {
    iconName: "Github",
    href: "https://github.com/phyoewaiaung",
    label: "GitHub",
    color: "hover:bg-gray-800",
  },
  {
    iconName: "Linkedin",
    href: "https://linkedin.com/in/phyoewaiaung082/",
    label: "LinkedIn",
    color: "hover:bg-blue-600",
  },
  {
    iconName: "Mail",
    href: "mailto:phyowaiaung.pxyo@gmail.com",
    label: "Email",
    color: "hover:bg-red-600",
  },
  {
    iconName: "Phone",
    href: "tel:+660629852876",
    label: "Phone",
    color: "hover:bg-green-600",
  },
  {
    iconName: "MessageCircle",
    href: "https://wa.me/+9509974282980",
    label: "WhatsApp",
    color: "hover:bg-green-500",
  },
];

export default function FloatingSocialIcons({
  position = "right",
  variant = "vertical",
  showLabels = false,
  className = "",
  socialLinks = defaultSocialLinks,
}: FloatingSocialIconsProps & { socialLinks?: SocialLink[] }) {
  const iconMap = {
    Github,
    Linkedin,
    Mail,
    Phone,
    MessageCircle,
    Download,
    ExternalLink,
    Twitter,
    Instagram,
  };

  const getPositionClasses = () => {
    switch (position) {
      case "left":
        return "left-2 top-1/2 -translate-y-1/2 md:left-6";
      case "right":
        return "right-2 top-1/2 -translate-y-1/2 md:right-6";
      case "bottom-right":
        return "bottom-8 right-8";
      default:
        return "right-2 top-1/2 -translate-y-1/2 md:right-6";
    }
  };

  const getVariantClasses = () => {
    switch (variant) {
      case "horizontal":
        return "flex-row gap-4";
      case "circular":
        return "relative";
      default:
        return "flex-col gap-2 md:gap-4";
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, x: position === "left" ? -20 : 20 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: { type: "spring" as const, stiffness: 300, damping: 20 },
    },
    hover: { scale: 1.05 },
  };

  const circularVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const circularItemVariants = (index: number, total: number) => ({
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
        delay: index * 0.1,
      },
    },
    hover: { scale: 1.2, rotate: 10 },
  });

  if (variant === "circular") {
    return (
      <motion.div
        initial="hidden"
        animate="visible"
        variants={circularVariants}
        className={`fixed z-50 ${getPositionClasses()} ${className}`}
      >
        <div className="relative w-16 h-16">
          {socialLinks.map((link, index) => {
            const angle = (index * 360) / socialLinks.length;
            const radius = 80;
            const x = Math.cos((angle * Math.PI) / 180) * radius;
            const y = Math.sin((angle * Math.PI) / 180) * radius;

            return (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                variants={circularItemVariants(index, socialLinks.length)}
                whileHover="hover"
                className={`absolute w-12 h-12 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full flex items-center justify-center text-white/80 transition-all duration-300 shadow-lg hover:shadow-xl hover:bg-white/15`}
                style={{
                  left: `${x}px`,
                  top: `${y}px`,
                  transform: "translate(-50%, -50%)",
                }}
                title={link.label}
              >
                {/* Subtle glow on hover */}
                <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 bg-emerald-400/10 rounded-full blur-sm" />
                </div>

                {/* Icon */}
                {React.createElement(iconMap[link.iconName], {
                  className:
                    "relative w-4 h-4 md:w-5 md:h-5 text-emerald-400 transition-colors duration-300 group-hover:text-emerald-300",
                })}

                {/* Subtle orbit ring */}
                <motion.div
                  className="absolute inset-0 border border-emerald-400/20 rounded-full"
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 8 + index * 2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </motion.a>
            );
          })}

          {/* Center button */}
          <motion.div
            className="absolute inset-0 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full flex items-center justify-center text-emerald-400 shadow-lg cursor-pointer"
            whileHover={{ scale: 1.05, rotate: 180 }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Subtle glow on hover */}
            <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute inset-0 bg-emerald-400/20 rounded-full blur-sm" />
            </div>

            <MessageCircle className="relative w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
          </motion.div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className={`fixed z-50 flex ${getVariantClasses()} ${getPositionClasses()} ${className}`}
    >
      {socialLinks.map((link) => (
        <motion.a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          variants={itemVariants}
          whileHover="hover"
          className={`group relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-full p-2 md:p-3 text-white/80 shadow-lg hover:shadow-xl hover:bg-white/15 transition-all duration-300`}
          title={link.label}
          style={{ transformOrigin: "center" }}
        >
          {/* Subtle glow on hover */}
          <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute inset-0 bg-emerald-400/10 rounded-full blur-sm" />
          </div>

          {/* Icon */}
          {React.createElement(iconMap[link.iconName], {
            className:
              "relative w-4 h-4 md:w-5 md:h-5 text-emerald-400 transition-colors duration-300 group-hover:text-emerald-300",
          })}

          {/* Tooltip that appears on top of icon */}
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-gray-900/95 backdrop-blur-md text-white text-xs font-medium px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none border border-emerald-400/30 shadow-lg z-50">
            {link.label}
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-emerald-400 rotate-45" />
          </div>
        </motion.a>
      ))}
    </motion.div>
  );
}

// Specialized components for different use cases
export function FloatingContactButton() {
  const handleContact = () => {
    const contactSection = document.getElementById("contact");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 400, damping: 25 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      onClick={handleContact}
      className="fixed bottom-8 right-4 z-50 md:right-8 group"
      title="Contact Me"
    >
      <div className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-full p-3 md:p-4 text-white/80 shadow-lg hover:shadow-xl hover:bg-white/15 transition-all duration-300">
        {/* Subtle glow on hover */}
        <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute inset-0 bg-emerald-400/10 rounded-full blur-sm" />
        </div>

        {/* Icon */}
        <MessageCircle className="relative w-5 h-5 md:w-6 md:h-6 text-emerald-400 transition-colors duration-300 group-hover:text-emerald-300" />

        {/* Tooltip on top */}
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-gray-900/95 backdrop-blur-md text-white text-xs font-medium px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none border border-emerald-400/30 shadow-lg z-50">
          Contact Me
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-emerald-400 rotate-45" />
        </div>
      </div>
    </motion.button>
  );
}

export function FloatingDownloadCV() {
  return (
    <motion.button
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.2, type: "spring", stiffness: 400, damping: 25 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      className="fixed bottom-8 right-4 z-50 md:right-8 group"
      title="Download CV"
    >
      <a
        href="/resume-phyowaiaung.pdf"
        // download
        target="_blank"
        rel="noopener noreferrer"
        className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-full p-3 md:p-4 text-white/80 shadow-lg hover:shadow-xl hover:bg-white/15 transition-all duration-300 block"
      >
        {/* Subtle glow on hover */}
        <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute inset-0 bg-blue-400/10 rounded-full blur-sm" />
        </div>

        {/* Icon */}
        <Download className="relative w-5 h-5 md:w-6 md:h-6 text-blue-400 transition-colors duration-300 group-hover:text-blue-300" />

        {/* Tooltip on top */}
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-gray-900/95 backdrop-blur-md text-white text-xs font-medium px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none border border-blue-400/30 shadow-lg z-50">
          Download CV
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-blue-400 rotate-45" />
        </div>
      </a>
    </motion.button>
  );
}
