"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import AnimatedBackground from "../background/AnimatedBackground";

export default function Hero() {
  return (
    <section className="relative
      flex
      min-h-screen
      items-center
      justify-center
      overflow-hidden
      bg-[#030712]
      pt-24
      md:pt-32">

      <AnimatedBackground />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 text-center"
      >
        {/* <p className="mb-4 text-sm uppercase tracking-[0.4em] text-blue-400">
          Welcome
        </p> */}

        <h1 className="text-5xl font-extrabold leading-tight md:text-7xl lg:text-8xl">
          Rahul <span className="text-blue-500">Chowdary</span>
        </h1>

        <div className="mt-6 h-12 text-xl font-medium text-gray-300 md:text-3xl">
          <TypeAnimation
            sequence={[
              "Software Engineer",
              2000,
              "QA Automation Engineer",
              2000,
              "Playwright Automation Engineer",
              2000,
              "SDET",
              2000,
              
            ]}
            speed={50}
            repeat={Infinity}
          />
        </div>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-400">
          Building enterprise automation frameworks, security regression
          pipelines, API testing suites, and scalable quality engineering
          solutions.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="/resume.pdf"
            download
            >

            Download Resume

            </a>

          <a
            href="#contact"
            
            >

            Contact Me

          </a>
        </div>

        {/* Stats */}
        <div className="mt-20 grid w-full max-w-5xl grid-cols-2 gap-6 md:grid-cols-4">
          {[
            { value: "2+", label: "Years Experience" },
            { value: "80%", label: "Automation Coverage" },
            { value: "120+", label: "Critical Bugs Found" },
            { value: "6+", label: "Major Releases" },
          ].map((item) => (
            <motion.div
              key={item.label}
              whileHover={{
                scale: 1.05,
                y: -8,
              }}
              className="rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-8 shadow-xl transition-all duration-500 hover:border-blue-500 hover:bg-white/10"
            >
              <h3 className="text-3xl font-bold text-blue-400">
                {item.value}
              </h3>

              <p className="mt-2 text-sm text-gray-400">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Scroll */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
          }}
          className="mt-16 text-gray-500"
        >
          ↓ Scroll Down
        </motion.div>
      </motion.div>
    </section>
  );
}