import Navbar from '@/components/Navbar';
import HeroReel from '@/components/HeroReel';
import ProjectGrid from '@/components/ProjectGrid';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d0d0d]">
      <Navbar />
      <HeroReel />
      <ProjectGrid />
      
      <footer className="px-6 py-12 border-t border-[#1a1a1a] flex justify-between items-center text-xs text-[#808080]">
        <p>© {new Date().getFullYear()} THRTN STUDIO</p>
        <a href="mailto:contact@thrtn.studio" className="hover:text-white transition-colors">
          contact@thrtn.studio
        </a>
      </footer>
    </main>
  );
}