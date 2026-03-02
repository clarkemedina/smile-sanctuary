import PageLayout from "@/components/layout/PageLayout";
import FadeInSection from "@/components/shared/FadeInSection";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle } from "lucide-react";

const benefits = [
  "Most PPO insurance plans accepted",
  "Denti-Cal accepted",
  "Walk-ins welcome",
  "Multilingual care: English, Español, Filipino",
  "Flexible payment plans available",
  "Credit cards accepted",
];

const faqs = [
  {
    q: "What insurance plans do you accept?",
    a: "We accept most PPO dental insurance plans, including Denti-Cal. Please contact our office to verify your specific plan coverage.",
  },
  {
    q: "What if I don't have insurance?",
    a: "We offer competitive self-pay rates and flexible payment plans. Our team will work with you to find a solution that fits your budget.",
  },
  {
    q: "Do you offer payment plans?",
    a: "Yes, we offer flexible payment options to help make dental care accessible. Ask our front desk about available plans.",
  },
  {
    q: "What is your cancellation policy?",
    a: "We kindly request at least 24 hours' notice for cancellations or rescheduling. This allows us to offer the appointment to another patient in need.",
  },
  {
    q: "Do you accept walk-in patients?",
    a: "Yes! We welcome walk-in patients. While we recommend scheduling an appointment for shorter wait times, we're always happy to see you.",
  },
];

const Insurance = () => {
  return (
    <PageLayout>
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-2xl">
          <FadeInSection>
            <p className="text-accent font-medium text-sm tracking-widest uppercase mb-6">Insurance & Payment</p>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              Clear, Honest{" "}
              <span className="italic font-normal">Pricing</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              We believe in transparency. No surprises — just straightforward, honest dental care.
            </p>
          </FadeInSection>
        </div>
      </section>

      <section className="pb-24">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
              What We Accept
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((b) => (
                <div key={b} className="flex items-center gap-3 bg-card rounded-lg p-4 shadow-sm border border-border">
                  <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                  <span className="text-foreground text-sm">{b}</span>
                </div>
              ))}
            </div>
          </FadeInSection>
        </div>
      </section>

      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="bg-card rounded-lg border border-border px-6 shadow-sm"
                >
                  <AccordionTrigger className="text-foreground text-sm font-medium hover:no-underline py-4">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm pb-4">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </FadeInSection>
        </div>
      </section>
    </PageLayout>
  );
};

export default Insurance;
