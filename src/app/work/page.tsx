'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FEATURED_PROJECTS, Project } from '@/data/projects';

export default function WorkPage() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  // Cerrar modal con la tecla ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveProject(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Función auxiliar para extraer el ID numérico de Vimeo sin importar si pegas el link completo o solo el número
  const getVimeoId = (url: string) => {
    const parts = url.split('/');
    return parts.pop() || url;
  };

  return (
    <main className="min-h-screen bg-[var(--bg-dark)] flex flex-col justify-between text-[var(--white-sand)]">
      <Navbar />

      <section className="flex-1 pt-36 pb-24 px-6 md:px-16 max-w-7xl mx-auto w-full">
        {/* Encabezado Editorial */}
        <div className="mb-16 space-y-3 border-b border-[var(--cognac)]/20 pb-8">
          <span className="font-metropolis text-xs tracking-[0.3em] text-[var(--cognac)] uppercase font-bold block">
            SELECTED WORKS
          </span>
          <h1 className="font-kiona text-3xl md:text-5xl tracking-widest uppercase">
            PORTFOLIO
          </h1>
        </div>

        {/* Grid de Galería Editorial */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-start">
          {FEATURED_PROJECTS.map((project) => (
            <div
              key={project.id}
              onClick={() => setActiveProject(project)}
              className="group cursor-pointer flex flex-col gap-4"
            >
              {/* Contenedor del Thumbnail personalizado */}
              <div className="relative w-full aspect-[16/9] bg-[#120e0a] overflow-hidden border border-[var(--cognac)]/15 group-hover:border-[var(--cognac)]/50 transition-all duration-500">
                <img
                  src={project.thumbnailUrl}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />

                {/* Overlay con Hover e Indicador de Play */}
                <div className="absolute inset-0 bg-[#070402]/30 group-hover:bg-[#070402]/10 transition-colors duration-500 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full border border-[var(--white-sand)]/30 group-hover:border-[var(--white-sand)] group-hover:scale-110 flex items-center justify-center transition-all duration-300 bg-[#070402]/50 backdrop-blur-sm">
                    <span className="text-[10px] tracking-widest pl-0.5 text-[var(--white-sand)]">▶</span>
                  </div>
                </div>

                {/* Etiqueta de Categoría / Año */}
                <div className="absolute top-4 left-4 bg-[#070402]/70 backdrop-blur-md px-3 py-1 border border-[var(--cognac)]/20">
                  <span className="font-metropolis text-[9px] tracking-[0.2em] uppercase text-[var(--white-sand)]">
                    {project.category} // {project.year}
                  </span>
                </div>
              </div>

              {/* Metadatos del Proyecto */}
              <div className="flex justify-between items-baseline pt-1">
                <div>
                  <h3 className="font-kiona text-base md:text-lg tracking-wider text-[var(--white-sand)] group-hover:text-[var(--cognac)] transition-colors">
                    {project.title}
                  </h3>
                  <p className="font-inter text-xs text-[var(--white-sand)]/50 uppercase tracking-widest mt-1">
                    {project.client}
                  </p>
                </div>
                <span className="font-metropolis text-[10px] tracking-[0.2em] text-[var(--cognac)] uppercase">
                  EXPLORE ↗
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MODAL FULLSCREEN / LIGHTBOX DE VIMEO */}
      {activeProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#070402]/95 backdrop-blur-md p-4 md:p-10"
          onClick={() => setActiveProject(null)}
        >
          {/* Botón de Cierre (X) */}
          <button
            onClick={() => setActiveProject(null)}
            className="absolute top-6 right-6 md:top-10 md:right-10 text-[var(--white-sand)]/70 hover:text-[var(--white-sand)] font-metropolis text-xs tracking-[0.3em] uppercase flex items-center gap-2 z-50 p-3 group bg-[#070402]/50 border border-[var(--cognac)]/20"
          >
            <span>CLOSE</span>
            <span className="text-lg group-hover:rotate-90 transition-transform duration-300">✕</span>
          </button>

          {/* Reproductor de Vimeo Limpio (Sin info de cuenta) */}
          <div
            className="relative w-full max-w-5xl aspect-[16/9]"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={`https://player.vimeo.com/video/${getVimeoId(activeProject.vimeoUrl)}?autoplay=1&title=0&byline=0&portrait=0&badge=0&autopause=0`}
              className="w-full h-full border border-[var(--cognac)]/20 shadow-2xl"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}