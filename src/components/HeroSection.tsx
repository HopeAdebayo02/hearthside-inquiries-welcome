import { Button } from "@/components/ui/button";
import { Heart, Shield, Users } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-comfort-blue/90 to-family-orange/80"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
              <Heart className="w-10 h-10 text-white" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Where Family 
            <span className="block text-family-orange">Comes First</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Experience compassionate, family-centered assisted living in a warm, 
            welcoming community designed to feel like home.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="hero" size="lg" className="text-lg px-8 py-3">
              Schedule a Visit
            </Button>
            <Button variant="warm" size="lg" className="text-lg px-8 py-3">
              Learn More
            </Button>
          </div>
          
          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="flex items-center justify-center space-x-3 bg-white/20 backdrop-blur-sm rounded-lg px-4 py-3 border border-white/30">
              <Shield className="w-6 h-6 text-white" />
              <span className="text-white font-medium">Licensed & Certified</span>
            </div>
            <div className="flex items-center justify-center space-x-3 bg-white/20 backdrop-blur-sm rounded-lg px-4 py-3 border border-white/30">
              <Users className="w-6 h-6 text-white" />
              <span className="text-white font-medium">24/7 Care Team</span>
            </div>
            <div className="flex items-center justify-center space-x-3 bg-white/20 backdrop-blur-sm rounded-lg px-4 py-3 border border-white/30">
              <Heart className="w-6 h-6 text-white" />
              <span className="text-white font-medium">Family Focused</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;