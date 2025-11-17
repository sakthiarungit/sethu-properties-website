import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Home, Building2, Users, TrendingUp, FileCheck, CheckCircle2, ArrowRight } from "lucide-react";
import propertyManagementImg from "@assets/generated_images/Property_management_service_898311ef.png";
import realEstateSalesImg from "@assets/generated_images/Real_estate_sales_service_ab185173.png";
import rentalLeasingImg from "@assets/generated_images/Rental_leasing_service_2be045f2.png";
import investmentAdvisoryImg from "@assets/generated_images/Investment_advisory_service_07764d92.png";
import valuationServicesImg from "@assets/generated_images/Valuation_service_9ffafc1e.png";
import { LazyImage } from "@/components/LazyImage";
import { ScrollReveal, ScrollRevealContainer } from "@/components/ScrollReveal";
import { fadeInUp, staggerContainer, staggerItem, cardHover } from "@/lib/animations";

export default function Services() {
  const services = [
    {
      icon: Home,
      title: "Property Management Services",
      description: "We take care of your property like it's our own. Our end-to-end property management solutions help you maintain, monitor, and grow your property assets—without lifting a finger.",
      image: propertyManagementImg,
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
      image: realEstateSalesImg,
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
      image: rentalLeasingImg,
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
      image: investmentAdvisoryImg,
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
      image: valuationServicesImg,
      features: [
        "Residential Property Valuations",
        "Commercial Property Appraisals",
        "Market Intelligence & Price Trends Reports",
        "Comparative Market Analysis",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <ScrollReveal variants={fadeInUp} className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6" data-testid="text-services-page-title">
              Our Services
            </h1>
            <p className="text-xl text-muted-foreground">
              Comprehensive property solutions designed to make ownership and investment stress-free
            </p>
          </ScrollReveal>
        </div>
      </section>

      {services.map((service, index) => (
        <motion.section
          key={index}
          className={`py-20 ${index % 2 === 0 ? "bg-background" : "bg-muted/30"}`}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="container mx-auto px-6">
            <div
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <motion.div
                className={index % 2 === 1 ? "lg:order-2" : ""}
                initial={{ opacity: 0, x: index % 2 === 1 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="flex items-center gap-3 mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className="w-14 h-14 rounded-md bg-primary/10 flex items-center justify-center"
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <service.icon className="h-7 w-7 text-primary" />
                  </motion.div>
                  <h2 className="text-3xl font-bold" data-testid={`text-service-${index}-title`}>
                    {service.title}
                  </h2>
                </motion.div>

                <motion.p
                  className="text-lg text-muted-foreground mb-6 leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  {service.description}
                </motion.p>

                <ScrollRevealContainer variants={staggerContainer} className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      variants={staggerItem}
                      className="flex items-start gap-3"
                      data-testid={`feature-${index}-${featureIndex}`}
                    >
                      <motion.div
                        className="flex-shrink-0 mt-1"
                        whileHover={{ scale: 1.2 }}
                        transition={{ duration: 0.3 }}
                      >
                        <CheckCircle2 className="h-5 w-5 text-primary" />
                      </motion.div>
                      <p className="text-muted-foreground">{feature}</p>
                    </motion.div>
                  ))}
                </ScrollRevealContainer>

                <Link href="/contact">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      className="bg-primary text-primary-foreground hover:shadow-lg transition-shadow"
                      data-testid={`button-get-started-${index}`}
                    >
                      Get Started
                      <motion.span initial={{ x: 0 }} whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </motion.span>
                    </Button>
                  </motion.div>
                </Link>
              </motion.div>

              <motion.div
                className={index % 2 === 1 ? "lg:order-1" : ""}
                initial={{ opacity: 0, x: index % 2 === 1 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <motion.div
                  whileHover="hover"
                  initial="rest"
                  variants={cardHover}
                  className="h-full"
                >
                  <LazyImage
                    src={service.image}
                    alt={service.title}
                    className="rounded-lg shadow-lg w-full h-auto"
                    aspectRatio="video"
                    priority={index < 2}
                    data-testid={`img-service-${index}`}
                  />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.section>
      ))}

      <motion.section
        className="py-20 bg-primary text-primary-foreground"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-6 text-center">
          <ScrollReveal variants={fadeInUp}>
            <h2 className="text-4xl font-bold mb-4" data-testid="text-cta-services-title">
              Ready to Experience Our Services?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Let us help you manage, grow, and protect your property investments
            </p>
            <Link href="/contact">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 border-0"
                  data-testid="button-cta-services"
                >
                  Schedule Free Consultation
                  <motion.span initial={{ x: 0 }} whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </motion.span>
                </Button>
              </motion.div>
            </Link>
          </ScrollReveal>
        </div>
      </motion.section>
    </div>
  );
}
