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
      <section className="pt-32 pb-28 lg:pt-40 lg:pb-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-24 items-center">

            <FadeInSection>
              <img
                src={sjSummitLogo}
                alt="SJ Summit Dental logo"
                className="w-40 md:w-44 mb-10"
              />

              <h2 className="text-primary font-heading text-3xl font-semibold tracking-wide mb-3">
                SJ SUMMIT DENTAL
              </h2>

              <p className="text-muted-foreground italic mb-10 text-lg">
                Your Smile Shines Because We Care
              </p>

              <h1 className="font-heading text-6xl md:text-7xl lg:text-[4.75rem] font-bold leading-[1.02] text-foreground mb-2">
                Modern Dentistry.
              </h1>

              <h1 className="font-heading text-6xl md:text-7xl lg:text-[4.75rem] font-bold leading-[1.02] text-primary mb-12">
                Family Care.
              </h1>

              <p className="text-muted-foreground text-xl leading-relaxed mb-14 max-w-xl">
                Serving our community since 2009 with gentle, trusted dental care.
                Your comfort is our priority.
              </p>

              <div className="flex flex-wrap gap-6">
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
      <section className="py-32 lg:py-40 bg-secondary">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">

          <FadeInSection>
            <div className="text-center max-w-2xl mx-auto mb-24">
              <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
                Why Families Choose Us
              </h2>
              <p className="text-muted-foreground text-lg">
                We're here to care for your smile — with expertise, warmth, and modern technology.
              </p>
            </div>
          </FadeInSection>

          <div className="grid md:grid-cols-3 gap-12">
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
                <div className="bg-card rounded-xl p-12 border shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="w-12 h-[2px] bg-accent mb-8" />
                  <h3 className="font-heading text-2xl font-semibold mb-5">
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
      <section className="py-32 lg:py-40">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-24 items-center">

            <FadeInSection>
              <img
                src={receptionDesk}
                alt="Reception area"
                className="rounded-2xl shadow-xl w-full object-cover aspect-[4/3]"
              />
            </FadeInSection>

            <FadeInSection delay={0.1}>
              <p className="text-accent font-medium text-sm tracking-widest uppercase mb-5">
                OUR ENVIRONMENT
              </p>

              <h2 className="font-heading text-4xl md:text-5xl font-bold mb-10">
                Designed for <span className="italic font-normal">Your Ease</span>
              </h2>

              <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
                From our welcoming reception to our nature-themed treatment rooms,
                every detail is crafted with your comfort in mind.
              </p>

              <ul className="space-y-5 mb-12">
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

      {/* YELP REVIEWS */}
      <section className="py-32 lg:py-40 bg-secondary">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">

          <FadeInSection>
            <div className="text-center max-w-2xl mx-auto mb-24">
              <p className="text-red-600 font-medium text-sm tracking-widest uppercase mb-3">
                Yelp Reviews
              </p>

              <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
                What Our Patients Say
              </h2>

              <div className="flex items-center justify-center gap-2 mb-4">
                <StarRating count={5} />
                <span className="text-muted-foreground text-sm">
                  45+ Reviews on Yelp
                </span>
              </div>
            </div>
          </FadeInSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
            {reviews.map((review, i) => (
              <FadeInSection key={review.name} delay={i * 0.08}>
                <div className="bg-card rounded-xl p-10 border shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col gap-5">
                  <StarRating count={review.stars} />
                  <p className="text-sm flex-1 leading-relaxed">
                    "{review.text}"
                  </p>
                  <div className="pt-4 border-t">
                    <p className="font-medium text-sm">{review.name}</p>
                    <p className="text-xs text-red-600">{review.location}</p>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>

          <div className="text-center">
            <a
              href="https://www.yelp.com/biz/sj-summit-dental-artesia-3"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-red-600 border-2 border-red-600 rounded-full px-8 py-3 hover:bg-red-600 hover:text-white transition-colors"
            >
              Read All Reviews on Yelp
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="pt-32 pb-36 lg:pt-40 lg:pb-44">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-24 items-center">

            <FadeInSection>
              <h2 className="font-heading text-4xl md:text-5xl font-bold mb-8">
                We're Here When <span className="italic font-normal">You're Ready</span>
              </h2>

              <p className="text-muted-foreground text-lg mb-12 leading-relaxed">
                Whether it's a routine cleaning or advanced treatment,
                we guide you with care and transparency.
              </p>

              <div className="flex flex-wrap gap-6">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contact">
                    Schedule Your Visit
                    <ArrowRight className="w-5 h-5 ml-2" />
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
                alt="Treatment room"
                className="rounded-2xl shadow-xl w-full object-cover aspect-[4/3]"
              />
            </FadeInSection>

          </div>
        </div>
      </section>

    </PageLayout>
  );
};

export default Index;
