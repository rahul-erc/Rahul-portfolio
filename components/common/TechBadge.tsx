"use client";

import { motion } from "framer-motion";

export default function TechBadge({
  name,
}: {
  name: string;
}) {
  return (
    <motion.span
      whileHover={{
        scale: 1.08,
      }}
      className="rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-2 text-sm"
    >
      {name}
    </motion.span>
  );
}