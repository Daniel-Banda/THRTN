import './globals.css';

export const metadata = {
  title: 'THRTN.STUDIO — Visual Language',
  description: 'Cinematic & Architectural Imagery',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-[#070402] text-[#E6E1D7] font-inter antialiased">
        {children}
      </body>
    </html>
  );
}