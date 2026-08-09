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
        priceRange: '$$',
        image: 'https://gooddogtraining.ae/assets/trainer.jpg',
        logo: 'https://gooddogtraining.ae/icon.png',
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
        name:
          'Good Dog Training | Certified Professional Dog Trainer — Abu Dhabi, UAE',
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
      // SERVICE 1 — PUPPY FOUNDATION TRAINING
      // =====================================================
      {
        '@type': 'Service',
        '@id':
          'https://gooddogtraining.ae/#puppy-foundation-training',
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

      // =====================================================
      // SERVICE 2 — OBEDIENCE TRAINING
      // =====================================================
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

      // =====================================================
      // SERVICE 3 — BEHAVIOUR MODIFICATION
      // =====================================================
      {
        '@type': 'Service',
        '@id':
          'https://gooddogtraining.ae/#behaviour-modification',
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

      // =====================================================
      // SERVICE 4 — RESCUE & ADOPTED DOG TRAINING
      // =====================================================
      {
        '@type': 'Service',
        '@id':
          'https://gooddogtraining.ae/#rescue-adopted-dog-training',
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

      // =====================================================
      // SERVICE 5 — LOOSE LEASH WALKING
      // =====================================================
      {
        '@type': 'Service',
        '@id':
          'https://gooddogtraining.ae/#loose-leash-walking',
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

      // =====================================================
      // SERVICE 6 — SEPARATION ANXIETY SUPPORT
      // =====================================================
      {
        '@type': 'Service',
        '@id':
          'https://gooddogtraining.ae/#separation-anxiety-support',
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

      // =====================================================
      // FAQ PAGE
      // =====================================================
      {
        '@type': 'FAQPage',
        '@id': 'https://gooddogtraining.ae/#faq',
        url: 'https://gooddogtraining.ae/#faq',
        name: 'Frequently Asked Questions | Good Dog Training',
        isPartOf: {
          '@id': 'https://gooddogtraining.ae/#webpage',
        },
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Do you train at my home?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. All training takes place in your home and in real-life environments where your dog lives and experiences everyday situations. This helps create lasting results that truly fit your lifestyle.',
            },
          },
          {
            '@type': 'Question',
            name: 'Do I need to be present during training?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Yes, and that's intentional. Your involvement is essential — you're the one who lives with your dog every day. I'll guide you through every technique so you can continue reinforcing good behaviour between sessions and long after training ends.",
            },
          },
          {
            '@type': 'Question',
            name: 'How many sessions will my dog need?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Every dog is different. After an initial assessment, I'll recommend a program tailored to your dog's specific needs, your goals, and your lifestyle. Some dogs make significant progress in just a few sessions; others benefit from a longer program.",
            },
          },
          {
            '@type': 'Question',
            name: 'Do you use positive reinforcement?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes, exclusively. I use modern, science-based positive reinforcement methods — no choke chains, no shock collars, no punishment. Only clear communication, consistency, and reward-based techniques that build a strong relationship between you and your dog.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can you help rescue and adopted dogs?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Absolutely. Rescue dogs often need extra patience and a gentle approach, especially if they carry past trauma or anxiety. I have experience working with dogs from difficult backgrounds and will design a program that builds trust and confidence at a pace that suits your dog.',
            },
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}