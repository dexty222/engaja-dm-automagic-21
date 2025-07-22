import { Card, CardContent } from "@/components/ui/card";
import { Check, FileText, Video, MessageCircle, Gift } from "lucide-react";

export const WhatYouGet = () => {
  const benefits = [
    {
      icon: FileText,
      title: "Template completo para n8n",
      description: "Workflow 100% pronto para importar e usar imediatamente",
      highlight: false
    },
    {
      icon: Video,
      title: "Vídeoaulas passo a passo",
      description: "Tutoriais detalhados para configurar tudo em minutos",
      highlight: false
    },
    {
      icon: MessageCircle,
      title: "Scripts de conversão validados",
      description: "Mensagens que já venderam milhões em DMs automatizadas",
      highlight: false
    },
    {
      icon: Gift,
      title: "BÔNUS: Scripts que venderam +R$ 5 milhões",
      description: "Acesso exclusivo aos scripts mais lucrativos do mercado",
      highlight: true
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            O Que{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Você Recebe
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tudo que você precisa para começar a vender no automático hoje mesmo
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className={`bg-gradient-card border-purple-primary/20 hover:shadow-glow transition-all duration-300 animate-scale-in group relative overflow-hidden ${
                benefit.highlight ? 'ring-2 ring-purple-primary/50' : ''
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {benefit.highlight && (
                <div className="absolute top-0 right-0 bg-gradient-primary px-3 py-1 rounded-bl-lg">
                  <span className="text-xs font-bold text-primary-foreground">BÔNUS</span>
                </div>
              )}
              
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className={`w-12 h-12 ${benefit.highlight ? 'bg-purple-primary/20 border-purple-primary/30' : 'bg-success/20 border-success/30'} border-2 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <benefit.icon className={`h-6 w-6 ${benefit.highlight ? 'text-purple-primary' : 'text-success'}`} />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Check className="h-5 w-5 text-success" />
                      <h3 className="text-lg font-semibold text-foreground">
                        {benefit.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Value proposition */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="bg-gradient-card border border-purple-primary/20 rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Valor Total: R$ 2.997,00
            </h3>
            <p className="text-3xl font-bold text-success mb-4">
              Hoje por apenas: R$ 69,00
            </p>
            <p className="text-lg text-muted-foreground">
              Pagamento único • Acesso imediato • Sem mensalidades
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};