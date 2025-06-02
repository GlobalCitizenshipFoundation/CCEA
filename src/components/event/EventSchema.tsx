
import React from 'react';

interface EventSchemaProps {
  event: {
    title: string;
    description: string;
    startDate: string;
    endDate: string;
    isVirtual: boolean;
    location?: {
      venue?: string;
      address?: string;
      city?: string;
      country?: string;
    };
    registrationInfo?: {
      registrationUrl?: string;
      fees?: {
        regular?: number;
      };
    };
  };
}

const EventSchema: React.FC<EventSchemaProps> = ({ event }) => {
  const eventSchema = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": event.title,
    "description": event.description,
    "startDate": event.startDate,
    "endDate": event.endDate,
    "eventStatus": "https://schema.org/EventScheduled",
    "eventAttendanceMode": event.isVirtual 
      ? "https://schema.org/OnlineEventAttendanceMode" 
      : "https://schema.org/OfflineEventAttendanceMode",
    "location": event.isVirtual 
      ? {
          "@type": "VirtualLocation",
          "url": event.registrationInfo?.registrationUrl || window.location.href
        }
      : {
          "@type": "Place",
          "name": event.location?.venue,
          "address": {
            "@type": "PostalAddress",
            "streetAddress": event.location?.address,
            "addressLocality": event.location?.city,
            "addressCountry": event.location?.country
          }
        },
    "organizer": {
      "@type": "Organization",
      "name": "Civic and Citizenship Education Alliance"
    },
    "offers": event.registrationInfo?.fees?.regular ? {
      "@type": "Offer",
      "price": event.registrationInfo.fees.regular,
      "priceCurrency": "EUR",
      "availability": "https://schema.org/InStock",
      "url": event.registrationInfo.registrationUrl
    } : undefined
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }}
    />
  );
};

export default EventSchema;
