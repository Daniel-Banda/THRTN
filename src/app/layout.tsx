import type { Metadata } from "next";
import { Syne, Inter } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "THRTN Studio | Fotografía y Video para Inmobiliarias y Hoteles — Colima",
  description: "Fotografía HDR, video cinemático 4K, recorridos virtuales 360° y cobertura aérea con drone para inmobiliarias, hoteles y experiencias de lujo en México.",
  openGraph: {
    title: "THRTN Studio | Contenido Visual Premium para Real Estate y Hoteles",
    description: "Fotografía, video cinemático, drone y tours 360° para inmobiliarias, hoteles y experiencias de lujo.",
    locale: "es_MX",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        suppressHydrationWarning
        className={`${syne.variable} ${inter.variable} antialiased bg-background text-foreground font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
