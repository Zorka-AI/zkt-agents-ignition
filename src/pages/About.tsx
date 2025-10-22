import { useLanguage, LanguageProvider } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Bot, Users, Target, Lightbulb } from "lucide-react";

const AboutContent = () => {
  const { t } = useLanguage();

  const values = [
    {
      icon: Bot,
      title: t('about.page.values.innovation.title'),
      description: t('about.page.values.innovation.description'),
    },
    {
      icon: Users,
      title: t('about.page.values.collaboration.title'),
      description: t('about.page.values.collaboration.description'),
    },
    {
      icon: Target,
      title: t('about.page.values.results.title'),
      description: t('about.page.values.results.description'),
    },
    {
      icon: Lightbulb,
      title: t('about.page.values.expertise.title'),
      description: t('about.page.values.expertise.description'),
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-display font-medium mb-6 text-foreground tracking-tighter">
                {t('about.page.title')}
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {t('about.page.subtitle')}
              </p>
            </div>

            <div className="glass-effect rounded-lg p-8 md:p-12 mb-12 animate-fade-in border border-border">
              <h2 className="text-3xl font-display font-medium mb-6 text-foreground tracking-tighter">
                {t('about.page.mission.title')}
              </h2>
              <p className="text-lg text-muted-foreground mb-4">
                {t('about.page.mission.description')}
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-display font-medium mb-8 text-center text-foreground tracking-tighter">
                {t('about.page.values.title')}
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {values.map((value, index) => (
                  <div
                    key={index}
                    className="glass-effect rounded-lg p-6 border border-border hover:border-primary transition-all animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                      <value.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-display font-medium mb-3 text-foreground">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

const About = () => {
  return (
    <LanguageProvider>
      <AboutContent />
    </LanguageProvider>
  );
};

export default About;
