"use client";

import { useState } from "react";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Camera, Video, Megaphone, Home, BarChart2, Target, Layers, Map, Box } from "lucide-react";
import { PopupModal } from "react-calendly";
import React from "react";

const metaPhases = [
    { num: "01", title: "Auditoría & Estrategia", desc: "Análisis de tu marca, competencia y público objetivo. Definimos el objetivo de campaña: tráfico, leads o ventas." },
    { num: "02", title: "Conceptualización", desc: "Definición del mensaje central, guionaje de creativos y estructura narrativa de cada anuncio." },
    { num: "03", title: "Producción AV", desc: "Grabación y edición de videos o fotografías para los anuncios si el cliente no tiene material propio. (Opcional)" },
    { num: "04", title: "Implementación", desc: "Configuración de campañas en Meta Ads Manager: segmentación, presupuestos, formatos y Pixel de conversiones." },
    { num: "05", title: "Optimización", desc: "Monitoreo activo, A/B testing de creativos y audiencias, ajustes semanales para mejorar CPL y ROAS." },
];

export default function StudioPage() {
    const [isOpen, setIsOpen] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    React.useEffect(() => {
        setIsMounted(true);
    }, []);

    return (
        <main className="min-h-screen bg-black text-foreground">
            <Navbar />

            {/* Hero */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-black/30 z-10" />
                    <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center grayscale" />
                </div>

                <div className="relative z-20 w-full px-6 flex flex-col items-center">
                    <h1 className="text-[12vw] leading-none font-display font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-black/50 tracking-tighter mix-blend-difference mb-8">
                        STUDIO
                    </h1>
                    <div className="flex gap-4 items-center">
                        <div className="h-[1px] w-12 bg-white" />
                        <p className="text-white font-mono text-sm tracking-widest uppercase">Foto · Video · 360 · Meta Ads</p>
                        <div className="h-[1px] w-12 bg-white" />
                    </div>
                </div>
            </section>

            {/* Foto & Video */}
            <Section className="bg-background py-16 border-t border-white/5">
                <div className="mb-16">
                    <div className="inline-block border border-white/10 bg-white/5 backdrop-blur-sm px-4 py-1 rounded-full mb-6">
                        <span className="text-xs font-mono text-primary uppercase tracking-widest">Foto & Video</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Foto & Video — Contenido que vende</h2>
                    <p className="text-foreground/60 max-w-2xl font-light">
                        Fotografía comercial con retoque profesional y video desde Reels cortos hasta brand stories. Todo con enfoque en resultado comercial.
                    </p>
                </div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 h-full md:h-[600px] mb-16">
                    <div className="h-[300px] md:h-full bg-[url('https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=2550&auto=format&fit=crop')] bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-700 cursor-none relative group">
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                        <span className="absolute bottom-8 left-8 text-white font-display font-bold text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">EDITORIAL</span>
                    </div>
                    <div className="h-[300px] md:h-full bg-[url('https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=2000&auto=format&fit=crop')] bg-center bg-cover grayscale hover:grayscale-0 transition-all duration-700 cursor-none relative group">
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                        <span className="absolute bottom-8 left-8 text-white font-display font-bold text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">MODA</span>
                    </div>
                    <div className="h-[300px] md:h-full bg-[url('https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?q=80&w=2670&auto=format&fit=crop')] bg-center bg-cover grayscale hover:grayscale-0 transition-all duration-700 cursor-none relative group">
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                        <span className="absolute bottom-8 left-8 text-white font-display font-bold text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">RETRATO</span>
                    </div>
                    <div className="h-[300px] md:h-full bg-[url('https://images.unsplash.com/photo-1493863641943-9b68992a8d07?q=80&w=2658&auto=format&fit=crop')] bg-center bg-cover grayscale hover:grayscale-0 transition-all duration-700 cursor-none relative group">
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                        <span className="absolute bottom-8 left-8 text-white font-display font-bold text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">AUTOMOTRIZ</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="border border-white/5 bg-white/[0.02] p-8 hover:bg-white/[0.04] transition-colors rounded-sm group cursor-default">
                        <Camera className="w-8 h-8 text-white/20 group-hover:text-primary transition-colors mb-6" />
                        <h3 className="text-xl font-display text-white mb-2">Fotografía</h3>
                        <p className="text-sm text-foreground/50">Fotografía de producto, corporativa y comercial. Minimalista, limpia y con retoque profesional incluido en cada toma.</p>
                    </div>
                    <div className="border border-white/5 bg-white/[0.02] p-8 hover:bg-white/[0.04] transition-colors rounded-sm group cursor-default">
                        <Video className="w-8 h-8 text-white/20 group-hover:text-primary transition-colors mb-6" />
                        <h3 className="text-xl font-display text-white mb-2">Video</h3>
                        <p className="text-sm text-foreground/50">Reels para redes sociales hasta brand stories de marca. Dirección, grabación y edición completa incluida.</p>
                    </div>
                    <div className="border border-white/5 bg-white/[0.02] p-8 hover:bg-white/[0.04] transition-colors rounded-sm group cursor-default">
                        <Layers className="w-8 h-8 text-white/20 group-hover:text-primary transition-colors mb-6" />
                        <h3 className="text-xl font-display text-white mb-2">Producción Integral</h3>
                        <p className="text-sm text-foreground/50">Dirección creativa, locación, modelo y edición completa en un solo paquete.</p>
                    </div>
                </div>
            </Section>

            {/* Meta Ads */}
            <Section className="bg-surface/30 py-32 border-y border-white/5">
                <div className="mb-16">
                    <div className="inline-block border border-white/10 bg-white/5 backdrop-blur-sm px-4 py-1 rounded-full mb-6">
                        <span className="text-xs font-mono text-primary uppercase tracking-widest">Campañas de Publicidad</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Meta Ads</h2>
                    <p className="text-foreground/60 max-w-2xl font-light">
                        Campañas en Facebook e Instagram diseñadas para generar leads, tráfico y ventas reales — no solo impresiones.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                    {metaPhases.map((phase) => (
                        <div key={phase.num} className="border border-white/5 bg-white/[0.02] p-6 hover:bg-white/[0.04] hover:border-primary/30 transition-all duration-300 rounded-sm group">
                            <div className="font-mono text-xs text-primary mb-3">{phase.num}</div>
                            <h3 className="text-lg font-display text-white mb-3">{phase.title}</h3>
                            <p className="text-xs text-foreground/50 leading-relaxed">{phase.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="flex items-start gap-4 p-6 border border-white/5 rounded-sm">
                        <Target className="w-6 h-6 text-primary shrink-0 mt-1" />
                        <div>
                            <h4 className="text-white font-display mb-1">Segmentación precisa</h4>
                            <p className="text-sm text-foreground/50">Lookalike audiences, retargeting y audiencias personalizadas por comportamiento.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4 p-6 border border-white/5 rounded-sm">
                        <BarChart2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                        <div>
                            <h4 className="text-white font-display mb-1">Métricas en tiempo real</h4>
                            <p className="text-sm text-foreground/50">Dashboard de resultados con CPL, CPC, ROAS y conversiones por campaña.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4 p-6 border border-white/5 rounded-sm">
                        <Megaphone className="w-6 h-6 text-primary shrink-0 mt-1" />
                        <div>
                            <h4 className="text-white font-display mb-1">Creativos propios</h4>
                            <p className="text-sm text-foreground/50">Producimos los assets visuales internamente — sin depender de stock ni proveedores externos.</p>
                        </div>
                    </div>
                </div>

                <div className="mt-8 border border-white/5 bg-white/[0.02] p-8 rounded-sm">
                    <h4 className="text-xs uppercase tracking-widest text-white/40 mb-4 font-mono">Lo que NO incluye este servicio</h4>
                    <ul className="space-y-2 text-sm text-foreground/50">
                        <li>× Gestión de redes sociales (respuesta a comentarios o DMs)</li>
                        <li>× Publicaciones orgánicas o calendarios de contenido</li>
                        <li>× Diseño de identidad visual o branding desde cero</li>
                    </ul>
                </div>
            </Section>

            {/* Real Estate Digital */}
            <Section className="bg-background py-32 border-b border-white/5">
                <div className="mb-16">
                    <div className="inline-block border border-white/10 bg-white/5 backdrop-blur-sm px-4 py-1 rounded-full mb-6">
                        <span className="text-xs font-mono text-primary uppercase tracking-widest">Arquitectura Digital Inmobiliaria</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Real Estate · Recorridos 360 · Lotificación · Renders 360</h2>
                    <p className="text-foreground/60 max-w-2xl font-light">
                        Herramientas digitales para vender inmuebles en preventa: tours virtuales con interfaz personalizada, planos interactivos y renders 360 que fusionan fotografía real con modelos 3D.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    <div className="p-8 border border-primary/20 bg-primary/5 hover:border-primary/50 transition-all duration-300 rounded-sm group">
                        <Home className="w-10 h-10 text-primary mb-6 group-hover:scale-110 transition-transform" />
                        <h3 className="text-2xl font-display text-white mb-4">Tours 360°</h3>
                        <p className="text-foreground/60 text-sm leading-relaxed mb-4">
                            Recorridos virtuales inmersivos que permiten al comprador explorar el inmueble desde cualquier dispositivo, sin necesidad de visita presencial.
                        </p>
                        <ul className="space-y-2 text-sm text-foreground/40">
                            <li>— Interfaz personalizada con tu branding</li>
                            <li>— Planos de planta y hotspots navegables</li>
                            <li>— Embebible en sitio web, WhatsApp o campañas</li>
                        </ul>
                    </div>

                    <div className="p-8 border border-primary/20 bg-primary/5 hover:border-primary/50 transition-all duration-300 rounded-sm group">
                        <Map className="w-10 h-10 text-primary mb-6 group-hover:scale-110 transition-transform" />
                        <h3 className="text-2xl font-display text-white mb-4">Lotificación Interactiva</h3>
                        <p className="text-foreground/60 text-sm leading-relaxed mb-4">
                            Mapa interactivo del fraccionamiento con disponibilidad en tiempo real por lote: disponible, apartado o vendido. El cliente selecciona, consulta precio y contacta al instante.
                        </p>
                        <ul className="space-y-2 text-sm text-foreground/40">
                            <li>— Estado por lote en tiempo real</li>
                            <li>— Navegación por etapas del desarrollo</li>
                            <li>— Integración con WhatsApp o CRM</li>
                        </ul>
                    </div>

                    <div className="p-8 border border-primary/20 bg-primary/5 hover:border-primary/50 transition-all duration-300 rounded-sm group">
                        <Box className="w-10 h-10 text-primary mb-6 group-hover:scale-110 transition-transform" />
                        <h3 className="text-2xl font-display text-white mb-4">Renders 360 — Preventa</h3>
                        <p className="text-foreground/60 text-sm leading-relaxed mb-4">
                            Fusionamos fotografía aérea real con modelos 3D de las unidades en construcción. El comprador recorre el inmueble terminado antes de que exista físicamente.
                        </p>
                        <ul className="space-y-2 text-sm text-foreground/40">
                            <li>— Fotografía de drone + renderizado 3D integrado</li>
                            <li>— Recorrido virtual de unidades en preventa</li>
                            <li>— Compatible con campañas y sitio web</li>
                        </ul>
                    </div>
                </div>

                {/* Paquete Real Estate Destacado */}
                <div className="relative border border-primary/20 bg-primary/5 p-8 md:p-12 rounded-sm overflow-hidden">
                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="space-y-4 flex-1">
                            <div className="inline-block bg-primary/20 text-primary px-3 py-1 text-[10px] font-mono tracking-widest uppercase rounded-sm border border-primary/20">
                                Paquete Cobertura Inmobiliaria
                            </div>
                            <h3 className="text-3xl lg:text-4xl font-display text-white font-medium">Listo para vender.</h3>
                            <p className="text-foreground/70 font-light text-lg">
                                Contenido visual de élite para impulsar la venta de tu propiedad.
                            </p>
                            <ul className="space-y-3 mt-6">
                                <li className="flex items-center text-sm md:text-base text-foreground/80"><Camera className="w-5 h-5 text-primary mr-4" /> 15 fotografías profesionales con retoque HDR</li>
                                <li className="flex items-center text-sm md:text-base text-foreground/80"><Video className="w-5 h-5 text-primary mr-4" /> 1 video formato Reel vertical altamente dinámico</li>
                                <li className="text-xs text-foreground/40 mt-4 italic">* Entrega estimada en 24/48 horas. Servicio único.</li>
                            </ul>
                        </div>
                        <div className="text-center bg-background border border-white/5 p-8 md:p-10 rounded-sm backdrop-blur-md min-w-[240px]">
                            <span className="block text-4xl md:text-5xl font-display text-white tracking-tighter">$1,200</span>
                            <span className="block text-xs uppercase tracking-widest text-foreground/50 mb-8 mt-2">MXN</span>
                            <Button glow onClick={() => setIsOpen(true)} className="w-full">
                                Solicitar
                            </Button>
                        </div>
                    </div>
                </div>
            </Section>

            {/* CTA */}
            <section className="py-40 text-center bg-surface">
                <h2 className="text-sm font-mono tracking-[0.3em] text-primary mb-8 glow">AGENDA TU SESIÓN</h2>
                <p className="text-foreground/50 max-w-md mx-auto mb-10 font-light">
                    Cuéntanos tu proyecto y te preparamos una propuesta a la medida de tu marca.
                </p>
                <Button size="lg" glow onClick={() => setIsOpen(true)} className="px-20 text-lg">AGENDAR SESIÓN</Button>
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
