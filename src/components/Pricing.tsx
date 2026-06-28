'use client';
import Image from 'next/image';

const PHONE = '+971585806744';
const WA_MESSAGE = encodeURIComponent("Hi! I'd like to book a training assessment for my dog.");
const WA_URL = `https://wa.me/${PHONE}?text=${WA_MESSAGE}`;

const inHomePrograms = [
  {
    title: "Training Assessment",
    duration: "1 HOUR",
    price: "299",
    features: []
  },
  {
    title: "Single Training Session",
    duration: "1 HOUR",
    price: "499",
    features: []
  },
  {
    title: "5 Training Sessions",
    duration: null,
    price: "2249",
    features: ["Valid for 21 days", "1 follow-up session included"]
  },
  {
    title: "10 Training Sessions",
    duration: null,
    price: "3899",
    features: ["Valid for 35 days", "2 follow-up sessions included"]
  }
];

const liveInPrograms = [
  { title: "Live-In Training – 10 Days", desc: "Live and train with our trainer", price: "2245" },
  { title: "Live-In Training – 20 Days", desc: "Live and train with our trainer", price: "3899" },
  { title: "Live-In Training – 30 Days", desc: "Live and train with our trainer", price: "5099" }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 sm:py-28 bg-[#faf8f3] border-t border-gray-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header - Isti stil kao Services */}
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-[0.2em] text-[#2d5a3d] uppercase mb-4">
            Transparent Pricing
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-[#1a3a2a] leading-tight mb-6">
            Training Programs & Pricing
          </h2>
          <div className="w-12 h-0.5 bg-[#1a3a2a] mx-auto mb-6" />
          <p className="text-gray-500 max-w-lg mx-auto text-base sm:text-lg leading-relaxed">
            Choose the program that best fits your dog and your schedule.
          </p>
        </div>

        {/* Glavni kontejner sa oštrim ivicama (kao tvoje Services kartice) */}
        <div className="bg-white border border-gray-200 p-6 sm:p-12 shadow-sm">
          
          {/* 1. IN-HOME TRAINING */}
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-8 pb-3 border-b border-gray-100">
              <span className="text-xs font-bold tracking-[0.2em] text-[#1a3a2a] uppercase">01 /</span>
              <h3 className="font-display text-xl font-bold uppercase tracking-wider text-[#1a3a2a]">
                In-Home Training
              </h3>
            </div>

            <div className="divide-y divide-gray-100">
              {inHomePrograms.map((p, i) => (
                <div key={i} className="py-5 first:pt-0 last:pb-0 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h4 className="font-display text-lg font-bold text-[#1a3a2a]">{p.title}</h4>
                    {p.duration && <p className="text-xs text-gray-400 font-semibold tracking-wider mt-1">{p.duration}</p>}
                    {p.features.length > 0 && (
                      <div className="flex flex-wrap gap-x-4 gap-y-1 mt-1.5">
                        {p.features.map((f, idx) => (
                          <span key={idx} className="text-xs text-[#2d5a3d] font-medium">
                            • {f}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="text-left sm:text-right shrink-0">
                    <span className="font-display text-2xl font-bold text-[#1a3a2a]">{p.price}</span>
                    <span className="text-[10px] font-bold tracking-wider text-gray-400 uppercase ml-1.5">AED</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 2. LIVE-IN TRAINING */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-8 pb-3 border-b border-gray-100">
              <span className="text-xs font-bold tracking-[0.2em] text-[#1a3a2a] uppercase">02 /</span>
              <h3 className="font-display text-xl font-bold uppercase tracking-wider text-[#1a3a2a]">
                Live-In Training
              </h3>
            </div>

            <div className="divide-y divide-gray-100">
              {liveInPrograms.map((p, i) => (
                <div key={i} className="py-5 first:pt-0 last:pb-0 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h4 className="font-display text-lg font-bold text-[#1a3a2a]">{p.title}</h4>
                    <p className="text-xs text-gray-400 mt-1 uppercase tracking-wide">{p.desc}</p>
                  </div>
                  <div className="text-left sm:text-right shrink-0">
                    <span className="font-display text-2xl font-bold text-[#1a3a2a]">{p.price}</span>
                    <span className="text-[10px] font-bold tracking-wider text-gray-400 uppercase ml-1.5">AED</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* MULTI-DOG HOUSEHOLDS POPUST (Minimalistička info traka bez zaobljenja) */}
          <div className="border-l-2 border-[#2d5a3d] bg-[#faf8f3] p-5 mb-12">
            <div className="flex gap-3">
              <svg className="w-5 h-5 text-[#2d5a3d] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 111.063 1.06l-.041.02a.75.75 0 01-1.063-1.06zM12 20.25a8.25 8.25 0 100-16.5 8.25 8.25 0 000 16.5z" />
              </svg>
              <div>
                <h4 className="font-semibold text-xs text-[#1a3a2a] uppercase tracking-widest mb-1">Multi-Dog Households</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Families training two dogs receive a <span className="font-semibold text-[#1a3a2a]">30% discount</span> on the second dog&apos;s training program.
                </p>
              </div>
            </div>
          </div>

          {/* DONJA PANEL TRAKA (Kontakt stilizovan oštro i premium, spojen direktno na WhatsApp) */}
          <a 
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col md:flex-row items-center justify-between bg-[#1a3a2a] hover:bg-[#2d5a3d] text-white p-6 sm:p-8 transition-colors duration-200 gap-6 group"
          >
            <div className="flex items-center gap-4">
              <svg className="w-6 h-6 text-emerald-400 group-hover:scale-110 transition-transform duration-200" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <div className="text-left">
                <p className="text-[10px] uppercase tracking-[0.2em] text-gray-300">Call or WhatsApp</p>
                <p className="text-xl sm:text-2xl font-bold tracking-wide mt-0.5">+971 58 580 6744</p>
              </div>
            </div>
            <div className="text-left md:text-right border-t md:border-t-0 md:border-l border-white/10 pt-4 md:pt-0 md:pl-8 w-full md:w-auto flex flex-col justify-center">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-gray-200">Certified Professional Dog Trainers</p>
              <p className="text-xs text-gray-400 mt-1 max-w-xs">
                Professional training programs tailored to the unique needs of you and your dog.
              </p>
            </div>
          </a>

        </div>

        {/* Donje glavno dugme - Isti oštri stil kao u Hero sekciji */}
        <div className="mt-14 text-center">
          <p className="text-gray-500 mb-6 text-sm">
            Not sure which program is right for your dog?{" "}
            <span className="font-semibold text-[#1a3a2a]">Start with an assessment.</span>
          </p>
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#1a3a2a] hover:bg-[#2d5a3d] text-white font-semibold text-sm tracking-widest uppercase px-10 py-4 transition-all duration-200 hover:shadow-lg"
          >
            Book a Free Assessment
          </a>
        </div>
      </div>
    </section>
  );
}
