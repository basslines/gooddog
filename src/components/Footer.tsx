'use client';

import { useState, useEffect } from 'react';

const PHONE = '+971585806744';
const WA_MESSAGE = encodeURIComponent("Hi! I'd like to book a training assessment for my dog.");
const WA_URL = `https://wa.me/${PHONE}?text=${WA_MESSAGE}`;

export default function Footer() {
  // Stanja za sva tri modala
  const [openPrivacy, setOpenPrivacy] = useState(false);
  const [openTerms, setOpenTerms] = useState(false);
  const [openLiability, setOpenLiability] = useState(false);

  // Blokiranje skrolovanja pozadine ako je bilo koji modal otvoren
  useEffect(() => {
    if (openPrivacy || openTerms || openLiability) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [openPrivacy, openTerms, openLiability]);

  return (
    <footer style={{ backgroundColor: '#1D1D1B', color: 'rgba(255,255,255,0.4)' }} className="py-14">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>

          {/* Brand */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                <div className="font-bold text-sm" style={{ color: 'rgba(255,255,255,0.7)' }}>Good Dog Training</div>
              </div>
            </div>
            <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.3)' }}>
              Training designed for your dog.<br />Delivered in your home.
            </p>
          </div>

          {/* Services */}
          <div>
            <div className="text-xs font-semibold tracking-widest uppercase mb-5" style={{ color: 'rgba(255,255,255,0.35)' }}>Services</div>
            <ul className="space-y-2.5">
              {['In-Home Training', 'Behaviour Modification', 'Puppy Training', 'Consultation'].map(item => (
                <li key={item}>
                  <a href="#services" className="text-xs hover:opacity-80 transition-opacity" style={{ color: 'rgba(255,255,255,0.5)' }}>{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <div className="text-xs font-semibold tracking-widest uppercase mb-5" style={{ color: 'rgba(255,255,255,0.35)' }}>Company</div>
            <ul className="space-y-2.5">
              {[['About', '#about'], ['How It Works', '#how-it-works'], ['FAQ', '#faq'], ['Contact', '#contact']].map(([label, href]) => (
                <li key={label}>
                  <a href={href} className="text-xs hover:opacity-80 transition-opacity" style={{ color: 'rgba(255,255,255,0.5)' }}>{label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="text-xs font-semibold tracking-widest uppercase mb-5" style={{ color: 'rgba(255,255,255,0.35)' }}>Get In Touch</div>
            <ul className="space-y-3">
              <li>
                <a href={WA_URL} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs hover:opacity-80 transition-opacity" style={{ color: 'rgba(255,255,255,0.5)' }}>
                  <svg className="w-3.5 h-3.5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  +971 58 580 6744
                </a>
              </li>
              <li>
                <a href="mailto:info@gooddogtraining.ae"
                  className="flex items-center gap-2 text-xs hover:opacity-80 transition-opacity" style={{ color: 'rgba(255,255,255,0.5)' }}>
                  <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25 2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  thegooddogtraining.uae@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>
                <svg className="w-3.5 h-3.5 shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                Abu Dhabi, UAE
              </li>
            </ul>
          </div>
        </div>

        {/* Donji dio sa tri pravna linka */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
            <p className="text-xs" style={{ color: 'rgba(255,255,255,0.2)' }}>
              © {new Date().getFullYear()} Good Dog Training. All rights reserved.
            </p>
            <span className="hidden sm:inline text-xs" style={{ color: 'rgba(255,255,255,0.1)' }}>|</span>
            
            {/* Pravni linkovi */}
            <div className="flex gap-3 text-[11px] sm:text-xs">
              <button onClick={() => setOpenPrivacy(true)} className="underline underline-offset-2 hover:text-white transition-colors cursor-pointer" style={{ color: 'rgba(255,255,255,0.3)' }}>
                Privacy Policy
              </button>
              <span style={{ color: 'rgba(255,255,255,0.1)' }}>•</span>
              <button onClick={() => setOpenTerms(true)} className="underline underline-offset-2 hover:text-white transition-colors cursor-pointer" style={{ color: 'rgba(255,255,255,0.3)' }}>
                Terms & Agreement
              </button>
              <span style={{ color: 'rgba(255,255,255,0.1)' }}>•</span>
              <button onClick={() => setOpenLiability(true)} className="underline underline-offset-2 hover:text-white transition-colors cursor-pointer" style={{ color: 'rgba(255,255,255,0.3)' }}>
                Liability Waiver
              </button>
            </div>
          </div>
          
          <p className="text-[11px] leading-relaxed max-w-md md:text-right" style={{ color: 'rgba(255,255,255,0.25)' }}>
            Good Dog Training is operated by The Gentle Lead Dog Training Services L.l.c.-S.p.c.
          </p>
        </div>
      </div>

      {/* ================= MODAL 1: PRIVACY POLICY ================= */}
      {openPrivacy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm" onClick={() => setOpenPrivacy(false)}>
          <div className="relative w-full max-w-lg bg-[#1E1E1C] border border-white/10 rounded-lg p-6 sm:p-8 max-h-[80vh] overflow-y-auto text-left" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setOpenPrivacy(false)} className="absolute top-4 right-4 text-white/40 hover:text-white p-1"><svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12"/></svg></button>
            <div className="mb-4 pb-2 border-b border-white/10"><h3 className="text-sm font-semibold uppercase tracking-wider text-white/90">Privacy Policy</h3></div>
            <div className="space-y-3 text-xs text-white/60 leading-relaxed">
              <p>Good Dog Training values your privacy. We collect minimal personal information (such as name, phone number, and email) solely to facilitate dog training consultations and appointments.</p>
              <p>Your data is processed safely within our systems, is never sold or shared with external third-party marketing companies, and complies with applicable UAE federal laws regarding digital data protection.</p>
            </div>
          </div>
        </div>
      )}

      {/* ================= MODAL 2: TERMS & TRAINING AGREEMENT ================= */}
      {openTerms && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm" onClick={() => setOpenTerms(false)}>
          <div className="relative w-full max-w-lg bg-[#1E1E1C] border border-white/10 rounded-lg p-6 sm:p-8 max-h-[80vh] overflow-y-auto text-left" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setOpenTerms(false)} className="absolute top-4 right-4 text-white/40 hover:text-white p-1"><svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12"/></svg></button>
            <div className="mb-4 pb-2 border-b border-white/10"><h3 className="text-sm font-semibold uppercase tracking-wider text-white/90">Terms & Training Agreement</h3></div>
            <div className="space-y-3 text-xs text-white/60 leading-relaxed">
              <h4 className="font-semibold text-white/80">1. Session Cancellations</h4>
              <p>To respect our trainers&apos; schedules, clients must request session cancellations or modifications at least 24 hours prior to the scheduled session. Failure to do so may result in the session being forfeited or charged in full.</p>
              <h4 className="font-semibold text-white/80">2. Client Commitment</h4>
              <p>Canine behavioral progression relies heavily on regular repetition and commitment from the owner. Consistent home practice as directed by the trainer is required to build lasting progress.</p>
            </div>
          </div>
        </div>
      )}

      {/* ================= MODAL 3: LIABILITY WAIVER (Dresersko ograđivanje) ================= */}
      {openLiability && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm" onClick={() => setOpenLiability(false)}>
          <div className="relative w-full max-w-lg bg-[#1E1E1C] border border-white/10 rounded-lg p-6 sm:p-8 max-h-[80vh] overflow-y-auto text-left" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setOpenLiability(false)} className="absolute top-4 right-4 text-white/40 hover:text-white p-1"><svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12"/></svg></button>
            <div className="mb-4 pb-2 border-b border-white/10"><h3 className="text-sm font-semibold uppercase tracking-wider text-white/90">Liability Waiver & Disclaimer</h3></div>
            <div className="space-y-3 text-xs text-white/60 leading-relaxed">
              <h4 className="font-semibold text-white/80">1. Nature of Canine Behavior</h4>
              <p>The client acknowledges that working with dogs carries inherent risks of unpredictable behavior. Good Dog Training takes every precaution to ensure safety, but cannot fully control natural canine impulses.</p>
              <h4 className="font-semibold text-white/80">2. Indemnification</h4>
              <p>Good Dog Training (operated by The Gentle Lead Dog Training Services L.L.C.-S.P.C.) and its trainers are strictly exempted from any legal or financial liability regarding property damage, personal injury, or third-party claims caused by the client&apos;s dog during or after the training program lifecycle.</p>
              <h4 className="font-semibold text-white/80">3. Health & Vaccinations</h4>
              <p>The owner certifies that the dog is medically fit, fully vaccinated according to UAE regulations, and does not pose an undisclosed severe health risk to the trainer or other animals.</p>
            </div>
          </div>
        </div>
      )}

    </footer>
  );
}