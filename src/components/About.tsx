import { Award, Heart, Leaf } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Tradition & Passion",
      description: "Rooted in generations of spice expertise, we bring authentic flavors to your kitchen.",
    },
    {
      icon: Award,
      title: "Premium Quality",
      description: "Only the finest spices are selected, ensuring superior taste and aroma in every batch.",
    },
    {
      icon: Leaf,
      title: "Pure & Natural",
      description: "No additives, no preservatives - just pure, natural spices the way nature intended.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gradient mb-4">
              Our Story
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mb-6" />
          </div>

          <div className="space-y-8 mb-16">
            <div className="animate-fade-in-up">
              <p className="text-lg text-foreground/90 leading-relaxed text-center">
                Sri Ganesh Enterprises, founded by <span className="font-semibold text-primary">Siva Parvathi Vedantham</span>, 
                is dedicated to bringing the authentic taste of Indian spices to homes across the nation. 
                Our journey began with a simple belief: that the heart of great cooking lies in the quality of spices used.
              </p>
            </div>

            <div className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <p className="text-lg text-foreground/90 leading-relaxed text-center">
                Each product in our collection is carefully sourced and processed to preserve the natural oils, 
                aromas, and flavors that make Indian cuisine so special. We take pride in our commitment to 
                purity, quality, and the rich culinary traditions passed down through generations.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="text-center space-y-4 p-6 rounded-xl bg-card hover:bg-muted/50 transition-colors duration-300 animate-fade-in-up card-glow"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                    <Icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-foreground">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
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
