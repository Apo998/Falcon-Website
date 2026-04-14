interface SeoMetaDataOptions {
  title?: string
  description?: string
  keywords?: string
  canonical?: string
  ogTitle?: string
  ogDescription?: string
  ogImage?: string
  ogType?: 'website' | 'article'
}

export function useSeoMetaData({
  title,
  description,
  keywords,
  canonical,
  ogTitle,
  ogDescription,
  ogImage,
  ogType = 'website'
}: SeoMetaDataOptions) {
  const siteTitle = 'Falcon GmbH'
  const baseUrl = 'https://falcon-koeln.de'
  const defaultTitle =
    'Falcon GmbH | Sicherheitsdienst und Dienstleistung in Köln und NRW'
  const defaultDescription =
    'Die Falcon GmbH steht für Sicherheit- und Dienstleistungen des einundzwanzigsten Jahrhunderts. Als modernes Sicherheitsunternehmen aus Köln verbinden wir erfahrenes Fachpersonal mit digitalen Kontrollsystemen, vernetzten Live-Schaltungen und präziser Einsatzplanung.'
  const defaultKeywords =
    'Security, Sicherheitsdienst, Köln, NRW, Falcon Security, Objektschutz, Baustellenbewachung'
  const fullTitle = title
    ? title.includes(siteTitle)
      ? title
      : `${title} | ${siteTitle}`
    : defaultTitle
  const resolvedDescription = description || defaultDescription
  const resolvedCanonical = canonical || baseUrl
  const resolvedImage = ogImage || `${baseUrl}/og-image.png`

  useHead({
    title: fullTitle,
    link: canonical ? [{ rel: 'canonical', href: canonical }] : [],
    script: [
      {
        type: 'application/ld+json',
        children: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          name: 'Falcon GmbH',
          image: `${baseUrl}/falcon-logo.png`,
          '@id': baseUrl,
          url: baseUrl,
          telephone: '+49 221 56035898',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Mathias-Brüggen-Straße 1',
            addressLocality: 'Köln',
            postalCode: '50827',
            addressCountry: 'DE'
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: 50.9691,
            longitude: 6.8851
          },
          openingHoursSpecification: {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: [
              'Monday',
              'Tuesday',
              'Wednesday',
              'Thursday',
              'Friday',
              'Saturday',
              'Sunday'
            ],
            opens: '00:00',
            closes: '23:59'
          },
          sameAs: ['https://www.facebook.com/falconsecurity'],
          areaServed: {
            '@type': 'State',
            name: 'Nordrhein-Westfalen'
          }
        })
      }
    ]
  })

  useSeoMeta({
    description: resolvedDescription,
    keywords: keywords || defaultKeywords,
    ogTitle: ogTitle || fullTitle,
    ogDescription: ogDescription || resolvedDescription,
    ogType,
    ogImage: resolvedImage,
    ogUrl: resolvedCanonical,
    twitterCard: 'summary_large_image',
    twitterTitle: ogTitle || fullTitle,
    twitterDescription: ogDescription || resolvedDescription,
    twitterImage: resolvedImage
  })
}
