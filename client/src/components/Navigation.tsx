import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export function Navigation() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu when location changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/how-it-works", label: "How It Works" },
    { href: "/service-areas", label: "Service Areas" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return location === href;
    return location.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex h-14 sm:h-16 items-center justify-between">
          <Link href="/" data-testid="link-home">
            <div className="flex items-center gap-2 sm:gap-3">
              <img src="/logo.png" alt="Sethu Properties" className="h-8 sm:h-9 w-auto" />
              <span className="text-lg sm:text-xl font-bold text-gray-900 hidden sm:inline">Sethu Properties</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} data-testid={`link-${link.label.toLowerCase().replace(/\s+/g, "-")}`}>
                <Button
                  variant="ghost"
                  className={`text-sm font-medium ${isActive(link.href) ? "text-blue-600 bg-blue-50" : "text-gray-700 hover:text-blue-600"}`}
                >
                  {link.label}
                </Button>
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Link href="/contact" data-testid="button-cta-header">
              <Button className="h-9 sm:h-10 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium">
                Free Consultation
              </Button>
            </Link>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5 text-gray-700" /> : <Menu className="h-5 w-5 text-gray-700" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-white">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} data-testid={`link-mobile-${link.label.toLowerCase().replace(/\s+/g, "-")}`}>
                <Button
                  variant="ghost"
                  className={`w-full justify-start text-sm font-medium ${isActive(link.href) ? "text-blue-600 bg-blue-50" : "text-gray-700 hover:text-blue-600"}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Button>
              </Link>
            ))}
            <Link href="/contact">
              <Button
                className="w-full h-9 bg-blue-600 hover:bg-blue-700 text-white mt-2 text-sm font-medium"
                onClick={() => setMobileMenuOpen(false)}
                data-testid="button-cta-mobile"
              >
                Free Consultation
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
