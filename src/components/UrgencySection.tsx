import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, TrendingUp, Users } from "lucide-react";
export const UrgencySection = () => {
  return <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-destructive/20 via-purple-dark/30 to-background relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,theme(colors.purple.primary/0.2),transparent)] animate-pulse" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,theme(colors.destructive/0.1),transparent)] animate-pulse" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-6 sm:mb-8 leading-tight">
            Enquanto você{" "}
            <span className="bg-gradient-to-r from-destructive to-purple-primary bg-clip-text text-transparent">
              pensa
            </span>
            , outro já tá{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              fechando vendas
            </span>
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 sm:mb-12 px-4">
            Cada segundo perdido é dinheiro que vai para seus concorrentes
          </p>

          {/* Urgency stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
            <div className="bg-gradient-card border border-destructive/30 rounded-xl p-4 sm:p-6 animate-scale-in">
              <Clock className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-destructive mx-auto mb-3 sm:mb-4" />
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground mb-2">Cada Hora</h3>
              <p className="text-sm sm:text-base text-muted-foreground">Você perde em média R$ 247 em vendas não convertidas</p>
            </div>
            
            <div className="bg-gradient-card border border-purple-primary/30 rounded-xl p-4 sm:p-6 animate-scale-in" style={{
            animationDelay: '200ms'
          }}>
              <TrendingUp className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-purple-primary mx-auto mb-3 sm:mb-4" />
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground mb-2">Cada Dia</h3>
              <p className="text-sm sm:text-base text-muted-foreground">Seus concorrentes faturam R$ 5.928 a mais que você</p>
            </div>
            
            <div className="bg-gradient-card border border-warning/30 rounded-xl p-4 sm:p-6 animate-scale-in" style={{
            animationDelay: '400ms'
          }}>
              <Users className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-warning mx-auto mb-3 sm:mb-4" />
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground mb-2">Cada Mês</h3>
              <p className="text-sm sm:text-base text-muted-foreground">Você deixa de ganhar R$ 177.840 por não automatizar</p>
            </div>
          </div>

          {/* Final CTA */}
          <div className="bg-gradient-card border-2 border-purple-primary/50 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-glow animate-bounce-in">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-3 sm:mb-4">
              🔥 ÚLTIMA CHAMADA 🔥
            </h3>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-6 sm:mb-8">
              Não deixe seus concorrentes saírem na frente. 
              <br className="hidden sm:block" />
              Comece a vender no automático AGORA!
            </p>
            
            <Button variant="cta" size="xl" className="group animate-pulse-glow text-sm sm:text-base lg:text-xl px-6 sm:px-8 lg:px-12 py-3 sm:py-4 h-auto w-full sm:w-auto min-h-[48px]" onClick={() => window.open('https://pay.kiwify.com.br/sey169c', '_blank')}>
              💰 SIM! QUERO FATURAR R$ 47
              <ArrowRight className="ml-2 sm:ml-3 h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 transition-transform group-hover:translate-x-2" />
            </Button>
            
            <p className="text-xs sm:text-sm text-muted-foreground mt-3 sm:mt-4">
              ⚡ Acesso imediato • 🔒 Pagamento 100% seguro • ✅ Garantia de 7 dias
            </p>
          </div>

          {/* Social proof urgency */}
          <div className="mt-8 sm:mt-12 grid grid-cols-2 gap-4 sm:gap-6 max-w-xs sm:max-w-md mx-auto animate-fade-in">
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-purple-primary mb-1">37</div>
              <div className="text-xs text-muted-foreground">pessoas compraram hoje</div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-success mb-1">12</div>
              <div className="text-xs text-muted-foreground">restam neste preço</div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};