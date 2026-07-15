"use client";

import { motion } from "framer-motion";

interface Props {
  company: string;
  role: string;
  duration: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export default function ExperienceCard({
  company,
  role,
  duration,
  location,
  description,
  achievements,
  technologies,
}: Props) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="relative rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl"
    >
      <div className="absolute left-0 top-0 h-full w-1 rounded-l-3xl bg-gradient-to-b from-blue-500 to-violet-500" />

      <div className="ml-4">
        <h2 className="text-3xl font-bold">{company}</h2>

        <p className="mt-2 text-xl text-blue-400">{role}</p>

        <div className="mt-2 flex flex-wrap gap-5 text-sm text-gray-400">
          <span>{duration}</span>
          <span>{location}</span>
        </div>

        <p className="mt-6 leading-8 text-gray-300">
          {description}
        </p>

        <h3 className="mt-8 text-lg font-semibold">
          Key Achievements
        </h3>

        <ul className="mt-4 space-y-3">
          {achievements.map((item) => (
            <li
              key={item}
              className="flex gap-3"
            >
              <span className="mt-2 h-2 w-2 rounded-full bg-blue-500" />

              <span className="text-gray-400">
                {item}
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-wrap gap-3">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}