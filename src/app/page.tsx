"use client";

import { useState, useEffect } from "react";
import { PopupModal } from "react-calendly";
import { Navbar } from "@/components/ui/Navbar";
import Image from "next/image";
import { Footer } from "@/components/ui/Footer";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { ServiceCard } from "@/components/ui/ServiceCard";
import React from 'react';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const services = [
    {
      title: "Automatización & IA",
      description: "Automatización con n8n, agentes de IA, desarrollo de páginas web, tiendas Shopify y aplicaciones internas a medida.",
      href: "/tech",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2565&auto=format&fit=crop",
    },
    {
      title: "Studio Creativo",
      description: "Fotografía, video, recorridos 360 para inmobiliarias y campañas publicitarias en Meta Ads.",
      href: "/studio",
      image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2670&auto=format&fit=crop",
    },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[100vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-background/60 z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-20" />
          <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2671&auto=format&fit=crop')] bg-cover bg-center opacity-40 animate-[pulse_8s_ease-in-out_infinite]" />
        </div>

        <div className="relative z-30 text-center px-6 max-w-7xl mx-auto space-y-8">
          <div className="inline-block border border-white/10 bg-white/5 backdrop-blur-sm px-4 py-1 rounded-full mb-4">
            <span className="text-xs font-mono text-primary uppercase tracking-widest">AGENCIA DIGITAL · COLIMA, MÉXICO</span>
          </div>

          <div className="relative w-64 h-32 md:w-96 md:h-48 mx-auto mb-8">
            <Image
              src="/logo.png"
              alt="THRTN Logo"
              fill
              className="object-contain brightness-0 invert"
              priority
            />
          </div>

          <p className="text-xl md:text-2xl text-foreground/80 font-light max-w-3xl mx-auto leading-relaxed">
            Automatización de procesos con IA, <span className="text-white font-medium">desarrollo web</span> y <span className="text-white font-medium">producción visual</span> — servicios digitales para empresas en crecimiento.
          </p>

          <div className="pt-8 flex flex-col md:flex-row items-center justify-center gap-6">
            <Button size="lg" glow onClick={() => setIsOpen(true)}>
              Agendar Consulta
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
          <span className="text-[10px] uppercase tracking-widest text-white/60">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
        </div>
      </section>

      {/* Qué es THRTN */}
      <Section className="bg-foreground py-32 border-b border-surface/10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl md:text-6xl font-display font-bold leading-none mb-8 text-surface">
              Tecnología y creatividad para hacer crecer tu negocio.
            </h2>
            <p className="text-lg text-surface/70 leading-relaxed font-light mb-6">
              THRTN es un estudio digital con sede en Colima. Automatizamos operaciones con IA, desarrollamos sitios web y aplicaciones, y producimos contenido visual y campañas publicitarias.
            </p>
            <p className="text-lg text-surface/70 leading-relaxed font-light">
              Dos áreas de trabajo: THRTN Tech para tecnología y procesos, y THRTN Studio para producción visual y marketing digital.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-2 border-l border-surface/10 pl-4">
              <span className="font-mono text-sm text-primary">01</span>
              <h4 className="text-white font-display text-xl">Automatización</h4>
              <p className="text-surface/50 text-sm">Flujos de trabajo inteligentes que eliminan tareas repetitivas y escalan tu operación.</p>
            </div>
            <div className="space-y-2 border-l border-surface/10 pl-4">
              <span className="font-mono text-sm text-primary">02</span>
              <h4 className="text-white font-display text-xl">Agentes IA</h4>
              <p className="text-surface/50 text-sm">Sistemas autónomos que razonan, responden y toman decisiones por tu negocio.</p>
            </div>
            <div className="space-y-2 border-l border-surface/10 pl-4">
              <span className="font-mono text-sm text-primary">03</span>
              <h4 className="text-white font-display text-xl">Web & Apps</h4>
              <p className="text-surface/50 text-sm">Desarrollo a medida: landing pages, plataformas completas y aplicaciones complejas.</p>
            </div>
            <div className="space-y-2 border-l border-surface/10 pl-4">
              <span className="font-mono text-sm text-primary">04</span>
              <h4 className="text-white font-display text-xl">Producción</h4>
              <p className="text-surface/50 text-sm">Foto, video y campañas digitales que comunican tu marca con impacto real.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Services Grid */}
      <Section className="bg-background py-32">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tighter mb-4">Nuestras Divisiones</h2>
            <div className="h-1 w-24 bg-primary" />
          </div>
          <p className="text-foreground/50 max-w-sm text-right">
            Selecciona una división para conocer todos nuestros servicios.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, idx) => (
            <ServiceCard key={service.title} {...service} index={idx} />
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="text-center py-48 relative overflow-hidden bg-foreground">
        <div className="absolute inset-0 bg-primary/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="relative z-10">
          <h2 className="text-6xl md:text-8xl font-display font-bold mb-10 tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20">
            INICIAR<br />PROYECTO
          </h2>
          <p className="text-xl text-surface/70 mb-16 max-w-xl mx-auto font-light leading-relaxed">
            Cuéntanos en qué estás trabajando. En una llamada de 20 minutos definimos si podemos ayudarte y cómo.
          </p>
          <Button size="lg" glow className="px-16 py-8 text-lg" onClick={() => setIsOpen(true)}>
            Agendar Reunión
          </Button>
        </div>
      </Section>

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
