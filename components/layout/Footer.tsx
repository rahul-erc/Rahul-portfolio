"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#02040a]">

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-8 py-10 md:flex-row">

        <div>

          <h2 className="text-xl font-bold">

            Rahul
            <span className="text-blue-500">.</span>

          </h2>

          <p className="mt-2 text-gray-500">

            QA Automation Engineer  • SDET

          </p>

        </div>

        <div className="flex gap-5">

          <a
            href="https://github.com/yourusername"
            target="_blank"
            className="text-2xl hover:text-blue-500"
          >

            <FaGithub />

          </a>

          <a
            href="https://linkedin.com/in/rahuleagalapati"
            target="_blank"
            className="text-2xl hover:text-blue-500"
          >

            <FaLinkedin />

          </a>

        </div>

      </div>

      <div className="border-t border-white/10 py-5 text-center text-gray-500">

        © {new Date().getFullYear()} Rahul Chowdary. All Rights Reserved.

      </div>

    </footer>
  );
}