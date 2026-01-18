import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export default function StudioPage() {
    return (
        <main className="min-h-screen bg-black text-foreground">
            <Navbar />

            {/* Hero */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                {/* Parallax-like background */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-black/30 z-10" />
                    <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center grayscale" />
                </div>

                <div className="relative z-20 w-full px-6 flex flex-col items-center">
                    <h1 className="text-[12vw] leading-none font-display font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-black/50 tracking-tighter mix-blend-difference mb-8">
                        ESTUDIO
                    </h1>
                    <div className="flex gap-4 items-center">
                        <div className="h-[1px] w-12 bg-white" />
                        <p className="text-white font-mono text-sm tracking-widest uppercase">Narrativas Visuales</p>
                        <div className="h-[1px] w-12 bg-white" />
                    </div>
                </div>
            </section>

            {/* Intro Text */}
            <Section className="py-40">
                <div className="max-w-4xl mx-auto text-center relative">
                    <div className="absolute -top-20 left-1/2 -translate-x-1/2 text-[200px] font-display font-bold text-white/5 select-none pointer-events-none">ARTE</div>
                    <p className="text-3xl md:text-5xl font-light leading-snug font-display text-white relative z-10">
                        "No tomamos fotos. Capturamos el <span className="text-primary italic font-bold">aura</span> del momento."
                    </p>
                </div>
            </Section>

            {/* Gallery Grid */}
            <Section fullWidth className="px-0 md:px-0 py-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 h-full md:h-[800px]">
                    {/* Images as cols */}
                    <div className="h-[400px] md:h-full bg-[url('https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=2550&auto=format&fit=crop')] bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-700 cursor-none relative group">
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                        <span className="absolute bottom-8 left-8 text-white font-display font-bold text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">EDITORIAL</span>
                    </div>
                    <div className="h-[400px] md:h-full bg-[url('https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=2000&auto=format&fit=crop')] bg-center bg-cover grayscale hover:grayscale-0 transition-all duration-700 cursor-none relative group">
                        <span className="absolute bottom-8 left-8 text-white font-display font-bold text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">MODA</span>
                    </div>
                    <div className="h-[400px] md:h-full bg-[url('https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?q=80&w=2670&auto=format&fit=crop')] bg-center bg-cover grayscale hover:grayscale-0 transition-all duration-700 cursor-none relative group">
                        <span className="absolute bottom-8 left-8 text-white font-display font-bold text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">RETRATO</span>
                    </div>
                    <div className="h-[400px] md:h-full bg-[url('https://images.unsplash.com/photo-1493863641943-9b68992a8d07?q=80&w=2658&auto=format&fit=crop')] bg-center bg-cover grayscale hover:grayscale-0 transition-all duration-700 cursor-none relative group">
                        <span className="absolute bottom-8 left-8 text-white font-display font-bold text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">AUTOMOTRIZ</span>
                    </div>
                </div>
            </Section>

            <section className="py-40 text-center bg-surface">
                <h2 className="text-sm font-mono tracking-[0.3em] text-primary mb-8 glow">AGENDA TU SESIÓN</h2>
                <Button size="lg" glow className="px-20 text-lg">CONTACTO</Button>
            </section>

            <Footer />
        </main>
    );
}
