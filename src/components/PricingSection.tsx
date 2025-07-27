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
    <section className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            Escolha o{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Plano Perfeito
            </span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Invista uma vez e colha os frutos para sempre
          </p>
        </div>

        <div className="max-w-sm sm:max-w-md mx-auto animate-bounce-in relative">
          <Card className="bg-gradient-card border-2 border-purple-primary/50 shadow-glow relative mt-4">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 overflow-visible">
              <Badge className="bg-gradient-primary text-primary-foreground font-bold px-3 py-1 sm:px-4 sm:py-2 whitespace-nowrap text-xs sm:text-sm">
                OFERTA LIMITADA
              </Badge>
            </div>
            
            <CardContent className="p-4 pt-8 sm:p-6 sm:pt-10 lg:p-8 lg:pt-12">
              <div className="text-center mb-6 sm:mb-8">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground mb-3 sm:mb-4">EngajaDM Completo</h3>
                
                <div className="mb-4 sm:mb-6">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-base sm:text-lg text-muted-foreground line-through">R$ 297,00</span>
                    <Badge variant="destructive" className="text-xs">-77%</Badge>
                  </div>
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-success mb-2">R$ 47</div>
                  <div className="text-sm sm:text-base lg:text-lg text-muted-foreground">pagamento único</div>
                </div>

                <Button 
                  variant="cta" 
                  size="xl" 
                  className="w-full group mb-4 sm:mb-6 min-h-[48px] text-sm sm:text-base"
                  onClick={() => window.open('https://pay.kiwify.com.br/sey169c', '_blank')}
                >
                  🚀 Comprar Agora
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
                </Button>

                <p className="text-xs sm:text-sm text-muted-foreground">
                  ✅ Acesso imediato • ✅ Sem mensalidades • ✅ Garantia de 7 dias
                </p>
              </div>

              <div className="space-y-2 sm:space-y-3">
                <h4 className="font-semibold text-foreground text-center mb-3 sm:mb-4 text-sm sm:text-base">
                  Tudo que você recebe:
                </h4>
                {features.map((feature, index) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-2 sm:gap-3 animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <Check className="h-4 w-4 sm:h-5 sm:w-5 text-success flex-shrink-0" />
                    <span className="text-muted-foreground text-sm sm:text-base">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 sm:mt-8 p-3 sm:p-4 bg-purple-primary/10 border border-purple-primary/30 rounded-lg text-center">
                <p className="text-xs sm:text-sm text-purple-primary font-semibold mb-1">
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
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 mt-8 sm:mt-12 text-xs sm:text-sm text-muted-foreground animate-fade-in">
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