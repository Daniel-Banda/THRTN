'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Project {
  id: string;
  title: string;
  client: string;
  category: string;
  year: string;
  description: string;
  coverImage: string;
  previewVideo: string;
  vimeoId: string;
}

const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'KOLKATA EXPEDITION',
    client: 'RARE CULTURE',
    category: 'Documentary',
    year: '2026',
    description: 'A visual journey exploring the underground culture, vibrant streets, and railway pulse of West Bengal.',
    coverImage: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?q=80&w=1600&auto=format&fit=crop',
    previewVideo: 'https://assets.mixkit.co/videos/preview/mixkit-top-aerial-shot-of-seashore-4256-large.mp4',
    vimeoId: '76979871',
  },
  {
    id: '2',
    title: 'GRAND ISLAND',
    client: 'MONDRIAN',
    category: 'Hospitality',
    year: '2026',
    description: 'Lifestyle film produced for Grand Island by Mondrian, capturing a day on the water and the resort experience.',
    coverImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600&auto=format&fit=crop',
    previewVideo: 'https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-city-traffic-at-night-11-large.mp4',
    vimeoId: '1084537',
  },
  {
    id: '3',
    title: 'SILENT HORIZONS',
    client: 'ARCHITECTURAL DIGEST',
    category: 'Commercial',
    year: '2025',
    description: 'Exploring modern minimalist architecture and quiet brutalist forms surrounded by nature across Latin America.',
    coverImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop',
    previewVideo: 'https://assets.mixkit.co/videos/preview/mixkit-forest-stream-in-the-sunlight-529-large.mp4',
    vimeoId: '356960718',
  },
];

function ProjectItem({ project, onSelect }: { project: Project; onSelect: (p: Project) => void }) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto py-8">
      <div 
        onClick={() => onSelect(project)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="group relative cursor-pointer w-full"
      >
        {/* Contenedor principal de imagen/video */}
        <div className="relative w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-xl bg-[#0F0A06] border border-[#E1DACB]/10">
          <img
            src={project.coverImage}
            alt={project.title}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
              isHovered ? 'opacity-0' : 'opacity-80'
            }`}
          />

          <video
            ref={videoRef}
            src={project.previewVideo}
            muted
            loop
            playsInline
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          />

          {/* Sombra gradiente interna */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#070402] via-transparent to-transparent opacity-80" />

          {/* Título e info inferior */}
          <div className="absolute bottom-6 left-6 right-6 z-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-2">
            <div>
              <p className="font-inter text-xs text-[#E1DACB]/60 uppercase tracking-widest mb-1">{project.client}</p>
              <h3 className="font-metropolis text-2xl md:text-4xl font-bold text-[#E6E1D7] tracking-tight group-hover:translate-x-2 transition-transform duration-300">
                {project.title}
              </h3>
            </div>
            
            <span className="font-inter text-xs tracking-widest text-[#E1DACB] uppercase border-b border-[#E1DACB] pb-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              WATCH FILM →
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProjectGrid() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <section className="w-full bg-[#070402] px-6 md:px-12 py-12">
      <div className="flex flex-col gap-6">
        {PROJECTS.map((project) => (
          <ProjectItem key={project.id} project={project} onSelect={setActiveProject} />
        ))}
      </div>

      {/* Modal Reproductor */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#070402]/95 backdrop-blur-md p-4 md:p-12"
          >
            <button
              onClick={() => setActiveProject(null)}
              className="absolute top-6 right-8 md:top-10 md:right-14 z-50 font-inter text-xs tracking-widest text-[#E6E1D7] border border-[#E6E1D7]/30 px-5 py-2 rounded-full hover:bg-[#E6E1D7] hover:text-[#070402] transition-all uppercase"
            >
              CLOSE ✕
            </button>

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.4 }}
              className="w-full max-w-5xl flex flex-col gap-6"
            >
              <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-black shadow-2xl border border-[#E1DACB]/10">
                <iframe
                  src={`https://player.vimeo.com/video/${activeProject.vimeoId}?autoplay=1&title=0&byline=0&portrait=0`}
                  className="absolute inset-0 w-full h-full"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                />
              </div>

              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pt-4 text-[#E6E1D7]">
                <div className="flex gap-12 text-xs font-inter uppercase">
                  <div>
                    <span className="text-[#E6E1D7]/40 block font-bold mb-1">CLIENT</span>
                    <span className="font-bold text-[#E6E1D7]">{activeProject.client}</span>
                  </div>
                  <div>
                    <span className="text-[#E6E1D7]/40 block font-bold mb-1">CATEGORY</span>
                    <span className="font-light">{activeProject.category}</span>
                  </div>
                  <div>
                    <span className="text-[#E6E1D7]/40 block font-bold mb-1">YEAR</span>
                    <span className="font-light">{activeProject.year}</span>
                  </div>
                </div>

                <p className="font-inter text-xs md:text-sm text-[#E6E1D7]/70 max-w-md font-light leading-relaxed">
                  {activeProject.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}