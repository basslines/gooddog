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
      className='py-4 sm:py-20 lg:py-28'
      style={{ backgroundColor: '#F9F7F2' }}
    >
      <div className='max-w-6xl mx-auto px-5 sm:px-8'>
        <p
          className='text-xs font-semibold tracking-[0.2em] mb-4'
          style={{ color: '#214A32' }}
        >
          Good Dog Training
        </p>
        <div
          className='w-10 h-px mb-4'
          style={{ backgroundColor: '#1D1D1B' }}
        />
        <h2
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(3rem, 8vw, 5.5rem)',
            fontWeight: 600,
            color: '#1D1D1B',
            lineHeight: 1.0,
          }}
          className='mb-2 sm:mb-14 lg:mb-20'
        >
          How It Works
        </h2>

        <div className='flex flex-col gap-0'>
          {steps.map((step, i) => (
            <div key={i}>
              <div className='py-5 sm:py-8'>
                <h3
                  style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
                    fontWeight: 500,
                    color: '#1D1D1B',
                    lineHeight: 1.1,
                  }}
                  className='mb-3'
                >
                  {step.title}
                </h3>
                <p
                  className='text-sm sm:text-base leading-relaxed max-w-lg'
                  style={{
                    color: '#555',
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 300,
                  }}
                >
                  {step.desc}
                </p>
              </div>
              {i < steps.length - 1 && (
                <div
                  className='h-px w-full'
                  style={{ backgroundColor: '#e8e4dc' }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
