import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, Clock } from "lucide-react";

const serviceTypes = [
  {
    code: "245D",
    title: "Homemaker Services",
    description: "Personal care assistance in the comfort of your own home. Our certified staff provides daily living support while allowing you to maintain independence in familiar surroundings.",
    icon: Home,
    features: [
      "Personal care assistance",
      "Light housekeeping",
      "Meal preparation",
      "Medication reminders",
      "Companionship",
      "Transportation assistance"
    ],
    color: "text-primary"
  },
  {
    code: "144G", 
    title: "24-Hour Assisted Living",
    description: "Comprehensive residential care with round-the-clock support in our warm, family-oriented community. Perfect for those needing more intensive daily assistance.",
    icon: Clock,
    features: [
      "24/7 professional care staff",
      "All meals provided",
      "Daily living assistance",
      "Medication management",
      "Social activities & programs",
      "Emergency response system"
    ],
    color: "text-primary"
  }
];

const ServiceTypesSection = () => {
  const handleServiceInquiry = (serviceCode: string, serviceTitle: string) => {
    // Scroll to inquiry form and potentially pre-fill service type
    const inquiryForm = document.getElementById('contact');
    if (inquiryForm) {
      inquiryForm.scrollIntoView({ behavior: 'smooth' });
      
      // Store selected service type for form
      sessionStorage.setItem('selectedServiceType', `${serviceCode} - ${serviceTitle}`);
      
      // Dispatch custom event to notify form component
      window.dispatchEvent(new CustomEvent('serviceTypeSelected', { 
        detail: { code: serviceCode, title: serviceTitle }
      }));
    }
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-care-accent to-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            Choose Your Care Option
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            We offer two specialized care options to meet your unique needs. 
            Select the option that best fits your situation to learn more.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
          {serviceTypes.map((service, index) => (
            <Card 
              key={index}
              className="border-2 border-care-secondary hover:border-primary/30 hover:shadow-[var(--shadow-primary)] transition-all duration-300 hover:-translate-y-1 bg-background relative overflow-hidden group"
            >
              
              <CardHeader className="text-center pb-6 pt-8">
                <div className="flex justify-center mb-6">
                  <div className="flex items-center justify-center w-20 h-20 bg-care-accent rounded-xl border-2 border-primary/10 group-hover:border-primary/20 transition-colors">
                    <service.icon className={`w-10 h-10 ${service.color} transition-colors`} />
                  </div>
                </div>
                <CardTitle className="text-2xl md:text-3xl text-foreground font-bold mb-4">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-base md:text-lg leading-relaxed text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6 pb-8">
                <div>
                  <h4 className="font-bold text-foreground mb-4 text-lg">What's Included:</h4>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-muted-foreground text-base">
                        <div className={`w-2 h-2 rounded-full bg-primary mr-3 flex-shrink-0`}></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button 
                  onClick={() => handleServiceInquiry(service.code, service.title)}
                  variant="hero"
                  size="lg"
                  className="w-full font-semibold text-lg min-h-[52px]"
                  aria-label={`Learn more about ${service.title}`}
                >
                  Learn More About {service.title}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6 text-base md:text-lg">
            Not sure which option is right for you?
          </p>
          <Button 
            variant="care" 
            size="lg"
            onClick={() => {
              const inquiryForm = document.getElementById('contact');
              if (inquiryForm) {
                inquiryForm.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="font-semibold text-lg min-h-[52px]"
            aria-label="Contact us for a consultation to determine the best care option"
          >
            Contact Us for a Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServiceTypesSection;