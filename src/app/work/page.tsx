import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-[var(--bg-dark)] flex flex-col justify-between">
      <Navbar />
      
      {/* Contenedor central para el texto */}
      <div className="flex-1 flex items-center justify-center pt-32 pb-16 px-6">
        <h1 className="font-metropolis text-2xl md:text-4xl font-bold text-[var(--white-sand)] tracking-widest uppercase">
          Work - Coming Soon
        </h1>
      </div>

      <Footer />
    </main>
  );
}