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
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-2xl">
          <FadeInSection>
            <p className="text-accent font-medium text-sm tracking-widest uppercase mb-6">Our Office</p>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              Technology &{" "}
              <span className="italic font-normal">Comfort</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Advanced equipment meets a welcoming atmosphere — because great care deserves a great environment.
            </p>
          </FadeInSection>
        </div>
      </section>

      <section className="pb-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeInSection>
              <img
                src={xrayMachine}
                alt="Panoramic X-ray machine at SJ Summit Dental"
                className="rounded-lg shadow-lg w-full object-cover aspect-[3/4] max-h-[500px]"
                loading="lazy"
              />
            </FadeInSection>
            <div className="space-y-8">
              {techFeatures.map((f, i) => (
                <FadeInSection key={f.title} delay={i * 0.1}>
                  <div className="flex gap-4">
                    <div className="bg-accent/10 rounded-md w-12 h-12 flex items-center justify-center flex-shrink-0">
                      <f.icon className="w-5 h-5 text-accent" />
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

      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeInSection>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                Designed for{" "}
                <span className="italic font-normal">All Ages</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                Each treatment room features unique hand-painted murals — from serene waterfalls to ocean scenes — designed to help patients of all ages feel at ease.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We're proud of the warm, community-oriented space we've built — where every smile matters.
              </p>
            </FadeInSection>
            <FadeInSection delay={0.1}>
              <img
                src={treatmentRoom}
                alt="Treatment room with waterfall mural"
                className="rounded-lg shadow-lg w-full object-cover aspect-[3/4] max-h-[500px]"
                loading="lazy"
              />
            </FadeInSection>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Technology;
