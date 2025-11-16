import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Shield, Smartphone, Home as HomeIcon, TrendingUp, FileCheck, Users, CheckCircle2, ArrowRight } from "lucide-react";

const heroImage = "/Hero_image_modern_apartments_ef8358ce.png";

export default function Home() {
  const valuePropositions = [
    {
      icon: Building2,
      title: "Deep Local Knowledge",
      description: "Expert understanding of South Tamil Nadu's real estate market with years of on-ground experience.",
    },
    {
      icon: Shield,
      title: "NRI-Friendly Services",
      description: "Comprehensive property care and management solutions designed specifically for overseas property owners.",
    },
    {
      icon: Smartphone,
      title: "Tech-Enabled Approach",
      description: "Digital reports, remote monitoring, and online tracking systems for complete transparency.",
    },
  ];

  const services = [
    {
      icon: HomeIcon,
      title: "Property Management",
      description: "End-to-end property care including maintenance, inspections, tenant management, and utility handling.",
      link: "/services",
    },
    {
      icon: Building2,
      title: "Real Estate Sales",
      description: "Expert assistance for buying and selling apartments, villas, plots, and commercial properties.",
      link: "/services",
    },
    {
      icon: Users,
      title: "Rental & Leasing",
      description: "Hassle-free tenant sourcing, background verification, agreements, and rent collection.",
      link: "/services",
    },
    {
      icon: TrendingUp,
      title: "Investment Advisory",
      description: "Strategic guidance on property investments, ROI analysis, and portfolio management.",
      link: "/services",
    },
    {
      icon: FileCheck,
      title: "Valuation Services",
      description: "Independent property assessments based on real-time market data and insights.",
      link: "/services",
    },
  ];

  const steps = [
    {
      number: "1",
      title: "Free Consultation",
      description: "Share your property goals and needs with us.",
    },
    {
      number: "2",
      title: "Assessment",
      description: "We evaluate your property and create a custom plan.",
    },
    {
      number: "3",
      title: "Agreement",
      description: "Transparent service agreement and onboarding.",
    },
    {
      number: "4",
      title: "Execution",
      description: "We manage your property with expert care.",
    },
    {
      number: "5",
      title: "Updates",
      description: "Regular reports and digital documentation.",
    },
    {
      number: "6",
      title: "Support",
      description: "Ongoing assistance and communication.",
    },
  ];

  const areas = [
    { name: "Madurai", description: "Fast-growing urban hub for residential and commercial investments" },
    { name: "Karaikudi", description: "Traditional homes and modern apartments in a culturally rich town" },
    { name: "Ramanathapuram", description: "Emerging district with family-owned plots and NRI properties" },
    { name: "Paramakudi", description: "Growing residential demand with homes and plots" },
    { name: "Rajapalayam", description: "Scenic surroundings with developing infrastructure" },
  ];

  const stats = [
    { value: "500+", label: "Properties Managed" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "15+", label: "Years Experience" },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Modern residential apartments in South Tamil Nadu"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center text-white">
          <Badge className="mb-6 bg-accent text-accent-foreground border-0" data-testid="badge-trust">
            Trusted by 500+ Property Owners Worldwide
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight" data-testid="text-hero-title">
            Your Trusted Property Partner in South Tamil Nadu
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white/90" data-testid="text-hero-subtitle">
            Transparent, tech-enabled property management and real estate services for NRIs, homeowners, and investors
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="default" className="bg-primary text-primary-foreground border border-primary-border text-base" data-testid="button-hero-consultation">
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/services">
              <Button size="lg" variant="outline" className="bg-background/10 backdrop-blur-md border-white/30 text-white hover:bg-background/20 text-base" data-testid="button-hero-services">
                Explore Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {valuePropositions.map((prop, index) => (
              <Card key={index} className="hover-elevate" data-testid={`card-value-prop-${index}`}>
                <CardHeader>
                  <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-4">
                    <prop.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{prop.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{prop.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4" data-testid="text-services-title">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive property solutions designed to make ownership and investment stress-free
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover-elevate" data-testid={`card-service-${index}`}>
                <CardHeader>
                  <div className="w-12 h-12 rounded-md bg-accent/10 flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">{service.description}</CardDescription>
                  <Link href={service.link}>
                    <Button variant="ghost" className="p-0 h-auto text-primary hover:text-primary/80" data-testid={`button-learn-more-${index}`}>
                      Learn More <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4" data-testid="text-how-it-works-title">How It Works</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A simple, transparent process from consultation to ongoing support
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {steps.map((step, index) => (
              <div key={index} className="text-center" data-testid={`step-${index}`}>
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.number}
                </div>
                <h3 className="font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/how-it-works">
              <Button variant="outline" data-testid="button-view-details">
                View Detailed Process
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4" data-testid="text-service-areas-title">Our Service Areas</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Serving property owners across South Tamil Nadu
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {areas.map((area, index) => (
              <Card key={index} className="hover-elevate" data-testid={`card-area-${index}`}>
                <CardHeader>
                  <CardTitle className="text-lg">{area.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm">{area.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/service-areas">
              <Button variant="outline" data-testid="button-view-all-areas">
                View All Service Areas
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} data-testid={`stat-${index}`}>
                <div className="text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4" data-testid="text-cta-title">Ready to Get Started?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Schedule a free consultation with our property experts today
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-primary text-primary-foreground" data-testid="button-cta-contact">
              Contact Us Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
