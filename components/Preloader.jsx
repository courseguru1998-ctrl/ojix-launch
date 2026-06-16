"use client";
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const panel = {
  exit: { scaleY: 0, transition: { duration: 0.7, ease: [0.7, 0, 0.3, 1] } },
};

export default function Preloader({ onDone }) {
  const [count, setCount] = useState(0);
  const reduced = useReducedMotion();
  useEffect(() => {
    if (reduced) { setCount(100); onDone(); return; }
    const start = performance.now();
    const dur = 1500;
    let raf;
    const tick = (t) => {
      const p = Math.min((t - start) / dur, 1);
      setCount(Math.round(100 * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
      else setTimeout(onDone, 200);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [onDone, reduced]);

  return (
    <>
      <motion.div aria-hidden="true" variants={panel} exit="exit" style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "50.5vh", background: "var(--color-background)", zIndex: 9400, transformOrigin: "top" }} />
      <motion.div aria-hidden="true" variants={panel} exit="exit" style={{ position: "fixed", bottom: 0, left: 0, width: "100%", height: "50.5vh", background: "var(--color-background)", zIndex: 9400, transformOrigin: "bottom" }} />
      <motion.div aria-hidden="true" exit={{ opacity: 0, transition: { duration: 0.2 } }} style={{ position: "fixed", inset: 0, zIndex: 9500, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
        <div style={{ display: "flex", overflow: "hidden" }} className="pre-logo">
          {"OJIX".split("").map((c, i) => (
            <motion.span
              key={i}
              initial={reduced ? false : { y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: reduced ? 0 : 0.6, delay: reduced ? 0 : i * 0.07, ease: [0.16, 1, 0.3, 1] }}
            >{c}</motion.span>
          ))}
        </div>
        <motion.div
          initial={reduced ? false : { width: 0 }}
          animate={{ width: "min(380px,72vw)" }}
          transition={{ duration: reduced ? 0 : 1.3, ease: [0.45, 0, 0.2, 1], delay: reduced ? 0 : 0.25 }}
          style={{ height: 2, background: "var(--color-accent)", margin: "24px 0 18px" }}
        />
        <div style={{ display: "flex", justifyContent: "space-between", width: "min(380px,72vw)" }}>
          <span style={{ font: "500 11px Roboto", color: "var(--color-muted-fg)", letterSpacing: ".12em", textTransform: "uppercase" }}>Loading</span>
          <span id="preCount" style={{ font: "500 11px Roboto", color: "var(--color-accent)", letterSpacing: ".12em" }}>{String(count).padStart(3, "0")}</span>
        </div>
      </motion.div>
    </>
  );
}
