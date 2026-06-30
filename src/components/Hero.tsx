'use client';

const PHONE = '+971585806744';
const WA_MESSAGE = encodeURIComponent("Hi! I'd like to book a training assessment for my dog.");
const WA_URL = `https://wa.me/${PHONE}?text=${WA_MESSAGE}`;

export default function Hero() {
  return (
    <section
      style={{ backgroundColor: '#FAF8F4' }}
      className="pt-16 lg:pt-24"
    >
      <div className="max-w-4xl mx-auto px-5 lg:px-8">
        
        {/* SLIKA — Uvijek na vrhu, 100% širine, bez kropanja na svim uređajima */}
        <div className="w-full rounded-xl overflow-hidden" style={{ backgroundColor: '#eee8da' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1697975303494-af9e6e5cb8b6?w=1200&auto=format&fit=crop&q=80"
            alt="Dog trainer with owner and dog"
            className="w-full h-auto block"
          />
        </div>

        {/* TEKST — Odmah ispod slike na svim ekranima */}
        <div className="flex flex-col pt-6 pb-12 lg:pb-20">
          <p
            className="text-xs font-semibold tracking-[0.2em] uppercase mb-3 lg:mb-4"
            style={{ color: '#214A32' }}
          >
            Certified Professional Dog Trainer
          </p>
          
          <h1
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(2rem, 5vw, 4rem)',
              fontWeight: 600,
              lineHeight: 1.1,
              color: '#1D1D1B',
            }}
            className="mb-4"
          >
            Professional dog<br />
            training for{' '}
            <em style={{ color: '#214A32' }}>real life.</em>
          </h1>
          
          <div className="w-12 h-px mb-4 lg:mb-6" style={{ backgroundColor: '#1D1D1B' }} />
          
          <p
            className="text-sm lg:text-lg leading-relaxed mb-6 lg:mb-8 max-w-2xl"
            style={{ color: '#444', fontFamily: 'Inter, sans-serif', fontWeight: 300 }}
          >
            Helping dogs and their owners enjoy a calmer, more confident everyday life through 
            personalized positive reinforcement training — at home, outdoors, and everywhere life happens.
          </p>
          
          {/* Gumbi */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center text-xs font-bold tracking-widest uppercase px-8 py-4 w-full sm:w-auto transition-opacity hover:opacity-90"
              style={{ backgroundColor: '#214A32', color: '#fff' }}
            >
              Book an Assessment
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase transition-opacity hover:opacity-60 py-3 px-4 sm:px-0"
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
    </section>
  );
}