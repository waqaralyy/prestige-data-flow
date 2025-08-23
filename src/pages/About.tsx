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


  return (
    <>
      <SEO 
        title="About Prestige Dataops - Expert Data Analytics Team"
        description="Learn about Prestige Dataops's mission, values, and expert team. Over 10 years of experience helping businesses transform through data analytics and intelligence."
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
                <span className="bg-gradient-primary bg-clip-text text-transparent"> Prestige Dataops</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                For over a decade, we've been at the forefront of data innovation, helping businesses 
                transform their operations through intelligent data solutions and strategic insights.
              </p>
            </header>
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
      <section className="py-20 bg-gradient-hero" aria-labelledby="faq-heading">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <header className="text-center space-y-6 mb-20">
            <h2 id="faq-heading" className="text-3xl lg:text-4xl font-bold text-foreground">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Quick answers to common questions about our services and process.
            </p>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          </header>
          
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-6">
              <AccordionItem value="item-1" className="bg-card border-0 rounded-2xl shadow-medium hover:shadow-large transition-all duration-300 overflow-hidden group">
                <AccordionTrigger className="text-left hover:no-underline px-8 py-6 hover:bg-muted/50 transition-colors duration-200">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-primary-foreground font-semibold text-sm">01</span>
                    </div>
                    <span className="font-semibold text-foreground text-lg">What is PrestigeDataOps?</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-8 pb-6 text-muted-foreground leading-relaxed text-base">
                  <div className="pl-14">
                    PrestigeDataOps provides data operations and integration services to help businesses streamline workflows, improve performance, and automate processes.
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-card border-0 rounded-2xl shadow-medium hover:shadow-large transition-all duration-300 overflow-hidden group">
                <AccordionTrigger className="text-left hover:no-underline px-8 py-6 hover:bg-muted/50 transition-colors duration-200">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-primary-foreground font-semibold text-sm">02</span>
                    </div>
                    <span className="font-semibold text-foreground text-lg">What services do you offer?</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-8 pb-6 text-muted-foreground leading-relaxed text-base">
                  <div className="pl-14 space-y-4">
                    <p>We offer three comprehensive service packages:</p>
                    <div className="space-y-3">
                      <div className="p-4 bg-muted/30 rounded-xl border-l-4 border-primary">
                        <p><strong className="text-primary">Basic Trim ($3,000)</strong> – Core setup, essential integrations, and standard support.</p>
                      </div>
                      <div className="p-4 bg-muted/30 rounded-xl border-l-4 border-secondary">
                        <p><strong className="text-secondary">Standard Trim ($5,000)</strong> – Includes Basic, plus advanced integrations, performance optimization, and extended support.</p>
                      </div>
                      <div className="p-4 bg-muted/30 rounded-xl border-l-4 border-accent">
                        <p><strong className="text-accent">Premium Trim ($10,000)</strong> – Includes Standard, plus full customization and priority support.</p>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-card border-0 rounded-2xl shadow-medium hover:shadow-large transition-all duration-300 overflow-hidden group">
                <AccordionTrigger className="text-left hover:no-underline px-8 py-6 hover:bg-muted/50 transition-colors duration-200">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-primary-foreground font-semibold text-sm">03</span>
                    </div>
                    <span className="font-semibold text-foreground text-lg">Who are your services for?</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-8 pb-6 text-muted-foreground leading-relaxed text-base">
                  <div className="pl-14">
                    Our solutions are designed for businesses of all sizes that want to optimize their data workflows and improve efficiency, whether you're a growing startup, established company, or large enterprise.
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-card border-0 rounded-2xl shadow-medium hover:shadow-large transition-all duration-300 overflow-hidden group">
                <AccordionTrigger className="text-left hover:no-underline px-8 py-6 hover:bg-muted/50 transition-colors duration-200">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-primary-foreground font-semibold text-sm">04</span>
                    </div>
                    <span className="font-semibold text-foreground text-lg">How long does implementation take?</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-8 pb-6 text-muted-foreground leading-relaxed text-base">
                  <div className="pl-14">
                    Implementation timeframes vary by package complexity, typically ranging from 2–6 weeks. We work efficiently to get you up and running as quickly as possible.
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-card border-0 rounded-2xl shadow-medium hover:shadow-large transition-all duration-300 overflow-hidden group">
                <AccordionTrigger className="text-left hover:no-underline px-8 py-6 hover:bg-muted/50 transition-colors duration-200">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-primary-foreground font-semibold text-sm">05</span>
                    </div>
                    <span className="font-semibold text-foreground text-lg">Do you provide ongoing support?</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-8 pb-6 text-muted-foreground leading-relaxed text-base">
                  <div className="pl-14">
                    Yes! All service tiers include comprehensive support, with Premium clients receiving priority assistance and faster response times.
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="bg-card border-0 rounded-2xl shadow-medium hover:shadow-large transition-all duration-300 overflow-hidden group">
                <AccordionTrigger className="text-left hover:no-underline px-8 py-6 hover:bg-muted/50 transition-colors duration-200">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-primary-foreground font-semibold text-sm">06</span>
                    </div>
                    <span className="font-semibold text-foreground text-lg">Can I upgrade later?</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-8 pb-6 text-muted-foreground leading-relaxed text-base">
                  <div className="pl-14">
                    Absolutely! You can seamlessly upgrade your package at any time as your business requirements evolve and grow.
                  </div>
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

export default About;