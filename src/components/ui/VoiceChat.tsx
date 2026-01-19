"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Mic, MicOff, Volume2, VolumeX, Send, Sparkles } from 'lucide-react';
import { Button } from './Button';
import { motion, AnimatePresence } from 'framer-motion';

// Types for Speech Recognition
interface IWindow extends Window {
    webkitSpeechRecognition: any;
    SpeechRecognition: any;
}

type Message = {
    role: 'bot' | 'user';
    text: string;
};

export const VoiceChat = () => {
    const [messages, setMessages] = useState<Message[]>([
        { role: 'bot', text: 'Hola, soy el asistente IA de THRTN. ¿En qué puedo ayudarte hoy?' }
    ]);
    const [isListening, setIsListening] = useState(false);
    const [isSpeaking, setIsSpeaking] = useState(false);
    const [inputText, setInputText] = useState('');
    const [recognition, setRecognition] = useState<any>(null);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    // Initial scroll to bottom
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    // Initialize Speech Recognition
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const { webkitSpeechRecognition, SpeechRecognition } = window as unknown as IWindow;
            const SpeechRecognitionConstructor = SpeechRecognition || webkitSpeechRecognition;

            if (SpeechRecognitionConstructor) {
                const implementation = new SpeechRecognitionConstructor();
                implementation.continuous = false;
                implementation.lang = 'es-MX';
                implementation.interimResults = false;

                implementation.onstart = () => setIsListening(true);
                implementation.onend = () => setIsListening(false);
                implementation.onresult = (event: any) => {
                    const transcript = event.results[0][0].transcript;
                    handleUserMessage(transcript);
                };

                setRecognition(implementation);
            }
        }
    }, []);

    const speak = (text: string) => {
        if ('speechSynthesis' in window) {
            window.speechSynthesis.cancel(); // Stop current speech
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = 'es-MX';
            utterance.rate = 1.0;
            utterance.pitch = 1.0;

            // Attempt to select a better voice
            const voices = window.speechSynthesis.getVoices();
            console.log("Available voices:", voices.map(v => v.name)); // For debugging

            // Priority list of voices
            const preferredVoices = [
                'Google español',
                'Google español de Estados Unidos',
                'Microsoft Sabina Desktop',
                'Microsoft Mexico',
                'Paulina',
                'Monica',
                'Dalia'
            ];

            const selectedVoice = voices.find(voice =>
                preferredVoices.some(preferred => voice.name.includes(preferred))
            ) || voices.find(voice => voice.lang.includes('es'));

            if (selectedVoice) {
                utterance.voice = selectedVoice;
            }

            utterance.onstart = () => setIsSpeaking(true);
            utterance.onend = () => setIsSpeaking(false);

            window.speechSynthesis.speak(utterance);
        }
    };

    const getBotResponse = (input: string): string => {
        const lowerInput = input.toLowerCase();

        // --- INTENTS & KNOWLEDGE BASE ---

        // 1. BRAND & PHILOSOPHY
        if (lowerInput.match(/thrtn|qué es|quiénes son|quiénes sois|filosofía|marca/)) {
            return "THRTN (Thirteen) es un ecosistema digital de precisión. No somos una agencia tradicional; diseñamos sistemas que transforman el caos en ventaja competitiva. Nos enfocamos en la estética de lujo y la funcionalidad absoluta.";
        }

        // 2. TECH SERVICES - GENERAL
        if (lowerInput.match(/tech|tecnología|qué hacéis|servicios tech|desarrollo/)) {
            return "En nuestra división Tech, construimos infraestructura digital. Ofrecemos Desarrollo Web (Landing pages y sitios completos), Agentes de IA autónomos y sistemas de automatización para escalar operaciones.";
        }

        // 3. TECH SERVICES - PLANS DETAIL
        if (lowerInput.match(/landing|opción 1|plan 1|una página/)) {
            return "La Opción 1 es nuestra 'Landing Page'. Un sitio de una sola vista diseñado para convertir visitas en clientes. Ideal para lanzar productos o captar leads. Incluye hosting gratuito y estructura de hasta 5 secciones.";
        }
        if (lowerInput.match(/web completa|opción 2|plan 2|institucional|empresa/)) {
            return "La Opción 2 es la 'Web Completa'. Un sitio corporativo de hasta 5 páginas (Inicio, Nosotros, Servicios, etc.). Es la opción recomendada para marcas establecidas que buscan una presencia sólida.";
        }
        if (lowerInput.match(/personalizada|custom|opción 3|plan 3|tienda|ecommerce|app/)) {
            return "La Opción 3 es 'Custom Dev'. Aquí construimos lo que imagines: Tiendas en línea, Aplicaciones Web (SaaS), bases de datos complejas e integraciones profundas con IA. Este servicio se cotiza a medida.";
        }

        // 4. REAL ESTATE DIVISION
        if (lowerInput.match(/real estate|inmobiliaria|propiedades|casas|recorridos|360/)) {
            return "Nuestra división de Real Estate eleva la experiencia de venta. Creamos Recorridos Virtuales 360° interactivos, Tours Cinemáticos 4K y Fotografía HDR. Puedes ver un ejemplo real en nuestra sección de Real Estate.";
        }
        if (lowerInput.match(/ventaja|por qué|beneficio/)) {
            return "La ventaja inmersiva es clave: nuestros tours aumentan el tiempo de permanencia de los clientes y filtran prospectos reales, permitiéndote vender 24/7 sin visitas físicas innecesarias.";
        }

        // 5. STUDIO DIVISION
        if (lowerInput.match(/studio|estudio|foto|video|producción|contenido/)) {
            return "THRTN Studio es nuestra casa productora. Nos especializamos en narrativa visual de alto impacto: fotografía editorial, producción de video comercial y dirección de arte para marcas que buscan diferenciarse.";
        }

        // 6. PRICING & QUOTES (Generic)
        if (lowerInput.match(/precio|costo|cuánto cuesta|cotización/)) {
            return "Nuestros precios dependen del alcance. Las Webs Estáticas (Landing y Completa) tienen costos muy competitivos ya que incluyen hosting gratuito. Para proyectos medida o servicios de estudio, necesitamos evaluar tus requerimientos.";
        }

        // 7. CONTACT & ACTION
        if (lowerInput.match(/contacto|contactar|teléfono|whatsapp|correo|email|dónde están|ubicación/)) {
            return "Estamos ubicados en Colima, México, pero trabajamos globalmente. Puedes contactarnos directo por el botón de WhatsApp en el pie de página, o agendar una consulta de video ahora mismo con el botón 'Agendar'.";
        }
        if (lowerInput.match(/agendar|reunión|cita|demo/)) {
            return "¡Excelente idea! Haz clic en el botón 'Agendar Consulta' o 'Agendar Demostración' para abrir mi calendario y elegir el horario que mejor te funcione.";
        }

        // 8. CHATBOT META-INFO
        if (lowerInput.match(/eres real|eres humano|quién eres/)) {
            return "Soy un agente de Inteligencia Artificial diseñado por THRTN. Estoy aquí para guiarte a través de nuestro ecosistema de servicios.";
        }

        // 9. GREETINGS & SMALL TALK
        if (lowerInput.match(/hola|buenos días|buenas tardes|buenas noches|qué tal/)) {
            return "¡Hola! Bienvenido al ecosistema THRTN. ¿Te interesa potenciar tu marca con tecnología o contenido visual?";
        }
        if (lowerInput.match(/gracias|adiós|bye|hasta luego/)) {
            return "Fue un placer ayudarte. Aquí estaré si necesitas algo más para escalar tu visión. ¡Hasta pronto!";
        }

        // DEFAULT FALLBACK
        return "Entiendo. Tengo información detallada sobre Desarrollo Web, Real Estate, Producción Audiovisual e IA. ¿Podrías preguntarme sobre alguna de esas áreas específicas?";
    };

    const handleUserMessage = (text: string) => {
        if (!text.trim()) return;

        const updatedMessages = [...messages, { role: 'user', text } as Message];
        setMessages(updatedMessages);
        setInputText('');

        // Process response
        setTimeout(() => {
            const response = getBotResponse(text);
            setMessages(prev => [...prev, { role: 'bot', text: response }]);
            speak(response);
        }, 500);
    };

    const toggleListening = () => {
        if (!recognition) return;

        if (isListening) {
            recognition.stop();
        } else {
            // Stop speaking if listening starts
            window.speechSynthesis.cancel();
            setIsSpeaking(false);
            recognition.start();
        }
    };

    return (
        <div className="relative h-[400px] md:h-[500px] bg-white/5 rounded-2xl border border-white/10 backdrop-blur-md overflow-hidden flex flex-col font-sans shadow-2xl shadow-primary/10">
            {/* Header */}
            <div className="p-4 border-b border-white/5 bg-white/5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="relative flex h-3 w-3">
                        <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${isSpeaking ? 'bg-green-400' : 'bg-primary'} opacity-75`}></span>
                        <span className={`relative inline-flex rounded-full h-3 w-3 ${isSpeaking ? 'bg-green-500' : 'bg-primary'}`}></span>
                    </div>
                    <span className="text-xs font-mono text-white/70 tracking-widest uppercase">
                        {isSpeaking ? 'HABLANDO...' : isListening ? 'ESCUCHANDO...' : 'THRTN AI AGENT'}
                    </span>
                </div>
                <div className="flex gap-2">
                    <button onClick={() => window.speechSynthesis.cancel()} className="p-2 hover:bg-white/10 rounded-full text-white/50 hover:text-white transition-colors">
                        {isSpeaking ? <Volume2 size={16} /> : <VolumeX size={16} />}
                    </button>
                </div>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
                <AnimatePresence>
                    {messages.map((msg, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                            <div className={`
                                max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed
                                ${msg.role === 'user'
                                    ? 'bg-primary text-white rounded-br-none'
                                    : 'bg-white/10 text-white/90 rounded-bl-none border border-white/5'}
                            `}>
                                {msg.text}
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
                <div ref={messagesEndRef} />
            </div>

            {/* Visualizer / Input Area */}
            <div className="p-4 bg-black/20 border-t border-white/5">
                {/* Waveform Animation (Simulated) */}
                {(isListening || isSpeaking) && (
                    <div className="flex justify-center items-center gap-1 h-8 mb-4">
                        {[1, 2, 3, 4, 5, 4, 3, 2, 1].map((value, index) => (
                            <motion.div
                                key={index}
                                animate={{ height: [10, 20 + Math.random() * 20, 10] }}
                                transition={{ duration: 0.5, repeat: Infinity, delay: index * 0.1 }}
                                className={`w-1 rounded-full ${isListening ? 'bg-primary' : 'bg-green-500'}`}
                            />
                        ))}
                    </div>
                )}

                <div className="flex gap-2">
                    <button
                        onClick={toggleListening}
                        className={`
                            p-3 rounded-full transition-all duration-300 flex items-center justify-center
                            ${isListening
                                ? 'bg-red-500/20 text-red-500 border border-red-500/50 hover:bg-red-500/30'
                                : 'bg-primary/20 text-primary border border-primary/50 hover:bg-primary/30'}
                        `}
                    >
                        {isListening ? <MicOff size={20} /> : <Mic size={20} />}
                    </button>

                    <form
                        className="flex-1 flex gap-2"
                        onSubmit={(e) => {
                            e.preventDefault();
                            handleUserMessage(inputText);
                        }}
                    >
                        <input
                            type="text"
                            value={inputText}
                            onChange={(e) => setInputText(e.target.value)}
                            placeholder="Escribe o usa el micrófono..."
                            className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 text-sm text-white focus:outline-none focus:border-primary/50 transition-colors placeholder:text-white/20"
                        />
                        <button
                            type="submit"
                            disabled={!inputText.trim()}
                            className="p-3 bg-white/10 text-white rounded-full hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                        >
                            <Send size={18} />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};
