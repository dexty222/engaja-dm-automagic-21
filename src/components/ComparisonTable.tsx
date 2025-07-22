import { Card, CardContent } from "@/components/ui/card";
import { Check, X } from "lucide-react";

export const ComparisonTable = () => {
  const comparisons = [
    {
      feature: "Custo inicial",
      others: "R$ 97-297/mês",
      engajaDM: "R$ 69 único",
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
    <section className="py-20 bg-secondary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Por que escolher o{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              EngajaDM
            </span>
            ?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comparação honesta com outras soluções do mercado
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-card border-purple-primary/20 shadow-card animate-scale-in">
            <CardContent className="p-8">
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-muted-foreground">Característica</h3>
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-muted-foreground">Outros Bots</h3>
                </div>
                <div className="text-center bg-gradient-primary/20 border border-purple-primary/30 rounded-lg p-2">
                  <h3 className="text-lg font-semibold text-purple-primary">EngajaDM</h3>
                </div>
              </div>

              <div className="space-y-4">
                {comparisons.map((comparison, index) => (
                  <div 
                    key={index} 
                    className="grid grid-cols-3 gap-4 p-4 rounded-lg border border-border/50 hover:bg-secondary/10 transition-colors animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-center">
                      <span className="font-medium text-foreground">{comparison.feature}</span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      {comparison.othersGood ? (
                        <Check className="h-5 w-5 text-success" />
                      ) : (
                        <X className="h-5 w-5 text-destructive" />
                      )}
                      <span className={`text-sm ${comparison.othersGood ? 'text-success' : 'text-destructive'}`}>
                        {comparison.others}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      {comparison.engajaDMGood ? (
                        <Check className="h-5 w-5 text-success" />
                      ) : (
                        <X className="h-5 w-5 text-destructive" />
                      )}
                      <span className={`text-sm font-medium ${comparison.engajaDMGood ? 'text-success' : 'text-destructive'}`}>
                        {comparison.engajaDM}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-gradient-primary/10 border border-purple-primary/30 rounded-lg text-center">
                <p className="text-lg font-semibold text-purple-primary mb-2">
                  Resultado: EngajaDM é 10x mais vantajoso!
                </p>
                <p className="text-muted-foreground">
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