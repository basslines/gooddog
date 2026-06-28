'use client';
import { useState } from 'react';

const faqs = [
  {
    q: 'Do you train at my home?',
    a: 'Yes. All training takes place in your home and in real-life environments where your dog lives and experiences everyday situations. This helps create lasting results that truly fit your lifestyle.',
  },
  {
    q: 'Do I need to be present during training?',
    a: "Yes, and that's intentional. Your involvement is essential — you're the one who lives with your dog every day. I'll guide you through every technique so you can continue reinforcing good behaviour between sessions and long after training ends.",
  },
  {
    q: 'How many sessions will my dog need?',
    a: "Every dog is different. After an initial assessment, I'll recommend a program tailored to your dog's specific needs, your goals, and your lifestyle. Some dogs make significant progress in just a few sessions; others benefit from a longer program.",
  },
  {
    q: 'Do you use positive reinforcement?',
    a: 'Yes, exclusively. I use modern, science-based positive reinforcement methods — no choke chains, no shock collars, no punishment. Only clear communication, consistency, and reward-based techniques that build a strong relationship between you and your dog.',
  },
  {
    q: 'Can you help rescue and adopted dogs?',
    a: 'Absolutely. Rescue dogs often need extra patience and a gentle approach, especially if they carry past trauma or anxiety. I have experience working with dogs from difficult backgrounds and will design a program that builds trust and confidence at a pace that suits your dog.',
  },
];

function FAQItem({ q, a, isOpen, onClick }: { q: string; a: string; isOpen: boolean; onClick: () => void }) {
  return (
    <div className="border-b" style={{ borderColor: '#e8e4dc' }}>
      <button className="w-full flex items-center justify-between gap-4 py-5 sm:py-6 text-left" onClick={onClick}>
        <span style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',
          fontWeight: 600,
          color: '#1D1D1B',
          lineHeight: 1.3,
        }}>
          {q}
        </span>
        <span
          className="shrink-0 w-7 h-7 flex items-center justify-center rounded-full border transition-all duration-300"
          style={{
            borderColor: isOpen ? '#214A32' : '#ccc',
            backgroundColor: isOpen ? '#214A32' : 'transparent',
          }}
        >
          <svg className="w-3 h-3 transition-transform duration-300" fill="none" stroke={isOpen ? '#fff' : '#1D1D1B'} viewBox="0 0 24 24" strokeWidth={2.5}
            style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      <div className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight: isOpen ? '300px' : '0px', opacity: isOpen ? 1 : 0 }}>
        <p className="pb-6 pr-12 text-sm sm:text-base leading-relaxed" style={{ color: '#666', fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>
          {a}
        </p>
      </div>
    </div>
  );
}

const PHONE = '+971585806744';
const WA_MESSAGE = encodeURIComponent("Hi! I'd like to book a training assessment for my dog.");
const WA_URL = `https://wa.me/${PHONE}?text=${WA_MESSAGE}`;

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="faq" className="py-20 sm:py-28" style={{ backgroundColor: '#F9F7F2' }}>
      <div className="max-w-3xl mx-auto px-5 sm:px-8">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: '#214A32' }}>
          Questions I Often Hear
        </p>
        <div className="w-10 h-px mb-8" style={{ backgroundColor: '#1D1D1B' }} />
        <h2 style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: 'clamp(2.8rem, 7vw, 4.5rem)',
          fontWeight: 600,
          color: '#1D1D1B',
          lineHeight: 1.05,
        }} className="mb-14">
          A few answers<br />before we meet.
        </h2>

        {/* FAQ */}
        <div className="border-t" style={{ borderColor: '#e8e4dc' }}>
          {faqs.map((faq, i) => (
            <FAQItem key={i} q={faq.q} a={faq.a} isOpen={openIndex === i} onClick={() => toggle(i)} />
          ))}
        </div>

        {/* CTA Card */}
        <div className="mt-14 p-8 sm:p-12 text-center" style={{ backgroundColor: '#eef2ee', borderRadius: '4px' }}>
          <h3 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: 600,
            color: '#1D1D1B',
          }} className="mb-4">
            Ready to take the first step?
          </h3>
          <p className="text-sm sm:text-base mb-8 max-w-xs mx-auto leading-relaxed" style={{ color: '#666', fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>
            A calmer, more enjoyable life with your dog starts with one conversation.
          </p>
          <a href={WA_URL} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-xs font-bold tracking-widest uppercase px-8 py-4 transition-opacity hover:opacity-90"
            style={{ backgroundColor: '#214A32', color: '#fff' }}>
            Schedule Your Consultation
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <p className="mt-5 text-xs flex items-center justify-center gap-3" style={{ color: '#999' }}>
            <span>No obligation</span>
            <span className="w-1 h-1 rounded-full inline-block" style={{ backgroundColor: '#ccc' }} />
            <span>No pressure</span>
            <span className="w-1 h-1 rounded-full inline-block" style={{ backgroundColor: '#ccc' }} />
            <span>Honest advice</span>
          </p>
        </div>
      </div>
    </section>
  );
}
