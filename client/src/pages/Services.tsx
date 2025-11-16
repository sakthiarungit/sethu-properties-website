import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Home, Building2, Users, TrendingUp, FileCheck, CheckCircle2, ArrowRight } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Home,
      title: "Property Management Services",
      description: "We take care of your property like it's our own. Our end-to-end property management solutions help you maintain, monitor, and grow your property assets—without lifting a finger.",
      features: [
        "Residential Property Management (apartments, villas, independent homes)",
        "Plot Monitoring & Reporting",
        "NRI Property Care & Renting/Leasing",
        "Property Inspections & Appraisals",
        "Maintenance, Repairs & Upkeep",
        "Utility Management (Property Tax, Electricity, Water, etc.)",
        "Tenant Support (sourcing, onboarding, rent collection, complaint resolution)",
      ],
    },
    {
      icon: Building2,
      title: "Real Estate Sales",
      description: "Ready to sell or invest? We'll handle the process from start to finish. We help you buy or sell homes, plots, and commercial properties with complete transparency and local expertise.",
      features: [
        "Apartments, Villas, and Independent Home Sales",
        "Plot Sales & Development Advisory",
        "Commercial Property Sales & Leasing",
        "Market Analysis and Pricing Strategy",
        "Complete Documentation Support",
      ],
    },
    {
      icon: Users,
      title: "Rental & Leasing Solutions",
      description: "Hassle-free rental income, without the day-to-day stress. We manage tenant sourcing, background checks, rental agreements, and monthly rent collection so you can relax.",
      features: [
        "Tenant Identification & Verification",
        "Rental Documentation & Agreements",
        "Rent Collection & Deposit Management",
        "Lease Renewals & Legal Compliance",
        "Property Maintenance Coordination",
      ],
    },
    {
      icon: TrendingUp,
      title: "Investment Advisory",
      description: "Turn your property into a smart long-term asset. We guide investors and landowners on how to maximize returns, select the right opportunities, and make informed decisions.",
      features: [
        "ROI and Asset Management Consulting",
        "Land Banking Strategy",
        "Customized Investment Planning",
        "Market Trend Analysis",
        "Portfolio Optimization",
      ],
    },
    {
      icon: FileCheck,
      title: "Valuation Services",
      description: "Know your property's true market value. We provide independent assessments based on real-time market data and on-ground insights.",
      features: [
        "Residential Property Valuations",
        "Commercial Property Appraisals",
        "Market Intelligence & Price Trends Reports",
        "Comparative Market Analysis",
      ],
    },
  ];

  return (
    <div className="w-full min-h-screen bg-white">
      {/* Hero Section */}
      <section className="w-full py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6" data-testid="text-services-page-title">
              Our Services
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive property solutions designed to make ownership and investment stress-free
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="w-full py-12 sm:py-16 md:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border border-gray-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <service.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl md:text-2xl" data-testid={`text-service-${index}-title`}>
                      {service.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                    {service.description}
                  </p>
                  <div className="space-y-3 pt-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-3" data-testid={`feature-${index}-${featureIndex}`}>
                        <div className="flex-shrink-0 mt-1">
                          <CheckCircle2 className="h-5 w-5 text-green-600" />
                        </div>
                        <p className="text-gray-600 text-sm md:text-base">{feature}</p>
                      </div>
                    ))}
                  </div>
                  <Link href="/contact">
                    <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white" data-testid={`button-get-started-${index}`}>
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6" data-testid="text-cta-services-title">
            Ready to Experience Our Services?
          </h2>
          <p className="text-base sm:text-lg text-blue-100 max-w-2xl mx-auto mb-8">
            Let us help you manage, grow, and protect your property investments
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100" data-testid="button-cta-services">
              Schedule Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
