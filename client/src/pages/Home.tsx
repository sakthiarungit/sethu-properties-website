import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Shield, Smartphone, Home as HomeIcon, TrendingUp, FileCheck, Users, ArrowRight, MapPin, Phone, Mail, CheckCircle } from "lucide-react";

export default function Home() {
  const services = [
    {
      icon: HomeIcon,
      title: "Property Management",
      description: "Professional care for your properties with maintenance, inspections, and tenant management.",
    },
    {
      icon: Building2,
      title: "Real Estate Sales",
      description: "Expert assistance in buying and selling residential and commercial properties.",
    },
    {
      icon: Users,
      title: "Rental & Leasing",
      description: "Tenant sourcing, verification, agreements, and professional rent collection services.",
    },
    {
      icon: TrendingUp,
      title: "Investment Advisory",
      description: "Strategic guidance on property investments and portfolio management.",
    },
    {
      icon: FileCheck,
      title: "Valuation Services",
      description: "Accurate property valuations based on current market data and analysis.",
    },
  ];

  const features = [
    {
      icon: Building2,
      title: "Local Expertise",
      description: "15+ years of experience in South Tamil Nadu real estate market",
    },
    {
      icon: Shield,
      title: "NRI-Friendly",
      description: "Specialized services for overseas property owners",
    },
    {
      icon: Smartphone,
      title: "Tech-Enabled",
      description: "Digital reports and online property monitoring",
    },
  ];

  const areas = ["Madurai", "Karaikudi", "Ramanathapuram", "Paramakudi", "Rajapalayam"];

  const stats = [
    { number: "500+", label: "Properties Managed" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "15+", label: "Years of Experience" },
  ];

  return (
    <div className="w-full min-h-screen bg-white">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16 sm:py-24 md:py-32 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <Badge className="bg-blue-500 text-white border-0 mb-4">Trusted Property Partner</Badge>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Your Real Estate Partner in South Tamil Nadu
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
              Professional property management and real estate services for NRIs, homeowners, and investors
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 w-full sm:w-auto">
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-blue-700 w-full sm:w-auto">
                  View Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="group bg-white p-6 sm:p-8 rounded-xl shadow-sm hover:shadow-lg border border-gray-100 transition-all duration-300 ease-out hover:-translate-y-1">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-50 rounded-lg mb-4 group-hover:bg-blue-100 transition-colors">
                  <feature.icon className="h-7 w-7 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Comprehensive property solutions designed to meet all your real estate needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <Card key={idx} className="group border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300 ease-out overflow-hidden">
                <CardHeader>
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-blue-50 group-hover:bg-blue-100 transition-colors mb-2">
                    <service.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed mb-4">{service.description}</p>
                  <Link href="/services">
                    <Button variant="ghost" className="p-0 h-auto text-blue-600 hover:text-blue-700 group-hover:translate-x-1 transition-transform">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="w-full py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900">Service Areas</h2>
            <p className="text-lg text-gray-600 leading-relaxed">We serve property owners across South Tamil Nadu</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
            {areas.map((area, idx) => (
              <div key={idx} className="group bg-white p-6 rounded-xl shadow-sm hover:shadow-md border border-gray-100 text-center transition-all duration-300 ease-out hover:-translate-y-1 cursor-pointer">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-50 rounded-lg mb-3 group-hover:bg-blue-100 transition-colors">
                  <MapPin className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-base font-semibold text-gray-900">{area}</h3>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <Link href="/service-areas">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300">
                View Detailed Areas
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {stats.map((stat, idx) => (
              <div key={idx} className="relative">
                <div className="text-4xl sm:text-5xl md:text-6xl font-bold mb-3">{stat.number}</div>
                <p className="text-base sm:text-lg text-blue-100 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="w-full py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900">Why Choose Sethu Properties?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Discover what sets us apart in the real estate industry</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div className="space-y-5">
              {[
                "Expert knowledge of South Tamil Nadu real estate market",
                "Transparent and ethical business practices",
                "Tech-enabled solutions for remote monitoring",
                "Dedicated support for NRI property owners",
                "Comprehensive property management services",
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 items-start group">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-green-200 transition-colors">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <p className="text-gray-700 text-base sm:text-lg leading-relaxed">{item}</p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl border border-blue-200 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Get Started Today</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Schedule a free consultation with our property experts. We're here to help with all your property needs.
              </p>
              <Link href="/contact">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white w-full font-semibold transition-all duration-300 hover:shadow-lg">
                  Contact Us Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="w-full py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">Get In Touch</h2>
            <p className="text-lg text-gray-600">We're always here to help and answer any questions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="group bg-white p-6 sm:p-8 rounded-xl shadow-sm hover:shadow-lg border border-gray-100 text-center transition-all duration-300 ease-out hover:-translate-y-1">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-50 rounded-lg mb-4 group-hover:bg-blue-100 transition-colors">
                <Phone className="h-7 w-7 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2 text-gray-900">Phone</h3>
              <a href="tel:+919876543210" className="text-gray-600 hover:text-blue-600 transition-colors">
                +91 98765 43210
              </a>
            </div>

            <div className="group bg-white p-6 sm:p-8 rounded-xl shadow-sm hover:shadow-lg border border-gray-100 text-center transition-all duration-300 ease-out hover:-translate-y-1">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-50 rounded-lg mb-4 group-hover:bg-blue-100 transition-colors">
                <Mail className="h-7 w-7 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2 text-gray-900">Email</h3>
              <a href="mailto:info@sethuproperties.com" className="text-gray-600 hover:text-blue-600 transition-colors break-all">
                info@sethuproperties.com
              </a>
            </div>

            <div className="group bg-white p-6 sm:p-8 rounded-xl shadow-sm hover:shadow-lg border border-gray-100 text-center transition-all duration-300 ease-out hover:-translate-y-1">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-50 rounded-lg mb-4 group-hover:bg-blue-100 transition-colors">
                <MapPin className="h-7 w-7 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2 text-gray-900">Hours</h3>
              <p className="text-gray-600">Mon-Sat: 9:00 AM - 6:00 PM</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
