import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Check, Briefcase, Building2, MonitorSmartphone, AppWindow, Zap, Code, RefreshCw } from 'lucide-react';
import { useAppContext } from '../AppContext';

export default function ProjectConfigurator() {
  const { setCurrentPage, setSelectedProject } = useAppContext();

  // Interactive Configurator State
  const [businessType, setBusinessType] = useState<'emprendedor' | 'empresa'>('emprendedor');
  const [needsWeb, setNeedsWeb] = useState(true);
  const [needsEcommerce, setNeedsEcommerce] = useState(false);
  const [needsAutomation, setNeedsAutomation] = useState(false);
  const [needsAppImprovement, setNeedsAppImprovement] = useState(false);
  const [complexity, setComplexity] = useState<'basico' | 'intermedio' | 'avanzado'>('basico');
  const [maintenance, setMaintenance] = useState(true);

  // Recommendation logic
  const getRecommendation = () => {
    let service = "web";
    let planName = "Presencia Web";
    let estTime = "1 a 2 semanas";
    let features: string[] = [];
    let complexityScore = 20;

    if (needsWeb) complexityScore += 20;
    if (needsEcommerce) complexityScore += 25;
    if (needsAutomation) complexityScore += 25;
    if (needsAppImprovement) complexityScore += 30;
    if (complexity === 'intermedio') complexityScore += 15;
    if (complexity === 'avanzado') complexityScore += 30;
    if (maintenance) complexityScore += 10;
    if (businessType === 'empresa') complexityScore += 15;

    complexityScore = Math.min(complexityScore, 100);
    
    if (needsAppImprovement || complexity === 'avanzado' || businessType === 'empresa' || complexityScore > 75) {
      planName = "Solución a Medida";
      estTime = "4 a 8 semanas";
      service = "app";
    } else if (needsEcommerce || (needsWeb && needsAutomation) || complexity === 'intermedio' || complexityScore > 45) {
      planName = "Crecimiento y E-commerce";
      estTime = "2 a 4 semanas";
      service = "ecommerce";
    } else if (needsAutomation && !needsWeb) {
      planName = "Automatización";
      estTime = "1 a 3 semanas";
      service = "automation";
    }

    if (needsWeb) features.push("Diseño Web Responsivo adaptado a todos los dispositivos");
    if (needsEcommerce) features.push("Tienda online con pasarela de pagos integrada (Stripe/PayPal)");
    if (needsAutomation) features.push("Integración de flujos de trabajo (Zapier, Make, o APIs)");
    if (needsAppImprovement) features.push("Optimización de rendimiento, refactorización y auditoría");

    if (complexity === 'basico') {
      features.push("Estructura de Landing Page optimizada para conversión rápida");
    } else if (complexity === 'intermedio') {
      features.push("Sitio multisección o panel interactivo personalizado");
    } else {
      features.push("Desarrollo de Software Premium o Backend dedicado");
    }

    if (maintenance) {
      features.push("Mantenimiento mensual incluido: copias de seguridad y hosting");
    } else {
      features.push("Soporte básico por correo electrónico durante la entrega");
    }

    if (businessType === 'empresa') {
      features.push("SLA garantizado, consultoría de arquitectura y canal prioritario");
    }

    return {
      planName,
      estTime,
      service,
      complexityScore,
      features: features.slice(0, 5),
      details: `Propuesta configurada:\n- Perfil: ${businessType === 'emprendedor' ? 'Emprendedor / Autónomo' : 'Empresa / PYME'}\n- Servicios: ${[needsWeb && 'Web', needsEcommerce && 'E-commerce', needsAutomation && 'Automatización', needsAppImprovement && 'Mejora de App'].filter(Boolean).join(', ') || 'Consultoría'}\n- Complejidad: ${complexity.toUpperCase()}\n- Mantenimiento: ${maintenance ? 'Sí' : 'No'}\n\nPor favor, contáctenme para avanzar con esta configuración.`
    };
  };

  const recommendation = getRecommendation();

  const handleRequestQuote = () => {
    setSelectedProject(JSON.stringify({
      service: recommendation.service,
      details: recommendation.details
    }));
    setCurrentPage('auth');
  };

  return (
    <motion.section 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7 }}
      className="py-24 container-custom relative"
    >
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[100px] pointer-events-none -z-10 mix-blend-screen"></div>
      
      <div className="text-center max-w-2xl mx-auto mb-16 relative z-10">
        <span className="text-primary text-sm uppercase tracking-widest font-bold">Herramienta Interactiva</span>
        <h2 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-white to-white/60 mt-4 mb-4">Planificador Inteligente</h2>
        <p className="text-on-surface-variant text-lg">
          Configura tu proyecto en segundos y obtén un estimado al instante. Sin fricciones.
        </p>
      </div>

      <div className="max-w-6xl mx-auto glass-card rounded-3xl p-6 md:p-10 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-primary via-secondary to-tertiary"></div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
          
          {/* Configurator Form */}
          <div className="lg:col-span-7 space-y-8">
            {/* Step 1: Profile Select */}
            <div>
              <h3 className="text-xs font-bold text-outline uppercase tracking-wider mb-4 flex items-center gap-2">
                <span className="w-5 h-5 rounded bg-primary/10 flex items-center justify-center text-primary text-[10px]">1</span>
                ¿Cuál es tu tipo de negocio?
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setBusinessType('emprendedor')}
                  className={`p-4 rounded-xl border text-left transition-all duration-300 flex flex-col gap-2 ${
                    businessType === 'emprendedor'
                      ? 'border-primary bg-primary/5 shadow-[0_0_15px_rgba(129,140,248,0.15)]'
                      : 'border-outline-variant hover:border-outline bg-surface-container-low/50'
                  }`}
                >
                  <Briefcase size={20} className={businessType === 'emprendedor' ? 'text-primary' : 'text-on-surface-variant'} />
                  <div>
                    <h4 className="font-bold text-sm text-on-surface">Emprendedor o Freelancer</h4>
                    <p className="text-xs text-on-surface-variant mt-1">Busco lanzar un proyecto rápido o mejorar mi presencia digital.</p>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setBusinessType('empresa')}
                  className={`p-4 rounded-xl border text-left transition-all duration-300 flex flex-col gap-2 ${
                    businessType === 'empresa'
                      ? 'border-primary bg-primary/5 shadow-[0_0_15px_rgba(129,140,248,0.15)]'
                      : 'border-outline-variant hover:border-outline bg-surface-container-low/50'
                  }`}
                >
                  <Building2 size={20} className={businessType === 'empresa' ? 'text-primary' : 'text-on-surface-variant'} />
                  <div>
                    <h4 className="font-bold text-sm text-on-surface">Empresa o PYME</h4>
                    <p className="text-xs text-on-surface-variant mt-1">Necesito integraciones robustas, automatización y apps a medida.</p>
                  </div>
                </button>
              </div>
            </div>

            {/* Step 2: Service Toggles */}
            <div>
              <h3 className="text-xs font-bold text-outline uppercase tracking-wider mb-4 flex items-center gap-2">
                <span className="w-5 h-5 rounded bg-primary/10 flex items-center justify-center text-primary text-[10px]">2</span>
                ¿Qué servicios necesitas integrar?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  { id: 'web', checked: needsWeb, setter: setNeedsWeb, title: 'Desarrollo Web / Landing', desc: 'Presencia web adaptada a celulares y tablets.', icon: MonitorSmartphone, color: 'text-primary bg-primary/10' },
                  { id: 'ecommerce', checked: needsEcommerce, setter: setNeedsEcommerce, title: 'Tienda Online / Reservas', desc: 'Carrito de compras y pasarela de pago.', icon: AppWindow, color: 'text-secondary bg-secondary/10' },
                  { id: 'automation', checked: needsAutomation, setter: setNeedsAutomation, title: 'Automatización de Tareas', desc: 'Ahorro de horas manuales con Zapier/Make.', icon: Zap, color: 'text-tertiary bg-tertiary/10' },
                  { id: 'appImprovement', checked: needsAppImprovement, setter: setNeedsAppImprovement, title: 'Mejora o Auditoría de App', desc: 'Optimizar código y agregar nuevas funciones.', icon: Code, color: 'text-outline bg-outline-variant/20' }
                ].map((service) => (
                  <button
                    key={service.id}
                    type="button"
                    onClick={() => service.setter(!service.checked)}
                    className={`p-4 rounded-xl border text-left flex items-start gap-3 transition-all duration-300 ${
                      service.checked
                        ? 'border-primary bg-primary/5'
                        : 'border-outline-variant hover:border-outline bg-surface-container-low/50'
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-lg shrink-0 flex items-center justify-center ${service.color}`}>
                      <service.icon size={16} />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <h4 className="font-bold text-sm text-on-surface leading-tight">{service.title}</h4>
                        <div className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${
                          service.checked ? 'border-primary bg-primary text-on-primary' : 'border-outline-variant'
                        }`}>
                          {service.checked && <Check size={10} className="stroke-3" />}
                        </div>
                      </div>
                      <p className="text-xs text-on-surface-variant mt-1">{service.desc}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Complexity Sliders */}
            <div>
              <h3 className="text-xs font-bold text-outline uppercase tracking-wider mb-4 flex items-center gap-2">
                <span className="w-5 h-5 rounded bg-primary/10 flex items-center justify-center text-primary text-[10px]">3</span>
                ¿Qué nivel de complejidad requiere el diseño/lógica?
              </h3>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: 'basico', label: 'Esencial', desc: 'Estructura clara y limpia' },
                  { id: 'intermedio', label: 'Avanzado', desc: 'Interactividad y CRM' },
                  { id: 'avanzado', label: 'Premium', desc: 'A medida completa / IA' }
                ].map((lvl) => (
                  <button
                    key={lvl.id}
                    type="button"
                    onClick={() => setComplexity(lvl.id as any)}
                    className={`p-3 rounded-xl border text-center transition-all duration-300 ${
                      complexity === lvl.id
                        ? 'border-primary bg-primary/5 ring-1 ring-primary'
                        : 'border-outline-variant hover:border-outline bg-surface-container-low/50'
                    }`}
                  >
                    <h4 className="font-bold text-sm text-on-surface">{lvl.label}</h4>
                    <p className="text-[10px] text-on-surface-variant mt-1 leading-normal">{lvl.desc}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Maintenance Toggle */}
            <div className="flex items-center justify-between p-4 bg-surface-container-low/50 border border-outline-variant rounded-xl">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-secondary/10 text-secondary flex items-center justify-center shrink-0">
                  <RefreshCw size={14} className="animate-[spin_4s_linear_infinite]" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-on-surface">¿Necesitas mantenimiento mensual continuo?</h4>
                  <p className="text-xs text-on-surface-variant mt-0.5">Hosting, dominio, copias de seguridad y cambios menores incluidos.</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setMaintenance(!maintenance)}
                aria-label={maintenance ? "Desactivar mantenimiento mensual" : "Activar mantenimiento mensual"}
                className={`w-12 h-6 rounded-full p-1 transition-colors duration-300 focus:outline-none ${
                  maintenance ? 'bg-primary' : 'bg-outline-variant'
                }`}
              >
                <div className={`bg-on-primary w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${
                  maintenance ? 'translate-x-6' : 'translate-x-0'
                }`} />
              </button>
            </div>
          </div>

          {/* Right Column: Live Recommendation Output */}
          <div className="lg:col-span-5 sticky top-28 space-y-6">
            <div className="relative group overflow-hidden bg-surface-container-low/60 border border-outline-variant/60 rounded-2xl p-6 md:p-8 shadow-2xl backdrop-blur-md">
              <div className="absolute top-0 right-0 w-48 h-48 bg-primary/10 rounded-full blur-[60px] -z-10 transition-transform duration-500 group-hover:scale-125"></div>
              
              <div className="flex justify-between items-center mb-6">
                <span className="text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/15 px-2.5 py-1 rounded-full flex items-center gap-1">
                  <Sparkles size={10} /> Plan Recomendado
                </span>
                <div className="text-[10px] text-outline font-mono">
                  COMPLEJIDAD: {recommendation.complexityScore}%
                </div>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-linear-to-r from-white to-white/70 mb-2 tracking-tight">
                {recommendation.planName}
              </h3>
              
              <p className="text-sm text-on-surface-variant mb-6">
                Hemos adaptado una configuración a tus respuestas. Este plan resolverá con precisión tus metas.
              </p>

              <div className="space-y-2 mb-6">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-medium text-on-surface-variant">Alcance del Proyecto:</span>
                  <span className="font-bold text-primary">
                    {recommendation.complexityScore < 40 ? 'Bajo' : recommendation.complexityScore < 75 ? 'Medio' : 'Robusto / Corporativo'}
                  </span>
                </div>
                <div className="h-2 w-full bg-outline-variant/20 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-linear-to-r from-primary to-secondary"
                    initial={{ width: '0%' }}
                    animate={{ width: `${recommendation.complexityScore}%` }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                  />
                </div>
              </div>

              <div className="p-4 bg-surface-container-lowest/50 border border-outline-variant/30 rounded-xl flex items-center justify-between mb-8">
                <span className="text-xs font-semibold text-on-surface-variant">Tiempo estimado de desarrollo:</span>
                <span className="text-sm font-bold text-secondary bg-secondary/10 px-3 py-1 rounded-lg">
                  {recommendation.estTime}
                </span>
              </div>

              <div className="space-y-4 mb-8">
                <h4 className="text-xs font-bold text-on-surface uppercase tracking-wider mb-2">Características Incluidas:</h4>
                <ul className="space-y-3">
                  {recommendation.features.map((feature, i) => (
                    <motion.li 
                      key={i} 
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="flex items-start gap-2.5 text-xs text-on-surface/90"
                    >
                      <span className="w-4 h-4 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5 shadow-[0_0_10px_rgba(129,140,248,0.2)]">
                        <Check size={10} className="stroke-3" />
                      </span>
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <button
                onClick={handleRequestQuote}
                className="w-full py-4 bg-primary text-on-primary font-bold rounded-xl hover:bg-primary-container transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(129,140,248,0.4)]"
              >
                <span>Solicitar esta propuesta</span>
                <span className="text-lg">→</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </motion.section>
  );
}
