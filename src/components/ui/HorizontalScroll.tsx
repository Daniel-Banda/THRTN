"use client";

import { useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CARD_WIDTH = 380;
const GAP = 16;
const STEP = CARD_WIDTH + GAP;

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
    const isPaused = useRef(false);
    const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
    const rafRef = useRef<number | null>(null);
    const lastTimeRef = useRef<number>(0);
    // Seamless loop: duplicate the strip
    const doubled = [...photos, ...photos];
    const halfWidth = photos.length * STEP;

    // Auto-scroll via requestAnimationFrame for smooth 60fps movement
    const tick = useCallback((time: number) => {
        if (!isPaused.current && containerRef.current) {
            const elapsed = time - lastTimeRef.current;
            // ~40px per second
            containerRef.current.scrollLeft += (elapsed / 1000) * 40;
            // Seamless loop reset
            if (containerRef.current.scrollLeft >= halfWidth) {
                containerRef.current.scrollLeft -= halfWidth;
            }
        }
        lastTimeRef.current = time;
        rafRef.current = requestAnimationFrame(tick);
    }, [halfWidth]);

    useEffect(() => {
        rafRef.current = requestAnimationFrame((t) => {
            lastTimeRef.current = t;
            rafRef.current = requestAnimationFrame(tick);
        });
        return () => {
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
            if (resumeTimer.current) clearTimeout(resumeTimer.current);
        };
    }, [tick]);

    const pauseTemporarily = () => {
        isPaused.current = true;
        if (resumeTimer.current) clearTimeout(resumeTimer.current);
        resumeTimer.current = setTimeout(() => {
            isPaused.current = false;
        }, 2500);
    };

    const handlePrev = () => {
        pauseTemporarily();
        containerRef.current?.scrollBy({ left: -STEP, behavior: "smooth" });
    };

    const handleNext = () => {
        pauseTemporarily();
        containerRef.current?.scrollBy({ left: STEP, behavior: "smooth" });
    };

    return (
        <section className="py-16 bg-background">
            {label && (
                <div className="px-8 mb-8">
                    <span className="text-xs font-mono text-primary uppercase tracking-widest">{label}</span>
                </div>
            )}

            <div
                className="relative w-full group"
                onMouseEnter={() => { isPaused.current = true; }}
                onMouseLeave={() => {
                    if (resumeTimer.current) clearTimeout(resumeTimer.current);
                    isPaused.current = false;
                }}
            >
                {/* Fade edges */}
                <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

                {/* Arrow — Prev */}
                <button
                    onClick={handlePrev}
                    aria-label="Anterior"
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full flex items-center justify-center bg-black/40 border border-white/10 text-white/70 hover:bg-primary hover:border-primary hover:text-white transition-all duration-300 opacity-0 group-hover:opacity-100"
                >
                    <ChevronLeft size={20} />
                </button>

                {/* Arrow — Next */}
                <button
                    onClick={handleNext}
                    aria-label="Siguiente"
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full flex items-center justify-center bg-black/40 border border-white/10 text-white/70 hover:bg-primary hover:border-primary hover:text-white transition-all duration-300 opacity-0 group-hover:opacity-100"
                >
                    <ChevronRight size={20} />
                </button>

                {/* Scrollable strip */}
                <div
                    ref={containerRef}
                    className="flex gap-4 overflow-x-auto"
                    style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                >
                    {doubled.map((photo, idx) => (
                        <div
                            key={idx}
                            className="relative shrink-0 overflow-hidden rounded-sm"
                            style={{ width: `${CARD_WIDTH}px`, height: "520px" }}
                        >
                            <Image
                                src={photo.src}
                                alt={photo.alt}
                                fill
                                className="object-cover transition-transform duration-700 hover:scale-105"
                                sizes={`${CARD_WIDTH}px`}
                                loading={idx < 4 ? "eager" : "lazy"}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
