'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useScrolled } from '@/hooks';

const NAV_ITEMS = [
  { label: 'Story', href: '#story' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export const Header = () => {
  const scrolled = useScrolled(60);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (href: string) => {
    const id = href.replace('#', '');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white border-b border-gray-100' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1">
          <span className="font-sans text-lg font-semibold tracking-widest text-gray-900">
            Yuki
          </span>
          <span className="font-serif text-lg italic text-gray-900">
            Barber
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.label}
              onClick={() => handleScroll(item.href)}
              className="text-sm text-gray-600 hover:text-gray-900 tracking-wide transition-colors duration-200"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Desktop Book Now */}
        <button
          onClick={() => handleScroll('#contact')}
          className={`hidden md:block px-5 py-2 text-sm tracking-widest transition-all duration-300 ${
            scrolled
              ? 'bg-gray-900 text-white hover:bg-gray-700'
              : 'bg-white text-gray-900 hover:bg-gray-100'
          }`}
        >
          Book Now
        </button>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-[5px] p-1 bg-transparent border-none cursor-pointer"
        >
          <span
            className="block h-px bg-gray-900 transition-all duration-300"
            style={{
              width: '24px',
              transform: menuOpen ? 'rotate(45deg) translate(4px, 4px)' : 'none',
            }}
          />
          <span
            className="block h-px bg-gray-900 transition-all duration-300"
            style={{ width: '16px', opacity: menuOpen ? 0 : 1 }}
          />
          <span
            className="block h-px bg-gray-900 transition-all duration-300"
            style={{
              width: '24px',
              transform: menuOpen ? 'rotate(-45deg) translate(4px, -4px)' : 'none',
            }}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white border-t border-gray-100 transition-all duration-300 overflow-hidden ${
          menuOpen ? 'max-h-64' : 'max-h-0'
        }`}
      >
        <div className="flex flex-col px-8 py-6 gap-6">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.label}
              onClick={() => handleScroll(item.href)}
              className="text-left text-sm text-gray-600 hover:text-gray-900 tracking-wide transition-colors duration-200"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => handleScroll('#contact')}
            className="bg-gray-900 text-white px-5 py-2 text-sm tracking-widest w-full"
          >
            Book Now
          </button>
        </div>
      </div>
    </header>
  );
};