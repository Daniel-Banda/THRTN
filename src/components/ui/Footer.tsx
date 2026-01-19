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
                            Redefiniendo el estándar digital: procesos que aceleran tu crecimiento.
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
                            <a href="https://www.instagram.com/thrtnstudio/" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-white transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                            </a>
                            <a href="https://wa.me/523123743960" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-white transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-foreground/30 uppercase tracking-wider">
                    <p>&copy; {new Date().getFullYear()} THRTN.</p>
                    <p>Diseñado y Construido por THRTN.</p>
                </div>
            </Section>
        </footer>
    );
};
