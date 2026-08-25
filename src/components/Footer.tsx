'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#070402] text-[#E6E1D7] border-t border-[#E1DACB]/10 pt-16 pb-12 px-6 md:px-16">
      <div className="max-w-6xl mx-auto flex flex-col gap-16">
        
        {/* Fila Superior: Marca, Contacto y Redes */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 items-start">
          
          {/* Columna 1: Brand & Tagline */}
          <div className="md:col-span-5 space-y-3">
            <span className="font-kiona text-2xl tracking-widest text-[#E6E1D7] uppercase block">
              THRTN
            </span>
            <p className="font-inter text-xs text-[#E1DACB]/50 max-w-sm font-light leading-relaxed">
              Creative production studio crafting cinematic visual stories and digital experiences worldwide.
            </p>
          </div>

          {/* Columna 2: Contacto */}
          <div className="md:col-span-4 space-y-2">
            <span className="font-metropolis text-[10px] tracking-[0.25em] text-[#E1DACB]/40 uppercase block mb-3 font-bold">
              CONTACT
            </span>
            <div className="flex flex-col gap-1.5 font-inter text-xs tracking-wider">
              <a 
                href="mailto:contacto@thrtn.co" 
                className="text-[#E6E1D7]/80 hover:text-[#E1DACB] transition-colors w-fit"
              >
                contacto@thrtn.co
              </a>
              <a 
                href="tel:+523123743960" 
                className="text-[#E6E1D7]/80 hover:text-[#E1DACB] transition-colors w-fit"
              >
                +52 312 374 3960
              </a>
            </div>
          </div>

          {/* Columna 3: Social Media */}
          <div className="md:col-span-3 space-y-2">
            <span className="font-metropolis text-[10px] tracking-[0.25em] text-[#E1DACB]/40 uppercase block mb-3 font-bold">
              SOCIAL
            </span>
            <div className="flex flex-col gap-1.5 font-inter text-xs tracking-wider">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[#E6E1D7]/80 hover:text-[#E1DACB] transition-colors w-fit uppercase"
              >
                Instagram ↗
              </a>
              <a 
                href="https://vimeo.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[#E6E1D7]/80 hover:text-[#E1DACB] transition-colors w-fit uppercase"
              >
                Vimeo ↗
              </a>
            </div>
          </div>

        </div>

        {/* Fila Inferior: Copyright & Legal */}
        <div className="pt-8 border-t border-[#E1DACB]/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] font-inter text-[#E1DACB]/40 tracking-widest uppercase">
          <p>© {currentYear} THRTN STUDIO. ALL RIGHTS RESERVED.</p>
          <p className="font-light">MEXICO // WORLDWIDE</p>
        </div>

      </div>
    </footer>
  );
}