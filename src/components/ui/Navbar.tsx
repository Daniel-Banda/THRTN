"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
    { name: "Inicio", href: "/" },
    { name: "Real Estate", href: "/real-estate" },
    { name: "Estudio", href: "/studio" },
    { name: "Tech & IA", href: "/tech" },
];

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className={cn(
                    "fixed top-6 left-0 right-0 z-50 flex justify-center px-4",
                    "transition-all duration-500"
                )}
            >
                <div
                    className={cn(
                        "flex items-center justify-between px-8 py-4 rounded-full backdrop-blur-xl border border-white/5 transition-all duration-300",
                        isScrolled ? "bg-surface/80 w-full max-w-5xl shadow-2xl shadow-black/50" : "bg-transparent w-full max-w-7xl"
                    )}
                >
                    <Link href="/" className="relative w-24 h-8 hover:opacity-80 transition-opacity">
                        <Image
                            src="/logo.png"
                            alt="THRTN"
                            fill
                            className="object-contain object-left brightness-0 invert"
                            priority
                        />
                    </Link>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-xs uppercase tracking-widest text-foreground/70 hover:text-white transition-colors relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full" />
                            </Link>
                        ))}
                    </div>

                    <div className="hidden md:block">
                        <Link
                            href="#contact"
                            className="px-5 py-2 rounded-full border border-white/10 bg-white/5 text-xs uppercase tracking-widest hover:bg-primary hover:border-primary transition-all duration-300"
                        >
                            Contacto
                        </Link>
                    </div>

                    <button className="md:hidden text-foreground" onClick={() => setIsOpen(true)}>
                        <Menu size={24} />
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center"
                    >
                        <button
                            className="absolute top-8 right-8 text-foreground/50 hover:text-white"
                            onClick={() => setIsOpen(false)}
                        >
                            <X size={32} />
                        </button>
                        <div className="flex flex-col gap-8 text-center">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-4xl font-display font-bold text-foreground hover:text-primary transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
