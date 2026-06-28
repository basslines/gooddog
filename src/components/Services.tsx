'use client';
import { useState } from 'react';

const services = [
  {
    title: 'Puppy Foundation Training',
    desc: 'Build good habits, confidence, and communication from the very beginning.',
    subdesc: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra.',
  },
  {
    title: 'Behaviour Modification',
    desc: 'Helping dogs overcome unwanted behaviours with calm, positive training.',
    subdesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident. Sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    title: 'Rescue & Adopted Dog Training',
    desc: 'Helping rescue dogs settle into their new home with confidence, trust, and skills.',
    subdesc: 'Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis molestie dictum semper, ipsum libero dictum nisi, vel pharetra libero enim vel leo. Sed tempus, arcu at volutpat tristique, nisl felis suscipit nisi, in lacinia libero quam sed velit. Fusce iaculis lobortis nibh. Praesent iaculis nisl sit amet mi faucibus, nec cursus lacus sodales.',
  },
  {
    title: 'Obedience Training',
    desc: 'Practical skills for a calm, confident dog at home and outdoors.',
    subdesc: 'Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus. Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi.',
  },
  {
    title: 'Loose Leash Walking',
    desc: 'Enjoy calm, relaxed walks without pulling.',
    subdesc: 'Nullam eu ante vel est convallis dignissim. Fusce suscipit, wisi nec facilisis facilisis, est dui fermentum leo, quis tempor ligula erat quis odio. Nunc porta vulputate tellus. Nunc rutrum turpis sed pede. Sed bibendum. Aliquam posuere. Nunc aliquet, augue nec adipiscing interdum, lacus tellus malesuada massa, quis varius mi purus non odio.',
  },
  {
    title: 'Separation Anxiety Support',
    desc: 'Helping dogs feel safe and secure when their owners are away from home.',
    subdesc: 'Pellentesque dapibus suscipit ligula. Donec posuere augue in quam. Etiam vel tortor sodales tellus ultricies commodo. Suspendisse potenti. Aenean in sem ac leo mollis blandit. Donec neque quam, dignissim in, mollis nec, sagittis eu, wisi. Phasellus lacus. Etiam laoreet quam sed arcu. Phasellus at dui in ligula mollis ultricies.',
  },
];

function ServiceItem({
  title, desc, subdesc, isOpen, onClick,
}: {
  title: string; desc: string; subdesc: string; isOpen: boolean; onClick: () => void;
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
        <button
          onClick={onClick}
          className="shrink-0 mt-1 transition-transform duration-300"
          aria-label={isOpen ? 'Collapse' : 'Expand'}
          style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="#1D1D1B"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>

      {/* Expandable subdesc */}
      <div
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight: isOpen ? '400px' : '0px', opacity: isOpen ? 1 : 0 }}
      >
        <div
          className="px-5 sm:px-6 pb-6 pt-0"
          style={{ borderTop: '1px solid #e8e4dc' }}
        >
          <p
            className="text-sm leading-relaxed pt-5"
            style={{ color: '#555', fontFamily: 'Inter, sans-serif', fontWeight: 300, lineHeight: 1.8 }}
          >
            {subdesc}
          </p>
        </div>
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
        <h2
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(3rem, 8vw, 5.5rem)',
            fontWeight: 600,
            color: '#1D1D1B',
            lineHeight: 1.0,
          }}
          className="mb-12 sm:mb-16"
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