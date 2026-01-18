"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
    title: string;
    description: string;
    href: string;
    image: string;
    index: number;
}

export const ServiceCard = ({
    title,
    description,
    href,
    image,
    index,
}: ServiceCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative h-[500px] w-full overflow-hidden rounded-lg bg-surface border border-white/5"
        >
            <Link href={href} className="block h-full w-full">
                {/* Image Background */}
                <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40"
                    style={{ backgroundImage: `url(${image})` }}
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-70" />

                {/* Content */}
                <div className="absolute inset-0 z-20 flex flex-col justify-end p-8 md:p-10">
                    <div className="transform transition-transform duration-500 group-hover:-translate-y-4">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-3xl md:text-4xl font-display font-bold text-white uppercase tracking-tighter">
                                {title}
                            </h3>
                            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <ArrowUpRight className="text-white" size={20} />
                            </div>
                        </div>

                        <p className="text-foreground/70 text-base max-w-[90%] opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                            {description}
                        </p>

                        <div className="h-[1px] w-0 bg-primary mt-6 transition-all duration-500 group-hover:w-full" />
                    </div>
                </div>
            </Link>
        </motion.div>
    );
};
