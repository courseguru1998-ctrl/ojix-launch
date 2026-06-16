"use client";
import { useRef } from "react";
import { useScroll, useMotionValueEvent, useReducedMotion } from "framer-motion";

const TEXT = [
  ["Most", false, "f"],
  ["software", false, "f"],
  ["studios", false, "f"],
  ["sell", false, "f"],
  ["time.", false, "f"],
  ["We", false, "f"],
  ["sell", false, "f"],
  ["outcomes.", true, "f"],
  ["Code", false, "f"],
  ["that", false, "f"],
  ["ships", true, "f"],
  ["on", false, "f"],
  ["schedule.", false, "f"],
  ["AI", false, "f"],
  ["that", false, "f"],
  ["earns", true, "c"],
  ["its", false, "c"],
  ["place", false, "c"],
  ["in", false, "c"],
  ["production.", false, "c"],
  ["Infrastructure", false, "f"],
  ["that", false, "f"],
  ["holds", true, "c"],
  ["the", false, "c"],
  ["weight.", true, "f"],
];

export default function ThesisCinematic() {
  const ref = useRef(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.8", "end 0.3"] });
  return (
    <section ref={ref} className="thesis">
      <div className="shell">
        <span className="sec-num" aria-hidden="true"><span className="dot" /> 03 / THESIS</span>
        <p className="thesis-text">
          {TEXT.map(([w, hl, kind], i) => (
            <Word key={i} word={w} highlight={hl} kind={kind} index={i} total={TEXT.length} progress={scrollYProgress} reduced={reduced} />
          ))}
        </p>
      </div>
    </section>
  );
}

function Word({ word, highlight, kind, index, total, progress, reduced }) {
  const ref = useRef(null);
  useMotionValueEvent(progress, "change", (v) => {
    if (!ref.current) return;
    if (reduced) {
      ref.current.classList.add("in");
      return;
    }
    const start = index / total;
    const end = (index + 1) / total;
    const inView = v >= start && v <= end + 0.15;
    if (inView) ref.current.classList.add("in");
    else if (v < start - 0.05) ref.current.classList.remove("in");
  });
  return (
    <span ref={ref} className={`wd ${highlight ? "hl" : ""} ${kind === "c" ? "cyan-w" : ""}`} style={{ marginRight: "0.25em" }}>
      {word}
    </span>
  );
}