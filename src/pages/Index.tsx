import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/PageLayout";
import FadeInSection from "@/components/shared/FadeInSection";
import { Shield, Heart, Users, ArrowRight, Star, ExternalLink } from "lucide-react";
import doctorsPortrait from "@/assets/doctors-portrait.png";
import receptionDesk from "@/assets/reception-edited.webp";
import treatmentRoom from "@/assets/treatment-edited.webp";
import sjLogo from "@/assets/sj-summit-logo.png";

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

const reviews = [
  {
    name: "Jayson B.",
    location: "Artesia, CA",
    stars: 5,
    text: "I've been coming here since 2009. I love Dra Jackie. She is genuine to her patients. She recommends what's best for you and not for her pocket. Highly recommended!",
  },
  {
    name: "Tes G.",
    location: "Rancho Palos Verdes, CA",
    stars: 5,
    text: "Dr. Jackie and her team are awesome! She's very personable and treats you like family. She would rather ensure your well being and quality work than anything else.",
  },
  {
    name: "Anna A.",
    location: "Los Angeles, CA",
    stars: 5,
    text: "Dr. Jackie is very patient, takes her time with her patients and she is very accommodating with questions. If you're looking for a dentist that truly cares, you will be in good hands!",
  },
  {
    name: "Maricel C.",
    location: "Artesia, CA",
    stars: 5,
    text: "Highly recommended! I have been coming here for years. The clinic is very clean, bright and organized. Dr. Jackie is awesome — very accommodating and patient.",
  },
  {
    name: "Brian",
    location: "Artesia, CA",
    stars: 5,
    text: "I stopped going to the dentist for almost 6 years. I went to SJ Summit Dental and the staff was understanding and excellent in every way. I am very happy with my new dentist.",
  },
  {
    name: "Rachelle A.",
    location: "Torrance, CA",
    stars: 5,
    text: "I would have anxiety when I go to the dentist, but not this time around. Dr. Jackie took her time to make sure my fix was done properly without any pain.",
  },
];

const StarRating = ({ count }: { count: number }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: count }).map((_, i) => (
      <Star key={i} className="w-4 h-4 fill-[#d32323] text-[#d32323]" />
    ))}
  </div>
);

