import { type ReactNode } from 'react';
import { useReveal } from '@/hooks/useReveal';

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: 1 | 2 | 3;
  variant?: 'fade' | 'mask';
  maskDelay?: 1 | 2 | 3 | 4;
}

export function Reveal({ children, className = '', delay, variant = 'fade', maskDelay }: RevealProps) {
  const { ref, visible } = useReveal<HTMLDivElement>();

  if (variant === 'mask') {
    const delayClass = maskDelay ? `mask-reveal-delay-${maskDelay}` : '';
    return (
      <div
        ref={ref}
        className={`mask-reveal ${delayClass} ${visible ? 'is-visible' : ''} ${className}`}
      >
        <span>{children}</span>
      </div>
    );
  }

  const delayClass = delay ? `reveal-delay-${delay}` : '';
  return (
    <div
      ref={ref}
      className={`reveal ${delayClass} ${visible ? 'is-visible' : ''} ${className}`}
    >
      {children}
    </div>
  );
}
