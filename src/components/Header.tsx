import { Button } from "@/components/ui/button";
import { Phone, Heart, Home } from "lucide-react";
const Header = () => {
  return <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b border-warm-secondary/30">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-comfort-blue to-family-orange rounded-lg">
            <Home className="w-6 h-6 text-warm-primary" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-foreground">GOSHEN CONCEPT CARE LLC</h1>
            <p className="text-sm text-muted-foreground">Assisted Living Facility</p>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#about" className="text-foreground hover:text-warm-primary transition-colors">About</a>
          <a href="#services" className="text-foreground hover:text-warm-primary transition-colors">Services</a>
          <a href="#contact" className="text-foreground hover:text-warm-primary transition-colors">Contact</a>
          <Button variant="hero" size="sm" className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            Call Today
          </Button>
        </nav>
      </div>
    </header>;
};
export default Header;