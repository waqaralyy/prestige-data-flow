import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import { BarChart3, Brain, Zap, TrendingUp, Users, Shield, Check, Star, Quote } from "lucide-react";

const Index = () => {
  const services = [
    {
      icon: BarChart3,
      title: "Data Pipeline Automation",
      description: "Automate your data pipelines with intelligent orchestration and seamless workflow management."
    },
    {
      icon: Brain,
      title: "Data Integration & Orchestration",
      description: "Seamlessly connect and orchestrate data from multiple sources with unified integration solutions."
    },
    {
      icon: Zap,
      title: "Monitoring & Quality Assurance",
      description: "Ensure data quality and system reliability with comprehensive monitoring and validation tools."
    }
  ];

  return (
    <>
      <SEO 
        title="Prestige Dataops - Data Analytics & Consulting Solutions"
        description="Transform your business with advanced data analytics, consulting, and automation solutions. Expert data scientists helping businesses grow through intelligent insights."
        keywords="data analytics, business intelligence, process automation, data consulting, predictive analytics, data visualization"
        canonical="https://prestigedata.io"
      />
      <StructuredData />
      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section className="relative pt-16 bg-muted overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <header className="space-y-8">
                <div className="space-y-4">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                    Transform Your Data Into{" "}
                    <span className="text-primary">Smart Decisions</span>
                  </h1>
                  <div className="text-2xl sm:text-3xl font-semibold text-secondary mb-4">
                    Prestige DataOps: Turning Complex Data Into Clear Insights
                  </div>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    We help businesses unlock the full potential of their data with advanced analytics and seamless integration
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    asChild 
                    size="lg" 
                    className="bg-primary hover:bg-primary text-lg px-8 py-6"
                  >
                    <Link to="/contact">Get Started Today</Link>
                  </Button>
                  <Button 
                    asChild 
                    variant="outline" 
                    size="lg" 
                    className="text-lg px-8 py-6 border-2 hover:bg-muted"
                  >
                    <Link to="/services">Explore Services</Link>
                  </Button>
                </div>
              </header>
              
              <div className="relative">
                <img 
                  src="/lovable-uploads/9adbf81a-dd0a-426a-b6e0-a8aaeac906d3.png" 
                  alt="Advanced data analytics dashboard showing charts, graphs, and business intelligence visualizations for data-driven decision making" 
                  className="w-full h-auto rounded-2xl shadow-large"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-background/20 rounded-2xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-background" aria-labelledby="services-heading">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <header className="text-center space-y-4 mb-16">
              <h2 id="services-heading" className="text-3xl lg:text-4xl font-bold text-foreground">
                Our Core Services
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We provide comprehensive data solutions to help your business thrive in today's data-driven world.
              </p>
            </header>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <article key={index}>
                  <Card className="border-0 shadow-medium hover:shadow-large transition-shadow duration-300 h-full">
                    <CardContent className="p-8 text-center space-y-4">
                      <div className="mx-auto w-16 h-16 bg-primary rounded-2xl flex items-center justify-center">
                        <service.icon className="h-8 w-8 text-white" aria-hidden="true" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                    </CardContent>
                  </Card>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* About Preview Section */}
        <section className="py-20 bg-muted" aria-labelledby="about-heading">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <article className="space-y-6">
                <h2 id="about-heading" className="text-3xl lg:text-4xl font-bold text-foreground">
                  Why Choose Prestige Dataops?
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  With over a decade of experience in data analytics and business intelligence, 
                  we help organizations transform their data into competitive advantages.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <TrendingUp className="h-6 w-6 text-secondary" />
                    <span className="text-foreground font-medium">Proven track record of success</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="h-6 w-6 text-secondary" />
                    <span className="text-foreground font-medium">Expert team of data scientists</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Shield className="h-6 w-6 text-secondary" />
                    <span className="text-foreground font-medium">Enterprise-grade security</span>
                  </div>
                </div>
                
                <Button asChild className="bg-primary hover:bg-primary">
                  <Link to="/about">Learn More About Us</Link>
                </Button>
              </article>
              
              <div className="grid grid-cols-2 gap-6">
                <Card className="p-6 text-center border-0 shadow-medium">
                  <CardContent className="p-0">
                    <div className="text-3xl font-bold text-primary mb-2">10+</div>
                    <div className="text-muted-foreground">Years Experience</div>
                  </CardContent>
                </Card>
                <Card className="p-6 text-center border-0 shadow-medium">
                  <CardContent className="p-0">
                    <div className="text-3xl font-bold text-secondary mb-2">99%</div>
                    <div className="text-muted-foreground">Uptime Guarantee</div>
                  </CardContent>
                </Card>
                <Card className="p-6 text-center border-0 shadow-medium">
                  <CardContent className="p-0">
                    <div className="text-3xl font-bold text-accent mb-2">24/7</div>
                    <div className="text-muted-foreground">Expert Support</div>
                  </CardContent>
                </Card>
                <Card className="p-6 text-center border-0 shadow-medium">
                  <CardContent className="p-0">
                    <div className="text-3xl font-bold text-primary mb-2">ISO</div>
                    <div className="text-muted-foreground">Certified Security</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-background" aria-labelledby="pricing-heading">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <header className="text-center space-y-4 mb-16">
              <h2 id="pricing-heading" className="text-3xl lg:text-4xl font-bold text-foreground">
                Choose Your Perfect Trim
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Select the service package that best fits your business needs and budget.
              </p>
            </header>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Basic Trim */}
              <article>
                <Card className="border-0 shadow-medium hover:shadow-large transition-all duration-300 h-full relative">
                  <CardContent className="p-8 text-center space-y-6">
                    <div className="mx-auto w-16 h-16 bg-primary rounded-2xl flex items-center justify-center">
                      <Shield className="h-8 w-8 text-white" aria-hidden="true" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-foreground">Basic Trim</h3>
                      <div className="text-4xl font-bold text-primary">$3,000</div>
                    </div>
                    <div className="space-y-4 text-left">
                      <div className="flex items-start space-x-3">
                        <Check className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Essential setup</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Check className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Core integrations</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Check className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Standard support</span>
                      </div>
                    </div>
                    <Button asChild className="w-full bg-primary hover:bg-primary">
                      <Link to="/contact">Get Started</Link>
                    </Button>
                  </CardContent>
                </Card>
              </article>

              {/* Standard Trim */}
              <article>
                <Card className="border-0 shadow-large hover:shadow-xl transition-all duration-300 h-full relative border-2 border-secondary">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                      <Star className="h-4 w-4" />
                      Most Popular
                    </div>
                  </div>
                  <CardContent className="p-8 text-center space-y-6">
                    <div className="mx-auto w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center">
                      <TrendingUp className="h-8 w-8 text-white" aria-hidden="true" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-foreground">Standard Trim</h3>
                      <div className="text-4xl font-bold text-secondary">$5,000</div>
                    </div>
                    <div className="space-y-4 text-left">
                      <div className="flex items-start space-x-3">
                        <Check className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Everything in Basic</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Check className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Advanced integrations</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Check className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Performance optimization</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Check className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Extended support</span>
                      </div>
                    </div>
                    <Button asChild className="w-full bg-secondary hover:bg-secondary">
                      <Link to="/contact">Get Started</Link>
                    </Button>
                  </CardContent>
                </Card>
              </article>

              {/* Premium Trim */}
              <article>
                <Card className="border-0 shadow-medium hover:shadow-large transition-all duration-300 h-full relative">
                  <CardContent className="p-8 text-center space-y-6">
                    <div className="mx-auto w-16 h-16 bg-accent rounded-2xl flex items-center justify-center">
                      <Star className="h-8 w-8 text-white" aria-hidden="true" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-foreground">Premium Trim</h3>
                      <div className="text-4xl font-bold text-accent">$10,000</div>
                    </div>
                    <div className="space-y-4 text-left">
                      <div className="flex items-start space-x-3">
                        <Check className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Everything in Standard</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Check className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Full customization</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Check className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Priority support</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Check className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Ongoing optimization</span>
                      </div>
                    </div>
                    <Button asChild className="w-full bg-accent hover:bg-accent">
                      <Link to="/contact">Get Started</Link>
                    </Button>
                  </CardContent>
                </Card>
              </article>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-background relative overflow-hidden" aria-labelledby="testimonials-heading">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <header className="text-center space-y-4 mb-16">
              <h2 id="testimonials-heading" className="text-3xl lg:text-4xl font-bold text-foreground">
                Trusted by Industry Leaders
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                See how we've transformed businesses through data-driven solutions
              </p>
            </header>
            
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* First Testimonial */}
                <article className="group">
                  <div className="relative p-8 bg-card rounded-3xl shadow-medium hover:shadow-large transition-all duration-500 transform group-hover:-translate-y-2 border border-border/50">
                    {/* Quote Background */}
                    <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center rotate-12 group-hover:rotate-0 transition-transform duration-500">
                      <Quote className="h-8 w-8 text-white" />
                    </div>
                    
                    <div className="space-y-6 pt-4">
                      <blockquote className="text-lg text-foreground leading-relaxed">
                        "Prestige DataOps helped us turn raw data into valuable insights that improved our decision-making."
                      </blockquote>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div>
                            <cite className="text-foreground font-semibold text-lg not-italic">John D.</cite>
                            <p className="text-muted-foreground">Operations Manager</p>
                          </div>
                        </div>
                        <div className="flex space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </article>

                {/* Second Testimonial */}
                <article className="group lg:mt-8">
                  <div className="relative p-8 bg-card rounded-3xl shadow-medium hover:shadow-large transition-all duration-500 transform group-hover:-translate-y-2 border border-border/50">
                    {/* Quote Background */}
                    <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-accent to-accent/80 rounded-2xl flex items-center justify-center -rotate-12 group-hover:rotate-0 transition-transform duration-500">
                      <Quote className="h-8 w-8 text-white" />
                    </div>
                    
                    <div className="space-y-6 pt-4">
                      <blockquote className="text-lg text-foreground leading-relaxed">
                        "Fast, reliable, and professional. They made our data process simple and effective."
                      </blockquote>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div>
                            <cite className="text-foreground font-semibold text-lg not-italic">Sarah M.</cite>
                            <p className="text-muted-foreground">Business Analyst</p>
                          </div>
                        </div>
                        <div className="flex space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
              
              {/* Trust Indicators */}
              <div className="mt-16 text-center">
                <p className="text-muted-foreground mb-8">Trusted by 100+ companies worldwide</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-white" aria-labelledby="cta-heading">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-3xl mx-auto space-y-6">
              <h2 id="cta-heading" className="text-3xl lg:text-4xl font-bold">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl opacity-90">
                Let's discuss how our data solutions can drive your business forward. 
                Get a free consultation with our experts today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  asChild 
                  size="lg" 
                  variant="secondary"
                  className="text-lg px-8 py-6"
                >
                  <Link to="/contact">Schedule a Consultation</Link>
                </Button>
                <Button 
                  asChild 
                  size="lg" 
                  variant="secondary" 
                  className="text-lg px-8 py-6"
                >
                  <Link to="/services">View All Services</Link>
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

export default Index;