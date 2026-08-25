'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 px-8 md:px-14 py-8 bg-gradient-to-b from-[#070402]/40 to-transparent">
      <nav className="grid grid-cols-3 items-center w-full">
        
        {/* Izquierda: Logo */}
        <div className="justify-self-start">
          <Link 
            href="/" 
            className="font-jakarta text-sm md:text-base font-bold uppercase tracking-tight text-[#E6E1D7] hover:opacity-80 transition-opacity"
          >
            THRTN.<span className="font-light text-[#E6E1D7]/60">STUDIO</span>
          </Link>
        </div>

        {/* Centro: Links Principales (HOME, WORK, ABOUT) */}
        <div className="justify-self-center flex items-center space-x-6 md:space-x-8">
          <Link 
            href="/" 
            className="font-inter text-sm md:text-base font-bold uppercase tracking-tight text-[#E6E1D7] hover:opacity-70 transition-opacity"
          >
            HOME
          </Link>
          <Link 
            href="/work" 
            className="font-inter text-sm md:text-base font-bold uppercase tracking-tight text-[#E6E1D7] hover:opacity-70 transition-opacity"
          >
            WORK
          </Link>
          <Link 
            href="/about" 
            className="font-inter text-sm md:text-base font-bold uppercase tracking-tight text-[#E6E1D7] hover:opacity-70 transition-opacity"
          >
            ABOUT
          </Link>
        </div>

        {/* Derecha: CTA */}
        <div className="justify-self-end">
          <Link 
            href="/contact" 
            className="font-inter text-xs md:text-sm font-bold uppercase tracking-tight text-[#E6E1D7] hover:opacity-70 transition-opacity border-b border-[#E6E1D7] pb-0.5"
          >
            Let's Talk
          </Link>
        </div>

      </nav>
    </header>
  );
}