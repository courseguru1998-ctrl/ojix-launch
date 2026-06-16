"use client";
import { motion, useReducedMotion } from "framer-motion";

const COLS = [
  ["SITEMAP", [["Services", "#services"], ["Industries", "#industries"], ["Manifesto", "#why"], ["Contact", "#contact"]]],
  ["CONNECT", [["LinkedIn", "#"], ["Twitter / X", "#"], ["GitHub", "#"], ["hello@ojix.com", "mailto:hello@ojix.com"]]],
  ["LEGAL", [["Privacy", "/privacy"], ["Terms", "/terms"]]],
];

export default function FooterCinematic() {
  const reduced = useReducedMotion();
  return (
    <footer>
      <div className="foot-grid">
        <div className="foot-brand">
          <h3><span className="bar" />OJIX / SHIPPED</h3>
          <p>An independent software studio in Bengaluru. We exist because most agencies sell time, not outcomes — and we wanted to be the team that does the opposite.</p>
        </div>
        {COLS.map(([h, links]) => (
          <div key={h} className="foot-col">
            <h3 className="foot-col-h">// {h}</h3>
            <ul>{links.map(([l, href]) => <li key={l}><a href={href}>{l}</a></li>)}</ul>
          </div>
        ))}
      </div>

      <motion.div
        initial={reduced ? false : { opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: reduced ? 0 : 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="foot-big"
        aria-hidden
      >
        {["O", "J", "I", "X"].map((char, i) => (
          <span
            key={i}
            style={{ display: "inline-block", cursor: "default", transition: "color 100ms ease-out, text-shadow 100ms ease-out, transform 100ms ease-out" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "var(--color-accent)";
              e.currentTarget.style.textShadow = "0 0 16px rgba(255,92,0,0.9), 0 0 40px rgba(255,92,0,0.6), 0 0 80px rgba(255,92,0,0.3)";
              e.currentTarget.style.transform = "scale(1.04)";
              e.currentTarget.style.transformOrigin = "center bottom";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "transparent";
              e.currentTarget.style.textShadow = "none";
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.transition = "color 500ms ease-out, text-shadow 500ms ease-out, transform 500ms ease-out";
            }}
          >
            {char}
          </span>
        ))}
      </motion.div>

      <div className="foot-bottom">
        <span>© 2026 OJIX // ALL_RIGHTS_RESERVED</span>
        <span>// SHIP. SCALE. SHIP_AGAIN. //</span>
      </div>
    </footer>
  );
}