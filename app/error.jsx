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
      }}
    >
      <div style={{ maxWidth: 640 }}>
        <div
          style={{
            font: "400 11px 'JetBrains Mono', monospace",
            letterSpacing: "0.2em",
            color: "#FF5C00",
            marginBottom: 24,
          }}
        >
          ● ERR_RENDER / SECTION_FAULT
        </div>
        <h1
          style={{
            fontFamily: "'Roboto', system-ui, sans-serif",
            fontWeight: 500,
            fontSize: "clamp(48px, 7vw, 96px)",
            lineHeight: 0.95,
            letterSpacing: "-0.04em",
            color: "#0F172A",
            marginBottom: 24,
          }}
        >
          Something <em style={{ fontStyle: "normal", color: "#0369A1" }}>broke.</em>
        </h1>
        <p
          style={{
            color: "#475569",
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
              background: "#F8FAFC",
              border: "1px solid #E2E8F0",
              borderRadius: 6,
              font: "400 12px 'JetBrains Mono', monospace",
              color: "#475569",
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
            data-cursor="Reset"
            style={{
              padding: "12px 20px",
              background: "#0369A1",
              color: "#fff",
              border: "none",
              borderRadius: 6,
              font: "500 12px 'Roboto', monospace",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              cursor: "pointer",
            }}
          >
            RETRY_SECTION →
          </button>
          <a
            href="/"
            data-cursor="Home"
            style={{
              padding: "12px 20px",
              background: "transparent",
              color: "#0369A1",
              border: "1px solid #0369A1",
              borderRadius: 6,
              font: "500 12px 'Roboto', monospace",
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
