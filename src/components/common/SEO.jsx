import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title, 
  description, 
  keywords, 
  canonical, 
  ogTitle, 
  ogDescription, 
  ogImage, 
  ogType = 'website' 
}) => {
  const siteTitle = 'Falcon GmbH';
  const fullTitle = title ? (title.includes(siteTitle) ? title : `${title} | ${siteTitle}`) : 'Falcon GmbH | Sicherheitsdienst und Dienstleistung in Köln und NRW';
  const defaultDescription = 'Die Falcon GmbH steht für Sicherheit- und Dienstleistungen des einundzwanzigsten Jahrhunderts. Als modernes Sicherheitsunternehmen aus Köln verbinden wir erfahrenes Fachpersonal mit digitalen Kontrollsystemen, vernetzten Live-Schaltungen und präziser Einsatzplanung.';
  const defaultKeywords = 'Security, Sicherheitsdienst, Köln, NRW, Falcon Security, Objektschutz, Baustellenbewachung';
  const baseUrl = 'https://falcon-koeln.de';

  return (
    <Helmet>
      {/* Standard Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Open Graph Tags */}
      <meta property="og:title" content={ogTitle || fullTitle} />
      <meta property="og:description" content={ogDescription || description || defaultDescription} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={ogImage || `${baseUrl}/og-image.png`} />
      <meta property="og:url" content={canonical || baseUrl} />

      {/* Twitter Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={ogTitle || fullTitle} />
      <meta name="twitter:description" content={ogDescription || description || defaultDescription} />
      <meta name="twitter:image" content={ogImage || `${baseUrl}/og-image.png`} />

      {/* Structured Data (JSON-LD) */}
      <script type="application/ld+json">
        {`
        {
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Falcon GmbH",
          "image": "${baseUrl}/falcon-logo.png",
          "@id": "${baseUrl}",
          "url": "${baseUrl}",
          "telephone": "+49 221 56035898",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Mathias-Brüggen-Straße 1",
            "addressLocality": "Köln",
            "postalCode": "50827",
            "addressCountry": "DE"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 50.9691,
            "longitude": 6.8851
          },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday"
            ],
            "opens": "00:00",
            "closes": "23:59"
          },
          "sameAs": [
            "https://www.facebook.com/falconsecurity"
          ],
          "areaServed": {
            "@type": "State",
            "name": "Nordrhein-Westfalen"
          }
        }
        `}
      </script>
    </Helmet>
  );
};

export default SEO;
