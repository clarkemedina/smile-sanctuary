import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/PageLayout";
import FadeInSection from "@/components/shared/FadeInSection";
import { ArrowRight } from "lucide-react";
import doctorsPortrait from "@/assets/doctors-portrait.png";
import drGerimae from "@/assets/dr-gerimae.jpg";

const values = [
  {
    title: "Compassion",
    desc: "Every patient deserves kindness and understanding. We listen first, treat second.",
  },
  {
    title: "Excellence",
    desc: "We invest in continuing education and advanced technology to deliver the highest standard of care.",
  },
  {
    title: "Transparency",
    desc: "We empower patients with knowledge so they can make informed decisions about their health.",
  },
];

const jackieCredentials = [
  "Doctor of Dental Medicine (DMD) — University of the East, 1988",
  "Dental Hygienist — Licensed in Florida, 2005",
  "Licensed in California, 2007",
  "American Dental Association (ADA) Member",
  "California Dental Association (CDA) Member",
  "Harbor Dental Society Member",
  "Southern California Dental Society — Public Relations Officer",
];

const gerimaeCredentials = [
  "Doctor of Dental Surgery (DDS) — University of the Pacific, Arthur A. Dugoni School of Dentistry, Class of 2023",
  "White Coat Ceremony — August 21, 2021, Palace of Fine Arts Theatre, San Francisco",
];

const About = () => {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeInSection>
              <p className="text-accent font-medium text-sm tracking-widest uppercase mb-6">About Us</p>
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-8 leading-[1.1]">
                Family-Owned.{" "}
                <span className="italic font-normal">Patient-Focused.</span>
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                SJ Summit Dental was established in 2009 with a simple belief: every patient
                deserves quality care in a space that feels warm, honest, and welcoming.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We always value our patients' opinions and what is best for them.
                Our team provides the best smile — because we care.
              </p>
            </FadeInSection>

            <FadeInSection delay={0.15}>
              <img
                src={doctorsPortrait}
                alt="Dr. Jackie and Dr. Gerimae at SJ Summit Dental"
                className="rounded-lg shadow-2xl w-full object-cover object-top aspect-[4/5]"
              />
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 lg:py-32 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeInSection>
            <div className="text-center max-w-xl mx-auto mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-5">
                Our Values
              </h2>
              <p className="text-muted-foreground text-lg">
                What guides every decision we make.
              </p>
            </div>
          </FadeInSection>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {values.map((v, i) => (
              <FadeInSection key={v.title} delay={i * 0.1}>
                <div className="text-center">
                  <div className="w-8 h-0.5 bg-accent mx-auto mb-6" />
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                    {v.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Doctors */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <FadeInSection>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-16 text-center">
              Meet Our Doctors
            </h2>

            {/* Dr. Jackie */}
            <div className="mb-20">
              <h3 className="font-heading text-2xl font-bold text-foreground text-center mb-2">
                Dr. May Jacqueline Navoa-del Rosario, DMD
              </h3>
              <p className="text-muted-foreground text-sm text-center mb-8">
                Founder & Business Owner
              </p>
              <ul className="space-y-3">
                {jackieCredentials.map((c) => (
                  <li
                    key={c}
                    className="flex items-center gap-3 bg-secondary rounded-lg p-4"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                    <span className="text-foreground text-sm">{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Dr. Gerimae */}
            <div>
              <img
                src={drGerimae}
                alt="Dr. Gerimae del Rosario"
                className="rounded-lg shadow-lg w-full max-w-md mx-auto mb-8 object-cover"
              />
              <h3 className="font-heading text-2xl font-bold text-foreground text-center mb-2">
                Dr. Gerimae del Rosario, DDS
              </h3>
              <p className="text-muted-foreground text-sm text-center mb-8">
                Associate Dentist
              </p>
              <ul className="space-y-3">
                {gerimaeCredentials.map((c) => (
                  <li
                    key={c}
                    className="flex items-center gap-3 bg-secondary rounded-lg p-4"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                    <span className="text-foreground text-sm">{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-6">
              We're here when you're ready.
            </h2>
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">
                Schedule Your Visit
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </Button>
          </FadeInSection>
        </div>
      </section>
    </PageLayout>
  );
};

export default About;
