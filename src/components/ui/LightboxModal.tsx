"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface Photo {
    src: string;
    alt: string;
    category?: string;
}

interface LightboxModalProps {
    photos: Photo[];
    currentIndex: number | null;
    onClose: () => void;
    onNext: () => void;
    onPrev: () => void;
}

export const LightboxModal = ({
    photos,
    currentIndex,
    onClose,
    onNext,
    onPrev,
}: LightboxModalProps) => {
    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
            if (e.key === "ArrowRight") onNext();
            if (e.key === "ArrowLeft") onPrev();
        };
        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, [onClose, onNext, onPrev]);

    const isOpen = currentIndex !== null;
    const photo = isOpen ? photos[currentIndex] : null;

    return (
        <AnimatePresence>
            {isOpen && photo && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center p-4"
                    onClick={onClose}
                >
                    {/* Close */}
                    <button
                        className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors z-10"
                        onClick={onClose}
                        aria-label="Cerrar"
                    >
                        <X size={28} />
                    </button>

                    {/* Prev */}
                    <button
                        className="absolute left-4 md:left-8 text-white/60 hover:text-white transition-colors z-10 p-2"
                        onClick={(e) => { e.stopPropagation(); onPrev(); }}
                        aria-label="Anterior"
                    >
                        <ChevronLeft size={36} />
                    </button>

                    {/* Next */}
                    <button
                        className="absolute right-4 md:right-8 text-white/60 hover:text-white transition-colors z-10 p-2"
                        onClick={(e) => { e.stopPropagation(); onNext(); }}
                        aria-label="Siguiente"
                    >
                        <ChevronRight size={36} />
                    </button>

                    {/* Image */}
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, scale: 0.92 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.92 }}
                        transition={{ duration: 0.3 }}
                        className="relative w-full max-w-5xl max-h-[85vh] aspect-[4/3]"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Image
                            src={photo.src}
                            alt={photo.alt}
                            fill
                            className="object-contain"
                            sizes="(max-width: 768px) 100vw, 80vw"
                        />
                    </motion.div>

                    {/* Caption */}
                    {photo.category && (
                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs font-mono text-white/40 uppercase tracking-widest">
                            {photo.category} · {(currentIndex ?? 0) + 1} / {photos.length}
                        </div>
                    )}
                </motion.div>
            )}
        </AnimatePresence>
    );
};
