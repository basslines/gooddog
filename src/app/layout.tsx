import type { Metadata } from 'next';
import Script from 'next/script';
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

  icons: {
    icon: '/icon.png',
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

    images: [
      {
        url: '/good_dog_preview.jpg',
        width: 1200,
        height: 630,
        alt: 'Good Dog Training — Abu Dhabi, UAE',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',

    title:
      'Good Dog Training | Certified Professional Dog Trainer — Abu Dhabi, UAE',

    description:
      'Professional in-home dog training in Abu Dhabi, UAE. Certified trainer using positive reinforcement methods. Book a free consultation today.',

    images: ['/good_dog_preview.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* Structured Data / SEO */}
        <StructuredData />

        {/* Google Analytics 4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-Z2B9797LMZ"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-Z2B9797LMZ');
          `}
        </Script>

        {children}
      </body>
    </html>
  );
}