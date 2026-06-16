import { Roboto } from "next/font/google";
import "../globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata = {
  title: "Privacy Policy | OJIX",
  description: "How OJIX collects, uses, and protects your information.",
};

export default function PrivacyPage() {
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
            <a href="/terms" style={{ color: "#475569", textDecoration: "none" }}>Terms</a>
          </nav>
        </div>
      </header>

      <main style={{ maxWidth: 760, margin: "0 auto", padding: "64px 24px 96px" }}>
        <p style={{ font: "500 11px 'Roboto'", letterSpacing: "0.18em", textTransform: "uppercase", color: "#0369A1", marginBottom: 16 }}>
          LEGAL
        </p>
        <h1 style={{ font: "500 48px 'Roboto'", letterSpacing: "-0.02em", marginBottom: 16, lineHeight: 1.05 }}>
          Privacy Policy
        </h1>
        <p style={{ color: "#64748B", fontSize: 14, marginBottom: 40 }}>
          Last updated: 15 June 2026
        </p>

        <Section title="1. Who we are">
          OJIX ("we", "us", "our") is a software product studio registered in Bengaluru, India. We operate the websites ojix.com and the cinematic sub-site at ojix.com/cinematic. You can contact us at <a href="mailto:hello@ojix.com" style={{ color: "#0369A1" }}>hello@ojix.com</a>.
        </Section>

        <Section title="2. What information we collect">
          We collect information in two ways:
          <ul>
            <li><strong>Information you give us:</strong> When you fill in our contact form, we collect your name, email, company name, the type of project you describe, and the message you send. Nothing more.</li>
            <li><strong>Information collected automatically:</strong> When you visit our site, our hosting provider (currently Vercel) and any analytics we run may collect your IP address, browser type, operating system, referring page, and pages visited.</li>
          </ul>
        </Section>

        <Section title="3. How we use your information">
          We use the information we collect to:
          <ul>
            <li>Reply to your inquiry (the only thing we do with the data you send in the contact form).</li>
            <li>Operate, secure, and improve the website.</li>
            <li>Comply with legal obligations.</li>
          </ul>
          We do not sell your data. We do not share it with third parties for marketing.
        </Section>

        <Section title="4. Where your data goes">
          Form submissions are delivered to a private email inbox at hello@ojix.com. We do not currently use a third-party form-handling service, but if we do in future, this policy will be updated with their name and a link to their privacy policy. Hosting and infrastructure are provided by Vercel Inc. (Privacy policy: <a href="https://vercel.com/legal/privacy-policy" style={{ color: "#0369A1" }} target="_blank" rel="noopener noreferrer">vercel.com/legal/privacy-policy</a>).
        </Section>

        <Section title="5. How long we keep your data">
          Form submissions are kept in our email inbox for as long as we are in active conversation with you, and archived for up to 24 months for record-keeping. You can ask us to delete your submission at any time — see section 7.
        </Section>

        <Section title="6. Cookies and tracking">
          We do not use advertising cookies. We do not use Facebook Pixel, Google Ads, or any third-party marketing trackers. If we add analytics in future, we will use a privacy-respecting tool (Plausible or similar) that does not require a cookie banner. This page will be updated.
        </Section>

        <Section title="7. Your rights">
          You can ask us at any time to:
          <ul>
            <li>Tell you what personal data we hold about you.</li>
            <li>Correct inaccurate data.</li>
            <li>Delete your data.</li>
          </ul>
          Email <a href="mailto:hello@ojix.com" style={{ color: "#0369A1" }}>hello@ojix.com</a>. We will respond within 30 days.
        </Section>

        <Section title="8. Security">
          The site uses HTTPS. Form submissions are transmitted over TLS. We use industry-standard access controls on the email inbox that receives inquiries.
        </Section>

        <Section title="9. Changes to this policy">
          We may update this policy occasionally. The "Last updated" date at the top will reflect the current version. Material changes will be flagged by changing the date and updating the content.
        </Section>

        <Section title="10. Contact">
          Questions? Email <a href="mailto:hello@ojix.com" style={{ color: "#0369A1" }}>hello@ojix.com</a>. Postal address available on request.
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
