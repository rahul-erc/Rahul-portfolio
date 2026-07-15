"use client";

import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">

      {/* Main Blue Glow */}
      <motion.div
        animate={{
          x: [0, 80, -40, 0],
          y: [0, 40, -50, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[-150px] left-[20%]
        h-[500px] w-[500px]
        rounded-full
        bg-blue-500/20
        blur-[140px]"
      />

      {/* Purple Glow */}

      <motion.div
        animate={{
          x: [0, -120, 30, 0],
          y: [0, -60, 50, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[-120px] right-[10%]
        h-[450px] w-[450px]
        rounded-full
        bg-violet-500/20
        blur-[140px]"
      />

      {/* Cyan Glow */}

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
        }}
        className="absolute
        top-[40%]
        left-[50%]
        h-[350px]
        w-[350px]
        -translate-x-1/2
        rounded-full
        bg-cyan-500/10
        blur-[130px]"
      />

    </div>
  );
}