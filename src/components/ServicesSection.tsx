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
    icon: Stethoscope,
    title: "Healthcare Coordination",
    description: "On-site medical services and coordination with family physicians and specialists.",
    color: "text-warm-primary"
  },
  {
    icon: Car,
    title: "Transportation",
    description: "Scheduled transportation for medical appointments, shopping, and community outings.",
    color: "text-warm-primary"
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Comprehensive Care Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our family-centered approach ensures your loved one receives personalized care 
            while maintaining their independence and dignity in a warm, supportive environment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="border-warm-secondary/30 hover:shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-background to-comfort-blue/20"
            >
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="flex items-center justify-center w-16 h-16 bg-warm-secondary/30 rounded-full">
                    <service.icon className={`w-8 h-8 ${service.color}`} />
                  </div>
                </div>
                <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-comfort-blue to-family-orange rounded-2xl p-8 text-center">
          <h3 className="text-3xl font-bold text-foreground mb-4">
            Personalized Care Plans
          </h3>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Every resident receives a customized care plan developed with input from family members, 
            medical professionals, and our experienced care team to ensure the highest quality of life.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;