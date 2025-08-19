import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Users, Award, Clock } from "lucide-react";
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
  return <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Mission Statement */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Our Family Caring for Yours
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">At Goshen Concept Care LLC, we believe that assisted living should feel like an extension of home, not an institution. Our family-founded facility has been serving the community for over 15 years, providing compassionate care that honors the dignity and independence of every resident.</p>
          <div className="flex justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-warm-primary to-trust-green rounded-full"></div>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => <Card key={index} className="text-center border-warm-secondary/30 bg-background hover:shadow-[var(--shadow-soft)] transition-all duration-300">
              <CardHeader>
                <div className="flex justify-center mb-2">
                  <div className="flex items-center justify-center w-12 h-12 bg-warm-primary/10 rounded-full">
                    <stat.icon className="w-6 h-6 text-warm-primary" />
                  </div>
                </div>
                <CardTitle className="text-3xl font-bold text-warm-primary">{stat.number}</CardTitle>
                <CardDescription className="font-semibold text-foreground text-lg">{stat.label}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{stat.description}</p>
              </CardContent>
            </Card>)}
        </div>

        {/* Our Values */}
        <div className="bg-gradient-to-br from-comfort-blue to-family-orange rounded-2xl p-8 md:p-12 mb-20">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-foreground mb-6">Our Core Values</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <Heart className="w-10 h-10 text-warm-primary" />
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-2">Compassion</h4>
                <p className="text-muted-foreground">Every interaction is guided by empathy and understanding</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <Users className="w-10 h-10 text-warm-primary" />
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-2">Family</h4>
                <p className="text-muted-foreground">Creating a community where everyone belongs</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <Award className="w-10 h-10 text-warm-primary" />
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-2">Excellence</h4>
                <p className="text-muted-foreground">Commitment to the highest standards of care</p>
              </div>
            </div>
          </div>
        </div>


        {/* Call to Action */}
        <div className="text-center mt-16">
          <Button variant="hero" size="lg" className="text-lg px-8 py-3">
            Schedule Your Personal Tour Today
          </Button>
          <p className="text-muted-foreground mt-4">Experience the Goshen Concept Care difference in person</p>
        </div>
      </div>
    </section>;
};
export default AboutSection;