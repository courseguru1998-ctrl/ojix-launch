"use client";
import { motion, useReducedMotion } from "framer-motion";

const SERVICES = [
  {
    title: "Software Development",
    description: "Custom platforms, APIs, and cloud systems built for industrial scale.",
    icon: "M16 18 22 12 16 6 M8 6 2 12 8 18",
  },
  {
    title: "AI & IT Services",
    description: "Machine learning, computer vision, and IT infrastructure that runs your operations.",
    icon: "M4 4h16v16H4z M9 9h6v6H9z M9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3",
  },
  {
    title: "Mechanical Engineering",
    description: "Precision design and fabrication from concept to component.",
    icon: "M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.2 2.2M16.9 16.9l2.2 2.2M19.1 4.9l-2.2 2.2M7.1 16.9l-2.2 2.2",
  },
  {
    title: "Automobile Services",
    description: "Fleet diagnostics, EV integration, and automotive system engineering.",
    icon: "M5 17H3v-6l2-5h12l3 5v6h-2 M10 17h5 M3 11h18 M7.5 15a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z M17.5 15a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z",
  },
  {
    title: "Industrial Automation",
    description: "Smart factories, robotics, SCADA, and IoT connectivity.",
    icon: "M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83",
  },
  {
    title: "Consulting & Technical",
    description: "Transformation roadmaps and technical leadership for complex projects.",
    icon: "M9 11l3 3L22 4 M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11",
  },
];

export default function Services() {
  const reduced = useReducedMotion();
  return (
    <section id="services">
      <div className="shell">
        <p className="label">What we do</p>
        <h2 className="sec">One team. Six disciplines. Zero gaps.</h2>
        <p className="sec-sub">From cloud systems to factory floors, OJIX owns the full stack — software, AI, mechanical, and automation — without hand-offs.</p>
        <div className="svc-grid">
          {SERVICES.map((s, i) => (
            <motion.a
              key={i}
              href="#contact"
              data-cursor="Open"
              className="svc"
              aria-label={`Inquire about ${s.title}`}
              initial={reduced ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: reduced ? 0 : 0.5, delay: reduced ? 0 : i * 0.06, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="num">SRV / 0{i + 1}</div>
              <div className="ic">
                <svg viewBox="0 0 24 24" aria-hidden>
                  <path d={s.icon} />
                </svg>
              </div>
              <h3>{s.title}</h3>
              <p>{s.description}</p>
              <div className="go">Explore →</div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
