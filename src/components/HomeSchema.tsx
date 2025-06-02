
import React from 'react';

const HomeSchema: React.FC = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Civic and Citizenship Education Alliance",
    "alternateName": "CCEA",
    "url": "https://ccea.org",
    "logo": "https://ccea.org/logo.png",
    "description": "Join a global network of K-12 schools, universities, and organizations committed to transforming civic and citizenship education across diverse local and national contexts.",
    "foundingDate": "2019",
    "memberOf": {
      "@type": "Organization",
      "name": "Global Education Network"
    },
    "areaServed": "Worldwide",
    "knowsAbout": [
      "Civic Education",
      "Citizenship Education",
      "Democratic Learning",
      "Educational Policy",
      "Teacher Training"
    ],
    "sameAs": [
      "https://twitter.com/CCEAlliance",
      "https://linkedin.com/company/ccea"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "CCEA - Civic and Citizenship Education Alliance",
    "url": "https://ccea.org",
    "description": "Join a global network of K-12 schools, universities, and organizations committed to transforming civic and citizenship education across diverse local and national contexts.",
    "publisher": {
      "@type": "Organization",
      "name": "Civic and Citizenship Education Alliance"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://ccea.org/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
};

export default HomeSchema;
