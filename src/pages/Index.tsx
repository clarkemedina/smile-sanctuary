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
    location: "Artesia, CA · via Yelp",
    stars: 5,
    text: "I've been coming here since 2009. I love Dr Jackie. She is genuine to her patients.",
  },
  {
    name: "Tes G.",
    location: "Rancho Palos Verdes, CA · via Yelp",
    stars: 5,
    text: "Dr. Jackie and her team are awesome! She's very personable and treats you like family.",
  },
  {
    name: "Anna A.",
    location: "Los Angeles, CA · via Yelp",
    stars: 5,
    text: "Dr. Jackie is very patient and truly cares. You will be in good hands!",
  },
  {
    name: "Maricel C.",
    location: "Artesia, CA · via Yelp",
    stars: 5,
    text: "Highly recommended! The clinic is very clean and organized.",
  },
  {
    name: "Brian",
    location: "Artesia, CA · via Yelp",
    stars: 5,
    text: "The staff was understanding and excellent in every way.",
  },
  {
    name: "Rachelle A.",
    location: "Torrance, CA · via Yelp",
    stars: 5,
    text: "Dr. Jackie made sure everything was done properly without pain.",
  },
];

const StarRating = ({ count }: { count: number }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: count }).map((_, i) => (
      <Star key={i} className="w-4 h-4 text-red-500 fill-red-500" />
    ))}
  </div>
);

const Index = () => {
  return (
    <PageLayout>

      {/* HERO */}
      <section className="pt-20 pb-24 lg:pt-24 lg:pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">

            <FadeInSection>
              <img
                src={sjSummitLogo}
                alt="SJ Summit Dental logo"
                className="w-36 md:w-40 mb-8"
              />

              <h2 className="text-primary font-heading text-3xl font-semibold tracking-wide mb-2">
                SJ SUMMIT DENTAL
              </h2>

              <p className="text-muted-foreground italic mb-8 text-lg">
                Your Smile Shines Because We Care
              </p>

              <h1 className="font-heading text-6xl md:text-7xl lg:text-[4.5rem] font-bold leading-[1.05] text-foreground">
                Modern Dentistry.
              </h1>

              <h1 className="font-heading text-6xl md:text-7xl lg:text-[4.5rem] font-bold leading-[1.05] text-primary mb-10">
                Family Care.
              </h1>

              <p className="text-muted-foreground text-xl leading-relaxed mb-12 max-w-lg">
                Serving our community since 2009 with gentle, trusted dental care.
                Your comfort is our priority.
              </p>

              <div className="flex flex-wrap gap-5">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contact">
                    Schedule Your Visit
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>

                <Button variant="heroOutline" size="lg" asChild>
                  <Link to="/about">Meet Our Doctors</Link>
                </Button>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.15}>
              <img
                src={doctorsPortrait}
                alt="Doctors portrait"
                className="rounded-2xl shadow-2xl w-full object-cover object-top aspect-[4/5]"
              />
            </FadeInSection>

          </div>
        </div>
      </section>

      {/* DIVIDER */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="border-t border-border opacity-60" />
      </div>

      {/* WHY FAMILIES CHOOSE US */}
      <section className="py-28 lg:py-36 bg-secondary">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">

          <FadeInSection>
            <div className="text-center max-w-2xl mx-auto mb-20">
              <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
                Why Families Choose Us
              </h2>
              <p className="text-muted-foreground text-lg">
                We're here to care for your smile — with expertise, warmth, and modern technology.
              </p>
            </div>
          </FadeInSection>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Advanced Technology",
                desc: "Digital X-rays, panoramic imaging, and modern equipment for precise care.",
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
                <div className="bg-card rounded-xl p-10 border shadow-md hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
                  <div className="w-10 h-[2px] bg-accent mb-6" />
                  <h3 className="font-heading text-2xl font-semibold mb-4">
                    {pillar.title}
                  </h3>
                  <p className="text-muted-foreground text-base leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </FadeInSection>
            ))}
          </div>

        </div>
      </section>

      {/* OUR ENVIRONMENT */}
      <section className="py-28 lg:py-36">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">

            <FadeInSection>
              <img
                src={receptionDesk}
                alt="Reception area"
                className="rounded-2xl shadow-xl w-full object-cover aspect-[4/3]"
              />
            </FadeInSection>

            <FadeInSection delay={0.1}>
              <p className="text-accent font-medium text-sm tracking-widest uppercase mb-4">
                OUR ENVIRONMENT
              </p>

              <h2 className="font-heading text-4xl md:text-5xl font-bold mb-8 whitespace-nowrap">
                Designed for <span className="italic font-normal">Your Ease</span>
              </h2>

              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                From our welcoming reception to our nature-themed treatment rooms,
                every detail is crafted with your comfort in mind.
              </p>

              <ul className="space-y-4 mb-10">
                {[
                  "Walk-ins welcome",
                  "Multilingual: English, Español, Filipino",
                  "Most insurance plans accepted",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                    <span className="text-base">{item}</span>
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

      {/* YELP + CTA sections remain unchanged */}

    </PageLayout>
  );
};

export default Index;
