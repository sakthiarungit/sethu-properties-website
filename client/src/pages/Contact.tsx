import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock, MessageCircle } from "lucide-react";

export default function Contact() {
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
      icon: MessageCircle,
      title: "WhatsApp",
      content: "+91 98765 43210",
      link: "https://wa.me/919876543210",
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
      {/* Hero Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-muted-foreground">
              Get in touch with us for a free consultation. We're here to help with all your property needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">Contact Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <info.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-lg mb-1">{info.title}</CardTitle>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-muted-foreground hover:text-foreground transition-colors"
                          >
                            {info.content}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">{info.content}</p>
                        )}
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
