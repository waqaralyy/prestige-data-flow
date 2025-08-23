import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Mail, Phone, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
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
      phone: "",
      message: ""
    });
  };

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
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                  {/* Contact Form */}
                  <div className="lg:col-start-2 lg:col-span-2 space-y-8">
                    <Card className="border-0 shadow-2xl bg-white/95 backdrop-blur-md max-w-lg ml-auto">
                      <CardContent className="pt-6">
                        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
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
                  <aside className="lg:col-span-1 space-y-8">
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