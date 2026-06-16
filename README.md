# OJIX

Two-route Next.js site. The default route is a B2B engineering studio page (light theme). The second route at `/cinematic` is a dark, terminal-voice "software that ships" site. Both share fonts and have full a11y, mobile responsiveness, and SEO.

## Stack
Next.js 14 (App Router) · React 18 · Framer Motion · Three.js (only on `/` for the B2B hero particle)

## Run
```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # production server
```

## Routes
| Path | Theme | Purpose |
|---|---|---|
| `/` | Light, Roboto | B2B engineering studio (software, AI, mechanical, automation) |
| `/cinematic` | Dark, Inter Tight + JetBrains Mono | Software-studio product pitch |
| `/privacy` | Light | Privacy policy |
| `/terms` | Light | Terms of service |
| `/sitemap.xml` | — | Auto-generated sitemap |
| `/robots.txt` | — | Auto-generated robots |
| `/og-cinematic.svg` | — | OG image for the cinematic route |

## Before launch (you need to do these)
1. **Contact form backend:** both `components/Contact.jsx` and `components/cinematic/ContactCinematic.jsx` POST to `https://formspree.io/f/YOUR_FORM_ID`. Replace with a real endpoint (Resend, Formspree, your own `/api/contact`).
2. **Real WhatsApp number:** in both Contact components, replace `910000000000` with your actual phone number.
3. **OG image domain:** `app/cinematic/layout.jsx` and `app/sitemap.js` use `https://ojix.com` as the base URL. Change to your real domain before going live.
4. **Privacy / Terms legal review:** both pages are placeholders. Have a lawyer review before publishing.

## Deploy
This project is ready to deploy to Vercel with zero config:
1. Push to GitHub
2. Import on vercel.com/new
3. Add your custom domain
4. Done

The contact form will work as soon as you wire it to a real backend (step 1 above).

<!-- last build: Tue Jun 16 16:36:46 IST 2026 -->
