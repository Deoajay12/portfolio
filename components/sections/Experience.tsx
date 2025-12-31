"use client";

import { motion } from "framer-motion";
import { FloatingCard } from "@/components/ui/FloatingCard";

const experienceData = [
    {
        company: "Amizhth Techno Solution",
        role: "Frontend Developer",
        period: "06/2023 – 07/2025",
        points: [
            "Built scalable UIs using React, Angular, TypeScript",
            "Integrated REST APIs",
            "Focused on performance and accessibility"
        ]
    },
    {
        company: "ARM Info Tech",
        role: "Frontend Developer",
        period: "01/2023 – 05/2023",
        points: [
            "Built design systems",
            "Converted Figma designs into responsive UI"
        ]
    }
];

export const Experience = () => {
    return (
        <section id="experience" className="relative py-24 px-4 overflow-hidden">
            <div className="container mx-auto max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4">Experience</h2>
                    <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
                </motion.div>

                <div className="space-y-8">
                    {experienceData.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <FloatingCard className="relative pl-8">
                                {/* Timeline Line */}
                                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-transparent rounded-l-xl" />

                                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                                    <h3 className="text-xl font-bold text-white">{exp.company}</h3>
                                    <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full w-fit mt-1 md:mt-0">
                                        {exp.period}
                                    </span>
                                </div>
                                <h4 className="text-lg text-gray-300 mb-4">{exp.role}</h4>
                                <ul className="list-disc list-inside space-y-1 text-gray-400">
                                    {exp.points.map((point, idx) => (
                                        <li key={idx}>{point}</li>
                                    ))}
                                </ul>
                            </FloatingCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
