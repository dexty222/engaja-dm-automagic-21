import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

export const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const viewHeight = window.innerHeight;
      
      // Show CTA after scrolling 50% of viewport
      setIsVisible(scrolled > viewHeight * 0.5);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Mobile floating CTA */}
      <div className="fixed bottom-4 left-4 right-4 z-50 md:hidden animate-slide-in-right">
        <Button 
          variant="cta" 
          size="lg" 
          className="w-full group shadow-glow"
          onClick={() => window.open('https://pay.kiwify.com.br/sey169c', '_blank')}
        >
          🚀 Comprar por R$ 47
          <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>

      {/* Desktop floating CTA */}
      <div className="fixed bottom-6 right-6 z-50 hidden md:block animate-scale-in">
        <Button 
          variant="floating" 
          size="icon" 
          className="group shadow-glow animate-pulse-glow"
          onClick={() => window.open('https://pay.kiwify.com.br/sey169c', '_blank')}
          title="Comprar EngajaDM por R$ 47"
        >
          💰
        </Button>
      </div>

      {/* Sticky header CTA for desktop */}
      <div className="fixed top-0 left-0 right-0 z-40 bg-gradient-primary/95 backdrop-blur-sm border-b border-purple-primary/30 hidden lg:block animate-fade-in">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="text-sm font-semibold text-primary-foreground">
                🔥 OFERTA LIMITADA: EngajaDM por apenas R$ 47
              </div>
              <div className="text-xs text-primary-foreground/80">
                Preço normal: R$ 297
              </div>
            </div>
            
            <Button 
              variant="secondary" 
              size="sm" 
              className="group bg-white/20 text-primary-foreground border-white/30 hover:bg-white/30"
              onClick={() => window.open('https://pay.kiwify.com.br/sey169c', '_blank')}
            >
              Comprar Agora
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};