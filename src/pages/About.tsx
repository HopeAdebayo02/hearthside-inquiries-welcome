import AboutSection from "@/components/AboutSection";

const About = () => {
  return (
    <div className="min-h-screen pt-20">
      <div className="bg-gradient-to-b from-care-accent/30 to-background py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About Goshen Concept Care
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Learn more about our mission, values, and commitment to providing exceptional assisted living care.
            </p>
          </div>
        </div>
      </div>
      
      <AboutSection />
    </div>
  );
};

export default About;