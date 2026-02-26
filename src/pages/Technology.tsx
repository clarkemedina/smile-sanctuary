import PageLayout from "@/components/layout/PageLayout";
import FadeInSection from "@/components/shared/FadeInSection";
import { Monitor, Scan, Armchair } from "lucide-react";
import xrayMachine from "@/assets/xray-edited.webp";
import treatmentRoom from "@/assets/treatment-edited.webp";

const techFeatures = [
  {
    icon: Scan,
    title: "Panoramic X-Ray System",
    desc: "Advanced panoramic imaging for comprehensive diagnosis with minimal radiation exposure.",
  },
  {
    icon: Monitor,
    title: "Digital Treatment Planning",
    desc: "Chairside monitors for real-time imaging and patient education.",
  },
  {
    icon: Armchair,
    title: "Comfort-Focused Rooms",
    desc: "Nature-themed treatment rooms with hand-painted murals to create a calming atmosphere.",
  },
];

const Technology = () => {
  return (
    <PageLayout>
      <section className="bg-secondary py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-2xl">
          <FadeInSection>
            <p className="text-primary font-medium text-sm tracking-wide uppercase mb-4">Our Office</p>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              Technology & Comfort
            </h1>
            <p className="text-muted-foreground text-lg">
              Advanced equipment meets a welcoming atmosphere — because great care deserves a great environment.
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* Tech Features */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeInSection>
              <img
                src={xrayMachine}
                alt="Panoramic X-ray machine at SJ Summit Dental"
                className="rounded-2xl shadow-lg w-full object-cover aspect-[3/4] max-h-[500px]"
              />
            </FadeInSection>
            <div className="space-y-6">
              {techFeatures.map((f, i) => (
                <FadeInSection key={f.title} delay={i * 0.1}>
                  <div className="flex gap-4">
                    <div className="bg-primary/10 rounded-xl w-12 h-12 flex items-center justify-center flex-shrink-0">
                      <f.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground mb-1">{f.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
                    </div>
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Comfort */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeInSection>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                Comfortable Environment for <span className="text-primary">All Ages</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                Each treatment room features unique hand-painted murals — from serene waterfalls to ocean scenes — designed to help patients of all ages feel at ease during their visit.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We're proud of the warm, community-oriented space we've built — where every smile matters.
              </p>
            </FadeInSection>
            <FadeInSection delay={0.1}>
              <img
                src={treatmentRoom}
                alt="Treatment room with waterfall mural"
                className="rounded-2xl shadow-lg w-full object-cover aspect-[3/4] max-h-[500px]"
              />
            </FadeInSection>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Technology;
