"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import { Button } from "./Button";

interface VideoHeroProps {
    videoSrc: string;
    posterSrc?: string;
    badge?: string;
    headline: string;
    subheadline?: string;
    ctaPrimary?: { label: string; href?: string; onClick?: () => void };
    ctaSecondary?: { label: string; href?: string; onClick?: () => void };
    fallbackImage?: string;
}

const container: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
};

const item: Variants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
};

export const VideoHero = ({
    videoSrc,
    posterSrc,
    badge,
    headline,
    subheadline,
    ctaPrimary,
    ctaSecondary,
    fallbackImage,
}: VideoHeroProps) => {
    return (
        <section className="relative h-[100dvh] flex items-center justify-center overflow-hidden">
            {/* Video background */}
            <video
                autoPlay
                muted
                loop
                playsInline
                poster={posterSrc}
                className="absolute inset-0 w-full h-full object-cover"
            >
                <source src={videoSrc} type="video/mp4" />
                {fallbackImage && (
                    <div
                        className="absolute inset-0 w-full h-full bg-cover bg-center"
                        style={{ backgroundImage: `url(${fallbackImage})` }}
                    />
                )}
            </video>

            {/* Overlays */}
            <div className="absolute inset-0 bg-black/55 z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />

            {/* Content */}
            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="relative z-20 text-center px-6 max-w-5xl mx-auto space-y-8"
            >
                {badge && (
                    <motion.div variants={item} className="inline-block border border-white/10 bg-white/5 backdrop-blur-sm px-4 py-1 rounded-full">
                        <span className="text-xs font-mono text-primary uppercase tracking-widest">{badge}</span>
                    </motion.div>
                )}

                <motion.h1
                    variants={item}
                    className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white leading-tight tracking-tighter"
                >
                    {headline}
                </motion.h1>

                {subheadline && (
                    <motion.p
                        variants={item}
                        className="text-lg md:text-xl text-white/70 font-light max-w-2xl mx-auto leading-relaxed"
                    >
                        {subheadline}
                    </motion.p>
                )}

                {(ctaPrimary || ctaSecondary) && (
                    <motion.div variants={item} className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                        {ctaPrimary && (
                            ctaPrimary.href ? (
                                <Link href={ctaPrimary.href}>
                                    <Button size="lg" glow>{ctaPrimary.label}</Button>
                                </Link>
                            ) : (
                                <Button size="lg" glow onClick={ctaPrimary.onClick}>{ctaPrimary.label}</Button>
                            )
                        )}
                        {ctaSecondary && (
                            ctaSecondary.href ? (
                                <Link href={ctaSecondary.href}>
                                    <Button size="lg" variant="secondary">{ctaSecondary.label}</Button>
                                </Link>
                            ) : (
                                <Button size="lg" variant="secondary" onClick={ctaSecondary.onClick}>{ctaSecondary.label}</Button>
                            )
                        )}
                    </motion.div>
                )}
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20 opacity-50"
            >
                <span className="text-[10px] uppercase tracking-widest text-white/60">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
            </motion.div>
        </section>
    );
};
