import ServiceTypesSection from "@/components/ServiceTypesSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Keep a single focused section for options */}
      <ServiceTypesSection />
      
      {/* Waiver programs banner */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-gradient-to-br from-primary/5 to-care-accent rounded-2xl p-6 md:p-8 text-center border-2 border-primary/10 shadow-[var(--shadow-card)] max-w-5xl mx-auto">
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">Waiver Services Accepted</h3>
            <p className="text-muted-foreground md:text-lg mb-4">
              We proudly accept CADI, EW, BI waivers, and Private Pay.
            </p>
            <Button asChild variant="outline" size="lg">
              <Link to="/contact#contact" onClick={() => setTimeout(() => window.scrollTo(0,0), 50)}>
                Ask About Eligibility
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;