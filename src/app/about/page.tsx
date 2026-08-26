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
    <main className="min-h-screen bg-[var(--bg-dark)] text-[var(--white-sand)] selection:bg-[var(--cognac)] selection:text-[var(--white-sand)]">
      {/* Navbar principal */}
      <Navbar />

      {/* Contenido principal con contenedor centrado */}
      <div className="pt-28 md:pt-36 max-w-6xl mx-auto px-6 md:px-12">

        {/* 1. HERO SECTION */}
        <section className="mb-24 md:mb-32">
          <span className="font-metropolis text-xs tracking-[0.3em] text-[var(--cognac)] uppercase block mb-4 font-bold">
            ABOUT THRTN
          </span>
          <h1 className="font-metropolis text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight uppercase leading-[1.05] text-[var(--white-sand)] max-w-4xl mb-8">
            WE CRAFT VISUAL ATMOSPHERES THAT ENDURE.
          </h1>
          <p className="font-inter text-base md:text-xl text-[var(--white-sand)]/70 font-light max-w-2xl leading-relaxed">
            Founded in Mexico and operating globally, THRTN is an independent creative studio bridging high-concept cinematography with modern visual language.
          </p>
        </section>

        {/* 2. THE ORIGIN & ESSENCE */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center mb-28 md:mb-36 border-t border-[var(--cognac)]/20 pt-16">
          <div className="md:col-span-5 space-y-6">
            <span className="font-metropolis text-xs tracking-[0.2em] text-[var(--cognac)] uppercase font-bold block">
              OUR ORIGIN
            </span>
            <h2 className="font-metropolis text-2xl md:text-3xl font-bold uppercase tracking-wide leading-snug">
              BORN FROM A PASSION FOR MOTION AND FRAME ACCURACY.
            </h2>
            <p className="font-inter text-sm md:text-base text-[var(--white-sand)]/75 font-light leading-relaxed">
              THRTN originated in 2018 as a boutique production house focused on pure visual storytelling. What began as a tight-knit crew shooting localized passion projects rapidly expanded into an international outfit producing films, architectural visuals, and commercial content.
            </p>
            <p className="font-inter text-sm md:text-base text-[var(--white-sand)]/75 font-light leading-relaxed">
              We operate at the intersection of technical precision and artistic intuition—combining dynamic camera movement, specialized FPV drone work, and meticulous post-production workflows.
            </p>
          </div>

          <div className="md:col-span-7 relative aspect-[4/3] rounded-2xl overflow-hidden border border-[var(--cognac)]/30 bg-[var(--blue-coral)]/20">
            <img 
              src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1600&auto=format&fit=crop" 
              alt="THRTN Production Set" 
              className="w-full h-full object-cover grayscale opacity-85 hover:opacity-100 hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-dark)]/90 via-transparent to-transparent pointer-events-none" />
            <span className="absolute bottom-4 left-4 font-inter text-[10px] tracking-widest text-[var(--white-sand)]/80 uppercase bg-[var(--bg-dark)]/80 px-3 py-1 rounded-full backdrop-blur-sm border border-[var(--cognac)]/30">
              ON SET // LOCATION ARCHIVE
            </span>
          </div>
        </section>

        {/* 3. FOUNDER SECTION */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center mb-28 md:mb-36 border-t border-[var(--cognac)]/20 pt-16">
          <div className="md:col-span-6 order-2 md:order-1 relative">
            <div className="relative aspect-[3/4] w-full max-w-md mx-auto rounded-2xl overflow-hidden border border-[var(--cognac)]/30 bg-[var(--rouge-noir)]/20 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1200&auto=format&fit=crop" 
                alt="Founder & Director" 
                className="w-full h-full object-cover filter contrast-[1.05] brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-dark)] via-transparent to-transparent opacity-60" />
            </div>
            <div className="hidden md:block absolute -bottom-6 -right-2 bg-[var(--cognac)] text-[var(--white-sand)] px-6 py-4 rounded-xl shadow-xl border border-[var(--white-sand)]/20">
              <p className="font-metropolis text-xs font-bold tracking-widest uppercase">DIRECTOR & LEAD CINEMATOGRAPHER</p>
            </div>
          </div>

          <div className="md:col-span-6 order-1 md:order-2 space-y-6">
            <span className="font-metropolis text-xs tracking-[0.2em] text-[var(--cognac)] uppercase font-bold block">
              LEADERSHIP
            </span>
            <h2 className="font-metropolis text-3xl md:text-4xl font-bold uppercase tracking-tight text-[var(--white-sand)]">
              BEHIND THE LENS
            </h2>
            <p className="font-inter text-sm md:text-base text-[var(--white-sand)]/80 font-light leading-relaxed">
              "We don't view filmmaking as simply recording reality, but as modulating space, timing, and atmosphere to evoke a felt response."
            </p>
            <p className="font-inter text-sm md:text-base text-[var(--white-sand)]/70 font-light leading-relaxed">
              With a background spanning digital media engineering, drone piloting, and cinematic editing, the directorial vision at THRTN balances hyper-technical equipment execution with high aesthetic standards.
            </p>
            <div className="pt-4 border-b border-[var(--cognac)]/20 pb-4">
              <span className="font-kiona text-lg tracking-widest text-[var(--white-sand)] uppercase block">
                OSCAR BANDA
              </span>
              <span className="font-inter text-xs text-[var(--cognac)] uppercase tracking-widest font-semibold">
                FOUNDER // EXECUTIVE PRODUCER
              </span>
            </div>
          </div>
        </section>

        {/* 4. CAPABILITIES GRID */}
        <section className="mb-24 md:mb-32 border-t border-[var(--cognac)]/20 pt-16">
          <div className="mb-12">
            <span className="font-metropolis text-xs tracking-[0.2em] text-[var(--cognac)] uppercase font-bold block mb-2">
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
                className="p-8 rounded-xl bg-[var(--blue-coral)]/10 border border-[var(--cognac)]/20 hover:border-[var(--cognac)] transition-all duration-300 group"
              >
                <span className="font-inter text-xs tracking-widest text-[var(--cognac)] uppercase block mb-4 group-hover:text-[var(--white-sand)] transition-colors">
                  0{i + 1}
                </span>
                <h3 className="font-metropolis text-xl font-bold text-[var(--white-sand)] tracking-wider mb-3 uppercase">
                  {cap.title}
                </h3>
                <p className="font-inter text-sm text-[var(--white-sand)]/70 font-light leading-relaxed">
                  {cap.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

      </div>

      {/* 5. CALL TO ACTION BLOCK (Full Width, Borde a Borde) */}
      <section className="w-full bg-[var(--cognac)] text-[var(--white-sand)] py-20 md:py-28 px-6 md:px-12 text-center shadow-2xl border-t border-[var(--white-sand)]/10">
        <div className="max-w-4xl mx-auto">
          <span className="font-metropolis text-xs tracking-[0.25em] text-[var(--white-sand)]/80 uppercase block mb-3 font-bold">
            START A PROJECT
          </span>
          <h2 className="font-metropolis text-3xl md:text-6xl font-extrabold tracking-tight uppercase mb-6">
            HAVE A VISION IN MIND?
          </h2>
          <p className="font-inter text-sm md:text-base text-[var(--white-sand)]/90 max-w-xl mx-auto mb-10 font-normal leading-relaxed">
            We are available for commercial commissions, documentary productions, and creative collaborations worldwide.
          </p>
          <a
            href="mailto:contact@thrtn.com"
            className="inline-block font-inter text-xs tracking-widest uppercase font-bold bg-[var(--bg-dark)] text-[var(--white-sand)] px-8 py-4 rounded-full hover:bg-[var(--rouge-noir)] transition-colors shadow-lg border border-[var(--white-sand)]/20"
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