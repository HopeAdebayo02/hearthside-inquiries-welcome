import StaffSection from "@/components/StaffSection";

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
    </div>
  );
};

export default Staff;