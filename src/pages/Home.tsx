import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import InquiryForm from "@/components/InquiryForm";
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
              Welcome to Goshen Concept Care
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-8 leading-relaxed">
              We provide compassionate, family-centered assisted living services with dignity and independence. 
              Our dedicated team ensures each resident receives personalized care in a warm, homelike environment.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2 leading-tight">Compassionate Care</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Providing loving, personalized care tailored to each resident's unique needs.
                </p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2 leading-tight">Experienced Team</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Our qualified staff brings years of experience in assisted living care.
                </p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2 leading-tight">Licensed Facility</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Fully licensed and compliant with all state assisted living regulations.
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="min-h-[52px]">
                <Link
                  to="/about"
                  className="flex items-center gap-2"
                  onClick={() => setTimeout(() => window.scrollTo(0, 0), 50)}
                >
                  Learn More About Us
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="min-h-[52px]"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <InquiryForm />
    </div>
  );
};

export default Home;