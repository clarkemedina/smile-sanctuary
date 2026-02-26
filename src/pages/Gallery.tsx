import { useState } from "react";
import PageLayout from "@/components/layout/PageLayout";
import FadeInSection from "@/components/shared/FadeInSection";
import { Smile } from "lucide-react";

const filters = ["All", "Whitening", "Veneers", "Restorations"];

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  return (
    <PageLayout>
      <section className="bg-secondary py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-2xl">
          <FadeInSection>
            <p className="text-primary font-medium text-sm tracking-wide uppercase mb-4">Smile Gallery</p>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              Before & After
            </h1>
            <p className="text-muted-foreground text-lg">
              See the transformations our patients have experienced.
            </p>
          </FadeInSection>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Filters */}
          <FadeInSection>
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeFilter === f
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-muted-foreground hover:bg-primary/10 hover:text-primary"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </FadeInSection>

          {/* Placeholder Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <FadeInSection key={i} delay={i * 0.05}>
                <div className="bg-card rounded-2xl shadow-sm border border-border aspect-[4/3] flex flex-col items-center justify-center gap-3 p-8">
                  <Smile className="w-10 h-10 text-primary/30" />
                  <p className="text-muted-foreground text-sm text-center">
                    Smile transformations coming soon.
                  </p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Gallery;
