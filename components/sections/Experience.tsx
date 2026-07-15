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

          <div className="absolute left-4 top-0 h-full w-[2px] bg-blue-500/20 md:left-1/2 md:-translate-x-1/2" />

          {experiences.map((exp, index) => (

            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: .6,
                delay: index * .12,
              }}
              className={`relative mb-16 flex w-full ${
                index % 2 === 0
                  ? "justify-start"
                  : "justify-end"
              }`}
            >

              <div className="absolute left-4 top-10 h-5 w-5 rounded-full border-4 border-[#030712] bg-blue-500 md:left-1/2 md:-translate-x-1/2" />

              <div className="ml-14 w-full rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl md:ml-0 md:w-[45%]">

                <span className="rounded-full bg-blue-500/20 px-4 py-1 text-sm text-blue-400">
                  {exp.duration}
                </span>

                <h3 className="mt-6 text-2xl font-bold">
                  {exp.role}
                </h3>

                <p className="mt-2 text-blue-400">
                  {exp.company}
                </p>

                <p className="mt-6 leading-8 text-gray-400">
                  {exp.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-3">

                  {exp.skills.map((skill) => (

                    <span
                      key={skill}
                      className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm"
                    >
                      {skill}
                    </span>

                  ))}

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </Container>
    </section>
  );
}