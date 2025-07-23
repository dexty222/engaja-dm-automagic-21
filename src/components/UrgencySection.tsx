import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, TrendingUp, Users } from "lucide-react";
export const UrgencySection = () => {
  return <section className="py-20 bg-gradient-to-br from-destructive/20 via-purple-dark/30 to-background relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,theme(colors.purple.primary/0.2),transparent)] animate-pulse" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,theme(colors.destructive/0.1),transparent)] animate-pulse" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-8 leading-tight">
            Enquanto você{" "}
            <span className="bg-gradient-to-r from-destructive to-purple-primary bg-clip-text text-transparent">
              pensa
            </span>
            , outro já tá{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              fechando vendas
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12">
            Cada segundo perdido é dinheiro que vai para seus concorrentes
          </p>

          {/* Urgency stats */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-card border border-destructive/30 rounded-xl p-6 animate-scale-in">
              <Clock className="h-12 w-12 text-destructive mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-2">Cada Hora</h3>
              <p className="text-muted-foreground">Você perde em média R$ 247 em vendas não convertidas</p>
            </div>
            
            <div className="bg-gradient-card border border-purple-primary/30 rounded-xl p-6 animate-scale-in" style={{
            animationDelay: '200ms'
          }}>
              <TrendingUp className="h-12 w-12 text-purple-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-2">Cada Dia</h3>
              <p className="text-muted-foreground">Seus concorrentes faturam R$ 5.928 a mais que você</p>
            </div>
            
            <div className="bg-gradient-card border border-warning/30 rounded-xl p-6 animate-scale-in" style={{
            animationDelay: '400ms'
          }}>
              <Users className="h-12 w-12 text-warning mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-2">Cada Mês</h3>
              <p className="text-muted-foreground">Você deixa de ganhar R$ 177.840 por não automatizar</p>
            </div>
          </div>

          {/* Final CTA */}
          <div className="bg-gradient-card border-2 border-purple-primary/50 rounded-2xl p-8 shadow-glow animate-bounce-in">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              🔥 ÚLTIMA CHAMADA 🔥
            </h3>
            <p className="text-xl text-muted-foreground mb-8">
              Não deixe seus concorrentes saírem na frente. 
              <br />
              Comece a vender no automático AGORA!
            </p>
            
            <Button variant="cta" size="xl" className="group animate-pulse-glow text-xl px-12 py-4 h-auto" onClick={() => window.open('https://pay.kiwify.com.br/sey169c', '_blank')}>
              💰 SIM! QUERO FATURAR R$ 47
              <ArrowRight className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-2" />
            </Button>
            
            <p className="text-sm text-muted-foreground mt-4">
              ⚡ Acesso imediato • 🔒 Pagamento 100% seguro • ✅ Garantia de 7 dias
            </p>
          </div>

          {/* Social proof urgency */}
          <div className="mt-12 grid grid-cols-2 gap-6 max-w-md mx-auto animate-fade-in">
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-primary mb-1">369</div>
              <div className="text-xs text-muted-foreground">pessoas compraram hoje</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-success mb-1">12</div>
              <div className="text-xs text-muted-foreground">restam neste preço</div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};