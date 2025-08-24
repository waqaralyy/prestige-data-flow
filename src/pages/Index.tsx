import { Link } from "react-router-dom";
import { EnhancedButton } from "@/components/ui/enhanced-button";
import { EnhancedCard, EnhancedCardContent } from "@/components/ui/enhanced-card";
import { AnimatedSection } from "@/components/ui/animated-section";
import { StatsCounter } from "@/components/ui/stats-counter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import { BarChart3, Brain, Zap, TrendingUp, Users, Shield, Check, Star, Sparkles } from "lucide-react";

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
        <AnimatedSection className="relative pt-16 bg-gradient-subtle overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <header className="space-y-8">
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    <Sparkles className="w-4 h-4" />
                    <span>Trusted by 500+ Companies</span>
                  </div>
                  <h1 className="font-display leading-none">
                    Empowering Your
                    <span className="text-primary block"> Data Operations</span>
                    for a <span className="text-secondary">Smarter Business</span>
                  </h1>
                  <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
                    At Prestige DataOps, we deliver seamless data engineering and automation solutions to accelerate your business growth through intelligent insights.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <EnhancedButton 
                    asChild 
                    size="xl" 
                    variant="default"
                    className="group"
                  >
                    <Link to="/contact">
                      Get Started Today
                      <TrendingUp className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </EnhancedButton>
                  <EnhancedButton 
                    asChild 
                    variant="outline" 
                    size="xl"
                  >
                    <Link to="/services">Explore Services</Link>
                  </EnhancedButton>
                </div>
              </header>
              
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-3xl blur-xl"></div>
                <img 
                  src="/lovable-uploads/9adbf81a-dd0a-426a-b6e0-a8aaeac906d3.png" 
                  alt="Advanced data analytics dashboard showing charts, graphs, and business intelligence visualizations for data-driven decision making" 
                  className="relative w-full h-auto rounded-3xl shadow-elegant hover:shadow-glow transition-all duration-500 hover:scale-105"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Services Section */}
        <AnimatedSection className="py-20 bg-background" aria-labelledby="services-heading" delay={200}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <header className="text-center space-y-6 mb-16">
              <h2 id="services-heading" className="font-display">
                Our Core Services
              </h2>
              <div className="w-24 h-1 bg-gradient-primary rounded-full mx-auto"></div>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                We provide comprehensive data solutions to help your business thrive in today's data-driven world.
              </p>
            </header>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <article key={index} className="group">
                  <EnhancedCard 
                    variant="floating" 
                    className="h-full group-hover:scale-105 transition-all duration-500"
                  >
                    <EnhancedCardContent className="p-8 text-center space-y-6">
                      <div className="mx-auto w-20 h-20 bg-gradient-primary rounded-3xl flex items-center justify-center shadow-elegant group-hover:shadow-glow transition-all duration-300">
                        <service.icon className="h-10 w-10 text-white" aria-hidden="true" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground font-display">{service.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                      <div className="pt-4">
                        <EnhancedButton variant="ghost" size="sm" className="group/btn">
                          Learn More
                          <TrendingUp className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </EnhancedButton>
                      </div>
                    </EnhancedCardContent>
                  </EnhancedCard>
                </article>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* About Preview Section */}
        <AnimatedSection className="py-20 bg-muted" aria-labelledby="about-heading" delay={400}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <article className="space-y-8">
                <h2 id="about-heading" className="font-display">
                  Why Choose Prestige Dataops?
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  With over a decade of experience in data analytics and business intelligence, 
                  we help organizations transform their data into competitive advantages.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4 group">
                    <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                      <TrendingUp className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h4 className="text-foreground font-semibold mb-1">Proven track record of success</h4>
                      <p className="text-muted-foreground text-sm">Delivering measurable results for over 500+ companies</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 group">
                    <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                      <Users className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h4 className="text-foreground font-semibold mb-1">Expert team of data scientists</h4>
                      <p className="text-muted-foreground text-sm">Certified professionals with 10+ years experience</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 group">
                    <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                      <Shield className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h4 className="text-foreground font-semibold mb-1">Enterprise-grade security</h4>
                      <p className="text-muted-foreground text-sm">ISO certified with bank-level encryption</p>
                    </div>
                  </div>
                </div>
                
                <EnhancedButton asChild variant="secondary" size="lg">
                  <Link to="/about">Learn More About Us</Link>
                </EnhancedButton>
              </article>
              
              <div className="grid grid-cols-2 gap-6">
                <EnhancedCard variant="premium" padding="lg" className="text-center group hover:scale-105 transition-all duration-300">
                  <StatsCounter value={10} suffix="+" textClassName="text-primary" />
                  <div className="text-muted-foreground font-medium">Years Experience</div>
                </EnhancedCard>
                <EnhancedCard variant="premium" padding="lg" className="text-center group hover:scale-105 transition-all duration-300">
                  <StatsCounter value={99} suffix="%" textClassName="text-secondary" />
                  <div className="text-muted-foreground font-medium">Uptime Guarantee</div>
                </EnhancedCard>
                <EnhancedCard variant="premium" padding="lg" className="text-center group hover:scale-105 transition-all duration-300">
                  <div className="text-4xl font-bold text-accent mb-2 font-display">24/7</div>
                  <div className="text-muted-foreground font-medium">Expert Support</div>
                </EnhancedCard>
                <EnhancedCard variant="premium" padding="lg" className="text-center group hover:scale-105 transition-all duration-300">
                  <div className="text-4xl font-bold text-primary mb-2 font-display">ISO</div>
                  <div className="text-muted-foreground font-medium">Certified Security</div>
                </EnhancedCard>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Pricing Section */}
        <AnimatedSection className="py-20 bg-background" aria-labelledby="pricing-heading" delay={600}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <header className="text-center space-y-6 mb-16">
              <h2 id="pricing-heading" className="font-display">
                Choose Your Perfect Trim
              </h2>
              <div className="w-24 h-1 bg-gradient-primary rounded-full mx-auto"></div>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Select the service package that best fits your business needs and budget.
              </p>
            </header>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Basic Trim */}
              <article className="group">
                <EnhancedCard variant="elevated" className="h-full relative group-hover:scale-105 transition-all duration-500">
                  <EnhancedCardContent className="p-8 text-center space-y-6">
                    <div className="mx-auto w-20 h-20 bg-gradient-primary rounded-3xl flex items-center justify-center shadow-elegant">
                      <Shield className="h-10 w-10 text-white" aria-hidden="true" />
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-2xl font-bold text-foreground font-display">Basic Trim</h3>
                      <div className="text-5xl font-bold text-primary font-display">$3,000</div>
                    </div>
                    <div className="space-y-4 text-left">
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-secondary/20 rounded-full flex items-center justify-center mt-0.5">
                          <Check className="h-4 w-4 text-secondary" />
                        </div>
                        <span className="text-muted-foreground">Essential setup</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-secondary/20 rounded-full flex items-center justify-center mt-0.5">
                          <Check className="h-4 w-4 text-secondary" />
                        </div>
                        <span className="text-muted-foreground">Core integrations</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-secondary/20 rounded-full flex items-center justify-center mt-0.5">
                          <Check className="h-4 w-4 text-secondary" />
                        </div>
                        <span className="text-muted-foreground">Standard support</span>
                      </div>
                    </div>
                    <EnhancedButton asChild className="w-full" size="lg">
                      <Link to="/contact">Get Started</Link>
                    </EnhancedButton>
                  </EnhancedCardContent>
                </EnhancedCard>
              </article>

              {/* Standard Trim */}
              <article className="group relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-secondary text-white px-6 py-3 rounded-full text-sm font-bold flex items-center gap-2 shadow-elegant">
                    <Star className="h-4 w-4" />
                    Most Popular
                  </div>
                </div>
                <EnhancedCard variant="premium" className="h-full relative group-hover:scale-105 transition-all duration-500 border-2 border-secondary/20">
                  <EnhancedCardContent className="p-8 text-center space-y-6 pt-12">
                    <div className="mx-auto w-20 h-20 bg-gradient-secondary rounded-3xl flex items-center justify-center shadow-elegant">
                      <TrendingUp className="h-10 w-10 text-white" aria-hidden="true" />
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-2xl font-bold text-foreground font-display">Standard Trim</h3>
                      <div className="text-5xl font-bold text-secondary font-display">$5,000</div>
                    </div>
                    <div className="space-y-4 text-left">
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-secondary/20 rounded-full flex items-center justify-center mt-0.5">
                          <Check className="h-4 w-4 text-secondary" />
                        </div>
                        <span className="text-muted-foreground">Everything in Basic</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-secondary/20 rounded-full flex items-center justify-center mt-0.5">
                          <Check className="h-4 w-4 text-secondary" />
                        </div>
                        <span className="text-muted-foreground">Advanced integrations</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-secondary/20 rounded-full flex items-center justify-center mt-0.5">
                          <Check className="h-4 w-4 text-secondary" />
                        </div>
                        <span className="text-muted-foreground">Performance optimization</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-secondary/20 rounded-full flex items-center justify-center mt-0.5">
                          <Check className="h-4 w-4 text-secondary" />
                        </div>
                        <span className="text-muted-foreground">Extended support</span>
                      </div>
                    </div>
                    <EnhancedButton asChild className="w-full" variant="secondary" size="lg">
                      <Link to="/contact">Get Started</Link>
                    </EnhancedButton>
                  </EnhancedCardContent>
                </EnhancedCard>
              </article>

              {/* Premium Trim */}
              <article className="group">
                <EnhancedCard variant="elevated" className="h-full relative group-hover:scale-105 transition-all duration-500">
                  <EnhancedCardContent className="p-8 text-center space-y-6">
                    <div className="mx-auto w-20 h-20 bg-gradient-accent rounded-3xl flex items-center justify-center shadow-elegant">
                      <Star className="h-10 w-10 text-white" aria-hidden="true" />
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-2xl font-bold text-foreground font-display">Premium Trim</h3>
                      <div className="text-5xl font-bold text-accent font-display">$10,000</div>
                    </div>
                    <div className="space-y-4 text-left">
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-secondary/20 rounded-full flex items-center justify-center mt-0.5">
                          <Check className="h-4 w-4 text-secondary" />
                        </div>
                        <span className="text-muted-foreground">Everything in Standard</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-secondary/20 rounded-full flex items-center justify-center mt-0.5">
                          <Check className="h-4 w-4 text-secondary" />
                        </div>
                        <span className="text-muted-foreground">Full customization</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-secondary/20 rounded-full flex items-center justify-center mt-0.5">
                          <Check className="h-4 w-4 text-secondary" />
                        </div>
                        <span className="text-muted-foreground">Priority support</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-secondary/20 rounded-full flex items-center justify-center mt-0.5">
                          <Check className="h-4 w-4 text-secondary" />
                        </div>
                        <span className="text-muted-foreground">Ongoing optimization</span>
                      </div>
                    </div>
                    <EnhancedButton asChild className="w-full" variant="premium" size="lg">
                      <Link to="/contact">Get Started</Link>
                    </EnhancedButton>
                  </EnhancedCardContent>
                </EnhancedCard>
              </article>
            </div>
          </div>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection className="py-20 bg-gradient-primary text-white relative overflow-hidden" aria-labelledby="cta-heading" delay={800}>
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary to-secondary opacity-90"></div>
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/5 rounded-full blur-2xl"></div>
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 id="cta-heading" className="font-display leading-tight">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl opacity-90 leading-relaxed max-w-2xl mx-auto">
                Let's discuss how our data solutions can drive your business forward. 
                Get a free consultation with our experts today.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <EnhancedButton 
                  asChild 
                  size="xl" 
                  variant="elegant"
                  className="group"
                >
                  <Link to="/contact">
                    Schedule a Consultation
                    <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  </Link>
                </EnhancedButton>
                <EnhancedButton 
                  asChild 
                  size="xl" 
                  variant="elegant"
                  className="group"
                >
                  <Link to="/services">
                    View All Services
                    <TrendingUp className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </EnhancedButton>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <Footer />
      </div>
    </>
  );
};

export default Index;