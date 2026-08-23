'use client';
import { useState } from 'react';
import { FEATURED_PROJECTS, Project } from '@/data/projects';

export default function ProjectGrid() {
  return (
    <section className="px-8 md:px-16 py-32 border-t border-[#E1DACB]/10 bg-[#070402]">
      <div className="flex justify-between items-end mb-16 border-b border-[#E1DACB]/10 pb-6">
        <div>
          <span className="text-[#F6A132] font-inter text-xs tracking-[0.25em] uppercase block mb-1">[ ARCHIVE ]</span>
          <h2 className="font-bebas text-4xl text-[#E1DACB] tracking-wider uppercase">SELECTED WORKS</h2>
        </div>
        <span className="font-inter text-xs tracking-[0.2em] text-[#E1DACB]/50">2025 — 2026</span>
      </div>

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
      <div className="relative aspect-video w-full overflow-hidden bg-[#070402] border border-[#E1DACB]/10 mb-6">
        {isHovered ? (
          <video
            src={project.videoUrl}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover filter contrast-110 grayscale-20 transition-transform duration-700 scale-105"
          />
        ) : (
          <img
            src={project.thumbnailUrl}
            alt={project.title}
            className="w-full h-full object-cover filter contrast-110 grayscale-30 transition-transform duration-700 scale-100 group-hover:scale-105"
          />
        )}
        <div className="absolute top-4 left-4 font-inter text-[10px] tracking-[0.2em] text-[#F6D641] bg-[#070402]/80 px-2 py-1 uppercase">
          0{index + 1}
        </div>
      </div>

      <div className="flex justify-between items-baseline border-b border-[#E1DACB]/10 pb-2">
        <h3 className="font-bebas text-2xl text-[#E1DACB] tracking-wide group-hover:text-[#F6D641] transition-colors uppercase">
          {project.title}
        </h3>
        <span className="font-bogart italic text-sm text-[#F6A132]">{project.category}</span>
      </div>

      <div className="flex justify-between text-[11px] font-inter text-[#E1DACB]/50 tracking-[0.15em] mt-2 uppercase">
        <span>CLIENT: {project.client}</span>
        <span>{project.year}</span>
      </div>
    </div>
  );
}