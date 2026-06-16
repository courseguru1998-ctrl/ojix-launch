"use client";
import { motion, useReducedMotion } from "framer-motion";

const INDUSTRIES = [
  { title: "Manufacturing", desc: "Process automation, vision QA, line telemetry.", icon: "M3 21h18 M5 21V7l7-4 7 4v14 M9 9h.01 M9 13h.01 M9 17h.01 M15 9h.01 M15 13h.01 M15 17h.01" },
  { title: "Automotive", desc: "EV integration, fleet diagnostics, plant robotics.", icon: "M5 17H3v-6l2-5h12l3 5v6h-2 M10 17h5 M3 11h18 M7.5 15a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z M17.5 15a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z" },
  { title: "Logistics", desc: "Warehouse automation, fleet routing, last-mile.", icon: "M1 3h15v13H1z M16 8h4l3 3v5h-7 M5.5 21a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z M18.5 21a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" },
  { title: "Energy", desc: "Grid monitoring, predictive maintenance, renewables.", icon: "M13 2 3 14h9l-1 8 10-12h-9l1-8z" },
  { title: "Healthcare", desc: "Clinical software, regulated ML, lab automation.", icon: "M22 12h-4l-3 9L9 3l-3 9H2" },
  { title: "Robotics", desc: "Pick-and-place, AMRs, computer-vision guidance.", icon: "M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" },
];

export default function Industries() {
  const reduced = useReducedMotion();
  return (
    <section id="industries" style={{ background: "var(--color-muted)" }}>
      <div className="shell">
        <p className="label">Industries we serve</p>
        <h2 className="sec">Built for the industries that build everything else.</h2>
        <p className="sec-sub">Six sectors where OJIX has shipped. Pick yours — we probably already have a head start.</p>
        <div className="ind-grid">
          {INDUSTRIES.map((it, i) => (
            <motion.a
              href="#contact"
              key={i}
              className="ind"
              aria-label={`Inquire about ${it.title}`}
              initial={reduced ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: reduced ? 0 : 0.5, delay: reduced ? 0 : i * 0.05 }}
            >
              <div className="ic-sm">
                <svg viewBox="0 0 24 24" aria-hidden><path d={it.icon} /></svg>
              </div>
              <h3>{it.title}</h3>
              <p>{it.desc}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
