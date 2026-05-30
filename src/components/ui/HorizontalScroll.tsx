"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

interface ScrollPhoto {
    src: string;
    alt: string;
}

interface HorizontalScrollProps {
    photos: ScrollPhoto[];
    label?: string;
}

export const HorizontalScroll = ({ photos, label }: HorizontalScrollProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-62%"]);

    return (
        <>
            {/* Desktop: scroll-driven horizontal pan */}
            <div
                ref={containerRef}
                className="hidden md:block relative"
                style={{ height: `${photos.length * 45}vh` }}
            >
                <div className="sticky top-0 h-screen overflow-hidden flex items-center">
                    {label && (
                        <div className="absolute top-8 left-8 z-10">
                            <span className="text-xs font-mono text-primary uppercase tracking-widest">{label}</span>
                        </div>
                    )}
                    <motion.div
                        style={{ x }}
                        className="flex gap-4 pl-16 will-change-transform"
                    >
                        {photos.map((photo, idx) => (
                            <div
                                key={idx}
                                className="relative shrink-0 overflow-hidden rounded-sm"
                                style={{ width: "420px", height: "560px" }}
                            >
                                <Image
                                    src={photo.src}
                                    alt={photo.alt}
                                    fill
                                    className="object-cover"
                                    sizes="420px"
                                    priority={idx < 2}
                                />
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Mobile: horizontal snap scroll */}
            <div className="md:hidden overflow-x-auto flex gap-3 px-6 pb-4" style={{ scrollSnapType: "x mandatory" }}>
                {label && (
                    <div className="shrink-0 flex items-center">
                        <span className="text-xs font-mono text-primary uppercase tracking-widest writing-mode-vertical">{label}</span>
                    </div>
                )}
                {photos.map((photo, idx) => (
                    <div
                        key={idx}
                        className="relative shrink-0 overflow-hidden rounded-sm"
                        style={{ width: "280px", height: "380px", scrollSnapAlign: "start" }}
                    >
                        <Image
                            src={photo.src}
                            alt={photo.alt}
                            fill
                            className="object-cover"
                            sizes="280px"
                            loading={idx < 2 ? "eager" : "lazy"}
                        />
                    </div>
                ))}
            </div>
        </>
    );
};
