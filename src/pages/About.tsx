import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import aboutHeroBackground from "@/assets/about-hero-background.jpg";
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
    { number: "10+", label: "Years Experience" },
    { number: "500+", label: "Projects Completed" },
    { number: "50+", label: "Enterprise Clients" },
    { number: "99%", label: "Client Satisfaction" }
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
        <section 
          className="relative pt-24 pb-32 bg-background bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${aboutHeroBackground})` }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center space-y-8 max-w-5xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
                <Award className="h-4 w-4" />
                Industry Leading Data Operations
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                About
                <span className="block text-primary">
                  Prestige Dataops
                </span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                For over a decade, we've been at the forefront of data innovation, helping businesses 
                transform their operations through intelligent data solutions and strategic insights.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg">
                  <Link to="/contact" className="flex items-center gap-2">
                    Get Started
                    <TrendingUp className="h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10 px-8 py-3 text-lg">
                  <Link to="/services">
                    Our Services
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="p-8 rounded-2xl bg-card border border-border hover:shadow-large transition-all duration-300 group-hover:scale-105">
                    <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">{stat.number}</div>
                    <div className="text-muted-foreground font-medium">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


      {/* Mission Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  <Globe className="h-4 w-4" />
                  Our Mission
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                  Democratizing Data Science for
                  <span className="text-primary"> Everyone</span>
                </h2>
              </div>
              
              <div className="space-y-6">
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
              
              <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                <Link to="/services" className="flex items-center gap-2">
                  Explore Our Solutions
                  <TrendingUp className="h-4 w-4" />
                </Link>
              </Button>
            </div>
            
            <div className="space-y-8">
              <Card className="border shadow-large bg-card">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold text-foreground mb-6">What Sets Us Apart</h3>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4 p-4 rounded-xl bg-muted border">
                      <div className="p-2 bg-primary rounded-lg">
                        <Clock className="h-5 w-5 text-primary-foreground" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Rapid Implementation</h4>
                        <p className="text-muted-foreground">Get up and running with our solutions in weeks, not months.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4 p-4 rounded-xl bg-muted border">
                      <div className="p-2 bg-secondary rounded-lg">
                        <TrendingUp className="h-5 w-5 text-secondary-foreground" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Proven ROI</h4>
                        <p className="text-muted-foreground">Our clients typically see 3x return on investment within the first year.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4 p-4 rounded-xl bg-muted border">
                      <div className="p-2 bg-accent rounded-lg">
                        <Users className="h-5 w-5 text-accent-foreground" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Expert Team</h4>
                        <p className="text-muted-foreground">Work with certified data scientists and industry experts.</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
              <Shield className="h-4 w-4" />
              Our Core Values
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              The Principles That
              <span className="text-primary"> Drive Us</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Every decision we make and every solution we deliver is guided by these fundamental values.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="group border shadow-medium hover:shadow-large transition-all duration-500 bg-card hover:scale-105">
                <CardContent className="p-8 text-center space-y-6">
                  <div className="mx-auto w-20 h-20 bg-primary rounded-2xl flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300">
                    <value.icon className="h-10 w-10 text-primary-foreground" />
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {value.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-background" aria-labelledby="faq-heading">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <header className="text-center space-y-8 mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
              <Lightbulb className="h-4 w-4" />
              Got Questions?
            </div>
            <h2 id="faq-heading" className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Frequently Asked
              <span className="text-primary"> Questions</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Quick answers to common questions about our services and process.
            </p>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </header>
          
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-6">
              <AccordionItem value="item-1" className="bg-card border rounded-2xl shadow-medium hover:shadow-large transition-all duration-500 overflow-hidden group hover:scale-[1.02]">
                <AccordionTrigger className="text-left hover:no-underline px-8 py-6 hover:bg-muted transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-secondary-foreground font-bold">01</span>
                    </div>
                    <span className="font-bold text-foreground text-lg group-hover:text-primary transition-colors duration-300">What is PrestigeDataOps?</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-8 pb-6 text-muted-foreground leading-relaxed text-base">
                  <div className="pl-16 pt-2">
                    <p className="mb-4">PrestigeDataOps provides comprehensive data operations and integration services to help businesses streamline workflows, improve performance, and automate processes.</p>
                    <div className="p-4 bg-muted rounded-xl border border-primary">
                      <p className="text-sm text-primary font-medium">We specialize in making complex data operations simple and accessible for businesses of all sizes.</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-card border rounded-2xl shadow-medium hover:shadow-large transition-all duration-500 overflow-hidden group hover:scale-[1.02]">
                <AccordionTrigger className="text-left hover:no-underline px-8 py-6 hover:bg-muted transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-secondary-foreground font-bold">02</span>
                    </div>
                    <span className="font-bold text-foreground text-lg group-hover:text-secondary transition-colors duration-300">What services do you offer?</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-8 pb-6 text-muted-foreground leading-relaxed text-base">
                  <div className="pl-16 pt-2 space-y-6">
                    <p>We offer three comprehensive service packages designed to meet different business needs:</p>
                    <div className="grid gap-4">
                      <div className="p-6 bg-muted rounded-xl border border-primary">
                        <h4 className="font-bold text-primary text-lg mb-2">Basic Trim - $3,000</h4>
                        <p className="text-muted-foreground">Core setup, essential integrations, and standard support to get you started.</p>
                      </div>
                      <div className="p-6 bg-muted rounded-xl border border-secondary">
                        <h4 className="font-bold text-secondary text-lg mb-2">Standard Trim - $5,000</h4>
                        <p className="text-muted-foreground">Includes Basic, plus advanced integrations, performance optimization, and extended support.</p>
                      </div>
                      <div className="p-6 bg-muted rounded-xl border border-accent">
                        <h4 className="font-bold text-accent text-lg mb-2">Premium Trim - $10,000</h4>
                        <p className="text-muted-foreground">Includes Standard, plus full customization, priority support, and dedicated account management.</p>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-card border rounded-2xl shadow-medium hover:shadow-large transition-all duration-500 overflow-hidden group hover:scale-[1.02]">
                <AccordionTrigger className="text-left hover:no-underline px-8 py-6 hover:bg-muted transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-secondary-foreground font-bold">03</span>
                    </div>
                    <span className="font-bold text-foreground text-lg group-hover:text-primary transition-colors duration-300">Who are your services for?</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-8 pb-6 text-muted-foreground leading-relaxed text-base">
                  <div className="pl-16 pt-2">
                    Our solutions are designed for businesses of all sizes that want to optimize their data workflows and improve efficiency, whether you're a growing startup, established company, or large enterprise.
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-card border rounded-2xl shadow-medium hover:shadow-large transition-all duration-500 overflow-hidden group hover:scale-[1.02]">
                <AccordionTrigger className="text-left hover:no-underline px-8 py-6 hover:bg-muted transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-secondary-foreground font-bold">04</span>
                    </div>
                    <span className="font-bold text-foreground text-lg group-hover:text-primary transition-colors duration-300">How long does implementation take?</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-8 pb-6 text-muted-foreground leading-relaxed text-base">
                  <div className="pl-16 pt-2">
                    Implementation timeframes vary by package complexity, typically ranging from 2–6 weeks. We work efficiently to get you up and running as quickly as possible.
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-card border rounded-2xl shadow-medium hover:shadow-large transition-all duration-500 overflow-hidden group hover:scale-[1.02]">
                <AccordionTrigger className="text-left hover:no-underline px-8 py-6 hover:bg-muted transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-secondary-foreground font-bold">05</span>
                    </div>
                    <span className="font-bold text-foreground text-lg group-hover:text-secondary transition-colors duration-300">Do you provide ongoing support?</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-8 pb-6 text-muted-foreground leading-relaxed text-base">
                  <div className="pl-16 pt-2">
                    Yes! All service tiers include comprehensive support, with Premium clients receiving priority assistance and faster response times.
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="bg-card border rounded-2xl shadow-medium hover:shadow-large transition-all duration-500 overflow-hidden group hover:scale-[1.02]">
                <AccordionTrigger className="text-left hover:no-underline px-8 py-6 hover:bg-muted transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-secondary-foreground font-bold">06</span>
                    </div>
                    <span className="font-bold text-foreground text-lg group-hover:text-primary transition-colors duration-300">Can I upgrade later?</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-8 pb-6 text-muted-foreground leading-relaxed text-base">
                  <div className="pl-16 pt-2">
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