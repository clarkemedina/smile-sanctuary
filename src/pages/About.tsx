import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/PageLayout";
import FadeInSection from "@/components/shared/FadeInSection";
import { Award, GraduationCap, Heart, ArrowRight } from "lucide-react";
import doctorsPortrait from "@/assets/doctors-portrait.png";

const credentials = [
  "Doctor of Dental Medicine (DMD) — University of the East, 1988",
  "Dental Hygienist — Licensed in Florida, 2005",
  "Licensed in California, 2007",
  "American Dental Association (ADA) Member",
  "California Dental Association (CDA) Member",
  "Harbor Dental Society Member",
  "Southern California Dental Society — Public Relations Officer",
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

      {/* Credentials */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <FadeInSection>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-2 text-center">
              Meet the Doctor
            </h2>
            <p className="text-muted-foreground text-lg text-center mb-2">
              Dr. May Jacqueline Navoa-del Rosario, DMD
            </p>
            <p className="text-muted-foreground text-sm text-center mb-10">
              Business Owner &amp; Founder
            </p>
            <ul className="space-y-4">
              {credentials.map((c) => (
                <li key={c} className="flex items-center gap-3 bg-card rounded-xl p-4 shadow-sm border border-border">
                  <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                  <span className="text-foreground text-sm">{c}</span>
                </li>
              ))}
            </ul>
          </FadeInSection>

          <FadeInSection delay={0.1}>
            <div className="text-center mt-14">
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
