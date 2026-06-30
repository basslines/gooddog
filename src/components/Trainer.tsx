export default function Trainer() {
  return (
    <section id="about" className="py-12 sm:py-20 lg:py-28" style={{ backgroundColor: "#FAF8F4" }}>
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-10 xl:gap-20 items-center"> {/* Promijenjeno u items-center za bolji balans */}

          {/* LEFT — Tekstualni sadržaj */}
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: '#214A32' }}>
              Good Dog Training
            </p>
            <div
              className='w-10 h-px mb-4'
              style={{ backgroundColor: '#1D1D1B' }}
            />
            <h2 style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(2.5rem, 6vw, 4rem)',
              fontWeight: 600,
              color: '#1D1D1B',
              lineHeight: 1.1,
            }} className="mb-5">
              Meet your trainer
            </h2>
            

            <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)', fontWeight: 400, color: '#1D1D1B', lineHeight: 1.5 }} className="mb-5 lg:mb-8">
              I believe successful dog training starts with understanding — not only your dog, but also your goals, your lifestyle, and the relationship you want to build together.
            </p>

            <div className="space-y-4 mb-10" style={{ color: '#555', fontSize: '0.95rem', lineHeight: 1.7, fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>
              <p>As a certified professional dog trainer based in Abu Dhabi, UAE, I help dogs and their owners develop practical skills that make everyday life calmer, easier, and more enjoyable.</p>
              <p>Every training plan is tailored to the individual dog, the family, and the environment where life actually happens — at home, outdoors, and in everyday situations.</p>
              <p>My role isn&apos;t simply to train your dog. It&apos;s to give you the confidence and knowledge to continue long after our sessions are over.</p>
            </div>

            {/* Premium Certifikat Kartica */}
            <div className="inline-flex items-center gap-4 rounded-xl p-4 border shadow-sm transition-all hover:shadow-md" style={{ backgroundColor: '#fff', borderColor: '#e8e4dc' }}>
              <div className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: '#F4F1EA' }}>
                <svg className="w-6 h-6" fill="none" stroke="#214A32" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342" />
                </svg>
              </div>
              <div>
                <div className="text-sm font-semibold" style={{ color: '#1D1D1B' }}>Certified Professional Dog Trainer</div>
                <div className="text-xs mt-0.5 text-gray-500 font-medium">Compass Education & Training <span className="text-gray-400 font-normal">(United Kingdom)</span></div>
              </div>
            </div>
          </div>

          {/* RIGHT — Fotografija s modernim detaljima */}
          <div className="relative mt-6 lg:mt-0 w-full group">
            {/* Zaobljeni rubovi (rounded-xl) usklađeni s Hero sekcijom */}
            <div className="overflow-hidden rounded-xl shadow-md lg:shadow-xl" style={{ height: 'clamp(380px, 55vw, 540px)' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1563550226561-2d346918575c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGRvZyUyMHRyYWluZXIlMjBibGFjayUyMGFuZCUyMHdoaXRlfGVufDB8MHwwfHx8Mg%3D%3D"
                alt="Dog trainer with dog"
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Plutajući lokacijski bedž za premium izgled */}
            <div 
              className="absolute bottom-4 left-4 backdrop-blur-md bg-white/90 px-4 py-2 rounded-lg shadow-sm flex items-center gap-2 border border-white/20"
            >
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: '#214A32' }}></span>
              <span className="text-xs font-semibold tracking-wider uppercase" style={{ color: '#1D1D1B', fontFamily: 'Inter, sans-serif' }}>
                Abu Dhabi, UAE
              </span>
            </div>
            
          </div>

        </div>
      </div>
    </section>
  );
}