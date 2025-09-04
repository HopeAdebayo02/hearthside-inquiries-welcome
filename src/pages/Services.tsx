import ServiceTypesSection from "@/components/ServiceTypesSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Keep a single focused section for options */}
      <ServiceTypesSection />

      {/* Consultation section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">
            <p className="text-muted-foreground mb-6 text-base md:text-lg">
              Not sure which option is right for you?
            </p>
            <Button
              asChild
              variant="care"
              size="lg"
              className="font-semibold text-lg min-h-[52px]"
              aria-label="Contact us for a consultation to determine the best care option"
            >
              <Link to="/contact" onClick={() => setTimeout(() => window.scrollTo(0,0), 50)}>
                Contact Us for a Consultation
              </Link>
            </Button>
          </div>
        </div>
      </section>


    </div>
  );
};

export default Services;