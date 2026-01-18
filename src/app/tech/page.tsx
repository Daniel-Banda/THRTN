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
                            Arquitectamos infraestructuras digitales inteligentes. Desde aplicaciones web de alto rendimiento hasta agentes autónomos que escalan tus operaciones mientras duermes.
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
            <Section className="py-32">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="p-10 bg-surface/50 border border-white/5 hover:border-primary/50 transition-all duration-500 rounded-lg group">
                        <Code className="w-12 h-12 text-primary mb-8 group-hover:scale-110 transition-transform" />
                        <h3 className="text-3xl font-display font-bold mb-6 text-white">Full Stack Web</h3>
                        <p className="text-foreground/60 text-sm leading-relaxed font-light">
                            Aplicaciones React y Next.js ultra rápidas. Renderizado del lado del servidor para un SEO perfecto y cargas instantáneas.
                        </p>
                    </div>
                    <div className="p-10 bg-surface/50 border border-white/5 hover:border-secondary/50 transition-all duration-500 rounded-lg group">
                        <Cpu className="w-12 h-12 text-secondary mb-8 group-hover:scale-110 transition-transform" />
                        <h3 className="text-3xl font-display font-bold mb-6 text-white">Agentes IA</h3>
                        <p className="text-foreground/60 text-sm leading-relaxed font-light">
                            Integraciones personalizadas de LLM. Chatbots que venden, analizan datos y realizan acciones de forma autónoma.
                        </p>
                    </div>
                    <div className="p-10 bg-surface/50 border border-white/5 hover:border-white/20 transition-all duration-500 rounded-lg group">
                        <Workflow className="w-12 h-12 text-white mb-8 group-hover:scale-110 transition-transform" />
                        <h3 className="text-3xl font-display font-bold mb-6 text-white">Automatización</h3>
                        <p className="text-foreground/60 text-sm leading-relaxed font-light">
                            Scripts de Zapier, Make y Python para eliminar tareas manuales de tu lógica de negocio.
                        </p>
                    </div>
                </div>
            </Section>

            <Footer />
        </main>
    );
}
