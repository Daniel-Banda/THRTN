'use client';

interface ClientLogo {
  id: string;
  name: string;
  logoUrl?: string;
}

const CLIENTS: ClientLogo[] = [
  { id: '1', name: 'CATCH' },
  { id: '2', name: 'CLIPSAL SOLAR' },
  { id: '3', name: 'HEARING AUSTRALIA' },
];

export default function AboutSection() {
  const hasClients = CLIENTS && CLIENTS.length > 0;
  const count = CLIENTS.length;
  const justifyClass = count === 1 ? 'justify-center' : 'justify-between';

  return (
    <section className="w-full bg-[#070402] text-[#E6E1D7] px-8 md:px-16 pt-6 md:pt-10 pb-20 md:pb-28">
      <div className="max-w-6xl mx-auto">
        
        {/* WHO WE ARE */}
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <span className="font-metropolis text-xs tracking-[0.2em] text-[#E1DACB]/60 uppercase block mb-3 font-bold">
            WHO WE ARE
          </span>
          <p className="font-inter text-sm md:text-base text-[#E6E1D7]/90 leading-relaxed font-light">
            THRTN is a creative production studio based in Mexico, available worldwide. We produce films, photography, and visual experiences for brands that want to make an impression.
          </p>
        </div>

        {hasClients && <div className="w-full h-[1px] bg-[#E1DACB]/10 mb-16" />}

        {/* SOME OF OUR CLIENTS */}
        {hasClients && (
          <div>
            <span className="font-metropolis text-xs tracking-[0.2em] text-[#E1DACB]/60 uppercase block mb-10 font-bold text-center">
              SOME OF OUR CLIENTS
            </span>

            <div className={`flex flex-wrap items-center ${justifyClass} gap-y-10 gap-x-8 w-full`}>
              {CLIENTS.map((client) => (
                <div 
                  key={client.id}
                  className="flex items-center justify-center p-4 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 min-w-[140px] md:min-w-[180px] flex-1 max-w-[250px]"
                >
                  {client.logoUrl ? (
                    <img src={client.logoUrl} alt={client.name} className="max-h-10 w-auto object-contain" />
                  ) : (
                    <span className="font-kiona text-base md:text-lg tracking-widest text-[#E6E1D7] text-center">
                      {client.name}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}