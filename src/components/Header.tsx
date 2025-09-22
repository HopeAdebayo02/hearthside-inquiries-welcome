import { useState, useEffect } from "react";
import { Button, MotionNavLink } from "@/components/ui/button";
import { Phone, Calendar, Search, Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import MobileMenu from "@/components/MobileMenu";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);

  // Check if we're on the home page
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    // Only add scroll listener on home page
    if (!isHomePage) {
      setIsScrolled(true); // Always shrunk on non-home pages
      return;
    }

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  return (
    <header className={`fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-200 shadow-lg transition-all duration-300 ${
      isScrolled ? 'shadow-xl' : ''
    }`}>
      {/* Top Bar */}
      <div className={`bg-primary text-white transition-all duration-300 ${
        isScrolled ? 'py-1 opacity-90' : 'py-2'
      }`}>
        <div className="container mx-auto px-4 flex justify-center items-center text-xs sm:text-sm">
          <span className="font-medium">Call for Pricing & Availability: 651-210-5364</span>
        </div>
      </div>

      {/* Main Header */}
      <div className={`container mx-auto px-4 transition-all duration-300 ${
        isScrolled ? 'py-1 sm:py-2' : 'py-2 sm:py-4'
      }`}>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center hover:opacity-80 transition-opacity duration-300">
              <img
                src="/gohen-uploads/Logo-removebg-preview.png"
                alt="Goshen Concept Care - Professional Assisted Living Facility Logo"
                className={`object-contain transition-all duration-300 ${
                  isScrolled
                    ? 'w-[120px] h-[72px] sm:w-[160px] sm:h-[95px]'
                    : 'w-[160px] h-[95px] sm:w-[220px] sm:h-[130px]'
                }`}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <MotionNavLink
              to="/about"
              className="font-semibold hover:text-primary transition-all duration-300 px-4 py-2 text-lg"
            >
              About
            </MotionNavLink>

            <MotionNavLink
              to="/services"
              className="font-semibold hover:text-primary transition-all duration-300 px-4 py-2 text-lg"
            >
              Services
            </MotionNavLink>

            <MotionNavLink
              to="/staff"
              className="font-semibold hover:text-primary transition-all duration-300 px-4 py-2 text-lg"
            >
              Staff
            </MotionNavLink>

            <MotionNavLink
              to="/contact"
              className="font-semibold hover:text-primary transition-all duration-300 px-4 py-2 text-lg"
            >
              Contact
            </MotionNavLink>

            {/* Action Buttons */}
            <div className="flex items-center space-x-4">
              {/* Phone Button */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    className={`flex items-center gap-2 font-semibold border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 ${
                      isScrolled ? 'text-sm px-3 py-2 h-9' : 'size-lg'
                    }`}
                  >
                    <Phone className={`transition-all duration-300 ${
                      isScrolled ? 'w-3 h-3' : 'w-4 h-4'
                    }`} />
                    Call
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Call Us</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => window.open('tel:651-210-5364')}>
                    <Phone className="w-4 h-4 mr-2" />
                    651-210-5364
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Book Tour Button */}
              <Button
                className={`bg-primary hover:bg-primary/90 text-white font-semibold transition-all duration-300 ${
                  isScrolled ? 'text-sm px-4 py-2 h-9' : 'size-lg px-6'
                }`}
                onClick={() => {
                  const contactElement = document.getElementById('contact');
                  if (contactElement) {
                    // If we're on a page with a contact section, scroll to it
                    contactElement.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    // Otherwise, navigate to the contact page
                    navigate('/contact');
                  }
                }}
              >
                <Calendar className={`transition-all duration-300 mr-2 ${
                  isScrolled ? 'w-3 h-3' : 'w-4 h-4'
                }`} />
                Book a Tour
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className="lg:hidden">
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;