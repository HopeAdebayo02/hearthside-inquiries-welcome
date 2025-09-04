import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Users, Award, Clock } from "lucide-react";
import { Link } from "react-router-dom";
const stats = [{
  icon: Users,
  number: "15+",
  label: "Years of Experience",
  description: "Serving families in our community"
}, {
  icon: Heart,
  number: "200+",
  label: "Happy Families",
  description: "Trust us with their loved ones"
}, {
  icon: Award,
  number: "5-Star",
  label: "Care Rating",
  description: "Consistently excellent service"
}, {
  icon: Clock,
  number: "24/7",
  label: "Care Available",
  description: "Round-the-clock support"
}];
const testimonials = [{
  quote: "The staff at Hearthside Manor treats my mother like family. She's happier here than she's been in years, and we have complete peace of mind.",
  author: "Sarah Johnson",
  relationship: "Daughter of resident",
  image: "👩‍🦳"
}, {
  quote: "Finding the right care for Dad was overwhelming, but Hearthside Manor made the transition seamless. The family-centered approach made all the difference.",
  author: "Michael Chen",
  relationship: "Son of resident",
  image: "👨‍💼"
}, {
  quote: "My husband receives excellent medical care while still enjoying the activities he loves. The staff celebrates his birthday every year like he's part of their own family.",
  author: "Dorothy Williams",
  relationship: "Wife of resident",
  image: "👵"
}];
const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-gradient-to-b from-care-accent to-background">
      <div className="container mx-auto px-4 md:px-6">
        {/* Mission Statement */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            Our Family Caring for Yours
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-3xl mx-auto">
            At Goshen Concept Care LLC, we believe that assisted living should feel like 
            an extension of home, not an institution. Our family-founded facility has been 
            serving the community for over 15 years, providing compassionate care that 
            honors the dignity and independence of every resident.
          </p>
          <div className="flex justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/60 rounded-full"></div>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <Card 
              key={index} 
              className="text-center border-2 border-care-secondary bg-background hover:shadow-[var(--shadow-primary)] hover:border-primary/20 transition-all duration-300 ease-out p-6"
            >
              <CardHeader className="pb-4">
                <div className="flex justify-center mb-4">
                  <div className="flex items-center justify-center w-16 h-16 bg-care-accent rounded-xl border-2 border-primary/10">
                    <stat.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <CardTitle className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </CardTitle>
                <CardDescription className="font-semibold text-foreground text-lg">
                  {stat.label}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Our Values */}
        <div className="bg-gradient-to-br from-primary/5 to-care-accent rounded-2xl p-8 md:p-12 mb-8 border-2 border-primary/10 shadow-[var(--shadow-card)]">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-8">Our Core Values</h3>
            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
              <div className="text-center">
                <div className="flex justify-center mb-6">
                  <div className="flex items-center justify-center w-16 h-16 bg-background rounded-xl border-2 border-primary/20 shadow-[var(--shadow-card)]">
                    <Heart className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h4 className="text-xl font-bold text-foreground mb-3">Compassion</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Every interaction is guided by empathy and understanding
                </p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-6">
                  <div className="flex items-center justify-center w-16 h-16 bg-background rounded-xl border-2 border-primary/20 shadow-[var(--shadow-card)]">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h4 className="text-xl font-bold text-foreground mb-3">Family</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Creating a community where everyone belongs
                </p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-6">
                  <div className="flex items-center justify-center w-16 h-16 bg-background rounded-xl border-2 border-primary/20 shadow-[var(--shadow-card)]">
                    <Award className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h4 className="text-xl font-bold text-foreground mb-3">Excellence</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Commitment to the highest standards of care
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Ready to Learn More */}
        <div className="text-center mb-8">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Ready to Learn More?
          </h3>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Contact us today to schedule a visit and see how we can help your loved one thrive.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="min-h-[52px]">
              <Link to="/contact">Schedule a Visit</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="min-h-[52px]">
              <Link to="/services" onClick={() => setTimeout(() => window.scrollTo(0,0), 50)}>View Our Services</Link>
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
};
export default AboutSection;