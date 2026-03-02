import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Gallery", path: "/gallery" },
  { label: "Insurance", path: "/insurance" },
  { label: "Technology", path: "/technology" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-[72px] px-4 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-1.5">
          <span className="font-heading text-xl font-bold text-primary tracking-tight">SJ Summit</span>
          <span className="font-heading text-xl font-normal text-foreground">Dental</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                location.pathname === item.path
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-4">
          <a href="tel:+15628095988" className="hidden sm:flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <Phone className="w-3.5 h-3.5" />
            <span>(562) 809-5988</span>
          </a>
          <Button variant="hero" size="sm" asChild>
            <Link to="/contact" className="hidden sm:inline-flex">Schedule Visit</Link>
          </Button>
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-background px-4 pb-4">
          <nav className="flex flex-col gap-1 pt-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className={`px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === item.path
                    ? "text-foreground bg-secondary"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Button variant="hero" size="default" className="mt-2" asChild>
              <Link to="/contact" onClick={() => setMobileOpen(false)}>Schedule Visit</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
