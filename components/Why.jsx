"use client";
import { motion, useReducedMotion } from "framer-motion";

const REASONS = [
  {
    k: "01 / Integrated",
    title: "One team owns the whole stack.",
    body: "Most firms hand off between software, AI, and mechanical. We don't. The same team designs the API, the ML model, and the bracket that holds the camera. No translation errors, no scope drift, no excuses.",
    visual: (
      <svg viewBox="0 0 320 200" fill="none" stroke="var(--color-accent)" strokeWidth="1.5">
        <rect x="40" y="40" width="100" height="60" rx="4" />
        <rect x="40" y="120" width="100" height="40" rx="4" />
        <rect x="180" y="40" width="100" height="120" rx="4" />
        <line x1="140" y1="70" x2="180" y2="70" />
        <line x1="140" y1="140" x2="180" y2="140" />
        <circle cx="90" cy="70" r="3" fill="var(--color-accent)" />
        <circle cx="90" cy="140" r="3" fill="var(--color-accent)" />
        <circle cx="230" cy="100" r="3" fill="var(--color-accent)" />
      </svg>
    ),
  },
  {
    k: "02 / Industrial",
    title: "Built for production, not prototypes.",
    body: "We work where downtime costs thousands per hour. Our systems are designed to run: instrumented, monitored, with a real SRE posture from day one. When something breaks at 3am, we know before you do.",
    visual: (
      <svg viewBox="0 0 320 200" fill="none" stroke="var(--color-accent)" strokeWidth="1.5">
        <polyline points="40,140 80,120 120,130 160,90 200,100 240,60 280,80" />
        <line x1="40" y1="170" x2="280" y2="170" />
        <line x1="40" y1="170" x2="40" y2="40" />
        <circle cx="240" cy="60" r="5" fill="var(--color-accent)" />
        <circle cx="160" cy="90" r="3" fill="var(--color-accent)" />
      </svg>
    ),
  },
  {
    k: "03 / Code & Steel",
    title: "Where software meets hardware.",
    body: "Mechanical design, embedded firmware, ML inference, and the web dashboard — all under one roof. We ship the whole thing. Hardware prototypes, firmware flashing, factory acceptance tests, the lot.",
    visual: (
      <svg viewBox="0 0 320 200" fill="none" stroke="var(--color-accent)" strokeWidth="1.5">
        <circle cx="160" cy="100" r="60" />
        <circle cx="160" cy="100" r="30" />
        <g strokeWidth="1">
          {Array.from({ length: 12 }).map((_, i) => {
            const a = (i / 12) * Math.PI * 2;
            const x1 = 160 + Math.cos(a) * 65;
            const y1 = 100 + Math.sin(a) * 65;
            const x2 = 160 + Math.cos(a) * 80;
            const y2 = 100 + Math.sin(a) * 80;
            return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />;
          })}
        </g>
        <circle cx="160" cy="100" r="4" fill="var(--color-accent)" />
      </svg>
    ),
  },
];

export default function Why() {
  const reduced = useReducedMotion();
  return (
    <section id="why" style={{ background: "var(--color-background)" }}>
      <div className="shell">
        <p className="label">Why OJIX</p>
        <h2 className="sec">Three things we won't compromise on.</h2>
      </div>
      <div className="shell-wide" style={{ paddingTop: 0, paddingBottom: 0 }}>
        <div className="stack-wrap">
          {REASONS.map((r, i) => (
            <motion.div
              key={i}
              className="stack-card"
              initial={reduced ? false : { opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: reduced ? 0 : 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <div>
                <div className="k">{r.k}</div>
                <h3>{r.title}</h3>
                <p>{r.body}</p>
              </div>
              <div className="stack-visual">{r.visual}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
