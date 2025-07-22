import { Card, CardContent } from "@/components/ui/card";
import { Upload, Image as ImageIcon, BarChart3, Settings } from "lucide-react";

export const ProductDemo = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Veja o{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              EngajaDM
            </span>{" "}
            em Ação
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Aqui está exatamente o que você vai receber e como funciona na prática
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Template n8n Screenshot */}
          <Card className="bg-gradient-card border-purple-primary/20 hover:shadow-glow transition-all duration-300 animate-scale-in">
            <CardContent className="p-8">
              <div className="aspect-video bg-secondary/20 rounded-lg border-2 border-dashed border-purple-primary/30 flex items-center justify-center group cursor-pointer hover:border-purple-primary/50 transition-colors">
                <div className="text-center">
                  <Upload className="h-12 w-12 text-purple-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">Template n8n</h3>
                  <p className="text-sm text-muted-foreground">
                    Adicionar screenshot do template completo
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Flow Visual */}
          <Card className="bg-gradient-card border-purple-primary/20 hover:shadow-glow transition-all duration-300 animate-scale-in">
            <CardContent className="p-8">
              <div className="aspect-video bg-secondary/20 rounded-lg border-2 border-dashed border-purple-primary/30 flex items-center justify-center group cursor-pointer hover:border-purple-primary/50 transition-colors">
                <div className="text-center">
                  <Settings className="h-12 w-12 text-purple-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">Fluxo de Automação</h3>
                  <p className="text-sm text-muted-foreground">
                    Adicionar diagrama do fluxo visual
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Instagram Interface */}
          <Card className="bg-gradient-card border-purple-primary/20 hover:shadow-glow transition-all duration-300 animate-scale-in">
            <CardContent className="p-8">
              <div className="aspect-[3/4] bg-secondary/20 rounded-lg overflow-hidden">
                <img 
                  src="/lovable-uploads/6a75ed89-b7cc-456e-ad2d-99e7683ffe2e.png" 
                  alt="EngajaDM funcionando - conversa automatizada no Instagram" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </CardContent>
          </Card>

          {/* Reports */}
          <Card className="bg-gradient-card border-purple-primary/20 hover:shadow-glow transition-all duration-300 animate-scale-in">
            <CardContent className="p-8">
              <div className="aspect-[4/3] bg-secondary/20 rounded-lg border-2 border-dashed border-purple-primary/30 flex items-center justify-center group cursor-pointer hover:border-purple-primary/50 transition-colors">
                <div className="text-center">
                  <BarChart3 className="h-12 w-12 text-purple-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">Dashboard de Resultados</h3>
                  <p className="text-sm text-muted-foreground">
                    Adicionar relatórios de conversão
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};