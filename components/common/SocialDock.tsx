"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { contact } from "@/data/contact";

export default function SocialDock() {
  return (
    <div className="fixed right-8 bottom-28 z-40 flex flex-col gap-4">
      <a
        href={contact.github}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full bg-white/10 p-4 backdrop-blur-xl transition hover:bg-blue-600"
      >
        <FaGithub size={22} />
      </a>

      <a
        href={contact.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full bg-white/10 p-4 backdrop-blur-xl transition hover:bg-blue-600"
      >
        <FaLinkedin size={22} />
      </a>

      <a
        href={`mailto:${contact.email}`}
        className="rounded-full bg-white/10 p-4 backdrop-blur-xl transition hover:bg-blue-600"
      >
        <MdEmail size={22} />
      </a>
    </div>
  );
}