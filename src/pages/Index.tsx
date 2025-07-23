
import { HeroSection } from "@/components/HeroSection";
import { HowItWorks } from "@/components/HowItWorks";
import { ProblemSection } from "@/components/ProblemSection";
import { WhatYouGet } from "@/components/WhatYouGet";
import { ComparisonTable } from "@/components/ComparisonTable";
import { PricingSection } from "@/components/PricingSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FAQSection } from "@/components/FAQSection";
import { UrgencySection } from "@/components/UrgencySection";
import { ContactSupport } from "@/components/ContactSupport";
import { FloatingCTA } from "@/components/FloatingCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <HowItWorks />
      <ProblemSection />
      <WhatYouGet />
      <ComparisonTable />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <ContactSupport />
      <UrgencySection />
      <FloatingCTA />
    </div>
  );
};

export default Index;
