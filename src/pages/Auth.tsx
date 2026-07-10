import React, { useState } from 'react';
import { useAppContext } from '../AppContext';
import { motion } from 'motion/react';
import SEO from '../components/SEO';
import { Mail, User, MessageSquare, Send, CheckCircle2 } from 'lucide-react';

export default function Auth() {
  const { setCurrentPage, selectedProject, setSelectedProject } = useAppContext();
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Parse pre-selected values if they exist
  let initialService = "";
  let initialDetails = "";
  if (selectedProject) {
    try {
      const parsed = JSON.parse(selectedProject);
      initialService = parsed.service || "";
      initialDetails = parsed.details || "";
    } catch (e) {
      initialDetails = selectedProject;
    }
  }

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [serviceType, setServiceType] = useState(initialService);
  const [details, setDetails] = useState(initialDetails);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setSelectedProject(null); // Clear selected project after submission
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex items-center justify-center px-4 py-24 relative overflow-hidden"
    >
      <SEO 
        title="Postular Proyecto / Consulta de Software" 
        description="Envía los detalles de tu sitio web, embudo o aplicación. Nuestro equipo técnico de rAIces analizará tus necesidades y diseñará la arquitectura de nivel de producción ideal."
        keywords="postulacion, contacto, consultoria de software, arquitectura web, soporte tecnico"
      />
      {/* Background decoration */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px] -z-10"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[100px] -z-10"></div>

      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="glass-card w-full max-w-lg p-8 rounded-2xl relative"
      >
        {isSubmitted ? (
          <div className="text-center py-12">
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6 text-primary"
            >
              <CheckCircle2 size={40} />
            </motion.div>
            <h2 className="text-3xl font-bold text-on-surface mb-4">¡Mensaje Enviado!</h2>
            <p className="text-on-surface-variant mb-8">
              Gracias por contactarnos. Nuestro equipo revisará tu solicitud y se comunicará contigo a la brevedad.
            </p>
            <button 
              onClick={() => setCurrentPage('home')}
              className="px-8 py-3 bg-surface-container border border-outline-variant text-on-surface font-bold rounded-lg hover:bg-surface-variant transition-colors"
            >
              Volver al Inicio
            </button>
          </div>
        ) : (
          <>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-on-surface mb-2">
                Solicitar Presupuesto
              </h2>
              <p className="text-on-surface-variant text-sm">
                Cuéntanos sobre tu proyecto y te ayudaremos a hacerlo realidad.
              </p>
              {selectedProject && (
                <div className="mt-4 p-3 bg-primary/10 border border-primary/20 rounded-lg text-xs text-primary font-medium">
                  ✨ Propuesta preconfigurada desde el estimador interactivo
                </div>
              )}
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-on-surface-variant mb-1">Nombre Completo</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-outline">
                    <User size={18} />
                  </div>
                  <input 
                    type="text" 
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-surface-container border border-outline-variant rounded-lg py-2.5 pl-10 pr-4 text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                    placeholder="Ej. Juan Pérez"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-on-surface-variant mb-1">Correo Electrónico</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-outline">
                    <Mail size={18} />
                  </div>
                  <input 
                    type="email" 
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-surface-container border border-outline-variant rounded-lg py-2.5 pl-10 pr-4 text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                    placeholder="ejemplo@empresa.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-on-surface-variant mb-1">Tipo de Servicio</label>
                <select 
                  className="w-full bg-surface-container border border-outline-variant rounded-lg py-2.5 px-4 text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors appearance-none"
                  required
                  value={serviceType}
                  onChange={(e) => setServiceType(e.target.value)}
                >
                  <option value="" disabled>Selecciona una opción</option>
                  <option value="web">Desarrollo Web / Landing Page</option>
                  <option value="ecommerce">Tienda Online / E-commerce</option>
                  <option value="automation">Automatización de Procesos</option>
                  <option value="app">Desarrollo o Mejora de App</option>
                  <option value="other">Otro / Consultoría</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-on-surface-variant mb-1">Detalles del Proyecto</label>
                <div className="relative">
                  <div className="absolute top-3 left-3 pointer-events-none text-outline">
                    <MessageSquare size={18} />
                  </div>
                  <textarea 
                    required
                    rows={6}
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    className="w-full bg-surface-container border border-outline-variant rounded-lg py-2.5 pl-10 pr-4 text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                    placeholder="Describe brevemente tus necesidades, objetivos o problemas a resolver..."
                  ></textarea>
                </div>
              </div>

              <button 
                type="submit"
                className="w-full bg-primary text-on-primary font-bold py-3 rounded-lg hover:brightness-110 transition-all flex items-center justify-center gap-2 mt-6 shadow-lg shadow-primary/20"
              >
                Enviar Solicitud
                <Send size={18} />
              </button>
            </form>
          </>
        )}
      </motion.div>
    </motion.div>
  );
}
