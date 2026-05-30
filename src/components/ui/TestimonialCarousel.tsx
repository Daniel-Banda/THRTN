"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Testimonial {
    quote: string;
    author: string;
    company: string;
}

interface TestimonialCarouselProps {
    testimonials?: Testimonial[];
}

const defaultTestimonials: Testimonial[] = [
    {
        quote: "El tour virtual triplicó el tiempo que los clientes pasaban en la página. Vendimos dos propiedades a compradores que nunca visitaron físicamente el inmueble.",
        author: "Carlos M.",
        company: "Inmobiliaria Elite",
    },
    {
        quote: "La sesión fotográfica superó todas nuestras expectativas. El nivel editorial hace que nuestras propiedades destaquen en cualquier portal inmobiliario.",
        author: "Ana R.",
        company: "Grupo Residencial",
    },
    {
        quote: "El video del hotel fue lo mejor que hicimos ese año. Las reservaciones directas aumentaron notablemente el mes siguiente al lanzarlo.",
        author: "Marco V.",
        company: "Hotel Boutique Colima",
    },
];

export const TestimonialCarousel = ({ testimonials = defaultTestimonials }: TestimonialCarouselProps) => {
    const [current, setCurrent] = useState(0);
    const isPaused = useRef(false);

    useEffect(() => {
        const interval = setInterval(() => {
            if (!isPaused.current) {
                setCurrent((c) => (c + 1) % testimonials.length);
            }
        }, 5000);
        return () => clearInterval(interval);
    }, [testimonials.length]);

    return (
        <div
            className="py-24 bg-background"
            onMouseEnter={() => { isPaused.current = true; }}
            onMouseLeave={() => { isPaused.current = false; }}
        >
            <div className="max-w-3xl mx-auto px-6 text-center">
                <span className="text-xs font-mono text-primary uppercase tracking-widest mb-12 block">Lo que dicen nuestros clientes</span>

                <div className="relative min-h-[200px] flex items-center justify-center">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={current}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.4 }}
                            className="absolute inset-0 flex flex-col items-center justify-center"
                        >
                            <blockquote className="text-xl md:text-2xl text-foreground/80 font-light leading-relaxed italic mb-8">
                                &ldquo;{testimonials[current].quote}&rdquo;
                            </blockquote>
                            <div>
                                <p className="font-display font-bold text-white">{testimonials[current].author}</p>
                                <p className="text-sm text-foreground/50">{testimonials[current].company}</p>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Dots */}
                <div className="flex justify-center gap-2 mt-8">
                    {testimonials.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrent(idx)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === current ? "bg-primary w-6" : "bg-white/20"}`}
                            aria-label={`Testimonio ${idx + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};
