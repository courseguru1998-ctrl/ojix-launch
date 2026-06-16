"use client";
import { motion, useReducedMotion } from "framer-motion";

const REASONS = [
  {
    k: "[01] // PRODUCTION-DAY-ONE",
    title: "We build for Tuesday at 3pm, not just the demo.",
    body: "Most agencies build to win the pitch. We build to survive your second traffic spike, your first security audit, and the engineer you hire in month six.",
    visual: (
      <svg viewBox="0 0 320 200" fill="none" stroke="var(--color-accent)" strokeWidth="1.25">
        <polyline points="40,140 80,120 120,130 160,90 200,100 240,60 280,80" />
        <line x1="40" y1="170" x2="280" y2="170" />
        <line x1="40" y1="170" x2="40" y2="40" />
        <circle cx="240" cy="60" r="5" fill="var(--color-accent)" />
        <circle cx="160" cy="90" r="3" fill="var(--color-accent-2)" />
      </svg>
    ),
  },
  {
    k: "[02] // SENIOR-ONLY",
    title: "No interns on your project. Ever.",
    body: "Every engineer who touches your code has shipped production systems before. We don't pad teams with juniors to grow our margins — we staff for outcome, not headcount. You talk to the people writing the code.",
    visual: (
      <svg viewBox="0 0 320 200" fill="none" stroke="var(--color-accent)" strokeWidth="1.25">
        <rect x="40" y="40" width="240" height="120" rx="2" />
        <line x1="40" y1="80" x2="280" y2="80" />
        <line x1="40" y1="120" x2="280" y2="120" />
        <rect x="56" y="56" width="60" height="14" />
        <rect x="200" y="56" width="60" height="14" />
        <rect x="56" y="96" width="208" height="14" />
        <rect x="56" y="136" width="80" height="14" />
        <rect x="156" y="136" width="40" height="14" />
      </svg>
    ),
  },
  {
    k: "[03] // YOU-OWN-IT",
    title: "Your code. Your data. Your IP. Forever.",
    body: "No vendor lock-in. No proprietary frameworks. No \"you'll need us to maintain this.\" We write boring, well-documented code that your in-house team can read, run, and own. If you want to take it in-house at year two, we hand over the keys.",
    visual: (
      <svg viewBox="0 0 320 200" fill="none" stroke="var(--color-accent)" strokeWidth="1.25">
        <rect x="60" y="80" width="120" height="80" rx="4" />
        <rect x="140" y="40" width="120" height="80" rx="4" />
        <line x1="120" y1="120" x2="140" y2="100" />
        <circle cx="100" cy="120" r="3" fill="var(--color-accent)" />
        <circle cx="200" cy="100" r="3" fill="var(--color-accent-2)" />
      </svg>
    ),
  },
];

export default function WhyCinematic() {
  const reduced = useReducedMotion();
  return (
    <section id="why">
      <div className="shell">
        <div className="section-head">
          <div>
            <span className="sec-num"><span className="dot">●</span> 04 / MANIFESTO</span>
            <p className="label">Why OJIX</p>
          </div>
          <div>
            <h2 className="sec">Three things we <em>won't compromise</em> on.</h2>
          </div>
        </div>
      </div>
      <div className="shell-wide" style={{ paddingTop: "8vh", paddingBottom: 0 }}>
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