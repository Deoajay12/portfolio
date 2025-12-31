"use client";

import { FloatingCard } from "@/components/ui/FloatingCard";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projectsData = [
    {
        title: "TANFUND",
        description: "A funding platform facilitating government schemes and startup investments.",
        tags: ["React", "Context API", "MUI"],
        links: { demo: "#", github: "#" }
    },
    {
        title: "Startup TN",
        description: "Official portal for the Tamil Nadu startup ecosystem.",
        tags: ["React", "Context API", "MUI"],
        links: { demo: "#", github: "#" }
    },
    {
        title: "StartupTN Catalyst",
        description: "An aggregator platform connecting startups with mentors and investors.",
        tags: ["Angular", "MUI"],
        links: { demo: "#", github: "#" }
    },
    {
        title: "CM Accident Relief Fund",
        description: "Government portal for managing accident relief fund applications and disbursements.",
        tags: ["React", "Redux", "MUI"],
        links: { demo: "#", github: "#" }
    },
    {
        title: "THALAMZ",
        description: "A comprehensive dashboard for managing business operations and analytics.",
        tags: ["Next.js", "TypeScript", "Redux", "Tailwind"],
        links: { demo: "#", github: "#" }
    },
];

export const Projects = () => {
    return (
        <section id="projects" className="relative py-24 px-4 overflow-hidden">
            <div className="container mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4">Projects</h2>
                    <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
                </motion.div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {projectsData.map((project, index) => (
                        <FloatingCard key={index} delay={index * 0.1} className="flex flex-col h-full group">
                            <div className="mb-4">
                                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                                <p className="text-sm text-gray-400 leading-relaxed mb-4 min-h-[60px]">{project.description}</p>
                            </div>

                            <div className="mt-auto">
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="text-xs font-medium px-2 py-1 rounded bg-primary/20 text-primary border border-primary/20">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-4">
                                    <a href={project.links.demo} className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors">
                                        <ExternalLink size={16} /> Live Demo
                                    </a>
                                    <a href={project.links.github} className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors">
                                        <Github size={16} /> Code
                                    </a>
                                </div>
                            </div>
                        </FloatingCard>
                    ))}
                </div>
            </div>
        </section>
    );
};
