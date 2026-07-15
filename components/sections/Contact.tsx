"use client";

import { motion } from "framer-motion";
import {
    FaEnvelope,
    FaGithub,
    FaLinkedin
} from "react-icons/fa";

import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";

export default function Contact() {

    return (

        <section
            id="contact"
            className="py-32 bg-gradient-to-b from-[#07111f] to-[#030712]"
        >

            <Container>

                <SectionHeading
                    title="Let's Connect"
                    subtitle="Interested in collaborating, discussing QA Automation or new opportunities?"
                />

                <motion.div

                    initial={{
                        opacity: 0,
                        y: 40
                    }}

                    whileInView={{
                        opacity: 1,
                        y: 0
                    }}

                    viewport={{
                        once: true
                    }}

                    className="mx-auto mt-16 max-w-3xl rounded-3xl border border-white/10 bg-white/[0.04] p-12 backdrop-blur-xl"

                >

                    <div className="space-y-8">

                        <a
                            href="mailto:eagalapatirahul@gmail.com"
                            className="flex items-center gap-5 rounded-xl border border-white/10 p-5 hover:border-blue-500 transition"
                        >

                            <FaEnvelope
                                className="text-blue-400"
                                size={26}
                            />

                            eagalapatirahul@gmail.com

                        </a>

                        <a

                            href="https://github.com/rahul-erc"

                            target="_blank"

                            className="flex items-center gap-5 rounded-xl border border-white/10 p-5 hover:border-blue-500 transition"

                        >

                            <FaGithub
                                className="text-blue-400"
                                size={26}
                            />

                            GitHub

                        </a>

                        <a

                            href="https://linkedin.com/in/rahuleagalapati"

                            target="_blank"

                            className="flex items-center gap-5 rounded-xl border border-white/10 p-5 hover:border-blue-500 transition"

                        >

                            <FaLinkedin
                                className="text-blue-400"
                                size={26}
                            />

                            LinkedIn

                        </a>

                    </div>

                </motion.div>

            </Container>

        </section>

    );

}