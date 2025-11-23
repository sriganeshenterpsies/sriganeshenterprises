import ProductCard from "./ProductCard";
import chilliPowder from "@/assets/chilli-powder.jpg";
import turmericPowder from "@/assets/turmeric-powder.jpg";
import corianderPowder from "@/assets/coriander-powder.jpg";
import garamMasala from "@/assets/garam-masala.jpg";

const Products = () => {
  const products = [
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {products.map((product, index) => (
            <div 
              key={product.name}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
