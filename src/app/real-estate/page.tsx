"use client";

import { useState, useEffect } from "react";
import { PopupModal } from "react-calendly";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { VideoHero } from "@/components/ui/VideoHero";
import { MasonryGallery, GalleryPhoto } from "@/components/ui/MasonryGallery";
import { motion } from "framer-motion";
import Image from "next/image";
import { Camera, Video, Navigation, Box, Check } from "lucide-react";

const UNSPLASH = (id: string, w = 1200) =>
    `https://images.unsplash.com/${id}?w=${w}&q=80&auto=format&fit=crop`;

const serviceBlocks = [
    {
        icon: Camera,
        title: "Fotografía Profesional HDR",
        desc: "Cada espacio merece ser presentado con la luz perfecta. Imágenes con retoque editorial entregadas en 48 horas.",
        bullets: ["HDR y fusión de exposición", "Retoque profesional incluido", "Formatos optimizados para portales"],
        image: UNSPLASH("photo-1600585154340-be6161a56a0c"),
        alt: "Cocina moderna fotografía inmobiliaria",
    },
    {
        icon: Video,
        title: "Video Cinemático 4K",
        desc: "Narramos la historia de cada propiedad. Producción completa: dirección, grabación y edición incluidas.",
        bullets: ["Video 4K con estabilización", "Edición y color grading", "Formato para YouTube, Reels e Instagram"],
        image: UNSPLASH("photo-1613490493576-7fde63acd811"),
        alt: "Sala de lujo video producción",
    },
    {
        icon: Navigation,
        title: "Fotografía y Video Aéreo",
        desc: "Perspectivas únicas desde el aire. Drone certificado para capturas sobre fraccionamientos, casas y desarrollos.",
        bullets: ["Drone certificado SCT", "Foto y video aéreo en 4K", "Recorridos aéreos de fraccionamientos"],
        image: UNSPLASH("photo-1570129477492-45c003dc0452"),
        alt: "Vista aérea de propiedad residencial",
    },
    {
        icon: Box,
        title: "Recorridos Virtuales 360°",
        desc: "Tu propiedad disponible para visitar en cualquier dispositivo, las 24 horas, sin cita presencial.",
        bullets: ["Compatible con móvil, tablet y desktop", "Hotspots y planos embebibles", "Integración en portales y WhatsApp"],
        image: null,
        alt: "Recorrido virtual 360",
        isVirtualTour: true,
    },
];

const galleryPhotos: GalleryPhoto[] = [
    { id: "re1", src: UNSPLASH("photo-1600585154340-be6161a56a0c", 800), alt: "Cocina moderna", category: "Inmobiliaria" },
    { id: "re2", src: UNSPLASH("photo-1600596542815-ffad4c1539a9", 800), alt: "Recámara principal", category: "Inmobiliaria" },
    { id: "re3", src: UNSPLASH("photo-1613490493576-7fde63acd811", 800), alt: "Sala contemporánea", category: "Inmobiliaria" },
    { id: "re4", src: UNSPLASH("photo-1512917774080-9991f1c4c750", 800), alt: "Baño minimalista", category: "Inmobiliaria" },
    { id: "re5", src: UNSPLASH("photo-1558618666-fcd25c85cd64", 800), alt: "Exterior alberca", category: "Inmobiliaria" },
    { id: "re6", src: UNSPLASH("photo-1570129477492-45c003dc0452", 800), alt: "Vista aérea", category: "Inmobiliaria" },
    { id: "re7", src: UNSPLASH("photo-1600607687939-ce8a6c25118c", 800), alt: "Fachada moderna", category: "Inmobiliaria" },
    { id: "re8", src: UNSPLASH("photo-1523217582562-09d8def3b4f8", 800), alt: "Recámara con luz", category: "Inmobiliaria" },
    { id: "re9", src: UNSPLASH("photo-1449844038425-9dd4b4f5e870", 800), alt: "Escalera interior", category: "Inmobiliaria" },
    { id: "re10", src: UNSPLASH("photo-1545324418-cc1a3fa10c00", 800), alt: "Recámara atardecer", category: "Inmobiliaria" },
    { id: "re11", src: UNSPLASH("photo-1484154133195-16ba38ab7a74", 800), alt: "Terraza exterior", category: "Inmobiliaria" },
    { id: "re12", src: UNSPLASH("photo-1560448204-e02f11c3d0e2", 800), alt: "Comedor moderno", category: "Inmobiliaria" },
];

const pricingTiers = [
    {
        name: "Esencial",
        price: "$1,200 MXN",
        desc: "Para propiedades residenciales y listings en portales.",
        features: ["15 fotografías HDR profesionales", "1 Reel vertical dinámico", "Entrega en 48 horas", "Retoque editorial incluido"],
        highlight: false,
    },
    {
        name: "Profesional",
        price: "$3,500 MXN",
        desc: "Para desarrollos y propiedades de mayor valor.",
        features: ["30 fotografías HDR profesionales", "Video 60 segundos 4K", "Recorrido virtual 360°", "Entrega en 72 horas"],
        highlight: true,
    },
    {
        name: "Premium",
        price: "Cotizar",
        desc: "Para proyectos exclusivos con necesidades especiales.",
        features: ["Todo lo del plan Profesional", "Fotografía y video aéreo (drone)", "Entrega en 24 horas", "Revisión y ajustes incluidos"],
        highlight: false,
    },
];

