'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const PHONE = '+971585806744';
const WA_MESSAGE = encodeURIComponent(
  "Hi! I'd like to book a training assessment for my dog.",
);
const WA_URL = `https://wa.me/${PHONE}?text=${WA_MESSAGE}`;

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'About', href: '#about' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className='fixed top-0 left-0 right-0 z-50 transition-all duration-300'
      style={{
        backgroundColor: '#FAF8F4',
        borderBottom: scrolled ? '1px solid #e8e4dc' : '1px solid transparent',
      }}
    >
      {/* Sređene visine headera kroz breakpointove:
        - h-16 (64px) na mobitelima za kompaktan izgled
        - sm:h-20 (80px) za tablete
        - lg:h-22 (88px) za desktop kako bi veći logo disao
      */}
      <div className='max-w-6xl mx-auto px-5 sm:px-8 h-16 sm:h-20 lg:h-22 flex items-center justify-between transition-all duration-300'>
        
        {/* Logo kontejner */}
        <a href='#' className='flex items-center shrink-0 min-w-0 py-2'>
          <Image
            src='/logo.jpeg'
            alt='Good Dog Training'
            width={220}
            height={60}
            priority
            className='
              w-auto
              h-8         {/* Optimalna visina za najmanje mobitele da tekst unutar loga bude čitljiv */}
              xs:h-10     {/* Blago povećanje za standardne pametne telefone */}
              sm:h-12     {/* Veća visina za tablete */}
              md:h-12     {/* Proporcionalan rast za veće ekrane */}
              lg:h-12     {/* Finalna optimalna veličina na desktopu */}
              object-contain
              select-none
              transition-all
              duration-300
            '
          />
        </a>

        {/* Desktop navigacija */}
        <nav className='hidden lg:flex items-center gap-6 xl:gap-8'>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className='text-xs font-semibold tracking-widest uppercase transition-opacity hover:opacity-60'
              style={{ color: '#1D1D1B' }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA gumb */}
        <a
          href={WA_URL}
          target='_blank'
          rel='noopener noreferrer'
          className='hidden lg:inline-flex items-center text-xs font-bold tracking-widest uppercase px-5 py-3.5 transition-all duration-200 hover:opacity-90'
          style={{ backgroundColor: '#214A32', color: '#fff' }}
        >
          Book an Assessment
        </a>

        {/* Mobilni hamburger gumb */}
        <button
          className='lg:hidden p-2 -mr-2 focus:outline-none z-50'
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label='Menu'
        >
          <div className='flex flex-col gap-1.5 w-6 justify-center items-end'>
            <span
              className='block h-px transition-all duration-300'
              style={{
                width: menuOpen ? '100%' : '100%',
                backgroundColor: '#1D1D1B',
                transform: menuOpen ? 'rotate(45deg) translateY(5px)' : 'none',
              }}
            />
            <span
              className='block h-px transition-all duration-200'
              style={{ 
                width: menuOpen ? '0%' : '75%',
                backgroundColor: '#1D1D1B', 
                opacity: menuOpen ? 0 : 1 
              }}
            />
            <span
              className='block h-px transition-all duration-300'
              style={{
                width: menuOpen ? '100%' : '100%',
                backgroundColor: '#1D1D1B',
                transform: menuOpen ? 'rotate(-45deg) translateY(-5px)' : 'none',
              }}
            />
          </div>
        </button>
      </div>

      {/* Mobilni Menu s glatkim prikazom */}
      {menuOpen && (
        <div
          className='lg:hidden border-t px-6 py-8 flex flex-col gap-6 animate-fade-in'
          style={{ backgroundColor: '#FAF8F4', borderColor: '#e8e4dc' }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className='text-sm font-medium tracking-widest uppercase py-1'
              style={{ color: '#1D1D1B' }}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href={WA_URL}
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex justify-center text-xs font-bold tracking-widest uppercase px-6 py-4 mt-2'
            style={{ backgroundColor: '#214A32', color: '#fff' }}
          >
            Book an Assessment
          </a>
        </div>
      )}
    </header>
  );
}