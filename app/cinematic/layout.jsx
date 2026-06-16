import { Inter_Tight, Inter, JetBrains_Mono } from "next/font/google";
import "./globals-cinematic.css";

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter-tight",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
  display: "swap",
});

const SITE_URL = "https://ojix.com";
const PAGE_PATH = "/cinematic";

export const metadata = {
  title: "OJIX | Software that ships. Code that scales. AI that works.",
  description: "OJIX is a software product studio building custom platforms, AI systems, cloud infrastructure, and DevOps. Senior-only engineering. Production-grade from day one. Based in Bengaluru, India.",
  keywords: [
    "software studio",
    "custom platform development",
    "AI systems",
    "machine learning engineering",
    "cloud infrastructure",
    "DevOps",
    "API development",
    "data engineering",
    "production engineering",
    "OJIX",
  ],
  authors: [{ name: "OJIX" }],
  creator: "OJIX",
  publisher: "OJIX",
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: `${SITE_URL}${PAGE_PATH}`,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${SITE_URL}${PAGE_PATH}`,
    siteName: "OJIX",
    title: "OJIX | Software that ships. Code that scales. AI that works.",
    description: "Software product studio building custom platforms, AI systems, cloud infrastructure, and DevOps. Production-grade from day one.",
    images: [
      {
        url: "/og-cinematic.svg",
        width: 1200,
        height: 630,
        alt: "OJIX — Software Studio",
        type: "image/svg+xml",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OJIX | Software Studio",
    description: "Custom platforms, AI systems, cloud infrastructure, and DevOps. Production-grade from day one.",
    images: ["/og-cinematic.svg"],
    creator: "@ojix",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

export const viewport = {
  themeColor: "#0A0A0E",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "OJIX",
  url: SITE_URL,
  logo: `${SITE_URL}/og-cinematic.svg`,
  description: "Software product studio building custom platforms, AI systems, cloud infrastructure, and DevOps.",
  foundingDate: "2018",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bengaluru",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    email: "hello@ojix.com",
    availableLanguage: ["English"],
  },
  sameAs: [
    "https://linkedin.com/company/ojix",
    "https://twitter.com/ojix",
    "https://github.com/ojix",
  ],
  knowsAbout: [
    "Custom Software Development",
    "Artificial Intelligence",
    "Machine Learning",
    "Cloud Infrastructure",
    "DevOps",
    "API Development",
    "Data Engineering",
  ],
};

export default function CinematicLayout({ children }) {
  return (
    <div
      className={`${interTight.variable} ${inter.variable} ${jetbrains.variable}`}
      style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
    >
      <a href="#main" className="skip">Skip to content</a>
      <noscript>
        <div style={{ padding: 24, background: "#0A0A0E", color: "#F5F5F4", textAlign: "center", fontFamily: "system-ui, sans-serif" }}>
          The OJIX cinematic site requires JavaScript. <a href="/" style={{ color: "#FF5C00" }}>Switch to the light site</a>.
        </div>
      </noscript>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </div>
  );
}