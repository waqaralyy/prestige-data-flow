import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import { BarChart3, Brain, Zap, TrendingUp, Users, Shield } from "lucide-react";
import heroImage from "@/assets/hero-data-analytics.jpg";

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

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "95%", label: "Client Satisfaction" },
    { number: "50+", label: "Expert Consultants" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <>
      <SEO 
        title="PrestigeData.io - Data Analytics & Consulting Solutions"
        description="Transform your business with advanced data analytics, consulting, and automation solutions. Expert data scientists helping businesses grow through intelligent insights."
        keywords="data analytics, business intelligence, process automation, data consulting, predictive analytics, data visualization"
        canonical="https://prestigedata.io"
      />
      <StructuredData />
      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section className="relative pt-16 bg-gradient-hero overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <header className="space-y-8">
                <div className="space-y-4">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                    Empowering Your
                    <span className="bg-gradient-primary bg-clip-text text-transparent"> Data Operations</span>{" "}
                    for a Smarter Business
                  </h1>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    At Prestige DataOps, we deliver seamless data engineering and automation solutions to accelerate your business growth.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    asChild 
                    size="lg" 
                    className="bg-gradient-primary hover:opacity-90 transition-opacity text-lg px-8 py-6"
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
                  src={heroImage} 
                  alt="Advanced data analytics dashboard showing charts, graphs, and business intelligence visualizations for data-driven decision making" 
                  className="w-full h-auto rounded-2xl shadow-large"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-primary text-primary-foreground" aria-label="Company Statistics">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold mb-2">{stat.number}</div>
                  <div className="text-primary-foreground/80">{stat.label}</div>
                </div>
              ))}
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
                      <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center">
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
                  Why Choose PrestigeData.io?
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
                
                <Button asChild className="bg-gradient-primary hover:opacity-90">
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

        {/* CTA Section */}
        <section className="py-20 bg-gradient-primary text-white" aria-labelledby="cta-heading">
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
                  variant="outline" 
                  className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-primary"
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