"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface FloatingCardProps {
    children: ReactNode;
    className?: string;
    delay?: number;
}

export const FloatingCard = ({ children, className, delay = 0 }: FloatingCardProps) => {
    return (
        <motion.div
            className={cn(
                "rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-md",
                "shadow-lg shadow-black/20 hover:shadow-primary/20 hover:border-primary/50 transition-colors duration-300",
                className
            )}
            initial={{ y: 0 }}
            animate={{
                y: [0, -10, 0],
            }}
            transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: delay,
            }}
            whileHover={{ scale: 1.02, y: -5 }}
        >
            {children}
        </motion.div>
    );
};
