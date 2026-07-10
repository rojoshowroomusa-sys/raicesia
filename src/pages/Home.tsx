import React from 'react';
import { motion } from 'motion/react';
import { useAppContext } from '../AppContext';
import SEO from '../components/SEO';
import Testimonials from '../components/Testimonials';
import HeroSection from '../components/HeroSection';
import BentoFeatures from '../components/BentoFeatures';
import ProjectConfigurator from '../components/ProjectConfigurator';
import NewsletterForm from '../components/NewsletterForm';
import { Zap } from 'lucide-react';

export default function Home() {
  const { setCurrentPage } = useAppContext();

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 pb-16 md:pt-36 md:pb-32 overflow-hidden relative"
    >
      <SEO 
        title="Estudio de Software de Alto Rendimiento & Automatización IA" 
        description="En rAIces diseñamos y programamos embudos de venta, páginas web rápidas y automatizaciones avanzadas con Inteligencia Artificial. Haz crecer tu negocio con tecnología robusta de nivel de producción."
        keywords="ingeniería de software, desarrollo web, automatizaciones ia, embudos de venta, conversion rate optimization, cro, react, typescript"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,var(--tw-gradient-stops))] from-surface-container via-background to-background pointer-events-none -z-10" />

      <HeroSection />
      <BentoFeatures />

      {/* Work Process / Metodología */}
      <motion.section 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="py-20 bg-surface-container-lowest border-y border-outline-variant/30"
      >
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary text-sm uppercase tracking-widest font-bold">Metodología</span>
            <h2 className="text-3xl md:text-4xl font-bold text-on-surface mt-2 mb-4">Nuestro Proceso de Trabajo</h2>
            <p className="text-on-surface-variant">
              Un enfoque transparente y estructurado para convertir tus ideas en soluciones digitales reales, sin complicaciones.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-px bg-outline-variant/50 z-0"></div>

            {[
              { step: '01', title: 'Descubrimiento', desc: 'Analizamos tus necesidades, objetivos y las oportunidades de mejora para tu negocio.' },
              { step: '02', title: 'Propuesta & Diseño', desc: 'Creamos un plan de acción y diseñamos la estructura visual y lógica de la solución.' },
              { step: '03', title: 'Desarrollo ágil', desc: 'Construimos tu plataforma web o automatizaciones con entregas continuas y feedback.' },
              { step: '04', title: 'Lanzamiento', desc: 'Desplegamos el proyecto, realizamos pruebas finales y te acompañamos en el crecimiento.' }
            ].map((item, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative z-10 flex flex-col items-center text-center"
              >
                <div className="w-24 h-24 rounded-full bg-surface-container border-4 border-surface-container-lowest shadow-xl flex items-center justify-center mb-6 relative group">
                  <div className="absolute inset-0 rounded-full bg-primary/20 scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                  <span className="text-2xl font-display font-bold text-on-surface relative z-10">{item.step}</span>
                </div>
                <h3 className="text-xl font-bold text-on-surface mb-3">{item.title}</h3>
                <p className="text-sm text-on-surface-variant max-w-xs">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <ProjectConfigurator />

      {/* Portfolio / Casos de Éxito */}
      <motion.section 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="py-16 container-custom"
      >
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
          <div className="max-w-2xl">
             <span className="text-secondary text-sm uppercase tracking-widest font-bold">Portafolio</span>
             <h2 className="text-3xl md:text-4xl font-bold text-on-surface mt-2">Nuestros trabajos recientes.</h2>
          </div>
          <p className="text-on-surface-variant max-w-sm">
             Descubre cómo hemos ayudado a emprendedores y empresas a automatizar sus procesos y escalar su presencia digital.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           <motion.div 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.5, delay: 0.1 }}
             className="group cursor-pointer"
           >
              <div className="aspect-video bg-surface-container rounded-2xl border border-outline-variant mb-6 overflow-hidden relative transform group-hover:-translate-y-1 transition-all">
                 <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors"></div>
                 <div className="flex-2 border border-outline-variant/30 rounded-xl bg-surface-container flex flex-col overflow-hidden shadow-xl">
                    <div className="h-8 border-b border-outline-variant flex items-center px-3">
                       <div className="flex gap-1.5"><div className="w-2 h-2 rounded-full bg-outline-variant"></div><div className="w-2 h-2 rounded-full bg-outline-variant"></div></div>
                    </div>
                    <div className="flex-1 p-4 flex gap-4">
                       <div className="w-1/4 h-full bg-primary/10 rounded"></div>
                       <div className="flex-1 h-full flex flex-col gap-2">
                          <div className="h-4 w-3/4 bg-outline-variant/30 rounded"></div>
                          <div className="h-4 w-1/2 bg-outline-variant/30 rounded"></div>
                          <div className="h-4 w-full bg-outline-variant/10 rounded mt-4"></div>
                       </div>
                    </div>
                 </div>
              </div>
              <h3 className="text-xl font-bold text-on-surface group-hover:text-primary transition-colors">E-commerce de Moda</h3>
              <p className="text-on-surface-variant mt-2">Plataforma web con gestión de inventario automatizada y notificaciones por WhatsApp para un negocio en crecimiento.</p>
           </motion.div>
           
           <motion.div 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.5, delay: 0.2 }}
             className="group cursor-pointer"
           >
              <div className="aspect-video bg-surface-container rounded-2xl border border-outline-variant mb-6 overflow-hidden relative transform group-hover:-translate-y-1 transition-all">
                 <div className="absolute inset-0 bg-secondary/5 group-hover:bg-secondary/10 transition-colors"></div>
                 <div className="absolute inset-6 rounded-xl border border-outline-variant bg-surface-container-high shadow-lg flex flex-col overflow-hidden">
                    <div className="flex-1 p-4 flex flex-col justify-center items-center gap-4">
                       <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-primary/20 to-primary/5 flex items-center justify-center text-primary mb-6 shadow-lg shadow-primary/10">
                          <Zap size={24} className="text-secondary" />
                       </div>
                       <div className="h-4 w-1/3 bg-outline-variant/30 rounded"></div>
                       <div className="flex gap-2 w-3/4 mt-4">
                          <div className="h-2 flex-1 bg-outline-variant/20 rounded"></div>
                          <div className="h-2 flex-2 bg-secondary/30 rounded"></div>
                          <div className="h-2 flex-1 bg-outline-variant/20 rounded"></div>
                       </div>
                    </div>
                 </div>
              </div>
              <h3 className="text-xl font-bold text-on-surface group-hover:text-secondary transition-colors">Automatización Contable</h3>
              <p className="text-on-surface-variant mt-2">Sistema a medida para conciliación bancaria y generación de reportes financieros automáticos para una PYME.</p>
           </motion.div>
        </div>
      </motion.section>

      <Testimonials />

      <motion.section 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="py-20 container-custom"
      >
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-primary text-sm uppercase tracking-widest font-bold">Dudas Comunes</span>
            <h2 className="text-3xl md:text-4xl font-bold text-on-surface mt-2">Preguntas Frecuentes</h2>
          </div>
          
          <div className="space-y-4">
            {[
              {
                q: "¿Cuánto tiempo toma desarrollar una página web?",
                a: "El tiempo varía según la complejidad. Una web institucional puede tomar entre 2 a 4 semanas, mientras que un e-commerce o una plataforma a medida puede llevar de 1 a 3 meses. Siempre establecemos cronogramas claros desde el inicio."
              },
              {
                q: "¿Qué tipo de procesos pueden automatizar?",
                a: "Podemos automatizar casi cualquier tarea digital repetitiva: envío de correos, facturación, sincronización de inventarios, respuestas a clientes (chatbots), y conexión entre diferentes aplicaciones que uses (CRMs, Google Sheets, ERPs)."
              },
              {
                q: "¿Ofrecen mantenimiento después del lanzamiento?",
                a: "Sí, todos nuestros proyectos incluyen un periodo de garantía y soporte inicial. Además, ofrecemos planes de mantenimiento mensual para asegurar que tu plataforma esté siempre actualizada, segura y funcionando al 100%."
              },
              {
                q: "Ya tengo una aplicación, ¿pueden mejorarla?",
                a: "Absolutamente. Realizamos auditorías de código y diseño para aplicaciones existentes. Podemos optimizar el rendimiento, mejorar la interfaz de usuario (UI/UX) o agregar nuevas funcionalidades sin tener que empezar desde cero."
              }
            ].map((faq, i) => (
              <details key={i} className="group bg-surface-container rounded-xl border border-outline-variant overflow-hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer font-bold text-on-surface list-none">
                  {faq.q}
                  <span className="text-primary transition-transform group-open:rotate-180">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 text-on-surface-variant">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="py-24 container-custom mt-16"
      >
        <div className="relative rounded-2xl bg-surface-container-high border border-outline-variant p-12 md:p-16 overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-secondary/10 opacity-50"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-xl text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-on-surface mb-4">¿Listo para escalar tu negocio?</h2>
              <p className="text-lg text-on-surface-variant">Lleva tus ideas al siguiente nivel con soluciones tecnológicas adaptadas a tus necesidades.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <button 
                onClick={() => setCurrentPage('auth')}
                className="px-8 py-4 bg-primary text-on-primary rounded-xl font-bold hover:bg-primary-container transition-all whitespace-nowrap shadow-lg shadow-primary/20"
              >
                Postular Proyecto
              </button>
              <button className="px-8 py-4 bg-surface-container border border-outline-variant text-on-surface rounded-xl font-bold hover:bg-surface-variant transition-all whitespace-nowrap">
                Contactar Ventas
              </button>
            </div>
          </div>
        </div>
      </motion.section>

      <NewsletterForm />
    </motion.div>
  );
}
