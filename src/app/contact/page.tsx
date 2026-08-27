'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ContactPage() {
  const [status, setStatus] = useState<'IDLE' | 'LOADING' | 'SUCCESS' | 'ERROR'>('IDLE');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('LOADING');
    setErrorMessage('');

    const formData = new FormData(e.currentTarget);
    
    // REEMPLAZA ESTE STRING CON TU ACCESS KEY DE WEB3FORMS:
    formData.append('access_key', 'YOUR_WEB3FORMS_ACCESS_KEY_HERE');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setStatus('SUCCESS');
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus('ERROR');
        setErrorMessage(data.message || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setStatus('ERROR');
      setErrorMessage('Network error. Please check your connection.');
    }
  };

  return (
    <main className="min-h-screen bg-[var(--bg-dark)] text-[var(--white-sand)] selection:bg-[var(--cognac)] selection:text-[var(--white-sand)]">
      <Navbar />

      <div className="pt-28 md:pt-36 max-w-3xl mx-auto px-6 md:px-12 pb-24 md:pb-32">
        {/* ENCABEZADO */}
        <div className="mb-12 text-center">
          <span className="font-metropolis text-xs tracking-[0.3em] text-[var(--cognac)] uppercase block mb-4 font-bold">
            GET IN TOUCH
          </span>
          <h1 className="font-metropolis text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight uppercase leading-[1.05] text-[var(--white-sand)] mb-6">
            LET'S BUILD SOMETHING ENDURING.
          </h1>
          <p className="font-inter text-base text-[var(--white-sand)]/70 font-light max-w-xl mx-auto leading-relaxed">
            Have a project or creative inquiry in mind? Fill out the form below to start a conversation.
          </p>
        </div>

        {/* FORMULARIO DE CONTACTO CENTRADO */}
        <div className="bg-[var(--blue-coral)]/10 p-8 md:p-12 rounded-2xl border border-[var(--cognac)]/20 shadow-xl">
          {status === 'SUCCESS' ? (
            <div className="py-12 text-center space-y-4">
              <span className="text-4xl">✓</span>
              <h3 className="font-metropolis text-2xl font-bold uppercase text-[var(--white-sand)]">
                MESSAGE RECEIVED
              </h3>
              <p className="font-inter text-sm text-[var(--white-sand)]/80 max-w-md mx-auto leading-relaxed">
                Thank you for reaching out. We will review your inquiry and get back to you shortly.
              </p>
              <button
                onClick={() => setStatus('IDLE')}
                className="mt-6 font-inter text-xs tracking-widest text-[var(--cognac)] border-b border-[var(--cognac)] uppercase pb-1 font-bold hover:text-[var(--white-sand)] hover:border-[var(--white-sand)] transition-colors"
              >
                SEND ANOTHER MESSAGE
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* NOMBRE */}
              <div>
                <label htmlFor="name" className="block font-metropolis text-xs tracking-widest text-[var(--cognac)] uppercase mb-2 font-bold">
                  YOUR NAME / COMPANY *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="e.g. Oscar Banda"
                  className="w-full bg-[var(--bg-dark)] border border-[var(--cognac)]/30 rounded-lg px-4 py-3 text-sm text-[var(--white-sand)] placeholder:text-[var(--white-sand)]/30 focus:outline-none focus:border-[var(--cognac)] transition-colors"
                />
              </div>

              {/* EMAIL */}
              <div>
                <label htmlFor="email" className="block font-metropolis text-xs tracking-widest text-[var(--cognac)] uppercase mb-2 font-bold">
                  EMAIL ADDRESS *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="e.g. oscar@example.com"
                  className="w-full bg-[var(--bg-dark)] border border-[var(--cognac)]/30 rounded-lg px-4 py-3 text-sm text-[var(--white-sand)] placeholder:text-[var(--white-sand)]/30 focus:outline-none focus:border-[var(--cognac)] transition-colors"
                />
              </div>

              {/* MENSAJE */}
              <div>
                <label htmlFor="message" className="block font-metropolis text-xs tracking-widest text-[var(--cognac)] uppercase mb-2 font-bold">
                  PROJECT DETAILS *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  placeholder="Tell us about your project, timeline, location, or vision..."
                  className="w-full bg-[var(--bg-dark)] border border-[var(--cognac)]/30 rounded-lg px-4 py-3 text-sm text-[var(--white-sand)] placeholder:text-[var(--white-sand)]/30 focus:outline-none focus:border-[var(--cognac)] transition-colors resize-none"
                />
              </div>

              {/* ERRORES */}
              {status === 'ERROR' && (
                <p className="font-inter text-xs text-[var(--rouge-noir)] font-bold bg-[#5B0D18]/20 p-3 rounded border border-[var(--rouge-noir)]/40">
                  {errorMessage}
                </p>
              )}

              {/* BOTÓN SUBMIT */}
              <button
                type="submit"
                disabled={status === 'LOADING'}
                className="w-full font-inter text-xs tracking-widest uppercase font-bold bg-[var(--cognac)] text-[var(--white-sand)] py-4 rounded-lg hover:bg-[var(--rouge-noir)] transition-colors shadow-lg border border-[var(--white-sand)]/10 disabled:opacity-50"
              >
                {status === 'LOADING' ? 'SENDING...' : 'SEND INQUIRY →'}
              </button>
            </form>
          )}
        </div>
      </div>

      <Footer />
    </main>
  );
}