const Index = () => {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative overflow-hidden bg-secondary">
        <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeInSection>

              {/* Logo + name block — stacked vertically, large */}
              <div className="flex flex-col items-start gap-2 mb-6">
                <img
                  src={sjLogo}
                  alt="SJ Summit Dental Logo"
                  className="w-32 h-32 md:w-56 md:h-56 object-contain"
                />
                <p className="text-primary font-bold text-3xl md:text-4xl tracking-wide uppercase leading-tight">
                  SJ Summit Dental
                </p>
                <p className="text-muted-foreground text-lg md:text-xl italic leading-snug">
                  Your smile shines because we care
                </p>
              </div>

              <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6">
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
                  src={doctorsPortrait}
                  alt="Dr. Jackie Del Rosario and Dr. Gerimae — SJ Summit Dental"
                  className="rounded-2xl shadow-2xl w-full object-cover object-top aspect-[4/5] lg:aspect-[3/4]"
                />
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
                src={receptionDesk}
                alt="Reception area at SJ Summit Dental"
                className="rounded-2xl shadow-lg w-full object-cover aspect-[4/3]"
              />
            </FadeInSection>
            <FadeInSection delay={0.1}>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                A Comfortable Environment for{" "}
                <span className="text-primary">All Ages</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                From our welcoming reception area to our nature-themed treatment rooms, every detail is designed with your comfort in mind. We understand dental anxiety and go above and beyond to make your visit easy.
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

      {/* Yelp Reviews Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeInSection>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <div className="flex items-center justify-center gap-2 mb-3">
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-[#d32323]" aria-label="Yelp" role="img">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-.75 5.4c.15-.675.9-1.05 1.5-.75l4.05 2.1c.6.3.75 1.05.375 1.575l-2.55 3.3c-.375.525-1.125.525-1.5.075l-1.5-2.1c-.15-.225-.225-.525-.15-.75l-.225-3.45zm-5.1 7.35c-.45-.525-.3-1.275.225-1.65l3.675-2.25c.525-.3 1.2-.075 1.5.45l.9 1.875c.225.45.075 1.05-.375 1.275l-3.75 1.875c-.675.3-1.5-.075-1.8-.75l-.375-.825zm1.65 5.625c-.675-.075-1.125-.75-.975-1.425l.975-4.125c.15-.675.825-1.05 1.5-.825l1.95.675c.525.15.825.675.75 1.2l-.6 3.9c-.15.9-1.05 1.425-1.875 1.2l-1.725-.6zm7.2 1.05c-.675.3-1.5-.075-1.725-.75l-1.125-3.825c-.15-.675.225-1.35.9-1.5l2.025-.45c.525-.15 1.05.15 1.275.675l1.125 3.225c.375.975-.15 2.025-1.125 2.4l-1.35.225zm3.75-4.5c-.3.6-1.05.825-1.65.525l-3.6-1.8c-.6-.3-.825-1.05-.525-1.65l.9-1.875c.3-.6 1.05-.825 1.65-.45l3.375 1.8c.9.45 1.125 1.65.6 2.4l-.75 1.05z"/>
                </svg>
                <span className="text-[#d32323] font-bold text-lg tracking-tight">Yelp Reviews</span>
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">
                What Our Patients Say
              </h2>
              <div className="flex items-center justify-center gap-2 mb-4">
                <StarRating count={5} />
                <span className="text-muted-foreground text-sm">45+ reviews on Yelp</span>
              </div>
              <p className="text-muted-foreground">
                Real words from real patients who've trusted us with their smiles.
              </p>
            </div>
          </FadeInSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {reviews.map((review, i) => (
              <FadeInSection key={review.name} delay={i * 0.07}>
                <div className="bg-card rounded-2xl p-6 shadow-sm border border-border flex flex-col gap-4 h-full">
                  <StarRating count={review.stars} />
                  <p className="text-foreground text-sm leading-relaxed flex-1">
                    "{review.text}"
                  </p>
                  <div className="pt-2 border-t border-border">
                    <p className="font-semibold text-sm text-foreground">{review.name}</p>
                    <p className="text-xs text-muted-foreground">{review.location} · via Yelp</p>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>

          <FadeInSection delay={0.1}>
            <div className="text-center">
              <a
                href="https://www.yelp.com/biz/sj-summit-dental-artesia-3"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-[#d32323] text-[#d32323] font-semibold text-sm hover:bg-[#d32323] hover:text-white transition-all duration-200"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-.75 5.4c.15-.675.9-1.05 1.5-.75l4.05 2.1c.6.3.75 1.05.375 1.575l-2.55 3.3c-.375.525-1.125.525-1.5.075l-1.5-2.1c-.15-.225-.225-.525-.15-.75l-.225-3.45zm-5.1 7.35c-.45-.525-.3-1.275.225-1.65l3.675-2.25c.525-.3 1.2-.075 1.5.45l.9 1.875c.225.45.075 1.05-.375 1.275l-3.75 1.875c-.675.3-1.5-.075-1.8-.75l-.375-.825zm1.65 5.625c-.675-.075-1.125-.75-.975-1.425l.975-4.125c.15-.675.825-1.05 1.5-.825l1.95.675c.525.15.825.675.75 1.2l-.6 3.9c-.15.9-1.05 1.425-1.875 1.2l-1.725-.6zm7.2 1.05c-.675.3-1.5-.075-1.725-.75l-1.125-3.825c-.15-.675.225-1.35.9-1.5l2.025-.45c.525-.15 1.05.15 1.275.675l1.125 3.225c.375.975-.15 2.025-1.125 2.4l-1.35.225zm3.75-4.5c-.3.6-1.05.825-1.65.525l-3.6-1.8c-.6-.3-.825-1.05-.525-1.65l.9-1.875c.3-.6 1.05-.825 1.65-.45l3.375 1.8c.9.45 1.125 1.65.6 2.4l-.75 1.05z"/>
                </svg>
                Read All Reviews on Yelp
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* CTA Section */}
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
              <p className="text-muted-foreground mb-8 italic">
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
                src={treatmentRoom}
                alt="Treatment room with nature mural at SJ Summit Dental"
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
