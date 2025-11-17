import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { insertContactInquirySchema, type InsertContactInquiry } from "@/lib/schema";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { Mail, Phone, MapPin, Clock, Loader2, CheckCircle2 } from "lucide-react";
import { ScrollReveal, ScrollRevealContainer } from "@/components/ScrollReveal";
import { fadeInUp, staggerContainer, staggerItem, cardHover } from "@/lib/animations";

export default function Contact() {
  const { toast } = useToast();

  const form = useForm<InsertContactInquiry>({
    resolver: zodResolver(insertContactInquirySchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      propertyType: "",
      serviceInterest: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContactInquiry) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you within 24 hours.",
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or contact us directly.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContactInquiry) => {
    contactMutation.mutate(data);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "info@sethuproperties.com",
      link: "mailto:info@sethuproperties.com",
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+91 98765 43210",
      link: "tel:+919876543210",
    },
    {
      icon: MapPin,
      title: "Service Areas",
      content: "Madurai, Karaikudi, Ramanathapuram, Paramakudi, Rajapalayam",
      link: null,
    },
    {
      icon: Clock,
      title: "Office Hours",
      content: "Monday - Saturday: 9:00 AM - 6:00 PM",
      link: null,
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <ScrollReveal variants={fadeInUp} className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6" data-testid="text-contact-title">
              Contact Us
            </h1>
            <p className="text-xl text-muted-foreground">
              Get in touch with us for a free consultation. We're here to help with all your property needs.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <motion.h2
                className="text-3xl font-bold mb-6"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                data-testid="text-form-title"
              >
                Send Us a Message
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Card className="shadow-lg">
                  <CardContent className="pt-6">
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                      >
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field, fieldState }) => (
                            <FormItem>
                              <FormLabel>Name *</FormLabel>
                              <FormControl>
                                <motion.div whileFocus={{ scale: 1.02 }}>
                                  <Input
                                    placeholder="Your full name"
                                    {...field}
                                    data-testid="input-name"
                                    className={fieldState.error ? "border-destructive" : ""}
                                  />
                                </motion.div>
                              </FormControl>
                              {fieldState.error && (
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.2 }}>
                                  <FormMessage />
                                </motion.div>
                              )}
                            </FormItem>
                          )}
                        />
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.05 }}
                      >
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field, fieldState }) => (
                            <FormItem>
                              <FormLabel>Email *</FormLabel>
                              <FormControl>
                                <motion.div whileFocus={{ scale: 1.02 }}>
                                  <Input
                                    type="email"
                                    placeholder="your.email@example.com"
                                    {...field}
                                    data-testid="input-email"
                                    className={fieldState.error ? "border-destructive" : ""}
                                  />
                                </motion.div>
                              </FormControl>
                              {fieldState.error && (
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.2 }}>
                                  <FormMessage />
                                </motion.div>
                              )}
                            </FormItem>
                          )}
                        />
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                      >
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field, fieldState }) => (
                            <FormItem>
                              <FormLabel>Phone Number *</FormLabel>
                              <FormControl>
                                <motion.div whileFocus={{ scale: 1.02 }}>
                                  <Input
                                    type="tel"
                                    placeholder="+91 98765 43210"
                                    {...field}
                                    data-testid="input-phone"
                                    className={fieldState.error ? "border-destructive" : ""}
                                  />
                                </motion.div>
                              </FormControl>
                              {fieldState.error && (
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.2 }}>
                                  <FormMessage />
                                </motion.div>
                              )}
                            </FormItem>
                          )}
                        />
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.15 }}
                      >
                        <FormField
                          control={form.control}
                          name="propertyType"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Property Type</FormLabel>
                              <Select onValueChange={field.onChange} value={field.value || undefined}>
                                <FormControl>
                                  <SelectTrigger data-testid="select-property-type">
                                    <SelectValue placeholder="Select property type" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="apartment">Apartment</SelectItem>
                                  <SelectItem value="villa">Villa</SelectItem>
                                  <SelectItem value="independent-home">Independent Home</SelectItem>
                                  <SelectItem value="plot">Plot/Land</SelectItem>
                                  <SelectItem value="commercial">Commercial Property</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                      >
                        <FormField
                          control={form.control}
                          name="serviceInterest"
                          render={({ field, fieldState }) => (
                            <FormItem>
                              <FormLabel>Service Interest *</FormLabel>
                              <Select onValueChange={field.onChange} value={field.value}>
                                <FormControl>
                                  <SelectTrigger data-testid="select-service-interest">
                                    <SelectValue placeholder="Select a service" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="property-management">Property Management</SelectItem>
                                  <SelectItem value="real-estate-sales">Real Estate Sales</SelectItem>
                                  <SelectItem value="rental-leasing">Rental & Leasing</SelectItem>
                                  <SelectItem value="investment-advisory">Investment Advisory</SelectItem>
                                  <SelectItem value="valuation">Valuation Services</SelectItem>
                                  <SelectItem value="general-inquiry">General Inquiry</SelectItem>
                                </SelectContent>
                              </Select>
                              {fieldState.error && (
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.2 }}>
                                  <FormMessage />
                                </motion.div>
                              )}
                            </FormItem>
                          )}
                        />
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.25 }}
                      >
                        <FormField
                          control={form.control}
                          name="message"
                          render={({ field, fieldState }) => (
                            <FormItem>
                              <FormLabel>Message *</FormLabel>
                              <FormControl>
                                <Textarea
                                  placeholder="Tell us about your property needs..."
                                  className={`min-h-[120px] ${fieldState.error ? "border-destructive" : ""}`}
                                  {...field}
                                  data-testid="textarea-message"
                                />
                              </FormControl>
                              {fieldState.error && (
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.2 }}>
                                  <FormMessage />
                                </motion.div>
                              )}
                            </FormItem>
                          )}
                        />
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.3 }}
                      >
                        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                          <Button
                            type="submit"
                            className="w-full bg-primary text-primary-foreground hover:shadow-lg transition-shadow"
                            disabled={contactMutation.isPending}
                            data-testid="button-submit-contact"
                          >
                            {contactMutation.isPending ? (
                              <>
                                <motion.span animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity }}>
                                  <Loader2 className="mr-2 h-4 w-4" />
                                </motion.span>
                                Sending...
                              </>
                            ) : contactMutation.isSuccess ? (
                              <>
                                <CheckCircle2 className="mr-2 h-4 w-4" />
                                Message Sent!
                              </>
                            ) : (
                              "Send Message"
                            )}
                          </Button>
                        </motion.div>
                      </motion.div>
                    </form>
                  </Form>
                </CardContent>
              </Card>
              </motion.div>
            </div>

            <div>
              <motion.h2
                className="text-3xl font-bold mb-6"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                data-testid="text-contact-info-title"
              >
                Contact Information
              </motion.h2>
              <ScrollRevealContainer variants={staggerContainer} className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div key={index} variants={staggerItem}>
                    <motion.div
                      whileHover="hover"
                      initial="rest"
                      variants={cardHover}
                    >
                      <Card className="hover-elevate cursor-pointer transition-all duration-300" data-testid={`card-contact-info-${index}`}>
                        <CardHeader>
                          <div className="flex items-start gap-4">
                            <motion.div
                              className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0"
                              whileHover={{ scale: 1.2, rotate: 10 }}
                              transition={{ duration: 0.3 }}
                            >
                              <info.icon className="h-6 w-6 text-primary" />
                            </motion.div>
                            <div>
                              <CardTitle className="text-lg mb-1">{info.title}</CardTitle>
                              {info.link ? (
                                <motion.a
                                  href={info.link}
                                  className="text-muted-foreground hover:text-foreground transition-colors"
                                  whileHover={{ x: 5 }}
                                >
                                  {info.content}
                                </motion.a>
                              ) : (
                                <p className="text-muted-foreground">{info.content}</p>
                              )}
                            </div>
                          </div>
                        </CardHeader>
                      </Card>
                    </motion.div>
                  </motion.div>
                ))}
              </ScrollRevealContainer>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-6"
              >
                <Card className="bg-primary text-primary-foreground border-0 shadow-lg" data-testid="card-why-choose">
                  <CardHeader>
                    <CardTitle>Why Choose Sethu Properties?</CardTitle>
                    <CardDescription className="text-primary-foreground/80">
                      We combine deep local knowledge with global standards, offering transparent, tech-enabled property services that you can trust.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
