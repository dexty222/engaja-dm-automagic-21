import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQSection = () => {
  const faqs = [
    {
      question: "Preciso saber programação para usar?",
      answer: "Não! O EngajaDM foi criado para ser plug-and-play. Você só precisa importar o template no n8n e seguir o passo a passo em vídeo. Em 10 minutos está funcionando."
    },
    {
      question: "Funciona com qualquer nicho?",
      answer: "Sim! Testamos em +50 nichos diferentes: ecommerce, infoprodutos, consultoria, coaching, dropshipping, afiliados e muito mais. Os scripts são adaptáveis para qualquer segmento."
    },
    {
      question: "E se não funcionar para mim?",
      answer: "Oferecemos garantia incondicional de 7 dias. Se não estiver satisfeito por qualquer motivo, devolvemos 100% do seu dinheiro sem perguntas."
    },
    {
      question: "Tem suporte técnico?",
      answer: "Sim! Temos suporte técnico especializado via WhatsApp. Nossa equipe responde em até 2 horas nos dias úteis para ajudar com qualquer dúvida."
    },
    {
      question: "Preciso pagar mensalidade?",
      answer: "Não! É um pagamento único de R$ 69. Você tem acesso vitalício ao template, atualizações gratuitas e suporte sem nenhum custo adicional."
    },
    {
      question: "Como funciona a instalação?",
      answer: "Super simples: 1) Baixe o template, 2) Importe no seu n8n, 3) Configure suas credenciais do Instagram, 4) Ative o workflow. Tudo explicado em vídeo passo a passo."
    },
    {
      question: "Quantas contas posso usar?",
      answer: "Ilimitadas! Você pode usar o template em quantas contas do Instagram quiser, sem limitações. Perfeito para agências e quem tem múltiplos negócios."
    },
    {
      question: "Vou receber atualizações?",
      answer: "Sim! Todas as atualizações e melhorias são gratuitas para sempre. Quando o Instagram muda algo, atualizamos o template e você recebe automaticamente."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Perguntas{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Frequentes
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tire todas suas dúvidas antes de começar a faturar
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-gradient-card border border-purple-primary/20 rounded-lg px-6 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-purple-primary transition-colors hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Still have questions CTA */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="bg-gradient-card border border-purple-primary/20 rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ainda tem dúvidas?
            </h3>
            <p className="text-muted-foreground mb-6">
              Fale direto com nossa equipe no WhatsApp e tire todas suas dúvidas antes de comprar
            </p>
            <a 
              href="https://wa.me/5511999999999?text=Olá! Tenho dúvidas sobre o EngajaDM" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-success hover:bg-success/90 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              💬 Falar no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};