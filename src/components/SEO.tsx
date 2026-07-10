import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogType?: string;
  ogImage?: string;
}

export default function SEO({ 
  title, 
  description, 
  keywords = "rAIces, revenue share, embudos de venta, automatizaciones IA, ingeniería de software, SaaS, marketing digital, crecimiento de negocio", 
  ogType = "website",
  ogImage = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&h=630&q=80"
}: SEOProps) {
  
  useEffect(() => {
    // 1. Update document title
    const formattedTitle = `${title} | rAIces - Alianzas de Software & IA`;
    document.title = formattedTitle;

    // Helper function to update or create meta tags
    const updateMetaTag = (attribute: string, attrValue: string, contentValue: string, isProperty = false) => {
      const selector = isProperty 
        ? `meta[property="${attrValue}"]` 
        : `meta[${attribute}="${attrValue}"]`;
      
      let meta = document.head.querySelector(selector);
      
      if (!meta) {
        meta = document.createElement('meta');
        if (isProperty) {
          meta.setAttribute('property', attrValue);
        } else {
          meta.setAttribute(attribute, attrValue);
        }
        document.head.appendChild(meta);
      }
      
      meta.setAttribute('content', contentValue);
    };

    // 2. Update standard meta tags
    updateMetaTag('name', 'description', description);
    updateMetaTag('name', 'keywords', keywords);
    updateMetaTag('name', 'robots', 'index, follow');

    // 3. Update Open Graph (Social SEO)
    updateMetaTag('', 'og:title', formattedTitle, true);
    updateMetaTag('', 'og:description', description, true);
    updateMetaTag('', 'og:type', ogType, true);
    updateMetaTag('', 'og:image', ogImage, true);
    updateMetaTag('', 'og:url', window.location.href, true);
    updateMetaTag('', 'og:site_name', 'rAIces', true);

    // 4. Update Twitter Cards
    updateMetaTag('name', 'twitter:card', 'summary_large_image');
    updateMetaTag('name', 'twitter:title', formattedTitle);
    updateMetaTag('name', 'twitter:description', description);
    updateMetaTag('name', 'twitter:image', ogImage);

  }, [title, description, keywords, ogType, ogImage]);

  return null; // This component updates the head via effects, so it renders nothing
}
