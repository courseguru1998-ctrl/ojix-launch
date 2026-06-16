"use client";
import { motion, useReducedMotion } from "framer-motion";

const lineAnim = (ready, d, reduced) => ({
  initial: reduced ? false : { y: "110%" },
  animate: ready ? { y: 0 } : {},
  transition: { duration: reduced ? 0 : 1, delay: reduced ? 0 : d, ease: [0.16, 1, 0.3, 1] },
});

export default function HeroCinematic({ ready }) {
  const reduced = useReducedMotion();
  return (
    <header id="top" className="hero">
      <div className="hero-meta">
        <div className="left">
          <span><span className="dot" aria-hidden="true" />SYS_OJIX // LIVE</span>
          <span>BENGALURU · INDIA</span>
        </div>
        <div className="right">
          <span>LAT 12.97° N</span>
          <span>LON 77.59° E</span>
        </div>
      </div>
      <div className="hero-inner">
        <h1 id="hero-title">
          <span className="ln"><motion.span {...lineAnim(ready, 0.2, reduced)} style={{ display: "inline-block" }}>Software</motion.span><span> </span><motion.span {...lineAnim(ready, 0.3, reduced)} style={{ display: "inline-block" }}><em>that ships.</em></motion.span></span>
          <span className="ln"><motion.span {...lineAnim(ready, 0.4, reduced)} style={{ display: "inline-block" }}>Code</motion.span><span> </span><motion.span {...lineAnim(ready, 0.5, reduced)} style={{ display: "inline-block" }}><span className="cyan">that scales.</span></motion.span></span>
          <span className="ln"><motion.span {...lineAnim(ready, 0.6, reduced)} style={{ display: "inline-block" }} className="ghost">AI</motion.span><span> </span><motion.span {...lineAnim(ready, 0.7, reduced)} style={{ display: "inline-block" }} className="ghost">that</motion.span><span> </span><motion.span {...lineAnim(ready, 0.8, reduced)} style={{ display: "inline-block" }} className="ghost">works.</motion.span></span>
        </h1>
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 12 }}
          animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: reduced ? 0 : 0.7, delay: reduced ? 0 : 0.95 }}
          className="hero-foot"
        >
          <p className="hero-sub">
            OJIX is a <b>software product studio</b>. We build production web platforms, mobile apps, AI systems, and the DevOps to keep them running. One team. No handoffs.
          </p>
          <div className="hero-ctas">
            <motion.a whileHover={reduced ? undefined : { y: -1 }} className="btn btn-primary" href="#services" data-cursor="View">VIEW_SERVICES <span className="arr" aria-hidden="true">→</span></motion.a>
            <motion.a whileHover={reduced ? undefined : { y: -1 }} className="btn btn-secondary" href="#contact" data-cursor="Talk">START_PROJECT</motion.a>
          </div>
        </motion.div>
        <motion.div
          initial={reduced ? false : { opacity: 0 }}
          animate={ready ? { opacity: 1 } : {}}
          transition={{ duration: reduced ? 0 : 0.8, delay: reduced ? 0 : 1.15 }}
          className="hero-ticks"
        >
          {[
            [["50+", "orange"], "PROJECTS_SHIPPED"],
            [["12", "plain"], "ENGINEERS"],
            [["08", "plain"], "YRS_IN_PRODUCTION"],
            [["99.9%", "plain"], "UPTIME_SLA"],
          ].map(([[n, kind], l]) => (
            <div key={l} className="tick">
              <span className="num">{kind === "orange" ? <em>{n}</em> : n}</span>
              <span className="lbl">{l}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </header>
  );
}
