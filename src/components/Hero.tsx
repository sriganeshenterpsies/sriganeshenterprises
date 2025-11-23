import ganeshHero from "@/assets/ganesh-idol-vibrant.jpg";
import spicesBackground from "@/assets/spices-background.jpg";
import { Button } from "@/components/ui/button";
import SpiceParticles from "./SpiceParticles";

const Hero = () => {
  const scrollToProducts = () => {
    const element = document.getElementById("products");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated spice particles */}
      <SpiceParticles />
      
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
              Founded by a self-made woman entrepreneur, each blend is crafted with tradition, 
              passion, and an unwavering commitment to purity since 2007.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 text-sm md:text-base text-foreground/70">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span>Est. 2007</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                <span>100% Natural</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span>Custom Blends Available</span>
              </div>
            </div>

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
              {/* Glowing orb effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-secondary/20 to-accent/30 rounded-3xl blur-3xl animate-float" />
              <div className="absolute inset-0 bg-gradient-to-tl from-secondary/20 via-accent/20 to-primary/20 rounded-3xl blur-2xl animate-float" style={{ animationDelay: '1s', animationDuration: '4s' }} />
              
              {/* Main image with enhanced styling */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl ring-4 ring-primary/20 hover:ring-primary/40 transition-all duration-500">
                <img
                  src={ganeshHero}
                  alt="Magnificent colorful Lord Ganesh idol, the divine centerpiece of Sri Ganesh Enterprises symbolizing prosperity, wisdom and tradition"
                  className="relative w-full max-w-lg mx-auto hover:scale-105 transition-transform duration-700"
                  loading="eager"
                />
                {/* Overlay gradient for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/10 to-transparent pointer-events-none" />
              </div>
              
              {/* Decorative corner accents */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary to-transparent rounded-full blur-xl opacity-60 animate-pulse" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-tr from-secondary to-transparent rounded-full blur-xl opacity-50 animate-pulse" style={{ animationDelay: '1s' }} />
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
