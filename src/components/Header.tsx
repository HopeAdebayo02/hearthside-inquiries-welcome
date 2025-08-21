import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import MobileMenu from "@/components/MobileMenu";

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-background/98 backdrop-blur-md z-50 border-b-2 border-care-secondary shadow-[var(--shadow-card)]">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img 
            src="/goshen-logo.png" 
            alt="Goshen Concept Care LLC - Professional Assisted Living Facility Logo" 
            className="w-10 h-10 md:w-14 md:h-14 rounded-lg shadow-sm"
          />
          <div>
            <h1 className="text-lg md:text-2xl font-bold text-foreground tracking-wide leading-tight">
              GOSHEN CONCEPT CARE LLC
            </h1>
            <p className="text-sm md:text-base text-primary font-semibold">
              Assisted Living Facility
            </p>
          </div>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <button 
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} 
            className="text-foreground hover:text-primary transition-colors font-medium px-3 py-2 rounded-lg hover:bg-care-accent focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            aria-label="Go to About section"
          >
            About
          </button>
          <button 
            onClick={() => document.getElementById('staff')?.scrollIntoView({ behavior: 'smooth' })} 
            className="text-foreground hover:text-primary transition-colors font-medium px-3 py-2 rounded-lg hover:bg-care-accent focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            aria-label="Go to Staff section"
          >
            Staff
          </button>
          <button 
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })} 
            className="text-foreground hover:text-primary transition-colors font-medium px-3 py-2 rounded-lg hover:bg-care-accent focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            aria-label="Go to Services section"
          >
            Services
          </button>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} 
            className="text-foreground hover:text-primary transition-colors font-medium px-3 py-2 rounded-lg hover:bg-care-accent focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            aria-label="Go to Contact section"
          >
            Contact
          </button>
          <Button 
            variant="hero" 
            size="touch" 
            className="flex items-center gap-2 font-semibold"
            onClick={() => window.open('tel:651-500-0971')}
            aria-label="Call us at 651-500-0971"
          >
            <Phone className="w-4 h-4" />
            <span className="hidden lg:inline">651-500-0971</span>
            <span className="lg:hidden">Call</span>
          </Button>
        </nav>

        {/* Mobile Menu */}
        <MobileMenu />
      </div>
    </header>
  );
};
export default Header;