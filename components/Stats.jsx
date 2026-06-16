"use client";
import { motion, useInView, animate, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const STATS = [
  { num: "6", lbl: "Disciplines under one roof" },
  { num: "1", lbl: "Integrated team, no silos" },
  { num: "0", lbl: "Hand-offs between phases" },
  { num: "24/7", lbl: "Run posture, not pilot" },
];

function Counter({ to }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [val, setVal] = useState(0);
  const reduced = useReducedMotion();
  useEffect(() => {
    if (!inView) return;
    const isNum = !isNaN(parseInt(to));
    if (!isNum) { setVal(to); return; }
    if (reduced) { setVal(parseInt(to)); return; }
    const ctrl = animate(0, parseInt(to), {
      duration: 1.4,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setVal(Math.round(v)),
    });
    return () => ctrl.stop();
  }, [inView, to, reduced]);
  return <span ref={ref}>{val}</span>;
}

export default function Stats() {
  const reduced = useReducedMotion();
  return (
    <section className="stats-band">
      <div className="stats-grid">
        {STATS.map((s, i) => (
          <motion.div
            key={i}
            className="stat"
            initial={reduced ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: reduced ? 0 : 0.5, delay: reduced ? 0 : i * 0.08 }}
          >
            <div className="num"><Counter to={s.num} /></div>
            <div className="lbl">{s.lbl}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
