import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  name: string;
  description: string;
  image: string;
  variants?: string[];
}

const ProductCard = ({ name, description, image, variants }: ProductCardProps) => {
  return (
    <Card className="overflow-hidden hover-lift card-glow group h-full">
      <div className="relative h-64 overflow-hidden bg-muted">
        <img
          src={image}
          alt={`${name} - authentic Indian spice from Sri Ganesh Enterprises`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <CardContent className="p-6 space-y-4">
        <div>
          <h3 className="text-2xl font-display font-bold text-foreground mb-2">
            {name}
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>

        {variants && variants.length > 0 && (
          <div className="space-y-2">
            <p className="text-sm font-medium text-foreground">Available sizes:</p>
            <div className="flex flex-wrap gap-2">
              {variants.map((variant) => (
                <Badge
                  key={variant}
                  variant="secondary"
                  className="bg-accent/20 text-accent-foreground hover:bg-accent/30 transition-colors cursor-pointer"
                >
                  {variant}
                </Badge>
              ))}
            </div>
          </div>
        )}

        <Button 
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300"
          onClick={() => {
            const element = document.getElementById("contact");
            if (element) element.scrollIntoView({ behavior: "smooth" });
          }}
        >
          View Details
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
