import { Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-display font-bold">
              Sri Ganesh Enterprises
            </h3>
            <p className="text-background/80 text-sm">
              Owned by Siva Parvathi Vedantham
            </p>
            <p className="text-background/70 text-sm leading-relaxed">
              Authentic Indian spices crafted with tradition, passion, and a commitment to purity.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              {["Home", "Products", "About", "Contact"].map((link) => (
                <button
                  key={link}
                  onClick={() => scrollToSection(link.toLowerCase() === "home" ? "hero" : link.toLowerCase())}
                  className="text-background/80 hover:text-background transition-colors text-left text-sm focus:outline-none focus:ring-2 focus:ring-background/50 rounded px-1 py-1"
                >
                  {link}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact</h4>
            <a 
              href="mailto:sriganeshenterprises.spices@gmail.com"
              className="flex items-start space-x-2 text-background/80 hover:text-background transition-colors group"
            >
              <Mail className="w-5 h-5 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
              <span className="text-sm break-all">
                sriganeshenterprises.spices@gmail.com
              </span>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-background/70 text-sm text-center md:text-left">
              © {currentYear} Sri Ganesh Enterprises. All rights reserved.
            </p>
            <p className="text-background/70 text-sm text-center md:text-right">
              Celebrating Indian spices with tradition and quality
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
