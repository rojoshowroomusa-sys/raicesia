import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, MessageSquare, Plus, Check, ChevronLeft, ChevronRight, Quote, Sparkles, X } from 'lucide-react';

interface Testimonial {
  id: string;
  text: string;
  author: string;
  role: string;
  company: string;
  initials: string;
  color: string;
  category: 'web' | 'ecommerce' | 'automation';
  metric?: string;
  rating: number;
  isUserAdded?: boolean;
}

const DEFAULT_TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    text: "Entendieron perfectamente lo que nuestro negocio necesitaba. La página web quedó moderna, extremadamente rápida y superó todas nuestras expectativas. El flujo de cotización automatizado duplicó nuestros prospectos en la primera semana.",
    author: "María López",
    role: "Fundadora",
    company: "EcoStore",
    initials: "ML",
    color: "bg-primary/20 text-primary border-primary/30",
    category: 'web',
    metric: "+220% Leads",
    rating: 5
  },
  {
    id: '2',
    text: "La automatización de nuestro embudo de ventas y sincronización de stock con ERP nos ahorró horas de trabajo administrativo diario. Es una inversión de altísimo valor que se pagó sola en el primer mes de funcionamiento.",
    author: "Carlos Gómez",
    role: "Director de Operaciones",
    company: "TechSolutions",
    initials: "CG",
    color: "bg-secondary/20 text-secondary border-secondary/30",
    category: 'automation',
    metric: "-20h/Semana",
    rating: 5
  },
  {
    id: '3',
    text: "Buscábamos una tienda online elegante y rápida, y Raíces AI superó nuestras expectativas. La integración de pasarela de pago y el calculador de envíos funciona impecable. Las ventas online crecieron sostenidamente.",
    author: "Laura Fernández",
    role: "CEO",
    company: "Boutique Aurora",
    initials: "LF",
    color: "bg-tertiary/20 text-tertiary border-tertiary/30",
    category: 'ecommerce',
    metric: "Ventas x2.5",
    rating: 5
  },
  {
    id: '4',
    text: "El servicio a medida para la integración de nuestro CRM con WhatsApp simplificó todo el proceso de soporte y fidelización. Los clientes destacan la rapidez de respuesta. Definitivamente un socio clave para nuestra escala.",
    author: "Alejandro Ruiz",
    role: "Gerente General",
    company: "Inmobiliaria Prime",
    initials: "AR",
    color: "bg-primary/20 text-primary border-primary/30",
    category: 'automation',
    metric: "Soporte 10x más rápido",
    rating: 5
  },
  {
    id: '5',
    text: "Lanzamos nuestra landing page institucional para servicios de consultoría y logramos capturar clientes internacionales de inmediato. La experiencia de navegación y la prolijidad técnica del equipo fue asombrosa.",
    author: "Sofía Medina",
    role: "Socia Principal",
    company: "Medina & Asociados",
    initials: "SM",
    color: "bg-secondary/20 text-secondary border-secondary/30",
    category: 'web',
    metric: "+150% Conversión",
    rating: 5
  },
  {
    id: '6',
    text: "Migramos toda nuestra tienda a la arquitectura moderna propuesta por Raíces AI y la velocidad de carga mejoró un 400%. Eso se tradujo directamente en una tasa de rebote bajísima y carritos más llenos.",
    author: "Esteban Russo",
    role: "Fundador",
    company: "Russo Coffee Co.",
    initials: "ER",
    color: "bg-tertiary/20 text-tertiary border-tertiary/30",
    category: 'ecommerce',
    metric: "+400% Velocidad",
    rating: 5
  }
];

