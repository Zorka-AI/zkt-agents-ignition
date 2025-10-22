import { useLanguage, LanguageProvider } from "@/contexts/LanguageContext";
import { Bot, Zap, Network, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ConsultationDialog from "@/components/ConsultationDialog";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ServicesDetailContent = () => {
  const { t } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [location]);

  const services = [
    {
      id: "ai-agents",
      icon: Bot,
      title: t('services.ai.title'),
      description: t('services.detail.ai.description'),
      benefits: [
        t('services.detail.ai.benefit1'),
        t('services.detail.ai.benefit2'),
        t('services.detail.ai.benefit3'),
        t('services.detail.ai.benefit4'),
      ],
    },
    {
      id: "automation",
      icon: Zap,
      title: t('services.automation.title'),
      description: t('services.detail.automation.description'),
      benefits: [
        t('services.detail.automation.benefit1'),
        t('services.detail.automation.benefit2'),
        t('services.detail.automation.benefit3'),
        t('services.detail.automation.benefit4'),
      ],
    },
    {
      id: "integration",
      icon: Network,
      title: t('services.integration.title'),
      description: t('services.detail.integration.description'),
      benefits: [
        t('services.detail.integration.benefit1'),
        t('services.detail.integration.benefit2'),
        t('services.detail.integration.benefit3'),
        t('services.detail.integration.benefit4'),
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24">
        <section className="py-16 text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl md:text-6xl font-display font-medium mb-6 text-foreground animate-fade-in tracking-tighter">
              {t('services.detail.hero.title')}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('services.detail.hero.subtitle')}
            </p>
          </div>
        </section>

        {services.map((service, index) => (
          <section
            key={service.id}
            id={service.id}
            className="py-16 scroll-mt-20"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="container mx-auto px-4">
              <Card className="glass-effect border-border overflow-hidden">
                <CardHeader className="text-center pb-8">
                  <div className="w-20 h-20 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-6">
                    <service.icon className="w-10 h-10 text-primary" />
                  </div>
                  <CardTitle className="text-4xl font-display font-medium mb-4 text-foreground tracking-tighter">{service.title}</CardTitle>
                  <CardDescription className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    {service.benefits.map((benefit, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 p-4 rounded-lg bg-background/50"
                      >
                        <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                        <p className="text-muted-foreground">{benefit}</p>
                      </div>
                    ))}
                  </div>
                  <div className="text-center pt-4">
                    <ConsultationDialog
                      trigger={
                        <Button size="lg" className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
                          {t('services.detail.cta')}
                          <ArrowRight className="w-5 h-5" />
                        </Button>
                      }
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        ))}
      </main>

      <Footer />
    </div>
  );
};

const ServicesDetail = () => {
  return (
    <LanguageProvider>
      <ServicesDetailContent />
    </LanguageProvider>
  );
};

export default ServicesDetail;
