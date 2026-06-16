"use client";
import { motion, useReducedMotion } from "framer-motion";

const SERVICES = [
  { num: "01", title: "Custom Platforms", desc: "End-to-end web and mobile applications built for scale. React, Next.js, Node.js, PostgreSQL. Production-ready from day one.", icon: "M16 18 22 12 16 6 M8 6 2 12 8 18" },
  { num: "02", title: "AI & Machine Learning", desc: "From prompt engineering to fine-tuned LLMs, vector databases, and RAG architectures. Production AI that actually works.", icon: "M12 2a10 10 0 1 0 20 10 10 0 0 0-20 0z M12 2v4M12 18v4M4 12h4M16 12h4" },
  { num: "03", title: "Cloud & DevOps", desc: "AWS/GCP infrastructure, Terraform, Kubernetes, CI/CD pipelines, monitoring, and SRE practices. We ship and we run.", icon: "M21 16V8a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v8M4 16V8a2 2 0 0 0-2-2H1a2 2 0 0 0-2 2v8M12 4v4M12 16v4" },
  { num: "04", title: "API & Integrations", desc: "REST, GraphQL, WebSocket, and third-party integrations. We build the connective tissue that makes systems talk.", icon: "M4 4h16v16H4z M8 8h3v3H8z M13 8h3v3M13 13h3v3" },
  { num: "05", title: "Data Engineering", desc: "ETL pipelines, data lakes, real-time analytics, and observability stacks. Your data, accessible and actionable.", icon: "M3 3v18h18V3H3zM9 9h2v2H9zM13 9h2v2M9 13h2v2M13 13h2v2M5 7l2 2 2-2m3 2 2-2m3-8 8-2-2" },
  { num: "06", title: "Technical Consulting", desc: "Architecture audits, tech roadmaps, code reviews, and team mentorship. We fix what broke and prevent what will.", icon: "M9 11l3 3L22 4 M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" },
];

export default function ServicesCinematic() {
  const reduced = useReducedMotion();
  return (
    <section id="services">
      <div className="shell">
        <div className="section-head">
          <div>
            <span className="sec-num"><span className="dot">●</span> 02 / SERVICES</span>
            <p className="label">What we ship</p>
          </div>
          <div>
            <h2 className="sec">One team. <em>Six disciplines.</em><br />All <span className="cyan">software.</span></h2>
            <p className="sec-sub">Six disciplines. All software. The people who design, build, and run your product sit on the same team — no agencies, no subcontractors, no handoffs.</p>
          </div>
        </div>
        <div className="svc-grid">
          {SERVICES.map((s, i) => (
            <motion.a
              key={i}
              href="#contact"
              data-cursor="Open"
              className="svc"
              aria-label={`Inquire about ${s.title}`}
              initial={reduced ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: reduced ? 0 : 0.5, delay: reduced ? 0 : i * 0.05, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="svc-head">
                <span className="num">[{s.num}]</span>
                <div className="ic"><svg viewBox="0 0 24 24" aria-hidden><path d={s.icon} /></svg></div>
              </div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <div className="go">VIEW_CASES →</div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}