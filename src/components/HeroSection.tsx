import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Heart, Shield, Users } from "lucide-react";
import fallbackHero from "/gohen-uploads/0132b0bd-68c1-4d6b-befb-c41cbb9fd606.png";

const HeroSection = () => {
  const [bgUrl, setBgUrl] = useState<string>(fallbackHero);

  useEffect(() => {
    const candidate = "/gohen-uploads/house-hero.jpg";
    const img = new Image();
    img.onload = () => setBgUrl(candidate);
    img.onerror = () => setBgUrl(fallbackHero);
    img.src = candidate;
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgUrl})` }}
      >
        <div className="absolute inset-0 bg-black/45"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Removed decorative heart badge for a cleaner hero */}
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Where Family 
            <span className="block text-white/90">Comes First</span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-white/95 mb-8 max-w-2xl mx-auto leading-relaxed font-medium">
            Experience compassionate, family-centered assisted living in a warm, 
            welcoming community designed to feel like home.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              variant="hero"
              size="lg"
              className="w-full sm:w-auto text-lg px-8 py-4 font-semibold min-h-[52px]"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              aria-label="Schedule a visit to our facility"
            >
              Schedule a Visit
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