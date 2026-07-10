import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, Activity, Rocket, Terminal, Infinity, Code } from 'lucide-react';
import { useAppContext } from '../AppContext';
import Logo from './Logo';

export default function HeroSection() {
  const { setCurrentPage } = useAppContext();

  return (
    <>
      <section className="relative pt-24 pb-20 md:pt-36 md:pb-32 overflow-hidden">
        {/* Dynamic Background Elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] pointer-events-none -z-10 mix-blend-screen animate-pulse" style={{ animationDuration: '10s' }}></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px] pointer-events-none -z-10 mix-blend-screen"></div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
            
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.1 }}
              className="mb-10 relative flex justify-center"
            >
              <div className="absolute inset-0 bg-primary/20 blur-[60px] rounded-full scale-150 animate-pulse pointer-events-none" style={{ animationDuration: '4s' }} />
              <Logo size="lg" className="relative z-10" />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-container-high/80 backdrop-blur-md border border-outline-variant text-sm font-medium text-primary mb-8 shadow-[0_0_20px_rgba(129,140,248,0.2)]"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
              </span>
              Agencia IA y Desarrollo de Alto Rendimiento
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-linear-to-br from-white via-white to-white/40 leading-tight mb-6 tracking-tight"
            >
              Tu Socio de Ingeniería <br className="hidden md:block" />
              para el Futuro Digital
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-on-surface-variant max-w-2xl mx-auto mb-10 leading-relaxed"
            >
              En <strong className="text-white">rAIces</strong> diseñamos y programamos páginas web ultrarrápidas, embudos de venta y automatizaciones con Inteligencia Artificial.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md"
            >
              <button 
                onClick={() => setCurrentPage('auth')}
                className="w-full sm:w-auto px-8 py-4 bg-primary text-on-primary rounded-xl font-bold hover:bg-primary-container transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(129,140,248,0.4)] hover:shadow-[0_0_30px_rgba(129,140,248,0.6)] hover:-translate-y-1"
              >
                Comenzar Proyecto
                <ArrowRight size={20} />
              </button>
              <button className="w-full sm:w-auto px-8 py-4 glass-card text-on-surface rounded-xl font-bold hover:bg-surface-container-highest transition-all flex items-center justify-center gap-2 hover:-translate-y-1">
                Ver Servicios
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto relative px-4 md:px-0 mb-32"
      >
        <div className="glass-card rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-outline-variant transform hover:-translate-y-2 transition-transform duration-500 bg-surface-container/40 aspect-video flex items-center justify-center p-4 md:p-8 backdrop-blur-2xl">
           <div className="w-full h-full flex flex-col md:flex-row gap-4 md:gap-6">
              <div className="flex-1 border border-outline-variant/30 rounded-xl bg-surface-container-highest/60 flex flex-col overflow-hidden shadow-inner backdrop-blur-sm">
                 <div className="h-10 bg-surface-container-low/50 border-b border-outline-variant/30 flex items-center px-4 gap-2">
                    <div className="w-3 h-3 rounded-full bg-error/80"></div>
                    <div className="w-3 h-3 rounded-full bg-tertiary/80"></div>
                    <div className="w-3 h-3 rounded-full bg-secondary/80"></div>
                 </div>
                 <div className="p-6 flex flex-col gap-4 font-mono">
                    <div className="h-4 w-3/4 bg-primary/20 rounded"></div>
                    <div className="h-4 w-1/2 bg-secondary/20 rounded ml-6"></div>
                    <div className="h-4 w-2/3 bg-secondary/20 rounded ml-6"></div>
                    <div className="h-4 w-1/3 bg-primary/20 rounded"></div>
                    <div className="h-4 w-full bg-outline-variant/40 rounded mt-6"></div>
                    <div className="h-4 w-5/6 bg-outline-variant/40 rounded"></div>
                 </div>
              </div>

              <div className="flex-1 hidden sm:flex gap-4 md:gap-6">
                <div className="flex-2 border border-outline-variant/30 rounded-xl bg-surface-container/60 flex flex-col overflow-hidden shadow-xl backdrop-blur-sm">
                   <div className="h-12 bg-surface-container-low/50 border-b border-outline-variant/30 flex items-center px-4 justify-between">
                     <div className="h-4 w-1/4 bg-outline-variant/40 rounded"></div>
                     <div className="flex gap-2">
                        <div className="h-3 w-8 bg-outline-variant/30 rounded"></div>
                        <div className="h-3 w-8 bg-outline-variant/30 rounded"></div>
                     </div>
                   </div>
                   <div className="p-4 flex flex-col gap-4">
                     <div className="h-24 w-full bg-primary/10 rounded-lg"></div>
                     <div className="flex gap-4">
                       <div className="h-20 flex-1 bg-surface-container-high/60 rounded-lg"></div>
                       <div className="h-20 flex-1 bg-surface-container-high/60 rounded-lg"></div>
                     </div>
                   </div>
                </div>
                
                <div className="flex-1 border border-outline-variant/30 rounded-xl bg-surface-container/60 flex flex-col overflow-hidden shadow-2xl mt-12 relative backdrop-blur-sm">
                   <div className="h-10 bg-surface-container-low/50 border-b border-outline-variant/30 flex justify-center items-center">
                     <div className="h-1.5 w-10 bg-outline-variant/50 rounded-full"></div>
                   </div>
                   <div className="p-3 flex flex-col gap-3">
                     <div className="h-16 w-full bg-primary/10 rounded-md"></div>
                     <div className="h-12 w-full bg-surface-container-high/60 rounded-md"></div>
                     <div className="h-12 w-full bg-surface-container-high/60 rounded-md"></div>
                   </div>
                </div>
              </div>
           </div>
        </div>
      </motion.div>

      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="py-16 bg-surface-container-lowest/50 border-y border-outline-variant/30 mb-32 backdrop-blur-sm"
      >
        <div className="container-custom text-center">
          <p className="text-xs text-outline mb-12 uppercase tracking-[0.2em] font-bold">Confiado por Innovadores Globales</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
            {[
              { icon: Activity, name: 'VITALITY' },
              { icon: Rocket, name: 'ORBIT' },
              { icon: Terminal, name: 'SYNTX' },
              { icon: Infinity, name: 'INFINIA' },
              { icon: Code, name: 'BLOCKS' }
            ].map((Brand, i) => (
              <div key={i} className="flex items-center gap-2">
                <Brand.icon size={28} />
                <span className="text-xl font-bold font-display">{Brand.name}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.section>
    </>
  );
}
