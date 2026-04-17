"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  const handleClick = (hash: string) => (e: React.MouseEvent) => {
    setMenuOpen(false);
    // If already on home, smooth-scroll in-page; otherwise let the browser navigate
    if (isHome) {
      e.preventDefault();
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="fixed top-0 w-full z-100 px-4 md:px-8 py-4 flex justify-between items-center backdrop-blur-xl bg-[rgba(250,250,247,0.85)] border-b border-border-light">
      <a href={isHome ? "#" : "/"} className="flex items-center gap-2 no-underline" style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "1.3rem", letterSpacing: "-0.5px", color: "var(--color-text-primary)" }}>
        <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
          <svg viewBox="0 0 24 24" fill="white" className="w-[18px] h-[18px]">
            <path d="M12 2C8.5 2 5 5.5 5 10c0 2.8 1.3 5 3 6.5V22l4-2.5L16 22v-5.5c1.7-1.5 3-3.7 3-6.5 0-4.5-3.5-8-7-8zm0 2c2.8 0 5 2.7 5 6 0 1.9-.8 3.5-2 4.7l-.5.4V19l-2.5-1.5L9.5 19v-3.9l-.5-.4C7.8 13.5 7 11.9 7 10c0-3.3 2.2-6 5-6z" />
          </svg>
        </div>
        Oak City Media
      </a>

      <button
        className={`md:hidden flex flex-col gap-[5px] p-2 bg-transparent border-none cursor-pointer z-[101] ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span className={`block w-[22px] h-[2px] bg-text-primary rounded transition-all ${menuOpen ? "rotate-45 translate-x-[5px] translate-y-[5px]" : ""}`} />
        <span className={`block w-[22px] h-[2px] bg-text-primary rounded transition-all ${menuOpen ? "opacity-0" : ""}`} />
        <span className={`block w-[22px] h-[2px] bg-text-primary rounded transition-all ${menuOpen ? "-rotate-45 translate-x-[5px] -translate-y-[5px]" : ""}`} />
      </button>

      <ul className={`list-none flex gap-8 items-center md:flex ${menuOpen ? "!fixed !top-0 !right-0 !w-3/4 !max-w-[300px] !h-screen !bg-bg-white !flex-col !justify-center !gap-6 !p-8 !shadow-[-10px_0_40px_rgba(0,0,0,0.1)] !items-start" : "max-md:hidden"}`}>
        <li><a href="/#services" onClick={handleClick("#services")} className="cursor-pointer text-text-secondary no-underline text-[0.9rem] font-medium hover:text-accent transition-colors">Services</a></li>
        <li><a href="/#work" onClick={handleClick("#work")} className="cursor-pointer text-text-secondary no-underline text-[0.9rem] font-medium hover:text-accent transition-colors">Work</a></li>
        <li><a href="/#pricing" onClick={handleClick("#pricing")} className="cursor-pointer text-text-secondary no-underline text-[0.9rem] font-medium hover:text-accent transition-colors">Pricing</a></li>
        <li>
          <a
            href="/#contact"
            onClick={handleClick("#contact")}
            className="cursor-pointer bg-accent text-white! px-6 py-2.5 rounded-full font-semibold text-[0.9rem] no-underline hover:bg-accent-light hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(42,140,110,0.2)] transition-all"
          >
            Get In Touch
          </a>
        </li>
      </ul>
    </nav>
  );
}
