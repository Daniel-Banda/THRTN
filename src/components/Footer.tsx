'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#070402] text-[#E6E1D7] border-t border-[#E1DACB]/15 pt-16 pb-8 px-6 md:px-16 font-inter">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        
        {/* Bloque Superior: Call to Action Directo */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 pb-12 border-b border-[#E1DACB]/10">
          <div className="space-y-3 max-w-xl">
            <span className="font-metropolis text-[10px] tracking-[0.3em] text-[#E1DACB]/40 uppercase block font-bold">
              WORK WITH US
            </span>
            <h3 className="font-kiona text-2xl sm:text-3xl tracking-widest uppercase text-[#E6E1D7] leading-tight">
              HAVE A SPACE OR DESTINATION WORTH SHOWING?
            </h3>
          </div>
          <Link 
            href="/contact"
            className="px-6 py-3 border border-[#E1DACB]/30 hover:border-[#E6E1D7] text-xs uppercase tracking-[0.25em] text-[#E6E1D7] hover:bg-[#E6E1D7] hover:text-[#070402] transition-all duration-300 whitespace-nowrap inline-block"
          >
            GET IN TOUCH ↗
          </Link>
        </div>

        {/* Bloque Medio: Grid Editorial (3 Columnas con Bordes) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-0">
          
          {/* Columna 1: Manifesto / Info */}
          <div className="md:col-span-5 md:pr-12 md:border-r border-[#E1DACB]/10 flex flex-col justify-between gap-6">
            <div className="space-y-2">
              <span className="font-kiona text-xl tracking-[0.2em] text-[#E6E1D7] uppercase block">
                THRTN STUDIO
              </span>
              <p className="text-xs text-[#E1DACB]/50 font-light leading-relaxed max-w-xs">
                A visual language for spaces and commercial brands. Architecture, real estate, and filmmaking.
              </p>
            </div>
            <div className="flex items-center gap-2 text-[10px] tracking-widest text-[#E1DACB]/40 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>BASED IN MEXICO // OPERATING WORLDWIDE</span>
            </div>
          </div>

          {/* Columna 2: Contacto Directo */}
          <div className="md:col-span-4 md:px-12 md:border-r border-[#E1DACB]/10 space-y-4">
            <span className="font-metropolis text-[10px] tracking-[0.3em] text-[#E1DACB]/30 uppercase block font-bold">
              INQUIRIES
            </span>
            <div className="flex flex-col gap-2 text-xs tracking-wider">
              <a 
                href="mailto:contacto@thrtn.co" 
                className="text-[#E6E1D7]/80 hover:text-[#E6E1D7] transition-colors w-fit"
              >
                contacto@thrtn.co
              </a>
              <a 
                href="tel:+523123743960" 
                className="text-[#E6E1D7]/80 hover:text-[#E6E1D7] transition-colors w-fit"
              >
                +52 312 374 3960
              </a>
            </div>
          </div>

          {/* Columna 3: Social Network */}
          <div className="md:col-span-3 md:pl-12 space-y-4">
            <span className="font-metropolis text-[10px] tracking-[0.3em] text-[#E1DACB]/30 uppercase block font-bold">
              NETWORK
            </span>
            <div className="flex flex-col gap-2 text-xs tracking-wider">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[#E6E1D7]/80 hover:text-[#E6E1D7] transition-colors w-fit flex items-center gap-1 uppercase"
              >
                Instagram <span className="text-[9px] opacity-40">↗</span>
              </a>
              <a 
                href="https://vimeo.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[#E6E1D7]/80 hover:text-[#E6E1D7] transition-colors w-fit flex items-center gap-1 uppercase"
              >
                Vimeo <span className="text-[9px] opacity-40">↗</span>
              </a>
            </div>
          </div>

        </div>

        {/* Fila Inferior: Legal & Copyright */}
        <div className="pt-8 border-t border-[#E1DACB]/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] text-[#E1DACB]/30 tracking-[0.2em] uppercase">
          <p>© {currentYear} THRTN STUDIO. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-[#E6E1D7] transition-colors">
              PRIVACY
            </Link>
            <Link href="/terms" className="hover:text-[#E6E1D7] transition-colors">
              TERMS
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}