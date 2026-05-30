"use client";

import { useState, useEffect } from "react";
import { PopupModal } from "react-calendly";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { Camera, Video, Megaphone } from "lucide-react";

const services = [
    {
        icon: Camera,
        title: "Fotografía Comercial",
        desc: "Fotografía de producto, corporativa y de espacios con retoque profesional incluido.",
    },
    {
        icon: Video,
        title: "Video para Redes Sociales",
        desc: "Reels, stories y videos cortos para Instagram, TikTok y Facebook. Edición completa incluida.",
    },
    {
        icon: Megaphone,
        title: "Contenido para Campañas",
        desc: "Material visual para anuncios digitales en Meta Ads y Google. Creativos optimizados para conversión.",
    },
];

export default function NegociosPage() {
    const [isOpen, setIsOpen] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => { setIsMounted(true); }, []);

    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navbar />

            <div className="max-w-3xl mx-auto px-6 pt-40 pb-32">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="mb-16"
                >
                    <span className="text-xs font-mono text-foreground/30 uppercase tracking-widest mb-4 block">Servicios generales</span>
                    <h1 className="text-5xl md:text-6xl font-display font-bold tracking-tighter mb-6 text-foreground/80">
                        PARA TU NEGOCIO
                    </h1>
                    <p className="text-lg text-foreground/50 font-light leading-relaxed">
                        También creamos contenido visual para marcas, restaurantes, clínicas y negocios locales que quieren diferenciarse con imágenes y video de calidad.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="space-y-6 mb-16"
                >
                    {services.map(({ icon: Icon, title, desc }, idx) => (
                        <div
                            key={title}
                            className="flex items-start gap-5 p-6 border border-white/5 rounded-sm hover:border-white/10 transition-colors"
                        >
                            <Icon className="w-5 h-5 text-primary shrink-0 mt-1" />
                            <div>
                                <h3 className="font-display font-bold mb-1">{title}</h3>
                                <p className="text-foreground/50 text-sm leading-relaxed">{desc}</p>
                            </div>
                        </div>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                >
                    <Button variant="ghost" onClick={() => setIsOpen(true)}>
                        Cuéntanos tu proyecto
                    </Button>
                </motion.div>
            </div>

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
