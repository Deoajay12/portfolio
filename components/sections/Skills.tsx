"use client";

import { FloatingCard } from "@/components/ui/FloatingCard";
import { motion } from "framer-motion";

const skillsData = [
    {
        category: "Frontend",
        skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript", "Tailwind CSS", "Bootstrap"],
    },
    {
        category: "Frameworks",
        skills: ["React.js", "Next.js", "Angular", "Redux", "Context API"],
    },
    {
        category: "Tools",
        skills: ["Git", "GitHub", "Webpack", "Vite", "NPM"],
    },
    {
        category: "APIs",
        skills: ["REST APIs", "Axios", "Fetch"],
    },
    {
        category: "Deployment",
        skills: ["Vercel", "Netlify", "AWS"],
    },
];

export const Skills = () => {
    return (
        <section id="skills" className="relative py-24 px-4 overflow-hidden bg-black/5">
            <div className="container mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4">Skills</h2>
                    <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
                </motion.div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {skillsData.map((group, index) => (
                        <FloatingCard key={index} delay={index * 0.1} className="h-full">
                            <h3 className="mb-4 text-xl font-semibold text-primary">{group.category}</h3>
                            <div className="flex flex-wrap gap-2">
                                {group.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-gray-300 backdrop-blur-sm transition-colors hover:bg-white/10 hover:text-white"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </FloatingCard>
                    ))}
                </div>
            </div>
        </section>
    );
};
