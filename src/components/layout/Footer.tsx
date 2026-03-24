'use client';

const InstagramIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const NAV_ITEMS = [
  { label: 'Story', href: '#story' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

const INSTAGRAM_URL = 'https://www.instagram.com/yuki_eight_nine/';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleScroll = (href: string) => {
    const id = href.replace('#', '');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-stone-950 text-stone-400">
      <div className="container mx-auto px-8 max-w-7xl">

        {/* 上段：Logo・Nav・Instagram */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">

          {/* Logo */}
          <div className="text-xl text-white">
            <span className="font-light">YUKI</span>
            <span className="font-serif italic ml-1">Barber</span>
          </div>

          {/* Nav */}
          <nav className="flex gap-8 text-sm font-light">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.label}
                onClick={() => handleScroll(item.href)}
                className="hover:text-white transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Instagram */}
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-white transition-colors text-sm font-light"
          >
            <InstagramIcon />
            <span>@yuki_eight_nine</span>
          </a>

        </div>

        {/* 下段：Copyright（中央） */}
        <div className="border-t border-stone-800 pt-6 text-center">
          <p className="text-sm font-light">
            © {currentYear} Yuki Ichinose
          </p>
        </div>

      </div>
    </footer>
  );
};