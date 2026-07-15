"use client";

import { motion } from "framer-motion";
import { FaCertificate } from "react-icons/fa";
import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import { certifications } from "@/data/certifications";

export default function Certifications() {
  return (
    <section id="certifications" className="py-32 bg-[#030712]">
      <Container>

        <SectionHeading
          title="Certifications"
          subtitle="Professional certifications that strengthen my QA and Automation expertise."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2">

          {certifications.map((cert, index) => (

            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: .5,
                delay: index * .12,
              }}
              whileHover={{
                y: -8,
              }}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl hover:border-blue-500 transition-all"
            >

              <div className="flex items-center gap-5">

                <div className="rounded-full bg-blue-500/20 p-4">

                  <FaCertificate
                    size={28}
                    className="text-blue-400"
                  />

                </div>

                <div>

                  <h3 className="text-2xl font-bold">
                    {cert.title}
                  </h3>

                  <p className="text-blue-400">
                    {cert.issuer}
                  </p>

                </div>

              </div>

              <div className="mt-8 flex items-center justify-between">

                <span className="text-gray-400">
                  {cert.year}
                </span>

                <a
                  href={cert.credential}
                  target="_blank"
                  className="rounded-lg bg-blue-600 px-5 py-2 hover:bg-blue-700"
                >
                  View
                </a>

              </div>

            </motion.div>

          ))}

        </div>

      </Container>
    </section>
  );
}