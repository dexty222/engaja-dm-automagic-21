import { Card, CardContent } from "@/components/ui/card";
import { Download, Settings, DollarSign } from "lucide-react";

export const HowItWorks = () => {
  const steps = [
    {
      icon: Download,
      title: "Instala o template",
      description: "Baixe o template completo e importe no seu n8n em segundos",
      color: "text-purple-primary",
      bgColor: "bg-purple-primary/20",
      borderColor: "border-purple-primary/30",
      imageSrc: "http://i.imgur.com/QzzQDLv.gif", // <- GIF corrigido
      imageAlt: "Imagem do passo 1 - Instalação do template"
    },
    {
      icon: Settings,
      title: "Ativa no n8n",
      description: "Configure suas credenciais e ative a automação com 1 clique",
      color: "text-purple-secondary",
      bgColor: "bg-purple-secondary/20",
      borderColor: "border-purple-secondary/30",
      imageSrc: "https://i.imgur.com/PXE2Aif.png",
      imageAlt: "Imagem do passo 2 - Ativação no n8n"
    },
    {
      icon: DollarSign,
      title: "Começa a faturar",
      description: "Suas vendas começam a ser feitas automaticamente 24h/dia",
      color: "text-success",
      bgColor: "bg-success/20",
      borderColor: "border-success/30",
      imageSrc: "https://i.imgur.com/HdbyrqR.gif",
      imageAlt: "Imagem do passo 3 - Faturamento automático"
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-secondary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            Como{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Funciona
            </span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Em apenas 3 passos simples você transforma seu Instagram numa máquina de vendas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <Card 
              key={index} 
              className={`bg-gradient-card border-purple-primary/20 hover:shadow-glow transition-all duration-300 animate-scale-in group relative overflow-hidden`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-4 sm:p-6 lg:p-8 text-center relative z-10">
                <div className={`w-12 h-12 sm:w-16 sm:h-16 ${step.bgColor} ${step.borderColor} border-2 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform`}>
                  <step.icon className={`h-6 w-6 sm:h-8 sm:w-8 ${step.color}`} />
                </div>

                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 w-6 h-6 sm:w-8 sm:h-8 bg-purple-primary/20 rounded-full flex items-center justify-center">
                  <span className="text-xs sm:text-sm font-bold text-purple-primary">{index + 1}</span>
                </div>

                <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3 sm:mb-4">
                  {step.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">
                  {step.description}
                </p>

                {/* Image container */}
                <div className="w-full h-32 sm:h-40 lg:h-48 bg-secondary/30 border border-border/50 rounded-lg flex items-center justify-center mb-4 overflow-hidden group-hover:scale-105 transition-transform">
                  <img 
                    src={step.imageSrc} 
                    alt={step.imageAlt}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const placeholder = target.nextElementSibling as HTMLElement;
                      if (placeholder) placeholder.style.display = 'flex';
                    }}
                  />
                  <div className="hidden w-full h-full flex-col items-center justify-center text-muted-foreground">
                    <div className="w-8 h-8 sm:w-12 sm:h-12 bg-muted rounded-lg mb-2 flex items-center justify-center">
                      <span className="text-lg sm:text-2xl">📷</span>
                    </div>
                    <span className="text-xs sm:text-sm text-center px-2">
                      {step.imageAlt}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Connection arrows */}
        <div className="hidden lg:flex justify-center items-center mt-8 gap-4 animate-fade-in" style={{ animationDelay: '800ms' }}>
          <div className="w-16 lg:w-24 h-0.5 bg-gradient-to-r from-purple-primary to-purple-secondary animate-pulse"></div>
          <div className="w-16 lg:w-24 h-0.5 bg-gradient-to-r from-purple-secondary to-success animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};
