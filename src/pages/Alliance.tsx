import React, { useState } from 'react';
import { useAppContext } from '../AppContext';
import { motion, AnimatePresence } from 'motion/react';
import SEO from '../components/SEO';
import { 
  Sparkles, 
  ArrowRight, 
  TrendingUp, 
  Users, 
  ShieldCheck, 
  Zap, 
  Scale, 
  Calculator, 
  Clock, 
  DollarSign, 
  Percent,
  CheckCircle2, 
  AlertTriangle, 
  Check, 
  HelpCircle,
  FileText
} from 'lucide-react';

export default function Alliance() {
  const { setCurrentPage } = useAppContext();
  
  // State for Good Partner comparison category
  const [selectedCategory, setSelectedCategory] = useState('incentivos');

  // Tabs for interactive phases
  const [activePhase, setActivePhase] = useState(1);

  // FAQ/Objection Interactive States
  const [activeObjection, setActiveObjection] = useState<number | null>(0);

  const goodPartnerFeatures: Record<string, {
    title: string;
    icon: React.ReactNode;
    traditional: { text: string; badge: string };
    goodPartner: { text: string; badge: string };
  }> = {
    incentivos: {
      title: "Incentivos y Riesgo",
      icon: <Scale size={18} />,
      traditional: {
        text: "Te cobran presupuestos fijos inalcanzables por adelantado, sin importar si tu embudo de ventas o academia genera un solo dólar de beneficio. Si el proyecto no despega, tú asumes el 100% de las pérdidas.",
        badge: "Riesgo Total de tu Lado"
      },
      goodPartner: {
        text: "Cofinanciamos y absorbemos el coste del desarrollo inicial de software, diseño web y automatizaciones de IA. Nuestro éxito va de la mano del tuyo: solo cobramos si el canal digital genera resultados reales.",
        badge: "Incentivos 100% Alineados"
      }
    },
    propiedad: {
      title: "Propiedad y Control",
      icon: <ShieldCheck size={18} />,
      traditional: {
        text: "Te atan a plataformas con código propietario inaccesible, dependencias insostenibles de mantenimiento y cláusulas oscuras de permanencia que limitan tu libertad de negocio.",
        badge: "Cerrado y Dependiente"
      },
      goodPartner: {
        text: "Mantienes el control absoluto sobre tu marca, contenidos y base de datos. Ofrecemos contratos transparentes con cláusulas justas de salida definitiva (Buy-Out) para cuando decidas internalizar tu tecnología.",
        badge: "Control y Propiedad tuya"
      }
    },
    evolucion: {
      title: "Evolución e Innovación",
      icon: <TrendingUp size={18} />,
      traditional: {
        text: "Cualquier optimización de copy, nuevo botón, página adicional o integración con IA requiere redactar una orden de cambio, firmar un nuevo presupuesto y esperar semanas de cola de desarrollo.",
        badge: "Burocracia y Lentitud"
      },
      goodPartner: {
        text: "Ingeniería proactiva constante. Diseñamos, implementamos y probamos nuevos embudos, ofertas y automatizaciones con IA de forma ágil e ilimitada según el negocio lo requiera, incluido en nuestra alianza.",
        badge: "Evolución Continua Ilimitada"
      }
    },
    soporte: {
      title: "Soporte en Lanzamientos",
      icon: <Clock size={18} />,
      traditional: {
        text: "Respuestas lentas a través de sistemas de tickets impersonales en horario de oficina. Si tu servidor se satura o cae un domingo durante un lanzamiento masivo, estás solo.",
        badge: "Atención de 9 a 5"
      },
      goodPartner: {
        text: "Un equipo de ingeniería de guardia dedicado 24/7 para tus momentos de máxima tensión. Monitoreamos en tiempo real tus pasarelas de pago y servidores durante los picos de tráfico más críticos.",
        badge: "Trinchera Compartida"
      }
    }
  };

  // Phases detail definition
  const phases = [
    {
      id: 1,
      name: "Fase de Demostración",
      subtitle: "Hito Piloto de 0% Riesgo",
      duration: "15 a 30 días",
      trustFactor: "Nosotros invertimos primero",
      description: "Antes de hablar de contratos o porcentajes de participación, demostramos de lo que somos capaces mediante una acción de alto impacto.",
      delivTitle: "Qué desarrollamos en la fase inicial:",
      deliverables: [
        "Auditoría técnica exhaustiva y mapeo de cuellos de botella del embudo actual.",
        "Implementación de 1 automatización de alto impacto (ej. recuperación de carritos por WhatsApp o nutrición automatizada de leads).",
        "Panel interactivo de métricas de conversión en tiempo real."
      ],
      clientTitle: "Tu compromiso:",
      clientInput: "Darnos acceso temporal de lectura a tus herramientas de email marketing o pasarela de pago para analizar el flujo y conectar la automatización de prueba.",
      guarantee: "Si al finalizar esta fase sientes que no aportamos valor, cerramos las conexiones amistosamente y te quedas con la optimización realizada de forma completamente libre y sin compromisos."
    },
    {
      id: 2,
      name: "Fase de Co-Lanzamiento",
      subtitle: "Desarrollo & Despliegue Premium",
      duration: "30 a 60 días",
      trustFactor: "Cofinanciación e Ingeniería Activa",
      description: "Construimos el ecosistema digital completo diseñado para triplicar tus conversiones actuales sin que tengas que pagar decenas de miles de dólares en tarifas fijas.",
      delivTitle: "Infraestructura que desplegamos:",
      deliverables: [
        "Rediseño y desarrollo de tu plataforma Web o Landing Pages con velocidad de carga ultra-rápida.",
        "Automatización completa de flujos (CRM, secuencias automáticas por WhatsApp, flujos de Email Marketing estructurados).",
        "Configuración e integración de pasarelas de pago con upsells y order bumps automatizados con IA."
      ],
      clientTitle: "Tu compromiso:",
      clientInput: "Invertir un fee mínimo de cobertura de servidores/infraestructura (si aplica) y validar las propuestas de diseño y de copy con feedback ágil.",
      guarantee: "Todo el desarrollo cuenta con soporte técnico prioritario inmediato. Nuestra prioridad es dejar la plataforma lista para la captación masiva."
    },
    {
      id: 3,
      name: "Fase de Escala Continua",
      subtitle: "Optimización a Éxito",
      duration: "A largo plazo (Indefinido)",
      trustFactor: "Alineación total de incentivos",
      description: "Con los sistemas listos, participamos del crecimiento. Nos convertimos en tu departamento de ingeniería de cabecera encargándonos de toda la evolución tecnológica.",
      delivTitle: "Soporte y evolución constante incluidos:",
      deliverables: [
        "A/B testing constante de textos, diseños y estructuras de embudos para rascar hasta el último punto de conversión.",
        "Creación de nuevos sistemas o micro-herramientas necesarias según crezca tu comunidad o academia.",
        "Monitoreo 24/7 de caídas de servidores, parches de seguridad y actualizaciones de APIs (WhatsApp, Stripe, etc)."
      ],
      clientTitle: "Tu compromiso:",
      clientInput: "Abonar mensualmente el porcentaje de Revenue Share pactado únicamente sobre las ventas procesadas por la plataforma.",
      guarantee: "Cláusula de rescisión mutua transparente con período de preaviso de 60 días y posibilidad de compra definitiva de la propiedad intelectual (buy-out)."
    }
  ];

  // Objections definitions
  const objections = [
    {
      id: 0,
      question: "¿Ceder un porcentaje de mi facturación no es demasiado caro a largo plazo?",
      answer: "Al contrario, es el modelo más rentable. Si no creces, nuestro costo es literalmente cero. No tienes la carga de salarios fijos de ingenieros de alto nivel ($10k+/mes). Además, el porcentaje se aplica sobre la facturación incremental o el canal específico desarrollado por nosotros. Si el canal no factura, nosotros perdemos tiempo y recursos. Si facturas $100k adicionales gracias a nuestras optimizaciones, ceder un 10% te deja con $90k de puro beneficio que antes no tenías, sin la fricción de gestionar programadores."
    },
    {
      id: 1,
      question: "¿Qué pasa si decido desvincularme de la alianza en el futuro?",
      answer: "Queremos que estés por el valor que aportamos, no por un candado contractual. Nuestros contratos de Revenue Share incluyen cláusulas de 'Buy-Out' (compra definitiva). Esto significa que se define un múltiplo claro sobre los ingresos para que, si tu negocio escala exponencialmente y deseas internalizar la tecnología, puedas comprar la propiedad intelectual del software y finalizar el porcentaje de participación de forma limpia y transparente."
    },
    {
      id: 2,
      question: "¿Tienen control sobre mi dinero o mis cuentas bancarias?",
      answer: "En absoluto. La pasarela de cobros (ej. Stripe, Hotmart o Shopify) está al 100% a tu nombre y vinculada directamente a tu cuenta bancaria. Nosotros no procesamos ni tocamos tus fondos. La liquidación del Revenue Share se realiza mediante facturación mensual recíproca tras el reporte transparente de ventas que emite el propio procesador de pagos."
    },
    {
      id: 3,
      question: "¿Qué nos garantiza que trabajarán activamente una vez lanzado el embudo?",
      answer: "Los incentivos están perfectamente alineados: si tus ventas bajan o se estancan, nuestros ingresos disminuyen inmediatamente. A diferencia de una agencia tradicional de tarifa fija que cobra lo mismo sin importar si vendes o no, nosotros dependemos directamente de tu éxito. Si tus conversiones caen un 2%, es nuestra máxima prioridad resolverlo en horas."
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-24 container-custom"
    >
      <SEO 
        title="Alianza de Revenue Share" 
        description="Asóciate con nuestro equipo técnico de élite bajo el modelo de Revenue Share. Nosotros cubrimos el 100% de la ingeniería y optimización inicial; tú solo pagas si creces."
        keywords="revenue share, socios tecnologicos, co-inversion de software, programadores de elite, automatizaciones avanzadas, embudos de alta conversion"
      />
      {/* Hero Section */}
      <header className="text-center max-w-4xl mx-auto mb-20">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary mb-6"
        >
          <Scale size={14} className="animate-spin-slow" />
          <span className="text-xs uppercase tracking-widest font-bold">Unión Estratégica & Riesgo Compartido</span>
        </motion.div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-on-surface mb-6 tracking-tight leading-tight">
          El Modelo de <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Revenue Share</span> Explicado
        </h1>
        
        <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed">
          Olvídate de presupuestos inalcanzables y agencias técnicas que se desentienden de tus ventas. Nosotros co-invertimos contigo: diseñamos, automatizamos y mantenemos toda tu ingeniería a cambio de una participación alineada con tus resultados.
        </p>
      </header>

      {/* The "Good Partner" Philosophy Section - Highly Interactive */}
      <section className="mb-24 bg-gradient-to-br from-surface-container/60 to-surface-container-high/60 border border-outline-variant rounded-2xl p-6 md:p-10 shadow-lg relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-secondary/5 rounded-full blur-[80px] -z-10"></div>
        
        <div className="max-w-3xl mx-auto text-center mb-10">
          <span className="text-xs font-black uppercase tracking-widest text-secondary bg-secondary/10 px-3.5 py-1.5 rounded-full">
            Filosofía & Esencia de Alianza
          </span>
          <h2 className="text-3xl font-black text-on-surface mt-4 mb-3">
            ¿Qué significa tener un <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent font-extrabold">Good Partner</span>?
          </h2>
          <p className="text-sm text-on-surface-variant leading-relaxed">
            Un <strong>Good Partner</strong> es la antítesis del proveedor técnico tradicional. No nos limitamos a facturar horas; nos convertimos en tus socios estratégicos en la sombra, aportando valor de negocio real en cada interacción.
          </p>
        </div>

        {/* Interactive Comparison Tabs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto">
          {/* Left selectors */}
          <div className="lg:col-span-4 flex flex-col gap-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-outline mb-1 px-2">Compara los aspectos clave:</span>
            {Object.entries(goodPartnerFeatures).map(([key, item]) => (
              <button
                key={key}
                onClick={() => setSelectedCategory(key)}
                className={`flex items-center gap-3 w-full text-left p-4 rounded-xl border transition-all cursor-pointer ${
                  selectedCategory === key 
                    ? 'bg-secondary/10 border-secondary/40 text-secondary font-bold shadow-sm' 
                    : 'bg-surface-container-high/40 border-outline-variant/40 text-on-surface-variant hover:bg-surface-variant/40 hover:text-on-surface'
                }`}
              >
                <span className={selectedCategory === key ? 'text-secondary' : 'text-outline'}>
                  {item.icon}
                </span>
                <span className="text-xs md:text-sm">{item.title}</span>
              </button>
            ))}
          </div>

          {/* Right comparison view */}
          <div className="lg:col-span-8 bg-surface-container-high border border-outline-variant p-6 md:p-8 rounded-2xl flex flex-col justify-between">
            <AnimatePresence mode="wait">
              {Object.entries(goodPartnerFeatures).filter(([key]) => key === selectedCategory).map(([key, item]) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-6 flex-grow flex flex-col justify-between"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Column 1: Traditional Agency */}
                    <div className="bg-surface-container/40 border border-outline-variant/30 p-5 rounded-xl flex flex-col justify-between">
                      <div>
                        <span className="inline-block text-[9px] font-black uppercase text-red-400 bg-red-400/10 px-2 py-0.5 rounded mb-3">
                          {item.traditional.badge}
                        </span>
                        <h4 className="text-sm font-bold text-on-surface mb-2">Agencia / Desarrollador Común</h4>
                        <p className="text-xs text-on-surface-variant leading-relaxed">
                          {item.traditional.text}
                        </p>
                      </div>
                      <div className="mt-4 pt-3 border-t border-outline-variant/20 flex items-center gap-1.5 text-[10px] font-semibold text-red-400">
                        <span>✕ Enfoque puramente transaccional</span>
                      </div>
                    </div>

                    {/* Column 2: Good Partner */}
                    <div className="bg-secondary/5 border-2 border-secondary/20 p-5 rounded-xl flex flex-col justify-between shadow-sm">
                      <div>
                        <span className="inline-block text-[9px] font-black uppercase text-secondary bg-secondary/10 px-2 py-0.5 rounded mb-3">
                          {item.goodPartner.badge}
                        </span>
                        <h4 className="text-sm font-bold text-secondary mb-2 flex items-center gap-1.5">
                          <Sparkles size={14} className="animate-pulse" />
                          Filosofía Good Partner
                        </h4>
                        <p className="text-xs text-on-surface leading-relaxed">
                          {item.goodPartner.text}
                        </p>
                      </div>
                      <div className="mt-4 pt-3 border-t border-secondary/10 flex items-center gap-1.5 text-[10px] font-bold text-secondary">
                        <span>✓ Co-inversión, transparencia e implicación</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-outline-variant/40 flex items-center justify-between gap-4 text-xs">
                    <span className="text-on-surface-variant">¿Listo para experimentar la diferencia con tu propio proyecto?</span>
                    <button 
                      onClick={() => setCurrentPage('auth')} 
                      className="text-secondary hover:text-secondary-container font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <span>Postular mi Proyecto</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Trust & Methodology Tabbed Section */}
      <section className="mb-24">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full">
            Estructura Contractual & Operativa
          </span>
          <h2 className="text-3xl font-bold text-on-surface mt-4 mb-4">
            Cómo Funciona el Acuerdo Paso a Paso
          </h2>
          <p className="text-sm text-on-surface-variant leading-relaxed">
            Un Revenue Share justo requiere una gobernanza clara. Dividimos nuestra integración en 3 fases secuenciales con hitos de salida transparentes para que nunca te sientas atrapado.
          </p>
        </div>

        {/* Phase Navigation Tabs */}
        <div className="flex border-b border-outline-variant/60 mb-8 max-w-4xl mx-auto">
          {phases.map((phase) => (
            <button
              key={phase.id}
              onClick={() => setActivePhase(phase.id)}
              className={`flex-1 text-center pb-4 text-xs md:text-sm font-bold relative transition-colors ${
                activePhase === phase.id ? 'text-primary' : 'text-outline hover:text-on-surface-variant'
              }`}
            >
              <span className="block text-[10px] font-mono uppercase text-outline mb-1">Fase {phase.id}</span>
              {phase.name}
              {activePhase === phase.id && (
                <motion.div 
                  layoutId="activePhaseLine"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-secondary"
                />
              )}
            </button>
          ))}
        </div>

        {/* Selected Phase Detail Card */}
        <div className="max-w-4xl mx-auto bg-surface-container border border-outline-variant rounded-2xl p-6 md:p-10 shadow-lg relative">
          <AnimatePresence mode="wait">
            {phases.filter(p => p.id === activePhase).map((phase) => (
              <motion.div
                key={phase.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
              >
                {/* Left col: Summary & Meta */}
                <div className="lg:col-span-5 flex flex-col justify-between border-r border-outline-variant/30 pr-0 lg:pr-8">
                  <div>
                    <span className="text-xs font-black text-primary uppercase tracking-widest bg-primary/10 px-2.5 py-1 rounded">
                      {phase.trustFactor}
                    </span>
                    <h3 className="text-2xl font-black text-on-surface mt-4">{phase.name}</h3>
                    <p className="text-sm text-primary font-semibold mt-1">{phase.subtitle}</p>
                    
                    <p className="text-xs text-on-surface-variant mt-4 leading-relaxed">
                      {phase.description}
                    </p>
                  </div>

                  <div className="mt-8 pt-6 border-t border-outline-variant/30 space-y-3">
                    <div className="flex justify-between text-xs">
                      <span className="text-outline">Duración aproximada:</span>
                      <span className="font-bold text-on-surface">{phase.duration}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-outline">Costo upfront:</span>
                      <span className="font-bold text-green-500">0$ USD / Sin tarifa de desarrollo</span>
                    </div>
                  </div>
                </div>

                {/* Right col: Specific terms and deliverables */}
                <div className="lg:col-span-7 flex flex-col justify-between pl-0 lg:pl-4">
                  <div>
                    <h4 className="text-xs font-bold text-on-surface uppercase tracking-wider mb-3 flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-primary" />
                      {phase.delivTitle}
                    </h4>
                    <ul className="space-y-3 mb-6">
                      {phase.deliverables.map((deliv, index) => (
                        <li key={index} className="flex gap-2 items-start text-xs text-on-surface-variant">
                          <Check size={12} className="text-green-400 mt-1 shrink-0" />
                          <span className="leading-relaxed">{deliv}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="bg-surface-container-high/60 border border-outline-variant/40 rounded-xl p-4 mt-4">
                      <h4 className="text-xs font-bold text-on-surface uppercase tracking-wider mb-2">
                        {phase.clientTitle}
                      </h4>
                      <p className="text-xs text-on-surface-variant leading-relaxed">
                        {phase.clientInput}
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 bg-primary/5 border border-primary/10 rounded-xl p-4">
                    <span className="text-[10px] font-bold uppercase text-primary tracking-widest block mb-1">Hito de Confianza & Cláusula de Resguardo</span>
                    <p className="text-xs text-on-surface-variant leading-relaxed">
                      {phase.guarantee}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* Objection Matcher / Fear Toggles (Interactive Q&A) */}
      <section className="mb-24 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full">
            Sin rodeos ni letras pequeñas
          </span>
          <h2 className="text-3xl font-bold text-on-surface mt-4 mb-4">
            Derribando Miedos y Dudas Reales
          </h2>
          <p className="text-sm text-on-surface-variant">
            Sabemos que tu negocio es tu bebé. Respondemos a las preguntas y objeciones contractuales más comunes con total transparencia.
          </p>
        </div>

        <div className="space-y-4">
          {objections.map((obj) => (
            <div 
              key={obj.id} 
              className={`border rounded-xl transition-all cursor-pointer ${
                activeObjection === obj.id 
                  ? 'bg-surface-container border-primary shadow-lg shadow-primary/5' 
                  : 'bg-surface-container-low border-outline-variant hover:border-outline hover:bg-surface-container/40'
              }`}
              onClick={() => setActiveObjection(activeObjection === obj.id ? null : obj.id)}
            >
              <div className="p-5 flex justify-between items-center gap-4">
                <span className="font-bold text-on-surface text-sm md:text-base flex items-center gap-3">
                  <HelpCircle size={18} className={activeObjection === obj.id ? 'text-primary' : 'text-outline'} />
                  {obj.question}
                </span>
                <span className={`text-xs font-mono font-bold uppercase shrink-0 transition-colors ${
                  activeObjection === obj.id ? 'text-primary' : 'text-outline'
                }`}>
                  {activeObjection === obj.id ? 'Cerrar' : 'Ver respuesta'}
                </span>
              </div>
              
              <AnimatePresence initial={false}>
                {activeObjection === obj.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden border-t border-outline-variant/40"
                  >
                    <div className="p-5 bg-surface-container-high/40 text-xs md:text-sm text-on-surface-variant leading-relaxed">
                      {obj.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      {/* Model Comparison Checklist: Fixed vs. Revenue Share */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-24">
        {/* Why traditional agencies struggle */}
        <div className="bg-surface-container border border-outline-variant rounded-2xl p-6 md:p-8">
          <div className="flex items-center gap-2 text-red-400 mb-4">
            <AlertTriangle size={20} />
            <h3 className="font-bold text-lg text-on-surface">Agencias Fijas Tradicionales</h3>
          </div>
          <ul className="space-y-4">
            {[
              "Cobran altas tarifas por hora, independientemente de si el embudo vende o no.",
              "Se centran únicamente en que el código funcione técnica o visualmente, no en la conversión de ventas.",
              "Cualquier cambio de texto, diseño o integración posterior requiere un nuevo contrato y presupuesto.",
              "Si los servidores se caen durante un lanzamiento en domingo, su equipo de soporte no está disponible."
            ].map((text, i) => (
              <li key={i} className="flex gap-2 text-xs text-on-surface-variant leading-relaxed">
                <span className="text-red-400 mt-0.5 font-bold">✕</span>
                {text}
              </li>
            ))}
          </ul>
        </div>

        {/* Why rAIces is different */}
        <div className="bg-surface-container-high border-2 border-primary/50 rounded-2xl p-6 md:p-8 shadow-lg">
          <div className="flex items-center gap-2 text-primary mb-4">
            <Sparkles size={20} className="animate-pulse" />
            <h3 className="font-bold text-lg text-on-surface">Alianza rAIces (Revenue Share)</h3>
          </div>
          <ul className="space-y-4">
            {[
              "Costo inicial de ingeniería y diseño subvencionado. Solo ganamos si tú ganas.",
              "Cada píxel, automatización y copy está optimizado científicamente para convertir leads en compradores.",
              "Evolución técnica ilimitada. Si necesitas un cambio estratégico, lo programamos de inmediato sin cargos adicionales.",
              "Monitoreo crítico 24/7 de tus lanzamientos. Somos socios de trinchera contigo."
            ].map((text, i) => (
              <li key={i} className="flex gap-2 text-xs text-on-surface-variant leading-relaxed font-medium">
                <span className="text-green-400 mt-0.5 font-bold">✓</span>
                {text}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center max-w-4xl mx-auto bg-gradient-to-br from-surface-container via-surface-container-high to-surface-container/80 border-2 border-primary/25 p-8 md:p-14 rounded-3xl relative overflow-hidden shadow-2xl">
        {/* Decorative Ambient Background Blurs */}
        <div className="absolute top-0 left-0 w-44 h-44 bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-44 h-44 bg-secondary/10 rounded-full blur-[100px] pointer-events-none"></div>

        {/* Dynamic Badge for Limited Capacity */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-xs font-semibold tracking-wider uppercase mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-ping"></span>
          <span>Cupos Limitados • Q3 2026</span>
        </div>

        <h2 className="text-3xl md:text-5xl font-black text-on-surface mb-6 tracking-tight leading-none text-balance font-sans">
          ¿Tu proyecto está listo para <span className="bg-gradient-to-r from-primary via-amber-400 to-secondary bg-clip-text text-transparent">escalar a éxito</span>?
        </h2>
        
        <p className="text-sm md:text-base text-on-surface-variant mb-10 max-w-2xl mx-auto leading-relaxed">
          Para garantizar la máxima velocidad e implicación de nuestro equipo de ingeniería, <strong>únicamente admitimos 2 nuevos proyectos bajo Revenue Share por trimestre</strong>. Asegura tu lugar postulando a una sesión de consulta técnica inicial.
        </p>

        {/* What the consultation includes grid */}
        <div className="bg-surface-container/60 border border-outline-variant/50 rounded-2xl p-6 md:p-8 text-left max-w-2xl mx-auto mb-10">
          <h3 className="text-xs font-bold uppercase tracking-widest text-primary mb-4 flex items-center gap-2">
            <Check className="text-primary" size={16} />
            Tu Sesión de Consulta Técnica Incluye:
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Auditoría técnica rápida de velocidad y UX de tu web actual.",
              "Mapeo de fugas de dinero en tus flujos de conversión de leads.",
              "Propuesta personalizada de automatización con Inteligencia Artificial.",
              "Hoja de ruta estratégica detallada para triplicar tus conversiones."
            ].map((text, i) => (
              <div key={i} className="flex gap-2.5 items-start text-xs text-on-surface-variant leading-relaxed">
                <CheckCircle2 size={14} className="text-primary shrink-0 mt-0.5" />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            onClick={() => setCurrentPage('auth')} 
            className="w-full sm:w-auto px-8 py-4 bg-primary text-on-primary rounded-xl font-bold hover:brightness-110 transition-all shadow-lg shadow-primary/25 flex items-center justify-center gap-2 cursor-pointer text-sm tracking-wide"
          >
            <span>Postular mi Proyecto</span>
            <ArrowRight size={18} />
          </button>
          
          <button 
            onClick={() => setCurrentPage('pricing')} 
            className="w-full sm:w-auto px-8 py-4 border border-outline text-on-surface rounded-xl font-bold hover:bg-surface-variant/50 transition-all cursor-pointer text-sm tracking-wide"
          >
            Ver Planes Fijos
          </button>
        </div>

        <div className="mt-6 text-[10px] text-outline flex items-center justify-center gap-1.5">
          <ShieldCheck size={12} />
          <span>Respuesta técnica garantizada en menos de 48 horas sin compromiso de permanencia.</span>
        </div>
      </section>
    </motion.div>
  );
}
