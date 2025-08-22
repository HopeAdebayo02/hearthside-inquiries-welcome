import AboutSection from "@/components/AboutSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen pt-20">
      <div className="bg-gradient-to-b from-care-accent/30 to-background py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About Goshen Concept Care LLC
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Learn more about our mission, values, and commitment to providing exceptional assisted living care.
            </p>
          </div>
        </div>
      </div>
      
      <AboutSection />
      
      <section className="py-16 md:py-24 bg-care-accent/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Learn More?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Contact us today to schedule a visit and see how we can help your loved one thrive.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="min-h-[52px]">
                <Link to="/contact">Schedule a Visit</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="min-h-[52px]">
                <Link to="/services">View Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;