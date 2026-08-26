import Navbar from '@/components/Navbar';
import HeroReel from '@/components/HeroReel';
import ProjectGrid from '@/components/ProjectGrid';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--bg-dark)]">
      <Navbar />
      <HeroReel />
      <AboutSection />
      <ProjectGrid />
      <Footer />
    </main>
  );
}