import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useScroll } from "@/hooks/use-scroll";
import { mobileMenuSlide } from "@/lib/animations";
import { ThemeToggle } from "./ThemeToggle";

export function Navigation() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isScrolled } = useScroll();

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
    <header className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
      isScrolled
        ? "bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-border/50 shadow-sm"
        : "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-border"
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" data-testid="link-home">
            <motion.div
              className="flex items-center gap-3 hover-elevate active-elevate-2 rounded-md px-2 py-1 -mx-2 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <img src="/logo.png" alt="Sethu Properties" className="h-10 w-auto" />
              <span className="text-xl font-bold text-foreground">Sethu Properties</span>
            </motion.div>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link, index) => (
              <Link key={link.href} href={link.href} data-testid={`link-${link.label.toLowerCase().replace(/\s+/g, "-")}`}>
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <Button
                    variant={isActive(link.href) ? "secondary" : "ghost"}
                    className="text-sm font-medium relative overflow-hidden"
                  >
                    <span className="relative z-10">{link.label}</span>
                    {isActive(link.href) && (
                      <motion.div
                        className="absolute bottom-1 left-0 right-0 h-0.5 bg-primary"
                        layoutId="navUnderline"
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </Button>
                </motion.div>
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <ThemeToggle />
            <Link href="/contact" data-testid="button-cta-header">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Button variant="default" className="bg-primary text-primary-foreground hover:shadow-lg transition-shadow">
                  Free Consultation
                </Button>
              </motion.div>
            </Link>
          </div>

          <motion.button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
            aria-label="Toggle menu"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              animate={{ rotate: mobileMenuOpen ? 90 : 0 }}
              transition={{ duration: 0.2 }}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.div>
          </motion.button>
        </div>
      </div>

      <motion.div
        initial={false}
        animate={mobileMenuOpen ? "visible" : "hidden"}
        variants={mobileMenuSlide}
        className="md:hidden border-t bg-background absolute top-16 left-0 right-0 origin-top"
      >
        <nav className="container mx-auto px-6 py-4 flex flex-col gap-2">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.href}
              initial={{ opacity: 0, x: -20 }}
              animate={mobileMenuOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <Link href={link.href} data-testid={`link-mobile-${link.label.toLowerCase().replace(/\s+/g, "-")}`}>
                <Button
                  variant={isActive(link.href) ? "secondary" : "ghost"}
                  className="w-full justify-start text-sm font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Button>
              </Link>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={mobileMenuOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.3, delay: navLinks.length * 0.05 }}
          >
            <Link href="/contact">
              <Button
                variant="default"
                className="w-full bg-primary text-primary-foreground mt-2"
                onClick={() => setMobileMenuOpen(false)}
                data-testid="button-cta-mobile"
              >
                Free Consultation
              </Button>
            </Link>
          </motion.div>
        </nav>
      </motion.div>
    </header>
  );
}
