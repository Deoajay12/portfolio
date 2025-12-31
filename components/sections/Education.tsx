"use client";

import { FloatingCard } from "@/components/ui/FloatingCard";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

export const Education = () => {
    return (
        <section id="education" className="relative py-24 px-4 overflow-hidden bg-white/5">
            <div className="container mx-auto max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4">Education</h2>
                    <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
                </motion.div>

                <div className="grid gap-6 md:grid-cols-2">
                    <FloatingCard delay={0} className="flex items-start gap-4">
                        <div className="p-3 bg-primary/20 rounded-lg text-primary">
                            <GraduationCap size={24} />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-white">MCA</h3>
                            <p className="text-primary/80 mb-1">KLN College of Engineering</p>
                            <p className="text-sm text-gray-400">CGPA: 8.9</p>
                        </div>
                    </FloatingCard>

                    <FloatingCard delay={0.2} className="flex items-start gap-4">
                        <div className="p-3 bg-primary/20 rounded-lg text-primary">
                            <GraduationCap size={24} />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-white">BCA</h3>
                            <p className="text-primary/80 mb-1">S. Vellaichamy Nadar College</p>
                            <p className="text-sm text-gray-400">Percentage: 74.4%</p>
                        </div>
                    </FloatingCard>
                </div>
            </div>
        </section>
    );
};
