import { Award, Heart, Leaf } from "lucide-react";
import traditionPassion from "@/assets/tradition-passion.jpg";
import premiumQuality from "@/assets/premium-quality.jpg";
import pureNatural from "@/assets/pure-natural.jpg";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Tradition & Passion",
      description: "Rooted in generations of spice expertise, we bring authentic flavors to your kitchen.",
      image: traditionPassion,
    },
    {
      icon: Award,
      title: "Premium Quality",
      description: "Only the finest spices are selected, ensuring superior taste and aroma in every batch.",
      image: premiumQuality,
    },
    {
      icon: Leaf,
      title: "Pure & Natural",
      description: "No additives, no preservatives - just pure, natural spices the way nature intended.",
      image: pureNatural,
    },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gradient mb-4">
              Our Story
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mb-6" />
          </div>

          {/* Founder Story with Emphasis */}
          <div className="mb-16 p-8 rounded-2xl bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 border border-primary/10 animate-fade-in-up">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <div className="inline-block">
                <p className="text-sm uppercase tracking-wider text-primary font-semibold mb-2">
                  Founded in 2007
                </p>
                <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
                  A Self-Made Woman's Journey
                </h3>
              </div>
              
              <p className="text-lg text-foreground leading-relaxed">
                <span className="font-bold text-primary">Siva Parvathi Vedantham</span>, a pioneering 
                self-made entrepreneur, founded Sri Ganesh Enterprises in <span className="font-semibold text-secondary">2007</span> with 
                a vision to preserve and share the authentic essence of Indian spices. Her journey from 
                humble beginnings to building a trusted spice enterprise is a testament to dedication, 
                passion, and an unwavering commitment to quality.
              </p>

              <p className="text-base text-foreground/80 leading-relaxed">
                What started as a small endeavor has blossomed into a beloved brand, serving households 
                across the nation with traditional and custom spice blends. Every product reflects her 
                belief that great cooking begins with exceptional spices - pure, authentic, and 
                crafted with love.
              </p>

              <div className="flex flex-wrap justify-center gap-6 pt-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">17+</div>
                  <div className="text-sm text-muted-foreground">Years of Excellence</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary mb-1">100%</div>
                  <div className="text-sm text-muted-foreground">Pure & Natural</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-1">1000+</div>
                  <div className="text-sm text-muted-foreground">Happy Families</div>
                </div>
              </div>
            </div>
          </div>

          {/* Values with Images */}
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="group relative overflow-hidden rounded-2xl bg-card hover:shadow-2xl transition-all duration-500 animate-fade-in-up card-glow"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Background Image */}
                  <div className="absolute inset-0 z-0">
                    <img
                      src={value.image}
                      alt={value.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/40 group-hover:from-black/95 transition-all duration-500" />
                  </div>

                  {/* Content */}
                  <div className="relative z-10 p-8 text-center space-y-4 h-full flex flex-col justify-end min-h-[320px]">
                    <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-display font-bold text-white">
                      {value.title}
                    </h3>
                    <p className="text-white/90 leading-relaxed text-sm md:text-base">
                      {value.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
