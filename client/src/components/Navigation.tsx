import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

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
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center gap-2 md:gap-3 hover:opacity-80 transition-opacity rounded-md px-2 py-1 -mx-2 cursor-pointer">
              <img src="/logo.png" alt="Sethu Properties" className="h-8 md:h-10 w-auto" />
              <span className="hidden sm:inline text-lg md:text-xl font-bold text-foreground">Sethu Properties</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <Button
                  variant={isActive(link.href) ? "secondary" : "ghost"}
                  className="text-sm font-medium"
                >
                  {link.label}
                </Button>
              </Link>
            ))}
          </nav>

          {/* Desktop CTA and Theme Toggle */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <Link href="/contact">
              <Button variant="default" className="bg-primary text-primary-foreground text-sm">
                Free Consultation
              </Button>
            </Link>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col gap-4 mt-8">
                  <nav className="flex flex-col gap-2">
                    {navLinks.map((link) => (
                      <Link key={link.href} href={link.href}>
                        <Button
                          variant={isActive(link.href) ? "secondary" : "ghost"}
                          className="w-full justify-start text-base"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {link.label}
                        </Button>
                      </Link>
                    ))}
                  </nav>
                  <Link href="/contact">
                    <Button
                      variant="default"
                      className="w-full bg-primary text-primary-foreground"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Free Consultation
                    </Button>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

    </header>
  );
}
