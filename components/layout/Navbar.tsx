"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Github, Linkedin, Mail, Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="fixed top-0 left-0 right-0 z-50 flex justify-center py-6 px-4"
            >
                {/* Desktop Navbar */}
                <div className="hidden md:flex items-center gap-8 rounded-full border border-white/10 bg-black/30 backdrop-blur-lg px-8 py-3 shadow-lg shadow-primary/10">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm text-gray-300 hover:text-white transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}

                    <div className="h-4 w-[1px] bg-white/10 mx-2" />

                    <div className="flex gap-4">
                        <Link
                            href="https://github.com/deoajay1210"
                            target="_blank"
                            className="text-gray-400 hover:text-white transition-colors"
                        >
                            <Github size={18} />
                        </Link>
                        <Link
                            href="https://www.linkedin.com/in/deo-ajay-39a865210?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                            target="_blank"
                            className="text-gray-400 hover:text-white transition-colors"
                        >
                            <Linkedin size={18} />
                        </Link>
                        <Link
                            href="mailto:deoajay1210@gmail.com"
                            className="text-gray-400 hover:text-white transition-colors"
                        >
                            <Mail size={18} />
                        </Link>
                    </div>
                </div>

                {/* Mobile Navbar Toggle */}
                <div className="md:hidden flex justify-between w-full max-w-xs items-center rounded-full border border-white/10 bg-black/30 backdrop-blur-lg px-6 py-3 shadow-lg shadow-primary/10">
                    <span className="text-sm font-bold text-white">Deo Ajay J</span>
                    <button
                        onClick={() => setIsOpen(true)}
                        className="text-gray-300 hover:text-white transition-colors"
                    >
                        <Menu size={24} />
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-50 flex flex-col bg-black/95 backdrop-blur-xl md:hidden"
                    >
                        <div className="flex items-center justify-between p-6 border-b border-white/10">
                            <span className="text-lg font-bold text-white">Menu</span>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        <div className="flex flex-col items-center justify-center flex-1 gap-8">
                            {navLinks.map((link, index) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="text-2xl font-medium text-gray-300 hover:text-primary transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}

                            <div className="flex gap-6 mt-8">
                                <Link
                                    href="https://github.com/deoajay1210"
                                    target="_blank"
                                    className="p-3 rounded-full bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                                >
                                    <Github size={24} />
                                </Link>
                                <Link
                                    href="https://linkedin.com"
                                    target="_blank"
                                    className="p-3 rounded-full bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                                >
                                    <Linkedin size={24} />
                                </Link>
                                <Link
                                    href="mailto:deoajay1210@gmail.com"
                                    className="p-3 rounded-full bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                                >
                                    <Mail size={24} />
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
