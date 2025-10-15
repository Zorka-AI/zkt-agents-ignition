import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Globe } from "lucide-react";

const Header = () => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <header className="fixed top-0 w-full z-50 glass-effect border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center">
            <span className="text-xl font-bold text-primary-foreground">Z</span>
          </div>
          <span className="text-xl font-bold text-foreground">ZKT-Agents</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">
            {t('nav.services')}
          </a>
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
            {t('nav.about')}
          </a>
          <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
            {t('nav.contact')}
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setLanguage(language === 'en' ? 'de' : 'en')}
            className="gap-2"
          >
            <Globe className="w-4 h-4" />
            {language === 'en' ? 'DE' : 'EN'}
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
