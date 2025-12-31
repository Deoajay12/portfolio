"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import Link from "next/link";

export const Hero = () => {
    return (
        <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 py-24">
            {/* Background elements */}
            <div className="absolute top-[-20%] left-[-10%] h-[500px] w-[500px] rounded-full bg-primary/20 blur-[100px]" />
            <div className="absolute bottom-[-20%] right-[-10%] h-[500px] w-[500px] rounded-full bg-accent/20 blur-[100px]" />

            <div className="z-10 flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-4 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-gray-300 backdrop-blur-md"
                >
                    Hello, I'm Deo Ajay J
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="mb-6 text-5xl font-bold tracking-tight text-white sm:text-7xl"
                >
                    Frontend <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">Developer</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mb-8 max-w-[600px] text-lg text-gray-400 sm:text-xl"
                >
                    Building scalable, responsive, and user-friendly web applications using React, Next.js, Angular, and TypeScript.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col gap-4 sm:flex-row"
                >
                    <Link
                        href="#projects"
                        className="group relative inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-white px-8 text-sm font-medium text-black transition-transform hover:scale-105"
                    >
                        View Projects
                        <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                    </Link>

                    <Link
                        href="/Deo Ajay J.pdf"
                        target="_blank"
                        className="group relative inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/5 px-8 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/10"
                    >
                        Download Resume
                        <Download size={18} className="transition-transform group-hover:-translate-y-1" />
                    </Link>
                </motion.div>
            </div>

            {/* Decorative gentle floating elements */}
            <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute left-[10%] top-[20%] hidden h-16 w-16 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md lg:block"
            />
            <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute right-[15%] bottom-[30%] hidden h-24 w-24 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-md lg:block"
            />

        </section>
    );
};
