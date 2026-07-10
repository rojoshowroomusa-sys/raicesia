import React, { createContext, useContext, useState, ReactNode } from 'react';

type Page = 'home' | 'how-it-works' | 'pricing' | 'alliance' | 'updates' | 'auth' | 'dashboard';

interface AppContextType {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
  selectedProject: string | null;
  setSelectedProject: (project: string | null) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const login = () => setIsAuthenticated(true);
  const logout = () => {
    setIsAuthenticated(false);
    setCurrentPage('home');
  };

  return (
    <AppContext.Provider value={{ 
      currentPage, 
      setCurrentPage, 
      isAuthenticated, 
      login, 
      logout,
      selectedProject,
      setSelectedProject
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useAppContext must be used within AppProvider');
  return context;
};
