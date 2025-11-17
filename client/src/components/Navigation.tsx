import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";

export function Navigation() {
  const [location] = useLocation();

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
      <div className="container mx-auto px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center gap-3 hover:opacity-80 transition-opacity rounded-md px-2 py-1 -mx-2 cursor-pointer">
              <img src="/logo.png" alt="Sethu Properties" className="h-10 w-auto" />
              <span className="text-xl font-bold text-foreground">Sethu Properties</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="flex items-center gap-1">
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

          {/* CTA and Theme Toggle */}
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Link href="/contact">
              <Button variant="default" className="bg-primary text-primary-foreground">
                Free Consultation
              </Button>
            </Link>
          </div>
        </div>
      </div>

    </header>
  );
}
