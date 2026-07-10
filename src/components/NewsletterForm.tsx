import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Bell, Check, Mail, ArrowRight } from 'lucide-react';

export default function NewsletterForm() {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);
  const [newsletterLoading, setNewsletterLoading] = useState(false);
  const [newsletterError, setNewsletterError] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setNewsletterError('');

    const trimmedEmail = newsletterEmail.trim();
    if (!trimmedEmail) {
      setNewsletterError('Por favor, ingresa tu correo electrónico.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      setNewsletterError('Por favor, ingresa un correo electrónico válido.');
      return;
    }

    setNewsletterLoading(true);

    // Simulate network latency & save to localStorage
    setTimeout(() => {
      try {
        const savedSubscribers = localStorage.getItem('raices_newsletter_subscribers');
        let subscribersList = savedSubscribers ? JSON.parse(savedSubscribers) : [];
        if (!subscribersList.includes(trimmedEmail)) {
          subscribersList.push(trimmedEmail);
          localStorage.setItem('raices_newsletter_subscribers', JSON.stringify(subscribersList));
        }
        setNewsletterSubscribed(true);
        setNewsletterEmail('');
      } catch (err) {
        console.error('Error saving newsletter subscription:', err);
      } finally {
        setNewsletterLoading(false);
      }
    }, 1000);
  };

  return (
    <motion.section 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7 }}
      className="py-20 bg-surface-container/40 border-t border-outline-variant/30 relative overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="container-custom relative">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-6">
            <Bell size={24} className="animate-bounce" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-on-surface mb-3">Mantente al tanto de nuevas soluciones</h2>
          <p className="text-on-surface-variant text-sm md:text-base mb-8">
            Suscríbete a nuestro boletín para recibir noticias sobre nuevas herramientas, consejos de automatización y ofertas exclusivas de desarrollo.
          </p>

          {newsletterSubscribed ? (
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="p-6 bg-primary/10 border border-primary/20 rounded-2xl flex flex-col items-center justify-center gap-3 text-center max-w-md mx-auto"
            >
              <div className="w-10 h-10 rounded-full bg-primary/20 text-primary flex items-center justify-center">
                <Check size={16} className="stroke-3 text-on-surface" />
              </div>
              <div>
                <h4 className="font-bold text-on-surface text-base">¡Suscripción Exitosa!</h4>
                <p className="text-xs text-on-surface-variant mt-1">Te avisaremos tan pronto como tengamos novedades interesantes.</p>
              </div>
            </motion.div>
          ) : (
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <div className="relative flex-1">
                  <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-outline">
                    <Mail size={18} />
                  </span>
                  <input
                    type="email"
                    placeholder="tu-correo@empresa.com"
                    value={newsletterEmail}
                    onChange={(e) => {
                      setNewsletterEmail(e.target.value);
                      if (newsletterError) setNewsletterError('');
                    }}
                    className="w-full bg-surface-container border border-outline-variant rounded-xl py-3.5 pl-11 pr-4 text-sm text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={newsletterLoading}
                  className="py-3.5 px-6 bg-primary text-on-primary hover:brightness-110 active:scale-95 disabled:opacity-50 font-bold rounded-xl transition-all text-sm flex items-center justify-center gap-2 shrink-0 shadow-lg shadow-primary/15"
                >
                  {newsletterLoading ? (
                    <span className="w-5 h-5 border-2 border-on-primary border-t-transparent rounded-full animate-spin"></span>
                  ) : (
                    <>
                      <span>Suscribirme</span>
                      <ArrowRight size={16} />
                    </>
                  )}
                </button>
              </div>
              {newsletterError && (
                <motion.p 
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-xs text-red-500 font-medium text-center"
                >
                  {newsletterError}
                </motion.p>
              )}
              <p className="text-[11px] text-on-surface-variant mt-3">
                Respetamos tu privacidad. Puedes darte de baja en cualquier momento. Sin spam, prometido.
              </p>
            </form>
          )}
        </div>
      </div>
    </motion.section>
  );
}
