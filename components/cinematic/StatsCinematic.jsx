"use client";
import { motion, useInView, animate, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const STATS = [
  { num: "50+", lbl: "PROJECTS_SHIPPED" },
  { num: "12", lbl: "SENIOR_ENGINEERS" },
  { num: "08", lbl: "YRS_IN_PRODUCTION" },
  { num: "99.9%", lbl: "AVG_UPTIME" },
];

function Counter({ to }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [val, setVal] = useState(to);
  const reduced = useReducedMotion();
  useEffect(() => {
    if (!inView) return;
    const num = parseFloat(to);
    if (isNaN(num)) { setVal(to); return; }
    if (reduced) { setVal(to); return; }
    const ctrl = animate(0, num, {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => {
        if (to.includes(".")) setVal(v.toFixed(1) + "%");
        else setVal(Math.round(v) + (to.includes("+") ? "+" : ""));
      },
    });
    return () => ctrl.stop();
  }, [inView, to, reduced]);
  return <span ref={ref}>{val}</span>;
}

export default function StatsCinematic() {
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