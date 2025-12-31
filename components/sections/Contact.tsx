"use client";

import { FloatingCard } from "@/components/ui/FloatingCard";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export const Contact = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <section id="contact" className="relative py-24 px-4 overflow-hidden">
            <div className="container mx-auto max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4">Get In Touch</h2>
                    <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
                </motion.div>

                <div className="grid gap-8 md:grid-cols-2">
                    <div className="space-y-6">
                        <FloatingCard>
                            <h3 className="text-xl font-bold text-white mb-4">Contact Information</h3>
                            <div className="space-y-4">
                                <a href="mailto:deoajay1210@gmail.com" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                                    <div className="p-2 bg-primary/20 rounded-lg text-primary">
                                        <Mail size={20} />
                                    </div>
                                    deoajay1210@gmail.com
                                </a>
                                <Link href="https://github.com/deoajay1210" target="_blank" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                                    <div className="p-2 bg-primary/20 rounded-lg text-primary">
                                        <Github size={20} />
                                    </div>
                                    GitHub Profile
                                </Link>
                                <Link href="https://linkedin.com" target="_blank" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                                    <div className="p-2 bg-primary/20 rounded-lg text-primary">
                                        <Linkedin size={20} />
                                    </div>
                                    LinkedIn Profile
                                </Link>
                            </div>
                        </FloatingCard>
                    </div>

                    <FloatingCard delay={0.2} className="relative">
                        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full rounded-lg border border-white/10 bg-black/20 px-4 py-2 text-white placeholder-gray-500 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full rounded-lg border border-white/10 bg-black/20 px-4 py-2 text-white placeholder-gray-500 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                                    placeholder="Your Email"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">Message</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="w-full rounded-lg border border-white/10 bg-black/20 px-4 py-2 text-white placeholder-gray-500 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                                    placeholder="Your Message..."
                                />
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onHoverStart={() => setIsHovered(true)}
                                onHoverEnd={() => setIsHovered(false)}
                                className="w-full rounded-lg bg-primary py-3 font-medium text-white transition-colors hover:bg-primary/80 flex items-center justify-center gap-2"
                            >
                                Send Message
                                <Send size={18} className={`transition-transform duration-300 ${isHovered ? 'translate-x-1 -translate-y-1' : ''}`} />
                            </motion.button>
                        </form>
                    </FloatingCard>
                </div>
            </div>
        </section>
    );
};
