import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { 
  Users, 
  Award, 
  Globe, 
  TrendingUp,
  Target,
  Lightbulb,
  Shield,
  Clock
} from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for excellence in every project, delivering solutions that exceed expectations."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We embrace cutting-edge technologies and methodologies to solve complex challenges."
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "We maintain the highest standards of ethics and transparency in all our interactions."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We work closely with our clients as true partners in their digital transformation journey."
    }
  ];

  const stats = [
    { icon: Award, number: "500+", label: "Successful Projects" },
    { icon: Users, number: "50+", label: "Expert Consultants" },
    { icon: Globe, number: "25+", label: "Countries Served" },
    { icon: TrendingUp, number: "95%", label: "Client Retention Rate" }
  ];

  return (
    <>
      <SEO 
        title="About PrestigeData.io - Expert Data Analytics Team"
        description="Learn about PrestigeData.io's mission, values, and expert team. Over 10 years of experience helping businesses transform through data analytics and intelligence."
        keywords="about prestigedata, data analytics team, business intelligence experts, data consulting company"
        canonical="https://prestigedata.io/about"
      />
      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section className="pt-24 pb-16 bg-gradient-hero">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <header className="text-center space-y-6 max-w-4xl mx-auto">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">
                About
                <span className="bg-gradient-primary bg-clip-text text-transparent"> PrestigeData.io</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                For over a decade, we've been at the forefront of data innovation, helping businesses 
                transform their operations through intelligent data solutions and strategic insights.
              </p>
            </header>
          </div>
        </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-3">
                <div className="mx-auto w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center">
                  <stat.icon className="h-8 w-8" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold">{stat.number}</div>
                <div className="text-primary-foreground/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We believe that every organization, regardless of size, should have access to 
                enterprise-grade data analytics and intelligence. Our mission is to democratize 
                data science and make advanced analytics accessible to businesses worldwide.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Through our innovative solutions and expert guidance, we help organizations 
                unlock the full potential of their data, driving growth, efficiency, and 
                competitive advantage in an increasingly data-driven world.
              </p>
              <Button asChild className="bg-gradient-primary hover:opacity-90">
                <Link to="/contact">Join Our Mission</Link>
              </Button>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground">What Sets Us Apart</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Clock className="h-6 w-6 text-secondary mt-1" />
                  <div>
                    <h4 className="font-medium text-foreground">Rapid Implementation</h4>
                    <p className="text-muted-foreground">Get up and running with our solutions in weeks, not months.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <TrendingUp className="h-6 w-6 text-secondary mt-1" />
                  <div>
                    <h4 className="font-medium text-foreground">Proven ROI</h4>
                    <p className="text-muted-foreground">Our clients typically see 3x return on investment within the first year.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="h-6 w-6 text-secondary mt-1" />
                  <div>
                    <h4 className="font-medium text-foreground">Expert Team</h4>
                    <p className="text-muted-foreground">Work with certified data scientists and industry experts.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Our Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide every decision we make and every solution we deliver.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-0 shadow-medium hover:shadow-large transition-shadow duration-300 text-center">
                <CardContent className="p-8 space-y-4">
                  <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Ready to Work Together?
            </h2>
            <p className="text-xl opacity-90">
              Join hundreds of satisfied clients who have transformed their businesses with our data solutions. 
              Let's start your journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg" 
                variant="secondary"
                className="text-lg px-8 py-6"
              >
                <Link to="/contact">Start Your Project</Link>
              </Button>
              <Button 
                asChild 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-primary"
              >
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

        <Footer />
      </div>
    </>
  );
};

export default About;