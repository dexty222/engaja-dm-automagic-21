import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Phone } from "lucide-react";

export const ContactSupport = () => {
  return (
    <section className="py-16 bg-secondary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Precisa de{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Ajuda?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Nossa equipe está pronta para te ajudar!
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <Card className="bg-gradient-card border border-purple-primary/20 shadow-glow">
            <CardContent className="p-6 text-center">
              <MessageCircle className="h-16 w-16 text-purple-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">
                Suporte via WhatsApp
              </h3>
              <p className="text-muted-foreground mb-6">
                Tire suas dúvidas ou receba ajuda para configurar seu EngajaDM
              </p>
              
              <Button 
                variant="cta" 
                size="lg" 
                className="w-full group"
                onClick={() => window.open('https://wa.me/5583986851129', '_blank')}
              >
                <Phone className="mr-2 h-5 w-5" />
                (83) 8685-1129
              </Button>
              
              <p className="text-sm text-muted-foreground mt-4">
                📱 Resposta rápida • 🔧 Suporte técnico • ✅ Ajuda na configuração
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};