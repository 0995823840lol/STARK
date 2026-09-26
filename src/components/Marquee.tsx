interface MarqueeProps {
  items: string[];
}

export function Marquee({ items }: MarqueeProps) {
  const doubled = [...items, ...items, ...items, ...items];
  return (
    <div className="relative py-8 overflow-hidden border-y border-[#c8a24a]/10 bg-[#0a0807]">
      <div className="flex marquee-anim whitespace-nowrap">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="font-display text-2xl md:text-3xl text-[#e8e0d6]/20 mx-8 tracking-widest"
          >
            {item}
            <span className="text-[#c8a24a]/30 mx-8">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
