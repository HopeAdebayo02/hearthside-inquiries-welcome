import Header from "@/components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Shield, Users, Home } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                About GOSHEN CONCEPT CARE LLC
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Where family comes first and compassionate care meets the comfort of home.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card className="border-warm-secondary/30">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-warm-primary/10 rounded-lg">
                      <Heart className="w-6 h-6 text-warm-primary" />
                    </div>
                    <CardTitle className="text-2xl">Our Mission</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    To provide exceptional, family-centered assisted living services that honor the dignity and independence of every resident while ensuring their safety, comfort, and well-being in a warm, welcoming environment.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-warm-secondary/30">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-trust-green/10 rounded-lg">
                      <Shield className="w-6 h-6 text-trust-green" />
                    </div>
                    <CardTitle className="text-2xl">Our Values</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    We believe in treating every resident as family, providing personalized care that respects individual needs, preferences, and life experiences while maintaining the highest standards of professional care.
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="mb-12 bg-gradient-to-br from-warm-secondary/10 to-family-orange/10 border-warm-secondary/30">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl mb-4">Why Choose Us?</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="flex justify-center mb-4">
                      <div className="flex items-center justify-center w-16 h-16 bg-warm-primary/10 rounded-full">
                        <Shield className="w-8 h-8 text-warm-primary" />
                      </div>
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">Licensed & Certified</h3>
                    <p className="text-muted-foreground text-sm">
                      Fully licensed and certified assisted living facility meeting all state requirements
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="flex justify-center mb-4">
                      <div className="flex items-center justify-center w-16 h-16 bg-trust-green/10 rounded-full">
                        <Users className="w-8 h-8 text-trust-green" />
                      </div>
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">24/7 Care Team</h3>
                    <p className="text-muted-foreground text-sm">
                      Professional caregivers available around the clock for your peace of mind
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="flex justify-center mb-4">
                      <div className="flex items-center justify-center w-16 h-16 bg-family-orange/10 rounded-full">
                        <Heart className="w-8 h-8 text-family-orange" />
                      </div>
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">Family Focused</h3>
                    <p className="text-muted-foreground text-sm">
                      We treat every resident as part of our extended family with personalized care
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="text-center">
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => window.location.href = '/#contact'}
                className="text-lg px-8 py-3"
              >
                Contact Us Today
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;