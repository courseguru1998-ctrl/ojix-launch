import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata = {
  title: "OJIX | Engineering & Technology Solutions",
  description:
    "OJIX delivers integrated software, AI, mechanical engineering, and industrial automation — one team, end to end.",
  openGraph: {
    title: "OJIX | Intelligence, engineered.",
    description: "Software, AI, engineering, automation — one integrated team.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={roboto.variable}>
      <head>
        <link
          rel="icon"
          href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' fill='%230F172A'/%3E%3Crect x='30' y='10' width='4' height='44' fill='%23FF5C00'/%3E%3C/svg%3E"
        />
      </head>
      <body style={{ fontFamily: "'Roboto', system-ui, -apple-system, sans-serif" }}>
        <a href="#main" className="skip">Skip to content</a>
        <noscript>
          <div style={{ padding: 24, background: "#0F172A", color: "#F8FAFC", textAlign: "center", fontFamily: "system-ui, sans-serif" }}>
            This site uses JavaScript for animations. The B2B content is still readable — please continue browsing.
          </div>
        </noscript>
        {children}
      </body>
    </html>
  );
}
