"use client";

import { useState, useEffect } from "react";
import { PopupModal } from "react-calendly";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { MasonryGallery, GalleryPhoto } from "@/components/ui/MasonryGallery";
import { motion } from "framer-motion";
import Image from "next/image";
import { Camera, Video, Navigation, BookOpen, TrendingUp, Globe } from "lucide-react";

const UNSPLASH = (id: string, w = 1200) =>
    `https://images.unsplash.com/${id}?w=${w}&q=80&auto=format&fit=crop`;

const whyCards = [
    {
        icon: TrendingUp,
        title: "Reservaciones directas",
        desc: "El contenido de calidad reduce la dependencia de OTAs y aumenta reservaciones directas, mejorando tu margen.",
    },
    {
        icon: BookOpen,
        title: "Experiencia antes del viaje",
        desc: "Las fotos y videos son la primera experiencia del huésped con tu hotel. La primera impresión es el todo.",
    },
    {
        icon: Globe,
        title: "Presencia digital de impacto",
        desc: "Contenido pensado para Instagram, TikTok, Google Hotel Ads y OTAs. Cada plataforma, un formato.",
    },
];

const serviceBlocks = [
    {
        icon: Camera,
        title: "Fotografía de Espacios",
        desc: "Habitaciones, amenidades, restaurante y áreas comunes capturadas con luz perfecta. Imágenes que generan deseo.",
        image: UNSPLASH("photo-1631049552057-247f5a8b8ee5"),
        alt: "Suite de hotel fotografía profesional",
    },
    {
        icon: Video,
        title: "Video de Experiencia",
        desc: "Documentamos el check-in, el desayuno, la alberca al atardecer. El viaje comienza antes de llegar.",
        image: UNSPLASH("photo-1566073771259-81fcf8eebd55"),
        alt: "Pool bar de hotel al atardecer",
    },
    {
        icon: Navigation,
        title: "Cobertura Aérea",
        desc: "Drone certificado para mostrar la ubicación, el entorno y la magnitud de tu propiedad desde el aire.",
        image: UNSPLASH("photo-1542314831-068cd1dbfeeb"),
        alt: "Hotel boutique vista aérea exterior",
    },
];

const galleryPhotos: GalleryPhoto[] = [
    { id: "h1", src: UNSPLASH("photo-1571896349842-33c89424de2d", 800), alt: "Piscina infinita con vista", category: "Hoteles" },
    { id: "h2", src: UNSPLASH("photo-1631049552057-247f5a8b8ee5", 800), alt: "Suite de lujo", category: "Hoteles" },
    { id: "h3", src: UNSPLASH("photo-1566073771259-81fcf8eebd55", 800), alt: "Pool bar", category: "Hoteles" },
    { id: "h4", src: UNSPLASH("photo-1542314831-068cd1dbfeeb", 800), alt: "Exterior boutique hotel", category: "Hoteles" },
    { id: "h5", src: UNSPLASH("photo-1564501049559-0582fdb2b128", 800), alt: "Habitación minimalista", category: "Hoteles" },
    { id: "h6", src: UNSPLASH("photo-1584132967334-10e028bd69f7", 800), alt: "Terraza rooftop al atardecer", category: "Hoteles" },
    { id: "h7", src: UNSPLASH("photo-1520250497591-112f2f40a3f4", 800), alt: "Alberca con montañas", category: "Hoteles" },
    { id: "h8", src: UNSPLASH("photo-1551882547-ff40c63fe2e2", 800), alt: "Lobby con plantas", category: "Hoteles" },
];

export default function HotelesPage() {
    const [isOpen, setIsOpen] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => { setIsMounted(true); }, []);

    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navbar />

            {/* Hero estático */}
            <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src={UNSPLASH("photo-1571896349842-33c89424de2d", 1920)}
                        alt="Piscina infinita hotel de lujo"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/55" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                    className="relative z-10 text-center px-6 max-w-4xl mx-auto space-y-6"
                >
                    <div className="inline-block border border-white/10 bg-white/5 backdrop-blur-sm px-4 py-1 rounded-full">
                        <span className="text-xs font-mono text-primary uppercase tracking-widest">Hoteles & Hospitalidad</span>
                    </div>
                    <h1 className="text-6xl md:text-8xl font-display font-bold text-white tracking-tighter leading-tight">
                        HOTELES &<br />EXPERIENCIAS
                    </h1>
                    <p className="text-xl text-white/70 font-light max-w-xl mx-auto">
                        Contenido que convierte browsers en huéspedes.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                        <Button size="lg" glow onClick={() => setIsOpen(true)}>Agendar Sesión</Button>
                        <a href="#galeria">
                            <Button size="lg" variant="secondary">Ver Trabajo</Button>
                        </a>
                    </div>
                </motion.div>
            </section>

            {/* Why Section */}
            <Section className="py-24 bg-surface">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-xs font-mono text-primary uppercase tracking-widest">Por qué importa</span>
                    <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 tracking-tighter">
                        El contenido visual<br />importa más que nunca.
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {whyCards.map(({ icon: Icon, title, desc }, idx) => (
                        <motion.div
                            key={title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.12 }}
                            className="p-8 border border-white/5 rounded-sm hover:border-primary/30 transition-all duration-300 bg-background/40"
                        >
                            <Icon className="w-8 h-8 text-primary mb-6" />
                            <h3 className="text-xl font-display font-bold mb-3">{title}</h3>
                            <p className="text-foreground/60 leading-relaxed text-sm">{desc}</p>
                        </motion.div>
                    ))}
                </div>
            </Section>

            {/* Service Blocks */}
            {serviceBlocks.map(({ icon: Icon, title, desc, image, alt }, idx) => {
                const isEven = idx % 2 === 0;
                return (
                    <section key={title} className={`py-24 ${isEven ? "bg-background" : "bg-surface"}`}>
                        <div className="max-w-7xl mx-auto px-6">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                                <motion.div
                                    initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.7 }}
                                    className={isEven ? "order-1" : "order-1 lg:order-2"}
                                >
                                    <div className="flex items-center gap-3 mb-6">
                                        <Icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <h2 className="text-4xl font-display font-bold mb-6 tracking-tighter">{title}</h2>
                                    <p className="text-xl text-foreground/60 font-light leading-relaxed">{desc}</p>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.7 }}
                                    className={`overflow-hidden rounded-sm ${isEven ? "order-2" : "order-2 lg:order-1"}`}
                                >
                                    <div className="relative aspect-[4/3]">
                                        <Image
                                            src={image}
                                            alt={alt}
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 1024px) 100vw, 50vw"
                                        />
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </section>
                );
            })}

            {/* Gallery */}
            <Section id="galeria" className="py-24 bg-background">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12 text-center"
                >
                    <span className="text-xs font-mono text-primary uppercase tracking-widest">Nuestro Trabajo</span>
                    <h2 className="text-4xl font-display font-bold mt-3 tracking-tighter">Hoteles & Experiencias</h2>
                </motion.div>
                <MasonryGallery photos={galleryPhotos} />
            </Section>

            {/* CTA */}
            <section className="bg-foreground py-32 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/5 blur-[100px] pointer-events-none" />
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative z-10"
                >
                    <h2 className="text-5xl md:text-6xl font-display font-bold mb-6 tracking-tighter text-surface">
                        Hagamos que tu hotel<br />se vea extraordinario.
                    </h2>
                    <p className="text-surface/60 font-light mb-10 max-w-lg mx-auto">
                        Agenda una sesión y cotizamos tu proyecto sin costo.
                    </p>
                    <Button size="lg" glow onClick={() => setIsOpen(true)}>Agendar Sesión</Button>
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
