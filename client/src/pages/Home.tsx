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
      <section className="w-full py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="bg-white p-6 sm:p-8 rounded-lg shadow-sm border border-gray-200">
                <feature.icon className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full py-12 sm:py-16 md:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive property solutions designed to meet all your real estate needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <Card key={idx} className="border border-gray-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <service.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl mt-4">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{service.description}</p>
                  <Link href="/services">
                    <Button variant="ghost" className="p-0 h-auto text-blue-600 hover:text-blue-700 mt-4">
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
      <section className="w-full py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Service Areas</h2>
            <p className="text-lg text-gray-600">We serve property owners across South Tamil Nadu</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
            {areas.map((area, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
                <MapPin className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <h3 className="text-lg font-semibold">{area}</h3>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/service-areas">
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                View Detailed Areas
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-blue-600 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {stats.map((stat, idx) => (
              <div key={idx}>
                <div className="text-4xl sm:text-5xl font-bold mb-2">{stat.number}</div>
                <p className="text-lg text-blue-100">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="w-full py-12 sm:py-16 md:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Why Choose Sethu Properties?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              {[
                "Expert knowledge of South Tamil Nadu real estate market",
                "Transparent and ethical business practices",
                "Tech-enabled solutions for remote monitoring",
                "Dedicated support for NRI property owners",
                "Comprehensive property management services",
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700 text-lg">{item}</p>
                </div>
              ))}
            </div>

            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
              <h3 className="text-2xl font-bold mb-6">Get Started Today</h3>
              <p className="text-gray-600 mb-6">
                Schedule a free consultation with our property experts. We're here to help with all your property needs.
              </p>
              <Link href="/contact">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white w-full">
                  Contact Us Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="w-full py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get In Touch</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-sm border border-gray-200 text-center">
              <Phone className="h-8 w-8 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Phone</h3>
              <p className="text-gray-600">+91 98765 43210</p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-sm border border-gray-200 text-center">
              <Mail className="h-8 w-8 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-gray-600">info@sethuproperties.com</p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-sm border border-gray-200 text-center">
              <MapPin className="h-8 w-8 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Hours</h3>
              <p className="text-gray-600">Mon-Sat: 9:00 AM - 6:00 PM</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
