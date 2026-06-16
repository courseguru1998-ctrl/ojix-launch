"use client";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "0 24px",
        position: "relative",
        zIndex: 1,
      }}
    >
      <div style={{ maxWidth: 640 }}>
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            font: "400 11px 'JetBrains Mono', monospace",
            letterSpacing: "0.2em",
            color: "var(--color-fg-3)",
            marginBottom: 24,
          }}
        >
          <span style={{ color: "var(--color-accent)" }}>●</span> 404 / SIGNAL_LOST
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            fontFamily: "'Inter Tight', 'Inter', sans-serif",
            fontWeight: 500,
            fontSize: "clamp(56px, 9vw, 128px)",
            lineHeight: 0.95,
            letterSpacing: "-0.04em",
            color: "var(--color-fg)",
            marginBottom: 24,
          }}
        >
          Page not <em style={{ fontStyle: "normal", color: "var(--color-accent)" }}>found.</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            color: "var(--color-fg-2)",
            fontSize: 17,
            lineHeight: 1.6,
            marginBottom: 40,
          }}
        >
          The route you tried doesn&apos;t exist on this server. The link is broken, the page was moved, or the URL was mistyped.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}
        >
          <a href="/cinematic" className="btn btn-primary" data-cursor="Home">
            BACK_TO_HOME <span className="arr">→</span>
          </a>
          <a href="/cinematic#contact" className="btn btn-secondary" data-cursor="Talk">
            START_PROJECT
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          style={{
            marginTop: 64,
            font: "400 10px 'JetBrains Mono', monospace",
            letterSpacing: "0.2em",
            color: "var(--color-fg-3)",
          }}
        >
          // ERR_404 // OJIX // BENGALURU, INDIA
        </motion.div>
      </div>
    </div>
  );
}
