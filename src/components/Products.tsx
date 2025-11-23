import ProductCard from "./ProductCard";
import chilliPowder from "@/assets/chilli-powder.jpg";
import turmericPowder from "@/assets/turmeric-powder.jpg";
import corianderPowder from "@/assets/coriander-powder.jpg";
import garamMasala from "@/assets/garam-masala.jpg";
import sambarPowder from "@/assets/sambar-powder.jpg";
import rasamPowder from "@/assets/rasam-powder.jpg";
import chickenMasala from "@/assets/chicken-masala.jpg";
import muttonMasala from "@/assets/mutton-masala.jpg";
import { Sparkles } from "lucide-react";

const Products = () => {
  const regularProducts = [
    {
      name: "Chilli Powder",
      description: "Vibrant red chilli powder that adds perfect heat and color to your dishes. Ground from premium quality red chillies.",
      image: chilliPowder,
      variants: ["100gm", "250gm", "500gm"],
    },
    {
      name: "Turmeric Powder",
      description: "Golden turmeric powder with earthy aroma and health benefits. Pure and finely ground for maximum flavor.",
      image: turmericPowder,
      variants: ["100gm", "250gm", "500gm"],
    },
    {
      name: "Coriander Powder",
      description: "Aromatic coriander powder essential for authentic Indian cuisine. Freshly ground from premium coriander seeds.",
      image: corianderPowder,
      variants: ["100gm", "250gm", "500gm"],
    },
    {
      name: "Garam Masala",
      description: "Traditional spice blend with cardamom, cinnamon, and cloves. The perfect finishing touch for curries and gravies.",
      image: garamMasala,
      variants: ["100gm", "500gm", "1kg"],
    },
  ];

  const customProducts = [
    {
      name: "Sambar Powder",
      description: "Authentic South Indian sambar masala with curry leaves, fenugreek, and aromatic spices. Perfect for traditional sambar.",
      image: sambarPowder,
      variants: ["100gm", "250gm", "500gm"],
      isCustom: true,
    },
    {
      name: "Rasam Powder",
      description: "Classic Tamil rasam spice blend with tamarind, black pepper, and cumin. Creates the perfect tangy, spicy rasam.",
      image: rasamPowder,
      variants: ["100gm", "250gm", "500gm"],
      isCustom: true,
    },
    {
      name: "Chicken Masala",
      description: "Rich aromatic blend specially crafted for chicken dishes. Includes bay leaves, star anise, and warming spices.",
      image: chickenMasala,
      variants: ["100gm", "250gm", "500gm"],
      isCustom: true,
    },
    {
      name: "Mutton Masala",
      description: "Robust spice blend perfect for mutton curries. Features black pepper, mace, cloves, and traditional aromatics.",
      image: muttonMasala,
      variants: ["100gm", "250gm", "500gm"],
      isCustom: true,
    },
  ];

  return (
    <section id="products" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gradient mb-4">
            Our Premium Spices
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our collection of authentic Indian spices, each carefully selected and ground to perfection
          </p>
        </div>

        {/* Regular Products */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
          {regularProducts.map((product, index) => (
            <div 
              key={product.name}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>

        {/* Custom Spices Section */}
        <div className="mt-20">
          <div className="text-center mb-12 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-secondary/10 px-6 py-3 rounded-full mb-4">
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="text-sm font-semibold text-primary uppercase tracking-wide">
                Custom Blends
              </span>
            </div>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-gradient mb-4">
              Special Request Spices
            </h3>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              Handcrafted masalas made to order - traditional South Indian and specialty blends for authentic home cooking
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {customProducts.map((product, index) => (
              <div 
                key={product.name}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1 + 0.2}s` }}
              >
                <ProductCard {...product} />
              </div>
            ))}
          </div>

          <div className="mt-12 text-center animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
            <div className="inline-block p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/20">
              <p className="text-foreground/90 mb-2 font-medium">
                Looking for something specific?
              </p>
              <p className="text-muted-foreground text-sm">
                We can create custom spice blends tailored to your traditional family recipes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
