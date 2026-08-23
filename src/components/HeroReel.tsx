'use client';
import { motion } from 'framer-motion';

export default function HeroReel() {
  return (
    <section className="relative h-screen w-full flex flex-col justify-end p-8 md:p-16 overflow-hidden bg-[#070402]">
      {/* Texture Grain Overlay */}
      <div className="absolute inset-0 film-grain pointer-events-none z-20" />

      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-40 pointer-events-none filter contrast-125 brightness-90"
      >
        <source src="https://vimeo.com/1180677816?share=copy&fl=sv&fe=ci" type="video/mp4" />
      </video>

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#070402] via-[#070402]/30 to-transparent z-10" />

      {/* Cinematic Title Credits Structure */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-30 max-w-4xl"
      >
        <p className="font-inter text-xs tracking-[0.3em] uppercase text-[#F6A132] mb-3">
          A CREATIVE PRODUCTION STUDIO — MEXICO
        </p>
        
        <h1 className="font-gigantic text-5xl md:text-8xl tracking-tight text-[#E1DACB] uppercase leading-[0.9] mb-6">
          CINEMATIC <span className="font-bogart italic font-normal text-[#F6D641] lowercase">visuals</span> FOR CULTURE
        </h1>

        <div className="flex flex-wrap gap-8 text-xs tracking-[0.2em] font-inter text-[#E1DACB]/70 border-t border-[#E1DACB]/15 pt-6 uppercase">
          <div>
            <span className="text-[#F6A132] block text-[10px] mb-1">DIRECTED BY</span>
            <span>THRTN</span>
          </div>
          <div>
            <span className="text-[#F6A132] block text-[10px] mb-1">FOCUS</span>
            <span>MUSIC / FASHION / DOCS</span>
          </div>
          <div>
            <span className="text-[#F6A132] block text-[10px] mb-1">BASED IN</span>
            <span>CDMX (MEX)</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}