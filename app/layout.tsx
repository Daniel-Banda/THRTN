import type { Metadata } from "next";
import { Italiana, Manrope, Cinzel } from "next/font/google";
import "./globals.css";

const italiana = Italiana({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-italiana",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
});

export const metadata: Metadata = {
  title: "Daniel Banda | Creative Ecosystem",
  description: "Portafolio y servicios integrales: Real Estate, Web Dev, IA, Fotografía y Cine.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${italiana.variable} ${manrope.variable} ${cinzel.variable} font-sans antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
