import { useEffect } from 'react';

const StructuredData = () => {
  useEffect(() => {
    // Remove existing structured data
    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) {
      existingScript.remove();
    }

    // Organization structured data
    const organizationData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Prestige Dataops",
      "url": "https://prestigedata.io",
      "logo": {
        "@type": "ImageObject",
        "url": "https://prestigedata.io/logo.png"
      },
      "description": "Transform your business with advanced data analytics, consulting, and automation solutions. Prestige Dataops delivers insights that drive growth.",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-555-123-4567",
        "contactType": "customer service",
        "email": "info@prestigedata.io",
        "availableLanguage": "English"
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "123 Data Street, Suite 100",
        "addressLocality": "New York",
        "addressRegion": "NY",
        "postalCode": "10001",
        "addressCountry": "US"
      },
      "sameAs": [
        "https://www.linkedin.com/company/prestigedata",
        "https://twitter.com/prestigedata"
      ],
      "foundingDate": "2014",
      "numberOfEmployees": "50-100",
      "slogan": "Transform Your Data Into Growth",
      "services": [
        "Data Analytics & Visualization",
        "Business Intelligence",
        "Process Automation",
        "Data Infrastructure",
        "Predictive Analytics",
        "Data Security & Compliance"
      ]
    };

    // Create and append script tag
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(organizationData);
    document.head.appendChild(script);

  }, []);

  return null;
};

export default StructuredData;