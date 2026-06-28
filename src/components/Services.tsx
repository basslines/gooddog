'use client';
import { useState } from 'react';

const services = [
  {
    title: 'Puppy Foundation Training',
    desc: 'Build good habits, confidence, and communication from the very beginning. This program sets your puppy up for a lifetime of calm, cooperative behaviour — covering everything from basic commands and socialization to routines and settling skills.',
  },
  {
    title: 'Behaviour Modification',
    desc: 'Helping dogs overcome unwanted behaviours with calm, positive training. Whether your dog is reactive, anxious, fearful, or struggling with aggression, we work systematically to understand the root cause and build lasting, positive change.',
  },
  {
    title: 'Rescue & Adopted Dog Training',
    desc: 'Helping rescue dogs settle into their new home with confidence, trust, and skills. We use a gentle, patient approach to help your dog feel safe, build trust, and develop the skills they need to thrive in their new environment.',
  },
  {
    title: 'Obedience Training',
    desc: 'Practical skills for a calm, confident dog at home and outdoors. From sit, stay, and recall to loose leash walking and greeting people politely — we build reliable obedience through positive, consistent training in real-life environments.',
  },
  {
    title: 'Loose Leash Walking',
    desc: 'Enjoy calm, relaxed walks without pulling. Using clear communication and positive reinforcement, we teach your dog to walk politely on a loose leash — making every walk enjoyable for both of you.',
  },
  {
    title: 'Separation Anxiety Support',
    desc: "Helping dogs feel safe and secure when their owners are away from home. We work through a gradual, evidence-based program to help your dog build confidence and independence — reducing stress for both your dog and you.",
  },
];

function ServiceItem({ title, desc, isOpen, onClick }: {
  title: string; desc: string; isOpen: boolean; onClick: () => void;
}) {
  return (
    <div
      className="border-b cursor-pointer"
      style={{ borderColor: '#e8e4dc' }}
    >
      <button
        className="w-full flex items-center justify-between gap-4 py-5 sm:py-6 text-left"
        onClick={onClick}
      >
        <span style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: 'clamp(1.3rem, 3vw, 1.6rem)',
          fontWeight: 600,
          color: '#1D1D1B',
          lineHeight: 1.2,
        }}>
          {title}
        </span>
        <span
          className="shrink-0 w-8 h-8 flex items-center justify-center rounded-full border transition-all duration-300"
          style={{
            borderColor: isOpen ? '#214A32' : '#ccc',
            backgroundColor: isOpen ? '#214A32' : 'transparent',
            transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
          }}
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke={isOpen ? '#fff' : '#1D1D1B'} viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
        </span>
      </button>

      <div
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight: isOpen ? '200px' : '0px', opacity: isOpen ? 1 : 0 }}
      >
        <p className="pb-6 pr-12 text-sm sm:text-base leading-relaxed" style={{ color: '#555', fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>
          {desc}
        </p>
      </div>
    </div>
  );
}

export default function Services() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="services" className="py-20 sm:py-28" style={{ backgroundColor: '#FAF8F4' }}>
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <h2 style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: 'clamp(3rem, 8vw, 5.5rem)',
          fontWeight: 600,
          color: '#1D1D1B',
          lineHeight: 1.0,
        }} className="mb-12 sm:mb-16">
          Services
        </h2>

        <div>
          {/* First border */}
          <div className="border-t" style={{ borderColor: '#e8e4dc' }} />
          {services.map((s, i) => (
            <ServiceItem
              key={i}
              title={s.title}
              desc={s.desc}
              isOpen={openIndex === i}
              onClick={() => toggle(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
