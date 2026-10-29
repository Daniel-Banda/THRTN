'use client';

import Image from 'next/image';

interface ClientItem {
  id: string;
  name: string;
  logoUrl?: string;
  subtitle?: string;
}

const CLIENTS: ClientItem[] = [
  { 
    id: '1', 
    name: 'VIVE ELIT INMOBILIARIA', 
    logoUrl: '/images/clients/LogoViveElit.png' 
  },
  { id: '2', name: 'CLIPSAL SOLAR' },
  { id: '3', name: 'HEARING AUSTRALIA' },
];

export default function AboutSection() {
  const hasClients = CLIENTS && CLIENTS.length > 0;
  const count = CLIENTS.length;
  const justifyClass = count === 1 ? 'justify-center' : 'justify-between';

  return (
    <section className="w-full bg-[var(--bg-dark)] text-[var(--white-sand)] px-8 md:px-16 pt-6 md:pt-10 pb-20 md:pb-28">
      <div className="max-w-6xl mx-auto">
        
        {/* WHO WE ARE */}
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <span className="font-metropolis text-xs tracking-[0.2em] text-[var(--cognac)] uppercase block mb-3 font-bold">
            WHO WE ARE
          </span>
          <p className="font-inter text-sm md:text-base text-[var(--white-sand)]/90 leading-relaxed font-light">
            THRTN is a cinematic production studio specializing in architecture, high-end real estate, and commercial storytelling. We turn physical spaces and bold ideas into high-impact visual assets.
          </p>
        </div>

        {hasClients && <div className="w-full h-[1px] bg-[var(--cognac)]/20 mb-16" />}

        {/* SOME OF OUR CLIENTS */}
        {hasClients && (
          <div>
            <span className="font-metropolis text-xs tracking-[0.2em] text-[var(--cognac)] uppercase block mb-12 font-bold text-center">
              SOME OF OUR CLIENTS
            </span>

            <div className={`flex flex-wrap items-center ${justifyClass} gap-y-12 gap-x-8 w-full`}>
              {CLIENTS.map((client) => (
                <div 
                  key={client.id}
                  className="flex flex-col items-center justify-center gap-2 p-4 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 min-w-[200px] md:min-w-[260px] flex-1 max-w-[320px] mx-auto"
                >
                  {/* Contenedor del Logo (Grande: h-24 / md:h-32) */}
                  {client.logoUrl ? (
                    <div className="relative h-24 md:h-32 w-full max-w-[260px]">
                      <Image 
                        src={client.logoUrl} 
                        alt={`${client.name} Logo`} 
                        fill
                        className="object-contain"
                      />
                    </div>
                  ) : null}

                  {/* Nombre abajo del logo (Más cerca del logo) */}
                  <span className="font-kiona text-sm md:text-base tracking-[0.2em] text-[var(--white-sand)] text-center block">
                    {client.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}