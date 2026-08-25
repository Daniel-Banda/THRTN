'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const CAPABILITIES = [
  { title: 'CINEMATOGRAPHY', desc: 'Narrative films, commercial campaigns, and high-end brand visuals shot on cinema camera systems.' },
  { title: 'FPV & AERIAL CINEMA', desc: 'Indoor cinewhoop precision maneuvers and high-speed outdoor aerial footage with custom cine-drones.' },
  { title: 'POST-PRODUCTION', desc: 'Precision color grading, sound design, dynamic editing, and visual craft built for high-impact media.' },
  { title: 'CREATIVE DIRECTION', desc: 'Concept development, visual strategy, and end-to-end execution for global brands.' },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#070402] text-[#E6E1D7] selection:bg-[#E1DACB] selection:text-[#070402]">
      {/* Navbar principal */}
      <Navbar />

      {/* Contenido principal con contenedor centrado */}
      <div className="pt-28 md:pt-36 max-w-6xl mx-auto px-6 md:px-12">

        {/* 1. HERO SECTION */}
        <section className="mb-24 md:mb-32">
          <span className="font-metropolis text-xs tracking-[0.3em] text-[#E1DACB]/50 uppercase block mb-4 font-bold">
            ABOUT THRTN
          </span>
          <h1 className="font-metropolis text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight uppercase leading-[1.05] text-[#E6E1D7] max-w-4xl mb-8">
            WE CRAFT VISUAL ATMOSPHERES THAT ENDURE.
          </h1>
          <p className="font-inter text-base md:text-xl text-[#E1DACB]/70 font-light max-w-2xl leading-relaxed">
            Founded in Mexico and operating globally, THRTN is an independent creative studio bridging high-concept cinematography with modern visual language.
          </p>
        </section>

        {/* 2. THE ORIGIN & ESSENCE */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center mb-28 md:mb-36 border-t border-[#E1DACB]/10 pt-16">
          <div className="md:col-span-5 space-y-6">
            <span className="font-metropolis text-xs tracking-[0.2em] text-[#E1DACB]/60 uppercase font-bold block">
              OUR ORIGIN
            </span>
            <h2 className="font-metropolis text-2xl md:text-3xl font-bold uppercase tracking-wide leading-snug">
              BORN FROM A PASSION FOR MOTION AND FRAME ACCURACY.
            </h2>
            <p className="font-inter text-sm md:text-base text-[#E6E1D7]/75 font-light leading-relaxed">
              THRTN originated in 2018 as a boutique production house focused on pure visual storytelling. What began as a tight-knit crew shooting localized passion projects rapidly expanded into an international outfit producing films, architectural visuals, and commercial content.
            </p>
            <p className="font-inter text-sm md:text-base text-[#E6E1D7]/75 font-light leading-relaxed">
              We operate at the intersection of technical precision and artistic intuition—combining dynamic camera movement, specialized FPV drone work, and meticulous post-production workflows.
            </p>
          </div>

          <div className="md:col-span-7 relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#E1DACB]/15 bg-[#0F0A06]">
            <img 
              src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1600&auto=format&fit=crop" 
              alt="THRTN Production Set" 
              className="w-full h-full object-cover grayscale opacity-85 hover:opacity-100 hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070402]/80 via-transparent to-transparent pointer-events-none" />
            <span className="absolute bottom-4 left-4 font-inter text-[10px] tracking-widest text-[#E1DACB]/60 uppercase bg-[#070402]/80 px-3 py-1 rounded-full backdrop-blur-sm">
              ON SET // LOCATION ARCHIVE
            </span>
          </div>
        </section>

        {/* 3. FOUNDER SECTION */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center mb-28 md:mb-36 border-t border-[#E1DACB]/10 pt-16">
          <div className="md:col-span-6 order-2 md:order-1 relative">
            <div className="relative aspect-[3/4] w-full max-w-md mx-auto rounded-2xl overflow-hidden border border-[#E1DACB]/20 bg-[#0F0A06] shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1200&auto=format&fit=crop" 
                alt="Founder & Director" 
                className="w-full h-full object-cover filter contrast-[1.05] brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070402] via-transparent to-transparent opacity-60" />
            </div>
            <div className="hidden md:block absolute -bottom-6 -right-2 bg-[#E1DACB] text-[#070402] px-6 py-4 rounded-xl shadow-xl">
              <p className="font-metropolis text-xs font-bold tracking-widest uppercase">DIRECTOR & LEAD CINEMATOGRAPHER</p>
            </div>
          </div>

          <div className="md:col-span-6 order-1 md:order-2 space-y-6">
            <span className="font-metropolis text-xs tracking-[0.2em] text-[#E1DACB]/60 uppercase font-bold block">
              LEADERSHIP
            </span>
            <h2 className="font-metropolis text-3xl md:text-4xl font-bold uppercase tracking-tight text-[#E6E1D7]">
              BEHIND THE LENS
            </h2>
            <p className="font-inter text-sm md:text-base text-[#E6E1D7]/80 font-light leading-relaxed">
              "We don't view filmmaking as simply recording reality, but as modulating space, timing, and atmosphere to evoke a felt response."
            </p>
            <p className="font-inter text-sm md:text-base text-[#E6E1D7]/70 font-light leading-relaxed">
              With a background spanning digital media engineering, drone piloting, and cinematic editing, the directorial vision at THRTN balances hyper-technical equipment execution with high aesthetic standards.
            </p>
            <div className="pt-4 border-b border-[#E1DACB]/10 pb-4">
              <span className="font-kiona text-lg tracking-widest text-[#E1DACB] uppercase block">
                OSCAR BANDA
              </span>
              <span className="font-inter text-xs text-[#E6E1D7]/50 uppercase tracking-widest">
                FOUNDER // EXECUTIVE PRODUCER
              </span>
            </div>
          </div>
        </section>

        {/* 4. CAPABILITIES GRID */}
        <section className="mb-24 md:mb-32 border-t border-[#E1DACB]/10 pt-16">
          <div className="mb-12">
            <span className="font-metropolis text-xs tracking-[0.2em] text-[#E1DACB]/60 uppercase font-bold block mb-2">
              WHAT WE DO
            </span>
            <h2 className="font-metropolis text-2xl md:text-4xl font-bold uppercase tracking-tight">
              CORE CAPABILITIES
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {CAPABILITIES.map((cap, i) => (
              <div 
                key={i} 
                className="p-8 rounded-xl bg-[#0F0A06] border border-[#E1DACB]/10 hover:border-[#E1DACB]/40 transition-all duration-300 group"
              >
                <span className="font-inter text-xs tracking-widest text-[#E1DACB]/40 uppercase block mb-4 group-hover:text-[#E1DACB] transition-colors">
                  0{i + 1}
                </span>
                <h3 className="font-metropolis text-xl font-bold text-[#E6E1D7] tracking-wider mb-3 uppercase">
                  {cap.title}
                </h3>
                <p className="font-inter text-sm text-[#E6E1D7]/70 font-light leading-relaxed">
                  {cap.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

      </div>

      {/* 5. CALL TO ACTION BLOCK (Full Width, Borde a Borde) */}
      <section className="w-full bg-[#E1DACB] text-[#070402] py-20 md:py-28 px-6 md:px-12 text-center shadow-2xl">
        <div className="max-w-4xl mx-auto">
          <span className="font-metropolis text-xs tracking-[0.25em] text-[#070402]/60 uppercase block mb-3 font-bold">
            START A PROJECT
          </span>
          <h2 className="font-metropolis text-3xl md:text-6xl font-extrabold tracking-tight uppercase mb-6">
            HAVE A VISION IN MIND?
          </h2>
          <p className="font-inter text-sm md:text-base text-[#070402]/80 max-w-xl mx-auto mb-10 font-normal leading-relaxed">
            We are available for commercial commissions, documentary productions, and creative collaborations worldwide.
          </p>
          <a
            href="mailto:contact@thrtn.com"
            className="inline-block font-inter text-xs tracking-widest uppercase font-bold bg-[#070402] text-[#E6E1D7] px-8 py-4 rounded-full hover:bg-[#070402]/85 transition-colors shadow-lg"
          >
            GET IN TOUCH →
          </a>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}