"use client";

import { motion } from "framer-motion";
import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import { skillCategories } from "@/data/skills";

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-32 bg-[#030712]"
    >
      <Container>
        <SectionHeading
          title="Skills & Technologies"
          subtitle="Technologies and tools I use to build reliable automation frameworks."
        />

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {skillCategories.map((category, index) => (

            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: .5,
                delay: index * .1,
              }}
              whileHover={{
                y: -10,
              }}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl "
            >
              <div
                className={`h-2 rounded-full bg-gradient-to-r ${category.color}`}
              />

              <h3 className="mt-6 text-2xl font-bold">
                {category.title}
              </h3>

              <div className="mt-6 flex flex-wrap gap-3">

                {category.skills.map((skill) => (

                  <motion.span
                    key={skill}
                    whileHover={{
                      scale: 1.08,
                    }}
                    className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm"
                  >
                    {skill}
                  </motion.span>

                ))}

              </div>

            </motion.div>

          ))}

        </div>

      </Container>
    </section>
  );
}