export default function RealEstatePage() {
    const [isOpen, setIsOpen] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => { setIsMounted(true); }, []);

    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navbar />

            {/* Hero */}
            <VideoHero
                videoSrc="/videos/real-estate.mp4"
                posterSrc="/images/re-poster.jpg"
                fallbackImage={UNSPLASH("photo-1600607687939-ce8a6c25118c", 1920)}
                badge="DIVISIÓN INMOBILIARIA"
                headline="REAL ESTATE"
                subheadline="Contenido visual que acelera la venta de propiedades."
                ctaPrimary={{ label: "Ver Portafolio", href: "/portafolio" }}
                ctaSecondary={{ label: "Solicitar sesión", onClick: () => setIsOpen(true) }}
            />

            {/* Service Blocks */}
            <div className="py-8">
                {serviceBlocks.map(({ icon: Icon, title, desc, bullets, image, alt, isVirtualTour }, idx) => {
                    const isEven = idx % 2 === 0;
                    return (
                        <section key={title} className={`py-24 ${idx % 2 === 1 ? "bg-surface" : "bg-background"}`}>
                            <div className="max-w-7xl mx-auto px-6">
                                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${isEven ? "" : "lg:flex-row-reverse"}`}>
                                    {/* Text */}
                                    <motion.div
                                        initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.7, ease: "easeOut" }}
                                        className={isEven ? "order-1" : "order-1 lg:order-2"}
                                    >
                                        <div className="flex items-center gap-3 mb-6">
                                            <Icon className="w-6 h-6 text-primary" />
                                            <span className="text-xs font-mono text-primary uppercase tracking-widest">Servicio</span>
                                        </div>
                                        <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight tracking-tighter">
                                            {title}
                                        </h2>
                                        <p className="text-xl text-foreground/60 font-light leading-relaxed mb-8">{desc}</p>
                                        <ul className="space-y-4">
                                            {bullets.map((b) => (
                                                <li key={b} className="flex items-center gap-3 text-foreground/80">
                                                    <Check className="w-4 h-4 text-primary shrink-0" />
                                                    {b}
                                                </li>
                                            ))}
                                        </ul>
                                    </motion.div>

                                    {/* Image / Tour */}
                                    <motion.div
                                        initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.7, ease: "easeOut" }}
                                        className={`${isEven ? "order-2" : "order-2 lg:order-1"} overflow-hidden rounded-sm`}
                                    >
                                        {isVirtualTour ? (
                                            <div className="aspect-video bg-black border border-white/10 shadow-2xl shadow-primary/10">
                                                <iframe
                                                    src="https://storage.net-fs.com/hosting/2727323/505/"
                                                    className="w-full h-full border-0"
                                                    allowFullScreen
                                                    loading="lazy"
                                                />
                                            </div>
                                        ) : (
                                            <div className="relative aspect-[4/3]">
                                                <Image
                                                    src={image!}
                                                    alt={alt}
                                                    fill
                                                    className="object-cover"
                                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                                />
                                            </div>
                                        )}
                                    </motion.div>
                                </div>
                            </div>
                        </section>
                    );
                })}
            </div>

            {/* Gallery */}
            <Section className="py-24 bg-background">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12 text-center"
                >
                    <span className="text-xs font-mono text-primary uppercase tracking-widest">Portafolio Inmobiliario</span>
                    <h2 className="text-4xl font-display font-bold mt-3 tracking-tighter">Nuestro Trabajo</h2>
                </motion.div>
                <MasonryGallery photos={galleryPhotos} />
            </Section>

            {/* Pricing */}
            <Section className="py-24 bg-surface">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12 text-center"
                >
                    <span className="text-xs font-mono text-primary uppercase tracking-widest">Inversión</span>
                    <h2 className="text-4xl font-display font-bold mt-3 tracking-tighter">Paquetes</h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {pricingTiers.map(({ name, price, desc, features, highlight }, idx) => (
                        <motion.div
                            key={name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className={`p-8 rounded-sm border flex flex-col ${highlight
                                ? "border-primary/60 bg-background shadow-[0_0_40px_-10px_rgba(212,176,106,0.2)]"
                                : "border-white/10 bg-background/50"
                                }`}
                        >
                            {highlight && (
                                <span className="text-xs font-mono text-primary uppercase tracking-widest mb-4 block">Más popular</span>
                            )}
                            <h3 className="text-2xl font-display font-bold mb-1">{name}</h3>
                            <p className="text-foreground/50 text-sm mb-6">{desc}</p>
                            <div className="text-4xl font-display font-bold text-primary mb-8">{price}</div>
                            <ul className="space-y-3 mb-8 flex-1">
                                {features.map((f) => (
                                    <li key={f} className="flex items-center gap-3 text-foreground/70 text-sm">
                                        <Check className="w-4 h-4 text-primary shrink-0" />
                                        {f}
                                    </li>
                                ))}
                            </ul>
                            <Button
                                variant={highlight ? "primary" : "secondary"}
                                glow={highlight}
                                className="w-full"
                                onClick={() => setIsOpen(true)}
                            >
                                {price === "Cotizar" ? "Solicitar cotización" : "Contratar"}
                            </Button>
                        </motion.div>
                    ))}
                </div>
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
                        ¿Listo para vender más rápido?
                    </h2>
                    <p className="text-surface/60 font-light mb-10 max-w-lg mx-auto">
                        Agenda una sesión y cotizamos tu proyecto sin costo.
                    </p>
                    <Button size="lg" glow onClick={() => setIsOpen(true)}>Solicitar sesión</Button>
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
