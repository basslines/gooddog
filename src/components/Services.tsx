'use client';
import { useState } from 'react';

const services = [
  {
    title: 'Puppy Foundation Training',
    desc: 'Perfect for puppies up to 6 months of age and first-time dog owners. Together we\'ll build good habits from the very beginning and help your puppy grow into a confident, well-mannered companion.',
    subdesc: {
      intro: '',
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
      intro: '',
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
      intro: '',
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
      intro: '',
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
      intro: '',
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
      intro: '',
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
  subdesc: { intro: string; listTitle: string; items: string[] };
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div
      className="border rounded-lg overflow-hidden transition-all duration-200"
      style={{
        borderColor: '#e8e4dc',
        backgroundColor: '#fff',
        marginBottom: '12px',
      }}
    >
      {/* Always visible: title + desc + arrow */}
      <div className="flex items-start justify-between gap-4 p-5 sm:p-6">
        <div className="flex-1">
          <h3
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
              fontWeight: 600,
              color: '#1D1D1B',
              lineHeight: 1.2,
              marginBottom: '6px',
            }}
          >
            {title}
          </h3>
          <p
            className="text-sm leading-relaxed"
            style={{ color: '#666', fontFamily: 'Inter, sans-serif', fontWeight: 300 }}
          >
            {desc}
          </p>
        </div>

        {/* Arrow — identical to FAQ */}
        <button
          onClick={onClick}
          className="shrink-0 mt-1"
          aria-label={isOpen ? 'Collapse' : 'Expand'}
        >
          <span
            className="w-7 h-7 flex items-center justify-center rounded-full border"
            style={{
              borderColor: isOpen ? '#214A32' : '#ccc',
              backgroundColor: isOpen ? '#214A32' : 'transparent',
              transition: 'background-color 0.3s, border-color 0.3s',
            }}
          >
            <svg
              className="w-3 h-3"
              fill="none"
              stroke={isOpen ? '#fff' : '#1D1D1B'}
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </button>
      </div>

      {/* Expandable subdesc with intro + bullet list */}
      <div
        className="overflow-hidden"
        style={{
          maxHeight: isOpen ? '600px' : '0px',
          opacity: isOpen ? 1 : 0,
          transition: 'max-height 0.3s ease-in-out, opacity 0.3s ease-in-out',
        }}
      >
        <div className="px-5 sm:px-6 pb-7" style={{ borderTop: '1px solid #e8e4dc' }}>
          <p
            className="text-sm leading-relaxed pt-1 mb-5"
            style={{ color: '#555', fontFamily: 'Inter, sans-serif', fontWeight: 300, lineHeight: 1.8 }}
          >
            {subdesc.intro}
          </p>
          <p
            className="text-sm font-semibold mb-3"
            style={{ color: '#1D1D1B', fontFamily: 'Inter, sans-serif' }}
          >
            {subdesc.listTitle}
          </p>
          <ul className="space-y-2">
            {subdesc.items.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-2.5 text-sm"
                style={{ color: '#555', fontFamily: 'Inter, sans-serif', fontWeight: 300 }}
              >
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: '#214A32' }} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="services" className="pt-2 pb-4 sm:pt-10 sm:pb-20 lg:py-28" style={{ backgroundColor: '#FAF8F4' }}>
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <p className="text-xs font-semibold tracking-[0.2em] mb-4" style={{ color: '#214A32' }}>
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
          className="mb-4 sm:mb-12 lg:mb-16"
        >
          Services
        </h2>

        <div>
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