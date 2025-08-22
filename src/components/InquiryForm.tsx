import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, Calendar, Heart } from "lucide-react";

const InquiryForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    relationship: "",
    urgency: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Create mailto link with form data
      const subject = `New Inquiry from ${formData.name}`;
      const body = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Relationship: ${formData.relationship}
Urgency: ${formData.urgency}
Message: ${formData.message}
      `;
      
      const mailtoLink = `mailto:Hope.adebayo02@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.open(mailtoLink);
      
      toast({
        title: "Thank you for your inquiry!",
        description: "We'll contact you within 24 hours to discuss your needs.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        relationship: "",
        urgency: "",
        message: ""
      });
    } catch (error) {
      toast({
        title: "Error sending inquiry",
        description: "Please try again or call us directly.",
        variant: "destructive"
      });
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-care-accent">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="flex items-center justify-center w-20 h-20 bg-background rounded-xl border-2 border-primary/20 shadow-[var(--shadow-card)]">
                <Heart className="w-10 h-10 text-primary" />
              </div>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Start Your Journey With Us
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Every family's story is unique. Tell us about your loved one, and we'll help you 
              find the perfect care solution together.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Information */}
            <Card className="bg-background border-2 border-care-secondary shadow-[var(--shadow-primary)] hover:shadow-lg transition-shadow">
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
                  onClick={() => window.open('tel:651-500-0971')}
                  className="flex items-center space-x-4 w-full text-left hover:bg-care-accent rounded-xl p-4 transition-all duration-200 border-2 border-transparent hover:border-primary/20 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 min-h-[68px]"
                  aria-label="Call us at 651-500-0971"
                >
                  <div className="flex items-center justify-center w-14 h-14 bg-care-accent rounded-xl border-2 border-primary/10">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground text-lg">651-500-0971</p>
                    <p className="text-muted-foreground text-sm">Available 24/7</p>
                  </div>
                </button>
                
                <button 
                  onClick={() => window.open('mailto:emantop@yahoo.com')}
                  className="flex items-center space-x-4 w-full text-left hover:bg-care-accent rounded-xl p-4 transition-all duration-200 border-2 border-transparent hover:border-primary/20 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 min-h-[68px]"
                  aria-label="Email us at emantop@yahoo.com"
                >
                  <div className="flex items-center justify-center w-14 h-14 bg-care-accent rounded-xl border-2 border-primary/10">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground text-lg">emantop@yahoo.com</p>
                    <p className="text-muted-foreground text-sm">We respond within 2 hours</p>
                  </div>
                </button>
                
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="flex items-center space-x-4 w-full text-left hover:bg-care-accent rounded-xl p-4 transition-all duration-200 border-2 border-transparent hover:border-primary/20 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 min-h-[68px]"
                  aria-label="Schedule a visit to our facility"
                >
                  <div className="flex items-center justify-center w-14 h-14 bg-care-accent rounded-xl border-2 border-primary/10">
                    <Calendar className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground text-lg">Schedule a Visit</p>
                    <p className="text-muted-foreground text-sm">Tours available daily</p>
                  </div>
                </button>
              </CardContent>
            </Card>

            {/* Inquiry Form */}
            <Card className="bg-background border-2 border-care-secondary shadow-[var(--shadow-primary)] hover:shadow-lg transition-shadow">
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl md:text-3xl text-foreground mb-2">
                  Send Us Your Inquiry
                </CardTitle>
                <CardDescription className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  Tell us about your loved one's needs and we'll create a personalized care plan.
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
                      <Label htmlFor="email">Email Address *</Label>
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
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        required
                        className="border-warm-secondary/30 focus:border-warm-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="relationship">Your Relationship</Label>
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
                    <Label htmlFor="urgency">How soon are you looking for care?</Label>
                    <Select onValueChange={(value) => handleInputChange("urgency", value)}>
                      <SelectTrigger className="border-warm-secondary/30 focus:border-warm-primary">
                        <SelectValue placeholder="Select timeframe" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="immediate">Immediately (within 1 week)</SelectItem>
                        <SelectItem value="soon">Soon (within 1 month)</SelectItem>
                        <SelectItem value="planning">Planning ahead (2-6 months)</SelectItem>
                        <SelectItem value="future">Future planning (6+ months)</SelectItem>
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