import { Phone, Mail, Clock, MapPin } from "lucide-react";
import InquiryForm from "@/components/InquiryForm";

const Contact = () => {
  return (
    <div className="min-h-screen pt-20">
      <div className="bg-gradient-to-b from-care-accent/30 to-background py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Contact Information
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Ready to get started? Our inquiry form is on the home page, or reach out directly using the information below.
            </p>
          </div>
        </div>
      </div>
      
      {/* Contact Information */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="flex items-start space-x-4 p-6 bg-care-accent/20 rounded-xl">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">Phone</h3>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                    <a 
                      href="tel:651-500-0971" 
                      className="text-primary hover:text-primary/80 transition-colors text-lg font-medium"
                      aria-label="Call us at 651-500-0971"
                    >
                      651-500-0971
                    </a>
                    <span className="hidden sm:inline text-muted-foreground">•</span>
                    <a 
                      href="tel:651-210-5364" 
                      className="text-primary hover:text-primary/80 transition-colors text-lg font-medium"
                      aria-label="Call us at 651-210-5364"
                    >
                      651-210-5364
                    </a>
                  </div>
                  <p className="text-muted-foreground text-sm mt-1">Available 24/7 for emergencies</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-6 bg-care-accent/20 rounded-xl">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">Email</h3>
                  <a 
                    href="mailto:Hope.adebayo02@gmail.com" 
                    className="text-primary hover:text-primary/80 transition-colors text-lg font-medium"
                    aria-label="Email us at Hope.adebayo02@gmail.com"
                  >
                    Hope.adebayo02@gmail.com
                  </a>
                  <p className="text-muted-foreground text-sm mt-1">We respond within 2 hours</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-6 bg-care-accent/20 rounded-xl">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">Business Hours</h3>
                  <div className="text-muted-foreground">
                    <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p>Saturday: 9:00 AM - 4:00 PM</p>
                    <p>Sunday: By appointment</p>
                  </div>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-6 bg-care-accent/20 rounded-xl">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">Location</h3>
                  <p className="text-muted-foreground">
                    1352 Calumet Ave, West St. Paul, MN 55118
                  </p>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Get In Touch
              </h2>
              <p className="text-muted-foreground mb-8">
                Fill out our inquiry form below to get personalized information about our services.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <InquiryForm />
    </div>
  );
};

export default Contact;