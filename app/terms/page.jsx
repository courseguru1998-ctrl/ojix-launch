import { Roboto } from "next/font/google";
import "../globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata = {
  title: "Terms of Service | OJIX",
  description: "Terms and conditions for using the OJIX website and engaging OJIX for software services.",
};

export default function TermsPage() {
  return (
    <div lang="en" className={roboto.variable} style={{ fontFamily: "'Roboto', system-ui, sans-serif", background: "#F8FAFC", minHeight: "100vh", color: "#0F172A" }}>
      <header style={{ borderBottom: "1px solid #E2E8F0", padding: "20px 0" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <a href="/" style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none", color: "#0F172A" }}>
            <span style={{ width: 4, height: 28, background: "#FF5C00" }} aria-hidden="true" />
            <span style={{ font: "500 18px 'Roboto'", letterSpacing: "0.05em" }}>OJIX</span>
          </a>
          <nav style={{ display: "flex", gap: 24, fontSize: 14 }}>
            <a href="/" style={{ color: "#475569", textDecoration: "none" }}>Home</a>
            <a href="/cinematic" style={{ color: "#475569", textDecoration: "none" }}>Cinematic</a>
            <a href="/privacy" style={{ color: "#475569", textDecoration: "none" }}>Privacy</a>
          </nav>
        </div>
      </header>

      <main style={{ maxWidth: 760, margin: "0 auto", padding: "64px 24px 96px" }}>
        <p style={{ font: "500 11px 'Roboto'", letterSpacing: "0.18em", textTransform: "uppercase", color: "#0369A1", marginBottom: 16 }}>
          LEGAL
        </p>
        <h1 style={{ font: "500 48px 'Roboto'", letterSpacing: "-0.02em", marginBottom: 16, lineHeight: 1.05 }}>
          Terms of Service
        </h1>
        <p style={{ color: "#64748B", fontSize: 14, marginBottom: 40 }}>
          Last updated: 15 June 2026
        </p>

        <Section title="1. About these terms">
          These terms govern your use of the OJIX website (ojix.com and ojix.com/cinematic). They do not govern any software development or consulting engagement — those are covered by a separate written agreement between OJIX and the client.
        </Section>

        <Section title="2. About the website">
          The OJIX website is informational. It describes our services, our work, and our team. It also lets you send us a message via the contact form. We try to keep the information on this site accurate, but we make no warranty as to its completeness or fitness for any particular purpose.
        </Section>

        <Section title="3. Acceptable use">
          You agree not to:
          <ul>
            <li>Use the site for any unlawful purpose.</li>
            <li>Attempt to gain unauthorized access to any part of the site, its servers, or its infrastructure.</li>
            <li>Probe, scan, or test the vulnerability of the site.</li>
            <li>Use the contact form to send unsolicited commercial messages, malware, or anything abusive.</li>
            <li>Scrape, mirror, or reproduce the site content at scale without our written permission.</li>
          </ul>
        </Section>

        <Section title="4. Intellectual property">
          The OJIX name, logo, the OJIX wordmark, and all content on this site (text, designs, code, photography) are owned by OJIX or our licensors. You may view the site for personal or business evaluation purposes. You may not copy, distribute, or create derivative works without our written permission.
        </Section>

        <Section title="5. Third-party content">
          The site may link to third-party websites (LinkedIn, GitHub, etc.). We are not responsible for the content, privacy practices, or availability of those sites.
        </Section>

        <Section title="6. No warranty">
          The site is provided "as is" and "as available." To the maximum extent permitted by law, we disclaim all warranties, express or implied, including warranties of merchantability, fitness for a particular purpose, and non-infringement.
        </Section>

        <Section title="7. Limitation of liability">
          To the maximum extent permitted by law, OJIX will not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of this site, even if we have been advised of the possibility of such damages.
        </Section>

        <Section title="8. Indemnification">
          You agree to indemnify and hold OJIX harmless from any claim, demand, or damage arising from your breach of these terms or your misuse of the site.
        </Section>

        <Section title="9. Governing law">
          These terms are governed by the laws of India. Any disputes will be resolved in the courts of Bengaluru, Karnataka.
        </Section>

        <Section title="10. Changes to these terms">
          We may update these terms occasionally. The "Last updated" date at the top will reflect the current version.
        </Section>

        <Section title="11. Contact">
          Questions about these terms? Email <a href="mailto:hello@ojix.com" style={{ color: "#0369A1" }}>hello@ojix.com</a>.
        </Section>

        <p style={{ marginTop: 64, fontSize: 13, color: "#64748B" }}>
          This is a placeholder document. OJIX is not a lawyer. Before publishing publicly, have this reviewed by a qualified legal professional in your jurisdiction.
        </p>
      </main>

      <footer style={{ borderTop: "1px solid #E2E8F0", padding: "32px 0" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12, fontSize: 13, color: "#64748B" }}>
          <span>© 2026 OJIX. All rights reserved.</span>
          <span>Bengaluru, India</span>
        </div>
      </footer>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <section style={{ marginBottom: 40 }}>
      <h2 style={{ font: "500 22px 'Roboto'", marginBottom: 12, color: "#0F172A" }}>{title}</h2>
      <div style={{ color: "#334155", lineHeight: 1.7, fontSize: 15 }}>
        {children}
      </div>
      <style>{`
        section ul { padding-left: 24px; margin: 8px 0; }
        section li { margin-bottom: 6px; }
        section a { color: #0369A1; }
      `}</style>
    </section>
  );
}
