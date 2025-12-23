"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ProfileImage() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full h-full flex items-center justify-center"
    >
      <Image
        src="/images/avatar2.png"
        alt="Profile"
        width={400}
        height={400}
        className="w-full h-full object-cover rounded-3xl"
        priority
      />
    </motion.div>
  );
}
