import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Heart, Lightbulb, TrendingUp, Users, CheckCircle2 } from "lucide-react";

export default function About() {
  const coreValues = [
    {
      icon: Shield,
      title: "Trust & Integrity",
      description: "We do what's right—even when no one's watching.",
    },
    {
      icon: Heart,
      title: "Client-Centric Excellence",
      description: "Your goals are our priority, and your success is our success.",
    },
    {
      icon: Lightbulb,
      title: "Innovation & Technology",
      description: "We use smart tools to make real estate simple and accessible.",
    },
    {
      icon: TrendingUp,
      title: "Sustainable & Ethical Growth",
      description: "We grow with responsibility, care, and long-term vision.",
    },
    {
      icon: Users,
      title: "Commitment to Community & Legacy",
      description: "We're building more than properties—we're building futures.",
    },
  ];

  const reasons = [
    "Deep Local Knowledge with Global Standards",
    "Transparent Processes You Can Rely On",
    "Personalized Support for Every Client",
    "Trusted by NRIs, Homeowners, and Investors",
    "Tech-Enabled, Human-Centered Approach",
  ];

  return (
    <div className="min-h-screen">
      <section className="py-12 sm:py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6" data-testid="text-about-title">About Sethu Properties</h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground">
              Building trust through transparent, technology-enabled property services
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8" data-testid="text-our-story-title">Our Story</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Sethu Properties was founded with a simple mission—to make real estate transparent, dependable, and client-focused. With deep roots in South Tamil Nadu and strong family values, we saw an opportunity to offer something different: a real estate partner that truly cares.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Whether you live nearby or overseas, our goal is to help you manage, grow, and protect your property assets with trust and professionalism.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-3xl" data-testid="text-vision-title">Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To become South India's most trusted real estate partner by delivering transparent, technology-enabled property services that grow with our clients' aspirations.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-3xl" data-testid="text-mission-title">Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  At Sethu Properties, our mission is to build lifelong relationships through honesty, care, and excellence. We empower property owners, NRIs, and investors with reliable, tech-enabled real estate services that meet global standards and respect local values.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4" data-testid="text-core-values-title">Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {coreValues.map((value, index) => (
              <Card key={index} className="hover-elevate" data-testid={`card-value-${index}`}>
                <CardHeader>
                  <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-4">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center" data-testid="text-why-choose-title">Why Sethu Properties</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {reasons.map((reason, index) => (
                <div key={index} className="flex items-start gap-3" data-testid={`reason-${index}`}>
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                  </div>
                  <p className="text-lg">{reason}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
