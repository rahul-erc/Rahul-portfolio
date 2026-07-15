"use client";

import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";

type Project = {
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  live?: string;
  status: string;
};

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25 }}
      className="group h-full rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl transition-all duration-300 hover:border-blue-500 hover:bg-white/10 hover:shadow-[0_0_40px_rgba(37,99,235,.25)]"
    >
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-2xl font-bold text-white">
            {project.title}
          </h3>

          <span className="mt-3 inline-block rounded-full bg-blue-500/20 px-3 py-1 text-sm text-blue-400">
            {project.status}
          </span>
        </div>
      </div>

      {/* Description */}
      <p className="mt-6 leading-8 text-gray-400">
        {project.description}
      </p>

      {/* Technologies */}
      <div className="mt-8 flex flex-wrap gap-3">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-300"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Buttons */}
      <div className="mt-10 flex gap-4">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-5 py-3 transition hover:border-blue-500"
          >
            <FaGithub />
            GitHub
          </a>
        )}

        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 transition hover:bg-blue-700"
          >
            <HiOutlineExternalLink />
            Live Demo
          </a>
        )}
      </div>
    </motion.div>
  );
}