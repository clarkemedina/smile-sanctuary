import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/PageLayout";
import FadeInSection from "@/components/shared/FadeInSection";
import { ArrowRight, Star, ExternalLink } from "lucide-react";
import sjSummitLogo from "@/assets/sj-summit-logo.png";
import doctorsPortrait from "@/assets/doctors-portrait.png";
import receptionDesk from "@/assets/reception-edited.webp";
import treatmentRoom from "@/assets/treatment-edited.webp";

const reviews = [
  {
    name: "Jayson B.",
    location: "Artesia, CA",
    stars: 5,
    text: "I've been coming here since 2009. I love Dra Jackie. She is genuine to her patients. She recommends what's best for you and not for her pocket.",
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
    name: "Brian",
    location: "Artesia, CA",
    stars: 5,
    text: "I stopped going to the dentist for almost 6 years. I went to SJ Summit Dental and the staff was understanding and excellent in every way.",
  },
];

const StarRating = ({ count, color = "text-red-500 fill-red-500" }: { count: number; color?: string }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: count }).map((_, i) => (
      <Star key={i} className={`w-3.5 h-3.5 ${color}`} />
    ))}
  </div>
);

const Index = () => {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeInSection>
              <img
                src={sjSummitLogo}
                alt="SJ Summit Dental logo"
                className="w-32 h-32 mb-6"
              />
              <h2 className="text-primary font-heading text-2xl font-bold tracking-wide mb-1">
                SJ SUMMIT DENTAL
              </h2>
              <p className="text-muted-foreground italic mb-6">
                Your Smile Shines Because We Care
              </p>
              <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] mb-4">
                Modern Dentistry.
              </h1>
              <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-primary leading-[1.1] mb-8">
                Family Care.
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-md">
                Serving our community since 2009 with gentle, trusted
                dental care. Your comfort is our priority.
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
                  alt="Dr. Jackie and Dr. Gerimae — SJ Summit Dental"
                  className="rounded-lg shadow-2xl w-full object-cover object-top aspect-[4/5]"
                />
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 lg:py-32 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeInSection>
            <div className="text-center max-w-xl mx-auto mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-5">
                Why Families Choose Us
              </h2>
              <p className="text-muted-foreground text-lg">
                We're here to care for your smile — with expertise, warmth, and modern technology.
              </p>
            </div>
          </FadeInSection>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Advanced Technology",
                desc: "Digital X-rays, panoramic imaging, and modern equipment for precise, comfortable care.",
              },
              {
                title: "Comfort-First Care",
                desc: "Gentle techniques and a calming environment designed to ease every visit.",
              },
              {
                title: "Family-Owned Since 2009",
                desc: "A mother-daughter dental team dedicated to treating every patient like family.",
              },
            ].map((pillar, i) => (
              <FadeInSection key={pillar.title} delay={i * 0.1}>
                <div className="bg-card rounded-lg p-8 shadow-sm border border-border hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                  <div className="w-8 h-0.5 bg-accent mb-6" />
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Comfort Section */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeInSection>
              <img
                src={receptionDesk}
                alt="Reception area at SJ Summit Dental"
                className="rounded-lg shadow-lg w-full object-cover aspect-[4/3]"
              />
            </FadeInSection>
            <FadeInSection delay={0.1}>
              <p className="text-accent font-medium text-sm tracking-widest uppercase mb-4">Our Environment</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                Designed for{" "}
                <span className="italic font-normal">Your Ease</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                From our welcoming reception to our nature-themed treatment rooms, every detail
                is crafted with your comfort in mind. We understand dental anxiety and go above
                and beyond to make your visit effortless.
              </p>
              <ul className="space-y-3 mb-8">
                {["Walk-ins welcome", "Multilingual: English, Español, Filipino", "Most insurance plans accepted"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <Button variant="heroOutline" asChild>
                <Link to="/insurance">Insurance & Payment Info</Link>
              </Button>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-24 lg:py-32 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeInSection>
            <div className="text-center max-w-xl mx-auto mb-16">
              <p className="text-red-500 font-medium text-sm tracking-widest uppercase mb-2">Yelp Reviews</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-5">
                What Our Patients Say
              </h2>
              <div className="flex items-center justify-center gap-2 mb-3">
                <StarRating count={5} />
                <span className="text-muted-foreground text-sm">45+ reviews on Yelp</span>
              </div>
            </div>
          </FadeInSection>

          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
            {reviews.map((review, i) => (
              <FadeInSection key={review.name} delay={i * 0.07}>
                <div className="bg-card rounded-lg p-6 shadow-sm border border-border flex flex-col gap-4 h-full">
                  <p className="text-foreground text-sm leading-relaxed flex-1 italic">
                    "{review.text}"
                  </p>
                  <div className="flex items-center justify-between pt-3 border-t border-border">
                    <div>
                      <p className="font-medium text-sm text-foreground">{review.name}</p>
                      <p className="text-xs text-muted-foreground">{review.location}</p>
                    </div>
                    <StarRating count={review.stars} />
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
                className="inline-flex items-center gap-2 text-sm font-medium text-primary border-2 border-primary rounded-md px-6 py-2.5 hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                Read All Reviews on Yelp
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeInSection>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                We're Here When{" "}
                <span className="italic font-normal">You're Ready</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Whether it's a routine cleaning, cosmetic enhancement, or advanced restorative work —
                we guide you with care, transparency, and respect.
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
                alt="Treatment room at SJ Summit Dental"
                className="rounded-lg shadow-lg w-full object-cover aspect-[4/3]"
              />
            </FadeInSection>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Index;
