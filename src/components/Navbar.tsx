import React from 'react';
import { useAppContext } from '../AppContext';
import Logo from './Logo';

export default function Navbar() {
  const { currentPage, setCurrentPage, isAuthenticated } = useAppContext();

  const navItems = [
    { id: 'home', label: 'Plataforma' },
    { id: 'how-it-works', label: 'Soluciones' },
    { id: 'pricing', label: 'Planes' },
    { id: 'alliance', label: 'Revenue Share' },
    { id: 'updates', label: 'Novedades' }
  ];

  return (
    <nav className="fixed top-0 w-full z-50 glass-nav transition-all duration-150">
      <div className="container-custom h-16 flex items-center justify-between">
        <div className="flex items-center gap-12">
          <div 
            className="cursor-pointer scale-90 hover:scale-95 transition-transform origin-left"
            onClick={() => setCurrentPage('home')}
          >
            <Logo size="sm" showSubtitle={false} />
          </div>
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id as any)}
                className={`text-sm transition-colors ${
                  currentPage === item.id 
                    ? 'text-primary font-bold border-b-2 border-primary pb-1' 
                    : 'text-on-surface-variant hover:text-primary'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-4">
          {isAuthenticated ? (
            <button 
              onClick={() => setCurrentPage('dashboard')}
              className="px-6 py-2 bg-surface-container border border-outline-variant text-on-surface rounded-lg text-sm font-bold hover:bg-surface-variant transition-all"
            >
              Ir al Panel
            </button>
          ) : (
            <>
              <button 
                onClick={() => setCurrentPage('auth')}
                className="hidden sm:block px-4 py-2 text-sm font-medium text-on-surface hover:bg-surface-variant/50 rounded-lg transition-all"
              >
                Iniciar Sesión
              </button>
              <button 
                onClick={() => setCurrentPage('auth')}
                className="px-6 py-2 bg-primary text-on-primary rounded-lg text-sm font-bold shadow-lg shadow-primary/20 hover:bg-primary-container transition-all"
              >
                Comenzar
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
