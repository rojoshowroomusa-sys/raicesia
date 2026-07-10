import React from 'react';
import { Globe, Share2, HelpCircle } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="w-full bg-surface-container-lowest border-t border-outline-variant mt-auto">
      <div className="container-custom py-16 grid grid-cols-2 md:grid-cols-4 gap-12">
        <div className="col-span-2 md:col-span-1">
          <div className="mb-4">
            <Logo size="sm" showSubtitle={true} className="!items-start" />
          </div>
          <p className="text-sm text-on-surface-variant max-w-xs leading-relaxed">
            Potenciando negocios a través del desarrollo web, diseño a medida y automatizaciones inteligentes con Inteligencia Artificial.
          </p>
        </div>
        
        <div>
          <h5 className="text-sm font-bold text-on-surface mb-6 uppercase tracking-widest">Servicios</h5>
          <ul className="flex flex-col gap-3">
            {['Desarrollo Web', 'Automatizaciones', 'Consultoría'].map(link => (
              <li key={link}>
                <a href="#" className="text-sm text-on-surface-variant hover:text-secondary transition-colors">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h5 className="text-sm font-bold text-on-surface mb-6 uppercase tracking-widest">Compañía</h5>
          <ul className="flex flex-col gap-3">
            {['Acerca de', 'Empleos', 'Privacidad'].map(link => (
              <li key={link}>
                <a href="#" className="text-sm text-on-surface-variant hover:text-secondary transition-colors">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h5 className="text-sm font-bold text-on-surface mb-6 uppercase tracking-widest">Conectar</h5>
          <div className="flex gap-4">
            <button className="w-10 h-10 rounded-full bg-surface-variant flex items-center justify-center text-on-surface-variant hover:bg-primary/20 hover:text-primary transition-colors">
              <Globe size={18} />
            </button>
            <button className="w-10 h-10 rounded-full bg-surface-variant flex items-center justify-center text-on-surface-variant hover:bg-primary/20 hover:text-primary transition-colors">
              <Share2 size={18} />
            </button>
            <button className="w-10 h-10 rounded-full bg-surface-variant flex items-center justify-center text-on-surface-variant hover:bg-primary/20 hover:text-primary transition-colors">
              <HelpCircle size={18} />
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-outline-variant/30">
        <div className="container-custom py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-sm text-on-surface-variant">© 2026 Raíces AI. Todos los derechos reservados.</span>
          <div className="flex gap-8">
            <a href="#" className="text-sm text-on-surface-variant hover:text-primary transition-colors">Estado</a>
            <a href="#" className="text-sm text-on-surface-variant hover:text-primary transition-colors">Cookies</a>
            <a href="#" className="text-sm text-on-surface-variant hover:text-primary transition-colors">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
