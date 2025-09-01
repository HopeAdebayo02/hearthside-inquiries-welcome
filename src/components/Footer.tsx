import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-care-secondary text-foreground py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-foreground mb-4">Goshen Concept Care LLC</h3>
            <p className="text-muted-foreground leading-relaxed">
              Providing compassionate, family-centered assisted living with dignity and independence.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold mb-4 text-foreground">Our Services</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>Homemaker Services</li>
              <li>24-Hour Assisted Living</li>
              <li>Personal Care</li>
              <li>Medication Management</li>
              <li>Activity Programs</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold mb-4 text-foreground">Contact</h4>
            <div className="space-y-3 text-muted-foreground">
              <div className="space-y-1">
                <a 
                  href="tel:651-500-0971" 
                  className="font-medium text-foreground hover:text-primary transition-colors block"
                  aria-label="Call us at 651-500-0971"
                >
                  651-500-0971
                </a>
                <a 
                  href="tel:651-210-5364" 
                  className="font-medium text-foreground hover:text-primary transition-colors block"
                  aria-label="Call us at 651-210-5364"
                >
                  651-210-5364
                </a>
                <p className="text-sm">Available 24/7</p>
              </div>
              <div>
                <a 
                  href="mailto:Hope.adebayo02@gmail.com" 
                  className="font-medium text-foreground hover:text-primary transition-colors"
                  aria-label="Email us at Hope.adebayo02@gmail.com"
                >
                  Hope.adebayo02@gmail.com
                </a>
                <p className="text-sm">We respond within 2 hours</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold mb-4 text-foreground">Quick Links</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <Link 
                  to="/about"
                  className="hover:text-primary transition-colors"
                  aria-label="Go to About page"
                  onClick={() => setTimeout(() => window.scrollTo(0, 0), 100)}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/staff"
                  className="hover:text-primary transition-colors"
                  aria-label="Go to Staff page"
                  onClick={() => setTimeout(() => window.scrollTo(0, 0), 100)}
                >
                  Our Team
                </Link>
              </li>
              <li>
                <Link 
                  to="/services"
                  className="hover:text-primary transition-colors"
                  aria-label="Go to Services page"
                  onClick={() => setTimeout(() => window.scrollTo(0, 0), 100)}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact"
                  className="hover:text-primary transition-colors"
                  aria-label="Go to Contact page"
                  onClick={() => setTimeout(() => window.scrollTo(0, 0), 100)}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-care-secondary mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm">
              © 2024 Goshen Concept Care LLC. All rights reserved.
            </p>
            <p className="text-muted-foreground text-sm">
              Licensed Assisted Living Facility
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;