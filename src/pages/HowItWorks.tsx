import React from 'react';
import { useAppContext } from '../AppContext';
import { motion } from 'motion/react';
import SEO from '../components/SEO';
import { Network, Cpu, Rocket, ArrowRight } from 'lucide-react';

export default function HowItWorks() {
  const { setCurrentPage } = useAppContext();

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-24 container-custom"
    >
      <SEO 
        title="Servicios y Soluciones Técnicas" 
        description="Explora nuestros servicios de Ingeniería de Software, Diseño Web Premium y Automatización de Procesos con Inteligencia Artificial. Conoce cómo transformamos tu flujo digital."
        keywords="desarrollo web, aplicaciones a medida, integraciones api, chatbots de ia, automatizacion de flujos, scraping, optimizacion seo"
      />
      <div className="text-center mb-24">
        <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-4 border border-primary/20 uppercase tracking-widest">
          Soluciones Digitales
        </span>
        <h1 className="text-4xl md:text-6xl font-bold text-on-surface mb-6">Nuestros Servicios</h1>
        <p className="text-lg text-on-surface-variant max-w-2xl mx-auto">
          Adaptamos la tecnología a tu negocio. Desde páginas web modernas hasta automatizaciones complejas, te ayudamos a crecer.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
        {/* Step 1 */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="md:col-span-7 group"
        >
          <div className="glass-card rounded-xl p-8 h-full flex flex-col hover:border-primary/50 transition-all duration-300">
            <div className="flex justify-between items-start mb-12">
              <div className="w-16 h-16 rounded-xl bg-surface-container-highest flex items-center justify-center text-primary border border-outline-variant group-hover:scale-110 transition-transform">
                <Network size={32} />
              </div>
              <span className="font-display text-6xl opacity-10 font-bold select-none">01</span>
            </div>
            <div className="flex-grow flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-on-surface mb-3">Desarrollo Web & Apps</h3>
              <p className="text-on-surface-variant mb-6 text-balance leading-relaxed">
                Diseñamos y desarrollamos páginas web responsivas y aplicaciones a medida. Optimizadas para velocidad, SEO y conversión, asegurando la mejor experiencia para tus usuarios en cualquier dispositivo.
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {['React / Next.js', 'UI/UX', 'Mobile First'].map(tag => (
                  <span key={tag} className="px-3 py-1 bg-surface-variant/50 rounded-full border border-outline-variant text-xs font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="md:col-span-5 h-64 md:h-auto"
        >
          <div className="w-full h-full rounded-xl overflow-hidden border border-outline-variant bg-surface-container-highest relative flex items-center justify-center group">
             {/* Abstract visual representation */}
             <div className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary via-surface to-background"></div>
             <Network size={80} className="text-primary/50 group-hover:scale-110 transition-transform duration-700" />
          </div>
        </motion.div>

        {/* Step 2 */}
        <motion.div 
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="md:col-span-5 h-64 md:h-auto order-last md:order-none"
        >
          <div className="w-full h-full rounded-xl overflow-hidden border border-outline-variant bg-surface-container-highest relative flex items-center justify-center group">
             <div className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-secondary via-surface to-background"></div>
             <Cpu size={80} className="text-secondary/50 group-hover:scale-110 transition-transform duration-700" />
          </div>
        </motion.div>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="md:col-span-7 group"
        >
          <div className="glass-card rounded-xl p-8 h-full flex flex-col hover:border-secondary/50 transition-all duration-300">
            <div className="flex justify-between items-start mb-12">
              <div className="w-16 h-16 rounded-xl bg-surface-container-highest flex items-center justify-center text-secondary border border-outline-variant group-hover:scale-110 transition-transform">
                <Cpu size={32} />
              </div>
              <span className="font-display text-6xl opacity-10 font-bold select-none">02</span>
            </div>
            <div className="flex-grow flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-on-surface mb-3">Automatización de Procesos</h3>
              <p className="text-on-surface-variant mb-6 text-balance leading-relaxed">
                Eliminamos el trabajo manual repetitivo. Conectamos tus herramientas (CRM, ERP, emails, bases de datos) para que trabajen en sincronía, ahorrándote tiempo y reduciendo errores humanos.
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full border-2 border-surface bg-primary/20"></div>
                  <div className="w-8 h-8 rounded-full border-2 border-surface bg-secondary/20"></div>
                  <div className="w-8 h-8 rounded-full border-2 border-surface bg-tertiary/20"></div>
                </div>
                <span className="text-xs text-on-surface-variant font-medium">Zapier / Make / APIs Custom</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Step 3 */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="md:col-span-12 group"
        >
          <div className="glass-card rounded-xl p-8 h-full grid md:grid-cols-2 gap-8 hover:border-tertiary/50 transition-all duration-300 relative overflow-hidden">
            <div className="absolute right-0 bottom-0 w-64 h-64 bg-tertiary/5 blur-[100px] -z-10"></div>
            
            <div className="flex flex-col h-full">
              <div className="flex justify-between items-start mb-12">
                <div className="w-16 h-16 rounded-xl bg-surface-container-highest flex items-center justify-center text-tertiary border border-outline-variant group-hover:scale-110 transition-transform">
                  <Rocket size={32} />
                </div>
                <span className="font-display text-6xl opacity-10 font-bold select-none">03</span>
              </div>
              <div className="flex-grow flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-on-surface mb-3">Mejora y Escalamiento</h3>
                <p className="text-on-surface-variant text-balance leading-relaxed">
                  No solo construimos; evolucionamos tu producto. Ya sea optimizando el rendimiento de una app existente, mejorando la seguridad, o agregando nuevas funcionalidades para escalar a nivel corporativo.
                </p>
              </div>
              <div className="mt-12 pt-8 border-t border-outline-variant/30">
                <button className="flex items-center gap-2 text-sm font-bold text-tertiary hover:gap-4 transition-all">
                  Ver portafolio de proyectos
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden border border-outline-variant bg-surface-container-low p-4 flex flex-col gap-4">
              {[70, 85, 60].map((w, i) => (
                <div key={i} className="h-12 bg-surface-variant/30 rounded flex items-center px-4 justify-between">
                  <div className="h-2 bg-outline-variant rounded" style={{ width: `${w}%` }}></div>
                  <div className="w-12 h-4 bg-tertiary/20 rounded"></div>
                </div>
              ))}
              <div className="flex gap-4 mt-2">
                <div className="flex-1 py-4 bg-tertiary/10 rounded-lg border border-tertiary/20 flex flex-col items-center justify-center">
                  <span className="text-tertiary text-2xl font-bold">100%</span>
                  <span className="text-[10px] opacity-60 uppercase font-bold mt-1">Soporte</span>
                </div>
                <div className="flex-1 py-4 bg-secondary/10 rounded-lg border border-secondary/20 flex flex-col items-center justify-center">
                  <span className="text-secondary text-2xl font-bold">99.9%</span>
                  <span className="text-[10px] opacity-60 uppercase font-bold mt-1">Uptime</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="mt-24 text-center">
        <div className="glass-card p-12 rounded-2xl border border-primary/20 relative max-w-3xl mx-auto">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-primary/20 rounded-full blur-2xl"></div>
          <h2 className="text-3xl font-bold text-on-surface mb-4">¿Listo para transformar tu negocio?</h2>
          <p className="text-on-surface-variant mb-8">
            Hablemos sobre tus objetivos y cómo nuestras soluciones pueden ayudarte a alcanzarlos más rápido.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => setCurrentPage('auth')} className="px-8 py-3 bg-primary text-on-primary font-bold rounded-xl hover:bg-primary-container transition-all shadow-lg shadow-primary/20">
              Solicitar Presupuesto
            </button>
            <button onClick={() => setCurrentPage('pricing')} className="px-8 py-3 border border-outline-variant hover:bg-surface-variant/50 font-bold rounded-xl transition-all">
              Ver Planes
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
