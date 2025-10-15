import { useLanguage } from "@/contexts/LanguageContext";
import { Award, Settings, HeadphonesIcon } from "lucide-react";
import automationImg from "@/assets/automation.jpg";

const About = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Award,
      title: t('about.feature1.title'),
      description: t('about.feature1.description'),
    },
    {
      icon: Settings,
      title: t('about.feature2.title'),
      description: t('about.feature2.description'),
    },
    {
      icon: HeadphonesIcon,
      title: t('about.feature3.title'),
      description: t('about.feature3.description'),
    },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              {t('about.title')}
            </h2>
            <p className="text-xl text-primary mb-8">{t('about.subtitle')}</p>
            
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg glass-effect flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-fade-in">
            <div className="absolute inset-0 gradient-primary rounded-2xl blur-3xl opacity-20" />
            <img 
              src={automationImg} 
              alt="AI Automation" 
              className="relative rounded-2xl glass-effect w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
