import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
export const HeroSection = () => {
  return <section className="relative min-h-screen bg-white overflow-hidden">
      {/* Subtle background pattern for light theme */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,theme(colors.purple.primary/0.05),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,theme(colors.purple.secondary/0.05),transparent)]" />
      
      <div className="relative z-10 container mx-auto px-4 pt-20 pb-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left content */}
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Para de perder venda no{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Instagram
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl">
              O <span className="text-purple-primary font-semibold">EngajaDM</span> vende por você 24h/dia!
            </p>
            <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl">
              O template definitivo no n8n para automatizar as respostas de 'Eu Quero' 
              nos comentários e fechar vendas na DM em segundos.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="xl" onClick={() => window.open('https://pay.kiwify.com.br/sey169c', '_blank')} className="group text-base text-slate-50">
                🚀 Quero vender no automático agora!
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <Button 
                variant="outline" 
                size="xl" 
                className="group bg-gray-50 border-purple-primary/30 text-gray-900 hover:bg-gray-100"
                onClick={() => window.open('https://youtu.be/-H3mvbi30vE', '_blank')}
              >
                <Play className="mr-2 h-5 w-5" />
                Ver demonstração
              </Button>
            </div>
          </div>

          {/* Right content - Phone Mockup */}
          <div className="relative animate-fade-in flex justify-center lg:justify-end">
            <div className="relative animate-float">
              <img src="/lovable-uploads/6a75ed89-b7cc-456e-ad2d-99e7683ffe2e.png" alt="EngajaDM funcionando - automação de vendas no Instagram" className="w-full max-w-sm lg:max-w-md xl:max-w-lg h-auto drop-shadow-2xl rounded-3xl" />
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-primary opacity-10 blur-3xl -z-10 scale-110 rounded-3xl" />
            </div>
          </div>
        </div>
      </div>
    </section>;
};