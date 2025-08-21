import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Heart, 
  Utensils, 
  Activity, 
  Users, 
  ShieldCheck, 
  Home,
  Stethoscope,
  Car
} from "lucide-react";

const services = [
  {
    icon: Heart,
    title: "Personal Care",
    description: "Compassionate assistance with daily activities including bathing, dressing, and medication management.",
    color: "text-primary"
  },
  {
    icon: Utensils,
    title: "Nutritious Dining",
    description: "Chef-prepared meals accommodating dietary restrictions and family recipe preferences.",
    color: "text-primary"
  },
  {
    icon: Activity,
    title: "Wellness Programs",
    description: "Physical therapy, exercise classes, and health monitoring tailored to individual needs.",
    color: "text-primary"
  },
  {
    icon: Users,
    title: "Social Activities",
    description: "Family gatherings, community events, and social programs that keep residents connected.",
    color: "text-primary"
  },
  {
    icon: ShieldCheck,
    title: "24/7 Security",
    description: "Round-the-clock safety monitoring with emergency response systems and trained staff.",
    color: "text-primary"
  },
  {
    icon: Home,
    title: "Comfortable Living",
    description: "Private and semi-private rooms designed to feel like home with personal touches welcome.",
    color: "text-primary"
  },
  {
    icon: Stethoscope,
    title: "Healthcare Coordination",
    description: "On-site medical services and coordination with family physicians and specialists.",
    color: "text-primary"
  },
  {
    icon: Car,
    title: "Transportation",
    description: "Scheduled transportation for medical appointments, shopping, and community outings.",
    color: "text-primary"
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-gradient-to-b from-background to-care-accent">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            Comprehensive Care Services
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Our family-centered approach ensures your loved one receives personalized care 
            while maintaining their independence and dignity in a warm, supportive environment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="border-2 border-care-secondary hover:border-primary/30 hover:shadow-[var(--shadow-primary)] transition-all duration-300 hover:-translate-y-1 bg-background group"
            >
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  <div className="flex items-center justify-center w-16 h-16 bg-care-accent rounded-xl border-2 border-primary/10 group-hover:border-primary/20 transition-colors">
                    <service.icon className={`w-8 h-8 ${service.color} transition-colors`} />
                  </div>
                </div>
                <CardTitle className="text-lg md:text-xl text-foreground font-bold leading-tight">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription className="text-center text-sm md:text-base leading-relaxed text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-primary/5 to-care-accent rounded-2xl p-8 md:p-12 text-center border-2 border-primary/10 shadow-[var(--shadow-card)]">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            Personalized Care Plans
          </h3>
          <p className="text-base md:text-lg text-muted-foreground mb-0 max-w-3xl mx-auto leading-relaxed">
            Every resident receives a customized care plan developed with input from family members, 
            medical professionals, and our experienced care team to ensure the highest quality of life.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;