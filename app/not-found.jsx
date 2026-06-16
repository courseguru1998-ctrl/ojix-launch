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
            color: "#6B7280",
            marginBottom: 24,
          }}
        >
          <span style={{ color: "#FF5C00" }}>●</span> 404 / SIGNAL_LOST
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            fontFamily: "'Roboto', system-ui, sans-serif",
            fontWeight: 500,
            fontSize: "clamp(56px, 9vw, 128px)",
            lineHeight: 0.95,
            letterSpacing: "-0.04em",
            color: "#0F172A",
            marginBottom: 24,
          }}
        >
          Page not <em style={{ fontStyle: "normal", color: "#0369A1" }}>found.</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            color: "#475569",
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
          <a
            href="/"
            className="btn-primary"
            data-cursor="Home"
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "12px 20px",
              background: "#0369A1",
              color: "#fff",
              borderRadius: 6,
              textDecoration: "none",
              fontWeight: 500,
              fontSize: 14,
            }}
          >
            BACK_TO_HOME →
          </a>
          <a
            href="/#contact"
            className="btn-secondary"
            data-cursor="Talk"
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "12px 20px",
              background: "transparent",
              color: "#0369A1",
              border: "1px solid #0369A1",
              borderRadius: 6,
              textDecoration: "none",
              fontWeight: 500,
              fontSize: 14,
            }}
          >
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
            color: "#94A3B8",
          }}
        >
          // ERR_404 // OJIX // BENGALURU, INDIA
        </motion.div>
      </div>
    </div>
  );
}