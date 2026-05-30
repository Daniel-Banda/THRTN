"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { LightboxModal } from "./LightboxModal";

export interface GalleryPhoto {
    id: string;
    src: string;
    alt: string;
    category: string;
}

interface MasonryGalleryProps {
    photos: GalleryPhoto[];
    activeFilter?: string;
}

export const MasonryGallery = ({ photos, activeFilter = "Todos" }: MasonryGalleryProps) => {
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

    const filtered = activeFilter === "Todos"
        ? photos
        : photos.filter((p) => p.category === activeFilter);

    const handleNext = () => {
        if (lightboxIndex === null) return;
        setLightboxIndex((lightboxIndex + 1) % filtered.length);
    };

    const handlePrev = () => {
        if (lightboxIndex === null) return;
        setLightboxIndex((lightboxIndex - 1 + filtered.length) % filtered.length);
    };

    return (
        <>
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeFilter}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ columns: "3 280px", columnGap: "8px" }}
                    className="w-full"
                >
                    {filtered.map((photo, idx) => (
                        <motion.div
                            key={photo.id}
                            layout
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.35, delay: idx * 0.03 }}
                            whileHover={{ scale: 1.02 }}
                            className="relative overflow-hidden cursor-pointer mb-2 break-inside-avoid rounded-sm"
                            style={{ breakInside: "avoid" }}
                            onClick={() => setLightboxIndex(idx)}
                        >
                            <div className="relative w-full" style={{ paddingBottom: idx % 3 === 1 ? "130%" : "75%" }}>
                                <Image
                                    src={photo.src}
                                    alt={photo.alt}
                                    fill
                                    className="object-cover transition-all duration-500 hover:brightness-110"
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    loading={idx < 6 ? "eager" : "lazy"}
                                />
                                <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-all duration-300 flex items-end p-3 opacity-0 hover:opacity-100">
                                    <span className="text-xs font-mono text-white/80 uppercase tracking-widest">{photo.category}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </AnimatePresence>

            <LightboxModal
                photos={filtered}
                currentIndex={lightboxIndex}
                onClose={() => setLightboxIndex(null)}
                onNext={handleNext}
                onPrev={handlePrev}
            />
        </>
    );
};
