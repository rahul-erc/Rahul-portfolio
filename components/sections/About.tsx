"use client";

import { motion } from "framer-motion";
import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import { profile } from "@/data/profile";
import Image from "next/image";

export default function About() {
  const stats = [
    { title: "Experience", value: profile.experience },
    { title: "Current Company", value: profile.company },
    { title: "Location", value: profile.location },
    { title: "Specialization", value: "QA Automation & SDET" },
  ];

  return (
    <section
      id="about"
      className="py-32 bg-gradient-to-b from-[#030712] to-[#07111f]"
    >
      <Container>
        <SectionHeading
          title="About Me"
          subtitle="A passionate QA Automation Engineer focused on building scalable, maintainable, and reliable testing solutions."
        />

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .6 }}
            className="relative"
          >
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-10 backdrop-blur-xl">

              <div className="overflow-hidden rounded-2xl">

                <Image
                  src="/images/profile.jpg"
                  alt="Rahul Chowdary"
                  width={400}
                  height={400}
                  className="h-72 w-full rounded-2xl object-cover"
                  priority
                />

              </div>

            </div>
          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .6 }}
          >

            <h2 className="text-5xl font-bold">
              {profile.name}
            </h2>

            <p className="mt-4 text-xl text-blue-400">
              {profile.role}
            </p>

            <p className="mt-8 leading-8 text-gray-400">
              {profile.summary}
            </p>

            <div className="mt-12 grid gap-5 sm:grid-cols-2">

              {stats.map((item) => (

                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition hover:border-blue-500 hover:bg-white/10"
                >
                  <p className="text-sm text-gray-500">
                    {item.title}
                  </p>

                  <h3 className="mt-2 text-xl font-semibold">
                    {item.value}
                  </h3>

                </div>

              ))}

            </div>

          </motion.div>

        </div>

      </Container>
    </section>
  );
}