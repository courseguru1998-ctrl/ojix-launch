"use client";
import { useRef } from "react";
import { motion, useScroll, useReducedMotion, useMotionValueEvent } from "framer-motion";

const TEXT = [
  ["We", false], ["build", false], ["the", false],
  ["code", true], ["that", false], ["thinks", false], ["and", false], ["the", false],
  ["steel", true], ["that", false], ["moves.", false],
  ["Most", false], ["companies", false], ["serve", false], ["one", false], ["and", false], ["outsource", false], ["the", false], ["other.", false],
  ["OJIX", true], ["was", false], ["built", false], ["to", false], ["own", false], ["both.", true],
];

export default function Thesis() {
  const ref = useRef(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.8", "end 0.3"] });
  const total = TEXT.length;
  return (
    <section ref={ref} className="thesis">
      <div className="shell-wide" style={{ maxWidth: 1280, margin: "0 auto" }}>
        <p className="label">The OJIX Thesis</p>
        <p className="thesis-text">
          {TEXT.map(([w, hl], i) => (
            <Word key={i} word={w} highlight={hl} index={i} total={total} progress={scrollYProgress} reduced={reduced} />
          ))}
        </p>
      </div>
    </section>
  );
}

function Word({ word, highlight, index, total, progress, reduced }) {
  const ref = useRef(null);
  useMotionValueEvent(progress, "change", (v) => {
    if (!ref.current) return;
    if (reduced) { ref.current.classList.add("in"); return; }
    const start = index / total;
    const end = (index + 1) / total;
    const inView = v >= start && v <= end + 0.15;
    if (inView) ref.current.classList.add("in");
    else if (v < start - 0.05) ref.current.classList.remove("in");
  });
  return (
    <span ref={ref} className={`wd ${highlight ? "hl" : ""}`} style={{ marginRight: "0.25em" }}>
      {word}
    </span>
  );
}
