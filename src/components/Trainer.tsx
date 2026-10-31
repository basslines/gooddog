'use client';

// Uvezi Next.js Image i potrebne slike certifikata
import Image from 'next/image';
import trainerImg from '../../public/assets/trainer.jpg';
import diplomaImg from '../../public/assets/diploma.jpg';
import isap1Img from '../../public/assets/isap1.jpg';

export default function Trainer() {
  return (
    <section
      id='about'
      className='py-12 sm:py-20 lg:py-28'
      style={{ backgroundColor: '#FAF8F4' }}
    >
      <div className='max-w-6xl mx-auto px-5 sm:px-8'>
        {/* Na desktopu (lg) 2 kolone. Na mobilnom/tabletu u jednoj koloni s prilagođenim redoslijedom */}
        <div className='grid lg:grid-cols-2 gap-10 xl:gap-20 items-start'>
          
          {/* LEVI KONTEJNER: Tekst + Certifikati */}
          <div className='flex flex-col'>
            {/* Tekstualni dio */}
            <div>
              <p
                className='text-xs font-semibold tracking-[0.2em] uppercase mb-3'
                style={{ color: '#214A32' }}
              >
                Good Dog Training
              </p>
              <div
                className='w-10 h-px mb-4'
                style={{ backgroundColor: '#1D1D1B' }}
              />
              <h2
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                  fontWeight: 600,
                  color: '#1D1D1B',
                  lineHeight: 1.1,
                }}
                className='mb-5'
              >
                Meet your trainer
              </h2>

              <div
                className='space-y-4 mb-8'
                style={{
                  color: '#555',
                  fontSize: '0.95rem',
                  lineHeight: 1.7,
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 300,
                }}
              >
                <p>
                  Hi, I&apos;m Igor.
                  <br />
                  <br />
                  I&apos;m a certified professional dog trainer based in Abu
                  Dhabi, with a Diploma in Canine Behaviour and Training from
                  Compass Education & Training in the UK.
                </p>

                <p>
                  I believe successful dog training starts with understanding —
                  not only your dog, but also your goals, your lifestyle, and the
                  relationship you want to build together.
                </p>
                <p>
                  Every training plan is tailored to the individual dog, the
                  family, and the environment where life actually happens — at
                  home, outdoors, and in everyday situations.
                </p>
                <p>
                  My role isn&apos;t simply to train your dog. It&apos;s to give
                  you the understanding, practical skills and confidence to
                  continue long after our sessions are over.
                </p>
              </div>
            </div>

            {/* CERTIFIKATI: 
                - Na mob/tabletu se prikazuju na samom dnu (order-last)
                - Na desktopu (lg) idu normalno ispod teksta (lg:order-none)
            */}
            <div className='mt-8 order-last lg:order-0'>
              <h3
                className='text-xs font-bold tracking-[0.2em] uppercase mb-4'
                style={{ color: '#214A32', fontFamily: 'Inter, sans-serif' }}
              >
                Professional qualifications & membership
              </h3>

              {/* grid-cols-2 osigurava da su ove dvije slike u paru */}
              <div className='grid grid-cols-2 gap-3 sm:gap-4'>
                {/* Kartica 1: Diploma */}
                <div
                  className='rounded-xl p-3 border shadow-sm transition-all hover:shadow-md bg-white flex flex-col justify-between'
                  style={{ borderColor: '#e8e4dc' }}
                >
                  <div className='relative w-full h-28 sm:h-32 mb-2 sm:mb-3 rounded-lg overflow-hidden bg-gray-50 border border-gray-100'>
                    <Image
                      src={diplomaImg}
                      alt='Diploma in Canine Behaviour and Training'
                      fill
                      sizes='(max-width: 640px) 50vw, 250px'
                      className='object-cover object-top'
                    />
                  </div>
                  <div>
                    <div
                      className='text-[11px] sm:text-xs font-semibold leading-snug'
                      style={{ color: '#1D1D1B' }}
                    >
                      Diploma in Canine Behaviour and Training
                    </div>
                    <div className='text-[10px] sm:text-[11px] mt-0.5 text-gray-500 font-medium'>
                      Compass Education & Training, UK
                    </div>
                  </div>
                </div>

                {/* Kartica 2: ISAP Emblem / Crest */}
                <div
                  className='rounded-xl p-3 border shadow-sm transition-all hover:shadow-md bg-white flex flex-col justify-between'
                  style={{ borderColor: '#e8e4dc' }}
                >
                  <div className='relative w-full h-28 sm:h-32 mb-2 sm:mb-3 rounded-lg overflow-hidden bg-gray-50 border border-gray-100'>
                    <Image
                      src={isap1Img}
                      alt='ISAP Crest'
                      fill
                      sizes='(max-width: 640px) 50vw, 250px'
                      className='object-contain p-2'
                    />
                  </div>
                  <div>
                    <div
                      className='text-[11px] sm:text-xs font-semibold leading-snug'
                      style={{ color: '#1D1D1B' }}
                    >
                      I.S.A.P. Official Crest & Standards
                    </div>
                    <div className='text-[10px] sm:text-[11px] mt-0.5 text-gray-500 font-medium'>
                      Ethical & Force-Free Standards
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* DESNI KONTEJNER — Slika trenera: 
              - Na mob/tabletu se prikazuje odmah poslije teksta, prije certifikata
          */}
          <div className='relative my-6 lg:my-0 w-full group'>
            <div
              className='relative overflow-hidden rounded-xl shadow-md lg:shadow-xl'
              style={{ height: 'clamp(380px, 55vw, 540px)' }}
            >
              <Image
                src={trainerImg}
                alt='Dog trainer with dog'
                fill
                sizes='(max-width: 1024px) 100vw, 50vw'
                className='object-cover object-top transition-transform duration-700 group-hover:scale-105'
              />
            </div>

            {/* Plutajući lokacijski bedž */}
            <div className='absolute bottom-4 left-4 backdrop-blur-md bg-white/90 px-4 py-2 rounded-lg shadow-sm flex items-center gap-2 border border-white/20 z-10'>
              <span
                className='w-2 h-2 rounded-full animate-pulse'
                style={{ backgroundColor: '#214A32' }}
              ></span>
              <span
                className='text-xs font-semibold tracking-wider uppercase'
                style={{ color: '#1D1D1B', fontFamily: 'Inter, sans-serif' }}
              >
                Abu Dhabi, UAE
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}