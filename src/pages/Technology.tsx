import PageLayout from "@/components/layout/PageLayout";
import FadeInSection from "@/components/shared/FadeInSection";
import { Monitor, Scan, Armchair } from "lucide-react";
import technologyRoom from "@/assets/technology-room.webp";
import waitingRoom from "@/assets/waiting-room.webp";

const techFeatures = [
  {
    icon: Scan,
    title: "Digital X-Ray System",
    desc: "Low-radiation digital imaging for fast, accurate diagnosis with minimal exposure.",
  },
  {
    icon: Monitor,
    title: "Panoramic Imaging",
    desc: "Full-jaw panoramic X-rays for comprehensive treatment planning.",
  },
  {
    icon: Armchair,
    title: "Modern Treatment Chairs",
    desc: "Ergonomic, comfortable dental chairs designed for relaxed patient experiences.",
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
                src={technologyRoom}
                alt="Advanced dental technology at SJ Summit Dental"
                className="rounded-2xl shadow-lg w-full object-cover aspect-[4/3]"
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
                Our office is designed to feel welcoming from the moment you walk in. Natural light, calming colors, and a friendly team create an atmosphere where families feel at home.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We're proud of the warm, community-oriented space we've built — where every smile matters.
              </p>
            </FadeInSection>
            <FadeInSection delay={0.1}>
              <img
                src={waitingRoom}
                alt="Welcoming reception area"
                className="rounded-2xl shadow-lg w-full object-cover aspect-[4/3]"
              />
            </FadeInSection>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Technology;
