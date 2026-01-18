"use client";

import { motion } from "framer-motion";

export const Isotype = ({ className }: { className?: string }) => {
    return (
        <motion.svg
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
        >
            {/* Minimalist 1 */}
            <path
                d="M16 12L16 38"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
            />
            <path
                d="M11 17L16 12"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
            />

            {/* Minimalist 3 */}
            <path
                d="M26 12H38L32 24L38 38H26"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </motion.svg>
    );
};
