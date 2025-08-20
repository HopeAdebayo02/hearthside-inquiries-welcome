import { Button } from "@/components/ui/button";
import { Phone, Heart } from "lucide-react";
const Header = () => {
  return <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b border-warm-secondary/30">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-foreground tracking-wide">GOSHEN CONCEPT CARE LLC</h1>
            <p className="text-base md:text-lg text-warm-primary font-semibold">Assisted Living Facility</p>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a href="/about" className="text-foreground hover:text-warm-primary transition-colors">About</a>
          <a href="/services" className="text-foreground hover:text-warm-primary transition-colors">Services</a>
          <a href="/contact" className="text-foreground hover:text-warm-primary transition-colors">Contact</a>
          <Button 
            variant="hero" 
            size="sm" 
            className="flex items-center gap-2"
            onClick={() => window.open('tel:651-500-0971')}
          >
            <Phone className="w-4 h-4" />
            651-500-0971
          </Button>
        </nav>
      </div>
    </header>;
};
export default Header;