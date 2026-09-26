import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = ['Obsession', 'The Classic', 'The Heart', 'Iron Man'];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-[#0a0807]/80 backdrop-blur-xl py-3' : 'py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#top" className="font-display text-xl tracking-widest text-[#e8c878]">
          STARK<span className="text-[#e8e0d6]">ARCHIVE</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l, i) => (
            <a
              key={l}
              href={`#section-${i + 1}`}
              className="text-sm tracking-widest uppercase text-[#e8e0d6]/60 hover:text-[#e8c878] transition-colors duration-300"
            >
              {l}
            </a>
          ))}
        </div>

        <button
          className="md:hidden text-[#e8c878]"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          open ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="px-6 py-4 flex flex-col gap-4 bg-[#0a0807]/95 backdrop-blur-xl">
          {links.map((l, i) => (
            <a
              key={l}
              href={`#section-${i + 1}`}
              onClick={() => setOpen(false)}
              className="text-sm tracking-widest uppercase text-[#e8e0d6]/70 hover:text-[#e8c878] transition-colors"
            >
              {l}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
