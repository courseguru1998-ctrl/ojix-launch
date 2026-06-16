"use client";
export default function Error({ error, reset }) {
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
        <div
          style={{
            font: "400 11px 'JetBrains Mono', monospace",
            letterSpacing: "0.2em",
            color: "var(--color-accent)",
            marginBottom: 24,
          }}
        >
          ● ERR_RENDER / SECTION_FAULT
        </div>
        <h1
          style={{
            fontFamily: "'Inter Tight', 'Inter', sans-serif",
            fontWeight: 500,
            fontSize: "clamp(48px, 7vw, 96px)",
            lineHeight: 0.95,
            letterSpacing: "-0.04em",
            color: "var(--color-fg)",
            marginBottom: 24,
          }}
        >
          Something <em style={{ fontStyle: "normal", color: "var(--color-accent)" }}>broke.</em>
        </h1>
        <p
          style={{
            color: "var(--color-fg-2)",
            fontSize: 17,
            lineHeight: 1.6,
            marginBottom: 12,
          }}
        >
          A section of this page failed to render. The rest of the site is unaffected.
        </p>
        {process.env.NODE_ENV === "development" && error?.message ? (
          <pre
            style={{
              marginTop: 24,
              marginBottom: 32,
              padding: 16,
              background: "var(--color-bg-2)",
              border: "1px solid var(--color-border)",
              borderRadius: 6,
              font: "400 12px 'JetBrains Mono', monospace",
              color: "var(--color-fg-2)",
              textAlign: "left",
              whiteSpace: "pre-wrap",
              wordBreak: "break-word",
              maxHeight: 240,
              overflow: "auto",
            }}
          >
            {error.message}
          </pre>
        ) : null}
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", marginTop: 32 }}>
          <button
            onClick={reset}
            className="btn btn-primary"
            data-cursor="Reset"
            style={{
              padding: "12px 20px",
              background: "var(--color-accent)",
              color: "#fff",
              border: "none",
              borderRadius: 4,
              font: "500 12px 'JetBrains Mono', monospace",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              cursor: "pointer",
            }}
          >
            RETRY_SECTION →
          </button>
          <a
            href="/cinematic"
            className="btn btn-secondary"
            data-cursor="Home"
            style={{
              padding: "12px 20px",
              background: "transparent",
              color: "var(--color-accent)",
              border: "1px solid var(--color-accent)",
              borderRadius: 4,
              font: "500 12px 'JetBrains Mono', monospace",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              textDecoration: "none",
            }}
          >
            RELOAD_PAGE
          </a>
        </div>
      </div>
    </div>
  );
}
