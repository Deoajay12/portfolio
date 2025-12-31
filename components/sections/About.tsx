"use client";

import { FloatingCard } from "@/components/ui/FloatingCard";
import { motion } from "framer-motion";

export const About = () => {
    return (
        <section id="about" className="relative py-24 px-4 overflow-hidden">

            <div className="container mx-auto max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4">About Me</h2>
                    <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
                </motion.div>

                <div className="grid gap-8 md:grid-cols-1">
                    <FloatingCard className="border-l-4 border-l-primary bg-gradient-to-br from-white/5 to-transparent">
                        <p className="text-lg text-gray-300 leading-relaxed">
                            Frontend Developer with <span className="text-primary font-semibold">2.7 years of experience</span> building scalable, responsive,
                            and user-friendly web applications using React.js, Angular, JavaScript, and TypeScript.
                            Experienced in government portals, dashboards, funding platforms, and admin systems.
                        </p>
                    </FloatingCard>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                        <FloatingCard delay={0.2} className="flex flex-col gap-2">
                            <h3 className="text-xl font-semibold text-white">Experience</h3>
                            <p className="text-gray-400">2.7 Years in Frontend Development</p>
                        </FloatingCard>
                        <FloatingCard delay={0.4} className="flex flex-col gap-2">
                            <h3 className="text-xl font-semibold text-white">Location</h3>
                            <p className="text-gray-400">Madurai, Tamil Nadu, India</p>
                        </FloatingCard>
                    </div>
                </div>
            </div>
        </section>
    );
};
