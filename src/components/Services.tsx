import { useLanguage } from "@/contexts/LanguageContext";
import { Bot, Zap, Network } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Bot,
      title: t('services.ai.title'),
      description: t('services.ai.description'),
      link: '/services#ai-agents',
    },
    {
      icon: Zap,
      title: t('services.automation.title'),
      description: t('services.automation.description'),
      link: '/services#automation',
    },
    {
      icon: Network,
      title: t('services.integration.title'),
      description: t('services.integration.description'),
      link: '/services#integration',
    },
  ];

  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-medium mb-4 text-foreground tracking-tighter">
            {t('services.title')}
          </h2>
          <p className="text-xl text-muted-foreground">{t('services.subtitle')}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link key={index} to={service.link}>
              <Card 
                className="glass-effect border-border hover:border-primary transition-all duration-300 group cursor-pointer h-full"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-16 h-16 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl font-display font-medium text-foreground">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
