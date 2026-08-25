'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';

export default function HeroReel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const opacityText = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const yText = useTransform(scrollYProgress, [0, 0.6], [0, -60]);
  const opacityOverlay = useTransform(scrollYProgress, [0, 0.8], [0.4, 0.8]);

  return (
    <div ref={containerRef} className="bg-[#070402] w-full relative">
      <section className="relative h-screen w-full bg-[#070402] flex flex-col justify-between p-8 md:p-14 overflow-hidden rounded-b-xl md:rounded-b-2xl">
        
        {/* Background Vimeo Loop Nítido */}
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
          <iframe
            src="https://player.vimeo.com/video/1220679948?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1&quality=1080p"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh] object-cover filter contrast-115 brightness-75 scale-100"
            allow="autoplay; fullscreen"
          />
        </div>

        {/* Film Grain & Dynamic Dark Overlay */}
        <motion.div 
          style={isMounted ? { opacity: opacityOverlay } : { opacity: 0.4 }}
          className="absolute inset-0 bg-[#070402] film-grain pointer-events-none z-10" 
        />

        {/* Spacer */}
        <div className="relative z-20 h-20" />

        {/* Caption Principal Centrado y Ajustado */}
        <motion.div 
          style={isMounted ? { opacity: opacityText, y: yText } : { opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-20 text-center mx-auto px-2 max-w-5xl flex flex-col items-center"
        >
        <h1 className="uppercase drop-shadow-2xl">
        <span className="font-metropolis text-3xl md:text-7xl font-bold tracking-tighter text-[#E6E1D7] block">
            A VISUAL LANGUAGE
        </span>
        <span className="font-kiona text-2xl md:text-5xl font-normal tracking-tighter text-[#E1DACB]/80 block -mt-2 md:-mt-3">
            FOR HUMAN EMOTION
        </span>
        </h1>
        </motion.div>

        {/* Footer Inferior */}
        <motion.div 
          style={isMounted ? { opacity: opacityText } : { opacity: 1 }}
          className="relative z-20 flex justify-between items-end w-full"
        >
          {/* FROM MEXICO — ANYWHERE (Abajo a la Izquierda) */}
          <div className="flex items-center space-x-2 text-[#E6E1D7]/60 font-inter text-[11px] md:text-xs tracking-tight font-medium uppercase">
            <span>FROM MEXICO</span>
            <span className="w-12 md:w-10 h-[1px] bg-[#E6E1D7]/40 inline-block" />
            <span>ANYWHERE</span>
          </div>

          {/* GET IN TOUCH (Abajo a la Derecha) */}
          <div>
            <Link 
              href="/contact"
              className="inline-block font-inter text-xs tracking-tight text-[#E6E1D7]/70 hover:text-[#E6E1D7] uppercase border-b border-[#E6E1D7]/30 hover:border-[#E6E1D7] pb-1 transition-all duration-300"
            >
              GET IN TOUCH
            </Link>
          </div>
        </motion.div>

      </section>
    </div>
  );
}