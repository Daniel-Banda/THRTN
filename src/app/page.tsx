"use client";

import { useState, useEffect } from "react";
import { PopupModal } from "react-calendly";
import { Navbar } from "@/components/ui/Navbar";
import Image from "next/image";
import { Footer } from "@/components/ui/Footer";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { Server, Zap, Cpu, Target, MoveRight } from "lucide-react";
import React from 'react';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const services = [
    {
      title: "Ingeniería & IA",
      description: "Desarrollo web a medida (Apps, Landing Pages, Shopify) y agentes inteligentes para automatizar ecosistemas digitales complejos.",
      href: "/tech",
      // Abstract Tech / Nodes
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2565&auto=format&fit=crop",
    },
    {
      title: "Estudio Creativo",
      description: "Fotografía de alta gama, video profesional y despliegue de campañas publicitarias de alto impacto en Meta Ads.",
      href: "/studio",
      // Fashion / Editorial
      image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2670&auto=format&fit=crop",
    },
    {
      title: "Arquitectura Digital",
      description: "Recorridos inmersivos 360°, lotificación interactiva (Master Plans) e integración de renders para acelerar preventas inmobiliarias.",
      href: "/real-estate",
      // Modern Luxury Home / Night
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2671&auto=format&fit=crop",
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

          {/* Cinematic Background */}
          <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2671&auto=format&fit=crop')] bg-cover bg-center opacity-40 animate-[pulse_8s_ease-in-out_infinite]" />
        </div>

        <div className="relative z-30 text-center px-6 max-w-7xl mx-auto space-y-8">
          <div className="inline-block border border-white/10 bg-white/5 backdrop-blur-sm px-4 py-1 rounded-full mb-4">
            <span className="text-xs font-mono text-primary uppercase tracking-widest">ECOSISTEMAS DIGITALES INTELIGENTES // 13</span>
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
            Automatización de procesos, <span className="text-white font-medium">inteligencia artificial</span> y <span className="text-white font-medium">soluciones digitales</span> para empresas y personas.
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

      {/* Filosofía / Lore del 13 */}
      <Section className="bg-foreground py-32 border-b border-surface/10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl md:text-6xl font-display font-bold leading-none mb-8 text-surface">
              El <span className="text-luxury">Lore</span> <br /> del 13.
            </h2>
            <p className="text-lg text-surface/70 leading-relaxed font-light mb-6">
              THRTN es la forma comprimida de thirteen — trece. El número no es aleatorio ni superstición: es código. Representa el punto de partida de nuestra identidad y de la precisión con la que estructuramos cada ecosistema digital.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-2 border-l border-surface/10 pl-4">
              <span className="font-mono text-sm text-primary">1101</span>
              <h4 className="text-white font-display text-xl">Binario</h4>
              <p className="text-surface/50 text-sm">La representación del 13 en el lenguaje de las máquinas.</p>
            </div>
            <div className="space-y-2 border-l border-surface/10 pl-4">
              <span className="font-mono text-sm text-primary">0xD</span>
              <h4 className="text-white font-display text-xl">Hexadecimal</h4>
              <p className="text-surface/50 text-sm">Compresión pura y lenguaje de sistemas.</p>
            </div>
            <div className="space-y-2 border-l border-surface/10 pl-4">
              <span className="font-mono text-sm text-primary">PRIMO</span>
              <h4 className="text-white font-display text-xl">Indivisible</h4>
              <p className="text-surface/50 text-sm">Base absoluta de la criptografía y seguridad digital.</p>
            </div>
            <div className="space-y-2 border-l border-surface/10 pl-4">
              <span className="font-mono text-sm text-primary">ROT13</span>
              <h4 className="text-white font-display text-xl">Cifrado</h4>
              <p className="text-surface/50 text-sm">Cifrado clásico. Dos veces y vuelves al origen.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* F13 Suite / Ecosistema */}
      <Section className="bg-background py-40">
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <div className="inline-block border border-white/10 bg-white/5 backdrop-blur-sm px-4 py-1 rounded-full mb-6">
            <span className="text-xs font-mono text-white/50 uppercase tracking-widest">Plataforma Exclusiva</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-medium text-white mb-6">La función que no sabías <br/><span className="text-primary italic">que necesitabas.</span></h2>
          <p className="text-foreground/60 leading-relaxed font-light text-xl">
            En un teclado convencional, las teclas van de F1 a F12. F13 no existe. 
            Nosotros desarrollamos esa función extra para automatizar y escalar tu negocio de extremo a extremo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { tag: "F13 Capture™", title: "Captación", desc: "Gestión inteligente de leads y embudos de conversión.", icon: Target },
            { tag: "F13 Flow™", title: "Automatización", desc: "Coreografía perfecta entre tus herramientas de software.", icon: Zap },
            { tag: "F13 AI™", title: "Inteligencia", desc: "Agentes digitales que razonan y toman decisiones.", icon: Server },
            { tag: "F13 Ops™", title: "Operación", desc: "El control central que monitorea todo tu ecosistema.", icon: Cpu },
          ].map((item) => (
            <div key={item.tag} className="border border-white/5 bg-white/[0.02] p-8 hover:bg-white/[0.04] transition-colors rounded-sm group cursor-default">
              <item.icon className="w-8 h-8 text-white/20 group-hover:text-primary transition-colors mb-6" />
              <div className="font-mono text-xs text-primary mb-2">{item.tag}</div>
              <h3 className="text-xl font-display text-white mb-2">{item.title}</h3>
              <p className="text-sm text-foreground/50">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Metodología / Auditoría */}
      <Section className="bg-surface/30 py-24 border-y border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5 relative">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              El proceso antes <br />
              del código.
            </h2>
          </div>
          <div className="md:col-span-7">
            <p className="text-xl font-light text-foreground/80 leading-relaxed mb-6">
              Nuestros ecosistemas se basan en una <span className="text-white font-medium">Auditoría BPMN integral</span>.
            </p>
            <p className="text-foreground/60 leading-relaxed max-w-2xl">
              Antes de escribir una sola línea de código, mapeamos visualmente tu operación actual. Identificamos cuellos de botella, filtramos el ruido y diseñamos el flujo ideal a través de Business Process Model and Notation (BPMN). Esto garantiza sistemas lógicos, predecibles y de muy alta eficiencia.
            </p>
          </div>
        </div>
      </Section>

      {/* Services Grid */}
      <Section className="bg-background pt-32 pb-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tighter mb-4">Nuestros Servicios</h2>
            <div className="h-1 w-24 bg-primary" />
          </div>
          <p className="text-foreground/50 max-w-sm text-right">
            Seleccione una categoría para conocer nuestra oferta especializada.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <ServiceCard key={service.title} {...service} index={idx} />
          ))}
        </div>
      </Section>

      {/* Special Real Estate Service Mention */}
      <Section className="bg-background pb-32 pt-10">
        <div className="relative border border-primary/20 bg-primary/5 p-8 md:p-12 rounded-sm mx-auto overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
            <MoveRight className="w-32 h-32" />
          </div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-4 flex-1">
              <div className="inline-block bg-primary/20 text-primary px-3 py-1 text-[10px] font-mono tracking-widest uppercase rounded-sm border border-primary/20">
                Servicio Destacado Real Estate
              </div>
              <h3 className="text-3xl lg:text-4xl font-display text-white font-medium">Cobertura Inmobiliaria</h3>
              <p className="text-foreground/70 font-light text-lg">
                Impulsa la venta de tu propiedad con contenido visual de élite.
              </p>
              <ul className="space-y-3 mt-6">
                <li className="flex items-center text-sm md:text-base text-foreground/80"><Zap className="w-5 h-5 text-primary mr-4" /> 1 Video formato Reel vertical altamente dinámico</li>
                <li className="flex items-center text-sm md:text-base text-foreground/80"><Zap className="w-5 h-5 text-primary mr-4" /> 15 Fotografías profesionales con retoque HDR</li>
                <li className="text-xs text-foreground/40 mt-4 md:mt-2 italic">* Entrega estimada en 24/48 horas. (Servicio único).</li>
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

      {/* CTA Section */}
      <Section className="text-center py-48 relative overflow-hidden bg-foreground">
        <div className="absolute inset-0 bg-primary/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="relative z-10">
          <h2 className="text-6xl md:text-8xl font-display font-bold mb-10 tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20">
            INICIAR<br />PROYECTO
          </h2>
          <p className="text-xl text-surface/70 mb-16 max-w-xl mx-auto font-light leading-relaxed">
            Comencemos con una consulta estratégica para evaluar tu infraestructura y diseñar el plan de transformación digital de tu marca.
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
