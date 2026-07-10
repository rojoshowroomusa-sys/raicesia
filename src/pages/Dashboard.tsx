import React from 'react';
import { useAppContext } from '../AppContext';
import { motion } from 'motion/react';
import SEO from '../components/SEO';
import { Activity, Shield, LogOut, User, Bell, Settings, Target } from 'lucide-react';

export default function Dashboard() {
  const { logout } = useAppContext();

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="pt-24 pb-xl container-custom min-h-screen"
    >
      <SEO 
        title="Panel de Control de Proyecto" 
        description="Panel administrativo privado de rAIces para monitorear el progreso técnico, integraciones, métricas del embudo y optimizaciones en tiempo real."
        keywords="panel de control, estado del proyecto, metricas de embudo, desarrollo de software, rAIces panel"
      />
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-xl gap-4">
        <div>
          <h1 className="text-4xl font-bold text-on-surface mb-2">Panel de Control</h1>
          <p className="text-on-surface-variant">Bienvenido de nuevo. Aquí tienes un resumen de tu progreso en tiempo real.</p>
        </div>
        <div className="flex gap-4">
          <button className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface hover:text-primary transition-colors border border-outline-variant relative">
            <Bell size={20} />
            <span className="absolute top-0 right-0 w-3 h-3 bg-error rounded-full border-2 border-surface"></span>
          </button>
          <button className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface hover:text-primary transition-colors border border-outline-variant">
            <Settings size={20} />
          </button>
          <button 
            onClick={logout}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-surface-container hover:bg-surface-variant text-on-surface transition-colors border border-outline-variant"
          >
            <LogOut size={18} />
            <span className="font-semibold text-sm">Cerrar Sesión</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-lg mb-lg">
        <motion.div whileHover={{ y: -5 }} className="glass-card p-6 rounded-xl border-l-4 border-l-primary">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-sm text-on-surface-variant font-medium mb-1">Rendimiento</p>
              <h3 className="text-3xl font-bold text-on-surface">98.5%</h3>
            </div>
            <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
              <Activity size={24} />
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm text-secondary">
            <span className="font-semibold">+2.4%</span>
            <span className="text-on-surface-variant">vs la semana pasada</span>
          </div>
        </motion.div>

        <motion.div whileHover={{ y: -5 }} className="glass-card p-6 rounded-xl border-l-4 border-l-secondary">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-sm text-on-surface-variant font-medium mb-1">Proyectos Activos</p>
              <h3 className="text-3xl font-bold text-on-surface">12</h3>
            </div>
            <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center text-secondary">
              <Target size={24} />
            </div>
          </div>
          <div className="w-full bg-surface-container-high rounded-full h-2 mt-4">
            <div className="bg-secondary h-2 rounded-full" style={{ width: '60%' }}></div>
          </div>
        </motion.div>

        <motion.div whileHover={{ y: -5 }} className="glass-card p-6 rounded-xl border-l-4 border-l-tertiary">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-sm text-on-surface-variant font-medium mb-1">Puntuación de Seguridad</p>
              <h3 className="text-3xl font-bold text-on-surface">A+</h3>
            </div>
            <div className="w-10 h-10 rounded-lg bg-tertiary/20 flex items-center justify-center text-tertiary">
              <Shield size={24} />
            </div>
          </div>
          <p className="text-sm text-on-surface-variant mt-2">Todo el sistema está encriptado y seguro.</p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-lg">
        <div className="lg:col-span-2 glass-card rounded-xl p-6">
          <h3 className="text-xl font-bold text-on-surface mb-6">Actividad Reciente</h3>
          <div className="space-y-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-primary mt-1"></div>
                <div className="flex-grow border-b border-outline-variant/30 pb-4">
                  <p className="text-on-surface font-medium">Sincronización de base de datos completada</p>
                  <p className="text-sm text-on-surface-variant">Hace {i * 2} horas • Entorno de producción</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card rounded-xl p-6">
          <h3 className="text-xl font-bold text-on-surface mb-6">Equipo</h3>
          <div className="space-y-4">
            {['Elena Rodriguez', 'Marcus Chen', 'Sarah Jenkins'].map((name, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface font-bold border border-outline-variant">
                  {name.charAt(0)}
                </div>
                <div>
                  <p className="text-on-surface font-medium text-sm">{name}</p>
                  <p className="text-xs text-on-surface-variant">Online</p>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-6 py-2 border border-outline-variant rounded-lg text-sm font-semibold hover:bg-surface-variant transition-colors">
            Invitar Miembro
          </button>
        </div>
      </div>
    </motion.div>
  );
}
