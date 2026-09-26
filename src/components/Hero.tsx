import { useEffect, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useParallax } from '@/hooks/useParallax';
import { Reveal } from '@/components/Reveal';

const HERO_IMG = 'https://iron-man-site.netlify.app/assets/ironman-78.webp';

export function Hero() {
  const { ref, offset } = useParallax<HTMLDivElement>(-0.15);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const max = window.innerHeight;
      setScrollProgress(Math.min(window.scrollY / max, 1));
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section id="top" className="relative min-h-screen overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a0a0a] via-[#0a0807] to-[#0a0807]" />

      {/* Radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-40 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(200,162,74,0.25) 0%, transparent 70%)',
          transform: `translate(-50%, -50%) scale(${1 + scrollProgress * 0.5})`,
        }}
      />

      {/* Hero image with parallax */}
      <div
        ref={ref}
        className="absolute inset-0 flex items-center justify-center"
        style={{ transform: `translateY(${offset}px) scale(${1 + scrollProgress * 0.1})` }}
      >
        <img
          src={HERO_IMG}
          alt="Iron Man in red and gold armor with a luminous arc reactor"
          className="h-[110vh] w-auto object-contain opacity-90"
          style={{ filter: `brightness(${1 - scrollProgress * 0.5})` }}
        />
      </div>

      {/* Vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0807] via-transparent to-[#0a0807]/40" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0807]/60 via-transparent to-[#0a0807]/60" />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-6">
        <Reveal>
          <p className="text-xs tracking-[0.3em] uppercase text-[#e8c878]/80 mb-6">
            An independent tribute to the man behind the machine
          </p>
        </Reveal>

        <div className="overflow-hidden">
          <h1
            className="font-display text-[18vw] md:text-[14vw] lg:text-[12rem] leading-[0.85] gold-text"
            style={{
              transform: `translateY(${scrollProgress * 120}px)`,
              opacity: 1 - scrollProgress * 1.2,
            }}
          >
            IRON MAN
          </h1>
        </div>

        <Reveal delay={2} className="mt-8">
          <p className="text-lg md:text-xl text-[#e8e0d6]/70 font-light italic max-w-md">
            Some build weapons.<br />He built a second chance.
          </p>
        </Reveal>

        <Reveal delay={3} className="mt-10">
          <a
            href="#section-1"
            className="group inline-flex items-center gap-2 text-sm tracking-widest uppercase text-[#e8c878] border-b border-[#c8a24a]/40 pb-1 hover:border-[#e8c878] transition-all duration-300"
          >
            Begin the descent
            <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
          </a>
        </Reveal>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        style={{ opacity: 1 - scrollProgress * 3 }}
      >
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-[#c8a24a]/50 to-transparent" />
      </div>
    </section>
  );
}
