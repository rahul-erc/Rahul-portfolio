"use client";

import { motion } from "framer-motion";
import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import { achievements } from "@/data/achievements";

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="py-32 bg-gradient-to-b from-[#030712] to-[#07111f]"
    >
      <Container>

        <SectionHeading
          title="Achievements"
          subtitle="A snapshot of my contributions in Quality Engineering and Automation."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {achievements.map((item, index) => {

            const Icon = item.icon;

            return (

              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: .5,
                  delay: index * .12,
                }}
                whileHover={{
                  y: -10,
                }}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 text-center backdrop-blur-xl transition-all hover:border-blue-500 hover:bg-white/10"
              >

                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-500/20">

                  <Icon
                    size={28}
                    className="text-blue-400"
                  />

                </div>

                <h2 className="mt-8 text-5xl font-bold text-blue-400">

                  {item.number}

                </h2>

                <h3 className="mt-4 text-xl font-semibold">

                  {item.title}

                </h3>

                <p className="mt-4 leading-7 text-gray-400">

                  {item.description}

                </p>

              </motion.div>

            );

          })}

        </div>

      </Container>
    </section>
  );
}