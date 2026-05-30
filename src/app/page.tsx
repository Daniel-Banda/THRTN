"use client";

import { useState, useEffect } from "react";
import { PopupModal } from "react-calendly";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { VideoHero } from "@/components/ui/VideoHero";
import { HorizontalScroll } from "@/components/ui/HorizontalScroll";
import { StatsBanner } from "@/components/ui/StatsBanner";
import { TestimonialCarousel } from "@/components/ui/TestimonialCarousel";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Camera, Video, Navigation, Box } from "lucide-react";

const UNSPLASH = (id: string, w = 1600) =>
    `https://images.unsplash.com/${id}?w=${w}&q=80&auto=format&fit=crop`;

const scrollPhotos = [
    { src: UNSPLASH("photo-1600585154340-be6161a56a0c"), alt: "Cocina moderna de lujo" },
    { src: UNSPLASH("photo-1600596542815-ffad4c1539a9"), alt: "Recámara principal" },
    { src: UNSPLASH("photo-1613490493576-7fde63acd811"), alt: "Sala contemporánea" },
    { src: UNSPLASH("photo-1558618666-fcd25c85cd64"), alt: "Exterior con alberca" },
    { src: UNSPLASH("photo-1512917774080-9991f1c4c750"), alt: "Baño minimalista" },
    { src: UNSPLASH("photo-1570129477492-45c003dc0452"), alt: "Vista aérea" },
    { src: UNSPLASH("photo-1600607687939-ce8a6c25118c"), alt: "Fachada moderna" },
    { src: UNSPLASH("photo-1571896349842-33c89424de2d"), alt: "Hotel piscina infinita" },
];

const services = [
    { icon: Camera, label: "Fotografía Profesional", desc: "HDR, retoque editorial, entrega en 48 hrs" },
    { icon: Video, label: "Video Cinemático", desc: "Producción 4K con narrativa de marca" },
    { icon: Navigation, label: "Fotografía & Video Aéreo", desc: "Drone certificado, perspectivas únicas" },
    { icon: Box, label: "Recorridos 360°", desc: "Tours virtuales embebibles, disponibles 24/7" },
];

export default function Home() {
    const [isOpen, setIsOpen] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => { setIsMounted(true); }, []);

    return (
        <main className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-white">
            <Navbar />

            {/* 1 · Video Hero */}
            <VideoHero
                videoSrc="/videos/hero.mp4"
                posterSrc="/images/hero-poster.jpg"
                fallbackImage={UNSPLASH("photo-1600607687939-ce8a6c25118c", 1920)}
                headline="FOTOGRAFÍA & VIDEO PREMIUM."
                subheadline="Para inmobiliarias, hoteles y experiencias."
                ctaPrimary={{ label: "Ver Portafolio", href: "/portafolio" }}
                ctaSecondary={{ label: "Agendar Sesión", onClick: () => setIsOpen(true) }}
            />

            {/* 2 · Servicios */}
            <Section className="bg-background py-28">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-xs font-mono text-primary uppercase tracking-widest">Nuestros Servicios</span>
                    <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 tracking-tighter">
                        Contenido que vende.
                    </h2>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {services.map(({ icon: Icon, label, desc }, idx) => (
                        <motion.div
                            key={label}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="group p-6 border border-white/5 rounded-sm hover:border-primary/30 transition-all duration-300 text-center"
                        >
                            <motion.div
                                whileHover={{ scale: 1.15, rotate: 5 }}
                                transition={{ type: "spring", stiffness: 300 }}
                                className="inline-flex mb-4"
                            >
                                <Icon className="w-8 h-8 text-primary" />
                            </motion.div>
                            <h3 className="font-display font-bold text-lg mb-2 leading-tight">{label}</h3>
                            <p className="text-foreground/50 text-sm leading-relaxed">{desc}</p>
                        </motion.div>
                    ))}
                </div>
            </Section>

            {/* 3 · Horizontal Photo Strip */}
            <HorizontalScroll photos={scrollPhotos} label="PORTAFOLIO" />

            {/* 4 · Hoteles Split Section */}
            <section className="bg-background py-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[70vh]">
                    {/* Sticky image */}
                    <div className="relative h-[50vh] lg:h-auto overflow-hidden">
                        <Image
                            src={UNSPLASH("photo-1571896349842-33c89424de2d", 1200)}
                            alt="Hotel piscina infinita"
                            fill
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/80 hidden lg:block" />
                    </div>

                    {/* Text */}
                    <div className="flex items-center px-8 md:px-16 py-20 bg-surface">
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                        >
                            <span className="text-xs font-mono text-primary uppercase tracking-widest mb-6 block">Hoteles & Hospitalidad</span>
                            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight tracking-tighter">
                                El contenido que llena habitaciones.
                            </h2>
                            <p className="text-foreground/60 font-light leading-relaxed mb-8 text-lg">
                                Fotografiamos espacios, capturamos experiencias y producimos el contenido que convierte una búsqueda en una reservación.
                            </p>
                            <ul className="space-y-4 mb-10">
                                {[
                                    "Fotografía de habitaciones y amenidades",
                                    "Videos de experiencia para redes y OTAs",
                                    "Contenido aéreo del hotel y entorno",
                                ].map((item) => (
                                    <li key={item} className="flex items-center gap-3 text-foreground/80">
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <Link href="/hoteles">
                                <Button variant="secondary">Conocer más</Button>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 5 · Stats */}
            <StatsBanner />

            {/* 6 · Testimonios */}
            <TestimonialCarousel />

            {/* 7 · Para tu negocio (minimal) */}
            <section className="border-t border-b border-white/5 py-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-2xl mx-auto px-6 text-center"
                >
                    <span className="text-xs font-mono text-foreground/30 uppercase tracking-widest mb-4 block">También trabajamos con</span>
                    <h3 className="text-2xl md:text-3xl font-display font-bold mb-4 text-foreground/70">
                        ¿Tu negocio necesita contenido que impacte?
                    </h3>
                    <p className="text-foreground/40 font-light mb-8">
                        También creamos contenido visual para marcas, restaurantes, clínicas y empresas locales.
                    </p>
                    <Link href="/negocios">
                        <Button variant="ghost" size="sm">Ver servicios para empresas</Button>
                    </Link>
                </motion.div>
            </section>

            {/* 8 · CTA Final */}
            <section id="cta" className="bg-foreground py-40 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="relative z-10"
                >
                    <h2 className="text-6xl md:text-8xl font-display font-bold mb-8 tracking-tighter text-surface">
                        CREEMOS ALGO<br />EXTRAORDINARIO.
                    </h2>
                    <p className="text-xl text-surface/60 mb-12 max-w-xl mx-auto font-light leading-relaxed">
                        Agenda una llamada y cotizamos tu proyecto sin costo.
                    </p>
                    <Button size="lg" glow className="px-14 py-5 text-base" onClick={() => setIsOpen(true)}>
                        Agendar Sesión
                    </Button>
                </motion.div>
            </section>

            {isMounted && (
                <PopupModal
                    url="https://calendly.com/thrtn"
                    onModalClose={() => setIsOpen(false)}
                    open={isOpen}
                    rootElement={document.getElementById("root") || document.body}
                />
            )}

            <Footer />
        </main>
    );
}
