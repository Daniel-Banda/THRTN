"use client";

import { useState } from "react";
import Image from "next/image";

interface ScrollPhoto {
    src: string;
    alt: string;
}

interface HorizontalScrollProps {
    photos: ScrollPhoto[];
    label?: string;
    speed?: number;
}

export const HorizontalScroll = ({ photos, label, speed = 40 }: HorizontalScrollProps) => {
    const [paused, setPaused] = useState(false);
    const doubled = [...photos, ...photos];

    return (
        <section className="py-16 bg-background overflow-hidden">
            {label && (
                <div className="px-8 mb-8">
                    <span className="text-xs font-mono text-primary uppercase tracking-widest">{label}</span>
                </div>
            )}

            <div
                className="relative w-full"
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
            >
                {/* Fade edges */}
                <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

                <div
                    className="flex gap-4 w-max"
                    style={{
                        animation: `marquee ${speed}s linear infinite`,
                        animationPlayState: paused ? "paused" : "running",
                    }}
                >
                    {doubled.map((photo, idx) => (
                        <div
                            key={idx}
                            className="relative shrink-0 overflow-hidden rounded-sm"
                            style={{ width: "380px", height: "520px" }}
                        >
                            <Image
                                src={photo.src}
                                alt={photo.alt}
                                fill
                                className="object-cover transition-transform duration-700 hover:scale-105"
                                sizes="380px"
                                loading={idx < 4 ? "eager" : "lazy"}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
