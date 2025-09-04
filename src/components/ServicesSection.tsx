import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Home,
  Clock
} from "lucide-react";

const services = [
  {
    icon: Clock,
    title: "24-Hour Assisted Living (144G)",
    description: "Round-the-clock residential support with professional caregivers, medication management, meals, and daily living assistance in a warm, family-oriented community.",
    color: "text-primary"
  },
  {
    icon: Home,
    title: "Homemaker Services (245D)",
    description: "In-home support including personal care, light housekeeping, meal preparation, medication reminders, companionship, and transportation assistance.",
    color: "text-primary"
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-gradient-to-b from-background to-care-accent">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          {/* Removed extra heading to avoid repetition with page header */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="border-2 border-care-secondary hover:border-primary/30 hover:shadow-[var(--shadow-primary)] transition-all duration-300 ease-out hover:scale-[1.02] bg-background group"
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