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

const PHONE = '+971585806744';
const WA_MESSAGE = encodeURIComponent("Hi! I'd like to book a training assessment for my dog.");
const WA_URL = `https://wa.me/${PHONE}?text=${WA_MESSAGE}`;

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 sm:py-28" style={{ backgroundColor: '#F9F7F2' }}>
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <h2 style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: 'clamp(3rem, 8vw, 5.5rem)',
          fontWeight: 600,
          color: '#1D1D1B',
          lineHeight: 1.0,
        }} className="mb-14 sm:mb-20">
          How It Works
        </h2>

        <div className="flex flex-col gap-0">
          {steps.map((step, i) => (
            <div key={i}>
              <div className="py-8 sm:py-10">
                <h3 style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
                  fontWeight: 500,
                  color: '#1D1D1B',
                  lineHeight: 1.1,
                }} className="mb-3">
                  {step.title}
                </h3>
                <p className="text-sm sm:text-base leading-relaxed max-w-lg" style={{ color: '#555', fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>
                  {step.desc}
                </p>
              </div>
              {i < steps.length - 1 && (
                <div className="h-px w-full" style={{ backgroundColor: '#e8e4dc' }} />
              )}
            </div>
          ))}
        </div>

        <div className="mt-14 sm:mt-20">
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-xs font-bold tracking-widest uppercase px-8 py-4 transition-opacity hover:opacity-90"
            style={{ backgroundColor: '#214A32', color: '#fff' }}
          >
            Schedule Your Consultation
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <p className="mt-4 text-xs" style={{ color: '#999', fontFamily: 'Inter, sans-serif' }}>
            No obligation. No pressure. Just honest advice.
          </p>
        </div>
      </div>
    </section>
  );
}
