export default function StructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      // =====================================================
      // LOCAL BUSINESS
      // =====================================================
      {
        '@type': 'LocalBusiness',
        '@id': 'https://gooddogtraining.ae/#business',
        name: 'Good Dog Training',
        url: 'https://gooddogtraining.ae/',
        telephone: '+971585806744',
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

        sameAs: ['https://www.instagram.com/thegooddog.training'],
      },

      // =====================================================
      // PERSON / TRAINER
      // =====================================================
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

      // =====================================================
      // WEBSITE
      // =====================================================
      {
        '@type': 'WebSite',
        '@id': 'https://gooddogtraining.ae/#website',
        url: 'https://gooddogtraining.ae/',
        name: 'Good Dog Training',
        description: 'Professional in-home dog training in Abu Dhabi, UAE.',
        publisher: {
          '@id': 'https://gooddogtraining.ae/#business',
        },
        inLanguage: 'en-AE',
      },

      // =====================================================
      // WEBPAGE
      // =====================================================
      {
        '@type': 'WebPage',
        '@id': 'https://gooddogtraining.ae/#webpage',
        url: 'https://gooddogtraining.ae/',
        name: 'Good Dog Training | Certified Professional Dog Trainer — Abu Dhabi, UAE',
        description:
          'Professional in-home dog training in Abu Dhabi, UAE. Certified trainer using positive reinforcement methods.',
        isPartOf: {
          '@id': 'https://gooddogtraining.ae/#website',
        },
        about: {
          '@id': 'https://gooddogtraining.ae/#business',
        },
        inLanguage: 'en-AE',
      },

      // =====================================================
      // SERVICES
      // =====================================================

      {
        '@type': 'Service',
        '@id': 'https://gooddogtraining.ae/#puppy-foundation-training',
        name: 'Puppy Foundation Training',
        description:
          'Training for puppies up to 6 months of age and first-time dog owners, focusing on good habits, confidence, socialisation and everyday skills.',
        provider: {
          '@id': 'https://gooddogtraining.ae/#business',
        },
        areaServed: {
          '@type': 'City',
          name: 'Abu Dhabi',
        },
        serviceType: 'Puppy Dog Training',
      },

      {
        '@type': 'Service',
        '@id': 'https://gooddogtraining.ae/#obedience-training',
        name: 'Obedience Training',
        description:
          'Everyday obedience training for dogs of all ages, including focus, engagement, reliable recall, loose leash walking and impulse control.',
        provider: {
          '@id': 'https://gooddogtraining.ae/#business',
        },
        areaServed: {
          '@type': 'City',
          name: 'Abu Dhabi',
        },
        serviceType: 'Dog Obedience Training',
      },

      {
        '@type': 'Service',
        '@id': 'https://gooddogtraining.ae/#behaviour-modification',
        name: 'Behaviour Modification',
        description:
          'Personalized dog behaviour training addressing unwanted behaviours such as reactivity, excessive barking, fear, anxiety, jumping and resource guarding.',
        provider: {
          '@id': 'https://gooddogtraining.ae/#business',
        },
        areaServed: {
          '@type': 'City',
          name: 'Abu Dhabi',
        },
        serviceType: 'Dog Behaviour Modification',
      },

      {
        '@type': 'Service',
        '@id': 'https://gooddogtraining.ae/#rescue-adopted-dog-training',
        name: 'Rescue & Adopted Dog Training',
        description:
          'Personalized training for rescue and adopted dogs focused on building trust, confidence, healthy routines, socialisation and basic obedience.',
        provider: {
          '@id': 'https://gooddogtraining.ae/#business',
        },
        areaServed: {
          '@type': 'City',
          name: 'Abu Dhabi',
        },
        serviceType: 'Rescue Dog Training',
      },

      {
        '@type': 'Service',
        '@id': 'https://gooddogtraining.ae/#loose-leash-walking',
        name: 'Loose Leash Walking',
        description:
          'Training that helps dogs walk calmly and comfortably without pulling while improving focus, engagement and behaviour around distractions.',
        provider: {
          '@id': 'https://gooddogtraining.ae/#business',
        },
        areaServed: {
          '@type': 'City',
          name: 'Abu Dhabi',
        },
        serviceType: 'Loose Leash Dog Training',
      },

      {
        '@type': 'Service',
        '@id': 'https://gooddogtraining.ae/#separation-anxiety-support',
        name: 'Separation Anxiety Support',
        description:
          'Step-by-step support helping dogs become more comfortable when left alone through independence training, calm routines and gradual home training.',
        provider: {
          '@id': 'https://gooddogtraining.ae/#business',
        },
        areaServed: {
          '@type': 'City',
          name: 'Abu Dhabi',
        },
        serviceType: 'Dog Separation Anxiety Support',
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
