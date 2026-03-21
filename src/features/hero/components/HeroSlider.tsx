'use client';

import Image from 'next/image';
import { useState, useEffect, useCallback } from 'react';

const SLIDES_PC = [
  { id: 1, src: '/images/hero/hero-1.jpg', alt: 'Yuki Ichinose Barber - Hero 1' },
  { id: 2, src: '/images/hero/hero-2.jpg', alt: 'Yuki Ichinose Barber - Hero 2' },
  { id: 3, src: '/images/hero/hero-3.jpg', alt: 'Yuki Ichinose Barber - Hero 3' },
];

const SLIDES_SP = [
  { id: 1, src: '/images/hero/hero-1.jpg', alt: 'Yuki Ichinose Barber - Hero 1' },
  { id: 2, src: '/images/hero/hero-2.jpg', alt: 'Yuki Ichinose Barber - Hero 2' },
  { id: 3, src: '/images/hero/hero-4.jpg', alt: 'Yuki Ichinose Barber - Hero 4' },
];

export const HeroSlider = () => {
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const slides = isMobile ? SLIDES_SP : SLIDES_PC;

  const goNext = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    const timer = setInterval(goNext, 5000);
    return () => clearInterval(timer);
  }, [goNext]);

  const handleScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {slides.map((slide, idx) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            idx === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            className="object-cover"
            priority={idx === 0}
          />
        </div>
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Content */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-8">
        <p className="text-white/70 text-xs tracking-[0.5em] mb-6">
          MINIMAL & MODERN
        </p>
        <h1
          className="text-white mb-2"
          style={{
            fontFamily: 'serif',
            fontSize: 'clamp(64px, 12vw, 120px)',
            fontWeight: 400,
            lineHeight: 1,
          }}
        >
          Yuki
        </h1>
        <h1
          className="text-white mb-8"
          style={{
            fontFamily: 'serif',
            fontSize: 'clamp(64px, 12vw, 120px)',
            fontWeight: 400,
            fontStyle: 'italic',
            lineHeight: 1,
          }}
        >
          Ichinose
        </h1>
        <p className="text-white/80 text-sm leading-relaxed mb-10 max-w-sm">
          一人ひとりのライフスタイルに寄り添う、<br />
          パーソナルなバーバーエクスペリエンス
        </p>

        {/* CTA Buttons */}
        <div className="flex gap-4 flex-wrap justify-center">
          <button
            onClick={() => handleScroll('story')}
            className="bg-white text-gray-900 px-8 py-3 text-sm tracking-widest hover:bg-gray-100 transition-colors duration-200"
          >
            私のストーリー
          </button>
          <button
            onClick={() => handleScroll('contact')}
            className="border border-white text-white px-8 py-3 text-sm tracking-widest hover:bg-white hover:text-gray-900 transition-colors duration-200"
          >
            予約する
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
        <p className="text-white/50 text-xs tracking-[0.3em]">SCROLL</p>
        <div className="w-px h-8 bg-white/50" />
        <p className="text-white/50 text-lg">↓</p>
      </div>
    </section>
  );
};