import { useLanguage } from "@/contexts/LanguageContext";
import { Bot, Zap, Network } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Bot,
      title: t('services.ai.title'),
      description: t('services.ai.description'),
    },
    {
      icon: Zap,
      title: t('services.automation.title'),
      description: t('services.automation.description'),
    },
    {
      icon: Network,
      title: t('services.integration.title'),
      description: t('services.integration.description'),
    },
  ];

  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            {t('services.title')}
          </h2>
          <p className="text-xl text-muted-foreground">{t('services.subtitle')}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="glass-effect border-border hover:border-primary transition-all duration-300 hover:glow-subtle group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="w-16 h-16 rounded-lg gradient-primary flex items-center justify-center mb-4 group-hover:animate-glow">
                  <service.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-2xl text-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
