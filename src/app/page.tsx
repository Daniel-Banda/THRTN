import Navbar from '@/components/Navbar';
import HeroReel from '@/components/HeroReel';
import ProjectGrid from '@/components/ProjectGrid';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer'; // Ajusta la ruta si tu Footer está en otra ubicación

export default function Home() {
  return (
    <main className="min-h-screen bg-[#070402]">
      <Navbar />
      <HeroReel />
      <AboutSection />
      <ProjectGrid />
      
      <Footer />
    </main>
  );
}