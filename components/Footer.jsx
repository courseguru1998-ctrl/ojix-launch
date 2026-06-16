"use client";
import { motion, useReducedMotion } from "framer-motion";

const COLS = [
  ["Sitemap", [["Services", "#services"], ["Industries", "#industries"], ["Why OJIX", "#why"], ["Contact", "#contact"]]],
  ["Connect", [["LinkedIn", "#"], ["Twitter / X", "#"], ["WhatsApp", "#"], ["hello@ojix.com", "mailto:hello@ojix.com"]]],
  ["Legal", [["Privacy Policy", "/privacy"], ["Terms", "/terms"]]],
];

export default function Footer() {
  const reduced = useReducedMotion();
  return (
    <footer>
      <div className="foot-grid">
        <div className="foot-brand">
          <h3>OJIX</h3>
          <p>Engineering intelligence for the physical world. Software, AI, mechanics, automation — one team.</p>
        </div>
        {COLS.map(([h, links]) => (
          <div key={h} className="foot-col">
            <h3 className="foot-col-h">{h}</h3>
            <ul>
              {links.map(([l, href]) => (
                <li key={l}><a href={href}>{l}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <motion.div
        initial={reduced ? false : { opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: reduced ? 0 : 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="foot-big"
        aria-hidden
      >
        {["O", "J", "I", "X"].map((char, i) => (
          <span
            key={i}
            style={{
              display: "inline-block",
              cursor: reduced ? "default" : "pointer",
              transition: "color 100ms ease-out, text-shadow 100ms ease-out, transform 100ms ease-out",
            }}
            onMouseEnter={reduced ? undefined : (e) => {
              e.currentTarget.style.color = "#FF5C00";
              e.currentTarget.style.textShadow = "0 0 10px rgba(255,92,0,0.8), 0 0 30px rgba(255,92,0,0.5), 0 0 60px rgba(255,92,0,0.25)";
              e.currentTarget.style.transform = "scale(1.04)";
              e.currentTarget.style.transformOrigin = "center bottom";
            }}
            onMouseLeave={reduced ? undefined : (e) => {
              e.currentTarget.style.color = "transparent";
              e.currentTarget.style.textShadow = "none";
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.transition = "color 400ms ease-out, text-shadow 400ms ease-out, transform 400ms ease-out";
            }}
          >
            {char}
          </span>
        ))}
      </motion.div>

      <div className="foot-bottom">
        <span>© 2026 OJIX. ALL RIGHTS RESERVED.</span>
        <span>WHERE CODE MEETS STEEL</span>
      </div>
    </footer>
  );
}
