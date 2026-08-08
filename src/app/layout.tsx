import type { Metadata } from 'next';
import './globals.css';
import StructuredData from './structured-data';

export const metadata: Metadata = {
  metadataBase: new URL('https://gooddogtraining.ae'),

  title:
    'Good Dog Training | Certified Professional Dog Trainer — Abu Dhabi, UAE',

  description:
    'Professional in-home dog training in Abu Dhabi, UAE. Certified trainer using positive reinforcement methods. Book a free consultation today.',

  keywords: [
    'dog training Abu Dhabi',
    'dog trainer Abu Dhabi',
    'dog training UAE',
    'dog trainer UAE',
    'professional dog trainer Abu Dhabi',
    'puppy training Abu Dhabi',
    'dog behaviour training Abu Dhabi',
    'in-home dog training Abu Dhabi',
  ],

  alternates: {
    canonical: '/',
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title:
      'Good Dog Training | Certified Professional Dog Trainer — Abu Dhabi, UAE',
    description:
      'Professional in-home dog training in Abu Dhabi, UAE. Certified trainer using positive reinforcement methods. Book a free consultation today.',
    url: 'https://gooddogtraining.ae/',
    siteName: 'Good Dog Training',
    locale: 'en_AE',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title:
      'Good Dog Training | Certified Professional Dog Trainer — Abu Dhabi, UAE',
    description:
      'Professional in-home dog training in Abu Dhabi, UAE. Certified trainer using positive reinforcement methods. Book a free consultation today.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='anonymous'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Inter:wght@300;400;500;600&display=swap'
          rel='stylesheet'
        />
      </head>
      <body suppressHydrationWarning>
        <StructuredData /> {children}
      </body>
    </html>
  );
}
