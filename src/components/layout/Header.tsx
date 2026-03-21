'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Story', href: '#story' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = (href: string) => {
    const id = href.replace('#', '');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-sm py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto pl-8 pr-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">

          {/* Logo */}
          <Link
            href="/"
            style={{ marginLeft: '1rem' }}
            className={`text-2xl transition-colors duration-300 ${
              isScrolled ? 'text-stone-900' : 'text-white'
            }`}
          >
            <span className="font-light">Yuki</span>
            <span className="font-serif italic ml-1">Barber</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-12">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.label}
                onClick={() => handleScroll(item.href)}
                className={`text-sm font-light tracking-wide transition-colors duration-300 hover:opacity-70 ${
                  isScrolled ? 'text-stone-900' : 'text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleScroll('#contact')}
              className={`px-6 py-2.5 text-sm font-light tracking-wide transition-all duration-300 ${
                isScrolled
                  ? 'bg-stone-900 text-white hover:bg-stone-800'
                  : 'bg-white text-stone-900 hover:bg-stone-100'
              }`}
            >
              Book Now
            </button>
          </nav>

          {/* Hamburger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden transition-colors ${
              isScrolled ? 'text-stone-900' : 'text-white'
            }`}
            aria-label="Menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-6 pt-6 border-t border-stone-200/30">
            <div className="flex flex-col gap-4">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleScroll(item.href)}
                  className={`text-left text-sm font-light tracking-wide hover:opacity-70 transition-opacity py-2 ${
                    isScrolled ? 'text-stone-900' : 'text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => handleScroll('#contact')}
                className={`px-6 py-3 text-sm font-light tracking-wide transition-colors text-center ${
                  isScrolled
                    ? 'bg-stone-900 text-white hover:bg-stone-800'
                    : 'bg-white text-stone-900 hover:bg-stone-100'
                }`}
              >
                Book Now
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};