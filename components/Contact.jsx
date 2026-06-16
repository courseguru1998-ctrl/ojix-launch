"use client";
import { useState, useId } from "react";
import { motion, useReducedMotion } from "framer-motion";

const ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";
const WHATSAPP = "https://wa.me/910000000000?text=Hi%20OJIX%20%E2%80%94%20I'd%20like%20to%20discuss%20a%20project.";
const EMAIL = "hello@ojix.com";

export default function Contact() {
  const baseId = useId();
  const [state, setState] = useState({ name: "", email: "", company: "", type: "Software Development", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | ok | err
  const reduced = useReducedMotion();
  const onChange = (k) => (e) => setState((s) => ({ ...s, [k]: e.target.value }));
  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(state),
      });
      if (res.ok) setStatus("ok");
      else throw new Error();
    } catch {
      // Fallback: open mailto
      const body = encodeURIComponent(`Name: ${state.name}\nEmail: ${state.email}\nCompany: ${state.company}\nType: ${state.type}\n\n${state.message}`);
      window.location.href = `mailto:${EMAIL}?subject=OJIX%20Inquiry&body=${body}`;
      setStatus("ok");
    }
  };

  return (
    <section id="contact" className="contact">
      <p className="label">Start a project</p>
      <h2>Let&apos;s build something.</h2>
      <p className="sub">Tell us what you&apos;re building. We&apos;ll tell you exactly how OJIX can help — usually within 48 hours.</p>

      <div className="sr-only" role="status" aria-live="polite">
        {status === "ok" && "Form submitted. We will be in touch within 48 hours."}
        {status === "sending" && "Sending your message."}
      </div>

      {status === "ok" ? (
        <div className="cform" style={{ textAlign: "center" }}>
          <h3 style={{ fontSize: 28, marginBottom: 12 }}>Thanks — we&apos;ll be in touch.</h3>
          <p style={{ color: "var(--color-secondary)" }}>A real human from OJIX will reply within 48 hours. For urgent stuff, ping us on WhatsApp.</p>
        </div>
      ) : (
        <motion.form
          className="cform"
          onSubmit={onSubmit}
          initial={reduced ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: reduced ? 0 : 0.5 }}
          noValidate
        >
          <div className="frow">
            <div className="ff">
              <label htmlFor={`${baseId}-name`}>Name <span aria-hidden="true">*</span></label>
              <input id={`${baseId}-name`} type="text" required value={state.name} onChange={onChange("name")} placeholder="Your name" aria-required="true" />
            </div>
            <div className="ff">
              <label htmlFor={`${baseId}-email`}>Email <span aria-hidden="true">*</span></label>
              <input id={`${baseId}-email`} type="email" required value={state.email} onChange={onChange("email")} placeholder="you@company.com" aria-required="true" />
            </div>
          </div>
          <div className="frow">
            <div className="ff">
              <label htmlFor={`${baseId}-company`}>Company</label>
              <input id={`${baseId}-company`} type="text" value={state.company} onChange={onChange("company")} placeholder="Company name" />
            </div>
            <div className="ff">
              <label htmlFor={`${baseId}-type`}>Project type</label>
              <select id={`${baseId}-type`} value={state.type} onChange={onChange("type")}>
                <option>Software Development</option>
                <option>AI & IT Services</option>
                <option>Mechanical Engineering</option>
                <option>Automobile Services</option>
                <option>Industrial Automation</option>
                <option>Consulting & Technical</option>
                <option>Not sure yet</option>
              </select>
            </div>
          </div>
          <div className="ff">
            <label htmlFor={`${baseId}-message`}>Tell us about the project <span aria-hidden="true">*</span></label>
            <textarea id={`${baseId}-message`} rows={5} required value={state.message} onChange={onChange("message")} placeholder="What are you building? What problem are you solving? Any constraints?" aria-required="true" />
          </div>
          <div className="f-actions">
            <button type="submit" className="btn btn-primary" disabled={status === "sending"} aria-busy={status === "sending"} data-cursor="Send">
              {status === "sending" ? "Sending..." : "Send inquiry"}
            </button>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn btn-secondary" data-cursor="Chat">Or WhatsApp us</a>
          </div>
        </motion.form>
      )}

      <p className="small">
        Or email us at <a href={`mailto:${EMAIL}`}>{EMAIL.toUpperCase()}</a> · Bangalore, India
      </p>
    </section>
  );
}