"use client";

import { useEffect, useRef, ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function ScrollReveal({ children, className = "", delay = 0 }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            // Animate speed bars
            entry.target.querySelectorAll(".speed-bar-fill").forEach((bar) => {
              setTimeout(() => bar.classList.add("animated"), 300);
            });
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const delayClass = delay === 1 ? "reveal-d1" : delay === 2 ? "reveal-d2" : delay === 3 ? "reveal-d3" : "";

  return (
    <div ref={ref} className={`reveal ${delayClass} ${className}`}>
      {children}
    </div>
  );
}
