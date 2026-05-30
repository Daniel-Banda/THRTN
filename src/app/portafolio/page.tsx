"use client";

import { useState } from "react";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { MasonryGallery, GalleryPhoto } from "@/components/ui/MasonryGallery";
import { motion } from "framer-motion";

const UNSPLASH = (id: string, w = 800) =>
    `https://images.unsplash.com/${id}?w=${w}&q=80&auto=format&fit=crop`;

const allPhotos: GalleryPhoto[] = [
    // Inmobiliaria
    { id: "p1", src: UNSPLASH("photo-1600585154340-be6161a56a0c"), alt: "Cocina de lujo", category: "Inmobiliaria" },
    { id: "p2", src: UNSPLASH("photo-1600596542815-ffad4c1539a9"), alt: "Recámara principal", category: "Inmobiliaria" },
    { id: "p3", src: UNSPLASH("photo-1613490493576-7fde63acd811"), alt: "Sala contemporánea", category: "Inmobiliaria" },
    { id: "p4", src: UNSPLASH("photo-1512917774080-9991f1c4c750"), alt: "Baño minimalista", category: "Inmobiliaria" },
    { id: "p5", src: UNSPLASH("photo-1558618666-fcd25c85cd64"), alt: "Exterior con alberca", category: "Inmobiliaria" },
    { id: "p6", src: UNSPLASH("photo-1570129477492-45c003dc0452"), alt: "Vista aérea", category: "Inmobiliaria" },
    { id: "p7", src: UNSPLASH("photo-1600607687939-ce8a6c25118c"), alt: "Fachada moderna", category: "Inmobiliaria" },
    { id: "p8", src: UNSPLASH("photo-1523217582562-09d8def3b4f8"), alt: "Recámara iluminada", category: "Inmobiliaria" },
    // Hoteles
    { id: "p9", src: UNSPLASH("photo-1571896349842-33c89424de2d"), alt: "Piscina infinita", category: "Hoteles" },
    { id: "p10", src: UNSPLASH("photo-1631049552057-247f5a8b8ee5"), alt: "Suite de lujo", category: "Hoteles" },
    { id: "p11", src: UNSPLASH("photo-1566073771259-81fcf8eebd55"), alt: "Pool bar", category: "Hoteles" },
    { id: "p12", src: UNSPLASH("photo-1542314831-068cd1dbfeeb"), alt: "Boutique hotel exterior", category: "Hoteles" },
    { id: "p13", src: UNSPLASH("photo-1564501049559-0582fdb2b128"), alt: "Habitación minimalista", category: "Hoteles" },
    { id: "p14", src: UNSPLASH("photo-1584132967334-10e028bd69f7"), alt: "Rooftop al atardecer", category: "Hoteles" },
    { id: "p15", src: UNSPLASH("photo-1520250497591-112f2f40a3f4"), alt: "Alberca con montañas", category: "Hoteles" },
    { id: "p16", src: UNSPLASH("photo-1551882547-ff40c63fe2e2"), alt: "Lobby con plantas", category: "Hoteles" },
    // Experiencias
    { id: "p17", src: UNSPLASH("photo-1469474968028-56623f02e42e"), alt: "Naturaleza experiencia", category: "Experiencias" },
    { id: "p18", src: UNSPLASH("photo-1506905925346-21bda4d32df4"), alt: "Montañas amanecer", category: "Experiencias" },
    { id: "p19", src: UNSPLASH("photo-1527631746610-bca00a040d60"), alt: "Spa experiencia", category: "Experiencias" },
    { id: "p20", src: UNSPLASH("photo-1414235077428-338989a2e8c0"), alt: "Gastronomía fine dining", category: "Experiencias" },
    { id: "p21", src: UNSPLASH("photo-1540979388789-6cee28a1cdc9"), alt: "Actividad al aire libre", category: "Experiencias" },
    { id: "p22", src: UNSPLASH("photo-1472396961693-142e6e269027"), alt: "Naturaleza salvaje", category: "Experiencias" },
    { id: "p23", src: UNSPLASH("photo-1515378791036-0648a3ef77b2"), alt: "Brunch lujo", category: "Experiencias" },
    { id: "p24", src: UNSPLASH("photo-1524099163253-32b7f0256868"), alt: "Experiencia boutique", category: "Experiencias" },
];

const filters = ["Todos", "Inmobiliaria", "Hoteles", "Experiencias"];

export default function PortafolioPage() {
    const [activeFilter, setActiveFilter] = useState("Todos");

    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navbar />

            {/* Hero */}
            <section className="pt-40 pb-12 px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <span className="text-xs font-mono text-primary uppercase tracking-widest mb-4 block">THRTN Studio</span>
                    <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tighter mb-4">PORTAFOLIO</h1>
                    <p className="text-foreground/50 font-light max-w-lg mx-auto">
                        Una selección de nuestro trabajo en inmobiliarias, hoteles y experiencias de lujo.
                    </p>
                </motion.div>

                {/* Filters */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-wrap justify-center gap-3 mt-10"
                >
                    {filters.map((filter) => (
                        <button
                            key={filter}
                            onClick={() => setActiveFilter(filter)}
                            className={`px-5 py-2 rounded-full border text-xs uppercase tracking-widest transition-all duration-300 font-mono ${
                                activeFilter === filter
                                    ? "bg-primary border-primary text-white"
                                    : "border-white/10 text-foreground/50 hover:border-primary/40 hover:text-foreground"
                            }`}
                        >
                            {filter}
                        </button>
                    ))}
                </motion.div>
            </section>

            {/* Gallery */}
            <section className="px-4 md:px-8 pb-24">
                <MasonryGallery photos={allPhotos} activeFilter={activeFilter} />
            </section>

            <Footer />
        </main>
    );
}
