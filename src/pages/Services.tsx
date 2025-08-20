import Header from "@/components/Header";
import ServicesSection from "@/components/ServicesSection";
import ServiceTypesSection from "@/components/ServiceTypesSection";
import { Button } from "@/components/ui/button";

const Services = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24">
        <div className="container mx-auto px-4 pb-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Comprehensive assisted living services designed to support your independence while providing the care and support you need.
            </p>
          </div>
        </div>
        
        <ServiceTypesSection />
        <ServicesSection />
        
        <div className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ready to Learn More?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact us today to schedule a visit and see how we can support you or your loved one.
          </p>
          <Button 
            variant="hero" 
            size="lg"
            onClick={() => window.location.href = '/#contact'}
            className="text-lg px-8 py-3"
          >
            Schedule a Visit
          </Button>
        </div>
      </main>
    </div>
  );
};

export default Services;