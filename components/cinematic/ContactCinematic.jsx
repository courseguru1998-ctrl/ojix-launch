"use client";
import { useState, useId } from "react";
import { motion, useReducedMotion } from "framer-motion";

const ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";
const WHATSAPP = "https://wa.me/910000000000?text=Hi%20OJIX%20%E2%80%94%20I'd%20like%20to%20discuss%20a%20software%20project.";
const EMAIL = "hello@ojix.com";

export default function ContactCinematic() {
  const baseId = useId();
  const [state, setState] = useState({ name: "", email: "", company: "", type: "Custom Platform", message: "" });
  const [status, setStatus] = useState("idle");
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
      const body = encodeURIComponent(`Name: ${state.name}\nEmail: ${state.email}\nCompany: ${state.company}\nType: ${state.type}\n\n${state.message}`);
      window.location.href = `mailto:${EMAIL}?subject=OJIX%20Inquiry&body=${body}`;
      setStatus("ok");
    }
  };

  return (
    <section id="contact" className="contact">
      <span className="sec-num" aria-hidden="true"><span className="dot" /> 07 / INITIATE</span>
      <h2>Let&apos;s <em>build.</em></h2>
      <p className="sub">Tell us what you&apos;re shipping. A senior engineer from OJIX replies within 48 hours — usually faster.</p>

      <div className="sr-only" role="status" aria-live="polite">
        {status === "ok" && "Form submitted. We will be in touch within 48 hours."}
        {status === "sending" && "Sending your message."}
      </div>

      {status === "ok" ? (
        <div className="cform" style={{ textAlign: "center" }}>
          <h3 style={{ fontSize: 28, marginBottom: 12, color: "var(--color-fg)" }}>Signal received.</h3>
          <p style={{ color: "var(--color-fg-2)" }}>We&apos;ll be in touch within 48 hours. For urgent work, ping us on WhatsApp.</p>
        </div>
      ) : (
        <motion.form
          className="cform"
          onSubmit={onSubmit}
          initial={reduced ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduced ? 0 : 0.6 }}
          noValidate
        >
          <div className="frow">
            <div className="ff">
              <label htmlFor={`${baseId}-name`}><span aria-hidden="true">//</span> NAME <span aria-hidden="true">*</span></label>
              <input id={`${baseId}-name`} type="text" required value={state.name} onChange={onChange("name")} placeholder="Your name" aria-required="true" />
            </div>
            <div className="ff">
              <label htmlFor={`${baseId}-email`}><span aria-hidden="true">//</span> EMAIL <span aria-hidden="true">*</span></label>
              <input id={`${baseId}-email`} type="email" required value={state.email} onChange={onChange("email")} placeholder="you@company.com" aria-required="true" />
            </div>
          </div>
          <div className="frow">
            <div className="ff">
              <label htmlFor={`${baseId}-company`}><span aria-hidden="true">//</span> COMPANY</label>
              <input id={`${baseId}-company`} type="text" value={state.company} onChange={onChange("company")} placeholder="Company name" />
            </div>
            <div className="ff">
              <label htmlFor={`${baseId}-type`}><span aria-hidden="true">//</span> SERVICE</label>
              <select id={`${baseId}-type`} value={state.type} onChange={onChange("type")}>
                <option>Custom Platform</option>
                <option>AI & Machine Learning</option>
                <option>Cloud & DevOps</option>
                <option>API & Integrations</option>
                <option>Data Engineering</option>
                <option>Technical Consulting</option>
                <option>Not sure yet</option>
              </select>
            </div>
          </div>
          <div className="ff">
            <label htmlFor={`${baseId}-message`}><span aria-hidden="true">//</span> PROJECT <span aria-hidden="true">*</span></label>
            <textarea id={`${baseId}-message`} rows={5} required value={state.message} onChange={onChange("message")} placeholder="What are you building? Stack, timeline, team size?" aria-required="true" />
          </div>
          <div className="f-actions">
            <button type="submit" className="btn btn-primary" disabled={status === "sending"} aria-busy={status === "sending"} data-cursor="Send">
              {status === "sending" ? "SENDING..." : "TRANSMIT"} <span className="arr" aria-hidden="true">→</span>
            </button>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn btn-secondary" data-cursor="Chat">WHATSAPP_US</a>
          </div>
        </motion.form>
      )}

      <p className="small">
        // OR_EMAIL &gt; <a href={`mailto:${EMAIL}`}>{EMAIL.toUpperCase()}</a> // BENGALURU · INDIA
      </p>
    </section>
  );
}