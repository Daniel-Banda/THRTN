"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import React from "react";

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
    variant?: "primary" | "secondary" | "ghost";
    size?: "sm" | "md" | "lg";
    glow?: boolean;
    children?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", glow = false, children, ...props }, ref) => {
        const variants = {
            primary: "bg-primary text-white border border-primary/50",
            secondary: "bg-surface border border-white/10 text-white hover:border-primary/50 hover:bg-white/5",
            ghost: "text-foreground hover:text-primary bg-transparent",
        };

        const sizes = {
            sm: "px-4 py-2 text-xs uppercase tracking-widest",
            md: "px-6 py-3 text-sm uppercase tracking-widest",
            lg: "px-8 py-4 text-base uppercase tracking-widest",
        };

        return (
            <motion.button
                ref={ref}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={cn(
                    "relative inline-flex items-center justify-center rounded-sm font-semibold transition-all duration-300 overflow-hidden",
                    variants[variant],
                    sizes[size],
                    glow && "shadow-[0_0_20px_-5px_rgba(59,130,246,0.5)] hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.8)]",
                    className
                )}
                {...props}
            >
                {/* Shine effect overlay */}
                <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                {children}
            </motion.button>
        );
    }
);
Button.displayName = "Button";
