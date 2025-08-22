import ServiceTypesSection from "@/components/ServiceTypesSection";
import ServicesSection from "@/components/ServicesSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="min-h-screen pt-20">
      <div className="bg-gradient-to-b from-care-accent/30 to-background py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Services
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Comprehensive assisted living services designed to support independence while providing the care you need.
            </p>
          </div>
        </div>
      </div>
      
      <ServiceTypesSection />
      <ServicesSection />
      
      <section className="py-16 md:py-24 bg-care-accent/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Personalized Care Plans
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Every resident receives a customized care plan tailored to their specific needs, preferences, and goals. 
              Our team works closely with families to ensure the highest quality of life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="min-h-[52px]">
                <Link to="/contact">Discuss Your Needs</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="min-h-[52px]">
                <Link to="/staff">Meet Our Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;