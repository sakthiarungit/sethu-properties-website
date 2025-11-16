import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { MessageCircle, ClipboardCheck, FileSignature, Cog, BarChart3, Headphones, Smartphone, Shield, Cloud, Video, ArrowRight } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      icon: MessageCircle,
      title: "Free Consultation",
      description: "We begin by understanding your goals—whether it's managing a property, finding tenants, selling land, or investing. You can speak to us over the phone, WhatsApp, or schedule a call from anywhere in the world.",
      details: [
        "Schedule a call at your convenience",
        "Discuss your property goals and needs",
        "Get expert advice tailored to your situation",
        "No obligation, completely free",
      ],
    },
    {
      number: 2,
      icon: ClipboardCheck,
      title: "Property or Investment Assessment",
      description: "We inspect your property (or evaluate your goals if you're an investor). Based on your needs, we provide a service plan, pricing, and expected timelines.",
      details: [
        "Comprehensive property inspection",
        "Market analysis and valuation",
        "Custom service plan creation",
        "Transparent pricing and timeline",
      ],
    },
    {
      number: 3,
      icon: FileSignature,
      title: "Agreement & Onboarding",
      description: "Once you're ready to proceed, we prepare a transparent service agreement. We then onboard your property into our system and assign a dedicated relationship manager.",
      details: [
        "Clear service agreement with no hidden terms",
        "Property registration in our system",
        "Dedicated relationship manager assigned",
        "Complete documentation support",
      ],
    },
    {
      number: 4,
      icon: Cog,
      title: "Service Execution",
      description: "We begin managing your property or handling your sale/lease based on the service selected. This may include listing, tenant management, maintenance coordination, or investment advisory.",
      details: [
        "Professional property listing and marketing",
        "Tenant sourcing and management",
        "Maintenance and repair coordination",
        "Investment strategy implementation",
      ],
    },
    {
      number: 5,
      icon: BarChart3,
      title: "Regular Updates & Reports",
      description: "You receive monthly or quarterly reports based on your plan. These include property status, rental income updates, maintenance summaries, and market insights (if applicable). All documents and reports can be accessed digitally.",
      details: [
        "Monthly/quarterly comprehensive reports",
        "Property status updates",
        "Rental income tracking",
        "Digital document access",
      ],
    },
    {
      number: 6,
      icon: Headphones,
      title: "Closure or Ongoing Support",
      description: "For one-time services like property sales, we handle the closing and documentation. For ongoing management or advisory services, we continue supporting you with regular communication and updates.",
      details: [
        "Complete transaction support",
        "Legal documentation assistance",
        "Ongoing property care",
        "24/7 customer support",
      ],
    },
  ];

  const techFeatures = [
    {
      icon: Cloud,
      title: "Secure Digital Records",
      description: "All your property documents stored safely in the cloud",
    },
    {
      icon: BarChart3,
      title: "Online Rent Tracking",
      description: "Real-time updates on rental income and billing",
    },
    {
      icon: Video,
      title: "Remote Video Walkthroughs",
      description: "Visual property inspections from anywhere in the world",
    },
    {
      icon: Smartphone,
      title: "WhatsApp & Email Support",
      description: "Quick responses and instant communication",
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="py-12 sm:py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6" data-testid="text-how-it-works-title">How It Works</h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground">
              Working with Sethu Properties is easy, transparent, and worry-free. Here's how we support you at every step.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-5xl mx-auto space-y-16">
            {steps.map((step, index) => (
              <div key={index} className="relative" data-testid={`step-${index}`}>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute left-[30px] top-[80px] bottom-[-80px] w-0.5 bg-border" />
                )}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  <div className="lg:col-span-2 flex lg:flex-col items-center lg:items-start gap-4">
                    <div className="relative">
                      <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold shadow-lg">
                        {step.number}
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-10">
                    <Card className="hover-elevate">
                      <CardHeader>
                        <div className="flex items-center gap-4 mb-2">
                          <div className="w-12 h-12 rounded-md bg-accent/10 flex items-center justify-center flex-shrink-0">
                            <step.icon className="h-6 w-6 text-accent" />
                          </div>
                          <CardTitle className="text-2xl">{step.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-lg text-muted-foreground leading-relaxed">
                          {step.description}
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-4">
                          {step.details.map((detail, detailIndex) => (
                            <div key={detailIndex} className="flex items-start gap-2">
                              <Shield className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                              <p className="text-sm text-muted-foreground">{detail}</p>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4" data-testid="text-tech-features-title">Technology That Keeps You Informed</h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              We leverage modern technology to provide you with transparency and convenience
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
            {techFeatures.map((feature, index) => (
              <Card key={index} className="hover-elevate transition-all duration-300 border-none shadow-sm hover:shadow-md" data-testid={`card-tech-${index}`}>
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3 sm:mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-base sm:text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs sm:text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4" data-testid="text-cta-how-title">Ready to Experience Our Process?</h2>
          <p className="text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto opacity-90">
            Start with a free consultation and see how we can help you
          </p>
          <Link href="/contact">
            <Button size="lg" variant="outline" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 border-0 text-sm sm:text-base w-full sm:w-auto" data-testid="button-cta-how">
              Get Started Today
              <ArrowRight className="ml-2 h-4 sm:h-5 w-4 sm:w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
