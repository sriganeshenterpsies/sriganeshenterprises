import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gradient mb-4">
              Get in Touch
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mb-6" />
            <p className="text-lg text-muted-foreground">
              Have questions about our products? We'd love to hear from you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6 animate-fade-in-up">
              <div className="p-6 rounded-xl bg-card card-glow">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Email Us</h3>
                    <a 
                      href="mailto:sriganeshenterprises.spices@gmail.com"
                      className="text-primary hover:text-primary/80 transition-colors break-all"
                    >
                      sriganeshenterprises.spices@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-card card-glow">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Location</h3>
                    <p className="text-muted-foreground">
                      Serving authentic Indian spices across the nation
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-card card-glow">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-spice-turmeric" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Business Hours</h3>
                    <p className="text-muted-foreground">
                      Monday - Saturday: 9:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="flex flex-col justify-center animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <div className="p-8 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20">
                <h3 className="text-2xl font-display font-bold text-foreground mb-4">
                  Ready to Order?
                </h3>
                <p className="text-foreground/80 mb-6 leading-relaxed">
                  Contact us today to place your order or inquire about our premium spices. 
                  We're here to help you bring authentic Indian flavors to your kitchen.
                </p>
                <Button 
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  onClick={() => window.location.href = "mailto:sriganeshenterprises.spices@gmail.com"}
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Send Email
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
