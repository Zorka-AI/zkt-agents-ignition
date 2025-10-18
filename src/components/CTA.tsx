import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Calendar } from "lucide-react";
import ConsultationDialog from "@/components/ConsultationDialog";

const CTA = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="relative glass-effect rounded-3xl p-12 md:p-16 text-center overflow-hidden">
          {/* Background Glow */}
          <div className="absolute inset-0 gradient-primary opacity-10 blur-3xl" />
          
          <div className="relative z-10 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              {t('cta.title')}
            </h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              {t('cta.description')}
            </p>
            <ConsultationDialog
              trigger={
                <Button size="lg" className="gap-2 gradient-primary text-primary-foreground glow-subtle hover:glow-primary transition-all">
                  <Calendar className="w-5 h-5" />
                  {t('cta.button')}
                </Button>
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
