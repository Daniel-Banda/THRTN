import Link from "next/link";
import Image from "next/image";
import { Section } from "./Section";

export const Footer = () => {
    return (
        <footer className="bg-background border-t border-white/5">
            <Section className="py-20">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
                    {/* Brand */}
                    <div className="md:col-span-4">
                        <Link href="/" className="block relative w-32 h-12 mb-6 hover:opacity-80 transition-opacity">
                            <Image
                                src="/logo.png"
                                alt="THRTN"
                                fill
                                className="object-contain object-left brightness-0 invert"
                            />
                        </Link>
                        <p className="text-foreground/50 max-w-sm font-light leading-relaxed">
                            Más allá de la suerte. Diseño de precisión para un mundo caótico. THRTN redefine el estándar digital.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div className="md:col-span-2 md:col-start-7">
                        <h4 className="text-xs uppercase tracking-widest text-white/40 mb-6">MAPA DEL SITIO</h4>
                        <ul className="space-y-4 text-sm text-foreground/80">
                            <li><Link href="/" className="hover:text-primary transition-colors">Inicio</Link></li>
                            <li><Link href="/real-estate" className="hover:text-primary transition-colors">Real Estate</Link></li>
                            <li><Link href="/studio" className="hover:text-primary transition-colors">Estudio</Link></li>
                            <li><Link href="/tech" className="hover:text-primary transition-colors">Tech & IA</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="md:col-span-3">
                        <h4 className="text-xs uppercase tracking-widest text-white/40 mb-6">CONTACTO</h4>
                        <ul className="space-y-4 text-sm text-foreground/80">
                            <li><a href="mailto:contact@thrtn.com" className="hover:text-primary transition-colors">contact@thrtn.com</a></li>
                            <li>Colima, México</li>
                        </ul>
                        <div className="mt-8 flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">IN</a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">IG</a>
                        </div>
                    </div>
                </div>

                <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-foreground/30 uppercase tracking-wider">
                    <p>&copy; {new Date().getFullYear()} THRTN.</p>
                    <p>Diseñado y Construido por THRTN Ecosystem.</p>
                </div>
            </Section>
        </footer>
    );
};
