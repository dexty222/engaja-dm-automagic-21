import { AlertTriangle, TrendingDown, Users } from "lucide-react";

export const ProblemSection = () => {
  const problems = [
    {
      icon: TrendingDown,
      title: "Todo dia você perde dinheiro no Instagram",
      description: "Milhares de pessoas comentam nos seus posts interessadas, mas você não consegue responder todos"
    },
    {
      icon: AlertTriangle,
      title: "Comentários ignorados = dinheiro no lixo",
      description: "Cada 'Eu quero' ignorado é uma venda perdida para sempre. Você literalmente joga dinheiro fora"
    },
    {
      icon: Users,
      title: "Seus concorrentes já estão faturando",
      description: "Enquanto você responde manualmente, eles já automatizaram e faturam 10x mais"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-destructive/10 to-purple-dark/20 relative overflow-hidden">
      {/* Parallax background effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_80%,theme(colors.destructive/0.1),transparent)] animate-pulse" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            O{" "}
            <span className="bg-gradient-to-r from-destructive to-purple-primary bg-clip-text text-transparent">
              Problema
            </span>{" "}
            que Ninguém Fala
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Você está perdendo uma fortuna todos os dias sem perceber
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {problems.map((problem, index) => (
            <div 
              key={index} 
              className="bg-gradient-card border border-destructive/20 rounded-xl p-8 text-center hover:shadow-glow transition-all duration-300 animate-scale-in group"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="w-16 h-16 bg-destructive/20 border-2 border-destructive/30 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <problem.icon className="h-8 w-8 text-destructive" />
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {problem.title}
              </h3>
              <p className="text-muted-foreground">
                {problem.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16 animate-fade-in">
          <p className="text-2xl font-bold text-foreground mb-4">
            Pare de perder dinheiro AGORA!
          </p>
          <p className="text-lg text-muted-foreground">
            O EngajaDM resolve todos esses problemas em segundos
          </p>
        </div>
      </div>
    </section>
  );
};