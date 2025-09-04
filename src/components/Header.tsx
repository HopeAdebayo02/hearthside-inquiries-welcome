import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import MobileMenu from "@/components/MobileMenu";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  
  return (
    <header className="fixed top-0 w-full bg-background backdrop-blur-md z-50 border-b-2 border-care-secondary shadow-[var(--shadow-card)]">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity duration-300 ease-out">
          <img 
            src="/gohen-uploads/c6ced647-d0e0-4204-86eb-ad15242f43c9.png" 
            alt="Goshen Concept Care LLC - Professional Assisted Living Facility Logo" 
            className="w-10 h-10 md:w-12 md:h-12 object-contain rounded-lg shadow-sm"
          />
          <div>
            <h1 className="text-lg md:text-2xl font-bold text-foreground tracking-wide leading-tight">
              GOSHEN CONCEPT CARE LLC
            </h1>
            <p className="text-sm md:text-base text-primary font-semibold">
              Assisted Living Facility
            </p>
          </div>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link 
            to="/about" 
            className={`text-foreground hover:text-primary transition-colors duration-300 ease-out font-medium px-3 py-2 rounded-lg hover:bg-care-accent focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
              location.pathname === '/about' ? 'text-primary bg-care-accent' : ''
            }`}
            aria-label="Go to About page"
            onClick={() => setTimeout(() => window.scrollTo(0, 0), 100)}
          >
            About
          </Link>
          <Link 
            to="/staff" 
            className={`text-foreground hover:text-primary transition-colors duration-300 ease-out font-medium px-3 py-2 rounded-lg hover:bg-care-accent focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
              location.pathname === '/staff' ? 'text-primary bg-care-accent' : ''
            }`}
            aria-label="Go to Staff page"
            onClick={() => setTimeout(() => window.scrollTo(0, 0), 100)}
          >
            Staff
          </Link>
          <Link 
            to="/services" 
            className={`text-foreground hover:text-primary transition-colors duration-300 ease-out font-medium px-3 py-2 rounded-lg hover:bg-care-accent focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
              location.pathname === '/services' ? 'text-primary bg-care-accent' : ''
            }`}
            aria-label="Go to Services page"
            onClick={() => setTimeout(() => window.scrollTo(0, 0), 100)}
          >
            Services
          </Link>
          <Link 
            to="/contact" 
            className={`text-foreground hover:text-primary transition-colors duration-300 ease-out font-medium px-3 py-2 rounded-lg hover:bg-care-accent focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
              location.pathname === '/contact' ? 'text-primary bg-care-accent' : ''
            }`}
            aria-label="Go to Contact page"
            onClick={() => setTimeout(() => window.scrollTo(0, 0), 100)}
          >
            Contact
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button 
                variant="hero" 
                size="touch" 
                className="flex items-center gap-2 font-semibold"
                aria-label="Call us"
              >
                <Phone className="w-4 h-4" />
                <span className="hidden lg:inline">Call</span>
                <span className="lg:hidden">Call</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => window.open('tel:651-210-5364')}>
                651-210-5364
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        {/* Mobile Menu */}
        <MobileMenu />
      </div>
    </header>
  );
};
export default Header;