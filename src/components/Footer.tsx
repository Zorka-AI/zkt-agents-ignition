import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import ConsultationDialog from "@/components/ConsultationDialog";
import logo from "@/assets/zkt-logo.png";

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <img src={logo} alt="ZKT-Agents Logo" className="w-8 h-8" />
            <div>
              <div className="font-display font-medium text-foreground">ZKT-Agents</div>
              <p className="text-sm text-muted-foreground">{t('footer.tagline')}</p>
            </div>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-3">
            <ConsultationDialog
              trigger={
                <Button variant="outline" size="sm" className="gap-2">
                  <Mail className="w-4 h-4" />
                  {t('footer.contact')}
                </Button>
              }
            />
            <div className="text-center md:text-right">
              <p className="text-sm text-muted-foreground">
                © {currentYear} ZKT-Agents. {t('footer.rights')}
              </p>
              <p className="text-xs text-muted-foreground mt-1">zktagents.com</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
