import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: ""
  });

  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    toast({
      title: "Message Sent!",
      description: "Thank you for your inquiry. We'll get back to you within 24 hours.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      service: "",
      message: ""
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "info@prestigedata.io",
      subtitle: "General inquiries"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+1 (555) 123-4567",
      subtitle: "Mon-Fri 9AM-6PM EST"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "123 Data Street, Suite 100",
      subtitle: "New York, NY 10001"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Monday - Friday",
      subtitle: "9:00 AM - 6:00 PM EST"
    }
  ];

  const services = [
    "Data Analytics & Visualization",
    "Business Intelligence",
    "Process Automation",
    "Data Infrastructure",
    "Predictive Analytics",
    "Data Security & Compliance",
    "General Inquiry"
  ];

  return (
    <>
      <SEO 
        title="Contact PrestigeData.io - Get Your Free Data Consultation"
        description="Contact PrestigeData.io for expert data analytics consulting. Get a free consultation to discuss your data challenges and custom solutions. Available 24/7."
        keywords="contact data analytics, free consultation, data consulting contact, business intelligence support"
        canonical="https://prestigedata.io/contact"
      />
      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section className="pt-24 pb-16 bg-gradient-hero">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <header className="text-center space-y-6 max-w-4xl mx-auto">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">
                Get In
                <span className="bg-gradient-primary bg-clip-text text-transparent"> Touch</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Ready to transform your business with data? Let's discuss your project and 
                create a customized solution that delivers results.
              </p>
            </header>
          </div>
        </section>

        {/* Contact Form & Info Section */}
        <main>
          <section className="py-20 bg-background" aria-labelledby="contact-form-heading">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Form */}
                <div className="space-y-8">
                  <header>
                    <h2 id="contact-form-heading" className="text-3xl font-bold text-foreground mb-4">
                      Send Us a Message
                    </h2>
                    <p className="text-muted-foreground">
                      Fill out the form below and we'll get back to you within 24 hours.
                    </p>
                  </header>

                  <Card className="border-0 shadow-medium">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <Send className="h-5 w-5 text-primary" aria-hidden="true" />
                        <span>Contact Form</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="name">Full Name *</Label>
                            <Input
                              id="name"
                              value={formData.name}
                              onChange={(e) => handleInputChange("name", e.target.value)}
                              placeholder="John Doe"
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email">Email Address *</Label>
                            <Input
                              id="email"
                              type="email"
                              value={formData.email}
                              onChange={(e) => handleInputChange("email", e.target.value)}
                              placeholder="john@company.com"
                              required
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="company">Company</Label>
                            <Input
                              id="company"
                              value={formData.company}
                              onChange={(e) => handleInputChange("company", e.target.value)}
                              placeholder="Your Company"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="phone">Phone Number</Label>
                            <Input
                              id="phone"
                              type="tel"
                              value={formData.phone}
                              onChange={(e) => handleInputChange("phone", e.target.value)}
                              placeholder="+1 (555) 123-4567"
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="service">Service of Interest</Label>
                          <Select onValueChange={(value) => handleInputChange("service", value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                            <SelectContent>
                              {services.map((service) => (
                                <SelectItem key={service} value={service}>
                                  {service}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="message">Message *</Label>
                          <Textarea
                            id="message"
                            value={formData.message}
                            onChange={(e) => handleInputChange("message", e.target.value)}
                            placeholder="Tell us about your project requirements..."
                            rows={5}
                            required
                          />
                        </div>

                        <Button 
                          type="submit" 
                          className="w-full bg-gradient-primary hover:opacity-90 text-lg py-6"
                        >
                          Send Message
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </div>

                {/* Contact Information */}
                <aside className="space-y-8">
                  <header>
                    <h2 className="text-3xl font-bold text-foreground mb-4">
                      Contact Information
                    </h2>
                    <p className="text-muted-foreground">
                      Have questions? Reach out to us through any of these channels.
                    </p>
                  </header>

                  <address className="space-y-6 not-italic">
                    {contactInfo.map((info, index) => (
                      <Card key={index} className="border-0 shadow-soft">
                        <CardContent className="p-6">
                          <div className="flex items-start space-x-4">
                            <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                              <info.icon className="h-6 w-6 text-white" aria-hidden="true" />
                            </div>
                            <div>
                              <h3 className="font-semibold text-foreground">{info.title}</h3>
                              <p className="text-muted-foreground font-medium">{info.details}</p>
                              <p className="text-sm text-muted-foreground">{info.subtitle}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </address>

                  {/* Quick Response Promise */}
                  <Card className="border-l-4 border-l-secondary bg-muted">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-foreground mb-2">
                        Quick Response Guarantee
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        We understand that time is critical in business. That's why we guarantee 
                        a response to all inquiries within 24 hours during business days. 
                        For urgent matters, call us directly.
                      </p>
                    </CardContent>
                  </Card>
                </aside>
              </div>
            </div>
          </section>
        </main>

        {/* FAQ Section */}
        <section className="py-20 bg-muted" aria-labelledby="faq-heading">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <header className="text-center space-y-4 mb-16">
              <h2 id="faq-heading" className="text-3xl lg:text-4xl font-bold text-foreground">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Quick answers to common questions about our services and process.
              </p>
            </header>
            
            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="item-1" className="bg-background border border-border rounded-lg px-6 shadow-soft">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <span className="font-semibold text-foreground">What is PrestigeDataOps?</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    PrestigeDataOps provides data operations and integration services to help businesses streamline workflows, improve performance, and automate processes.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="bg-background border border-border rounded-lg px-6 shadow-soft">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <span className="font-semibold text-foreground">What services do you offer?</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    <p>We offer three service packages:</p>
                    <ul className="mt-3 space-y-2">
                      <li>• <strong>Basic Trim ($3,000)</strong> – Core setup, essential integrations, and standard support.</li>
                      <li>• <strong>Standard Trim ($5,000)</strong> – Includes Basic, plus advanced integrations, performance optimization, and extended support.</li>
                      <li>• <strong>Premium Trim ($10,000)</strong> – Includes Standard, plus full customization and priority support.</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="bg-background border border-border rounded-lg px-6 shadow-soft">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <span className="font-semibold text-foreground">Who are your services for?</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    Our solutions are for businesses that want to optimize their data workflows and improve efficiency, whether small, medium, or large.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="bg-background border border-border rounded-lg px-6 shadow-soft">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <span className="font-semibold text-foreground">How long does implementation take?</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    Depending on the package, implementation usually takes between 2–6 weeks.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="bg-background border border-border rounded-lg px-6 shadow-soft">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <span className="font-semibold text-foreground">Do you provide ongoing support?</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    Yes, all trims include support, with Premium clients receiving priority support.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6" className="bg-background border border-border rounded-lg px-6 shadow-soft">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <span className="font-semibold text-foreground">Can I upgrade later?</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    Yes, you can upgrade your package anytime as your business needs grow.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Contact;