const CATEGORY_LABELS = {
  all: 'Todos los casos',
  web: 'Diseño & Landing Pages',
  ecommerce: 'Tiendas & Reservas',
  automation: 'Automatizaciones & IA'
};

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(DEFAULT_TESTIMONIALS);
  const [activeFilter, setActiveFilter] = useState<'all' | 'web' | 'ecommerce' | 'automation'>('all');
  const [activeIndex, setActiveIndex] = useState(0);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Form states
  const [newAuthor, setNewAuthor] = useState('');
  const [newRole, setNewRole] = useState('');
  const [newCompany, setNewCompany] = useState('');
  const [newCategory, setNewCategory] = useState<'web' | 'ecommerce' | 'automation'>('web');
  const [newMetric, setNewMetric] = useState('');
  const [newText, setNewText] = useState('');
  const [newRating, setNewRating] = useState(5);

  // Load user testimonials from localStorage if they exist
  useEffect(() => {
    const saved = localStorage.getItem('goodpartner_testimonials');
    if (saved) {
      try {
        const parsed = JSON.parse(saved) as Testimonial[];
        // Combine with default ones, ensuring no duplicates
        const filteredUser = parsed.filter(u => !DEFAULT_TESTIMONIALS.some(d => d.id === u.id));
        setTestimonials([...DEFAULT_TESTIMONIALS, ...filteredUser]);
      } catch (e) {
        console.error("Error parsing saved testimonials", e);
      }
    }
  }, []);

  const filteredTestimonials = testimonials.filter(
    t => activeFilter === 'all' || t.category === activeFilter
  );

  // Reset active index if it goes out of bounds on filter change
  useEffect(() => {
    setActiveIndex(0);
  }, [activeFilter]);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % filteredTestimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + filteredTestimonials.length) % filteredTestimonials.length);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAuthor || !newText || !newCompany) return;

    // Helper to get initials
    const nameParts = newAuthor.split(' ');
    const initials = nameParts.map(p => p[0]).join('').substring(0, 2).toUpperCase() || 'U';

    const colors = [
      "bg-primary/20 text-primary border-primary/30",
      "bg-secondary/20 text-secondary border-secondary/30",
      "bg-tertiary/20 text-tertiary border-tertiary/30"
    ];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    const newTestimonial: Testimonial = {
      id: Date.now().toString(),
      text: newText,
      author: newAuthor,
      role: newRole || "Cliente",
      company: newCompany,
      initials,
      color: randomColor,
      category: newCategory,
      metric: newMetric || undefined,
      rating: newRating,
      isUserAdded: true
    };

    const updated = [...testimonials, newTestimonial];
    setTestimonials(updated);
    localStorage.setItem('goodpartner_testimonials', JSON.stringify(updated.filter(t => t.isUserAdded)));

    // Reset Form
    setFormSubmitted(true);
    setTimeout(() => {
      setIsFormOpen(false);
      setFormSubmitted(false);
      setNewAuthor('');
      setNewRole('');
      setNewCompany('');
      setNewCategory('web');
      setNewMetric('');
      setNewText('');
      setNewRating(5);
      // Select the newly added review's category to showcase it
      setActiveFilter('all');
    }, 2500);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-surface-container/20 to-surface border-b border-outline-variant/30 overflow-hidden relative">
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-secondary/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container-custom relative">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-xl">
            <span className="text-primary text-xs uppercase tracking-widest font-bold inline-flex items-center gap-1.5 bg-primary/10 px-3 py-1 rounded-full mb-3">
              <Sparkles size={12} /> Casos de Éxito Reales
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-on-surface tracking-tight">
              Nuestra Mejor Garantía es el Éxito de Nuestros Clientes
            </h2>
            <p className="text-on-surface-variant mt-4 text-sm md:text-base">
              Conoce el testimonio de emprendedores y empresas que optimizaron sus procesos y multiplicaron sus ventas junto a <span className="font-semibold text-primary">Raíces AI</span>.
            </p>
          </div>

          <div className="flex shrink-0 gap-3">
            <button
              onClick={() => setIsFormOpen(true)}
              className="px-5 py-3 bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 rounded-xl font-bold text-sm flex items-center gap-2 transition-all shadow-sm"
            >
              <Plus size={16} />
              Compartir mi Experiencia
            </button>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-12 pb-2 border-b border-outline-variant/20">
          {(['all', 'web', 'ecommerce', 'automation'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-300 ${
                activeFilter === cat
                  ? 'bg-primary text-on-primary shadow-lg shadow-primary/20'
                  : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container/80'
              }`}
            >
              {CATEGORY_LABELS[cat]}
            </button>
          ))}
        </div>

        {/* Carousel/Grid interactive switch display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Selected Spotlight / Carousel */}
          <div className="lg:col-span-7">
            <div className="bg-surface-container/60 border border-outline-variant p-8 md:p-10 rounded-2xl relative shadow-xl backdrop-blur-sm min-h-[350px] flex flex-col justify-between">
              
              {/* Quote marks background */}
              <div className="absolute top-6 right-8 text-primary/10 select-none">
                <Quote size={120} className="stroke-[1]" />
              </div>

              <div>
                {/* Active Testimonial Header Info */}
                <AnimatePresence mode="wait">
                  {filteredTestimonials.length > 0 ? (
                    <motion.div
                      key={filteredTestimonials[activeIndex].id}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-6 relative z-10"
                    >
                      {/* Metric Badge & Service Badge */}
                      <div className="flex flex-wrap items-center gap-3">
                        {filteredTestimonials[activeIndex].metric && (
                          <span className="text-xs font-bold text-secondary bg-secondary/15 border border-secondary/20 px-3 py-1 rounded-full flex items-center gap-1.5">
                            <Sparkles size={12} /> {filteredTestimonials[activeIndex].metric}
                          </span>
                        )}
                        <span className="text-[10px] font-bold text-outline-variant uppercase tracking-wider bg-surface-container border border-outline-variant px-2.5 py-1 rounded">
                          {filteredTestimonials[activeIndex].category === 'web' && 'Desarrollo Web'}
                          {filteredTestimonials[activeIndex].category === 'ecommerce' && 'Tienda Online'}
                          {filteredTestimonials[activeIndex].category === 'automation' && 'Automatización'}
                        </span>
                        {filteredTestimonials[activeIndex].isUserAdded && (
                          <span className="text-[10px] font-bold text-primary bg-primary/20 px-2.5 py-1 rounded-full animate-pulse">
                            ¡Tu Reseña!
                          </span>
                        )}
                      </div>

                      {/* Stars */}
                      <div className="flex gap-1">
                        {Array.from({ length: 5 }).map((_, sIdx) => (
                          <Star
                            key={sIdx}
                            size={16}
                            className={
                              sIdx < filteredTestimonials[activeIndex].rating
                                ? "fill-primary text-primary"
                                : "text-outline-variant"
                            }
                          />
                        ))}
                      </div>

                      {/* Review text */}
                      <p className="text-on-surface text-base md:text-lg leading-relaxed italic font-medium">
                        "{filteredTestimonials[activeIndex].text}"
                      </p>

                      {/* Client profile */}
                      <div className="flex items-center gap-4 pt-4 border-t border-outline-variant/30">
                        <div className={`w-12 h-12 rounded-full ${filteredTestimonials[activeIndex].color} flex items-center justify-center font-bold text-lg border`}>
                          {filteredTestimonials[activeIndex].initials}
                        </div>
                        <div>
                          <h4 className="text-on-surface font-bold text-sm md:text-base">
                            {filteredTestimonials[activeIndex].author}
                          </h4>
                          <p className="text-xs text-on-surface-variant">
                            {filteredTestimonials[activeIndex].role} en <span className="font-semibold text-on-surface">{filteredTestimonials[activeIndex].company}</span>
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ) : (
                    <div className="text-center py-12">
                      <MessageSquare size={48} className="mx-auto text-outline-variant mb-4" />
                      <p className="text-on-surface-variant">No hay testimonios en esta categoría por el momento. ¡Sé el primero en compartir el tuyo!</p>
                    </div>
                  )}
                </AnimatePresence>
              </div>

              {/* Controls */}
              {filteredTestimonials.length > 1 && (
                <div className="flex justify-between items-center mt-8 pt-4 border-t border-outline-variant/10 relative z-20">
                  <div className="text-xs text-on-surface-variant font-medium">
                    Caso <span className="font-bold text-primary">{activeIndex + 1}</span> de {filteredTestimonials.length}
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={handlePrev}
                      className="p-2 bg-surface-container-low border border-outline-variant hover:border-outline text-on-surface hover:bg-surface-variant rounded-lg transition-all"
                      aria-label="Testimonio anterior"
                    >
                      <ChevronLeft size={16} />
                    </button>
                    <button
                      onClick={handleNext}
                      className="p-2 bg-surface-container-low border border-outline-variant hover:border-outline text-on-surface hover:bg-surface-variant rounded-lg transition-all"
                      aria-label="Siguiente testimonio"
                    >
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Quick Metrics & Showcase Sidebar */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-surface-container/30 border border-outline-variant/50 rounded-2xl p-6 space-y-6">
              <h3 className="text-sm font-bold text-on-surface uppercase tracking-wider">Métricas de Impacto Agregado</h3>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-surface-container-high border border-outline-variant/30 p-4 rounded-xl">
                  <span className="block text-3xl font-extrabold text-primary font-display">98%</span>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-on-surface-variant">Satisfacción</span>
                  <p className="text-[10px] text-on-surface-variant mt-1">Calificación de 5/5 estrellas en soporte mensual.</p>
                </div>

                <div className="bg-surface-container-high border border-outline-variant/30 p-4 rounded-xl">
                  <span className="block text-3xl font-extrabold text-secondary font-display">+3x</span>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-on-surface-variant">Conversión Promedio</span>
                  <p className="text-[10px] text-on-surface-variant mt-1">En landing pages optimizadas por nuestro equipo.</p>
                </div>

                <div className="bg-surface-container-high border border-outline-variant/30 p-4 rounded-xl">
                  <span className="block text-3xl font-extrabold text-tertiary font-display">-18h</span>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-on-surface-variant">Ahorro Semanal</span>
                  <p className="text-[10px] text-on-surface-variant mt-1">De trabajo manual mediante flujos automatizados de datos.</p>
                </div>

                <div className="bg-surface-container-high border border-outline-variant/30 p-4 rounded-xl">
                  <span className="block text-3xl font-extrabold text-primary font-display">+25</span>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-on-surface-variant">Sistemas Activos</span>
                  <p className="text-[10px] text-on-surface-variant mt-1">Integrados con CRMs, WhatsApp e Inteligencia Artificial.</p>
                </div>
              </div>

              <div className="p-4 bg-primary/5 border border-primary/15 rounded-xl flex gap-3 items-start">
                <span className="text-primary mt-0.5 shrink-0">
                  <Sparkles size={16} />
                </span>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  ¿Quieres lograr resultados similares en tu negocio? Usa nuestro <strong>estimador interactivo de arriba</strong> para configurar tu proyecto e iniciar de inmediato.
                </p>
              </div>
            </div>

            {/* Micro Scrollable List of Other Reviews */}
            <div className="space-y-3 max-h-[170px] overflow-y-auto pr-2 custom-scrollbar">
              {testimonials.slice(0, 3).map((item) => (
                <div 
                  key={item.id} 
                  onClick={() => {
                    const idx = filteredTestimonials.findIndex(f => f.id === item.id);
                    if (idx !== -1) {
                      setActiveIndex(idx);
                    } else {
                      setActiveFilter('all');
                      setTimeout(() => {
                        const newIdx = testimonials.findIndex(t => t.id === item.id);
                        if (newIdx !== -1) setActiveIndex(newIdx);
                      }, 100);
                    }
                  }}
                  className={`p-3 rounded-xl border text-xs flex justify-between items-center cursor-pointer transition-all ${
                    filteredTestimonials[activeIndex]?.id === item.id 
                      ? 'bg-primary/5 border-primary shadow-sm' 
                      : 'bg-surface-container/30 border-outline-variant/40 hover:border-outline hover:bg-surface-container/60'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full ${item.color} flex items-center justify-center font-bold text-xs shrink-0`}>
                      {item.initials}
                    </div>
                    <div>
                      <h4 className="font-bold text-on-surface leading-snug">{item.author}</h4>
                      <p className="text-[10px] text-on-surface-variant leading-none mt-0.5">{item.company}</p>
                    </div>
                  </div>
                  {item.metric && (
                    <span className="text-[10px] font-bold text-secondary bg-secondary/10 px-2 py-0.5 rounded-full shrink-0">
                      {item.metric}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modal Slide-over for Submitting a Testimonial */}
      <AnimatePresence>
        {isFormOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsFormOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="bg-surface-container border border-outline-variant/60 rounded-2xl w-full max-w-lg p-6 md:p-8 relative z-10 shadow-2xl overflow-y-auto max-h-[90vh]"
            >
              <button
                onClick={() => setIsFormOpen(false)}
                className="absolute top-4 right-4 text-on-surface-variant hover:text-on-surface p-2 rounded-full bg-surface-container-high transition-colors"
                aria-label="Cerrar modal"
              >
                <X size={18} />
              </button>

              {formSubmitted ? (
                <div className="text-center py-12">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-16 h-16 bg-primary/20 text-primary rounded-full flex items-center justify-center mx-auto mb-6"
                  >
                    <Check size={32} className="stroke-[3]" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-on-surface mb-3">¡Gracias por tu reseña!</h3>
                  <p className="text-sm text-on-surface-variant">
                    Tu caso de éxito ha sido agregado exitosamente a nuestra sección interactiva y guardado en tu navegador.
                  </p>
                </div>
              ) : (
                <>
                  <div className="mb-6">
                    <h3 className="text-xl md:text-2xl font-bold text-on-surface flex items-center gap-2">
                      <MessageSquare className="text-primary" size={24} />
                      Comparte tu Éxito
                    </h3>
                    <p className="text-xs text-on-surface-variant mt-1">
                      Cuéntanos cómo Raíces AI impactó en tu negocio para seguir mejorando y construyendo juntos.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-1">Nombre Completo *</label>
                        <input
                          type="text"
                          required
                          value={newAuthor}
                          onChange={(e) => setNewAuthor(e.target.value)}
                          placeholder="Ej. Juan Pérez"
                          className="w-full bg-surface-container-low border border-outline-variant rounded-lg px-3 py-2 text-sm text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-1">Tu Cargo o Rol *</label>
                        <input
                          type="text"
                          required
                          value={newRole}
                          onChange={(e) => setNewRole(e.target.value)}
                          placeholder="Ej. Fundador, SEO Manager"
                          className="w-full bg-surface-container-low border border-outline-variant rounded-lg px-3 py-2 text-sm text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-1">Tu Empresa / Negocio *</label>
                        <input
                          type="text"
                          required
                          value={newCompany}
                          onChange={(e) => setNewCompany(e.target.value)}
                          placeholder="Ej. EcoStore"
                          className="w-full bg-surface-container-low border border-outline-variant rounded-lg px-3 py-2 text-sm text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-1">Servicio Recibido *</label>
                        <select
                          value={newCategory}
                          onChange={(e) => setNewCategory(e.target.value as any)}
                          className="w-full bg-surface-container-low border border-outline-variant rounded-lg px-3 py-2 text-sm text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                        >
                          <option value="web">Diseño & Landing Pages</option>
                          <option value="ecommerce">Tiendas & Reservas</option>
                          <option value="automation">Automatizaciones & IA</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-end">
                      <div>
                        <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-1">Impacto o Métrica (Opcional)</label>
                        <input
                          type="text"
                          value={newMetric}
                          onChange={(e) => setNewMetric(e.target.value)}
                          placeholder="Ej. Ventas x3, -10h/sem"
                          className="w-full bg-surface-container-low border border-outline-variant rounded-lg px-3 py-2 text-sm text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-2">Tu Calificación</label>
                        <div className="flex gap-1.5 pb-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <button
                              key={star}
                              type="button"
                              onClick={() => setNewRating(star)}
                              className="focus:outline-none transition-transform active:scale-125"
                            >
                              <Star
                                size={22}
                                className={star <= newRating ? 'fill-primary text-primary' : 'text-outline-variant'}
                              />
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-1">Reseña o Comentario *</label>
                      <textarea
                        required
                        rows={4}
                        value={newText}
                        onChange={(e) => setNewText(e.target.value)}
                        placeholder="Describe cómo fue trabajar con nosotros, qué logramos juntos y qué fue lo que más te gustó..."
                        className="w-full bg-surface-container-low border border-outline-variant rounded-lg p-3 text-sm text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 bg-primary text-on-primary font-bold rounded-xl hover:brightness-110 transition-all flex items-center justify-center gap-2 mt-4 shadow-lg shadow-primary/20"
                    >
                      Enviar Reseña
                    </button>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
