import { Card, CardContent } from "@/components/ui/card";
import { Check, X } from "lucide-react";

export const ComparisonTable = () => {
  const comparisons = [
    {
      feature: "Custo inicial",
      others: "R$ 97-297/mês",
      engajaDM: "R$ 47 único",
      othersGood: false,
      engajaDMGood: true
    },
    {
      feature: "Limitações",
      others: "Limitado por plano",
      engajaDM: "Ilimitado",
      othersGood: false,
      engajaDMGood: true
    },
    {
      feature: "Personalização",
      others: "Templates fixos",
      engajaDM: "100% customizável",
      othersGood: false,
      engajaDMGood: true
    },
    {
      feature: "Dependência",
      others: "Plataforma terceira",
      engajaDM: "Seu próprio servidor",
      othersGood: false,
      engajaDMGood: true
    },
    {
      feature: "Suporte",
      others: "Chat bot",
      engajaDM: "Suporte humano",
      othersGood: false,
      engajaDMGood: true
    },
    {
      feature: "Atualizações",
      others: "Cobradas à parte",
      engajaDM: "Gratuitas para sempre",
      othersGood: false,
      engajaDMGood: true
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-secondary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            Por que escolher o{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              EngajaDM
            </span>
            ?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Comparação honesta com outras soluções do mercado
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-card border-purple-primary/20 shadow-card animate-scale-in overflow-hidden">
            <CardContent className="p-4 sm:p-6 lg:p-8">
              {/* Desktop Header */}
              <div className="hidden md:grid grid-cols-3 gap-4 mb-6 lg:mb-8">
                <div className="text-center">
                  <h3 className="text-base lg:text-lg font-semibold text-muted-foreground">Característica</h3>
                </div>
                <div className="text-center">
                  <h3 className="text-base lg:text-lg font-semibold text-muted-foreground">Outros Bots</h3>
                </div>
                <div className="text-center bg-gradient-primary/20 border border-purple-primary/30 rounded-lg p-2">
                  <h3 className="text-base lg:text-lg font-semibold text-purple-primary">EngajaDM</h3>
                </div>
              </div>
              
              {/* Mobile Header */}
              <div className="md:hidden text-center mb-6">
                <div className="bg-gradient-primary/20 border border-purple-primary/30 rounded-lg p-3 mb-4">
                  <h3 className="text-lg font-semibold text-purple-primary">EngajaDM vs Outros Bots</h3>
                </div>
              </div>

              <div className="space-y-3 sm:space-y-4">
                {comparisons.map((comparison, index) => (
                  <div 
                    key={index} 
                    className="animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {/* Desktop Layout */}
                    <div className="hidden md:grid grid-cols-3 gap-4 p-3 lg:p-4 rounded-lg border border-border/50 hover:bg-secondary/10 transition-colors">
                      <div className="flex items-center">
                        <span className="font-medium text-foreground text-sm lg:text-base">{comparison.feature}</span>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        {comparison.othersGood ? (
                          <Check className="h-4 w-4 lg:h-5 lg:w-5 text-success flex-shrink-0" />
                        ) : (
                          <X className="h-4 w-4 lg:h-5 lg:w-5 text-destructive flex-shrink-0" />
                        )}
                        <span className={`text-xs lg:text-sm ${comparison.othersGood ? 'text-success' : 'text-destructive'}`}>
                          {comparison.others}
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        {comparison.engajaDMGood ? (
                          <Check className="h-4 w-4 lg:h-5 lg:w-5 text-success flex-shrink-0" />
                        ) : (
                          <X className="h-4 w-4 lg:h-5 lg:w-5 text-destructive flex-shrink-0" />
                        )}
                        <span className={`text-xs lg:text-sm font-medium ${comparison.engajaDMGood ? 'text-success' : 'text-destructive'}`}>
                          {comparison.engajaDM}
                        </span>
                      </div>
                    </div>
                    
                    {/* Mobile Layout */}
                    <div className="md:hidden p-4 rounded-lg border border-border/50 bg-secondary/5 space-y-3">
                      <h4 className="font-semibold text-foreground text-sm">{comparison.feature}</h4>
                      
                      <div className="grid grid-cols-2 gap-3">
                        <div className="space-y-2">
                          <span className="text-xs text-muted-foreground font-medium">Outros Bots</span>
                          <div className="flex items-center gap-2">
                            {comparison.othersGood ? (
                              <Check className="h-4 w-4 text-success flex-shrink-0" />
                            ) : (
                              <X className="h-4 w-4 text-destructive flex-shrink-0" />
                            )}
                            <span className={`text-xs ${comparison.othersGood ? 'text-success' : 'text-destructive'}`}>
                              {comparison.others}
                            </span>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <span className="text-xs text-purple-primary font-medium">EngajaDM</span>
                          <div className="flex items-center gap-2">
                            {comparison.engajaDMGood ? (
                              <Check className="h-4 w-4 text-success flex-shrink-0" />
                            ) : (
                              <X className="h-4 w-4 text-destructive flex-shrink-0" />
                            )}
                            <span className={`text-xs font-medium ${comparison.engajaDMGood ? 'text-success' : 'text-destructive'}`}>
                              {comparison.engajaDM}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-gradient-primary/10 border border-purple-primary/30 rounded-lg text-center animate-fade-in" style={{ animationDelay: '800ms' }}>
                <p className="text-base sm:text-lg font-semibold text-purple-primary mb-2">
                  Resultado: EngajaDM é 10x mais vantajoso!
                </p>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Pague uma vez e use para sempre, sem limitações
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};