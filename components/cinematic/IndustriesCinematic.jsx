"use client";
import { motion, useReducedMotion } from "framer-motion";

const INDUSTRIES = [
  { num: "01", title: "SaaS", desc: "B2B subscription platforms, multi-tenant architecture, billing integrations.", icon: "M3 3v18h18V3H3zm16 16H5V5h14v14z M7 7h2v2H7zm8 0h2v2h-2zM7 11h2v2H7zm8 0h2v2h-2zM7 15h2v2H7zm8 0h2v2h-2z" },
  { num: "02", title: "FinTech", desc: "Payment gateways, lending platforms, compliance frameworks, and fraud systems.", icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" },
  { num: "03", title: "HealthTech", desc: "Clinical SaaS, EMR integrations, patient portals, regulatory compliance.", icon: "M22 11.08V12a10 10 0 1 1-5.93-9.14M23 3.01l-9 9" },
  { num: "04", title: "E-commerce", desc: "Marketplaces, carts, payments, inventory, logistics APIs.", icon: "M7 18h10a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2zM8 6h8M8 12h8M8 16h8M8 8h5" },
  { num: "05", title: "EdTech", desc: "LMS, content management, virtual classrooms, analytics dashboards.", icon: "M12 2L2 7l10 5 10-5-10-5zm0 10l-10 5v3l10-5 10 5v-3l-10-5z" },
  { num: "06", title: "LogisticsTech", desc: "Fleet management, route optimization, real-time tracking, warehouse systems.", icon: "M9 3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1h3a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h3V3zM9 5H7v13h10V5h-2V3H9v2z M9 8h6v2H9V8zm0 4h6v2H9v2z" },
];

export default function IndustriesCinematic() {
  const reduced = useReducedMotion();
  return (
    <section id="industries">
      <div className="shell">
        <div className="section-head">
          <div>
            <span className="sec-num"><span className="dot">●</span> 05 / INDUSTRIES</span>
            <p className="label">Who we ship for</p>
          </div>
          <div>
            <h2 className="sec">Software in <em>high-stakes</em> industries.</h2>
            <p className="sec-sub">SaaS, FinTech, HealthTech, e-commerce, EdTech, logistics — six sectors where shipping broken means real-world consequences.</p>
          </div>
        </div>
        <div className="ind-grid">
          {INDUSTRIES.map((it, i) => (
            <motion.a
              href="#contact"
              key={i}
              className="ind"
              aria-label={`Inquire about ${it.title}`}
              initial={reduced ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: reduced ? 0 : 0.5, delay: reduced ? 0 : i * 0.05 }}
            >
              <div className="ind-head">
                <span className="ind-num" aria-hidden="true">[{it.num}]</span>
                <div className="ic-sm" aria-hidden="true"><svg viewBox="0 0 24 24" aria-hidden="true"><path d={it.icon} /></svg></div>
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