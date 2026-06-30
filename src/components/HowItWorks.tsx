'use client';

const steps = [
  {
    title: 'Get in touch',
    desc: 'Book a free 15-minute consultation to discuss your dog, your goals, and the best place to start.',
  },
  {
    title: 'Assessment',
    desc: "I'll assess your dog in the environment where everyday life happens and create a personalized training plan.",
  },
  {
    title: 'Training',
    desc: "Together we'll build practical skills using modern positive reinforcement training.",
  },
  {
    title: 'Enjoy life together',
    desc: 'Enjoy a calmer, more confident everyday life with your dog.',
  },
];

export default function HowItWorks() {
  return (
    <section
      id='how-it-works'
      className='py-8 sm:py-24 lg:py-32'
      style={{ backgroundColor: '#FAF8F4' }} // Standardizirana topla pozadina
    >
      <div className='max-w-4xl mx-auto px-5 sm:px-8'>
        <p
          className='text-xs font-semibold tracking-[0.2em] uppercase mb-3'
          style={{ color: '#214A32' }}
        >
          The Journey
        </p>
        <div
          className='w-10 h-px mb-5'
          style={{ backgroundColor: '#1D1D1B' }}
        />
        <h2
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(2.5rem, 7vw, 4.5rem)',
            fontWeight: 600,
            color: '#1D1D1B',
            lineHeight: 1.1,
          }}
          className='mb-12 sm:mb-20'
        >
          How It Works
        </h2>

        {/* Timeline Kontejner s vertikalnom poveznicom */}
        <div className='relative flex flex-col'>
          {/* Fina vertikalna linija koja vodi oko kroz korake */}
          <div 
            className='absolute left-[18px] sm:left-[26px] top-3 bottom-3 w-px opacity-30'
            style={{ backgroundColor: '#214A32' }}
          />

          {steps.map((step, i) => (
            <div 
              key={i} 
              className='relative pl-12 sm:pl-20 pb-10 last:pb-0 group'
            >
              {/* Indikator broja (Krug) koji suptilno reagira na interakciju */}
              <div 
                className='absolute left-0 top-0 w-9 h-9 sm:w-14 sm:h-14 rounded-full flex items-center justify-center border z-10 transition-all duration-300 group-hover:scale-105 group-hover:border-[#1D1D1B]'
                style={{ 
                  backgroundColor: '#FAF8F4', 
                  borderColor: '#214A32',
                }}
              >
                <span 
                  style={{ 
                    fontFamily: 'Cormorant Garamond, serif',
                    color: '#214A32',
                  }}
                  className="text-sm sm:text-xl font-semibold group-hover:text-[#1D1D1B] transition-colors"
                >
                  0{i + 1}
                </span>
              </div>

              {/* Sadržaj koraka */}
              <div className='transition-all duration-300 transform translate-x-0 group-hover:translate-x-1'>
                <h3
                  style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: 'clamp(1.4rem, 4vw, 2rem)',
                    fontWeight: 600,
                    color: '#1D1D1B',
                    lineHeight: 1.2,
                  }}
                  className='mb-2 pt-1 sm:pt-3'
                >
                  {step.title}
                </h3>
                <p
                  className='text-sm sm:text-base leading-relaxed max-w-xl'
                  style={{
                    color: '#555',
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 300,
                  }}
                >
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
