import { Link } from "wouter";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-card mt-12">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="/logo.png" alt="Sethu Properties" className="h-10 w-auto" />
              <span className="text-lg font-bold">Sethu Properties</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Your trusted property partner in South Tamil Nadu, delivering transparent and tech-enabled real estate services.
            </p>
            <div className="flex flex-col gap-2 text-sm">
              <a href="mailto:info@sethuproperties.com" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-email">
                <Mail className="h-4 w-4" />
                info@sethuproperties.com
              </a>
              <a href="tel:+919876543210" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-phone">
                <Phone className="h-4 w-4" />
                +91 98765 43210
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services" data-testid="link-footer-property-management">
                  <span className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer">Property Management</span>
                </Link>
              </li>
              <li>
                <Link href="/services" data-testid="link-footer-real-estate">
                  <span className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer">Real Estate Sales</span>
                </Link>
              </li>
              <li>
                <Link href="/services" data-testid="link-footer-rental">
                  <span className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer">Rental & Leasing</span>
                </Link>
              </li>
              <li>
                <Link href="/services" data-testid="link-footer-investment">
                  <span className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer">Investment Advisory</span>
                </Link>
              </li>
              <li>
                <Link href="/services" data-testid="link-footer-valuation">
                  <span className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer">Valuation Services</span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Service Areas</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/service-areas" data-testid="link-footer-madurai">
                  <span className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer">Madurai</span>
                </Link>
              </li>
              <li>
                <Link href="/service-areas" data-testid="link-footer-karaikudi">
                  <span className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer">Karaikudi</span>
                </Link>
              </li>
              <li>
                <Link href="/service-areas" data-testid="link-footer-ramanathapuram">
                  <span className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer">Ramanathapuram</span>
                </Link>
              </li>
              <li>
                <Link href="/service-areas" data-testid="link-footer-paramakudi">
                  <span className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer">Paramakudi</span>
                </Link>
              </li>
              <li>
                <Link href="/service-areas" data-testid="link-footer-rajapalayam">
                  <span className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer">Rajapalayam</span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" data-testid="link-footer-about">
                  <span className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer">About Us</span>
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" data-testid="link-footer-how-it-works">
                  <span className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer">How It Works</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" data-testid="link-footer-contact">
                  <span className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer">Contact Us</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-sm text-muted-foreground">
          <p>© {currentYear} Sethu Properties. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
