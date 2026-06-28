const credentials = [
  'Certified Professional Dog Trainer',
  'Positive Reinforcement',
  'Training at Home & Outdoors',
  'Personalized Training Plans',
];

export default function Trainer() {
  return (
    <section id="about" className="py-20 sm:py-28" style={{ backgroundColor: '#FAF8F4' }}>
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-start">

          {/* LEFT */}
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: '#214A32' }}>
              Meet the Trainer Behind
            </p>
            <h2 style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(2.5rem, 6vw, 4rem)',
              fontWeight: 600,
              color: '#1D1D1B',
              lineHeight: 1.1,
            }} className="mb-5">
              Good Dog Training
            </h2>
            <div className="w-10 h-px mb-8" style={{ backgroundColor: '#1D1D1B' }} />

            <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)', fontWeight: 400, color: '#1D1D1B', lineHeight: 1.5 }} className="mb-8">
              I believe successful dog training starts with understanding — not only your dog, but also your goals, your lifestyle, and the relationship you want to build together.
            </p>

            <div className="space-y-4 mb-10" style={{ color: '#555', fontSize: '0.9rem', lineHeight: 1.7, fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>
              <p>As a certified professional dog trainer based in Abu Dhabi, UAE, I help dogs and their owners develop practical skills that make everyday life calmer, easier, and more enjoyable.</p>
              <p>Every training plan is tailored to the individual dog, the family, and the environment where life actually happens — at home, outdoors, and in everyday situations.</p>
              <p>My role isn&apos;t simply to train your dog. It&apos;s to give you the confidence and knowledge to continue long after our sessions are over.</p>
            </div>

            <div className="border-t pt-8 mb-10" style={{ borderColor: '#e8e4dc' }}>
              <ul className="space-y-3">
                {credentials.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm" style={{ color: '#444', fontFamily: 'Inter, sans-serif' }}>
                    <svg className="w-4 h-4 shrink-0" fill="none" stroke="#214A32" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Certificate */}
            <div className="inline-flex items-start gap-4 rounded-lg p-4 border" style={{ backgroundColor: '#fff', borderColor: '#e8e4dc' }}>
              <div className="w-12 h-16 border rounded flex items-center justify-center shrink-0" style={{ borderColor: '#e8e4dc' }}>
                <svg className="w-6 h-6" fill="none" stroke="#214A32" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342" />
                </svg>
              </div>
              <div>
                <div className="text-sm font-semibold" style={{ color: '#1D1D1B' }}>Certified Professional Dog Trainer</div>
                <div className="text-xs mt-1 italic" style={{ color: '#888' }}>Compass Education & Training</div>
                <div className="text-xs italic" style={{ color: '#888' }}>(United Kingdom)</div>
              </div>
            </div>
          </div>

          {/* RIGHT — photo */}
          <div className="relative mt-8 lg:mt-0">
            <div className="overflow-hidden" style={{ borderRadius: '4px', height: 'clamp(360px, 60vw, 580px)' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=900&auto=format&fit=crop&q=80"
                alt="Dog trainer with dog"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="absolute -bottom-5 left-5 px-6 py-4 shadow-xl" style={{ backgroundColor: '#214A32', color: '#fff' }}>
              <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2rem', fontWeight: 600 }}>5+</div>
              <div className="text-xs tracking-widest uppercase mt-0.5" style={{ color: 'rgba(255,255,255,0.65)' }}>Years Training</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
