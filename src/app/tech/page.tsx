"use client";

import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Cpu, Code, Workflow, ChevronDown } from "lucide-react";
import { VoiceChat } from "@/components/ui/VoiceChat";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function TechPage() {
    const [isStructureOpen, setIsStructureOpen] = useState(false);
    const [isLandingStructureOpen, setIsLandingStructureOpen] = useState(false);
    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navbar />

            {/* Hero */}
            <section className="relative pt-48 pb-24 md:pt-64 md:pb-48 px-6 overflow-hidden border-b border-white/5">
                <div className="absolute inset-0 z-0">
                    {/* Tech grid background */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] z-10" />
                    <div className="absolute top-0 left-0 w-full h-[500px] bg-primary/10 blur-[120px] rounded-full mix-blend-screen pointer-events-none" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-mono mb-6">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                            </span>
                            AGENTES IA DISPONIBLES
                        </div>
                        <h1 className="text-6xl md:text-8xl font-display font-bold mb-8 leading-[1] tracking-tighter text-white">
                            SÍNTESIS <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                                DE CÓDIGO
                            </span>
                        </h1>
                        <p className="text-xl text-foreground/70 max-w-xl leading-relaxed mb-10 font-light">
                            Diseñamos infraestructuras digitales inteligentes. Aplicaciones web de alto rendimiento y agentes autónomos para escalar sus operaciones.
                        </p>
                        <div className="flex gap-6">
                            <Button glow>Iniciar Proyecto</Button>
                            <Button variant="secondary">Ver Documentación</Button>
                        </div>
                    </div>
                    {/* Visual Abstract */}
                    <div className="relative z-10 w-full">
                        <VoiceChat />
                    </div>
                </div>
            </section>

            {/* Web Development Plans */}
            <Section className="bg-background py-32 border-b border-white/5">
                <div className="mb-20 text-center">
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white">PLANES DE DESARROLLO</h2>
                    <p className="text-foreground/60 max-w-2xl mx-auto font-light">
                        Arquitectura digital escalable. Desde landing pages de alta conversión hasta ecosistemas web completos.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Option 1 - Landing Page */}
                    <div className="p-8 rounded-2xl bg-surface/5 border border-primary/20 hover:border-primary/50 transition-all duration-300 relative group flex flex-col">
                        <div className="absolute top-0 right-0 p-4 opacity-50 text-xs font-mono text-primary">OPCIÓN 01</div>
                        <h3 className="text-2xl font-display font-bold text-white mb-2">Landing Page</h3>
                        <p className="text-sm text-foreground/60 mb-8 h-12">Página informativa de alto impacto enfocada en conversión.</p>

                        <ul className="space-y-4 mb-8 text-sm text-foreground/80">
                            <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-primary rounded-full" />1 página única</li>
                            <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-primary rounded-full" />Hasta 5 secciones</li>
                            <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-primary rounded-full" />Hosting gratuito (netlify.app)</li>
                            <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-primary rounded-full" />Sin mantenimiento</li>
                        </ul>

                        <div className="p-4 bg-black/40 rounded-lg border border-white/5 mb-8">
                            <button
                                onClick={() => setIsLandingStructureOpen(!isLandingStructureOpen)}
                                className="w-full flex items-center justify-between text-xs font-bold text-white/50 uppercase tracking-wider hover:text-white transition-colors"
                            >
                                <span>Estructura Ejemplo</span>
                                <ChevronDown
                                    className={`w-4 h-4 transition-transform duration-300 ${isLandingStructureOpen ? 'rotate-180' : ''}`}
                                />
                            </button>

                            <AnimatePresence>
                                {isLandingStructureOpen && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="space-y-2 font-mono text-xs text-primary/80 pt-4">
                                            <div>/ Hero (Intro)</div>
                                            <div>/ Servicios</div>
                                            <div>/ Beneficios</div>
                                            <div>/ Testimonios</div>
                                            <div>/ CTA Final</div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <div className="space-y-3 mt-auto">
                            <Button variant="secondary" className="w-full">Iniciar Landing</Button>
                            <a
                                href="https://morphid.netlify.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full text-center py-3 text-xs uppercase tracking-widest text-primary hover:text-white transition-colors border border-transparent hover:border-white/10 rounded-sm"
                            >
                                Ver Ejemplo
                            </a>
                        </div>
                    </div>

                    {/* Option 2 - Web Completa */}
                    <div className="p-8 rounded-2xl bg-surface/10 border border-primary/40 hover:border-primary transition-all duration-300 relative group shadow-2xl shadow-primary/5 flex flex-col">
                        <div className="absolute top-0 right-0 p-4 opacity-100 text-xs font-mono text-primary flex items-center gap-2">
                            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                            RECOMENDADO
                        </div>
                        <h3 className="text-2xl font-display font-bold text-white mb-2">Web Completa</h3>
                        <p className="text-sm text-foreground/60 mb-8 h-12">Sitio institucional para marcas con presencia sólida.</p>

                        <ul className="space-y-4 mb-8 text-sm text-foreground/80">
                            <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-primary rounded-full" />Hasta 5 páginas</li>
                            <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-primary rounded-full" />Contacto & Agenda</li>
                            <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-primary rounded-full" />Hosting gratuito (netlify.app)</li>
                            <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-primary rounded-full" />Correos externos</li>
                        </ul>

                        <div className="p-4 bg-black/40 rounded-lg border border-white/5 mb-8">
                            <button
                                onClick={() => setIsStructureOpen(!isStructureOpen)}
                                className="w-full flex items-center justify-between text-xs font-bold text-white/50 uppercase tracking-wider hover:text-white transition-colors"
                            >
                                <span>Estructura Ejemplo</span>
                                <ChevronDown
                                    className={`w-4 h-4 transition-transform duration-300 ${isStructureOpen ? 'rotate-180' : ''}`}
                                />
                            </button>

                            <AnimatePresence>
                                {isStructureOpen && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="space-y-2 font-mono text-xs text-primary/80 pt-4">
                                            <div>/ Inicio</div>
                                            <div className="pl-4 text-white/40">├── Hero (Video/Img)</div>
                                            <div className="pl-4 text-white/40">├── Filosofía & Intro</div>
                                            <div className="pl-4 text-white/40">├── Destacados</div>
                                            <div className="pl-4 text-white/40">└── Call to Action</div>

                                            <div>/ Servicios</div>
                                            <div className="pl-4 text-white/40">├── Catálogo General</div>
                                            <div className="pl-4 text-white/40">├── Detalles del Servicio</div>
                                            <div className="pl-4 text-white/40">├── Tabla Comparativa</div>
                                            <div className="pl-4 text-white/40">└── Preguntas Frecuentes</div>

                                            <div>/ Nosotros</div>
                                            <div className="pl-4 text-white/40">├── Nuestra Historia</div>
                                            <div className="pl-4 text-white/40">├── Equipo & Expertos</div>
                                            <div className="pl-4 text-white/40">└── Alianzas</div>

                                            <div>/ Proyectos</div>
                                            <div className="pl-4 text-white/40">├── Galería Interactiva</div>
                                            <div className="pl-4 text-white/40">├── Casos de Éxito</div>
                                            <div className="pl-4 text-white/40">└── Testimonios</div>

                                            <div>/ Contacto</div>
                                            <div className="pl-4 text-white/40">├── Formulario Dinámico</div>
                                            <div className="pl-4 text-white/40">├── Ubicación (Maps)</div>
                                            <div className="pl-4 text-white/40">└── Redes Sociales</div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <div className="space-y-3 mt-auto">
                            <Button glow className="w-full">Elegir Web Completa</Button>
                            <a
                                href="https://viveelitgrupoinmobiliario.com.mx/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full text-center py-3 text-xs uppercase tracking-widest text-primary hover:text-white transition-colors border border-transparent hover:border-white/10 rounded-sm"
                            >
                                Ver Ejemplo
                            </a>
                        </div>
                    </div>

                    {/* Option 3 - Personalizada */}
                    <div className="p-8 rounded-2xl bg-surface/5 border border-white/10 hover:border-white/30 transition-all duration-300 relative group flex flex-col">
                        <div className="absolute top-0 right-0 p-4 opacity-50 text-xs font-mono text-white">OPCIÓN 03</div>
                        <h3 className="text-2xl font-display font-bold text-white mb-2">Custom Dev</h3>
                        <p className="text-sm text-foreground/60 mb-8 h-12">Sistemas a medida con backend y bases de datos.</p>

                        <ul className="space-y-4 mb-8 text-sm text-foreground/80">
                            <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-white rounded-full" />eCommerce / Apps</li>
                            <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-white rounded-full" />Backend & Auth</li>
                            <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-white rounded-full" />Panel Admin</li>
                            <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-white rounded-full" />Integración IA</li>
                        </ul>

                        <div className="p-4 bg-black/40 rounded-lg border border-white/5 mb-8 opacity-50">
                            <h4 className="text-xs font-bold text-white/50 mb-3 uppercase tracking-wider">Alcance</h4>
                            <div className="space-y-2 font-mono text-xs text-white/60">
                                <div>Sin límites predefinidos.</div>
                                <div>Se define bajo cotización.</div>
                            </div>
                        </div>

                        <Button variant="ghost" className="w-full border border-white/20 hover:bg-white/5 mt-auto">Cotizar Proyecto</Button>
                    </div>
                </div>
            </Section>

            {/* Services */}
            <Section className="bg-foreground py-32">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="p-10 bg-surface/5 border border-surface/10 hover:border-luxury/50 transition-all duration-500 rounded-lg group">
                        <Code className="w-12 h-12 text-luxury mb-8 group-hover:scale-110 transition-transform" />
                        <h3 className="text-3xl font-display font-bold mb-6 text-surface">Full Stack Web</h3>
                        <p className="text-surface/70 text-sm leading-relaxed font-light">
                            Desarrollo de aplicaciones web rápidas y optimizadas para motores de búsqueda.
                        </p>
                    </div>
                    <div className="p-10 bg-surface/5 border border-surface/10 hover:border-luxury/50 transition-all duration-500 rounded-lg group">
                        <Cpu className="w-12 h-12 text-luxury mb-8 group-hover:scale-110 transition-transform" />
                        <h3 className="text-3xl font-display font-bold mb-6 text-surface">Agentes IA</h3>
                        <p className="text-surface/70 text-sm leading-relaxed font-light">
                            Integración de modelos de lenguaje para análisis de datos y atención al cliente automatizada.
                        </p>
                    </div>
                    <div className="p-10 bg-surface/5 border border-surface/10 hover:border-luxury/50 transition-all duration-500 rounded-lg group">
                        <Workflow className="w-12 h-12 text-luxury mb-8 group-hover:scale-110 transition-transform" />
                        <h3 className="text-3xl font-display font-bold mb-6 text-surface">Automatización</h3>
                        <p className="text-surface/70 text-sm leading-relaxed font-light">
                            Automatización de procesos empresariales mediante scripts y flujos de trabajo personalizados.
                        </p>
                    </div>
                </div>
            </Section>

            <Footer />
        </main>
    );
}
