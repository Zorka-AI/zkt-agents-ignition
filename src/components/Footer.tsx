import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
              <span className="text-lg font-bold text-primary-foreground">Z</span>
            </div>
            <div>
              <div className="font-bold text-foreground">ZKT-Agents</div>
              <p className="text-sm text-muted-foreground">{t('footer.tagline')}</p>
            </div>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground">
              © {currentYear} ZKT-Agents. {t('footer.rights')}
            </p>
            <p className="text-xs text-muted-foreground mt-1">zktagents.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
