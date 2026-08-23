'use client';
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 mix-blend-difference px-6 py-8 flex justify-between items-center text-xs tracking-widest uppercase">
      <Link href="/" className="font-bold text-base tracking-tighter">
        THRTN<span className="text-[#808080] font-normal">.STUDIO</span>
      </Link>
      <nav className="flex space-x-8 text-[#808080]">
        <Link href="/work" className="hover:text-white transition-colors">Work</Link>
        <Link href="/about" className="hover:text-white transition-colors">About</Link>
        <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
      </nav>
    </header>
  );
}