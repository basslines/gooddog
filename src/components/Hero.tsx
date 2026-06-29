'use client';

const PHONE = '+971585806744';
const WA_MESSAGE = encodeURIComponent("Hi! I'd like to book a training assessment for my dog.");
const WA_URL = `https://wa.me/${PHONE}?text=${WA_MESSAGE}`;

export default function Hero() {
  return (
    <section
      style={{ backgroundColor: '#FAF8F4' }}
      className="lg:pt-0"
    >
      {/* MOBILE/TABLET — cijela sekcija stane u ekran */}
      <div
        className="lg:hidden flex flex-col"
        style={{ height: '100dvh' }}
      >
        {/* Header spacer */}
        <div className="shrink-0" style={{ height: '64px' }} />

        {/* Slika — 45% ekrana */}
        <div className="shrink-0" style={{ height: '42%' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1551730459-92db2a308d6a?q=80&w=987&auto=format&fit=crop"
            alt="Dog trainer with owner and dog"
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center top' }}
          />
        </div>

        {/* Tekst — ostatak ekrana */}
        <div className="flex-1 flex flex-col justify-center px-5 py-5">
          <p
            className="text-xs font-semibold tracking-[0.2em] uppercase mb-3"
            style={{ color: '#214A32' }}
          >
            Certified Professional Dog Trainer
          </p>
          <h1
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(1.9rem, 6vw, 2.8rem)',
              fontWeight: 600,
              lineHeight: 1.05,
              color: '#1D1D1B',
            }}
            className="mb-3"
          >
            Professional dog<br />
            training for{' '}
            <em style={{ color: '#214A32' }}>real life.</em>
          </h1>
          <div className="w-8 h-px mb-3" style={{ backgroundColor: '#1D1D1B' }} />
          <p
            className="text-xs leading-relaxed mb-5"
            style={{ color: '#444', fontFamily: 'Inter, sans-serif', fontWeight: 300 }}
          >
            Helping dogs and their owners enjoy a calmer, more confident everyday life through personalized positive reinforcement training.
          </p>
          <div className="flex flex-col sm:flex-row items-start gap-3">
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center text-xs font-bold tracking-widest uppercase px-6 py-3 w-full sm:w-auto transition-opacity hover:opacity-90"
              style={{ backgroundColor: '#214A32', color: '#fff' }}
            >
              Book an Assessment
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase transition-opacity hover:opacity-60 py-3"
              style={{ color: '#1D1D1B' }}
            >
              How It Works
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* DESKTOP — ostaje isto */}
      <div className="hidden lg:block max-w-6xl mx-auto px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-0 items-stretch" style={{ minHeight: '100dvh' }}>
          <div className="flex flex-col justify-center py-20 pr-16">
            <p
              className="text-xs font-semibold tracking-[0.2em] uppercase mb-6"
              style={{ color: '#214A32' }}
            >
              Certified Professional Dog Trainer
            </p>
            <h1
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: 'clamp(3rem, 7vw, 5rem)',
                fontWeight: 600,
                lineHeight: 1.05,
                color: '#1D1D1B',
              }}
              className="mb-5"
            >
              Professional dog<br />
              training for{' '}
              <em style={{ color: '#214A32' }}>real life.</em>
            </h1>
            <div className="w-10 h-px mb-7" style={{ backgroundColor: '#1D1D1B' }} />
            <p
              className="text-lg leading-relaxed mb-10 max-w-md"
              style={{ color: '#444', fontFamily: 'Inter, sans-serif', fontWeight: 300 }}
            >
              Helping dogs and their owners enjoy a calmer, more confident everyday life through personalized positive reinforcement training — at home, outdoors, and everywhere life happens.
            </p>
            <div className="flex items-start gap-5">
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center text-xs font-bold tracking-widest uppercase px-8 py-4 transition-opacity hover:opacity-90"
                style={{ backgroundColor: '#214A32', color: '#fff' }}
              >
                Book an Assessment
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase transition-opacity hover:opacity-60 py-4"
                style={{ color: '#1D1D1B' }}
              >
                How It Works
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
          <div className="relative">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1551730459-92db2a308d6a?q=80&w=987&auto=format&fit=crop"
              alt="Dog trainer with owner and dog"
              className="absolute inset-0 w-full h-full object-cover"
              style={{ objectPosition: 'center top' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
