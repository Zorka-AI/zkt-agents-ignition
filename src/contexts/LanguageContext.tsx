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
    'footer.contact': 'Contact Us',
    
    // Services Detail Page
    'services.detail.hero.title': 'Our Solutions',
    'services.detail.hero.subtitle': 'Comprehensive AI-powered services designed to transform your business operations',
    'services.detail.ai.description': 'Deploy intelligent AI agents that operate autonomously to handle complex workflows, make data-driven decisions, and scale your operations effortlessly.',
    'services.detail.ai.benefit1': 'Automated decision-making with advanced machine learning algorithms',
    'services.detail.ai.benefit2': 'Real-time data analysis and predictive insights',
    'services.detail.ai.benefit3': 'Natural language processing for customer interactions',
    'services.detail.ai.benefit4': 'Continuous learning and optimization based on performance',
    'services.detail.automation.description': 'Transform repetitive tasks into intelligent automated workflows that increase efficiency, reduce errors, and free up your team for strategic work.',
    'services.detail.automation.benefit1': 'Workflow optimization and process streamlining',
    'services.detail.automation.benefit2': 'Integration with existing business tools and platforms',
    'services.detail.automation.benefit3': 'Error reduction through intelligent automation',
    'services.detail.automation.benefit4': 'Scalable solutions that grow with your business',
    'services.detail.integration.description': 'Seamlessly connect AI solutions with your current technology stack, ensuring smooth data flow and unified operations across all platforms.',
    'services.detail.integration.benefit1': 'Custom API integrations with popular business tools',
    'services.detail.integration.benefit2': 'Real-time data synchronization across platforms',
    'services.detail.integration.benefit3': 'Secure and reliable connection management',
    'services.detail.integration.benefit4': 'Ongoing support and maintenance',
    'services.detail.cta': 'Get Started with This Service',
    
    // Consultation Dialog
    'consultation.title': 'Schedule a Consultation',
    'consultation.description': 'Fill out the form below and our team will get back to you within 24 hours.',
    'consultation.form.name': 'Full Name',
    'consultation.form.email': 'Email Address',
    'consultation.form.phone': 'Phone Number',
    'consultation.form.company': 'Company Name',
    'consultation.form.message': 'How can we help you?',
    'consultation.form.submit': 'Submit Request',
    'consultation.success.title': 'Request Submitted!',
    'consultation.success.description': 'We will contact you soon to schedule your consultation.',
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
    'footer.contact': 'Kontaktieren Sie uns',
    
    // Services Detail Page
    'services.detail.hero.title': 'Unsere Lösungen',
    'services.detail.hero.subtitle': 'Umfassende KI-gestützte Dienstleistungen zur Transformation Ihrer Geschäftsabläufe',
    'services.detail.ai.description': 'Setzen Sie intelligente KI-Agenten ein, die autonom komplexe Workflows verwalten, datengesteuerte Entscheidungen treffen und Ihre Abläufe mühelos skalieren.',
    'services.detail.ai.benefit1': 'Automatisierte Entscheidungsfindung mit fortschrittlichen Machine-Learning-Algorithmen',
    'services.detail.ai.benefit2': 'Echtzeit-Datenanalyse und prädiktive Einblicke',
    'services.detail.ai.benefit3': 'Natürliche Sprachverarbeitung für Kundeninteraktionen',
    'services.detail.ai.benefit4': 'Kontinuierliches Lernen und Optimierung basierend auf Leistung',
    'services.detail.automation.description': 'Verwandeln Sie sich wiederholende Aufgaben in intelligente automatisierte Workflows, die Effizienz steigern, Fehler reduzieren und Ihr Team für strategische Arbeit freisetzen.',
    'services.detail.automation.benefit1': 'Workflow-Optimierung und Prozessvereinfachung',
    'services.detail.automation.benefit2': 'Integration mit bestehenden Geschäftstools und Plattformen',
    'services.detail.automation.benefit3': 'Fehlerreduzierung durch intelligente Automatisierung',
    'services.detail.automation.benefit4': 'Skalierbare Lösungen, die mit Ihrem Unternehmen wachsen',
    'services.detail.integration.description': 'Verbinden Sie KI-Lösungen nahtlos mit Ihrem aktuellen Technologie-Stack für reibungslosen Datenfluss und einheitliche Abläufe über alle Plattformen hinweg.',
    'services.detail.integration.benefit1': 'Individuelle API-Integrationen mit beliebten Geschäftstools',
    'services.detail.integration.benefit2': 'Echtzeit-Datensynchronisation über Plattformen hinweg',
    'services.detail.integration.benefit3': 'Sichere und zuverlässige Verbindungsverwaltung',
    'services.detail.integration.benefit4': 'Fortlaufende Unterstützung und Wartung',
    'services.detail.cta': 'Mit diesem Service beginnen',
    
    // Consultation Dialog
    'consultation.title': 'Beratung Vereinbaren',
    'consultation.description': 'Füllen Sie das untenstehende Formular aus und unser Team wird sich innerhalb von 24 Stunden bei Ihnen melden.',
    'consultation.form.name': 'Vollständiger Name',
    'consultation.form.email': 'E-Mail-Adresse',
    'consultation.form.phone': 'Telefonnummer',
    'consultation.form.company': 'Firmenname',
    'consultation.form.message': 'Wie können wir Ihnen helfen?',
    'consultation.form.submit': 'Anfrage Absenden',
    'consultation.success.title': 'Anfrage Eingereicht!',
    'consultation.success.description': 'Wir werden uns bald mit Ihnen in Verbindung setzen, um Ihre Beratung zu vereinbaren.',
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
