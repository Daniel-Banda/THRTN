import Navbar from '@/components/Navbar';
import HeroReel from '@/components/HeroReel';
import ProjectGrid from '@/components/ProjectGrid';
import AboutSection from '@/components/AboutSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#070402]">
      <Navbar />
      <HeroReel />
      <AboutSection />
      <ProjectGrid />
      
      <footer className="px-8 md:px-14 py-12 border-t border-[#E6E1D7]/10 flex justify-between items-center text-xs font-inter text-[#E6E1D7]/60">
        <p>© 2026 THRTN STUDIO</p>
        <a 
          href="mailto:contact@thrtn.studio" 
          className="hover:text-[#E6E1D7] transition-colors"
        >
          contact@thrtn.studio
        </a>
      </footer>
    </main>
  );
}