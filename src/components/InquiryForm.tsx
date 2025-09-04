import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, Heart, Clock, MapPin } from "lucide-react";

const InquiryForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    relationship: "",
    careType: "",
    timeframe: "",
    preferredContact: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const toEmail = "Hope.adebayo02@gmail.com";
      const subject = `New inquiry from ${formData.name || "(no name)"}`;
      const body = `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nRelationship: ${formData.relationship || "—"}\nCare Type: ${formData.careType || "—"}\nTimeframe: ${formData.timeframe || "—"}\nPreferred Contact: ${formData.preferredContact || "—"}\n\nMessage:\n${formData.message}`;

      const mailtoUrl = `mailto:${toEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

      // Track form submission event
      if (typeof gtag !== 'undefined') {
        gtag('event', 'form_submission', {
          event_category: 'engagement',
          event_label: 'contact_form',
          value: 1,
          custom_parameter_1: formData.careType || 'general_inquiry'
        });
      }

      // Open user's default email client with a pre-filled message
      window.location.href = mailtoUrl;

      toast({
        title: "Compose email opened",
        description: "Your email client should open with the inquiry pre-filled.",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        relationship: "",
        careType: "",
        timeframe: "",
        preferredContact: "",
        message: "",
      });
    } catch (error) {
      toast({
        title: "Could not open email client",
        description: "Please email us directly at Hope.adebayo02@gmail.com.",
        variant: "destructive",
      });
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-gradient-to-br from-primary/5 via-care-accent/30 to-primary/10 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-care-accent/20"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-care-accent/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-8">
              <div className="flex items-center justify-center w-24 h-24 bg-background rounded-2xl border-2 border-primary/20 shadow-2xl backdrop-blur-sm">
                <Heart className="w-12 h-12 text-primary animate-pulse" />
              </div>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-8 leading-tight bg-gradient-to-r from-foreground to-primary bg-clip-text">
              Start Your Journey With Us
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light">
              Every family's story is unique. Tell us about your loved one, and we'll help you 
              find the perfect care solution together.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Information */}
            <Card className="bg-background/95 backdrop-blur-sm border-2 border-care-secondary shadow-2xl hover:shadow-3xl transition-all duration-300 ease-out hover:scale-[1.02]">
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl md:text-3xl text-foreground flex items-center gap-3 mb-2">
                  <Phone className="w-7 h-7 text-primary" />
                  Get in Touch
                </CardTitle>
                <CardDescription className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  We're here to answer all your questions and guide you through the process.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <button
                  onClick={() => {
                    if (typeof gtag !== 'undefined') {
                      gtag('event', 'phone_click', {
                        event_category: 'contact',
                        event_label: 'main_office_line'
                      });
                    }
                    window.open('tel:651-210-5364');
                  }}
                  className="flex items-center space-x-4 w-full text-left hover:bg-care-accent rounded-xl p-4 transition-all duration-200 border-2 border-transparent hover:border-primary/20 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 min-h-[68px]"
                  aria-label="Call us at 651-210-5364"
                >
                  <div className="flex items-center justify-center w-14 h-14 bg-care-accent rounded-xl border-2 border-primary/10">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground text-lg">651-210-5364</p>
                    <p className="text-muted-foreground text-sm">Main office line</p>
                  </div>
                </button>
                
                <button
                  onClick={() => {
                    if (typeof gtag !== 'undefined') {
                      gtag('event', 'email_click', {
                        event_category: 'contact',
                        event_label: 'primary_email'
                      });
                    }
                    window.open('mailto:Hope.adebayo02@gmail.com');
                  }}
                  className="flex items-center space-x-4 w-full text-left hover:bg-care-accent rounded-xl p-4 transition-all duration-200 border-2 border-transparent hover:border-primary/20 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 min-h-[68px]"
                  aria-label="Email us at Hope.adebayo02@gmail.com"
                >
                  <div className="flex items-center justify-center w-14 h-14 bg-care-accent rounded-xl border-2 border-primary/10">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground text-lg">Hope.adebayo02@gmail.com</p>
                    <p className="text-muted-foreground text-sm">We respond within 2 hours</p>
                  </div>
                </button>



                <div className="flex items-start space-x-4 w-full text-left bg-care-accent/50 rounded-xl p-4 border-2 border-primary/10 min-h-[68px]">
                  <div className="flex items-center justify-center w-14 h-14 bg-care-accent rounded-xl border-2 border-primary/10 flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground text-lg mb-1">Business Hours</p>
                    <div className="text-muted-foreground text-sm space-y-1">
                      <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                      <p>Saturday: 9:00 AM - 4:00 PM</p>
                      <p>Sunday: By appointment</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4 w-full text-left bg-care-accent/50 rounded-xl p-4 border-2 border-primary/10 min-h-[68px]">
                  <div className="flex items-center justify-center w-14 h-14 bg-care-accent rounded-xl border-2 border-primary/10 flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground text-lg mb-1">Our Location</p>
                    <p className="text-muted-foreground text-sm">
                      1352 Calumet Ave<br />
                      West St. Paul, MN 55118
                    </p>
                  </div>
                </div>
                

              </CardContent>
            </Card>

            {/* Inquiry Form */}
            <Card className="bg-background/95 backdrop-blur-sm border-2 border-care-secondary shadow-2xl hover:shadow-3xl transition-all duration-300 ease-out hover:scale-[1.02]">
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl md:text-3xl text-foreground mb-2">
                  Send Us Your Inquiry
                </CardTitle>
                <CardDescription className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  Answer a few quick questions and we’ll reach out with next steps.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Your Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        required
                        className="h-12 border-2 border-care-secondary focus:border-primary transition-colors text-base"
                        aria-describedby="name-description"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                        className="border-warm-secondary/30 focus:border-warm-primary"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone *</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        required
                        className="border-warm-secondary/30 focus:border-warm-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="relationship">Who are you to the person needing care?</Label>
                      <Select onValueChange={(value) => handleInputChange("relationship", value)}>
                        <SelectTrigger className="border-warm-secondary/30 focus:border-warm-primary">
                          <SelectValue placeholder="Select relationship" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="child">Adult Child</SelectItem>
                          <SelectItem value="spouse">Spouse</SelectItem>
                          <SelectItem value="sibling">Sibling</SelectItem>
                          <SelectItem value="relative">Other Relative</SelectItem>
                          <SelectItem value="friend">Family Friend</SelectItem>
                          <SelectItem value="self">Myself</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="careType">What kind of support are you looking for?</Label>
                    <Select onValueChange={(value) => handleInputChange("careType", value)}>
                      <SelectTrigger className="border-warm-secondary/30 focus:border-warm-primary">
                        <SelectValue placeholder="Choose care type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="144G">24-Hour Assisted Living (144G)</SelectItem>
                        <SelectItem value="245D">Homemaker Services (245D)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="timeframe">When are you hoping to start?</Label>
                    <Select onValueChange={(value) => handleInputChange("timeframe", value)}>
                      <SelectTrigger className="border-warm-secondary/30 focus:border-warm-primary">
                        <SelectValue placeholder="Select timeframe" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="immediate">Immediately (within 1 week)</SelectItem>
                        <SelectItem value="soon">Within 1 month</SelectItem>
                        <SelectItem value="planning">2–6 months</SelectItem>
                        <SelectItem value="future">6+ months</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="preferredContact">How should we contact you?</Label>
                    <Select onValueChange={(value) => handleInputChange("preferredContact", value)}>
                      <SelectTrigger className="border-warm-secondary/30 focus:border-warm-primary">
                        <SelectValue placeholder="Email or phone" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="email">Email</SelectItem>
                        <SelectItem value="phone">Phone</SelectItem>
                        <SelectItem value="either">Either is fine</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Tell us about your loved one's needs</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      rows={4}
                      placeholder="Please share any specific care needs, medical conditions, or questions you have..."
                      className="border-warm-secondary/30 focus:border-warm-primary"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    variant="hero" 
                    size="lg" 
                    className="w-full min-h-[52px] text-lg font-semibold"
                    aria-label="Submit inquiry form"
                  >
                    Send My Inquiry
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InquiryForm;