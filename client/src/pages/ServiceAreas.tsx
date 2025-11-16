import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { MapPin, TrendingUp, Building2, Users, Home, ArrowRight } from "lucide-react";

export default function ServiceAreas() {
  const serviceAreas = [
    {
      name: "Madurai",
      icon: Building2,
      description: "A fast-growing urban hub ideal for residential investments, commercial leasing, and plot development. Our team manages properties and sales across the city and suburbs.",
      highlights: [
        "Major urban center with excellent infrastructure",
        "Strong demand for residential and commercial properties",
        "Growing IT and industrial sectors",
        "Excellent connectivity and amenities",
      ],
    },
    {
      name: "Karaikudi",
      icon: Home,
      description: "We assist with traditional homes, modern apartments, and land parcels in this culturally rich town, offering tailored solutions for both buyers and sellers.",
      highlights: [
        "Rich cultural heritage and traditional architecture",
        "Growing modern residential developments",
        "Strong NRI interest in heritage properties",
        "Balanced mix of traditional and contemporary living",
      ],
    },
    {
      name: "Ramanathapuram",
      icon: Users,
      description: "From family-owned plots to NRI-managed properties, we offer property care, sales, and rental support in this emerging district.",
      highlights: [
        "Emerging real estate market with growth potential",
        "High NRI property ownership",
        "Coastal location with unique opportunities",
        "Affordable property prices",
      ],
    },
    {
      name: "Paramakudi",
      icon: TrendingUp,
      description: "With its growing residential demand, we help property owners lease, sell, or manage homes and plots with ease.",
      highlights: [
        "Rapidly developing residential market",
        "Increasing infrastructure development",
        "Growing demand for rental properties",
        "Affordable investment opportunities",
      ],
    },
    {
      name: "Rajapalayam",
      icon: MapPin,
      description: "Known for its scenic surroundings and developing infrastructure, we support residential and commercial property investments here.",
      highlights: [
        "Scenic location with natural beauty",
        "Developing industrial and commercial zones",
        "Growing residential communities",
        "Strategic location for investments",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="py-12 sm:py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6" data-testid="text-service-areas-page-title">Our Service Areas</h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground">
              Serving property owners across South Tamil Nadu with local expertise and personalized service
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
            {serviceAreas.map((area, index) => (
              <Card key={index} className="hover-elevate transition-all duration-300 border-none shadow-sm hover:shadow-md" data-testid={`card-service-area-${index}`}>
                <CardHeader>
                  <div className="flex items-center gap-3 sm:gap-4 mb-2">
                    <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <area.icon className="h-6 sm:h-7 w-6 sm:w-7 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg sm:text-2xl">{area.name}</CardTitle>
                    </div>
                  </div>
                  <CardDescription className="text-sm sm:text-base leading-relaxed pt-2">
                    {area.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm text-muted-foreground mb-3">Key Highlights:</h4>
                    <ul className="space-y-2">
                      {area.highlights.map((highlight, hIndex) => (
                        <li key={hIndex} className="flex items-start gap-2">
                          <MapPin className="h-4 w-4 text-accent flex-shrink-0 mt-1" />
                          <span className="text-sm text-muted-foreground">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl sm:text-3xl text-center" data-testid="text-expanding-title">Continuously Expanding</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-4 sm:mb-6">
                  We are continuously expanding across South Tamil Nadu to serve more communities with personalized property solutions. Our local expertise combined with global standards ensures that wherever you own property, we can help you manage and grow your investments.
                </p>
                <p className="text-sm sm:text-base text-muted-foreground">
                  If your area isn't listed above, please contact us to discuss how we can assist you.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4" data-testid="text-cta-areas-title">Own Property in South Tamil Nadu?</h2>
          <p className="text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto opacity-90">
            Let us help you manage, sell, or lease your property with local expertise
          </p>
          <Link href="/contact">
            <Button size="lg" variant="outline" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 border-0 text-sm sm:text-base w-full sm:w-auto" data-testid="button-cta-areas">
              Contact Us Today
              <ArrowRight className="ml-2 h-4 sm:h-5 w-4 sm:w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
