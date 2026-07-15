"use client";

import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaFileAlt,
} from "react-icons/fa";

const links = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#030712]/80 backdrop-blur-xl"
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8">

        {/* Logo */}

        <a
          href="#"
          className="text-3xl font-extrabold tracking-tight"
        >
          Rahul
          <span className="text-blue-500">.</span>
        </a>

        {/* Desktop */}

        <nav className="hidden items-center gap-10 lg:flex">

          {links.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-300 transition hover:text-blue-400"
            >
              {item.name}
            </a>
          ))}

        </nav>

        {/* Right */}

        <div className="flex items-center gap-4">

          {/* <a
            href="https://github.com/"
            target="_blank"
            className="rounded-full bg-white/10 p-3 transition hover:bg-blue-600"
          >
            <FaGithub size={18} />
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            className="rounded-full bg-white/10 p-3 transition hover:bg-blue-600"
          >
            <FaLinkedin size={18} />
          </a> */}

          

          <a
            href="/resume.pdf"
            className="hidden items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold transition hover:bg-blue-700 md:flex"
          >
            <FaFileAlt />

            Resume
          </a>

        </div>

      </div>
    </motion.header>
  );
}