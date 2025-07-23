import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";
import { useState, useEffect } from "react";

export const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Carlos Silva",
      role: "Infoprodutor",
      avatar: "/lovable-uploads/testimonial1.jpg",
      text: "O EngajaDM mudou meu negócio completamente! Em 30 dias aumentei minhas vendas em 300%. Agora vendo enquanto durmo!",
      revenue: "R$ 45.000",
      period: "primeiro mês"
    },
    {
      name: "Marina Santos", 
      role: "Coach Online",
      avatar: "/lovable-uploads/testimonial2.jpg",
      text: "Incrível como é simples! Instalei em 10 minutos e já comecei a converter. Minha taxa de conversão triplicou!",
      revenue: "R$ 28.500",
      period: "primeira semana"
    },
    {
      name: "Ricardo Oliveira",
      role: "Dropshipper",
      avatar: "/lovable-uploads/testimonial3.jpg", 
      text: "Testei várias soluções, mas o EngajaDM é outro nível. A qualidade dos scripts é impressionante. ROI de 1500%!",
      revenue: "R$ 67.200",
      period: "60 dias"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-secondary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            O Que Nossos{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Clientes Dizem
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Resultados reais de pessoas reais que transformaram seus negócios
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-card border-purple-primary/20 shadow-glow animate-scale-in">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <div 
                    key={index}
                    className={`text-center transition-all duration-500 ${
                      index === currentTestimonial 
                        ? 'opacity-100 scale-105 border-2 border-purple-primary/50 rounded-lg p-4' 
                        : 'opacity-60 scale-95'
                    }`}
                  >
                    <Avatar className="w-20 h-20 mx-auto mb-4 border-2 border-purple-primary/30">
                      <AvatarFallback className="bg-gradient-primary text-primary-foreground text-lg font-bold">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>

                    <div className="flex justify-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-warning fill-current" />
                      ))}
                    </div>

                    <blockquote className="text-muted-foreground mb-4 italic">
                      "{testimonial.text}"
                    </blockquote>

                    <div className="mb-2">
                      <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>

                    <div className="bg-success/20 border border-success/30 rounded-lg p-3">
                      <p className="text-success font-bold text-lg">{testimonial.revenue}</p>
                      <p className="text-xs text-muted-foreground">faturados no {testimonial.period}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation dots */}
              <div className="flex justify-center gap-2 mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial 
                        ? 'bg-purple-primary w-8' 
                        : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                    }`}
                  />
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Social proof numbers */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-3xl mx-auto animate-fade-in">
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-primary mb-2">500+</div>
            <div className="text-sm text-muted-foreground">Clientes satisfeitos</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-success mb-2">R$ 2.5M+</div>
            <div className="text-sm text-muted-foreground">Faturado pelos clientes</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-warning mb-2">98%</div>
            <div className="text-sm text-muted-foreground">Taxa de satisfação</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-secondary mb-2">24h</div>
            <div className="text-sm text-muted-foreground">Suporte garantido</div>
          </div>
        </div>
      </div>
    </section>
  );
};