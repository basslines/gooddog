export default function StructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LocalBusiness',
        '@id': 'https://gooddogtraining.ae/#business',
        name: 'Good Dog Training',
        serviceType: 'Professional Dog Training',
        url: 'https://gooddogtraining.ae/',
        telephone: '+971585806744',
        priceRange: 'AED 299 - AED 5099',
        description:
          'Professional in-home dog training in Abu Dhabi, UAE. Certified trainer using positive reinforcement methods.',
        areaServed: {
          '@type': 'City',
          name: 'Abu Dhabi',
        },
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Abu Dhabi',
          addressCountry: 'AE',
        },
        founder: {
          '@id': 'https://gooddogtraining.ae/#igor-zolkevic',
        },
      },
      {
        '@type': 'Person',
        '@id': 'https://gooddogtraining.ae/#igor-zolkevic',
        name: 'Igor Žolkević',
        jobTitle: 'Certified Professional Dog Trainer',
        sameAs: ['https://www.instagram.com/thegooddog.training'],
        worksFor: {
          '@id': 'https://gooddogtraining.ae/#business',
        },
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Abu Dhabi',
          addressCountry: 'AE',
        },
      },
    ],
  };

  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}
