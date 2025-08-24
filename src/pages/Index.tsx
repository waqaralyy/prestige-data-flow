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
      title: "Data Analytics",
      description: "Transform raw data into actionable insights with advanced analytics and visualization tools."
    },
    {
      icon: Brain,
      title: "Business Intelligence",
      description: "Make informed decisions with comprehensive BI solutions and real-time dashboards."
    },
    {
      icon: Zap,
      title: "Process Automation",
      description: "Streamline operations and boost efficiency with intelligent automation solutions."
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
        <section className="py-24 bg-muted relative" aria-labelledby="testimonials-heading">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <header className="text-center space-y-4 mb-20">
              <h2 id="testimonials-heading" className="text-3xl lg:text-4xl font-bold text-foreground">
                What Our Clients Say
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Discover how we've helped businesses unlock their data potential
              </p>
            </header>
            
            {/* Testimonials Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Testimonial 1 */}
              <article className="relative">
                <div className="relative z-10 bg-background rounded-2xl p-8 shadow-xl border border-border/50">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-lg">
                        JD
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">John D.</h3>
                        <p className="text-sm text-muted-foreground">Operations Manager</p>
                      </div>
                    </div>
                    
                    <blockquote className="text-foreground text-lg leading-relaxed">
                      "Prestige DataOps helped us turn raw data into valuable insights that improved our decision-making."
                    </blockquote>
                    
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                      ))}
                    </div>
                  </div>
                  
                  {/* Decorative Quote */}
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <Quote className="h-4 w-4 text-white" />
                  </div>
                </div>
                
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl transform rotate-2"></div>
              </article>
              
              {/* Testimonial 2 */}
              <article className="relative">
                <div className="relative z-10 bg-background rounded-2xl p-8 shadow-xl border border-border/50">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center text-white font-bold text-lg">
                        SM
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">Sarah M.</h3>
                        <p className="text-sm text-muted-foreground">Business Analyst</p>
                      </div>
                    </div>
                    
                    <blockquote className="text-foreground text-lg leading-relaxed">
                      "Fast, reliable, and professional. They made our data process simple and effective."
                    </blockquote>
                    
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                      ))}
                    </div>
                  </div>
                  
                  {/* Decorative Quote */}
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                    <Quote className="h-4 w-4 text-white" />
                  </div>
                </div>
                
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-accent/10 rounded-2xl transform -rotate-2"></div>
              </article>
            </div>
            
            {/* Trust Indicators */}
            <div className="mt-16 text-center">
              <p className="text-sm text-muted-foreground mb-8">Trusted by companies worldwide</p>
              <div className="flex justify-center items-center space-x-8 opacity-60">
                <div className="text-2xl font-bold text-foreground">Enterprise</div>
                <div className="w-px h-8 bg-border"></div>
                <div className="text-2xl font-bold text-foreground">Growth</div>
                <div className="w-px h-8 bg-border"></div>
                <div className="text-2xl font-bold text-foreground">Scale</div>
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