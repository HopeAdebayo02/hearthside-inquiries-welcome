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
    color: "text-trust-green"
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
    color: "text-warm-primary"
  }
];

const ServiceTypesSection = () => {
  const handleServiceInquiry = (serviceCode: string, serviceTitle: string) => {
    // Scroll to inquiry form and potentially pre-fill service type
    const inquiryForm = document.getElementById('inquiry');
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
    <section className="py-20 bg-gradient-to-br from-comfort-blue/30 to-family-orange/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Choose Your Care Option
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We offer two specialized care options to meet your unique needs. 
            Select the option that best fits your situation to learn more.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {serviceTypes.map((service, index) => (
            <Card 
              key={index}
              className="border-warm-secondary/30 hover:shadow-[var(--shadow-warm)] transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-background to-background/50 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 bg-warm-secondary/20 text-warm-primary font-mono text-sm px-3 py-1 rounded-bl-lg">
                {service.code}
              </div>
              
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  <div className="flex items-center justify-center w-20 h-20 bg-warm-secondary/30 rounded-full">
                    <service.icon className={`w-10 h-10 ${service.color}`} />
                  </div>
                </div>
                <CardTitle className="text-2xl text-foreground">{service.title}</CardTitle>
                <CardDescription className="text-base leading-relaxed mt-2">
                  {service.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-3">What's Included:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-muted-foreground">
                        <div className={`w-2 h-2 rounded-full ${service.color.replace('text-', 'bg-')} mr-3 flex-shrink-0`}></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button 
                  onClick={() => handleServiceInquiry(service.code, service.title)}
                  className="w-full bg-warm-primary hover:bg-warm-primary/90 text-primary-foreground font-semibold py-3 text-lg transition-all duration-300 hover:shadow-[var(--shadow-soft)]"
                >
                  Learn More About {service.code}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Not sure which option is right for you?
          </p>
          <Button 
            variant="outline" 
            onClick={() => {
              const inquiryForm = document.getElementById('inquiry');
              if (inquiryForm) {
                inquiryForm.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="border-warm-primary text-warm-primary hover:bg-warm-primary hover:text-primary-foreground"
          >
            Contact Us for a Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServiceTypesSection;