"use client";
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const LOGS = [
  { txt: "INITIALIZING_BUILD", status: "ok" },
  { txt: "LOAD_RUNTIME", status: "ok" },
  { txt: "MOUNT_DEPENDENCIES", status: "ok" },
  { txt: "INIT_RENDER_ENGINE", status: "ok" },
  { txt: "COMPILE_SHADERS", status: "ok" },
  { txt: "MOUNT_COMPONENTS", status: "ok" },
  { txt: "READY", status: "ok" },
];

export default function PreloaderCinematic({ onDone }) {
  const [count, setCount] = useState(0);
  const [logs, setLogs] = useState([]);
  const totalSteps = LOGS.length;
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) {
      setCount(100);
      setLogs(LOGS);
      onDone();
      return;
    }
    const start = performance.now();
    const dur = 1800;
    let raf;
    let logIndex = 0;

    const tick = (t) => {
      const p = Math.min((t - start) / dur, 1);
      setCount(Math.round(100 * (1 - Math.pow(1 - p, 2.5))));
      if (logIndex < LOGS.length && p > (logIndex / LOGS.length) * 0.85) {
        setLogs((prev) => [...prev, LOGS[logIndex]]);
        logIndex++;
      }
      if (p < 1) raf = requestAnimationFrame(tick);
      else setTimeout(onDone, 300);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [onDone, reduced]);

  return (
    <>
      <motion.div aria-hidden="true" initial={{ scaleY: 1 }} exit={{ scaleY: 0, transition: { duration: 0.6, ease: [0.7, 0, 0.3, 1] } }} style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "50%", background: "var(--color-bg)", zIndex: 9400, transformOrigin: "top" }} />
      <motion.div aria-hidden="true" initial={{ scaleY: 1 }} exit={{ scaleY: 0, transition: { duration: 0.6, ease: [0.7, 0, 0.3, 1] } }} style={{ position: "fixed", bottom: 0, left: 0, width: "100%", height: "50%", background: "var(--color-bg)", zIndex: 9400, transformOrigin: "bottom" }} />
      <motion.div exit={{ opacity: 0, transition: { duration: 0.2 } }} aria-hidden="true" style={{ position: "fixed", inset: 0, zIndex: 9500, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
        <div className="pre-logo">
          {"OJIX".split("").map((c, i) => (
            <motion.span key={i} initial={reduced ? false : { y: "110%" }} animate={{ y: 0 }} transition={{ duration: reduced ? 0 : 0.7, delay: reduced ? 0 : i * 0.1, ease: [0.16, 1, 0.3, 1] }}>{c}</motion.span>
          ))}
        </div>
        <motion.div initial={reduced ? false : { width: 0 }} animate={{ width: "min(420px,72vw)" }} transition={{ duration: reduced ? 0 : 1.4, ease: [0.45, 0, 0.2, 1], delay: reduced ? 0 : 0.35 }} className="pre-bar"><i /></motion.div>
        <div className="pre-meta">
          <span>SYSTEM_BOOT</span>
          <span id="preCount">{String(count).padStart(3, "0")}%</span>
        </div>
        <motion.div className="pre-log" initial={reduced ? false : { opacity: 0 }} animate={{ opacity: 0.6 }} transition={{ delay: reduced ? 0 : 0.6 }}>
          {LOGS.map((l, i) => (
            <motion.div
              key={i}
              initial={reduced ? false : { opacity: 0, x: -10 }}
              animate={{ opacity: i < logs.length ? 1 : 0.3, x: 0 }}
              transition={{ duration: reduced ? 0 : 0.2 }}
              className={l.status}
            >
              [{l.status.toUpperCase()}] {l.txt}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </>
  );
}