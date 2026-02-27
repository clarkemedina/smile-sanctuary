import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/PageLayout";
import FadeInSection from "@/components/shared/FadeInSection";
import { Award, GraduationCap, Heart, ArrowRight } from "lucide-react";
import doctorsPortrait from "@/assets/doctors-portrait.png";
import drGerimae from "@/assets/dr-gerimae.jpg";

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
      <section className="bg-secondary py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeInSection>
              <p className="text-primary font-medium text-sm tracking-wide uppercase mb-4">About Us</p>
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
                Family-Owned.{" "}
                <span className="text-primary">Patient-Focused.</span>
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                SJ Summit Dental was established in 2009 with a goal to make a difference in the field of dentistry. We provide quality dental service to everyone and consider our patients to be part of our family.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We always value our patients' opinions and what is best for them. Our team provides the best smile because we care.
              </p>
            </FadeInSection>
            <FadeInSection delay={0.15}>
              <img
                src={doctorsPortrait}
                alt="Dr. Jackie Del Rosario and Dr. Gerimae at SJ Summit Dental"
                className="rounded-2xl shadow-2xl w-full object-cover object-top aspect-[4/5]"
              />
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeInSection>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">Our Values</h2>
              <p className="text-muted-foreground text-lg">What guides every decision we make.</p>
            </div>
          </FadeInSection>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Heart, title: "Compassion", desc: "Every patient deserves kindness and understanding. We listen first, treat second." },
              { icon: Award, title: "Excellence", desc: "We invest in continuing education and advanced technology to deliver the highest standard of care." },
              { icon: GraduationCap, title: "Education", desc: "We empower patients with knowledge so they can make informed decisions about their oral health." },
            ].map((v, i) => (
              <FadeInSection key={v.title} delay={i * 0.1}>
                <div className="bg-card rounded-2xl p-8 shadow-sm border border-border text-center">
                  <div className="bg-primary/10 rounded-xl w-12 h-12 flex items-center justify-center mx-auto mb-5">
                    <v.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-2">{v.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Doctors */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeInSection>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                Meet Our Doctors
              </h2>
              <p className="text-muted-foreground text-lg">
                A mother-daughter team dedicated to your smile.
              </p>
            </div>
          </FadeInSection>

          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">

            {/* Dr. Jackie */}
            <FadeInSection delay={0.05}>
              <div className="bg-card rounded-2xl overflow-hidden shadow-sm border border-border h-full flex flex-col">
                <img
                  src={doctorsPortrait}
                  alt="Dr. May Jacqueline Navoa-del Rosario"
                  className="w-full object-cover object-top aspect-[4/3]"
                />
                <div className="p-8 flex flex-col flex-1">
                  <div className="bg-primary/10 rounded-xl w-10 h-10 flex items-center justify-center mb-4">
                    <Award className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-foreground mb-1">
                    Dr. May Jacqueline Navoa-del Rosario
                  </h3>
                  <p className="text-primary text-xs font-semibold uppercase tracking-wide mb-4">
                    Founder & Business Owner
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    With over 35 years of experience in dentistry, Dr. Jackie founded SJ Summit Dental in 2009 with a vision to provide compassionate, high-quality dental care for the whole family. Her patients are at the heart of everything she does.
                  </p>
                  <ul className="space-y-2 mt-auto">
                    {jackieCredentials.map((c) => (
                      <li key={c} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2" />
                        <span className="text-foreground text-sm">{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeInSection>

            {/* Dr. Gerimae */}
            <FadeInSection delay={0.1}>
              <div className="bg-card rounded-2xl overflow-hidden shadow-sm border border-border h-full flex flex-col">
                <img
                  src={drGerimae}
                  alt="Dr. Gerimae del Rosario"
                  className="w-full object-cover object-top aspect-[4/3]"
                />
                <div className="p-8 flex flex-col flex-1">
                  <div className="bg-primary/10 rounded-xl w-10 h-10 flex items-center justify-center mb-4">
                    <GraduationCap className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-foreground mb-1">
                    Dr. Gerimae del Rosario
                  </h3>
                  <p className="text-primary text-xs font-semibold uppercase tracking-wide mb-4">
                    Associate Dentist
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    Following in her mother's footsteps, Dr. Gerimae brings a fresh perspective and modern training to SJ Summit Dental. A graduate of one of California's most prestigious dental schools, she is passionate about providing gentle, patient-centered care.
                  </p>
                  <ul className="space-y-2 mt-auto">
                    {gerimaeCredentials.map((c) => (
                      <li key={c} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2" />
                        <span className="text-foreground text-sm">{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeInSection>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <FadeInSection>
            <div className="text-center">
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

export default About;
