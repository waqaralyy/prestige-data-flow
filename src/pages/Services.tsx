import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { 
  BarChart3, 
  Brain, 
  Zap, 
  Database, 
  TrendingUp, 
  Shield,
  Clock,
  Target,
  Users,
  Lightbulb,
  DollarSign,
  Scaling
} from "lucide-react";

const Services = () => {
  const mainServices = [
    {
      icon: Zap,
      title: "Data Pipeline Automation",
      description: "Streamline your data workflows with robust automation tools that reduce errors and save time.",
      features: [
        "Automated data ingestion",
        "Error detection and handling",
        "Workflow orchestration",
        "Performance optimization"
      ]
    },
    {
      icon: Database,
      title: "Data Integration & Orchestration",
      description: "Connect diverse data sources for a unified and accessible data environment.",
      features: [
        "Multi-source data integration",
        "Real-time data synchronization",
        "API orchestration",
        "Cloud and on-premise connectivity"
      ]
    },
    {
      icon: Shield,
      title: "Monitoring & Quality Assurance",
      description: "Ensure data accuracy and reliability with continuous monitoring and quality checks.",
      features: [
        "Real-time data monitoring",
        "Data quality validation",
        "Anomaly detection",
        "Compliance reporting"
      ]
    }
  ];

  const processSteps = [
    {
      icon: Target,
      title: "Discovery",
      description: "We analyze your current data landscape and identify opportunities for improvement."
    },
    {
      icon: Lightbulb,
      title: "Strategy",
      description: "Develop a customized roadmap aligned with your business objectives and goals."
    },
    {
      icon: Users,
      title: "Implementation",
      description: "Execute the solution with our expert team ensuring minimal disruption to operations."
    },
    {
      icon: Clock,
      title: "Optimization",
      description: "Continuously monitor and refine solutions for maximum performance and ROI."
    }
  ];

  const clientBenefits = [
    {
      icon: DollarSign,
      title: "Save Time & Costs",
      description: "Automate and streamline your data processes.",
      highlight: "Reduce operational costs by up to 40%"
    },
    {
      icon: Brain,
      title: "Smarter Decisions",
      description: "Get clear, actionable insights from your data.",
      highlight: "Make data-driven decisions with confidence"
    },
    {
      icon: TrendingUp,
      title: "Scalable Solutions",
      description: "Our services grow with your business needs.",
      highlight: "Scale from startup to enterprise seamlessly"
    }
  ];

  return (
    <>
      <SEO 
        title="Data Analytics Services - Prestige Dataops"
        description="Comprehensive data analytics, business intelligence, and automation services. Transform your business with expert data consulting and predictive analytics solutions."
        keywords="data analytics services, business intelligence, process automation, predictive analytics, data infrastructure, data security"
        canonical="https://prestigedata.io/services"
      />
      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section className="pt-24 pb-16 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <header className="text-center space-y-6 max-w-4xl mx-auto">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">
                Comprehensive
                <span className="text-primary"> Data Solutions</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                From analytics to automation, we provide end-to-end data services that transform 
                how your business operates and competes in today's market.
              </p>
            </header>
          </div>
        </section>

        {/* Services Grid */}
        <main>
          <section className="py-20 bg-background" aria-labelledby="services-heading">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="space-y-64">
                {mainServices.map((service, index) => {
                  const isReverse = index === 1; // Second service has reverse layout
                  const serviceImage = index === 0 ? "/lovable-uploads/395926eb-3371-4dd5-9eeb-b0d704899841.png" : index === 1 ? "/lovable-uploads/cf3b9af6-96e8-4b8d-98b6-fe3863af875d.png" : index === 2 ? "/lovable-uploads/0c585f16-e71b-4f15-8697-f07fd02e47ee.png" : null;
                  
                  return (
                    <article key={index} className={`flex flex-col lg:flex-row items-center gap-12 ${isReverse ? 'lg:flex-row-reverse' : ''}`}>
                      {/* Content Side */}
                      <div className="flex-1 space-y-6">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                            <service.icon className="h-6 w-6 text-white" aria-hidden="true" />
                          </div>
                          <h3 className="text-2xl lg:text-3xl font-bold text-foreground">{service.title}</h3>
                        </div>
                        <p className="text-lg text-muted-foreground leading-relaxed">{service.description}</p>
                        <ul className="space-y-3" role="list">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center space-x-3">
                              <div className="w-2 h-2 bg-secondary rounded-full" aria-hidden="true"></div>
                              <span className="text-muted-foreground">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {/* Image Side */}
                      <div className="flex-1">
                        <div className="aspect-video rounded-2xl overflow-hidden bg-muted shadow-large transition-all duration-300 hover:shadow-xl hover:scale-105 group">
                          {serviceImage ? (
                            <img 
                              src={serviceImage} 
                              alt={`${service.title} visualization`}
                              className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                              <div className="text-center space-y-2">
                                <service.icon className="h-16 w-16 mx-auto opacity-50" />
                                <p className="text-sm">Image coming soon</p>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Client Benefits Section */}
          <section className="py-20 bg-gradient-to-br from-muted/50 to-muted" aria-labelledby="benefits-heading">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <header className="text-center space-y-6 mb-20">
                <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  CLIENT BENEFITS
                </div>
                <h2 id="benefits-heading" className="text-4xl lg:text-5xl font-bold text-foreground bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  Why Choose Our Data Solutions?
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Transform your business with proven benefits that deliver real value and measurable results.
                </p>
              </header>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {clientBenefits.map((benefit, index) => (
                  <Card key={index} className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-card/80 backdrop-blur-sm border border-border/50 hover:border-primary/20">
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <CardHeader className="relative text-center space-y-6 pt-8">
                      <div className="mx-auto w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-primary/25">
                        <benefit.icon className="h-10 w-10 text-white" aria-hidden="true" />
                      </div>
                      <CardTitle className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                        {benefit.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="relative text-center space-y-6 pb-8">
                      <p className="text-lg text-muted-foreground leading-relaxed">{benefit.description}</p>
                      <div className="inline-block bg-gradient-to-r from-secondary to-secondary/80 text-secondary-foreground px-6 py-3 rounded-full text-sm font-semibold shadow-md group-hover:shadow-lg transition-shadow duration-300">
                        {benefit.highlight}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Process Section */}
          <section className="py-20 bg-muted" aria-labelledby="process-heading">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <header className="text-center space-y-4 mb-16">
                <h2 id="process-heading" className="text-3xl lg:text-4xl font-bold text-foreground">
                  Our Process
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  A proven methodology that ensures successful project delivery and long-term value.
                </p>
              </header>
              
              <div className="relative">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                  {processSteps.map((step, index) => (
                    <article key={index} className="text-center space-y-4 relative">
                      {/* Step number */}
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-primary/10 text-primary text-sm font-bold rounded-full flex items-center justify-center lg:hidden">
                        {index + 1}
                      </div>
                      
                      <div className="mx-auto w-16 h-16 bg-primary rounded-2xl flex items-center justify-center relative shadow-lg">
                        <step.icon className="h-8 w-8 text-white" aria-hidden="true" />
                        
                        {/* Step number for desktop */}
                        <div className="hidden lg:flex absolute -top-3 -right-3 w-8 h-8 bg-white border-2 border-primary text-primary text-sm font-bold rounded-full items-center justify-center shadow-md">
                          {index + 1}
                        </div>
                      </div>
                      
                      {/* Connecting line for desktop */}
                      {index < processSteps.length - 1 && (
                        <>
                          {/* Horizontal line */}
                          <div className="hidden lg:block absolute top-8 right-0 w-full h-px bg-primary/30 transform translate-x-8"></div>
                          
                          {/* Arrow */}
                          <div className="hidden lg:block absolute top-7 right-2 w-3 h-3 border-r-2 border-t-2 border-primary/40 transform rotate-45 translate-x-8"></div>
                        </>
                      )}
                      
                      <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-white" aria-labelledby="cta-heading">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-3xl mx-auto space-y-6">
              <h2 id="cta-heading" className="text-3xl lg:text-4xl font-bold">
                Ready to Get Started?
              </h2>
              <p className="text-xl opacity-90">
                Let's discuss your data challenges and create a customized solution that delivers results. 
                Contact us today for a free consultation.
              </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg" 
                className="text-lg px-8 py-6 bg-accent hover:bg-accent text-accent-foreground"
              >
                <Link to="/contact">Get Free Consultation</Link>
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

export default Services;