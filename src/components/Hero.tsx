import ganeshHero from "@/assets/ganesh-hero.jpg";
import spicesBackground from "@/assets/spices-background.jpg";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToProducts = () => {
    const element = document.getElementById("products");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with spices */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${spicesBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.4)',
        }}
      />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-6 animate-fade-in">
            <div className="inline-block">
              <p className="text-sm md:text-base text-muted-foreground font-medium tracking-wide uppercase mb-2">
                Welcome to
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gradient leading-tight">
                Sri Ganesh Enterprises
              </h1>
              <p className="mt-2 text-base md:text-lg text-foreground/80 font-medium">
                Owned by Siva Parvathi Vedantham
              </p>
            </div>

            <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary rounded-full" />

            <p className="text-lg md:text-xl text-foreground/90 leading-relaxed">
              Experience the authentic flavors of India with our premium quality spices. 
              Each blend is crafted with tradition, passion, and a commitment to purity.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                onClick={scrollToProducts}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Explore Products
              </Button>
              <Button 
                onClick={() => {
                  const element = document.getElementById("contact");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
                size="lg"
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                Get in Touch
              </Button>
            </div>
          </div>

          {/* Right content - Ganesh idol */}
          <div className="relative animate-scale-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-3xl animate-float" />
              <img
                src={ganeshHero}
                alt="Colorful Lord Ganesh idol, the spiritual centerpiece of Sri Ganesh Enterprises symbolizing prosperity and tradition"
                className="relative rounded-3xl shadow-2xl w-full max-w-lg mx-auto hover:scale-105 transition-transform duration-500"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default Hero;
