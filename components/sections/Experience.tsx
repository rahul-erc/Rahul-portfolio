"use client";

import { motion } from "framer-motion";
import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative py-32 bg-[#030712]"
    >
      <Container>
        <SectionHeading
          title="Professional Experience"
          subtitle="My journey in Software Quality Engineering, Automation and Enterprise Testing."
        />

        <div className="relative mx-auto mt-20 max-w-5xl">
          {/* Timeline */}
          <div className="absolute left-4 top-0 h-full w-[2px] bg-blue-500/20 md:left-1/2 md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
              }}
              className={`group relative mb-16 flex w-full ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              }`}
            >
              {/* Timeline Dot */}
              <div
                className="
                  absolute
                  left-4
                  top-10
                  h-5
                  w-5
                  rounded-full
                  border-4
                  border-[#030712]
                  bg-blue-500
                  transition-all
                  duration-500
                  group-hover:scale-125
                  group-hover:shadow-[0_0_25px_rgba(59,130,246,0.8)]
                  md:left-1/2
                  md:-translate-x-1/2
                "
              />

              {/* Card */}
              <div
                className="
                  relative
                  ml-14
                  w-full
                  overflow-hidden
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/[0.04]
                  p-8
                  backdrop-blur-xl
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:border-blue-500/40
                  hover:shadow-[0_0_45px_rgba(59,130,246,0.18)]
                  md:ml-0
                  md:w-[45%]
                "
              >
                {/* Gradient Overlay */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-br
                    from-blue-500/10
                    via-cyan-500/5
                    to-purple-500/10
                    opacity-0
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                  "
                />

                {/* Content */}
                <div className="relative z-10">
                  <span
                    className="
                      rounded-full
                      bg-blue-500/20
                      px-4
                      py-1
                      text-sm
                      text-blue-400
                      transition-all
                      duration-300
                      group-hover:bg-blue-500/30
                    "
                  >
                    {exp.duration}
                  </span>

                  <h3
                    className="
                      mt-6
                      text-2xl
                      font-bold
                      transition-colors
                      duration-300
                      group-hover:text-blue-400
                    "
                  >
                    {exp.role}
                  </h3>

                  <p
                    className="
                      mt-2
                      text-blue-400
                      transition-all
                      duration-300
                      group-hover:translate-x-1
                    "
                  >
                    {exp.company}
                  </p>

                  <p
                    className="
                      mt-6
                      leading-8
                      text-gray-400
                      transition-colors
                      duration-300
                      group-hover:text-gray-300
                    "
                  >
                    {exp.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="
                          rounded-full
                          border
                          border-blue-500/30
                          bg-blue-500/10
                          px-4
                          py-2
                          text-sm
                          transition-all
                          duration-300
                          group-hover:border-blue-400/60
                          group-hover:bg-blue-500/20
                          group-hover:scale-105
                        "
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}