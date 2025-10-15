import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'de';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    'nav.services': 'Services',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.title': 'AI Agents & Automations',
    'hero.subtitle': 'Transform Your Business',
    'hero.description': 'Harness the power of intelligent AI agents to automate workflows, boost productivity, and drive innovation. Custom solutions tailored to your needs.',
    'hero.cta': 'Get Started',
    'hero.cta.secondary': 'Learn More',
    
    // Services
    'services.title': 'Our Services',
    'services.subtitle': 'Cutting-Edge AI Solutions',
    'services.ai.title': 'AI Agents',
    'services.ai.description': 'Intelligent autonomous agents that work 24/7 to handle complex tasks and decision-making processes.',
    'services.automation.title': 'Smart Automations',
    'services.automation.description': 'Streamline your operations with intelligent workflow automation that learns and adapts to your business.',
    'services.integration.title': 'System Integration',
    'services.integration.description': 'Seamlessly connect AI solutions with your existing tools and platforms for maximum efficiency.',
    
    // About
    'about.title': 'Why ZKT-Agents?',
    'about.subtitle': 'Innovation Meets Excellence',
    'about.feature1.title': 'Proven Expertise',
    'about.feature1.description': 'Years of experience in AI and automation technology.',
    'about.feature2.title': 'Custom Solutions',
    'about.feature2.description': 'Tailored AI agents designed specifically for your business needs.',
    'about.feature3.title': '24/7 Support',
    'about.feature3.description': 'Round-the-clock technical assistance and monitoring.',
    
    // CTA
    'cta.title': 'Ready to Transform Your Business?',
    'cta.description': 'Join leading companies leveraging AI to stay ahead of the competition.',
    'cta.button': 'Schedule a Consultation',
    
    // Footer
    'footer.tagline': 'Empowering businesses with intelligent automation',
    'footer.rights': 'All rights reserved.',
  },
  de: {
    // Navigation
    'nav.services': 'Leistungen',
    'nav.about': 'Über uns',
    'nav.contact': 'Kontakt',
    
    // Hero
    'hero.title': 'KI-Agenten & Automatisierung',
    'hero.subtitle': 'Transformieren Sie Ihr Geschäft',
    'hero.description': 'Nutzen Sie die Kraft intelligenter KI-Agenten zur Automatisierung von Workflows, Steigerung der Produktivität und Förderung von Innovation. Maßgeschneiderte Lösungen für Ihre Bedürfnisse.',
    'hero.cta': 'Jetzt Starten',
    'hero.cta.secondary': 'Mehr Erfahren',
    
    // Services
    'services.title': 'Unsere Leistungen',
    'services.subtitle': 'Modernste KI-Lösungen',
    'services.ai.title': 'KI-Agenten',
    'services.ai.description': 'Intelligente autonome Agenten, die rund um die Uhr komplexe Aufgaben und Entscheidungsprozesse bewältigen.',
    'services.automation.title': 'Intelligente Automatisierung',
    'services.automation.description': 'Optimieren Sie Ihre Abläufe mit intelligenter Workflow-Automatisierung, die lernt und sich an Ihr Geschäft anpasst.',
    'services.integration.title': 'Systemintegration',
    'services.integration.description': 'Nahtlose Integration von KI-Lösungen in Ihre bestehenden Tools und Plattformen für maximale Effizienz.',
    
    // About
    'about.title': 'Warum ZKT-Agents?',
    'about.subtitle': 'Innovation trifft Exzellenz',
    'about.feature1.title': 'Bewährte Expertise',
    'about.feature1.description': 'Jahrelange Erfahrung in KI- und Automatisierungstechnologie.',
    'about.feature2.title': 'Maßgeschneiderte Lösungen',
    'about.feature2.description': 'KI-Agenten speziell für Ihre Geschäftsanforderungen entwickelt.',
    'about.feature3.title': '24/7 Support',
    'about.feature3.description': 'Rund-um-die-Uhr technische Unterstützung und Überwachung.',
    
    // CTA
    'cta.title': 'Bereit, Ihr Geschäft zu transformieren?',
    'cta.description': 'Schließen Sie sich führenden Unternehmen an, die KI nutzen, um der Konkurrenz voraus zu sein.',
    'cta.button': 'Beratung Vereinbaren',
    
    // Footer
    'footer.tagline': 'Unternehmen mit intelligenter Automatisierung stärken',
    'footer.rights': 'Alle Rechte vorbehalten.',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
