import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  X, 
  Send, 
  CheckCircle2, 
  MessageSquare, 
  ArrowRight, 
  ShieldCheck, 
  TrendingUp, 
  Zap, 
  Users,
  Clock
} from 'lucide-react';

export default function FloatingConsultation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  
  // Form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectDesc: '',
    salesRange: 'entre-5k-y-20k',
    bottleneck: 'funnel-automatizacion'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate premium server-side action delay
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      projectDesc: '',
      salesRange: 'entre-5k-y-20k',
      bottleneck: 'funnel-automatizacion'
    });
    setIsSubmitted(false);
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating Action Button (FAB) */}
      <div className="fixed bottom-6 right-6 z-50">
        <motion.button
          id="fab-consultation-trigger"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          className="relative group flex items-center gap-2.5 px-5 py-3.5 bg-gradient-to-r from-primary to-secondary text-on-primary rounded-full font-bold shadow-[0_10px_30px_rgba(124,58,237,0.4)] hover:brightness-110 transition-all cursor-pointer text-sm"
        >
          {/* Active indicator dot */}
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500"></span>
          </span>

          <Sparkles size={16} className="animate-pulse" />
          <span>Consulta Técnica</span>
          
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-out whitespace-nowrap text-xs opacity-0 group-hover:opacity-100 font-medium">
            (Quedan 2 cupos)
          </span>
        </motion.button>
      </div>

      {/* Slide-out/Floating Panel Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop filter overlay for high-end look */}
            <motion.div
              id="consultation-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
            />

            {/* Panel container */}
            <motion.div
              id="consultation-panel"
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.95 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
              className="fixed bottom-24 right-6 w-full max-w-md bg-surface-container border border-outline-variant rounded-2xl shadow-2xl z-50 overflow-hidden"
            >
              {/* Header */}
              <div className="relative bg-gradient-to-r from-surface-container-high to-surface-container p-6 border-b border-outline-variant/60">
                <div className="absolute top-4 right-4">
                  <button 
                    onClick={() => setIsOpen(false)}
                    className="p-1.5 rounded-full hover:bg-surface-variant text-outline hover:text-on-surface transition-colors cursor-pointer"
                  >
                    <X size={16} />
                  </button>
                </div>

                <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wider mb-2">
                  <Sparkles size={12} className="animate-pulse" />
                  <span>Alianza Estratégica rAIces</span>
                </div>
                <h3 className="text-xl font-black text-on-surface tracking-tight leading-tight">
                  Solicitar Consulta Técnica
                </h3>
                <p className="text-xs text-on-surface-variant mt-1.5 leading-relaxed">
                  Analizaremos tu embudo de ventas actual, automatizaciones e infraestructura técnica para diseñar la arquitectura ideal de tu negocio.
                </p>

                {/* Scarcity Notice */}
                <div className="mt-4 flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 px-3 py-2 rounded-lg">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                  </span>
                  <p className="text-[11px] text-amber-500 font-medium">
                    Solo <strong>1 cupo libre</strong> disponible para el Revenue Share de este trimestre.
                  </p>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 max-h-[60vh] overflow-y-auto">
                <AnimatePresence mode="wait">
                  {!isSubmitted ? (
                    <motion.form 
                      key="form"
                      onSubmit={handleSubmit}
                      className="space-y-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      {/* Name input */}
                      <div>
                        <label className="block text-xs font-bold text-on-surface uppercase tracking-wider mb-1.5">
                          Tu Nombre
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Ej. Carlos Mendoza"
                          className="w-full px-3.5 py-2.5 bg-surface-container-high border border-outline-variant rounded-xl text-sm text-on-surface placeholder:text-outline focus:outline-none focus:border-primary transition-all"
                        />
                      </div>

                      {/* Email input */}
                      <div>
                        <label className="block text-xs font-bold text-on-surface uppercase tracking-wider mb-1.5">
                          Correo Electrónico
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="ejemplo@tuempresa.com"
                          className="w-full px-3.5 py-2.5 bg-surface-container-high border border-outline-variant rounded-xl text-sm text-on-surface placeholder:text-outline focus:outline-none focus:border-primary transition-all"
                        />
                      </div>

                      {/* Current sales range */}
                      <div>
                        <label className="block text-xs font-bold text-on-surface uppercase tracking-wider mb-1.5">
                          Facturación Mensual Estimada
                        </label>
                        <select
                          value={formData.salesRange}
                          onChange={(e) => setFormData({ ...formData, salesRange: e.target.value })}
                          className="w-full px-3.5 py-2.5 bg-surface-container-high border border-outline-variant rounded-xl text-sm text-on-surface focus:outline-none focus:border-primary transition-all cursor-pointer"
                        >
                          <option value="idea-inicio">Aún no facturo / Fase de idea</option>
                          <option value="menos-de-5k">Menos de $5,000 USD / mes</option>
                          <option value="entre-5k-y-20k">Entre $5,000 y $20,000 USD / mes</option>
                          <option value="mas-de-20k">Más de $20,000 USD / mes</option>
                        </select>
                      </div>

                      {/* Bottleneck select */}
                      <div>
                        <label className="block text-xs font-bold text-on-surface uppercase tracking-wider mb-1.5">
                          ¿Cuál es tu mayor cuello de botella técnico?
                        </label>
                        <select
                          value={formData.bottleneck}
                          onChange={(e) => setFormData({ ...formData, bottleneck: e.target.value })}
                          className="w-full px-3.5 py-2.5 bg-surface-container-high border border-outline-variant rounded-xl text-sm text-on-surface focus:outline-none focus:border-primary transition-all cursor-pointer"
                        >
                          <option value="funnel-automatizacion">Embudos y automatizaciones débiles</option>
                          <option value="infraestructura-lenta">Web lenta o caída de servidores</option>
                          <option value="conversion-copy">Falta de conversión o buen copywriting</option>
                          <option value="integracion-ia">Necesito integrar Inteligencia Artificial</option>
                          <option value="otro">Otro problema técnico complejo</option>
                        </select>
                      </div>

                      {/* Brief description */}
                      <div>
                        <label className="block text-xs font-bold text-on-surface uppercase tracking-wider mb-1.5">
                          Cuéntanos brevemente sobre tu proyecto o web
                        </label>
                        <textarea
                          rows={2}
                          value={formData.projectDesc}
                          onChange={(e) => setFormData({ ...formData, projectDesc: e.target.value })}
                          placeholder="Ej. Vendo cursos online y mi plataforma de email marketing no está bien integrada con la pasarela..."
                          className="w-full px-3.5 py-2.5 bg-surface-container-high border border-outline-variant rounded-xl text-sm text-on-surface placeholder:text-outline focus:outline-none focus:border-primary transition-all resize-none"
                        />
                      </div>

                      {/* Submit */}
                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-3.5 bg-primary text-on-primary rounded-xl font-bold hover:brightness-110 disabled:opacity-55 transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2 cursor-pointer text-sm"
                      >
                        {loading ? (
                          <>
                            <div className="w-4 h-4 border-2 border-on-primary border-t-transparent rounded-full animate-spin"></div>
                            <span>Enviando postulación...</span>
                          </>
                        ) : (
                          <>
                            <span>Postular Ahora</span>
                            <Send size={14} />
                          </>
                        )}
                      </button>

                      <div className="flex items-center justify-center gap-1.5 text-[10px] text-outline text-center pt-1">
                        <ShieldCheck size={12} />
                        <span>Tus datos están protegidos y son 100% confidenciales.</span>
                      </div>
                    </motion.form>
                  ) : (
                    <motion.div
                      key="success"
                      className="text-center py-6 space-y-4"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <div className="w-14 h-14 bg-green-500/10 border border-green-500/30 rounded-full flex items-center justify-center mx-auto text-green-500 mb-2">
                        <CheckCircle2 size={32} />
                      </div>
                      
                      <h4 className="text-lg font-black text-on-surface">
                        ¡Postulación Registrada, {formData.name.split(' ')[0]}!
                      </h4>
                      
                      <p className="text-xs text-on-surface-variant leading-relaxed max-w-xs mx-auto">
                        Hemos recibido con éxito los detalles de tu proyecto. Nuestro equipo técnico revisará tu sitio y herramientas en las próximas horas.
                      </p>

                      <div className="bg-surface-container-high/60 border border-outline-variant/40 rounded-xl p-4 text-left space-y-2.5 max-w-sm mx-auto">
                        <span className="text-[10px] font-bold uppercase text-primary tracking-widest block">Próximos Pasos:</span>
                        <div className="flex gap-2 items-start text-xs text-on-surface-variant">
                          <Clock size={14} className="text-primary shrink-0 mt-0.5" />
                          <span><strong>Revisión Técnica:</strong> Analizaremos tus sistemas actuales sin interrumpir nada.</span>
                        </div>
                        <div className="flex gap-2 items-start text-xs text-on-surface-variant">
                          <MessageSquare size={14} className="text-primary shrink-0 mt-0.5" />
                          <span><strong>Contacto:</strong> Recibirás un correo directo de nuestro ingeniero principal con tu reporte inicial.</span>
                        </div>
                      </div>

                      <button
                        onClick={handleReset}
                        className="mt-4 px-6 py-2.5 border border-outline text-on-surface rounded-xl font-bold hover:bg-surface-variant/50 transition-all text-xs cursor-pointer"
                      >
                        Entendido, cerrar
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
