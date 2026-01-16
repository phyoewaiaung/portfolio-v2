"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ProfileImage() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative w-full h-[450px] sm:h-[550px] md:h-[650px] flex items-start justify-center pt-5 sm:pt-0 md:pt-0"
    >
      <div className="relative group self-start">
        {/* Frame with effects inside border */}
        <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px] xl:w-[550px] xl:h-[550px]">
          {/* Main image container */}
          <motion.div
            // whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
            className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/10"
          >
            {/* Profile image */}
            <Image
              src="/images/phyo.png"
              alt="Profile"
              width={400}
              height={400}
              className="w-full h-full object-contain scale-120"
              priority
            />

            {/* Gradient overlays inside */}
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-400/8 via-transparent to-transparent transition-all duration-500" />
            <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-white/10 to-transparent transition-opacity duration-700" />
            <div className="absolute inset-0 rounded-full border-2 border-gradient-to-r from-emerald-400/20 to-cyan-400/20 transition-opacity duration-400" />
          </motion.div>

          {/* Animated ring - inside the border */}
          <motion.div
            className="absolute inset-4 rounded-full border-2 border-emerald-400/30"
            animate={{
              rotate: [0, 360],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              borderTopColor: "rgb(52, 211, 153)",
              borderRightColor: "transparent",
              borderBottomColor: "transparent",
              borderLeftColor: "transparent",
              borderRadius: "50%",
            }}
          />

          {/* Additional ring - inside the border */}
          <motion.div
            className="absolute inset-4 rounded-full border border-cyan-400/25"
            animate={{
              rotate: [360, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              borderTopColor: "transparent",
              borderRightColor: "rgb(34, 211, 238)",
              borderBottomColor: "transparent",
              borderLeftColor: "transparent",
              borderRadius: "50%",
            }}
          />
        </div>
      </div>
    </motion.div>
  );
}
