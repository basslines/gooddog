'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const PHONE = '+971585806744';
const WA_MESSAGE = encodeURIComponent("Hi! I'd like to book a training assessment for my dog.");
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
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{ backgroundColor: scrolled ? '#FAF8F4' : '#FAF8F4', borderBottom: scrolled ? '1px solid #e8e4dc' : '1px solid transparent' }}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 h-16 sm:h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <Image src="/logo.png" alt="Good Dog Training" width={44} height={44} className="rounded-full" />
          <div style={{ fontFamily: 'Inter, sans-serif' }}>
            <div className="text-sm font-bold tracking-widest uppercase leading-tight" style={{ color: '#1D1D1B' }}>Good Dog</div>
            <div className="text-[10px] font-semibold tracking-[0.2em] uppercase" style={{ color: '#1D1D1B' }}>Training</div>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map(link => (
            <a key={link.href} href={link.href}
              className="text-xs font-medium tracking-widest uppercase transition-opacity hover:opacity-60"
              style={{ color: '#1D1D1B' }}>
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a href={WA_URL} target="_blank" rel="noopener noreferrer"
          className="hidden lg:inline-flex items-center text-xs font-bold tracking-widest uppercase px-6 py-3 transition-all duration-200"
          style={{ backgroundColor: '#214A32', color: '#fff' }}>
          Book an Assessment
        </a>

        {/* Mobile hamburger */}
        <button className="lg:hidden p-2 -mr-1" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          <div className="flex flex-col gap-1.5 w-6">
            <span className="block h-px w-full transition-all" style={{ backgroundColor: '#1D1D1B', transform: menuOpen ? 'rotate(45deg) translateY(4px)' : 'none' }} />
            <span className="block h-px w-full transition-all" style={{ backgroundColor: '#1D1D1B', opacity: menuOpen ? 0 : 1 }} />
            <span className="block h-px w-full transition-all" style={{ backgroundColor: '#1D1D1B', transform: menuOpen ? 'rotate(-45deg) translateY(-4px)' : 'none' }} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden border-t px-5 py-6 flex flex-col gap-5" style={{ backgroundColor: '#FAF8F4', borderColor: '#e8e4dc' }}>
          {navLinks.map(link => (
            <a key={link.href} href={link.href}
              className="text-sm font-medium tracking-widest uppercase"
              style={{ color: '#1D1D1B' }}
              onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
          <a href={WA_URL} target="_blank" rel="noopener noreferrer"
            className="inline-flex justify-center text-xs font-bold tracking-widest uppercase px-6 py-4 mt-2"
            style={{ backgroundColor: '#214A32', color: '#fff' }}>
            Book an Assessment
          </a>
        </div>
      )}
    </header>
  );
}
