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
        <section className="pt-24 pb-16 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <header className="text-center space-y-6 max-w-4xl mx-auto">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">
                About
                <span className="text-primary"> Prestige Dataops</span>
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
                  <div className="mx-auto w-16 h-16 bg-primary rounded-2xl flex items-center justify-center">
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
      <section className="py-20 bg-background relative overflow-hidden" aria-labelledby="faq-heading">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-secondary rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <header className="text-center space-y-6 mb-20">
            <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-full mb-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">?</span>
              </div>
            </div>
            <h2 id="faq-heading" className="text-3xl lg:text-4xl font-bold text-foreground">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Get instant answers to the most common questions about our data operations services and implementation process.
            </p>
          </header>
          
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-gradient-to-r from-card to-card/80 border border-border/50 rounded-2xl shadow-medium hover:shadow-large transition-all duration-300 overflow-hidden group backdrop-blur-sm">
                <AccordionTrigger className="text-left hover:no-underline px-8 py-6 group-hover:bg-muted/30 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl transition-all duration-300">
                      <span className="text-primary-foreground font-bold text-sm">01</span>
                    </div>
                    <span className="font-semibold text-foreground text-lg group-hover:text-primary transition-colors duration-300">What is PrestigeDataOps?</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-8 pb-8 text-muted-foreground leading-relaxed text-base animate-accordion-down">
                  <div className="pl-16 pt-2">
                    <div className="p-6 bg-muted/20 rounded-xl border-l-4 border-primary">
                      PrestigeDataOps provides comprehensive data operations and integration services to help businesses streamline workflows, improve performance, and automate processes through cutting-edge technology solutions.
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-gradient-to-r from-card to-card/80 border border-border/50 rounded-2xl shadow-medium hover:shadow-large transition-all duration-300 overflow-hidden group backdrop-blur-sm">
                <AccordionTrigger className="text-left hover:no-underline px-8 py-6 group-hover:bg-muted/30 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-secondary to-secondary/80 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl transition-all duration-300">
                      <span className="text-secondary-foreground font-bold text-sm">02</span>
                    </div>
                    <span className="font-semibold text-foreground text-lg group-hover:text-secondary transition-colors duration-300">What services do you offer?</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-8 pb-8 text-muted-foreground leading-relaxed text-base animate-accordion-down">
                  <div className="pl-16 pt-2 space-y-4">
                    <p className="text-foreground font-medium">We offer three comprehensive service packages tailored to your needs:</p>
                    <div className="grid gap-4">
                      <div className="p-5 bg-gradient-to-r from-primary/5 to-primary/10 rounded-xl border-l-4 border-primary hover:shadow-medium transition-shadow duration-300">
                        <p><strong className="text-primary text-lg">Basic Trim ($3,000)</strong></p>
                        <p className="text-muted-foreground mt-1">Core setup, essential integrations, and standard support to get you started.</p>
                      </div>
                      <div className="p-5 bg-gradient-to-r from-secondary/5 to-secondary/10 rounded-xl border-l-4 border-secondary hover:shadow-medium transition-shadow duration-300">
                        <p><strong className="text-secondary text-lg">Standard Trim ($5,000)</strong></p>
                        <p className="text-muted-foreground mt-1">Everything in Basic, plus advanced integrations, performance optimization, and extended support.</p>
                      </div>
                      <div className="p-5 bg-gradient-to-r from-accent/5 to-accent/10 rounded-xl border-l-4 border-accent hover:shadow-medium transition-shadow duration-300">
                        <p><strong className="text-accent text-lg">Premium Trim ($10,000)</strong></p>
                        <p className="text-muted-foreground mt-1">Complete solution with full customization, priority support, and ongoing optimization.</p>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-gradient-to-r from-card to-card/80 border border-border/50 rounded-2xl shadow-medium hover:shadow-large transition-all duration-300 overflow-hidden group backdrop-blur-sm">
                <AccordionTrigger className="text-left hover:no-underline px-8 py-6 group-hover:bg-muted/30 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent/80 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl transition-all duration-300">
                      <span className="text-accent-foreground font-bold text-sm">03</span>
                    </div>
                    <span className="font-semibold text-foreground text-lg group-hover:text-accent transition-colors duration-300">Who are your services for?</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-8 pb-8 text-muted-foreground leading-relaxed text-base animate-accordion-down">
                  <div className="pl-16 pt-2">
                    <div className="p-6 bg-muted/20 rounded-xl border-l-4 border-accent">
                      Our solutions are designed for businesses of all sizes that want to optimize their data workflows and improve efficiency - from growing startups to established companies and large enterprises looking to modernize their data operations.
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-gradient-to-r from-card to-card/80 border border-border/50 rounded-2xl shadow-medium hover:shadow-large transition-all duration-300 overflow-hidden group backdrop-blur-sm">
                <AccordionTrigger className="text-left hover:no-underline px-8 py-6 group-hover:bg-muted/30 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary via-secondary to-accent rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl transition-all duration-300">
                      <Clock className="h-5 w-5 text-white" />
                    </div>
                    <span className="font-semibold text-foreground text-lg group-hover:text-primary transition-colors duration-300">How long does implementation take?</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-8 pb-8 text-muted-foreground leading-relaxed text-base animate-accordion-down">
                  <div className="pl-16 pt-2">
                    <div className="p-6 bg-muted/20 rounded-xl border-l-4 border-primary">
                      Implementation timeframes vary by package complexity, typically ranging from 2–6 weeks. Our experienced team works efficiently to get you up and running as quickly as possible while ensuring quality and reliability.
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-gradient-to-r from-card to-card/80 border border-border/50 rounded-2xl shadow-medium hover:shadow-large transition-all duration-300 overflow-hidden group backdrop-blur-sm">
                <AccordionTrigger className="text-left hover:no-underline px-8 py-6 group-hover:bg-muted/30 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl transition-all duration-300">
                      <Shield className="h-5 w-5 text-white" />
                    </div>
                    <span className="font-semibold text-foreground text-lg group-hover:text-secondary transition-colors duration-300">Do you provide ongoing support?</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-8 pb-8 text-muted-foreground leading-relaxed text-base animate-accordion-down">
                  <div className="pl-16 pt-2">
                    <div className="p-6 bg-muted/20 rounded-xl border-l-4 border-secondary">
                      Absolutely! All service tiers include comprehensive support with different levels of priority. Premium clients receive dedicated support with faster response times and proactive monitoring to ensure optimal performance.
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="bg-gradient-to-r from-card to-card/80 border border-border/50 rounded-2xl shadow-medium hover:shadow-large transition-all duration-300 overflow-hidden group backdrop-blur-sm">
                <AccordionTrigger className="text-left hover:no-underline px-8 py-6 group-hover:bg-muted/30 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl transition-all duration-300">
                      <TrendingUp className="h-5 w-5 text-white" />
                    </div>
                    <span className="font-semibold text-foreground text-lg group-hover:text-accent transition-colors duration-300">Can I upgrade my package later?</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-8 pb-8 text-muted-foreground leading-relaxed text-base animate-accordion-down">
                  <div className="pl-16 pt-2">
                    <div className="p-6 bg-muted/20 rounded-xl border-l-4 border-accent">
                      Yes! You can seamlessly upgrade your package at any time as your business requirements evolve and grow. We'll work with you to ensure a smooth transition with minimal disruption to your operations.
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            {/* Additional Help Section */}
            <div className="mt-16 text-center">
              <div className="p-8 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 rounded-3xl border border-border/50 backdrop-blur-sm">
                <h3 className="text-2xl font-bold text-foreground mb-4">Still have questions?</h3>
                <p className="text-muted-foreground mb-6 text-lg">Our expert team is here to help you find the perfect solution for your business needs.</p>
                <Button asChild size="lg" className="bg-primary hover:bg-primary text-lg px-8 py-6">
                  <Link to="/contact">Get in Touch</Link>
                </Button>
              </div>
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