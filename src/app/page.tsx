import { Navbar } from "@/components/ui/Navbar";
import Image from "next/image";
import { Footer } from "@/components/ui/Footer";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { ServiceCard } from "@/components/ui/ServiceCard";
import React from 'react';

export default function Home() {
  const services = [
    {
      title: "Real Estate",
      description: "Recorridos inmersivos 360° y fotografía HDR para acelerar la venta de propiedades.",
      href: "/real-estate",
      // Modern Luxury Home / Night
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2671&auto=format&fit=crop",
    },
    {
      title: "Estudio Creativo",
      description: "Fotografía y video de alta gama para moda, marca personal y editoriales.",
      href: "/studio",
      // Fashion / Editorial
      image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2670&auto=format&fit=crop",
    },
    {
      title: "Tech & IA",
      description: "Desarrollo web a medida y agentes inteligentes para automatizar ecosistemas digitales.",
      href: "/tech",
      // Abstract Tech / Nodes
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2565&auto=format&fit=crop",
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
            <span className="text-xs font-mono text-primary uppercase tracking-widest">DEFINING THE UNKNOWN // 13</span>
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

          <p className="text-xl md:text-2xl text-foreground/80 font-light max-w-2xl mx-auto leading-relaxed">
            Creamos <span className="text-white font-medium">soluciones digitales inteligentes</span> con un <span className="text-white font-medium">diseño visual impecable</span>.
          </p>

          <div className="pt-8 flex flex-col md:flex-row items-center justify-center gap-6">
            <Button size="lg" glow>
              Explorar Servicios
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
          <span className="text-[10px] uppercase tracking-widest text-white/60">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
        </div>
      </section>

      {/* Philosophy / Intro */}
      <Section className="bg-foreground py-40">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-start">
          <div className="md:col-span-5 relative">
            <h2 className="text-5xl md:text-6xl font-display font-bold leading-none sticky top-32 text-surface">
              Arquitectura <br />
              <span className="text-luxury">Digital.</span>
            </h2>
          </div>
          <div className="md:col-span-7 space-y-8">
            <p className="text-2xl font-light text-surface/90 leading-relaxed font-display">
              "En la era del ruido, la claridad y la precisión son el verdadero lujo."
            </p>
            <div className="h-[1px] w-full bg-surface/10" />
            <p className="text-lg text-surface/70 leading-relaxed">
              Desarrollamos ecosistemas digitales integrales. Desde el código que potencia la automatización hasta la identidad visual que define a la marca. Nuestro enfoque es holístico: tecnología estética y funcionalidad impecable.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-8">
              <div>
                <h4 className="text-lg font-bold text-surface mb-2">Técnico</h4>
                <ul className="text-sm text-surface/60 space-y-1">
                  <li>Desarrollo Next.js</li>
                  <li>Integración de IA</li>
                  <li>Automatización de Flujos</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-bold text-surface mb-2">Creativo</h4>
                <ul className="text-sm text-surface/60 space-y-1">
                  <li>Recorridos Virtuales 360°</li>
                  <li>Fotografía Editorial</li>
                  <li>Producción Cinematográfica</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Services Grid */}
      <Section className="bg-surface/20">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tighter mb-4">Nuestros Servicios</h2>
            <div className="h-1 w-24 bg-primary" />
          </div>
          <p className="text-foreground/50 max-w-sm text-right">
            Seleccione un módulo para conocer nuestra oferta especializada.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <ServiceCard key={service.title} {...service} index={idx} />
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="text-center py-48 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 blur-[100px] rounded-full pointer-events-none" />

        <div className="relative z-10">
          <h2 className="text-6xl md:text-8xl font-display font-bold mb-10 tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20">
            INICIAR<br />PROYECTO
          </h2>
          <p className="text-xl text-foreground/60 mb-16 max-w-xl mx-auto font-light">
            ¿Listos para desplegar su nueva realidad digital? Analicemos los requerimientos.
          </p>
          <Button size="lg" glow className="px-16 py-8 text-lg">
            Contactar
          </Button>
        </div>
      </Section>

      <Footer />
    </main>
  );
}
