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
      borderColor: "border-purple-primary/30"
    },
    {
      icon: Settings,
      title: "Ativa no n8n",
      description: "Configure suas credenciais e ative a automação com 1 clique",
      color: "text-purple-secondary",
      bgColor: "bg-purple-secondary/20",
      borderColor: "border-purple-secondary/30"
    },
    {
      icon: DollarSign,
      title: "Começa a faturar",
      description: "Suas vendas começam a ser feitas automaticamente 24h/dia",
      color: "text-success",
      bgColor: "bg-success/20",
      borderColor: "border-success/30"
    }
  ];

  return (
    <section className="py-20 bg-secondary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Como{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Funciona
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Em apenas 3 passos simples você transforma seu Instagram numa máquina de vendas
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <Card 
              key={index} 
              className={`bg-gradient-card border-purple-primary/20 hover:shadow-glow transition-all duration-300 animate-scale-in group relative overflow-hidden`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-8 text-center relative z-10">
                <div className={`w-16 h-16 ${step.bgColor} ${step.borderColor} border-2 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                  <step.icon className={`h-8 w-8 ${step.color}`} />
                </div>
                
                <div className="absolute top-4 right-4 w-8 h-8 bg-purple-primary/20 rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold text-purple-primary">{index + 1}</span>
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Connection arrows for desktop */}
        <div className="hidden md:flex justify-center items-center mt-8 gap-4">
          <div className="w-24 h-0.5 bg-gradient-to-r from-purple-primary to-purple-secondary animate-pulse"></div>
          <div className="w-24 h-0.5 bg-gradient-to-r from-purple-secondary to-success animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};