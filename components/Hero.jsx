"use client";
import { motion, useReducedMotion } from "framer-motion";

const lineAnim = (ready, d, reduced) => ({
  initial: reduced ? false : { y: "110%" },
  animate: ready ? { y: 0 } : {},
  transition: { duration: reduced ? 0 : 0.9, delay: reduced ? 0 : d, ease: [0.16, 1, 0.3, 1] },
});

export default function Hero({ ready }) {
  const reduced = useReducedMotion();
  return (
    <header id="top" className="hero">
      <div className="hero-grid" aria-hidden />
      <div className="hero-inner">
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 12 }}
          animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: reduced ? 0 : 0.5, delay: reduced ? 0 : 0.1 }}
          className="hero-badge"
        >
          <span className="dot" aria-hidden="true" />SYS.OJIX // ONLINE
        </motion.div>
        <h1 id="hero-title">
          {[
            "Engineering",
            <span key="i"> the <em>Future.</em></span>,
          ].map((ln, i) => (
            <span key={i} style={{ display: "block", overflow: "hidden" }}>
              <motion.span {...lineAnim(ready, 0.2 + i * 0.12, reduced)} style={{ display: "inline-block" }}>{ln}</motion.span>
            </span>
          ))}
        </h1>
        <motion.p
          initial={reduced ? false : { opacity: 0, y: 16 }}
          animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: reduced ? 0 : 0.6, delay: reduced ? 0 : 0.5 }}
          className="hero-sub"
        >
          OJIX delivers integrated <b>software, AI, mechanical engineering, and industrial automation</b> — built and deployed by one expert team. Code meets steel.
        </motion.p>
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 16 }}
          animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: reduced ? 0 : 0.6, delay: reduced ? 0 : 0.7 }}
          className="hero-ctas"
        >
          <motion.a whileHover={reduced ? undefined : { y: -1 }} className="btn btn-primary" href="#services" data-cursor="Go">Explore our services</motion.a>
          <motion.a whileHover={reduced ? undefined : { y: -1 }} className="btn btn-secondary" href="#contact" data-cursor="Talk">Talk to us</motion.a>
        </motion.div>
        <motion.div
          initial={reduced ? false : { opacity: 0 }}
          animate={ready ? { opacity: 1 } : {}}
          transition={{ duration: reduced ? 0 : 0.6, delay: reduced ? 0 : 0.9 }}
          className="hero-ticks"
        >
          {[
            ["6", "Disciplines"],
            ["1", "Integrated team"],
            ["0", "Hand-offs"],
          ].map(([n, l]) => (
            <div key={l} className="tick">
              <span className="num">{n}</span>
              <span className="lbl">{l}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </header>
  );
}
