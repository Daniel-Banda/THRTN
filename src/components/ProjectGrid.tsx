'use client';
import { useState } from 'react';
import { FEATURED_PROJECTS, Project } from '@/data/projects';

export default function ProjectGrid() {
  return (
    <section className="px-6 md:px-12 py-24 bg-[#070402] border-t border-[#E1DACB]/10 min-h-screen">
      {/* Work Grid Limpio */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
        {FEATURED_PROJECTS.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Contenedor Principal con Bordes Redondeados */}
      <div className="relative aspect-16/9 w-full bg-[#070402] border border-[#E1DACB]/15 rounded-lg overflow-hidden mb-4">
        {isHovered ? (
          <video
            src={project.videoUrl}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover filter contrast-110 scale-105 transition-transform duration-700"
          />
        ) : (
          <img
            src={project.thumbnailUrl}
            alt={project.title}
            className="w-full h-full object-cover filter contrast-105 group-hover:scale-105 transition-transform duration-700"
          />
        )}
        {/* Badge de Categoría con Bordes Redondeados */}
        <div className="absolute top-3 left-3 bg-[#070402]/80 backdrop-blur-xs font-inter text-[9px] tracking-[0.2em] text-[#F6D641] px-2 py-1 uppercase border border-[#E1DACB]/15 rounded-md">
          {project.category}
        </div>
      </div>

      <div className="flex justify-between items-baseline pt-2">
        <h3 className="font-bebas text-3xl text-[#E1DACB] group-hover:text-[#F6D641] transition-colors uppercase tracking-wide">
          {project.title}
        </h3>
        <span className="font-inter text-xs text-[#F6A132] tracking-widest">{project.year}</span>
      </div>

      <div className="flex justify-between items-center text-[10px] font-inter text-[#E1DACB]/50 tracking-[0.2em] mt-1 uppercase">
        <span>CLIENT: {project.client}</span>
        <span className="group-hover:text-[#E1DACB] transition-colors">VIEW PROJECT →</span>
      </div>
    </div>
  );
}