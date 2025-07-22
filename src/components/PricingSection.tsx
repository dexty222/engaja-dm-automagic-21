import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowRight } from "lucide-react";

export const PricingSection = () => {
  const features = [
    "Template completo para n8n",
    "Vídeoaulas passo a passo", 
    "Scripts de conversão validados",
    "Automação ilimitada",
    "Suporte técnico",
    "Atualizações gratuitas",
    "BÔNUS: Scripts R$ 5 milhões",
    "Garantia de 7 dias"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Escolha o{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Plano Perfeito
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Invista uma vez e colha os frutos para sempre
          </p>
        </div>

        <div className="max-w-md mx-auto animate-bounce-in">
          <Card className="bg-gradient-card border-2 border-purple-primary/50 shadow-glow relative overflow-hidden">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <Badge className="bg-gradient-primary text-primary-foreground font-bold px-4 py-2">
                OFERTA LIMITADA
              </Badge>
            </div>
            
            <CardContent className="p-8 pt-12">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">EngajaDM Completo</h3>
                
                <div className="mb-6">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-lg text-muted-foreground line-through">R$ 297,00</span>
                    <Badge variant="destructive">-77%</Badge>
                  </div>
                  <div className="text-5xl font-bold text-success mb-2">R$ 69</div>
                  <div className="text-lg text-muted-foreground">pagamento único</div>
                </div>

                <Button 
                  variant="cta" 
                  size="xl" 
                  className="w-full group mb-6"
                  onClick={() => window.open('https://pay.kiwify.com.br/sey169c', '_blank')}
                >
                  🚀 Comprar Agora
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>

                <p className="text-sm text-muted-foreground">
                  ✅ Acesso imediato • ✅ Sem mensalidades • ✅ Garantia de 7 dias
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-foreground text-center mb-4">
                  Tudo que você recebe:
                </h4>
                {features.map((feature, index) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-3 animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <Check className="h-5 w-5 text-success flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-purple-primary/10 border border-purple-primary/30 rounded-lg text-center">
                <p className="text-sm text-purple-primary font-semibold mb-1">
                  🔥 OFERTA POR TEMPO LIMITED
                </p>
                <p className="text-xs text-muted-foreground">
                  Preço retorna para R$ 297 em breve
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Trust indicators */}
        <div className="flex justify-center items-center gap-8 mt-12 text-sm text-muted-foreground animate-fade-in">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-success rounded-full"></div>
            <span>Pagamento 100% seguro</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-success rounded-full"></div>
            <span>Garantia incondicional</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-success rounded-full"></div>
            <span>Suporte especializado</span>
          </div>
        </div>
      </div>
    </section>
  );
};