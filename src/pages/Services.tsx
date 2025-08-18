import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
  Lightbulb
} from "lucide-react";

const Services = () => {
  const mainServices = [
    {
      icon: BarChart3,
      title: "Data Analytics & Visualization",
      description: "Transform complex data into clear, actionable insights with advanced analytics and interactive visualizations.",
      features: [
        "Advanced statistical analysis",
        "Interactive dashboards",
        "Predictive modeling",
        "Real-time monitoring"
      ]
    },
    {
      icon: Brain,
      title: "Business Intelligence",
      description: "Empower decision-making with comprehensive BI solutions that provide deep insights into your business operations.",
      features: [
        "Custom BI dashboards",
        "Performance metrics tracking",
        "Strategic planning support",
        "Competitive analysis"
      ]
    },
    {
      icon: Zap,
      title: "Process Automation",
      description: "Streamline operations and boost efficiency with intelligent automation solutions tailored to your business needs.",
      features: [
        "Workflow automation",
        "Data integration pipelines",
        "Robotic process automation",
        "Custom API development"
      ]
    },
    {
      icon: Database,
      title: "Data Infrastructure",
      description: "Build robust, scalable data infrastructure that grows with your business and ensures data reliability.",
      features: [
        "Cloud data warehousing",
        "Data lake architecture",
        "ETL/ELT processes",
        "Data governance"
      ]
    },
    {
      icon: TrendingUp,
      title: "Predictive Analytics",
      description: "Leverage machine learning and AI to forecast trends, identify opportunities, and mitigate risks.",
      features: [
        "Machine learning models",
        "Forecasting algorithms",
        "Risk assessment",
        "Market trend analysis"
      ]
    },
    {
      icon: Shield,
      title: "Data Security & Compliance",
      description: "Ensure your data is protected and compliant with industry standards and regulations.",
      features: [
        "Data encryption",
        "GDPR compliance",
        "Security audits",
        "Access control"
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

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">
              Comprehensive
              <span className="bg-gradient-primary bg-clip-text text-transparent"> Data Solutions</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              From analytics to automation, we provide end-to-end data services that transform 
              how your business operates and competes in today's market.
            </p>
            <Button 
              asChild 
              size="lg" 
              className="bg-gradient-primary hover:opacity-90 text-lg px-8 py-6"
            >
              <Link to="/contact">Request a Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Our Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We offer a comprehensive suite of data services designed to meet your unique business challenges.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {mainServices.map((service, index) => (
              <Card key={index} className="border-0 shadow-medium hover:shadow-large transition-shadow duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-secondary rounded-full"></div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Our Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery and long-term value.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center">
                  <step.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold">
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
                variant="secondary"
                className="text-lg px-8 py-6"
              >
                <Link to="/contact">Get Free Consultation</Link>
              </Button>
              <Button 
                asChild 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-primary"
              >
                <Link to="/about">Learn About Our Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;