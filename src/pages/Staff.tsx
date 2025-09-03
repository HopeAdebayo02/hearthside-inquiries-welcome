import StaffSection from "@/components/StaffSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Staff = () => {
  return (
    <div className="min-h-screen pt-20">
      <div className="bg-gradient-to-b from-care-accent/30 to-background py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Meet Our Team
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Our dedicated professionals are committed to providing exceptional care with compassion and expertise. 
              We provide 24/7 care excellence with low staff-to-resident ratios and round-the-clock support.
            </p>
          </div>
        </div>
      </div>
      
      <StaffSection />
      
      <section className="py-12 md:py-20 bg-care-accent/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Experience the Difference
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our team's experience and dedication make all the difference in providing quality assisted living care. 
              We're here to support you and your family every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="min-h-[52px]">
                <Link to="/contact#contact" onClick={() => setTimeout(() => window.scrollTo(0,0), 50)}>
                  Schedule a Meeting
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="min-h-[52px]">
                <Link to="/services" onClick={() => setTimeout(() => window.scrollTo(0,0), 50)}>
                  View Our Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Staff;