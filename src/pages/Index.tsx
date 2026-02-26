import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/PageLayout";
import FadeInSection from "@/components/shared/FadeInSection";
import { Shield, Heart, Users, ArrowRight, Star } from "lucide-react";
import heroDoctors from "@/assets/hero-doctors.webp";
import happyPatient from "@/assets/happy-patient.webp";
import waitingRoom from "@/assets/waiting-room.webp";

const pillars = [
  {
    icon: Shield,
    title: "Advanced Technology",
    description: "Digital X-rays, panoramic imaging, and modern equipment for precise, comfortable care.",
  },
  {
    icon: Heart,
    title: "Comfort-First Experience",
    description: "Gentle techniques and a calming environment designed to ease every visit.",
  },
  {
    icon: Users,
    title: "Family-Owned Since 2009",
    description: "A mother-daughter dental team dedicated to treating every patient like family.",
  },
];

const Index = () => {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative overflow-hidden bg-secondary">
        <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeInSection>
              <p className="text-primary font-medium text-sm tracking-wide uppercase mb-4">
                SJ Summit Dental
              </p>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
                Modern Dentistry.{" "}
                <span className="text-primary">Family Care.</span>
              </h1>
              <p className="text-muted-foreground text-lg mb-8 max-w-lg">
                Serving our community since 2009 with gentle, trusted dental care.
                Your comfort is our priority.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contact">
                    Schedule Your Visit
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </Button>
                <Button variant="heroOutline" size="lg" asChild>
                  <Link to="/about">Meet Our Doctors</Link>
                </Button>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.15}>
              <div className="relative">
                <img
                  src={heroDoctors}
                  alt="Dr. Jackie and Dr. Mae Mae — SJ Summit Dental"
                  className="rounded-2xl shadow-2xl w-full object-cover aspect-[16/10]"
                />
                {/* Floating badge */}
                <div className="absolute -bottom-4 -left-4 bg-card rounded-xl shadow-lg p-4 flex items-center gap-3">
                  <div className="bg-primary/10 rounded-full p-2">
                    <Star className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-sm text-foreground">15+ Years</p>
                    <p className="text-xs text-muted-foreground">Trusted Care</p>
                  </div>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeInSection>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why Families Choose Us
              </h2>
              <p className="text-muted-foreground text-lg">
                We're happy to care for your smile — with expertise, warmth, and modern technology.
              </p>
            </div>
          </FadeInSection>

          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((pillar, i) => (
              <FadeInSection key={pillar.title} delay={i * 0.1}>
                <div className="bg-card rounded-2xl p-8 shadow-sm border border-border hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                  <div className="bg-primary/10 rounded-xl w-12 h-12 flex items-center justify-center mb-5">
                    <pillar.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Comfort Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeInSection>
              <img
                src={waitingRoom}
                alt="Comfortable waiting area at SJ Summit Dental"
                className="rounded-2xl shadow-lg w-full object-cover aspect-[4/3]"
              />
            </FadeInSection>
            <FadeInSection delay={0.1}>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                A Comfortable Environment for{" "}
                <span className="text-primary">All Ages</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                From our calming waiting area to our state-of-the-art treatment rooms, every detail is designed with your comfort in mind. We understand dental anxiety and go above and beyond to make your visit easy.
              </p>
              <ul className="space-y-3 mb-8">
                {["Walk-ins welcome", "Multilingual care: English, Español, Filipino", "Denti-Cal accepted", "Most insurance plans accepted"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <Button variant="hero" asChild>
                <Link to="/insurance">Insurance & Payment Info</Link>
              </Button>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Patient Testimonial-style CTA */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeInSection>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                Let's Make Your Visit Easy
              </h2>
              <p className="text-muted-foreground text-lg mb-4 leading-relaxed">
                Whether you're looking for a routine cleaning, cosmetic enhancements, or advanced restorative work — we're here to guide you with care and transparency.
              </p>
              <p className="text-muted-foreground mb-8">
                "Comfort-focused care using modern techniques."
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contact">
                    Schedule Your Visit
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </Button>
                <Button variant="heroOutline" size="lg" asChild>
                  <Link to="/services">View Our Services</Link>
                </Button>
              </div>
            </FadeInSection>
            <FadeInSection delay={0.1}>
              <img
                src={happyPatient}
                alt="Happy patient at SJ Summit Dental"
                className="rounded-2xl shadow-lg w-full object-cover aspect-[4/3]"
              />
            </FadeInSection>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Index;
