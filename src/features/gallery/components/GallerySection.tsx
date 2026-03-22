'use client';

import Image from 'next/image';
import { useState, useCallback, useRef, useEffect } from 'react';
import { GALLERY_SLIDES } from '@/constants/data';

const GAP = 16; // px between slides
const PC_SLIDE_RATIO = 0.30;
const SP_SLIDE_RATIO = 0.65;

export const GallerySection = () => {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const total = GALLERY_SLIDES.length;

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const update = () => setContainerWidth(el.offsetWidth);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const isPC = containerWidth >= 768;
  const slideRatio = isPC ? PC_SLIDE_RATIO : SP_SLIDE_RATIO;
  const slideWidth = containerWidth * slideRatio;
  const offset = containerWidth / 2 - (current * (slideWidth + GAP) + slideWidth / 2);

  const goTo = useCallback((idx: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent(idx);
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating]);

  const goPrev = useCallback(() => {
    goTo((current - 1 + total) % total);
  }, [current, total, goTo]);

  const goNext = useCallback(() => {
    goTo((current + 1) % total);
  }, [current, total, goTo]);

  return (
    <section id="gallery" className="py-24 bg-white">
      {/* Header */}
      <div className="container mx-auto px-8 max-w-6xl mb-12">
        <div className="text-center">
          <p className="text-xs tracking-[0.3em] text-stone-400 mb-4">GALLERY</p>
          <h2 className="text-3xl md:text-5xl font-light mb-4">
            カット後の <span className="font-serif italic">スタイル</span>
          </h2>
          <p className="text-stone-500 font-light text-sm">実際の施術例をご覧ください</p>
        </div>
      </div>

      {/* Slider */}
      <div className="relative overflow-hidden" ref={containerRef}>
        {/* Track */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(${offset}px)`,
            gap: `${GAP}px`,
          }}
        >
          {GALLERY_SLIDES.map((slide, idx) => (
            <div
              key={slide.src}
              className={`flex-shrink-0 transition-opacity duration-500 cursor-pointer ${
                idx === current ? 'opacity-100' : 'opacity-40'
              }`}
              style={{ width: `${slideWidth}px` }}
              onClick={() => idx !== current && goTo(idx)}
            >
              <div className="relative overflow-hidden" style={{ aspectRatio: '3/4' }}>
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 80vw, 55vw"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Left Arrow */}
        <button
          onClick={goPrev}
          aria-label="前の画像"
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white transition-colors flex items-center justify-center shadow-md z-10"
        >
          <span className="text-stone-700 text-lg">←</span>
        </button>

        {/* Right Arrow */}
        <button
          onClick={goNext}
          aria-label="次の画像"
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white transition-colors flex items-center justify-center shadow-md z-10"
        >
          <span className="text-stone-700 text-lg">→</span>
        </button>
      </div>

      {/* Caption */}
      <div className="text-center mt-6 px-8">
        <p className="text-stone-800 text-lg font-light transition-opacity duration-300">
          {GALLERY_SLIDES[current].title}
        </p>
        <p className="text-stone-500 text-sm font-light mt-1 transition-opacity duration-300">
          {GALLERY_SLIDES[current].description}
        </p>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-5">
        {GALLERY_SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goTo(idx)}
            aria-label={`スライド ${idx + 1}`}
            className={`transition-all duration-300 rounded-full ${
              idx === current
                ? 'w-6 h-1.5 bg-stone-800'
                : 'w-1.5 h-1.5 bg-stone-300 hover:bg-stone-400'
            }`}
          />
        ))}
      </div>
    </section>
  );
};
