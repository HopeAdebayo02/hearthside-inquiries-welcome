import InquiryForm from "@/components/InquiryForm";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen pt-20">
      <div className="bg-gradient-to-b from-care-accent/30 to-background py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              We're here to answer your questions and help you explore our assisted living options.
            </p>
          </div>
        </div>
      </div>
      
      {/* Contact Information */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-foreground mb-8">Contact Information</h2>
              
              <div className="flex items-start space-x-4">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">Phone</h3>
                  <a 
                    href="tel:651-500-0971" 
                    className="text-primary hover:text-primary/80 transition-colors text-lg font-medium"
                    aria-label="Call us at 651-500-0971"
                  >
                    651-500-0971
                  </a>
                  <p className="text-muted-foreground text-sm mt-1">Available 24/7 for emergencies</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">Email</h3>
                  <a 
                    href="mailto:emantop@yahoo.com" 
                    className="text-primary hover:text-primary/80 transition-colors text-lg font-medium"
                    aria-label="Email us at emantop@yahoo.com"
                  >
                    emantop@yahoo.com
                  </a>
                  <p className="text-muted-foreground text-sm mt-1">We respond within 2 hours</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
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
            </div>
            
            <div>
              <InquiryForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;