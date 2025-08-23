import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
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
      <div 
        className="min-h-screen bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: `url(/lovable-uploads/b6f74c33-2ce3-4f87-93d0-f70174c9d334.png)` }}
      >
        {/* Background overlay for better text readability */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
        
        {/* All content positioned above the background */}
        <div className="relative z-10">
          <Header />
          
          {/* Hero Section */}
          <section className="pt-24 pb-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <header className="text-center space-y-6 max-w-4xl mx-auto">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
                  Get In
                  <span className="bg-gradient-primary bg-clip-text text-transparent"> Touch</span>
                </h1>
                <p className="text-xl text-white/90 leading-relaxed">
                  Ready to transform your business with data? Let's discuss your project and 
                  create a customized solution that delivers results.
                </p>
              </header>
            </div>
          </section>

          {/* Contact Form & Info Section */}
          <main>
            <section className="py-20" aria-labelledby="contact-form-heading">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  {/* Contact Form */}
                  <div className="space-y-8">
                    <Card className="border-0 shadow-2xl bg-white/95 backdrop-blur-md">
                      <CardContent className="pt-6">
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
                    <div className="space-y-6 text-white">
                      <div className="space-y-2">
                        <h3 className="text-xl font-semibold flex items-center space-x-2">
                          <Mail className="h-5 w-5 text-primary" aria-hidden="true" />
                          <span>Email Us</span>
                        </h3>
                        <p className="text-lg">info@prestigedata.io</p>
                        <p className="text-white/80">General inquiries</p>
                      </div>

                      <div className="space-y-2">
                        <h3 className="text-xl font-semibold flex items-center space-x-2">
                          <Phone className="h-5 w-5 text-primary" aria-hidden="true" />
                          <span>Call Us</span>
                        </h3>
                        <p className="text-lg">+1 (555) 123-4567</p>
                        <p className="text-white/80">Mon-Fri 9AM-6PM EST</p>
                      </div>

                      <div className="space-y-2">
                        <h3 className="text-xl font-semibold flex items-center space-x-2">
                          <Clock className="h-5 w-5 text-primary" aria-hidden="true" />
                          <span>Business Hours</span>
                        </h3>
                        <p className="text-lg">Monday - Friday</p>
                        <p className="text-white/80">9:00 AM - 6:00 PM EST</p>
                      </div>
                    </div>
                  </aside>
                </div>
              </div>
            </section>
          </main>

          <Footer />
        </div>
      </div>
    </>
  );
};

export default Contact;