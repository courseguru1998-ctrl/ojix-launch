const SITE_URL = "https://ojix.com";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/cinematic"],
        disallow: ["/api/", "/_next/"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
