import React from 'react';
import { motion } from 'motion/react';
import { MonitorSmartphone, Zap, AppWindow, Briefcase, Building2 } from 'lucide-react';

export default function BentoFeatures() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="py-16 container-custom"
    >
      <div className="flex flex-col items-center text-center gap-4 mb-12 max-w-2xl mx-auto">
        <div>
          <span className="text-tertiary text-sm uppercase tracking-widest font-bold">Servicios</span>
          <h2 className="text-3xl md:text-4xl font-bold text-on-surface mt-2">Construido para escalar tu visión.</h2>
        </div>
        <p className="text-on-surface-variant max-w-md">
          Transformamos tus ideas en herramientas digitales que impulsan el crecimiento y optimizan tu tiempo.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="md:col-span-8 glass-card rounded-2xl p-8 flex flex-col justify-between items-center text-center group hover:border-primary/50 transition-all duration-500 min-h-[400px] relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="flex flex-col items-center relative z-10">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-500 shadow-[0_0_30px_rgba(129,140,248,0.2)]">
              <MonitorSmartphone size={32} />
            </div>
            <h3 className="text-3xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-white to-white/70 mb-3">Desarrollo Web Responsivo</h3>
            <p className="text-on-surface-variant max-w-md text-lg">Creamos páginas web modernas, rápidas y adaptables a cualquier dispositivo, asegurando la mejor experiencia para tus usuarios.</p>
          </div>
          <div className="mt-8 h-48 w-full bg-surface-container-lowest/50 backdrop-blur-md rounded-xl border border-outline-variant/30 flex p-4 gap-4 overflow-hidden relative z-10">
             <div className="flex-3 flex flex-col gap-2 rounded-lg shadow-sm border border-outline-variant/20 overflow-hidden bg-surface-container-high/50">
                <div className="h-6 bg-surface-container-low border-b border-outline-variant/20 flex gap-1.5 items-center px-3">
                   <div className="w-2 h-2 rounded-full bg-outline-variant/50"></div>
                   <div className="w-2 h-2 rounded-full bg-outline-variant/50"></div>
                </div>
                <div className="flex-1 p-3 flex flex-col gap-3">
                   <div className="h-1/3 bg-primary/30 rounded-md"></div>
                   <div className="flex gap-3 h-2/3">
                      <div className="flex-2 bg-outline-variant/20 rounded-md"></div>
                      <div className="flex-1 bg-outline-variant/20 rounded-md"></div>
                   </div>
                </div>
             </div>
             <div className="flex-1 flex flex-col gap-2 rounded-lg shadow-md border border-outline-variant/20 overflow-hidden bg-surface-container-high/50">
                <div className="h-4 border-b border-outline-variant/20 flex justify-center items-center">
                   <div className="w-4 h-0.5 rounded-full bg-outline-variant/50"></div>
                </div>
                <div className="flex-1 p-2 flex flex-col gap-2">
                   <div className="h-1/4 bg-primary/30 rounded-sm"></div>
                   <div className="flex-1 bg-outline-variant/20 rounded-sm"></div>
                   <div className="flex-1 bg-outline-variant/20 rounded-sm"></div>
                </div>
             </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="md:col-span-4 glass-card rounded-2xl p-8 flex flex-col items-center text-center hover:border-secondary/50 transition-all duration-500 relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-linear-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary mb-6 group-hover:scale-110 group-hover:bg-secondary/20 transition-all duration-500 shadow-[0_0_30px_rgba(45,212,191,0.2)] relative z-10">
            <Zap size={32} />
          </div>
          <h3 className="text-3xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-white to-white/70 mb-3 relative z-10">Automatizaciones</h3>
          <p className="text-on-surface-variant grow text-lg relative z-10">Optimizamos tus procesos repetitivos. Conectamos tus herramientas para que trabajen por ti.</p>
          <div className="mt-8 pt-6 border-t border-outline-variant/30 flex flex-col gap-4 grow justify-end w-full relative z-10">
            <div className="flex items-center justify-between opacity-80 px-2">
              <div className="w-12 h-12 rounded-xl bg-surface-container-low border border-outline-variant/50 flex items-center justify-center">
                <AppWindow size={20} className="text-on-surface-variant" />
              </div>
              <div className="flex-1 h-px bg-outline-variant relative mx-3">
                <div className="absolute right-1/2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-secondary/80 animate-ping opacity-75"></div>
                <div className="absolute right-1/2 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-secondary"></div>
                <div className="absolute right-0 -mt-1 w-2 h-2 border-t-2 border-r-2 border-outline-variant transform rotate-45"></div>
              </div>
              <div className="w-12 h-12 rounded-xl bg-surface-container-low border border-outline-variant/50 flex items-center justify-center">
                <Zap size={20} className="text-secondary" />
              </div>
            </div>
            <div className="flex justify-between items-center text-secondary font-bold cursor-pointer hover:gap-2 transition-all mt-4">
              <span>Explorar</span>
              <span className="text-xl">→</span>
            </div>
          </div>
        </motion.div>

        {[
          { icon: AppWindow, color: 'text-tertiary', bg: 'bg-tertiary/10', title: 'Mejora de Apps', desc: 'Modernizamos y optimizamos tus aplicaciones existentes.' },
          { icon: Briefcase, color: 'text-primary', bg: 'bg-primary/10', title: 'Para Emprendedores', desc: 'Soluciones accesibles e ideales para hacer despegar tu negocio.' },
          { icon: Building2, color: 'text-secondary', bg: 'bg-secondary/10', title: 'Para Empresas', desc: 'Arquitecturas robustas diseñadas para soportar grandes escalas.' }
        ].map((feat, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="md:col-span-4 glass-card rounded-2xl p-8 hover:-translate-y-2 transition-all duration-500 flex flex-col items-center text-center group relative overflow-hidden"
          >
            <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 bg-linear-to-b from-transparent to-${feat.color.split('-')[1]} transition-opacity duration-500`}></div>
            <div className={`w-14 h-14 rounded-2xl ${feat.bg} flex items-center justify-center ${feat.color} mb-6 group-hover:scale-110 transition-transform duration-500 relative z-10`}>
              <feat.icon size={24} />
            </div>
            <h3 className="text-lg text-on-surface font-extrabold uppercase tracking-wide mb-3 relative z-10">{feat.title}</h3>
            <p className="text-on-surface-variant relative z-10 leading-relaxed">{feat.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
