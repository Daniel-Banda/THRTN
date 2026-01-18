import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Cpu, Code, Workflow } from "lucide-react";

export default function TechPage() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navbar />

            {/* Hero */}
            <section className="relative pt-48 pb-24 md:pt-64 md:pb-48 px-6 overflow-hidden border-b border-white/5">
                <div className="absolute inset-0 z-0">
                    {/* Tech grid background */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] z-10" />
                    <div className="absolute top-0 left-0 w-full h-[500px] bg-primary/10 blur-[120px] rounded-full mix-blend-screen pointer-events-none" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-mono mb-6">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                            </span>
                            AGENTES IA DISPONIBLES
                        </div>
                        <h1 className="text-6xl md:text-8xl font-display font-bold mb-8 leading-[1] tracking-tighter text-white">
                            SÍNTESIS <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                                DE CÓDIGO
                            </span>
                        </h1>
                        <p className="text-xl text-foreground/70 max-w-xl leading-relaxed mb-10 font-light">
                            Diseñamos infraestructuras digitales inteligentes. Aplicaciones web de alto rendimiento y agentes autónomos para escalar sus operaciones.
                        </p>
                        <div className="flex gap-6">
                            <Button glow>Iniciar Proyecto</Button>
                            <Button variant="secondary">Ver Documentación</Button>
                        </div>
                    </div>
                    {/* Visual Abstract */}
                    <div className="relative h-[400px] md:h-[500px] bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm p-8 font-mono text-sm text-primary overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
                        <div className="opacity-50">
                            &gt; Inicializando red neuronal...<br />
                            &gt; Cargando módulos Next.js...<br />
                            &gt; Conectando a base de datos... [OK]<br />
                            &gt; Desplegando agente 001... [OK]<br />
                            &gt; <span className="animate-pulse">_</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services */}
            <Section className="bg-foreground py-32">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="p-10 bg-surface/5 border border-surface/10 hover:border-luxury/50 transition-all duration-500 rounded-lg group">
                        <Code className="w-12 h-12 text-luxury mb-8 group-hover:scale-110 transition-transform" />
                        <h3 className="text-3xl font-display font-bold mb-6 text-surface">Full Stack Web</h3>
                        <p className="text-surface/70 text-sm leading-relaxed font-light">
                            Desarrollo de aplicaciones web rápidas y optimizadas para motores de búsqueda.
                        </p>
                    </div>
                    <div className="p-10 bg-surface/5 border border-surface/10 hover:border-luxury/50 transition-all duration-500 rounded-lg group">
                        <Cpu className="w-12 h-12 text-luxury mb-8 group-hover:scale-110 transition-transform" />
                        <h3 className="text-3xl font-display font-bold mb-6 text-surface">Agentes IA</h3>
                        <p className="text-surface/70 text-sm leading-relaxed font-light">
                            Integración de modelos de lenguaje para análisis de datos y atención al cliente automatizada.
                        </p>
                    </div>
                    <div className="p-10 bg-surface/5 border border-surface/10 hover:border-luxury/50 transition-all duration-500 rounded-lg group">
                        <Workflow className="w-12 h-12 text-luxury mb-8 group-hover:scale-110 transition-transform" />
                        <h3 className="text-3xl font-display font-bold mb-6 text-surface">Automatización</h3>
                        <p className="text-surface/70 text-sm leading-relaxed font-light">
                            Automatización de procesos empresariales mediante scripts y flujos de trabajo personalizados.
                        </p>
                    </div>
                </div>
            </Section>

            <Footer />
        </main>
    );
}
