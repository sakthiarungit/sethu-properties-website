import { Link } from "wouter";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-gray-900 text-white mt-12 sm:mt-16 md:mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="/logo.png" alt="Sethu Properties" className="h-8 sm:h-9 w-auto" />
              <span className="text-base sm:text-lg font-bold">Sethu Properties</span>
            </div>
            <p className="text-xs sm:text-sm text-gray-300 mb-5">
              Your trusted property partner in South Tamil Nadu, delivering transparent and tech-enabled real estate services.
            </p>
            <div className="flex flex-col gap-3 text-xs sm:text-sm">
              <a href="mailto:info@sethuproperties.com" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors" data-testid="link-footer-email">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span className="break-all">info@sethuproperties.com</span>
              </a>
              <a href="tel:+919876543210" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors" data-testid="link-footer-phone">
                <Phone className="h-4 w-4 flex-shrink-0" />
                +91 98765 43210
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-sm sm:text-base">Services</h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link href="/services" data-testid="link-footer-property-management">
                  <span className="text-gray-300 hover:text-white transition-colors cursor-pointer">Property Management</span>
                </Link>
              </li>
              <li>
                <Link href="/services" data-testid="link-footer-real-estate">
                  <span className="text-gray-300 hover:text-white transition-colors cursor-pointer">Real Estate Sales</span>
                </Link>
              </li>
              <li>
                <Link href="/services" data-testid="link-footer-rental">
                  <span className="text-gray-300 hover:text-white transition-colors cursor-pointer">Rental & Leasing</span>
                </Link>
              </li>
              <li>
                <Link href="/services" data-testid="link-footer-investment">
                  <span className="text-gray-300 hover:text-white transition-colors cursor-pointer">Investment Advisory</span>
                </Link>
              </li>
              <li>
                <Link href="/services" data-testid="link-footer-valuation">
                  <span className="text-gray-300 hover:text-white transition-colors cursor-pointer">Valuation Services</span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-sm sm:text-base">Service Areas</h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link href="/service-areas" data-testid="link-footer-madurai">
                  <span className="text-gray-300 hover:text-white transition-colors cursor-pointer">Madurai</span>
                </Link>
              </li>
              <li>
                <Link href="/service-areas" data-testid="link-footer-karaikudi">
                  <span className="text-gray-300 hover:text-white transition-colors cursor-pointer">Karaikudi</span>
                </Link>
              </li>
              <li>
                <Link href="/service-areas" data-testid="link-footer-ramanathapuram">
                  <span className="text-gray-300 hover:text-white transition-colors cursor-pointer">Ramanathapuram</span>
                </Link>
              </li>
              <li>
                <Link href="/service-areas" data-testid="link-footer-paramakudi">
                  <span className="text-gray-300 hover:text-white transition-colors cursor-pointer">Paramakudi</span>
                </Link>
              </li>
              <li>
                <Link href="/service-areas" data-testid="link-footer-rajapalayam">
                  <span className="text-gray-300 hover:text-white transition-colors cursor-pointer">Rajapalayam</span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-sm sm:text-base">Company</h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link href="/about" data-testid="link-footer-about">
                  <span className="text-gray-300 hover:text-white transition-colors cursor-pointer">About Us</span>
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" data-testid="link-footer-how-it-works">
                  <span className="text-gray-300 hover:text-white transition-colors cursor-pointer">How It Works</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" data-testid="link-footer-contact">
                  <span className="text-gray-300 hover:text-white transition-colors cursor-pointer">Contact Us</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 sm:mt-10 pt-6 sm:pt-8 text-center text-xs sm:text-sm text-gray-400">
          <p>© {currentYear} Sethu Properties. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
