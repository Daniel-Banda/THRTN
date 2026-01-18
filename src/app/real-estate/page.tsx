import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Box, Camera, Video, ArrowRight } from "lucide-react";

export default function RealEstatePage() {
    const features = [
        {
            icon: <Box className="w-8 h-8 text-primary" />,
            title: "Realidad Virtual",
            description: "Recorridos virtuales interactivos que permiten visitar la propiedad desde cualquier ubicación.",
        },
        {
            icon: <Camera className="w-8 h-8 text-primary" />,
            title: "Fotografía HDR",
            description: "Fotografía HDR con estándares editoriales para propiedades exclusivas.",
        },
        {
            icon: <Video className="w-8 h-8 text-primary" />,
            title: "Film Cinemático",
            description: "Producción cinematográfica en 4K para narrar la historia de cada espacio.",
        },
    ];

    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navbar />

            {/* Hero */}
            <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-black/40 z-10" />
                    <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2653&auto=format&fit=crop')] bg-cover bg-center" />
                </div>
                <div className="relative z-20 text-center px-6 max-w-5xl">
                    <h2 className="text-sm tracking-[0.5em] font-display text-primary mb-8 uppercase">División Inmobiliaria</h2>
                    <h1 className="text-7xl md:text-9xl font-display font-bold text-white mb-8 tracking-tighter mix-blend-overlay">
                        REAL<br />ESTATE
                    </h1>
                    <Button size="lg" glow className="tracking-widest">Agendar Demostración</Button>
                </div>
            </section>

            {/* Benefits */}
            <Section className="bg-surface relative z-10 -mt-20 mx-4 md:mx-12 rounded-t-3xl border-t border-white/5 shadow-2xl shadow-black/50">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left py-12">
                    {features.map((feature, idx) => (
                        <div key={idx} className="group p-8 rounded-xl bg-background/50 border border-white/5 hover:border-primary/50 transition-all duration-300">
                            <div className="mb-6 flex justify-center md:justify-start group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                            <h3 className="text-2xl font-display font-bold mb-4">{feature.title}</h3>
                            <p className="text-foreground/60 leading-relaxed font-light">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </Section>

            {/* Highlight/360 Demo Area placeholder */}
            <Section className="py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div className="order-2 lg:order-1">
                        <h2 className="text-5xl md:text-6xl font-display font-bold mb-8 leading-tight">La Ventaja <span className="text-primary">Inmersiva</span>.</h2>
                        <p className="text-xl text-foreground/70 mb-10 leading-relaxed font-light">
                            Elevamos la experiencia de compra. Nuestros recorridos virtuales incrementan significativamente el tiempo de permanencia y el compromiso del cliente.
                        </p>
                        <ul className="space-y-6 mb-12">
                            <li className="flex items-center gap-4 text-foreground/80">
                                <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                                Identificamos compradores potenciales
                            </li>
                            <li className="flex items-center gap-4 text-foreground/80">
                                <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                                Disponibilidad 24/7
                            </li>
                            <li className="flex items-center gap-4 text-foreground/80">
                                <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                                Integración web directa
                            </li>
                        </ul>
                        <Button variant="secondary" className="tracking-widest">Ver Ejemplo en Vivo</Button>
                    </div>
                    <div className="order-1 lg:order-2 aspect-video bg-black rounded-lg border border-white/10 flex items-center justify-center relative overflow-hidden group shadow-2xl shadow-primary/10">
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1628744876497-eb30460be9f6?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent" />
                        <span className="relative z-10 text-white font-display text-2xl border border-white/20 px-8 py-3 bg-black/40 backdrop-blur-md rounded-full group-hover:bg-primary group-hover:border-primary transition-all duration-300">ENTRAR A VISTA 360°</span>
                    </div>
                </div>
            </Section>

            <Footer />
        </main>
    );
}
