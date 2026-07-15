"use client";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
      className={`fixed bottom-8 right-8 z-50 rounded-full bg-blue-600 p-4 shadow-xl transition-all duration-300 hover:scale-110 ${
        visible
          ? "opacity-100"
          : "pointer-events-none opacity-0"
      }`}
    >
      <FaArrowUp />
    </button>
  );
}