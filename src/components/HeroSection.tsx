import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, Zap, TrendingUp } from 'lucide-react';
import { useAppContext } from '../AppContext';
import Logo from './Logo';

export default function HeroSection() {
  const { setCurrentPage } = useAppContext();

  return (
    <>
      <section className="relative pt-28 pb-24 md:pt-44 md:pb-36 overflow-hidden bg-[#faf6f1]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#f5ebe0] via-transparent to-transparent pointer-events-none opacity-60" />

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center">

            <div
              className="mb-12 relative flex justify-center"
            >
              <Logo size="lg" className="relative z-10 drop-shadow-sm" />
            </div>

            <h1
              className="text-5xl md:text-8xl font-extrabold text-[#1a1814] leading-[0.92] mb-8 tracking-tight font-display"
            >
              Tu Socio de Ingeniería <br className="hidden md:block" />
              para el Futuro Digital
            </h1>

            <p
              className="text-xl md:text-2xl text-[#5c5548] max-w-2xl mx-auto mb-12 leading-relaxed font-body"
            >
              En <strong className="text-[#b85c38] font-semibold">rAIces</strong> diseñamos y programamos páginas ultrarrápidas, embudos de venta y automatizaciones con Inteligencia Artificial.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full max-w-lg">
              <button
                onClick={() => setCurrentPage('auth')}
                className="w-full sm:w-auto px-9 py-4.5 bg-[#b85c38] text-white rounded-2xl font-bold hover:bg-[#9a4b2e] transition-all flex items-center justify-center gap-2.5 shadow-[0_8px_30px_rgba(184,92,56,0.25)] hover:-translate-y-0.5 text-base"
              >
                Comenzar Proyecto
                <ArrowRight size={20} strokeWidth={2.5} />
              </button>
              <button
                onClick={() => setCurrentPage('how-it-works')}
                className="w-full sm:w-auto px-9 py-4.5 border-2 border-[#1a1814] text-[#1a1814] rounded-2xl font-bold hover:bg-[#1a1814] hover:text-[#faf6f1] transition-all flex items-center justify-center gap-2.5 text-base"
              >
                Ver Servicios
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Visual evidence — clean editorial illustration */}
      <section className="py-16 md:py-28 bg-[#faf6f1]">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 md:gap-12">
            {[
              {
                label: "Diseño Premium",
                desc: "Cada píxel es intencional. Interfaces que ganan confianza antes de vender.",
                icon: Sparkles,
              },
              {
                label: "Automatización IA",
                desc: "Flujos que trabajan mientras duermes. WhatsApp, email y CRM conectados.",
                icon: Zap,
              },
              {
                label: "Revenue Share",
                desc: "No pagas por horas. Ganamos solo si tú ganas. Incentivos 100% alineados.",
                icon: TrendingUp,
              },
            ].map((item) => (
              <div
                key={item.label}
                className="group p-8 md:p-10 rounded-3xl bg-white border border-[#ece8df] shadow-[0_1px_3px_rgba(26,24,20,0.04)] hover:shadow-[0_8px_30px_rgba(26,24,20,0.08)] hover:-translate-y-1.5 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#faf6f1] border border-[#ece8df] flex items-center justify-center mb-7 text-[#b85c38] shadow-sm">
                  <item.icon size={26} strokeWidth={2} />
                </div>
                <h3 className="text-xl md:text-2xl font-extrabold text-[#1a1814] mb-4 tracking-tight font-display">
                  {item.label}
                </h3>
                <p className="text-[#5c5548] text-sm md:text-base leading-relaxed font-body">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
