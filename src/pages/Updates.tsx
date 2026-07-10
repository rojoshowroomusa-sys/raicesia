import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  ArrowRight, 
  Cpu, 
  TrendingUp, 
  Database, 
  CheckCircle2, 
  Bookmark, 
  Clock, 
  MessageSquare, 
  Zap, 
  ChevronRight, 
  HelpCircle, 
  Layers, 
  DollarSign, 
  BookOpen, 
  Users,
  Search,
  Filter,
  ShieldCheck
} from 'lucide-react';
import { useAppContext } from '../AppContext';
import SEO from '../components/SEO';

interface Blueprint {
  id: string;
  title: string;
  category: 'corporate' | 'education' | 'data';
  badge: string;
  summary: string;
  whatItIs: string;
  value: string;
  techStack: string[];
  difficulty: 'Fácil' | 'Media' | 'Compleja';
  implementationTime: string;
}

export default function Updates() {
  const { setCurrentPage } = useAppContext();
  const [activeCategory, setActiveCategory] = useState<'all' | 'corporate' | 'education' | 'data'>('all');
  const [selectedBlueprint, setSelectedBlueprint] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  // ROI Calculator state
  const [supportHours, setSupportHours] = useState(15);
  const [hourlyRate, setHourlyRate] = useState(25);
  const [lostLeads, setLostLeads] = useState(10);
  const [leadValue, setLeadValue] = useState(150);

  // Diagnostic checklist state
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResult, setShowResult] = useState(false);

  const diagnosticQuestions = [
    {
      question: "¿Cuál es tu principal canal de comunicación con prospectos?",
      options: [
        { label: "WhatsApp / Chatbots", val: "whatsapp" },
        { label: "Correo electrónico / Formularios", val: "email" },
        { label: "Llamadas telefónicas de voz", val: "voice" },
        { label: "Redes sociales (Instagram, LinkedIn)", val: "social" }
      ]
    },
    {
      question: "¿Qué tarea repetitiva consume más tiempo a tu equipo?",
      options: [
        { label: "Responder preguntas frecuentes de clientes", val: "faq" },
        { label: "Extraer datos de PDFs, facturas o planillas", val: "data_extraction" },
        { label: "Crear y adaptar contenido para redes/alumnos", val: "repurposing" },
        { label: "Calificar prospectos y agendar llamadas", val: "leads" }
      ]
    },
    {
      question: "¿Cómo gestionas hoy el conocimiento interno de tu empresa?",
      options: [
        { label: "Archivos PDF, Word o Google Drive dispersos", val: "docs" },
        { label: "Notion / Confluence medianamente estructurado", val: "notion" },
        { label: "Todo está en la cabeza de los fundadores/empleados", val: "heads" },
        { label: "CRM bien integrado pero sin automatización", val: "crm" }
      ]
    }
  ];

  const handleDiagnosticAnswer = (optionVal: string) => {
    const updatedAnswers = { ...answers, [currentQuestion]: optionVal };
    setAnswers(updatedAnswers);

    if (currentQuestion < diagnosticQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const resetDiagnostic = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResult(false);
  };

  const getDiagnosticRecommendation = () => {
    const primaryNeed = answers[1]; // task repetitiva
    const channel = answers[0]; // canal
    
    if (primaryNeed === 'faq' || channel === 'whatsapp') {
      return {
        title: "Tutor IA / Asistente de Soporte Contextual 24/7",
        desc: "Te recomendamos implementar un sistema RAG (Generación Aumentada por Recuperación) conectado a WhatsApp o tu web. Permite automatizar más del 80% de las consultas repetitivas de tus clientes o alumnos, manteniendo el tono y conocimiento de tu marca.",
        project: "Asistente Conversacional",
        win: "Ahorra más de 20 horas de trabajo manual a la semana."
      };
    } else if (primaryNeed === 'data_extraction') {
      return {
        title: "Automatización de Extracción Cognitiva de Datos",
        desc: "Tu mejor opción es un flujo automatizado que extraiga información estructurada de PDFs, facturas o contratos mediante LLMs y la inyecte directamente en tu CRM (Supabase, Salesforce, o Google Sheets).",
        project: "Extracción OCR inteligente",
        win: "Elimina el 99% de los errores de transcripción manual."
      };
    } else if (primaryNeed === 'repurposing') {
      return {
        title: "Motor Automatizado de Re-empaquetado de Contenido",
        desc: "Ideal para creadores y educadores. Consiste en un flujo en n8n donde subes una videoclase o zoom, y la IA genera automáticamente resúmenes PDF, exámenes interactivos, hilos de Twitter y guiones para Reels.",
        project: "Content Repurposer con IA",
        win: "Multiplica x5 la velocidad de distribución de tu marca."
      };
    } else {
      return {
        title: "Agente de Calificación de Leads & Calendario Inteligente",
        desc: "Sugerimos integrar un agente cognitivo en tu web o WhatsApp que interactúe fluidamente con tus prospectos, responda sobre precios, filtre según tu presupuesto ideal y agende reuniones directamente en Calendly/Google Calendar.",
        project: "Lead Qualifier & Booker",
        win: "Convierte leads en llamadas agendadas en tiempo récord 24/7."
      };
    }
  };

  const blueprints: Blueprint[] = [
    {
      id: "workflow-automation",
      title: "Automatización Inteligente de Flujos de Trabajo",
      category: "corporate",
      badge: "Quick Win",
      summary: "Interconecta herramientas heredadas, correos y CRMs para automatizar procesos administrativos complejos.",
      whatItIs: "Consiste en la creación de pipelines autogestionados que ingieren correos, clasifican la intención del usuario mediante procesamiento de lenguaje natural (NLP), extraen datos de adjuntos y actualizan sistemas internos en tiempo real.",
      value: "Reducción drástica del trabajo de oficina, eliminación de errores humanos en la carga de datos y un ahorro de hasta el 60% en tiempos de procesamiento de facturas.",
      techStack: ["n8n", "Gemini API", "Supabase", "Email Webhooks"],
      difficulty: "Fácil",
      implementationTime: "2-3 semanas"
    },
    {
      id: "crm-integration",
      title: "Auditoría e Integración de IA en CRMs y ERPs",
      category: "corporate",
      badge: "Alto Impacto",
      summary: "Multiplica el valor de las licencias de software que ya pagas superponiendo una capa analítica e inteligente.",
      whatItIs: "Desarrollo de conectores directos que leen los datos históricos de tus clientes para generar resúmenes automáticos antes de una llamada comercial, o predecir patrones de deserción (churn) de clientes recurrentes.",
      value: "Optimización profunda del flujo de ventas, correos personalizados pre-redactados para cada cliente y detección temprana del riesgo de cancelación.",
      techStack: ["PostgreSQL", "Node.js", "Gemini 1.5 Flash", "Salesforce API"],
      difficulty: "Media",
      implementationTime: "3-4 semanas"
    },
    {
      id: "rag-systems",
      title: "Asistentes Académicos y Sistemas RAG Corporativos",
      category: "education",
      badge: "Socio Tecnológico",
      summary: "Permite a tus empleados o alumnos chatear con los manuales, clases o normativas privadas de tu negocio.",
      whatItIs: "Arquitectura de Generación Aumentada por Recuperación (RAG). Convertimos tus PDFs, Notion o transcripciones de video en vectores semánticos almacenados de forma segura, garantizando respuestas precisas y sin alucinaciones.",
      value: "Centraliza el conocimiento organizativo, agiliza un 40% el onboarding de nuevos empleados y asiste a estudiantes las 24 horas del día con el tono exacto del docente.",
      techStack: ["Supabase", "pgvector", "Gemini 1.5 Pro", "n8n"],
      difficulty: "Compleja",
      implementationTime: "4 semanas"
    },
    {
      id: "content-repurposer",
      title: "Motor de Re-empaquetado de Contenido Automatizado",
      category: "education",
      badge: "Eficiencia Pura",
      summary: "Sube una clase o video de 2 horas y genera decenas de activos de marketing y material educativo en segundos.",
      whatItIs: "Un flujo automatizado que extrae el audio de tus clases, genera transcripciones estructuradas mediante IA de voz, sintetiza los conceptos en un PDF descargable, diseña preguntas de examen y redacta copys de promoción.",
      value: "Ahorra más de 12 horas semanales en edición de video y copy, automatizando la distribución multicanal de tu conocimiento.",
      techStack: ["n8n", "Whisper", "Gemini API", "PDFkit"],
      difficulty: "Fácil",
      implementationTime: "2 semanas"
    },
    {
      id: "text-to-sql",
      title: "Análisis de Datos Conversacional ('Chatea con tu Empresa')",
      category: "data",
      badge: "Innovación",
      summary: "Permite a los directivos consultar bases de datos complejas utilizando lenguaje natural directo.",
      whatItIs: "Un dashboard interactivo que traduce preguntas del lenguaje cotidiano (ej. '¿Cuánto facturamos en Q2 comparado con Q1?') a código estructurado SQL para consultar la base de datos de manera autónoma.",
      value: "Democratiza la toma de decisiones, elimina cuellos de botella para el equipo analítico y provee gráficos generados al instante desde chats privados de Telegram o Slack.",
      techStack: ["React", "Supabase", "Text-to-SQL Pipelines", "Gemini 1.5 Pro"],
      difficulty: "Compleja",
      implementationTime: "4-5 semanas"
    },
    {
      id: "lead-booker",
      title: "Asistentes de Ventas y Captación de Leads Omnicanal",
      category: "data",
      badge: "Revenue Maker",
      summary: "Clasifica clientes, responde objeciones y agenda llamadas en tu calendario las 24 horas del día.",
      whatItIs: "Chatbots cognitivos inteligentes de nueva generación, integrados en WhatsApp Business Cloud o widgets web. Conversan fluidamente, responden dudas de precios basándose en tu catálogo y agendan citas automáticamente.",
      value: "Evita la pérdida de clientes por demoras en respuestas. Asegura que tu equipo comercial solo atienda llamadas con leads altamente calificados.",
      techStack: ["WhatsApp API", "n8n", "Evolution API", "Calendly Integration"],
      difficulty: "Media",
      implementationTime: "3 semanas"
    }
  ];

  const filteredBlueprints = blueprints.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.techStack.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  // ROI calculations
  const monthlySavings = (supportHours * hourlyRate * 4.3);
  const recoveredSales = (lostLeads * 0.4 * leadValue); // assumes 40% conversion of recovered leads
  const totalMonthlyImpact = monthlySavings + recoveredSales;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-24 container-custom font-sans"
    >
      <SEO 
        title="Novedades, Blueprints e Impacto de IA" 
        description="Explora las últimas novedades de Inteligencia Artificial aplicadas a los negocios. Guías interactivas, estimaciones de ROI y casos prácticos de automatización."
        keywords="ia para negocios, automatizacion de flujos, calculadora roi ia, blueprints de ia, supabase, n8n, gemini api"
      />

      {/* Header section */}
      <header className="text-center max-w-4xl mx-auto mb-16">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-xs font-bold uppercase tracking-widest mb-4">
          <Sparkles size={12} className="animate-pulse" />
          Hub de Innovación & Negocios IA
        </span>
        <h1 className="text-4xl md:text-6xl font-black text-on-surface tracking-tight mb-4 text-balance">
          Casos de Éxito, <span className="bg-gradient-to-r from-primary via-purple-500 to-secondary bg-clip-text text-transparent">Blueprints & Estrategias</span>
        </h1>
        <p className="text-sm md:text-base text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
          Diseñamos soluciones técnicas reales para empresas, startups y creadores de contenido. Explora nuestros esquemas de desarrollo, estima el impacto de retorno para tu proyecto, o descubre tu próximo Quick Win.
        </p>
      </header>

      {/* Grid: 3-column Layout for Interactive Tools */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-24 items-stretch">
        
        {/* Left Column (Diagnostic Interactive Checklist) */}
        <div className="lg:col-span-4 bg-gradient-to-br from-surface-container to-surface-container-high border border-outline-variant p-6 rounded-2xl flex flex-col justify-between shadow-md">
          <div>
            <div className="flex items-center gap-2 text-amber-500 mb-3">
              <Cpu size={18} />
              <span className="text-xs font-bold uppercase tracking-wider">Test de Viabilidad IA</span>
            </div>
            <h3 className="text-lg font-black text-on-surface mb-2">Descubre tu Próximo Quick Win</h3>
            <p className="text-xs text-on-surface-variant leading-relaxed mb-6">
              Responde 3 preguntas sencillas y nuestro motor te sugerirá la integración tecnológica con el mayor retorno financiero inmediato para tu negocio.
            </p>

            <AnimatePresence mode="wait">
              {!showResult ? (
                <motion.div 
                  key={currentQuestion}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  className="space-y-4"
                >
                  <div className="flex items-center justify-between text-[10px] text-outline font-bold uppercase">
                    <span>Pregunta {currentQuestion + 1} de {diagnosticQuestions.length}</span>
                    <span>{Math.round(((currentQuestion + 1) / diagnosticQuestions.length) * 100)}%</span>
                  </div>
                  {/* Progress bar */}
                  <div className="w-full h-1 bg-surface-variant rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-primary transition-all duration-300" 
                      style={{ width: `${((currentQuestion + 1) / diagnosticQuestions.length) * 100}%` }}
                    />
                  </div>

                  <p className="text-xs font-bold text-on-surface leading-snug">
                    {diagnosticQuestions[currentQuestion].question}
                  </p>

                  <div className="flex flex-col gap-2">
                    {diagnosticQuestions[currentQuestion].options.map((option, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleDiagnosticAnswer(option.val)}
                        className="w-full text-left p-3 rounded-xl border border-outline-variant/40 bg-surface-container-high/40 text-xs text-on-surface-variant hover:text-on-surface hover:border-primary/50 hover:bg-primary/5 transition-all text-balance cursor-pointer"
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="result"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="space-y-4 bg-primary/5 border border-primary/20 p-4 rounded-xl"
                >
                  <div className="flex items-center gap-1.5 text-xs font-bold text-primary">
                    <CheckCircle2 size={14} />
                    <span>Solución Recomendada</span>
                  </div>
                  <h4 className="text-sm font-bold text-on-surface">
                    {getDiagnosticRecommendation().title}
                  </h4>
                  <p className="text-xs text-on-surface-variant leading-relaxed">
                    {getDiagnosticRecommendation().desc}
                  </p>
                  
                  <div className="pt-3 border-t border-primary/10 space-y-2">
                    <div className="text-[10px] text-on-surface-variant">
                      <strong className="text-primary font-bold">Logro Clave:</strong> {getDiagnosticRecommendation().win}
                    </div>
                  </div>

                  <div className="pt-2 flex flex-col gap-2">
                    <button
                      onClick={() => setCurrentPage('auth')}
                      className="w-full py-2 bg-primary hover:brightness-110 text-on-primary text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <span>Cotizar esta Solución</span>
                      <ArrowRight size={12} />
                    </button>
                    <button
                      onClick={resetDiagnostic}
                      className="w-full py-2 border border-outline text-on-surface text-[11px] font-bold rounded-lg transition-all hover:bg-surface-variant/40 cursor-pointer"
                    >
                      Empezar de nuevo
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="mt-6 pt-4 border-t border-outline-variant/40 flex items-center gap-2 text-[10px] text-outline">
            <Clock size={12} />
            <span>Mapeo técnico basado en arquitecturas reales Supabase + n8n + Gemini</span>
          </div>
        </div>

        {/* Right Column (ROI Calculator - Visual & Powerful) */}
        <div className="lg:col-span-8 bg-gradient-to-br from-surface-container-high to-surface-container border border-outline-variant p-6 md:p-8 rounded-2xl flex flex-col justify-between shadow-md relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-primary/5 rounded-full blur-[60px] pointer-events-none -z-10"></div>
          
          <div>
            <div className="flex items-center gap-2 text-primary mb-3">
              <TrendingUp size={18} />
              <span className="text-xs font-bold uppercase tracking-wider">Simulador de Retorno Tecnológico</span>
            </div>
            <h3 className="text-2xl font-black text-on-surface mb-2">Calcula el Impacto Financiero de la IA</h3>
            <p className="text-xs text-on-surface-variant leading-relaxed mb-6 max-w-xl">
              Ajusta los controles deslizantes para ver una aproximación matemática de cuánto dinero puedes recuperar al mes optimizando tu soporte, reduciendo el error y automatizando la calificación de leads perdidos.
            </p>

            {/* Controls sliders grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Slider 1 */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-on-surface-variant font-medium">Horas de soporte semanales:</span>
                  <strong className="text-on-surface font-bold">{supportHours} hrs</strong>
                </div>
                <input
                  type="range"
                  min="5"
                  max="80"
                  value={supportHours}
                  onChange={(e) => setSupportHours(Number(e.target.value))}
                  className="w-full accent-primary bg-surface-variant rounded-lg appearance-none h-1.5 cursor-pointer"
                />
                <span className="text-[10px] text-outline block">Tiempo respondiendo correos, WhatsApp o dudas repetitivas.</span>
              </div>

              {/* Slider 2 */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-on-surface-variant font-medium">Valor promedio por hora de trabajo:</span>
                  <strong className="text-on-surface font-bold">${hourlyRate} USD</strong>
                </div>
                <input
                  type="range"
                  min="10"
                  max="100"
                  value={hourlyRate}
                  onChange={(e) => setHourlyRate(Number(e.target.value))}
                  className="w-full accent-primary bg-surface-variant rounded-lg appearance-none h-1.5 cursor-pointer"
                />
                <span className="text-[10px] text-outline block">Costo operativo estimado de tu personal de atención.</span>
              </div>

              {/* Slider 3 */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-on-surface-variant font-medium">Leads fríos/perdidos al mes:</span>
                  <strong className="text-on-surface font-bold">{lostLeads} leads</strong>
                </div>
                <input
                  type="range"
                  min="2"
                  max="100"
                  value={lostLeads}
                  onChange={(e) => setLostLeads(Number(e.target.value))}
                  className="w-full accent-primary bg-surface-variant rounded-lg appearance-none h-1.5 cursor-pointer"
                />
                <span className="text-[10px] text-outline block">Prospectos que no compraron por tardar en responderles.</span>
              </div>

              {/* Slider 4 */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-on-surface-variant font-medium">Valor promedio de tu producto/curso:</span>
                  <strong className="text-on-surface font-bold">${leadValue} USD</strong>
                </div>
                <input
                  type="range"
                  min="30"
                  max="1500"
                  step="10"
                  value={leadValue}
                  onChange={(e) => setLeadValue(Number(e.target.value))}
                  className="w-full accent-primary bg-surface-variant rounded-lg appearance-none h-1.5 cursor-pointer"
                />
                <span className="text-[10px] text-outline block">Ticket promedio de tu academia o servicios digitales.</span>
              </div>
            </div>

            {/* Results Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-5 bg-surface-container-high border border-outline-variant rounded-2xl items-center">
              <div>
                <span className="text-[10px] font-bold text-outline uppercase tracking-wider block">Ahorro en Soporte (Mes)</span>
                <span className="text-xl md:text-2xl font-black text-on-surface">${Math.round(monthlySavings).toLocaleString()} USD</span>
                <span className="text-[10px] text-green-400 block mt-0.5">✓ Liberación de tiempo técnico</span>
              </div>
              <div>
                <span className="text-[10px] font-bold text-outline uppercase tracking-wider block">Ingresos Recuperados (Mes)</span>
                <span className="text-xl md:text-2xl font-black text-secondary">${Math.round(recoveredSales).toLocaleString()} USD</span>
                <span className="text-[10px] text-green-400 block mt-0.5">✓ Al calificar y agendar rápido</span>
              </div>
              <div className="sm:border-l sm:border-outline-variant/40 sm:pl-5">
                <span className="text-[10px] font-black text-primary uppercase tracking-wider block">Retorno Total Estimado</span>
                <span className="text-2xl md:text-3xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">${Math.round(totalMonthlyImpact).toLocaleString()} USD / mes</span>
                <span className="text-[10px] text-on-surface-variant block mt-0.5">Impacto anual: ${Math.round(totalMonthlyImpact * 12).toLocaleString()} USD</span>
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row justify-between items-center gap-4 pt-4 border-t border-outline-variant/40">
            <p className="text-xs text-on-surface-variant text-center sm:text-left">
              ¿Quieres implementar estas automatizaciones con <strong>costo inicial de $0 USD</strong> bajo Revenue Share?
            </p>
            <button
              onClick={() => setCurrentPage('alliance')}
              className="px-6 py-2.5 bg-gradient-to-r from-primary to-secondary text-on-primary text-xs font-bold rounded-xl shadow-lg hover:brightness-115 transition-all flex items-center gap-1 shrink-0 cursor-pointer"
            >
              <span>Postular a Revenue Share</span>
              <ArrowRight size={12} />
            </button>
          </div>
        </div>
      </div>

      {/* Blueprints and Architecture Blueprints List */}
      <section className="mb-24">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <span className="text-[10px] font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
            Guía de Soluciones Técnicas
          </span>
          <h2 className="text-3xl font-black text-on-surface mt-3 mb-2">
            Catálogo de Blueprints Tecnológicos
          </h2>
          <p className="text-sm text-on-surface-variant">
            Documentación y arquitectura técnica simplificada de las soluciones que programamos habitualmente para nuestros socios.
          </p>
        </div>

        {/* Search & Filters */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8 max-w-5xl mx-auto">
          {/* Tabs */}
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {[
              { id: 'all', label: 'Todos los Proyectos' },
              { id: 'corporate', label: 'B2B & Corporativo' },
              { id: 'education', label: 'Educación & Creadores' },
              { id: 'data', label: 'Análisis & Conversión' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveCategory(tab.id as any);
                  setSelectedBlueprint(null);
                }}
                className={`px-4 py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                  activeCategory === tab.id 
                    ? 'bg-primary border-primary text-on-primary shadow-md shadow-primary/20' 
                    : 'bg-surface-container border-outline-variant/40 text-on-surface-variant hover:text-on-surface hover:bg-surface-variant/40'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-outline" size={14} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar por tecnología o función..."
              className="w-full pl-10 pr-4 py-2.5 bg-surface-container border border-outline-variant/50 rounded-xl text-xs text-on-surface focus:outline-none focus:border-primary placeholder:text-outline transition-all"
            />
          </div>
        </div>

        {/* Blueprints Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto items-stretch">
          <AnimatePresence mode="popLayout">
            {filteredBlueprints.map((bp) => {
              const isOpen = selectedBlueprint === bp.id;
              return (
                <motion.div
                  key={bp.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className={`bg-surface-container border border-outline-variant p-6 rounded-2xl flex flex-col justify-between hover:border-outline transition-all duration-300 relative ${
                    isOpen ? 'ring-2 ring-primary/40 md:col-span-2 lg:col-span-3' : ''
                  }`}
                >
                  <div>
                    {/* Badge row */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="inline-block text-[9px] font-black uppercase text-secondary bg-secondary/10 px-2 py-0.5 rounded">
                        {bp.badge}
                      </span>
                      <span className="text-[10px] text-outline flex items-center gap-1 font-medium">
                        Dificultad: <strong className="text-on-surface">{bp.difficulty}</strong>
                      </span>
                    </div>

                    <h3 className="text-lg font-black text-on-surface mb-2 leading-snug">
                      {bp.title}
                    </h3>
                    <p className="text-xs text-on-surface-variant leading-relaxed mb-4">
                      {bp.summary}
                    </p>

                    {/* Expandable Technical Details */}
                    {isOpen && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="mt-6 pt-5 border-t border-outline-variant/40 space-y-4"
                      >
                        <div>
                          <h4 className="text-xs font-bold text-primary uppercase tracking-wider mb-1.5">¿En qué consiste el sistema?</h4>
                          <p className="text-xs text-on-surface leading-relaxed text-balance">
                            {bp.whatItIs}
                          </p>
                        </div>
                        
                        <div>
                          <h4 className="text-xs font-bold text-primary uppercase tracking-wider mb-1.5">Valor directo para el Negocio</h4>
                          <p className="text-xs text-on-surface-variant leading-relaxed text-balance">
                            {bp.value}
                          </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                          <div>
                            <span className="text-[10px] font-bold text-outline uppercase block mb-1">Tecnologías recomendadas:</span>
                            <div className="flex flex-wrap gap-1.5">
                              {bp.techStack.map((tech) => (
                                <span key={tech} className="text-[10px] bg-surface-variant/50 text-on-surface-variant px-2 py-0.5 rounded border border-outline-variant/20 font-mono">
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div>
                            <span className="text-[10px] font-bold text-outline uppercase block mb-1">Plazo estimado de entrega:</span>
                            <span className="text-xs text-on-surface font-semibold flex items-center gap-1">
                              <Clock size={12} className="text-primary" />
                              {bp.implementationTime}
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </div>

                  <div className="mt-6 pt-4 border-t border-outline-variant/30 flex items-center justify-between">
                    <button
                      onClick={() => setSelectedBlueprint(isOpen ? null : bp.id)}
                      className="text-xs text-primary hover:text-primary-container font-bold flex items-center gap-1 transition-colors cursor-pointer"
                    >
                      <span>{isOpen ? 'Ocultar detalles' : 'Ver arquitectura técnica'}</span>
                      <ChevronRight size={14} className={`transform transition-transform ${isOpen ? 'rotate-90' : ''}`} />
                    </button>

                    <button
                      onClick={() => setCurrentPage('auth')}
                      className="text-[11px] font-bold text-on-surface bg-surface-container-high hover:bg-surface-variant border border-outline-variant px-3.5 py-1.5 rounded-xl transition-all cursor-pointer"
                    >
                      Cotizar
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </section>

      {/* Scarcity CTA */}
      <section className="text-center max-w-4xl mx-auto bg-gradient-to-br from-surface-container via-surface-container-high to-surface-container/80 border-2 border-primary/25 p-8 md:p-14 rounded-3xl relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 left-0 w-44 h-44 bg-primary/10 rounded-full blur-[100px] pointer-events-none -z-10"></div>
        <div className="absolute bottom-0 right-0 w-44 h-44 bg-secondary/10 rounded-full blur-[100px] pointer-events-none -z-10"></div>

        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-xs font-semibold tracking-wider uppercase mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-ping"></span>
          <span>Cupos Limitados de Alianza • Q3 2026</span>
        </div>

        <h2 className="text-3xl md:text-5xl font-black text-on-surface mb-6 tracking-tight leading-none text-balance font-sans">
          ¿Listo para automatizar e <span className="bg-gradient-to-r from-primary via-amber-400 to-secondary bg-clip-text text-transparent">incrementar tu facturación</span>?
        </h2>
        
        <p className="text-sm md:text-base text-on-surface-variant mb-10 max-w-2xl mx-auto leading-relaxed text-balance">
          No facturamos simplemente horas de desarrollo. Nos unimos a tu trinchera bajo un modelo de <strong>Revenue Share (Riesgo Compartido)</strong> o planes fijos ágiles para acelerar tu crecimiento. Postula hoy y asegura tu sesión de consulta técnica inicial.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            onClick={() => setCurrentPage('auth')} 
            className="w-full sm:w-auto px-8 py-4 bg-primary text-on-primary rounded-xl font-bold hover:brightness-110 transition-all shadow-lg shadow-primary/25 flex items-center justify-center gap-2 cursor-pointer text-sm tracking-wide"
          >
            <span>Postular mi Proyecto</span>
            <ArrowRight size={18} />
          </button>
          
          <button 
            onClick={() => setCurrentPage('alliance')} 
            className="w-full sm:w-auto px-8 py-4 border border-outline text-on-surface rounded-xl font-bold hover:bg-surface-variant/50 transition-all cursor-pointer text-sm tracking-wide"
          >
            Leer Más Sobre Revenue Share
          </button>
        </div>

        <div className="mt-6 text-[10px] text-outline flex items-center justify-center gap-1.5">
          <ShieldCheck size={12} />
          <span>Ingenieros de guardia disponibles 24/7 para el soporte continuo de nuestros socios de negocio.</span>
        </div>
      </section>
    </motion.div>
  );
}
