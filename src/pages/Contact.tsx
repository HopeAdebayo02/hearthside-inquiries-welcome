import Header from "@/components/Header";
import InquiryForm from "@/components/InquiryForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Get in touch with our caring team to learn more about our services or schedule a visit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="border-warm-secondary/30 text-center">
              <CardHeader>
                <div className="flex justify-center mb-2">
                  <div className="flex items-center justify-center w-12 h-12 bg-warm-primary/10 rounded-lg">
                    <Phone className="w-6 h-6 text-warm-primary" />
                  </div>
                </div>
                <CardTitle className="text-lg">Phone</CardTitle>
              </CardHeader>
              <CardContent>
                <a 
                  href="tel:651-500-0971" 
                  className="text-muted-foreground hover:text-warm-primary transition-colors"
                >
                  651-500-0971
                </a>
              </CardContent>
            </Card>

            <Card className="border-warm-secondary/30 text-center">
              <CardHeader>
                <div className="flex justify-center mb-2">
                  <div className="flex items-center justify-center w-12 h-12 bg-trust-green/10 rounded-lg">
                    <Mail className="w-6 h-6 text-trust-green" />
                  </div>
                </div>
                <CardTitle className="text-lg">Email</CardTitle>
              </CardHeader>
              <CardContent>
                <a 
                  href="mailto:info@goshenconceptcare.com" 
                  className="text-muted-foreground hover:text-trust-green transition-colors"
                >
                  Contact by Form
                </a>
              </CardContent>
            </Card>

            <Card className="border-warm-secondary/30 text-center">
              <CardHeader>
                <div className="flex justify-center mb-2">
                  <div className="flex items-center justify-center w-12 h-12 bg-family-orange/10 rounded-lg">
                    <MapPin className="w-6 h-6 text-family-orange" />
                  </div>
                </div>
                <CardTitle className="text-lg">Location</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Minnesota<br />
                  Licensed Facility
                </p>
              </CardContent>
            </Card>

            <Card className="border-warm-secondary/30 text-center">
              <CardHeader>
                <div className="flex justify-center mb-2">
                  <div className="flex items-center justify-center w-12 h-12 bg-comfort-blue/10 rounded-lg">
                    <Clock className="w-6 h-6 text-comfort-blue" />
                  </div>
                </div>
                <CardTitle className="text-lg">Availability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  24/7 Care<br />
                  Tours by Appointment
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <InquiryForm />
      </main>
    </div>
  );
};

export default Contact;