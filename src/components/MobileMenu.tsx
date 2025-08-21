import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X, Phone } from "lucide-react";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  const menuItems = [
    { label: "About", id: "about" },
    { label: "Staff", id: "staff" },
    { label: "Services", id: "services" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button 
          variant="ghost" 
          size="touch" 
          className="md:hidden"
          aria-label="Open navigation menu"
        >
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[280px] bg-background border-l-2 border-primary/10">
        <div className="flex flex-col space-y-6 mt-8">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-foreground">Menu</h2>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
          
          <nav className="flex flex-col space-y-4">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-left py-3 px-4 rounded-lg text-foreground hover:bg-care-accent hover:text-primary transition-colors text-lg font-medium focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                role="menuitem"
              >
                {item.label}
              </button>
            ))}
          </nav>
          
          <div className="border-t border-secondary pt-6 mt-6">
            <Button 
              variant="hero" 
              size="touch" 
              className="w-full flex items-center gap-3 text-lg"
              onClick={() => {
                window.open('tel:651-500-0971');
                setIsOpen(false);
              }}
            >
              <Phone className="w-5 h-5" />
              651-500-0971
            </Button>
            <p className="text-sm text-muted-foreground text-center mt-2">
              Available 24/7
            </p>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;