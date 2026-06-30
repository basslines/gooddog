'use client';
import { useState } from 'react';

const services = [
  {
    title: 'Puppy Foundation Training',
    desc: 'Perfect for puppies up to 6 months of age and first-time dog owners. Together we\'ll build good habits from the very beginning and help your puppy grow into a confident, well-mannered companion.',
    subdesc: {
      listTitle: 'Training includes:',
      items: [
        'Toilet training',
        'Bite inhibition',
        'Loose leash walking',
        'Recall',
        'Calm behaviour at home',
        'Socialisation and confidence building',
      ],
    },
  },
  {
    title: 'Obedience Training',
    desc: 'Designed for dogs of all ages who need better everyday manners and clearer communication. We\'ll build reliable skills that make daily life easier, both at home and outdoors.',
    subdesc: {
      listTitle: 'Training includes:',
      items: [
        'Focus and engagement',
        'Sit, Down and Stay',
        'Reliable Recall',
        'Loose leash walking',
        'Greeting people politely',
        'Impulse control',
      ],
    },
  },
  {
    title: 'Behaviour Modification',
    desc: 'For dogs struggling with unwanted behaviours that affect everyday life. Every training plan is tailored to the individual dog, addressing the underlying cause rather than simply correcting the behaviour.',
    subdesc: {
      listTitle: 'Training includes:',
      items: [
        'Reactivity towards people or dogs',
        'Excessive barking',
        'Fear and anxiety',
        'Jumping up',
        'Resource guarding',
        'Confidence building',
      ],
    },
  },
  {
    title: 'Rescue & Adopted Dog Training',
    desc: 'Helping adopted dogs settle into their new home with patience, structure and understanding. Training is adapted to your dog\'s background, personality and pace of learning.',
    subdesc: {
      listTitle: 'Training includes:',
      items: [
        'Building trust and confidence',
        'Creating healthy routines',
        'Socialisation',
        'Lead walking',
        'Basic obedience',
        'Addressing fear-related behaviours',
      ],
    },
  },
  {
    title: 'Loose Leash Walking',
    desc: 'Turn stressful walks into calm, enjoyable time together. We\'ll teach your dog to walk comfortably by your side without pulling, while helping you understand how to maintain good walking habits.',
    subdesc: {
      listTitle: 'Training includes:',
      items: [
        'Loose leash walking',
        'Focus around distractions',
        'Calm walking routines',
        'Better engagement outdoors',
        'Passing people and dogs politely',
        'Practical walking techniques',
      ],
    },
  },
  {
    title: 'Separation Anxiety Support',
    desc: 'Helping dogs feel more comfortable and relaxed when left alone. We\'ll work gradually, building your dog\'s confidence while giving you a clear, step-by-step plan to follow between sessions.',
    subdesc: {
      listTitle: 'Training includes:',
      items: [
        'Building independence',
        'Calm departure routines',
        'Relaxation exercises',
        'Reducing anxiety-related behaviours',
        'Step-by-step home training plan',
        'Owner guidance and support',
      ],
    },
  },
];

function ServiceItem({
  title, desc, subdesc, isOpen, onClick,
}: {
  title: string;
  desc: string;
  subdesc: { listTitle: string; items: string[] };
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div
      className="border rounded-xl overflow-hidden transition-all duration-300 mb-4 shadow-sm"
      style={{
        borderColor: isOpen ? '#214A32' : '#e8e4dc',
        backgroundColor: isOpen ? '#FDFDFD' : '#fff',
      }}
    >
      {/* Cijela gornja zona je klikabilna — savršeno za palac na iPhoneu */}
      <div 
        onClick={onClick}
        className="flex items-start justify-between gap-4 p-5 sm:p-6 cursor-pointer select-none group"
      >
        <div className="flex-1">
          <h3
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(1.3rem, 4vw, 1.7rem)',
              fontWeight: 600,
              color: '#1D1D1B',
              lineHeight: 1.2,
            }}
            className="mb-2 group-hover:text-[#214A32] transition-colors"
          >
            {title}
          </h3>
          <p
            className="text-xs sm:text-sm leading-relaxed"
            style={{ color: '#555', fontFamily: 'Inter, sans-serif', fontWeight: 300 }}
          >
            {desc}
          </p>
        </div>

        {/* Ikona Plus/Minus koja glatko rotira */}
        <div className="shrink-0 mt-1">
          <span
            className="w-8 h-8 flex items-center justify-center rounded-full border transition-all duration-300"
            style={{
              borderColor: isOpen ? '#214A32' : '#ccc',
              backgroundColor: isOpen ? '#214A32' : 'transparent',
            }}
          >
            <svg
              className="w-3 h-3 transition-transform duration-300"
              fill="none"
              stroke={isOpen ? '#fff' : '#1D1D1B'}
              viewBox="0 0 24 24"
              strokeWidth={3}
              style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 12H5" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              )}
            </svg>
          </span>
        </div>
      </div>

      {/* Ultra glatka CSS Grid animacija otvaranja */}
      <div
        className="grid transition-all duration-300 ease-in-out"
        style={{
          gridTemplateRows: isOpen ? '1fr' : '0fr',
          opacity: isOpen ? 1 : 0,
        }}
      >
        <div className="overflow-hidden">
          <div className="px-5 sm:px-6 pb-6 pt-2" style={{ borderTop: '1px solid #e8e4dc', backgroundColor: '#FAF8F4' }}>
            <p
              className="text-xs font-semibold tracking-wider uppercase mb-4"
              style={{ color: '#214A32', fontFamily: 'Inter, sans-serif' }}
            >
              {subdesc.listTitle}
            </p>
            
            {/* Grid u dva stupca na desktopu, jedan na mobitelu */}
            <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
              {subdesc.items.map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-xs sm:text-sm"
                  style={{ color: '#333', fontFamily: 'Inter, sans-serif', fontWeight: 300 }}
                >
                  {/* Premium minimalistička kvačica */}
                  <svg className="w-4 h-4 shrink-0" fill="none" stroke="#214A32" viewBox="0 0 24 24" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="services" className="py-8 sm:py-24 lg:py-32" style={{ backgroundColor: '#FAF8F4' }}>
      <div className="max-w-4xl mx-auto px-5 sm:px-8"> {/* Smanjeno na max-w-4xl radi elegantnijeg skrola na desktopu */}
        <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: '#214A32' }}>
          Our Expertise
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
          className="mb-10 sm:mb-16"
        >
          Training Services
        </h2>

        <div className="space-y-3">
          {services.map((s, i) => (
            <ServiceItem
              key={i}
              title={s.title}
              desc={s.desc}
              subdesc={s.subdesc}
              isOpen={openIndex === i}
              onClick={() => toggle(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}