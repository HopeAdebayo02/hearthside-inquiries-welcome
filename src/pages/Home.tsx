import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Users, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      
      {/* Brief About Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Welcome to Goshen Concept Care LLC
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We provide compassionate, family-centered assisted living services with dignity and independence. 
              Our dedicated team ensures each resident receives personalized care in a warm, homelike environment.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Compassionate Care</h3>
                <p className="text-muted-foreground">
                  Providing loving, personalized care tailored to each resident's unique needs.
                </p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Experienced Team</h3>
                <p className="text-muted-foreground">
                  Our qualified staff brings years of experience in assisted living care.
                </p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Licensed Facility</h3>
                <p className="text-muted-foreground">
                  Fully licensed and compliant with all state assisted living regulations.
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="min-h-[52px]">
                <Link to="/about" className="flex items-center gap-2">
                  Learn More About Us
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="min-h-[52px]">
                <Link to="/contact">Get In Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;