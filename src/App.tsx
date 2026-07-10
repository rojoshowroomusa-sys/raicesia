import React, { Suspense } from 'react';
import { AppProvider, useAppContext } from './AppContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingConsultation from './components/FloatingConsultation';
import ScrollProgress from './components/ScrollProgress';
import { AnimatePresence } from 'motion/react';

// Lazy loading pages for better performance
const Home = React.lazy(() => import('./pages/Home'));
const HowItWorks = React.lazy(() => import('./pages/HowItWorks'));
const Pricing = React.lazy(() => import('./pages/Pricing'));
const Alliance = React.lazy(() => import('./pages/Alliance'));
const Updates = React.lazy(() => import('./pages/Updates'));
const Auth = React.lazy(() => import('./pages/Auth'));
const Dashboard = React.lazy(() => import('./pages/Dashboard'));

// Simple loading fallback
const PageLoader = () => (
  <div className="flex-1 flex items-center justify-center min-h-[50vh]">
    <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
  </div>
);

function MainLayout() {
  const { currentPage } = useAppContext();

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <Home key="home" />;
      case 'how-it-works': return <HowItWorks key="how" />;
      case 'pricing': return <Pricing key="price" />;
      case 'alliance': return <Alliance key="alliance" />;
      case 'updates': return <Updates key="updates" />;
      case 'auth': return <Auth key="auth" />;
      case 'dashboard': return <Dashboard key="dash" />;
      default: return <Home key="home" />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <ScrollProgress />
      <Navbar />
      <main className="grow flex flex-col">
        <AnimatePresence mode="wait">
          <Suspense fallback={<PageLoader />}>
            {renderPage()}
          </Suspense>
        </AnimatePresence>
      </main>
      {currentPage !== 'auth' && currentPage !== 'dashboard' && <Footer />}
      {currentPage !== 'dashboard' && <FloatingConsultation />}
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <MainLayout />
    </AppProvider>
  );
}

