import React from 'react';
import { useAppContext } from '../AppContext';
import { motion } from 'motion/react';
import SEO from '../components/SEO';
import { CheckCircle2, ChevronDown, ShieldCheck, TrendingUp, Users, Sparkles, Zap, ArrowRight } from 'lucide-react';

export default function Pricing() {
  const { setCurrentPage } = useAppContext();

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-24 container-custom"
    >
      <SEO 
        title="Planes Flexibles & Modelos de Inversión" 
        description="Elige entre un modelo de desarrollo tradicional de costo fijo o nuestra Alianza de Riesgo Compartido (Revenue Share) con costo inicial de $0 USD. Diseñado para alinear incentivos."
        keywords="planes de desarrollo, costo de paginas web, tarifas de programacion, revenue share, comision por ventas, presupuesto de software"
      />
      <header className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary mb-6">
          <Sparkles size={14} className="animate-pulse" />
          <span className="text-xs uppercase tracking-widest font-bold">Un Modelo Alinado con tu Éxito</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-on-surface mb-6 leading-tight">Planes y Alianzas Estratégicas</h1>
        <p className="text-lg text-on-surface-variant max-w-3xl mx-auto">
          Ya no contratas un servicio técnico aislado; te asocias con un equipo de ingeniería. Elige entre un modelo de desarrollo cerrado tradicional o nuestra Alianza de Riesgo Compartido (Revenue Share).
        </p>
      </header>

      {/* Main Pricing/Alliance Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
        {/* Plan 1: Traditional Project */}
        <div className="bg-surface-container border border-outline-variant p-8 rounded-2xl flex flex-col h-full hover:-translate-y-2 transition-transform duration-300">
          <div className="mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-outline">Modelo Tradicional</span>
            <h3 className="text-2xl font-bold text-on-surface mt-3">Proyecto Cerrado</h3>
            <p className="text-on-surface-variant mt-2 text-sm leading-relaxed">
              Ideal para empresas con requerimientos técnicos específicos y cerrados que prefieren un pago único y mantener el 100% de su margen.
            </p>
          </div>
          <div className="space-y-4 mb-8 flex-grow">
            {[
              'Landing Page o Web Responsiva',
              'Sistemas y automatizaciones fijas',
              'Dominio, hosting y mantenimiento técnico',
              'Soporte post-entrega garantizado',
              'Propiedad intelectual absoluta'
            ].map((feature, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-outline shrink-0 mt-1" />
                <span className="text-on-surface text-sm leading-tight">{feature}</span>
              </div>
            ))}
          </div>
          <button 
            onClick={() => setCurrentPage('auth')} 
            className="w-full py-3.5 border border-outline text-on-surface rounded-xl font-bold hover:bg-surface-variant/50 transition-all text-sm"
          >
            Solicitar Presupuesto
          </button>
        </div>

        {/* Plan 2: Revenue Share / Alianza (Popular Highlight) */}
        <div className="bg-surface-container-high border-2 border-primary p-8 rounded-2xl flex flex-col h-full relative overflow-hidden hover:-translate-y-2 transition-transform duration-300 shadow-[0_15px_50px_-15px_rgba(124,58,237,0.4)]">
          <div className="absolute top-6 right-[-30px] bg-primary text-on-primary text-[10px] px-10 py-1.5 rotate-45 uppercase font-bold tracking-wider shadow">
            Socio Estratégico
          </div>
          <div className="mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-primary flex items-center gap-1.5">
              <TrendingUp size={12} /> Riesgo Compartido
            </span>
            <h3 className="text-3xl font-bold text-on-surface mt-3">Alianza Revenue Share</h3>
            <p className="text-on-surface-variant mt-2 text-sm leading-relaxed">
              Diseñado para Creadores de Contenido, Academias Online y SaaS con tracción. Costo de desarrollo inicial subvencionado (0% o mínimo) a cambio de un porcentaje de las ventas generadas.
            </p>
          </div>
          <div className="space-y-4 mb-8 flex-grow">
            {[
              'Diseño de Embudo de Ventas & Web Premium',
              'Automatizaciones completas (CRM, WhatsApp, Email)',
              'Estrategia de conversión & copywriting',
              'Infraestructura técnica escalable sin límites',
              'Reuniones de optimización semanales',
              'Soporte prioritario e ingeniería continua 24/7'
            ].map((feature, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-primary shrink-0 mt-1" />
                <span className="text-on-surface text-sm leading-tight font-medium">{feature}</span>
              </div>
            ))}
          </div>
          <button 
            onClick={() => setCurrentPage('auth')} 
            className="w-full py-4 bg-primary text-on-primary rounded-xl font-bold hover:brightness-110 transition-all shadow-lg shadow-primary/25 text-sm flex items-center justify-center gap-2"
          >
            <span>Iniciar Alianza</span>
            <ArrowRight size={16} />
          </button>
          <button 
            onClick={() => setCurrentPage('alliance')} 
            className="w-full mt-3 py-2.5 border border-primary/30 text-primary rounded-xl font-bold hover:bg-primary/5 transition-all text-xs flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <span>Detalles del Modelo</span>
            <Sparkles size={12} className="animate-pulse" />
          </button>
        </div>

        {/* Plan 3: Enterprise / Custom Mixed */}
        <div className="bg-surface-container border border-outline-variant p-8 rounded-2xl flex flex-col h-full hover:-translate-y-2 transition-transform duration-300">
          <div className="mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-secondary">Escala Corporativa</span>
            <h3 className="text-2xl font-bold text-on-surface mt-3">Proyecto a Medida</h3>
            <p className="text-on-surface-variant mt-2 text-sm leading-relaxed">
              Para empresas o startups con requerimientos avanzados. Combinamos tarifa fija + variable según KPIs de conversión, eficiencia u optimización de costos.
            </p>
          </div>
          <div className="space-y-4 mb-8 flex-grow">
            {[
              'Desarrollo de Software o Apps móviles complejas',
              'Sistemas backend personalizados',
              'Automatizaciones empresariales e integraciones IA',
              'Auditoría continua de seguridad y rendimiento'
            ].map((feature, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-secondary shrink-0 mt-1" />
                <span className="text-on-surface text-sm leading-tight">{feature}</span>
              </div>
            ))}
          </div>
          <button 
            onClick={() => setCurrentPage('auth')} 
            className="w-full py-3.5 border border-outline text-on-surface rounded-xl font-bold hover:bg-surface-variant/50 transition-all text-sm"
          >
            Agendar Consulta corporativa
          </button>
        </div>
      </div>

      {/* Trust & Mindset Sections - Structured in Phases to Build Absolute Confidence */}
      <section className="mb-24 bg-surface-container-low border border-outline-variant rounded-2xl p-8 md:p-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[80px] -z-10"></div>
        
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full">
            Construyendo Confianza Absoluta
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-on-surface mt-4 mb-4">
            Nuestra Metodología en Fases
          </h2>
          <p className="text-on-surface-variant text-sm md:text-base leading-relaxed">
            Sabemos que ceder un porcentaje de tu negocio es una decisión difícil. Por eso, estructuramos nuestra alianza estratégica en fases progresivas para mitigar tu riesgo y demostrar resultados inmediatos antes de formalizar la escala.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
          {/* Phase 1 */}
          <div className="bg-surface-container-high border border-outline-variant/60 p-6 rounded-xl flex flex-col relative">
            <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold shadow-lg">
              1
            </div>
            <div className="mt-2 mb-4">
              <span className="text-xs font-bold uppercase text-primary tracking-wider">Fase de Demostración</span>
              <h3 className="text-xl font-bold text-on-surface mt-1">Hito Piloto sin Compromiso</h3>
            </div>
            <p className="text-xs text-on-surface-variant leading-relaxed mb-6 flex-grow">
              Comenzamos demostrando nuestro valor con una auditoría completa o una primera automatización crítica para tu negocio de forma inicial y con bajo riesgo. Si el impacto tecnológico y estratégico no te convence, la alianza finaliza aquí libremente.
            </p>
            <div className="pt-4 border-t border-outline-variant/30 flex items-center gap-2 text-xs font-bold text-primary">
              <ShieldCheck size={16} />
              <span>Cero riesgo para ti</span>
            </div>
          </div>

          {/* Phase 2 */}
          <div className="bg-surface-container-high border-2 border-primary/40 p-6 rounded-xl flex flex-col relative shadow-md">
            <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold shadow-lg">
              2
            </div>
            <div className="mt-2 mb-4">
              <span className="text-xs font-bold uppercase text-primary tracking-wider">Fase de Integración</span>
              <h3 className="text-xl font-bold text-on-surface mt-1">Co-Lanzamiento Tecnológico</h3>
            </div>
            <p className="text-xs text-on-surface-variant leading-relaxed mb-6 flex-grow">
              Desarrollamos e implementamos el ecosistema digital completo: embudos automatizados, plataformas de contenido, integraciones con CRM y automatización de atención. Nos encargamos de todo el soporte técnico y la infraestructura operativa.
            </p>
            <div className="pt-4 border-t border-outline-variant/30 flex items-center gap-2 text-xs font-bold text-primary">
              <Zap size={16} className="animate-pulse" />
              <span>Soporte integral y cofinanciado</span>
            </div>
          </div>

          {/* Phase 3 */}
          <div className="bg-surface-container-high border border-outline-variant/60 p-6 rounded-xl flex flex-col relative">
            <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold shadow-lg">
              3
            </div>
            <div className="mt-2 mb-4">
              <span className="text-xs font-bold uppercase text-primary tracking-wider">Fase de Escala</span>
              <h3 className="text-xl font-bold text-on-surface mt-1">Optimización & Revenue Share</h3>
            </div>
            <p className="text-xs text-on-surface-variant leading-relaxed mb-6 flex-grow">
              Con los sistemas funcionando y las ventas incrementales en marcha, participamos únicamente de un porcentaje justo de la facturación del canal automatizado. Nuestra retribución está ligada al 100% a los resultados demostrables de la plataforma.
            </p>
            <div className="pt-4 border-t border-outline-variant/30 flex items-center gap-2 text-xs font-bold text-primary">
              <Users size={16} />
              <span>Ganamos únicamente si tú ganas</span>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Comparison Table */}
      <section className="mt-20 mb-24 max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <span className="text-[10px] font-bold uppercase tracking-widest text-primary bg-primary/10 px-3.5 py-1.5 rounded-full">
            Comparativa Simplificada para Nuevos Negocios
          </span>
          <h2 className="text-3xl font-black text-on-surface mt-4 mb-2">Proyecto Cerrado vs Alianza</h2>
          <p className="text-sm text-on-surface-variant max-w-xl mx-auto">
            Compara de un vistazo cómo se adaptan nuestros modelos de trabajo si tu empresa está iniciando o consolidándose.
          </p>
        </div>

        {/* Desktop & Tablet Table (Hidden on small mobile, beautiful on medium up) */}
        <div className="hidden md:block overflow-hidden border border-outline-variant rounded-2xl bg-surface-container/20">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="bg-surface-container-high border-b border-outline-variant">
                <th className="p-6 text-xs font-black uppercase tracking-wider text-outline">Aspecto Clave</th>
                <th className="p-6 text-xs font-black uppercase tracking-wider text-on-surface">Proyecto Cerrado (Fijo)</th>
                <th className="p-6 text-xs font-black uppercase tracking-wider text-primary bg-primary/5">Alianza Revenue Share (Socio de Éxito)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/30">
              <tr className="hover:bg-surface-variant/10 transition-colors">
                <td className="p-6 text-sm font-bold text-on-surface">Inversión Inicial</td>
                <td className="p-6 text-sm text-on-surface-variant">100% Presupuesto Fijo (Pago por adelantado)</td>
                <td className="p-6 text-sm text-primary font-bold bg-primary/5 flex items-center gap-1.5">
                  <Zap size={14} /> Subvencionado / $0 costo de inicio
                </td>
              </tr>
              <tr className="hover:bg-surface-variant/10 transition-colors">
                <td className="p-6 text-sm font-bold text-on-surface">Riesgo Financiero</td>
                <td className="p-6 text-sm text-on-surface-variant">Alto (Pagas lo mismo vendas o no)</td>
                <td className="p-6 text-sm text-on-surface font-semibold bg-primary/5">Cero (Solo pagas un porcentaje de las ventas que generemos)</td>
              </tr>
              <tr className="hover:bg-surface-variant/10 transition-colors">
                <td className="p-6 text-sm font-bold text-on-surface">Mantenimiento y Soporte</td>
                <td className="p-6 text-sm text-on-surface-variant">Tarifa fija mensual o cobro por hora extra</td>
                <td className="p-6 text-sm text-on-surface-variant bg-primary/5">Ingeniería proactiva, servidores y mejoras ilimitadas 24/7</td>
              </tr>
              <tr className="hover:bg-surface-variant/10 transition-colors">
                <td className="p-6 text-sm font-bold text-on-surface">Velocidad de Validación</td>
                <td className="p-6 text-sm text-on-surface-variant">Sujeto a contratos y alcances rígidos</td>
                <td className="p-6 text-sm text-on-surface bg-primary/5 font-semibold">Lanzamiento ultra rápido (Quick Wins) para validar tu idea ya</td>
              </tr>
              <tr className="hover:bg-surface-variant/10 transition-colors">
                <td className="p-6 text-sm font-bold text-on-surface">Ideal para</td>
                <td className="p-6 text-sm text-on-surface-variant">Empresas con presupuestos fijos pre-aprobados</td>
                <td className="p-6 text-sm text-primary font-bold bg-primary/5">Startups, Creadores y Negocios que inician y quieren cuidar caja</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Mobile View: High-Quality Cards (Shown only on small mobile screens) */}
        <div className="block md:hidden space-y-6">
          {[
            {
              aspect: "Inversión Inicial",
              fijo: "100% Presupuesto Fijo (Pago por adelantado)",
              alliance: "Subvencionado / $0 costo de inicio",
              allianceHighlight: true
            },
            {
              aspect: "Riesgo Financiero",
              fijo: "Alto (Pagas lo mismo vendas o no)",
              alliance: "Cero (Solo pagas si facturas)",
              allianceHighlight: false
            },
            {
              aspect: "Soporte e Innovación",
              fijo: "Tarifa fija mensual o cobro por hora de cambio",
              alliance: "Ingeniería, hosting y soporte continuo 24/7",
              allianceHighlight: false
            },
            {
              aspect: "Velocidad de Validación",
              fijo: "Lento, sujeto a cronogramas cerrados",
              alliance: "Foco en Quick Wins rápidos para validar mercado",
              allianceHighlight: true
            },
            {
              aspect: "Ideal para",
              fijo: "Empresas con capital estático pre-asignado",
              alliance: "Startups, creadores y negocios que inician hace poco",
              allianceHighlight: true
            }
          ].map((row, idx) => (
            <div key={idx} className="bg-surface-container border border-outline-variant p-5 rounded-2xl space-y-3">
              <span className="text-[10px] font-black uppercase tracking-wider text-outline block border-b border-outline-variant/30 pb-2">
                {row.aspect}
              </span>
              <div className="grid grid-cols-2 gap-4 pt-1">
                <div>
                  <span className="text-[9px] font-bold text-on-surface-variant uppercase block mb-1">Modelo Fijo</span>
                  <p className="text-xs text-on-surface-variant leading-relaxed">{row.fijo}</p>
                </div>
                <div className="border-l border-outline-variant/30 pl-4">
                  <span className="text-[9px] font-bold text-primary uppercase block mb-1">Alianza</span>
                  <p className={`text-xs leading-relaxed ${row.allianceHighlight ? 'text-primary font-bold' : 'text-on-surface'}`}>
                    {row.alliance}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ focused on strategic alignment & fears */}
      <section className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-on-surface mb-8 text-center">Preguntas sobre la Alianza</h2>
        <div className="space-y-4">
          {[
            { 
              q: '¿Cómo nos aseguramos de que aporten valor real antes de ceder un porcentaje?', 
              a: 'Es nuestro mayor compromiso. Estructuramos el inicio de la alianza en base a hitos piloto muy claros (Fase 1). Realizamos el diseño del embudo inicial y la primera automatización crítica para que puedas experimentar nuestra velocidad, precisión técnica y capacidad estratégica antes de firmar cualquier porcentaje de Revenue Share.' 
            },
            { 
              q: '¿Qué porcentaje de Revenue Share se acuerda?', 
              a: 'El porcentaje es personalizado e inteligente. Varía según la envergadura del proyecto, la inversión técnica que realicemos y el volumen actual de facturación del cliente (oscila habitualmente entre el 5% y el 20% de las ventas generadas únicamente por el canal digital que automatizamos y creamos).' 
            },
            { 
              q: '¿Tengo que ceder el control de mi marca o negocio?', 
              a: 'En absoluto. Tú mantienes el 100% del control estratégico de tu contenido, marca y propiedad de tus productos. Nosotros actuamos estrictamente como tu brazo tecnológico e ingeniería aliada, ocupándonos de que la plataforma funcione perfectamente y convierta al máximo.' 
            },
            { 
              q: '¿Qué pasa si la alianza no funciona?', 
              a: 'Nuestros contratos de alianza estratégica incluyen cláusulas de salida justas y transparentes. Si por algún motivo decides rescindir el acuerdo, se puede realizar un buy-out de la propiedad intelectual o estructurar una salida ordenada para que no detengas tu negocio.' 
            }
          ].map((faq, i) => (
            <details key={i} className="group bg-surface-container border border-outline-variant p-6 rounded-lg cursor-pointer">
              <summary className="list-none flex justify-between items-center font-bold text-on-surface text-sm md:text-base">
                {faq.q}
                <ChevronDown size={20} className="transition-transform group-open:rotate-180 text-primary shrink-0" />
              </summary>
              <div className="pt-4 text-xs md:text-sm text-on-surface-variant leading-relaxed">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </section>
    </motion.div>
  );
}
