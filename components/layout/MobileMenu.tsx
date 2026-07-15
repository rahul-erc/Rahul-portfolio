"use client";

import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  "About",
  "Skills",
  "Experience",
  "Projects",
  "Contact",
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className="md:hidden"
        onClick={() => setOpen(true)}
      >
        <FiMenu size={28} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: .3 }}
            className="fixed inset-0 bg-[#030712] z-50 p-10"
          >
            <button
              onClick={() => setOpen(false)}
            >
              <FiX size={30} />
            </button>

            <div className="mt-20 flex flex-col gap-8 text-3xl">

              {links.map((item)=>(
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={()=>setOpen(false)}
                >
                  {item}
                </a>
              ))}

            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}