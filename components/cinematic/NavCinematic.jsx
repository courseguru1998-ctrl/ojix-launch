"use client";
import { useEffect, useState } from "react";

const LINKS = [
  ["01", "Capabilities", "#services"],
  ["02", "Sectors", "#industries"],
  ["03", "Manifesto", "#why"],
  ["04", "Contact", "#contact"],
];

export default function NavCinematic({ ready }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <>
      <nav className={scrolled ? "scrolled" : ""} style={{ opacity: ready ? 1 : 0, transition: "opacity 600ms cubic-bezier(0.16,1,0.3,1)" }}>
        <a href="#top" className="logo">
          <span className="bar" />OJIX<span className="slash">/</span><span className="tag">ENGINEERED</span>
        </a>
        <ul className="nav-links">
          {LINKS.map(([n, l, h]) => (
            <li key={l}><a href={h}><span className="num">{n}</span>{l}</a></li>
          ))}
        </ul>
        <a href="/" className="nav-mode" data-cursor="View">LIGHT_MODE</a>
        <a href="#contact" className="nav-cta" data-cursor="Go">START_PROJECT <span className="arr">→</span></a>
        <button className={`burger ${open ? "open" : ""}`} onClick={() => setOpen((v) => !v)} aria-label="Menu">
          <span /><span /><span />
        </button>
      </nav>
      <div className={`m-menu ${open ? "open" : ""}`}>
        {LINKS.map(([n, l, h]) => <a key={l} href={h} onClick={() => setOpen(false)}>{l}<em>{n}</em></a>)}
      </div>
    </>
  );
}
