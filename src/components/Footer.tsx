import { Heart, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex items-center justify-center w-10 h-10 bg-white/20 rounded-lg">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-bold">Goshen Concept Care</h3>
            </div>
            <p className="text-white/90 leading-relaxed">
              Providing compassionate, family-centered assisted living with dignity and independence.
            </p>
            <div className="flex space-x-2">
              <Button
                variant="ghost"
                size="sm" 
                className="text-white hover:bg-white/20 p-2"
                onClick={() => window.open('tel:651-500-0971')}
                aria-label="Call us"
              >
                <Phone className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-white hover:bg-white/20 p-2"
                onClick={() => window.open('mailto:emantop@yahoo.com')}
                aria-label="Email us"
              >
                <Mail className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-white/90">
              <li>Homemaker Services</li>
              <li>24-Hour Assisted Living</li>
              <li>Personal Care</li>
              <li>Medication Management</li>
              <li>Activity Programs</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-white/90">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">651-500-0971</p>
                  <p className="text-sm">Available 24/7</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">emantop@yahoo.com</p>
                  <p className="text-sm">We respond within 2 hours</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-white/90">
              <li>
                <button 
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-white transition-colors text-left"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('staff')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-white transition-colors text-left"
                >
                  Our Team
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-white transition-colors text-left"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-white transition-colors text-left"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/80 text-sm">
              © 2024 Goshen Concept Care. All rights reserved.
            </p>
            <p className="text-white/80 text-sm">
              Licensed Assisted Living Facility
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;