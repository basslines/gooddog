'use client';

const PHONE = '+971585806744';
const WA_MESSAGE = encodeURIComponent("Hi! I'd like to book a training assessment for my dog.");
const WA_URL = `https://wa.me/${PHONE}?text=${WA_MESSAGE}`;

export default function Hero() {
  return (
    <section className="pt-16 sm:pt-20" style={{ backgroundColor: '#FAF8F4' }}>

      {/* MOBILE: image full-width on top */}
      <div className="lg:hidden w-full">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1551730459-92db2a308d6a?q=80&w=987&auto=format&fit=crop"
          alt="Dog trainer with owner and dog"
          className="w-full object-cover"
          style={{ maxHeight: '70vw', minHeight: '260px', objectPosition: 'center top' }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-0 items-stretch min-h-[calc(100vh-80px)]">

          {/* Text — always first in DOM but shown below image on mobile via order */}
          <div className="flex flex-col justify-center py-10 lg:py-20 pr-0 lg:pr-16 order-2 lg:order-1">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-6" style={{ color: '#214A32' }}>
              Certified Professional Dog Trainer
            </p>
            <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(3rem, 7vw, 5rem)', fontWeight: 600, lineHeight: 1.05, color: '#1D1D1B' }} className="mb-5">
              Professional dog<br />
              training for{' '}
              <em style={{ color: '#214A32' }}>real life.</em>
            </h1>
            <div className="w-10 h-px mb-7" style={{ backgroundColor: '#1D1D1B' }} />
            <p className="text-base sm:text-lg leading-relaxed mb-10 max-w-md" style={{ color: '#444', fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>
              Helping dogs and their owners enjoy a calmer, more confident everyday life through personalized positive reinforcement training — at home, outdoors, and everywhere life happens.
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-5">
              <a href={WA_URL} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center text-xs font-bold tracking-widest uppercase px-8 py-4 w-full sm:w-auto transition-opacity hover:opacity-90"
                style={{ backgroundColor: '#214A32', color: '#fff' }}>
                Book an Assessment
              </a>
              <a href="#how-it-works"
                className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase transition-opacity hover:opacity-60 py-4"
                style={{ color: '#1D1D1B' }}>
                How It Works
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Desktop image — right column, full height */}
          <div className="hidden lg:block relative order-2">
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
