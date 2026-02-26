import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/PageLayout";
import FadeInSection from "@/components/shared/FadeInSection";
import { ArrowRight } from "lucide-react";

const categories = [
  {
    title: "Preventive",
    color: "bg-primary/10 text-primary",
    services: [
      { name: "Dental Exams & Cleanings", desc: "Routine check-ups to keep your smile healthy." },
      { name: "Digital X-Rays", desc: "Low-radiation imaging for precise diagnosis." },
      { name: "Fluoride Treatments", desc: "Strengthening enamel for lasting protection." },
      { name: "Sealants", desc: "Protective coatings for cavity-prone teeth." },
    ],
  },
  {
    title: "Restorative",
    color: "bg-accent/20 text-accent-foreground",
    services: [
      { name: "Fillings", desc: "Tooth-colored restorations that blend naturally." },
      { name: "Crowns & Bridges", desc: "Durable solutions for damaged or missing teeth." },
      { name: "Root Canal Therapy", desc: "Comfortable treatment to save your natural tooth." },
      { name: "Dentures", desc: "Custom-fit options for full or partial tooth replacement." },
    ],
  },
  {
    title: "Cosmetic",
    color: "bg-sage/30 text-sage-foreground",
    services: [
      { name: "Teeth Whitening", desc: "Brighten your smile safely and effectively." },
      { name: "Porcelain Veneers", desc: "Transform your smile with natural-looking veneers." },
      { name: "Bonding", desc: "Quick repairs for chips, gaps, and discoloration." },
      { name: "Smile Makeovers", desc: "Comprehensive plans tailored to your goals." },
    ],
  },
  {
    title: "Advanced & Implant",
    color: "bg-primary/10 text-primary",
    services: [
      { name: "Dental Implants", desc: "Permanent tooth replacement that looks and feels natural." },
      { name: "Implant-Supported Dentures", desc: "Stable, secure dentures anchored by implants." },
      { name: "Bone Grafting", desc: "Building a strong foundation for implant success." },
      { name: "Oral Surgery", desc: "Expert surgical care with patient comfort first." },
    ],
  },
];

const Services = () => {
  return (
    <PageLayout>
      <section className="bg-secondary py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-2xl">
          <FadeInSection>
            <p className="text-primary font-medium text-sm tracking-wide uppercase mb-4">Our Services</p>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              Comprehensive Dental Care
            </h1>
            <p className="text-muted-foreground text-lg">
              From routine cleanings to advanced implants — comfort-focused care using modern techniques.
            </p>
          </FadeInSection>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-16">
            {categories.map((cat, ci) => (
              <FadeInSection key={cat.title} delay={ci * 0.05}>
                <div>
                  <div className="flex items-center gap-3 mb-8">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${cat.color}`}>
                      {cat.title}
                    </span>
                    <div className="flex-1 h-px bg-border" />
                  </div>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {cat.services.map((s) => (
                      <div
                        key={s.name}
                        className="bg-card rounded-2xl p-6 shadow-sm border border-border hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                      >
                        <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{s.name}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>

          <FadeInSection delay={0.1}>
            <div className="text-center mt-16">
              <p className="text-muted-foreground mb-4">Ready to get started?</p>
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">
                  Schedule Your Visit
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </Button>
            </div>
          </FadeInSection>
        </div>
      </section>
    </PageLayout>
  );
};

export default Services;
